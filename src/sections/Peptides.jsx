import React, { useState, useMemo } from "react";
import { C } from "../theme.js";
import Ridges from "../components/Ridges.jsx";
import Label from "../components/Label.jsx";
import PeptideCard from "./PeptideCard.jsx";

const LEVEL_ORDER = ["A", "B", "C", "D", "NO_DATA"];

export default function Peptides({ list, t }) {
  const [openSlug, setOpenSlug] = useState(null);
  const [q, setQ] = useState("");
  const [level, setLevel] = useState("all");

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return list.filter((p) => {
      const matchQ = !needle || p.name.toLowerCase().includes(needle) || p.altName.toLowerCase().includes(needle) || p.className.toLowerCase().includes(needle);
      const matchL = level === "all" || p.level === level;
      return matchQ && matchL;
    });
  }, [list, q, level]);

  const open = openSlug ? list.find((p) => p.slug === openSlug) : null;

  if (open) {
    return (
      <>
        <button
          className="ev-btn"
          onClick={() => setOpenSlug(null)}
          style={{ fontFamily: "'Jost', sans-serif", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", padding: "8px 13px", border: `1px solid ${C.rule}`, background: "transparent", color: C.muted, cursor: "pointer", borderRadius: 2, marginBottom: 26 }}
        >
          ← {t.search.back}
        </button>
        <PeptideCard p={open} t={t} />
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
          className="ev-input"
          style={{ flex: "1 1 220px", minWidth: 0, padding: "10px 13px", border: `1px solid ${C.rule}`, borderRadius: 2, background: "#FFF", fontSize: 14, color: C.inkDeep, fontFamily: "inherit" }}
        />
        <select
          value={level}
          onChange={(e) => setLevel(e.target.value)}
          className="ev-input"
          style={{ padding: "10px 13px", border: `1px solid ${C.rule}`, borderRadius: 2, background: "#FFF", fontSize: 14, color: C.inkDeep, fontFamily: "inherit", cursor: "pointer" }}
        >
          <option value="all">{t.catalog.allLevels}</option>
          {LEVEL_ORDER.map((l) => (
            <option key={l} value={l}>{t.levels[l].label}</option>
          ))}
        </select>
      </div>

      <div style={{ fontSize: 11.5, color: C.muted, marginTop: 12 }}>{t.catalog.count(filtered.length)}</div>

      <div style={{ marginTop: 6 }}>
        {filtered.length === 0 && (
          <div style={{ padding: "34px 0", color: C.muted, fontSize: 14.5 }}>{t.search.empty}</div>
        )}
        {filtered.map((p) => (
          <button
            key={p.slug}
            onClick={() => setOpenSlug(p.slug)}
            className="ev-row"
            style={{ width: "100%", textAlign: "left", display: "grid", gridTemplateColumns: "minmax(0,1fr) 92px 108px", gap: 14, alignItems: "center", padding: "16px 0", borderTop: `1px solid ${C.rule}`, background: "transparent", border: "none", borderTopStyle: "solid", borderTopWidth: 1, borderTopColor: C.rule, cursor: "pointer", fontFamily: "inherit" }}
          >
            <div style={{ minWidth: 0 }}>
              <div style={{ fontSize: 16, color: C.inkDeep, lineHeight: 1.3 }}>{p.name}</div>
              <div style={{ fontSize: 12, color: C.muted, marginTop: 3 }}>{p.className}</div>
            </div>
            <Ridges level={p.level} width={92} height={26} weight={1.2} animate={false} />
            <div style={{ textAlign: "right", fontFamily: "'Jost', sans-serif", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: p.level === "NO_DATA" ? C.muted : C.ink }}>
              {t.levels[p.level].label}
            </div>
          </button>
        ))}
      </div>
    </>
  );
}
