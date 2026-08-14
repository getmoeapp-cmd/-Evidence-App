# -*- coding: utf-8 -*-
"""Parser bilingüe de fichas Evidence. Maneja compuestos y mezclas."""
import re, json, os

import os as _os
ROOT = _os.environ.get("FICHAS_ROOT") or _os.path.join(_os.path.dirname(_os.path.abspath(__file__)), "..", "fichas-evidence")

SLUG = {"semaglutide":"semaglutida", "ss-31-elamipretide":"ss-31", "wolverine-stack":"wolverine"}

SEC = {  # clave -> fragmentos que la identifican, en los dos idiomas
 "science":   ["EJE CIENTÍFICO", "SCIENTIFIC AXIS"],
 "community": ["REPORTE COMUNITARIO", "COMMUNITY REPORTING"],
 "ceiling":   ["TECHO ESTUDIADO", "STUDIED CEILING"],
 "escal":     ["CÓMO SE LLEGÓ", "CÓMO SE USA", "CÓMO SE ESTUDIÓ", "HOW THAT DOSE", "HOW IT'S USED", "HOW IT WAS STUDIED"],
 "signal":    ["SEÑAL COMUNITARIA", "COMMUNITY SIGNAL"],
 "claims":    ["LO QUE SE AFIRMA", "WHAT'S CLAIMED"],
 "reports":   ["LO QUE REPORTA LA GENTE", "WHAT PEOPLE REPORT"],
 "source":    ["LA FUENTE", "THE SOURCE"],
 "safety":    ["CONTRAINDICACION", "CONTRAINDICATION"],
 "reg":       ["ESTATUS REGULATORIO", "REGULATORY STATUS"],
 "madeof":    ["DE QUÉ ESTÁ HECHA", "WHAT IT'S MADE OF"],
 "whyblend":  ["POR QUÉ IMPORTA MEZCLAR", "WHY BLENDING MATTERS"],
 "video":     ["OPINIÓN EN VIDEO", "VIDEO OPINION", "COMENTARIO CLÍNICO", "CLINICAL COMMENTARY"],
}

def sections(text):
    out, cur, buf = {}, "_head", []
    for line in text.split("\n"):
        m = re.match(r"^##\s+(.+?)\s*$", line)
        if m:
            out.setdefault(cur, "\n".join(buf).strip()); cur = m.group(1).strip().upper(); buf = []
        else: buf.append(line)
    out.setdefault(cur, "\n".join(buf).strip())
    named = {"_head": out.get("_head","")}
    for key, frags in SEC.items():
        for h, body in out.items():
            if any(f in h for f in frags):
                named[key] = named.get(key, "") + ("\n" if key in named else "") + body
    return named

def level_of(tag):
    t = tag.upper()
    if "NO LEVEL" in t or "SIN NIVEL" in t: return None
    if "NO DEMOSTRADO" in t or "NOT SHOWN" in t or "NOT DEMONSTRATED" in t: return "NOT_SHOWN"
    m = re.search(r"(?:NIVEL|LEVEL)\s+([ABCD])\b", t)
    if m: return m.group(1)
    if "SIN DATO" in t or "NO DATA" in t or "SIN EVIDENCIA" in t: return "NO_DATA"
    return "NO_DATA"

def scrub(s):
    s = re.sub(r"→\s*\[.*?\]", "", s or "")
    s = s.replace("**", "").replace("→", "").strip()
    s = re.sub(r"^\s*[—–-]\s*", "", s)
    s = re.sub(r"\s*-{2,}\s*", " ", s)
    s = re.sub(r"\s{2,}", " ", s)
    return s.strip(" ·,")

def bold_blocks(txt):
    return [(m.group(1).strip(), " ".join(x.strip() for x in m.group(2).strip().split("\n") if x.strip()))
            for m in re.finditer(r"^\*\*(.+?)\*\*\s*\n?(.*?)(?=\n\*\*|\n---|\n##|\Z)", txt, re.M | re.S)]

def split_tag(headline):
    parts = re.split(r"\s+[—–]\s+(?=NIVEL|LEVEL|SIN|NO |NOT |MECANISMO|PLAUSIBLE|REINFORCED|CAUTELA)", headline, maxsplit=1)
    return (parts[0].strip().strip('"“”'), parts[1].strip() if len(parts) > 1 else headline)

def parse(path, lang):
    raw = open(path, encoding="utf-8").read()
    L = raw.split("\n")
    cls, name = L[0].lstrip("# ").strip(), L[1].lstrip("# ").strip()
    S = sections(raw)
    head = S["_head"]

    summ = []
    for l in L[2:]:
        if l.startswith("**") or l.startswith("---"): break
        if l.strip(): summ.append(l.strip())
    blocks = bold_blocks(head)
    lvl_b = [b for b in blocks if re.search(r"NIVEL|LEVEL|NO DEMOSTRADO|NOT SHOWN|SIN NIVEL|NO LEVEL|SIN DATO|NO DATA", b[0].upper())]
    level = level_of(lvl_b[0][0]) if lvl_b else "NO_DATA"
    note = " · ".join(scrub(t) + (" — " + scrub(b) if b else "") for t, b in lvl_b)
    extra = [scrub(l) for l in head.split("\n") if l.strip() and not l.startswith("**") and scrub(l) not in summ]
    summary = " ".join(summ)

    is_blend = level is None

    # techo
    ceiling, esc = {}, S.get("escal", "")
    tech = S.get("ceiling", "")
    if tech:
        dm = re.search(r"\*\*([\d.,]+\s*(?:mg|mcg|µg|g|UI|IU)[^*]*)\*\*", tech)
        if dm and not re.search(r"NO EXISTE|NO CEILING|NOT EXIST", tech.upper()):
            ceiling["state"] = "established"; ceiling["dose"] = scrub(dm.group(1))
            after = [x.strip() for x in tech.split(dm.group(0), 1)[1].strip().split("\n") if x.strip()]
            first = after[0] if after else ""
            if "·" in first:
                a, b = first.split("·", 1); ceiling["frequency"], ceiling["indication"] = scrub(a), scrub(b)
            else: ceiling["frequency"] = scrub(first)
            rest = " ".join(scrub(x) for x in after[1:])
            if rest: ceiling["altNote"] = rest
            steps = [x.strip() for x in re.split(r"\s*(?:→|->)\s*", esc.split("\n")[0].strip()) if re.fullmatch(r"[\d.,]+", x.strip())]
            if steps: ceiling["steps"] = steps
            sched = [scrub(l) for l in esc.split("\n") if l.strip() and not re.fullmatch(r"[\d.,\s→>-]+", l.strip())]
            if sched: ceiling["schedule"] = sched[0]
            if len(sched) > 1: ceiling["note"] = " ".join(sched[1:])
            # Sin sección de escalada, la nota del propio techo hace de pauta.
            if not ceiling.get("schedule") and ceiling.get("altNote"):
                ceiling["schedule"] = ceiling.pop("altNote")
        else:
            body = " ".join(scrub(l) for l in tech.split("\n") if l.strip())
            has_dose = re.search(r"\d+\s*[–-]\s*\d+\s*(mg|mcg|µg|UI|IU)|\d+\s*(mg|mcg|µg|UI|IU)", body)
            # Solo cuenta como "sin techo" si la ficha lo dice del techo mismo —
            # no cuando dice que no hay una dosis *validada* pese a haber rangos.
            neg = re.search(r"BORDE DEL MAPA|EDGE OF THE MAP|NO EXISTE TECHO|NO CEILING|"
                            r"NO EXISTE EN HUMANOS|DOES NOT EXIST IN HUMANS", body.upper())
            ceiling["state"] = "range" if (has_dose and not neg) else "none"
            ceiling["note"] = body
        cats = []
        cm = re.search(r"(?:rastrear|track|Categorías|Categories)[^:]*:\s*(.+)", S.get("signal",""), re.S)
        if cm: cats = [scrub(c) for c in re.split(r"\s*·\s*", cm.group(1).split("\n")[0]) if scrub(c)]
        ceiling["adverse"] = {"pending": True, "categories": cats or ([] if is_blend else ["dosis por encima de lo estudiado" if lang=="es" else "use above what was studied"])}

    claims = []
    for h, b in bold_blocks(S.get("claims", "")):
        text, tag = split_tag(h)
        claims.append({"text": scrub(text), "level": level_of(tag), "n": 0, "nh": 0, "note": scrub(b)})

    study = None
    src = S.get("source", "")
    if src:
        def blk(*labels):
            for lab in labels:
                m = re.search(r"\*\*" + lab + r"[^*]*\*\*\s*\n(.*?)(?=\n\*\*|\Z)", src, re.S)
                if m: return " ".join(x.strip() for x in m.group(1).strip().split("\n") if x.strip())
            return ""
        plain = blk("EN LENGUAJE SENCILLO", "IN PLAIN LANGUAGE", "PLAIN LANGUAGE")
        lims = blk("LIMITACIONES", "LIMITATIONS")
        cm = re.search(r"\*\*(?:CITA|CITATION|ORIGINAL)[^*]*\*\*\s*\n(.*?)(?=\n\*\*|\n\[|\Z)", src, re.S)
        lines = [scrub(x) for x in cm.group(1).strip().split("\n") if scrub(x)] if cm else []
        if plain or lines:
            year, n, meta = "", "", []
            for l in lines[1:]:
                ym = re.search(r"\b(19|20)\d{2}\b", l)
                if re.search(r"(participant|paciente|patient|sujeto|persona)", l, re.I) and not n: n = l
                elif ym and not year:
                    year = ym.group(0); meta.append(re.sub(r",?\s*\b(19|20)\d{2}\b", "", l).strip(" ·,"))
                else: meta.append(l)
            study = {"title": lines[0] if lines else "", "journal": " · ".join(x for x in meta if x) or "—",
                     "year": year, "n": n, "plain": plain, "limits": lims}

    safety, sf = [], S.get("safety", "")
    for h, b in bold_blocks(sf):
        text, tag = split_tag(h); up = (h + " " + b).upper()
        if re.search(r"NO USAR|DO NOT USE|CONTRAINDICAD", up): kind = "absolute"
        elif re.search(r"INTERACC|INTERACTION", up): kind = "interaction"
        elif re.search(r"VIGILANCIA|UNDER WATCH|SEÑAL|SIGNAL|SIN DATO|NO DATA|CAUTELA|CAUTION", up): kind = "watch"
        else: kind = "relative"
        d = b.lower()
        if re.search(r"etiqueta|ficha técnica|label", d): origin = "label"
        elif re.search(r"exclusión|exclusion|ensayo|trial", d): origin = "trial"
        elif re.search(r"report|vigilanc|post-", d): origin = "pharmacovigilance"
        else: origin = "mechanism"
        e = {"kind": kind, "text": scrub(text), "origin": origin}
        if scrub(b): e["detail"] = scrub(b)
        safety.append(e)
    lead = [scrub(l) for l in sf.split("\n\n")[0].split("\n") if l.strip() and not l.startswith("**")]
    safety_note = " ".join(lead) if lead and not sf.strip().startswith("**") else ""

    reg, rg = [], S.get("reg", "")
    for m in re.finditer(r"^\*\*(.+?)\*\*\s*[—–-]\s*(.+?)(?=\n\*\*|\Z)", rg, re.M | re.S):
        h = m.group(1).strip(); st = " ".join(x.strip() for x in m.group(2).strip().split("\n") if x.strip())
        country, agency = (h.rsplit("·", 1) if "·" in h else (h, ""))
        low = st.lower()
        tone = "ok" if re.search(r"aprobad|approved|registro sanitario|authoriz|legal", low) and not re.search(r"no aprobad|not approved|sin registro|no authoriz|not authoriz", low) \
               else ("alert" if re.search(r"no aprobad|not approved|prohibid|prohibit|restring|restrict", low) else "grey")
        reg.append({"country": scrub(country).title() if scrub(country).isupper() else scrub(country),
                    "agency": scrub(agency), "status": scrub(st), "tone": tone})
    pre = rg.split("**")[0].strip()
    reg_note = " ".join(scrub(l) for l in pre.split("\n") if l.strip()) if pre else ""

    # Opinión en video: comentario clínico de médicos, contrastado con la ficha.
    # Formato: **Dr. X — Canal (año)** / línea(s) de fuente / viñetas:
    #   - afirmación → [coincide|excede|contradice] nota
    video, vd = [], S.get("video", "")
    for _m in re.finditer(r"^\*\*(.+?)\*\*\s*\n(.*?)(?=\n\*\*|\Z)", vd, re.M | re.S):
        h, b = _m.group(1).strip(), _m.group(2)  # bold_blocks aplana saltos de línea; aquí los necesitamos
        lines = [l.strip() for l in b.split("\n") if l.strip()]
        srcline = " ".join(l for l in lines if not l.startswith("-"))
        pts = []
        for l in lines:
            if not l.startswith("-"): continue
            body = l[1:].strip()
            mtag = re.search(r"\[(.+?)\]", body)
            tag = mtag.group(1).upper() if mtag else ""
            if "COINCIDE" in tag or "MATCH" in tag: rel = "matches"
            elif "CONTRADICE" in tag or "CONTRADICT" in tag: rel = "contradicts"
            elif "EXCEDE" in tag or "BEYOND" in tag or "ALLÁ" in tag: rel = "beyond"
            else: rel = None
            if "→" in body:
                text, rest = body.split("→", 1)
                note = re.sub(r"\[.*?\]", "", rest).strip()
            else:
                text, note = re.sub(r"\[.*?\]", "", body), ""
            e = {"text": scrub(text), "rel": rel}
            if scrub(note): e["note"] = scrub(note)
            pts.append(e)
        video.append({"who": scrub(split_tag(h)[0]), "source": scrub(srcline), "points": pts})

    rec = {"slug": SLUG.get(os.path.basename(path)[:-3], os.path.basename(path)[:-3]),
           "name": name, "className": cls, "level": level, "summary": summary,
           "levelNote": note, "ceiling": ceiling, "claims": claims, "study": study,
           "safety": safety, "safetyNote": safety_note, "regulatory": reg, "regulatoryNote": reg_note,
           "isBlend": is_blend}
    if video: rec["video"] = video

    if is_blend:
        rec["components"] = [{"text": scrub(split_tag(h)[0]), "levelTag": scrub(split_tag(h)[1]), "note": scrub(b)}
                             for h, b in bold_blocks(S.get("madeof", ""))]
        rec["blendNote"] = " ".join(scrub(l) for l in S.get("whyblend", "").split("\n") if l.strip())
        rec["ceiling"] = {}
    return rec

if __name__ == "__main__":
    out = {"es": {}, "en": {}}
    for lang in ("es", "en"):
        for f in sorted(os.listdir(f"{ROOT}/{lang}")):
            r = parse(f"{ROOT}/{lang}/{f}", lang)
            out[lang][r["slug"]] = r
    json.dump(out, open("parsed2.json", "w"), ensure_ascii=False, indent=1)
    es, en = out["es"], out["en"]
    print(f"ES {len(es)} · EN {len(en)}")
    bad = 0
    for s in es:
        a, b = es[s], en.get(s)
        if not b: print("falta EN:", s); bad += 1; continue
        for k in ("level",):
            if a[k] != b[k]: print(f"  ! {s}: {k} ES={a[k]} EN={b[k]}"); bad += 1
        for k in ("claims", "safety", "regulatory"):
            if len(a[k]) != len(b[k]): print(f"  ! {s}: {k} ES={len(a[k])} EN={len(b[k])}"); bad += 1
        if a["ceiling"].get("state") != b["ceiling"].get("state"):
            print(f"  ! {s}: techo ES={a['ceiling'].get('state')} EN={b['ceiling'].get('state')}"); bad += 1
    print("desajustes:", bad)
