import React, { useState } from "react";
import { C } from "../theme.js";
import Ridges from "../components/Ridges.jsx";
import Label from "../components/Label.jsx";
import PeptideCard from "./PeptideCard.jsx";

export default function ByGoal({ goals, list, t }) {
  const [openSlug, setOpenSlug] = useState(null);
  const open = openSlug ? list.find((p) => p.slug === openSlug) : null;

  if (open) {
    return (
      <>
        <button
          className="ev-btn"
          onClick={() => setOpenSlug(null)}
          style={{ fontFamily: "'Jost', sans-serif", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", padding: "8px 13px", border: `1px solid ${C.rule}`, background: "transparent", color: C.muted, cursor: "pointer", borderRadius: 2, marginBottom: 26 }}
        >
          ←
        </button>
        <PeptideCard p={open} t={t} />
      </>
    );
  }

  return (
    <>
      <Label color={C.ink}>{t.goals.title}</Label>
      <div style={{ fontSize: 13, color: C.muted, marginTop: 6, maxWidth: 620, lineHeight: 1.5 }}>{t.goals.intro}</div>

      <div style={{ marginTop: 24 }}>
        {goals.map((g) => {
          const items = g.peptides.map((s) => list.find((p) => p.slug === s)).filter(Boolean);
          return (
            <div key={g.slug} style={{ borderTop: `1px solid ${C.rule}`, padding: "20px 0" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 12 }}>
                <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 19, fontWeight: 400, color: C.inkDeep }}>{g.name}</div>
                <div style={{ fontSize: 11.5, color: C.muted }}>{t.goals.candidates(items.length)}</div>
              </div>

              {items.length === 0 ? (
                <div style={{ fontSize: 13, color: C.muted, marginTop: 10, fontStyle: "italic" }}>{t.goals.empty}</div>
              ) : (
                <div style={{ marginTop: 12 }}>
                  {items.map((p) => (
                    <button
                      key={p.slug}
                      onClick={() => setOpenSlug(p.slug)}
                      className="ev-row"
                      style={{ width: "100%", textAlign: "left", display: "grid", gridTemplateColumns: "minmax(0,1fr) 84px 100px", gap: 12, alignItems: "center", padding: "10px 0", background: "transparent", border: "none", cursor: "pointer", fontFamily: "inherit" }}
                    >
                      <div style={{ fontSize: 14.5, color: C.inkDeep, minWidth: 0 }}>{p.name}</div>
                      <Ridges level={p.level} width={84} height={22} weight={1.1} animate={false} />
                      <div style={{ textAlign: "right", fontFamily: "'Jost', sans-serif", fontSize: 10.5, letterSpacing: "0.13em", textTransform: "uppercase", color: p.level === "NO_DATA" ? C.muted : C.ink }}>
                        {t.levels[p.level].label}
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
