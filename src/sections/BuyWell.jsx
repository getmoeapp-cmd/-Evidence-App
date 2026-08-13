import React, { useState, useMemo } from "react";
import { C } from "../theme.js";
import Label from "../components/Label.jsx";
import { COA, GATES, CRITERIA, ASKS, verdict } from "../data/buywell.js";

function Check({ on, onToggle, label, weight, gate }) {
  return (
    <button
      className="ev-btn ev-check"
      onClick={onToggle}
      aria-pressed={on}
      style={{
        width: "100%", textAlign: "left", display: "grid",
        gridTemplateColumns: "24px minmax(0,1fr) auto", gap: 12, alignItems: "start",
        padding: "14px 4px", background: "transparent", border: "none",
        borderTop: `1px solid ${C.rule}`, cursor: "pointer", fontFamily: "inherit",
      }}
    >
      <span
        aria-hidden="true"
        style={{
          width: 20, height: 20, marginTop: 1, borderRadius: 3, flexShrink: 0,
          border: `1.5px solid ${on ? (gate ? C.ink : C.field) : C.chipBorder}`,
          background: on ? (gate ? C.ink : C.field) : "#FFF",
          color: "#FFF", fontSize: 13, lineHeight: "18px", textAlign: "center",
        }}
      >
        {on ? "✓" : ""}
      </span>
      <span style={{ fontSize: 14.5, lineHeight: 1.45, color: on ? C.inkDeep : "#4A5560" }}>{label}</span>
      <span
        style={{
          fontFamily: "'Jost', sans-serif", fontSize: 10, letterSpacing: "0.1em",
          textTransform: "uppercase", color: gate ? C.warnText : C.muted, whiteSpace: "nowrap", marginTop: 3,
        }}
      >
        {gate ? "crítico" : weight}
      </span>
    </button>
  );
}

export default function BuyWell({ lang, t, onBack }) {
  const [tool, setTool] = useState(null);
  const [on, setOn] = useState({});
  const c = COA[lang];
  const toggle = (id) => setOn((s) => ({ ...s, [id]: !s[id] }));

  const { score, gatesPassed, v, asks } = useMemo(() => {
    const gp = GATES.filter((g) => on[g.id]).length;
    const sc = CRITERIA.reduce((a, x) => a + (on[x.id] ? x.w : 0), 0);
    const missing = [...GATES, ...CRITERIA].filter((x) => !on[x.id]);
    return {
      score: sc, gatesPassed: gp, v: verdict(sc, gp),
      asks: missing.map((x) => ASKS[x.id]?.[lang]).filter(Boolean).slice(0, 6),
    };
  }, [on, lang]);

  const VERDICT = {
    trust:   { es: "Confiable",  en: "Reliable",            c: "#3E6B4A", bg: "rgba(62,107,74,0.09)", bd: "rgba(62,107,74,0.35)" },
    caution: { es: "Precaución", en: "Proceed with caution", c: C.cautionText, bg: "rgba(176,138,46,0.10)", bd: "rgba(176,138,46,0.38)" },
    avoid:   { es: "Evitar",     en: "Avoid",               c: C.warnText, bg: "rgba(180,85,47,0.09)", bd: "rgba(180,85,47,0.38)" },
  }[v];

  const back = (
    <button className="ev-btn" onClick={() => (tool ? setTool(null) : onBack())}
      style={{ fontFamily: "'Jost', sans-serif", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase",
        padding: "8px 13px", border: `1px solid ${C.rule}`, background: "transparent", color: C.tabIdle,
        cursor: "pointer", borderRadius: 2, marginBottom: 24 }}>
      ← {t.verify.title}
    </button>
  );

  if (tool === "coa") {
    return (
      <>
        {back}
        <h2 style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: "clamp(28px,5vw,40px)", margin: "0 0 12px", color: C.inkDeep }}>{c.title}</h2>
        <p style={{ fontSize: 15, lineHeight: 1.62, color: "#2C3D4C", maxWidth: 620, marginTop: 0 }}>{c.intro}</p>

        <div style={{ marginTop: 26, border: `1px solid ${C.rule}`, borderRadius: 3, background: "#FFF", overflow: "hidden" }}>
          {c.fields.map((f, i) => (
            <div key={i} style={{ padding: "16px 20px", borderTop: i ? `1px solid ${C.rule}` : "none", display: "grid", gridTemplateColumns: "150px minmax(0,1fr)", gap: 16 }} className="ev-coarow">
              <div>
                <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: C.ink }}>{f.k}</div>
                <div style={{ fontSize: 13, color: C.inkDeep, marginTop: 4 }}>{f.v}</div>
              </div>
              <div style={{ fontSize: 13.5, color: "#4A5560", lineHeight: 1.55 }}>{f.why}</div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 22, padding: "18px 20px", background: "rgba(30,63,95,0.06)", border: `1px solid ${C.rule}`, borderRadius: 4, maxWidth: 660 }}>
          <Label color={C.ink}>{c.pairTitle}</Label>
          <div style={{ fontSize: 14, lineHeight: 1.6, color: "#22384A", marginTop: 8 }}>{c.pair}</div>
        </div>

        <section style={{ marginTop: 34 }}>
          <Label color={C.warnText}>{c.verifyTitle}</Label>
          <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "#2C3D4C", maxWidth: 620 }}>{c.verifyIntro}</p>
          <ol style={{ paddingLeft: 20, margin: 0 }}>
            {c.verify.map((v2, i) => (
              <li key={i} style={{ fontSize: 14.5, lineHeight: 1.6, color: "#22384A", marginBottom: 10 }}>{v2}</li>
            ))}
          </ol>
        </section>

        <section style={{ marginTop: 34 }}>
          <Label color={C.ink}>{c.inspectTitle}</Label>
          <div style={{ marginTop: 12, display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(210px,1fr))", gap: 14 }}>
            {c.inspect.map((x, i) => (
              <div key={i} style={{ border: `1px solid ${C.rule}`, borderRadius: 3, background: "#FFF", padding: 16 }}>
                <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 14, color: C.inkDeep }}>{x.k}</div>
                <div style={{ fontSize: 13, color: "#4A5560", marginTop: 7, lineHeight: 1.55 }}>{x.v}</div>
              </div>
            ))}
          </div>
          <div style={{ fontSize: 13, color: C.tabIdle, marginTop: 14, lineHeight: 1.6, maxWidth: 620 }}>{c.inspectNote}</div>
        </section>
      </>
    );
  }

  if (tool === "score") {
    return (
      <>
        {back}
        <h2 style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: "clamp(28px,5vw,40px)", margin: "0 0 10px", color: C.inkDeep }}>
          {t.verify.buy.scorecard}
        </h2>
        <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "#2C3D4C", maxWidth: 620, marginTop: 0 }}>{t.scorecard.intro}</p>

        <div style={{ position: "sticky", top: 0, zIndex: 15, background: C.paper, paddingTop: 14, paddingBottom: 12, marginTop: 18 }}>
          <div style={{ border: `1px solid ${VERDICT.bd}`, background: VERDICT.bg, borderRadius: 4, padding: "14px 18px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 14, flexWrap: "wrap" }}>
            <div>
              <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 19, letterSpacing: "0.06em", textTransform: "uppercase", color: VERDICT.c }}>
                {VERDICT[lang]}
              </div>
              <div style={{ fontSize: 12, color: C.tabIdle, marginTop: 3 }}>
                {t.scorecard.of(score)} · {t.scorecard.gates(gatesPassed)}
              </div>
            </div>
            <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 34, fontWeight: 300, color: VERDICT.c, lineHeight: 1 }}>{score}</div>
          </div>
          {gatesPassed < 2 && (
            <div style={{ fontSize: 12.5, color: C.warnText, marginTop: 8, lineHeight: 1.55 }}>{t.scorecard.gateWarning}</div>
          )}
        </div>

        <Label color={C.warnText}>{t.scorecard.criticals}</Label>
        <div style={{ marginBottom: 24 }}>
          {GATES.map((g) => (
            <Check key={g.id} gate on={!!on[g.id]} onToggle={() => toggle(g.id)} label={g[lang]} />
          ))}
        </div>

        <Label color={C.ink}>{t.scorecard.weighted}</Label>
        <div style={{ marginBottom: 26 }}>
          {CRITERIA.map((x) => (
            <Check key={x.id} on={!!on[x.id]} onToggle={() => toggle(x.id)} label={x[lang]} weight={x.w} />
          ))}
        </div>

        {asks.length > 0 && (
          <section style={{ borderTop: `1px solid ${C.rule}`, paddingTop: 22 }}>
            <Label color={C.field}>{t.scorecard.asksTitle}</Label>
            <div style={{ fontSize: 13, color: C.tabIdle, marginTop: 6, marginBottom: 12, maxWidth: 620, lineHeight: 1.55 }}>{t.scorecard.asksIntro}</div>
            {asks.map((q, i) => (
              <div key={i} style={{ display: "flex", gap: 10, padding: "9px 0", fontSize: 14.5, color: "#22384A", lineHeight: 1.5 }}>
                <span style={{ color: C.field, flexShrink: 0 }}>—</span>{q}
              </div>
            ))}
          </section>
        )}
      </>
    );
  }

  return (
    <>
      {back}
      <h2 style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: "clamp(28px,5vw,40px)", margin: "0 0 10px", color: C.inkDeep }}>
        {t.verify.buy.title}
      </h2>
      <p style={{ fontSize: 15, lineHeight: 1.62, color: "#2C3D4C", maxWidth: 620, marginTop: 0 }}>{t.verify.buy.desc}</p>

      <div style={{ marginTop: 24, display: "grid", gap: 14, gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))" }}>
        {[
          { id: "coa", title: t.verify.buy.coa, sub: t.verify.buy.coaSub },
          { id: "score", title: t.verify.buy.scorecard, sub: t.verify.buy.scorecardSub },
        ].map((x) => (
          <button key={x.id} className="ev-btn ev-row" onClick={() => setTool(x.id)}
            style={{ textAlign: "left", border: `1px solid ${C.rule}`, borderRadius: 3, background: "#FFF",
              padding: "22px 20px", cursor: "pointer", fontFamily: "inherit" }}>
            <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 19, color: C.inkDeep }}>{x.title}</div>
            <div style={{ fontSize: 13.5, color: "#4A5560", marginTop: 8, lineHeight: 1.55 }}>{x.sub}</div>
          </button>
        ))}
      </div>
    </>
  );
}
