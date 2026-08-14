import React, { useState } from "react";
import { C } from "../theme.js";
import Logo from "../components/Logo.jsx";
import Ridges from "../components/Ridges.jsx";
import Label from "../components/Label.jsx";
import Auth from "./Auth.jsx";

/* Fila de catálogo con el nombre REDACTADO — la estética de la app hecha pitch. */
function Row({ level, tag, w }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) auto auto", gap: 14, alignItems: "center", padding: "13px 0", borderTop: `1px solid ${C.rule}` }}>
      <div>
        <div style={{ width: w, maxWidth: "100%", height: 13, borderRadius: 2, background: C.inkDeep, opacity: 0.85, filter: "blur(5px)" }} />
        <div style={{ width: w * 0.72, maxWidth: "90%", height: 9, borderRadius: 2, background: C.tabIdle, opacity: 0.6, filter: "blur(4px)", marginTop: 6 }} />
      </div>
      {level === "flat" ? (
        <div style={{ width: 88, height: 2, background: C.warn, alignSelf: "center" }} />
      ) : (
        <Ridges level={level} width={88} height={26} weight={1.2} animate={false} />
      )}
      <span style={{ fontFamily: "'Jost', sans-serif", fontSize: 10, letterSpacing: "0.13em", textTransform: "uppercase", color: level === "flat" ? C.warnText : C.ink, whiteSpace: "nowrap" }}>{tag}</span>
    </div>
  );
}

function MiniBars() {
  const bars = [18, 26, 34, 42, 58, 82];
  const CEIL = 62;
  return (
    <div style={{ position: "relative", height: 74, display: "flex", alignItems: "flex-end", gap: 6, maxWidth: 240 }}>
      {bars.map((h, i) => (
        <div key={i} style={{ flex: 1, height: `${h}%`, borderRadius: "2px 2px 0 0", background: h > CEIL ? C.warn : C.ridge, opacity: 0.55 + i * 0.075 }} />
      ))}
      <div style={{ position: "absolute", left: 0, right: 0, bottom: `${CEIL}%`, borderTop: `1.5px dashed ${C.warn}`, opacity: 0.8 }} />
    </div>
  );
}

export default function Landing({ lang, setLang, t }) {
  const [auth, setAuth] = useState(null); // null | "signin" | "signup"
  const k = t.landing;

  if (auth) return <Auth lang={lang} setLang={setLang} t={t} initialMode={auth} onBack={() => setAuth(null)} />;

  const CTA = ({ solid, mode, children }) => (
    <button className="ev-btn" onClick={() => setAuth(mode)}
      style={{ fontFamily: "'Jost', sans-serif", fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase",
        padding: "14px 24px", borderRadius: 3, cursor: "pointer",
        border: solid ? "none" : `1px solid ${C.ink}`,
        background: solid ? C.ink : "transparent", color: solid ? C.paper : C.ink }}>
      {children}
    </button>
  );

  const Pillar = ({ verb, title, body, children }) => (
    <section style={{ marginTop: 54 }}>
      <Label color={C.ink}>{verb}</Label>
      <h2 style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: "clamp(24px,4.5vw,34px)", margin: "10px 0 10px", color: C.inkDeep }}>{title}</h2>
      <p style={{ fontSize: 15, lineHeight: 1.65, color: "#2C3D4C", maxWidth: 560, marginTop: 0 }}>{body}</p>
      <div style={{ marginTop: 18, border: `1px solid ${C.rule}`, borderRadius: 4, background: "#FFF", padding: "6px 20px 16px" }}>{children}</div>
    </section>
  );

  return (
    <div style={{ minHeight: "100vh", background: C.paper, color: C.inkDeep }}>
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "22px 22px 70px" }}>

        {/* barra superior */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
          <Logo size={26} />
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <div style={{ display: "flex", border: `1px solid ${C.chipBorder}`, borderRadius: 3, overflow: "hidden" }}>
              {["es", "en"].map((l) => (
                <button key={l} className="ev-btn" onClick={() => setLang(l)}
                  style={{ fontFamily: "'Jost', sans-serif", fontSize: 10.5, letterSpacing: "0.12em", textTransform: "uppercase", padding: "6px 10px", border: "none", cursor: "pointer", background: lang === l ? C.ink : "transparent", color: lang === l ? C.paper : C.muted }}>
                  {l}
                </button>
              ))}
            </div>
            <button className="ev-btn" onClick={() => setAuth("signin")}
              style={{ fontFamily: "'Jost', sans-serif", fontSize: 11, letterSpacing: "0.13em", textTransform: "uppercase", padding: "7px 12px", border: "none", background: "transparent", color: C.ink, cursor: "pointer" }}>
              {k.signin}
            </button>
          </div>
        </div>

        {/* héroe */}
        <header style={{ marginTop: 64 }}>
          <h1 style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: "clamp(34px,7.5vw,58px)", lineHeight: 1.12, margin: 0, color: C.inkDeep }}>
            {t.taglineParts.map(([verb], i) => (
              <span key={i}>
                <span style={{ color: C.ink, fontWeight: 500 }}>{verb}</span>
                {i < t.taglineParts.length - 1 ? <span style={{ color: C.muted }}> · </span> : "."}
              </span>
            ))}
          </h1>
          <p style={{ fontSize: 16.5, lineHeight: 1.65, color: "#2C3D4C", maxWidth: 560, marginTop: 18 }}>{k.sub}</p>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 26 }}>
            <CTA solid mode="signup">{k.ctaMain}</CTA>
            <CTA mode="signin">{k.ctaHave}</CTA>
          </div>
          <div style={{ fontSize: 12.5, color: C.muted, marginTop: 12 }}>{k.ctaNote}</div>
        </header>

        {/* Aprende */}
        <Pillar verb={t.nav.goals} title={k.p1t} body={k.p1b}>
          <Row level="A" tag="LEVEL A" w={150} />
          <Row level="C" tag="LEVEL C" w={110} />
          <Row level="flat" tag={k.notShown} w={128} />
        </Pillar>

        {/* Verifica */}
        <Pillar verb={t.nav.verify} title={k.p2t} body={k.p2b}>
          <div style={{ paddingTop: 12 }}>
            {[k.coa1, k.coa2, k.coa3].map((x, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "20px minmax(0,1fr)", gap: 10, padding: "9px 0", borderTop: i ? `1px solid ${C.paperDeep}` : "none" }}>
                <span style={{ fontFamily: "'Jost', sans-serif", fontSize: 9.5, width: 16, height: 16, borderRadius: "50%", background: C.ink, color: C.paper, textAlign: "center", lineHeight: "16px" }}>{i + 1}</span>
                <span style={{ fontSize: 13.5, color: "#22384A", lineHeight: 1.5 }}>{x}</span>
              </div>
            ))}
          </div>
        </Pillar>

        {/* Registra */}
        <Pillar verb={t.nav.track} title={k.p3t} body={k.p3b}>
          <div style={{ paddingTop: 14 }}>
            <MiniBars />
            <div style={{ fontSize: 12.5, color: C.warnText, marginTop: 10 }}>{k.p3chart}</div>
            <div style={{ fontSize: 13, color: C.tabIdle, marginTop: 12, lineHeight: 1.6, borderTop: `1px solid ${C.paperDeep}`, paddingTop: 12 }}>{k.p3privacy}</div>
          </div>
        </Pillar>

        {/* cifras */}
        <div style={{ marginTop: 54, display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(120px,1fr))", gap: 1, background: C.rule, border: `1px solid ${C.rule}`, borderRadius: 4, overflow: "hidden" }}>
          {k.stats.map(([n, l], i) => (
            <div key={i} style={{ background: "#FFF", padding: "18px 14px", textAlign: "center" }}>
              <div style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: 30, color: C.ink }}>{n}</div>
              <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 9.5, letterSpacing: "0.14em", textTransform: "uppercase", color: C.tabIdle, marginTop: 4 }}>{l}</div>
            </div>
          ))}
        </div>

        {/* fundadores */}
        <section style={{ marginTop: 54, border: `1px solid ${C.ink}`, borderRadius: 4, padding: "26px 24px", background: "rgba(30,63,95,0.05)" }}>
          <Label color={C.ink}>{k.betaLabel}</Label>
          <div style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: "clamp(22px,4.5vw,30px)", color: C.inkDeep, marginTop: 10 }}>{k.betaTitle}</div>
          <p style={{ fontSize: 14.5, lineHeight: 1.65, color: "#2C3D4C", maxWidth: 540 }}>{k.betaBody}</p>
          <CTA solid mode="signup">{k.ctaMain}</CTA>
        </section>

        {/* pie */}
        <footer style={{ marginTop: 60, borderTop: `1px solid ${C.rule}`, paddingTop: 18, fontSize: 12.5, color: C.muted, lineHeight: 1.6, maxWidth: 560 }}>
          {k.footer}
        </footer>
      </div>
    </div>
  );
}
