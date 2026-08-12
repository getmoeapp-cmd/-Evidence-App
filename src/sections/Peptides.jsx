import React, { useState, useMemo, useRef } from "react";
import { C } from "../theme.js";
import Ridges from "../components/Ridges.jsx";
import Label from "../components/Label.jsx";
import PeptideCard from "./PeptideCard.jsx";
import Stub from "./Stub.jsx";
import LevelKey, { LevelKeyTrigger } from "../components/LevelKey.jsx";
import { CATALOG, CLASSES, FAMILIES, FAMILY_ORDER } from "../data/catalog.js";

const LEVEL_ORDER = ["A", "B", "C", "D", "NO_DATA"];

// Normaliza acentos para que "epitalon" encuentre "Epitalón".
const norm = (s) => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();


// Un selector nativo por filtro. En móvil abre la rueda de iOS: no esconde
// opciones fuera de pantalla como hacía la fila deslizable.
function Picker({ label, value, onChange, options, active }) {
  return (
    <label style={{ display: "block", minWidth: 0 }}>
      <span
        style={{
          display: "block", fontFamily: "'Jost', sans-serif", fontSize: 9.5,
          letterSpacing: "0.16em", textTransform: "uppercase",
          color: C.tabIdle, marginBottom: 5, fontWeight: 500,
        }}
      >
        {label}
      </span>
      <div style={{ position: "relative" }}>
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="ev-input ev-picker"
          style={{
            width: "100%", appearance: "none", WebkitAppearance: "none",
            padding: "12px 34px 12px 13px", borderRadius: 3, cursor: "pointer",
            fontFamily: "'Jost', sans-serif", fontSize: 13, letterSpacing: "0.03em",
            fontWeight: 500,
            border: `1px solid ${active ? C.ink : C.chipBorder}`,
            background: active ? C.ink : "#FFF",
            color: active ? C.paper : C.inkDeep,
          }}
        >
          {options.map((o) => (
            <option key={o.value} value={o.value} style={{ background: "#FFF", color: C.inkDeep }}>
              {o.label}
            </option>
          ))}
        </select>
        <span
          aria-hidden="true"
          style={{
            position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)",
            pointerEvents: "none", fontSize: 10, color: active ? C.paper : C.tabIdle, lineHeight: 1,
          }}
        >
          ▾
        </span>
      </div>
    </label>
  );
}

export default function Peptides({ full, lang, t }) {
  const [openSlug, setOpenSlug] = useState(null);
  const [q, setQ] = useState("");
  const [level, setLevel] = useState("all");
  const [family, setFamily] = useState("all");
  const [keyOpen, setKeyOpen] = useState(false);
  const searching = q.trim().length > 0;
  const anchorRef = useRef(null);

  // Al enfocar el buscador, subir el campo al borde superior para que el
  // teclado no tape los resultados. El retraso espera a que el teclado suba.
  const liftToTop = () => {
    setTimeout(() => {
      anchorRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 320);
  };

  const rows = useMemo(() => {
    const needle = norm(q.trim());
    return CATALOG.filter((e) => {
      const haystack = [e.name, e.alt, CLASSES[lang][e.cls], ...(e.aliases || [])].map(norm).join(" ");
      const matchQ = !needle || needle.split(/\s+/).every((w) => haystack.includes(w));
      const matchL = level === "all" || e.level === level;
      const matchF = family === "all" || e.family === family;
      return matchQ && matchL && matchF;
    });
  }, [q, level, family, lang]);

  const entry = openSlug ? CATALOG.find((e) => e.slug === openSlug) : null;
  const fullRecord = openSlug ? full.find((p) => p.slug === openSlug) : null;

  if (entry) {
    return (
      <>
        <button
          className="ev-btn"
          onClick={() => setOpenSlug(null)}
          style={{ fontFamily: "'Jost', sans-serif", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", padding: "8px 13px", border: `1px solid ${C.rule}`, background: "transparent", color: C.muted, cursor: "pointer", borderRadius: 2, marginBottom: 26 }}
        >
          ← {t.search.back}
        </button>
        {fullRecord ? (
          <PeptideCard p={fullRecord} t={t} />
        ) : (
          <Stub entry={entry} lang={lang} t={t} catalog={CATALOG} onOpen={setOpenSlug} />
        )}
      </>
    );
  }

  return (
    <>
      <Label color={C.ink}>{t.catalog.title}</Label>
      {!searching && (
        <div style={{ fontSize: 13, color: C.muted, marginTop: 6, maxWidth: 620, lineHeight: 1.5 }}>{t.catalog.intro}</div>
      )}

      <div ref={anchorRef} style={{ scrollMarginTop: 12 }} />

      <div className={searching ? "ev-searchbar ev-searchbar-on" : "ev-searchbar"} style={{ marginTop: searching ? 10 : 20 }}>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder={t.search.placeholder}
          type="search"
          onFocus={liftToTop}
          autoComplete="off"
          autoCorrect="off"
          spellCheck={false}
          className="ev-input"
          style={{ width: "100%", padding: "13px 14px", border: `1px solid ${C.chipBorder}`, borderRadius: 3, background: "#FFF", fontSize: 16, color: C.inkDeep, fontFamily: "inherit" }}
        />

        <div className="ev-filters" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: 8 }}>
          <Picker
            label={t.families.label}
            value={family}
            onChange={setFamily}
            active={family !== "all"}
            options={["all", ...FAMILY_ORDER].map((f) => ({ value: f, label: FAMILIES[lang][f] }))}
          />
          <Picker
            label={t.catalog.levelLabel}
            value={level}
            onChange={setLevel}
            active={level !== "all"}
            options={[{ value: "all", label: t.catalog.allLevels }, ...LEVEL_ORDER.map((l) => ({ value: l, label: t.levels[l].label }))]}
          />
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, marginTop: searching ? 14 : 20, flexWrap: "wrap" }}>
        <div style={{ fontSize: 12, color: C.tabIdle }}>{t.catalog.count(rows.length)}</div>
        <LevelKeyTrigger onClick={() => setKeyOpen(true)} label={t.levelKey.trigger} />
      </div>

      <LevelKey open={keyOpen} onClose={() => setKeyOpen(false)} t={t} />

      <div style={{ marginTop: 4 }}>
        {rows.length === 0 && <div style={{ padding: "34px 0", color: C.muted, fontSize: 14.5 }}>{t.search.empty}</div>}
        {rows.map((e) => {
          const ready = full.some((p) => p.slug === e.slug);
          return (
            <button
              key={e.slug}
              onClick={() => setOpenSlug(e.slug)}
              className="ev-row"
              style={{ width: "100%", textAlign: "left", display: "grid", gridTemplateColumns: "minmax(0,1fr) 92px 112px", gap: 14, alignItems: "center", padding: "15px 8px", borderTop: `1px solid ${C.rule}`, background: "transparent", border: "none", borderTopStyle: "solid", borderTopWidth: 1, borderTopColor: C.rule, cursor: "pointer", fontFamily: "inherit" }}
            >
              <div style={{ minWidth: 0 }}>
                <div style={{ fontSize: 16, color: C.inkDeep, lineHeight: 1.3, display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                  {e.name}
                  {!ready && <span style={{ fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: C.muted, border: `1px solid ${C.rule}`, borderRadius: 2, padding: "2px 5px", fontFamily: "'Jost', sans-serif" }}>{t.stub.badge}</span>}
                </div>
                <div style={{ fontSize: 12, color: C.muted, marginTop: 3 }}>{CLASSES[lang][e.cls]}</div>
              </div>
              {e.level ? (
                <Ridges level={e.level} width={92} height={26} weight={1.2} animate={false} />
              ) : (
                <div style={{ fontSize: 11, color: C.muted, fontStyle: "italic" }}>—</div>
              )}
              <div style={{ textAlign: "right", fontFamily: "'Jost', sans-serif", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: e.level === "NO_DATA" || !e.level ? C.muted : C.ink }}>
                {e.level ? t.levels[e.level].label : FAMILIES[lang].mezcla}
              </div>
            </button>
          );
        })}
      </div>
    </>
  );
}
