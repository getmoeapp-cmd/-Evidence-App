import React from "react";
import { C } from "../theme.js";
import Ridges from "../components/Ridges.jsx";
import Label from "../components/Label.jsx";
import { CLASSES } from "../data/catalog.js";

// Ficha para compuestos del catálogo cuya ingesta de PubMed aún no se ha
// corrido. Muestra lo que sabemos y dice claramente lo que falta.
export default function Stub({ entry, lang, t, catalog, onOpen, hasSpanish, onSwitchLang }) {
  const cls = CLASSES[lang][entry.cls];
  const isBlend = Boolean(entry.blend);
  const parts = isBlend ? entry.blend.map((s) => catalog.find((c) => c.slug === s)).filter(Boolean) : [];

  return (
    <>
      <section style={{ marginBottom: 30 }}>
        <Label>{cls}</Label>
        <h1 style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: "clamp(32px, 6vw, 52px)", lineHeight: 1.02, margin: "10px 0 4px", color: C.inkDeep, letterSpacing: "-0.01em" }}>
          {entry.name}
        </h1>
        {entry.alt !== entry.name && (
          <div style={{ fontFamily: "'IBM Plex Serif', serif", fontStyle: "italic", color: C.muted, fontSize: 15 }}>{entry.alt}</div>
        )}
      </section>

      {isBlend ? (
        <section style={{ marginBottom: 34 }}>
          <Label color={C.ink}>{t.blend.title}</Label>
          <div style={{ fontSize: 14, color: "#22384A", marginTop: 8, maxWidth: 620, lineHeight: 1.6 }}>{t.blend.intro}</div>
          <div style={{ marginTop: 18, border: `1px solid ${C.rule}`, borderRadius: 3, background: "#FFF", padding: 8 }}>
            {parts.map((p) => (
              <button
                key={p.slug}
                className="ev-row"
                onClick={() => onOpen(p.slug)}
                style={{ width: "100%", textAlign: "left", display: "grid", gridTemplateColumns: "minmax(0,1fr) 84px 104px", gap: 12, alignItems: "center", padding: "14px", background: "transparent", border: "none", cursor: "pointer", fontFamily: "inherit" }}
              >
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontSize: 15, color: C.inkDeep }}>{p.name}</div>
                  <div style={{ fontSize: 11.5, color: C.muted, marginTop: 2 }}>{CLASSES[lang][p.cls]}</div>
                </div>
                <Ridges level={p.level} width={84} height={22} weight={1.1} animate={false} />
                <div style={{ textAlign: "right", fontFamily: "'Jost', sans-serif", fontSize: 10.5, letterSpacing: "0.13em", textTransform: "uppercase", color: p.level === "NO_DATA" ? C.muted : C.ink }}>
                  {t.levels[p.level].label}
                </div>
              </button>
            ))}
          </div>
          <div style={{ fontSize: 12.5, color: C.muted, marginTop: 12, maxWidth: 620, lineHeight: 1.6 }}>{t.blend.note}</div>
        </section>
      ) : (
        <section style={{ marginBottom: 34, display: "grid", gridTemplateColumns: "minmax(0,1fr) auto", gap: 24, alignItems: "start" }}>
          <div style={{ fontSize: 14.5, color: "#2C3D4C", lineHeight: 1.62, maxWidth: 520 }}>
            {t.stub.preliminary}
          </div>
          <div style={{ textAlign: "right" }}>
            <Ridges level={entry.level} width={140} height={56} weight={1.5} />
            <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase", color: entry.level === "NO_DATA" ? C.muted : C.ink, marginTop: 8 }}>
              {t.levels[entry.level].label}
            </div>
            <div style={{ fontSize: 11, color: C.muted, marginTop: 3 }}>{t.stub.provisional}</div>
          </div>
        </section>
      )}

      <div style={{ border: `1px dashed ${C.muted}`, borderRadius: 3, padding: "28px 24px", background: "#FFF", maxWidth: 620 }}>
        <Label color={C.muted}>{t.stub.badge}</Label>
        <div style={{ fontSize: 15, color: "#22384A", marginTop: 10, lineHeight: 1.62 }}>{t.stub.body}</div>
      </div>
    </>
  );
}
