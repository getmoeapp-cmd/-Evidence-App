# -*- coding: utf-8 -*-
import json, re

ORDER = ["retatrutide","tirzepatide","semaglutida","tesamorelin","aod-9604",
         "cjc-1295","ipamorelin","sermorelin",
         "bpc-157","tb-500","ghk-cu","kpv","ll-37",
         "mots-c","ss-31","epitalon","pinealon","nad",
         "semax","selank","dsip",
         "pt-141","kisspeptin-10","thymosin-alpha-1",
         "wolverine","glow","klow"]

ALT = {
 "retatrutide":"LY3437943","tirzepatide":"Mounjaro / Zepbound","semaglutida":"Ozempic / Wegovy / Rybelsus",
 "tesamorelin":"Egrifta","aod-9604":"hGH 176-191","cjc-1295":"CJC-1295","ipamorelin":"Ipamorelin",
 "sermorelin":"GRF 1-29","bpc-157":"BPC-157","tb-500":"Thymosin beta-4 fragment","ghk-cu":"Copper peptide",
 "kpv":"α-MSH 11-13","ll-37":"Cathelicidin","mots-c":"MOTS-c","ss-31":"Elamipretide","epitalon":"Epithalon",
 "pinealon":"Pinealon","nad":"NMN / NR","semax":"ACTH 4-7 analog","selank":"Tuftsin analog",
 "dsip":"Delta Sleep-Inducing Peptide","pt-141":"Bremelanotide · Vyleesi","kisspeptin-10":"KP-10",
 "thymosin-alpha-1":"Thymalfasin · Zadaxin","wolverine":"BPC-157 + TB-500",
 "glow":"GHK-Cu + BPC-157 + TB-500","klow":"GHK-Cu + BPC-157 + TB-500 + KPV",
}

def js(v, ind=0):
    sp = "  " * ind
    if isinstance(v, str): return json.dumps(v, ensure_ascii=False)
    if isinstance(v, bool): return "true" if v else "false"
    if v is None: return "null"
    if isinstance(v, (int, float)): return str(v)
    if isinstance(v, list):
        if not v: return "[]"
        if all(isinstance(x, str) for x in v):
            return "[" + ", ".join(json.dumps(x, ensure_ascii=False) for x in v) + "]"
        return "[\n" + ",\n".join(sp + "  " + js(x, ind+1) for x in v) + "\n" + sp + "]"
    if isinstance(v, dict):
        items = [(k, x) for k, x in v.items() if x not in ("", None, [], {})]
        if not items: return "{}"
        if all(not isinstance(x, (dict, list)) for _, x in items) and len(items) <= 5:
            return "{ " + ", ".join(f"{k}: {js(x, ind)}" for k, x in items) + " }"
        return "{\n" + ",\n".join(sp + "  " + f"{k}: {js(x, ind+1)}" for k, x in items) + "\n" + sp + "}"
    raise TypeError(type(v))

d = json.load(open("parsed2.json", encoding="utf-8"))
for lang, var, path, hdr in [
    ("es", "PEPTIDOS_ES", "/home/claude/evidence-app/src/data/es.js", "Contenido en español"),
    ("en", "PEPTIDES_EN", "/home/claude/evidence-app/src/data/en.js", "English content")]:
    recs = []
    for slug in ORDER:
        r = d[lang][slug]
        rec = {"slug": slug, "name": r["name"], "altName": ALT.get(slug, r["name"]),
               "className": r["className"], "level": r["level"], "summary": r["summary"],
               "levelNote": r["levelNote"]}
        if r["isBlend"]:
            rec["isBlend"] = True
            rec["components"] = r["components"]
            rec["blendNote"] = r["blendNote"]
        else:
            rec["ceiling"] = r["ceiling"]
        rec["reports"] = {"pending": True}
        rec["safety"] = r["safety"]
        if r["safetyNote"]: rec["safetyNote"] = r["safetyNote"]
        rec["claims"] = r["claims"]
        if r["study"]: rec["study"] = r["study"]
        rec["regulatory"] = r["regulatory"]
        if r["regulatoryNote"]: rec["regulatoryNote"] = r["regulatoryNote"]
        if r.get("video"): rec["video"] = r["video"]
        rec["community"] = {"pending": True}
        recs.append(rec)
    head = (f"// {hdr} — 27 fichas (24 compuestos + 3 mezclas).\n"
            f"// Generado desde las fichas en markdown. Mismos slugs y mismo orden en los dos idiomas.\n"
            f"export const {var} = [\n")
    open(path, "w", encoding="utf-8").write(head + ",\n".join("  " + js(r, 1) for r in recs) + ",\n];\n")
    print(f"{path.split('/')[-1]}: {len(recs)} fichas")
