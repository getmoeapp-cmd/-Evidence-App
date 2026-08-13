import React, { useState } from "react";
import { C } from "../theme.js";
import Ridges from "../components/Ridges.jsx";
import Label from "../components/Label.jsx";
import PeptideCard from "./PeptideCard.jsx";
import Stub from "./Stub.jsx";
import LevelKey, { LevelKeyTrigger } from "../components/LevelKey.jsx";
import { CATALOG, CLASSES } from "../data/catalog.js";
import { GOAL_MAP, GOAL_LABELS } from "../data/goals.js";

// Dentro de cada objetivo, primero lo mejor respaldado.
const RANK = { A: 0, B: 1, C: 2, D: 3, NO_DATA: 4, null: 5 };

export default function ByGoal({ full, lang, t, setLang, esSlugs }) {
  const [openSlug, setOpenSlug] = useState(null);
  const [keyOpen, setKeyOpen] = useState(false);
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
          ← {t.goals.title}
        </button>
        {fullRecord ? <PeptideCard p={fullRecord} t={t} /> : <Stub entry={entry} lang={lang} t={t} catalog={CATALOG} onOpen={setOpenSlug} hasSpanish={lang === "en" && esSlugs.has(entry.slug)} onSwitchLang={() => setLang("es")} />}
      </>
    );
  }

  return (
    <>
      <Label color={C.ink}>{t.goals.title}</Label>
      <div style={{ fontSize: 13, color: C.muted, marginTop: 6, maxWidth: 640, lineHeight: 1.55 }}>{t.goals.intro}</div>

      <div style={{ marginTop: 16 }}>
        <LevelKeyTrigger onClick={() => setKeyOpen(true)} label={t.levelKey.trigger} />
      </div>
      <LevelKey open={keyOpen} onClose={() => setKeyOpen(false)} t={t} />

      <div style={{ marginTop: 26 }}>
        {GOAL_MAP.map((g) => {
          const meta = GOAL_LABELS[lang][g.slug];
          const items = g.peptides
            .map((s) => CATALOG.find((c) => c.slug === s))
            .filter(Boolean)
            .sort((a, b) => RANK[a.level] - RANK[b.level]);

          return (
            <div key={g.slug} style={{ borderTop: `1px solid ${C.rule}`, padding: "22px 0" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 12, flexWrap: "wrap" }}>
                <div>
                  <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 20, fontWeight: 400, color: C.inkDeep }}>{meta.name}</div>
                  <div style={{ fontSize: 12.5, color: C.muted, marginTop: 3 }}>{meta.note}</div>
                </div>
                <div style={{ fontSize: 11.5, color: C.muted }}>{t.goals.candidates(items.length)}</div>
              </div>

              <div style={{ marginTop: 14 }}>
                {items.map((p) => (
                  <button
                    key={p.slug}
                    onClick={() => setOpenSlug(p.slug)}
                    className="ev-row"
                    style={{ width: "100%", textAlign: "left", display: "grid", gridTemplateColumns: "minmax(0,1fr) 84px 104px", gap: 12, alignItems: "center", padding: "11px 8px", background: "transparent", border: "none", cursor: "pointer", fontFamily: "inherit" }}
                  >
                    <div style={{ minWidth: 0 }}>
                      <div style={{ fontSize: 15, color: C.inkDeep, lineHeight: 1.3 }}>{p.name}</div>
                      <div style={{ fontSize: 11.5, color: C.muted, marginTop: 2 }}>{CLASSES[lang][p.cls]}</div>
                    </div>
                    {p.level ? (
                      <Ridges level={p.level} width={84} height={22} weight={1.1} animate={false} />
                    ) : (
                      <div style={{ fontSize: 11, color: C.muted, fontStyle: "italic" }}>—</div>
                    )}
                    <div style={{ textAlign: "right", fontFamily: "'Jost', sans-serif", fontSize: 10.5, letterSpacing: "0.13em", textTransform: "uppercase", color: !p.level || p.level === "NO_DATA" ? C.muted : C.ink }}>
                      {p.level ? t.levels[p.level].label : t.goals.blend}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ marginTop: 30, paddingTop: 18, borderTop: `1px solid ${C.rule}`, fontSize: 12.5, color: C.muted, lineHeight: 1.65, maxWidth: 640 }}>
        {t.goals.footnote}
      </div>
    </>
  );
}
