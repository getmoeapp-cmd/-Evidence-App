import React, { useState, useMemo } from "react";
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

export default function Peptides({ full, lang, t }) {
  const [openSlug, setOpenSlug] = useState(null);
  const [q, setQ] = useState("");
  const [level, setLevel] = useState("all");
  const [family, setFamily] = useState("all");
  const [keyOpen, setKeyOpen] = useState(false);

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
      <div style={{ fontSize: 13, color: C.muted, marginTop: 6, maxWidth: 620, lineHeight: 1.5 }}>{t.catalog.intro}</div>

      <div style={{ display: "flex", gap: 8, marginTop: 20, flexWrap: "wrap" }}>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder={t.search.placeholder}
          type="search"
          className="ev-input"
          style={{ flex: "1 1 240px", minWidth: 0, padding: "11px 13px", border: `1px solid ${C.rule}`, borderRadius: 2, background: "#FFF", fontSize: 15, color: C.inkDeep, fontFamily: "inherit" }}
        />
        <select value={level} onChange={(e) => setLevel(e.target.value)} className="ev-input"
          style={{ padding: "11px 13px", border: `1px solid ${C.rule}`, borderRadius: 2, background: "#FFF", fontSize: 14, color: C.inkDeep, fontFamily: "inherit", cursor: "pointer" }}>
          <option value="all">{t.catalog.allLevels}</option>
          {LEVEL_ORDER.map((l) => <option key={l} value={l}>{t.levels[l].label}</option>)}
        </select>
      </div>

      <div style={{ display: "flex", gap: 5, marginTop: 12, flexWrap: "wrap" }}>
        {["all", ...FAMILY_ORDER].map((f) => (
          <button
            key={f}
            className="ev-btn ev-chip"
            onClick={() => setFamily(f)}
            aria-pressed={family === f}
            style={{
              fontFamily: "'Jost', sans-serif", fontSize: 11.5, letterSpacing: "0.07em", textTransform: "uppercase",
              padding: "8px 13px", borderRadius: 3, cursor: "pointer", fontWeight: 500,
              border: `1px solid ${family === f ? C.ink : C.chipBorder}`,
              background: family === f ? C.ink : "#FFFFFF",
              color: family === f ? C.paper : C.tabIdle,
            }}
          >
            {FAMILIES[lang][f]}
          </button>
        ))}
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, marginTop: 20, flexWrap: "wrap" }}>
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
