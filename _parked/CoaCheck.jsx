import React, { useState, useRef } from "react";
import { C } from "../theme.js";
import Label from "../components/Label.jsx";
import { RULES, review } from "../data/coacheck.js";

const MAX_MB = 8;

export default function CoaCheck({ lang, t, onBack }) {
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState(null);
  const [data, setData] = useState(null);
  const [vialLot, setVialLot] = useState("");
  const fileRef = useRef(null);
  const k = t.coacheck;

  async function onFile(e) {
    const f = e.target.files?.[0];
    if (!f) return;
    setErr(null); setData(null);
    if (f.size > MAX_MB * 1024 * 1024) { setErr(k.tooBig(MAX_MB)); return; }
    setBusy(true);
    try {
      const b64 = await new Promise((res, rej) => {
        const r = new FileReader();
        r.onload = () => res(String(r.result).split(",")[1]);
        r.onerror = () => rej(new Error("read"));
        r.readAsDataURL(f);
      });
      const r = await fetch("/api/coa-check", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ data: b64, mediaType: f.type || "image/jpeg" }),
      });
      const j = await r.json();
      if (!r.ok) throw new Error(j.error || "upstream");
      if (j.isCOA === false) { setErr(k.notCoa); return; }
      setData(j);
    } catch {
      setErr(k.failed);
    } finally {
      setBusy(false);
      if (fileRef.current) fileRef.current.value = "";
    }
  }

  const results = data ? review(data) : [];
  const failed = results.filter((r) => r.state === "fail");
  const criticalFailed = failed.filter((r) => r.weight === "critical").length;

  const lotMatch = data?.lot && vialLot.trim()
    ? data.lot.replace(/\s/g, "").toLowerCase() === vialLot.replace(/\s/g, "").toLowerCase()
    : null;

  const TONE = { pass: { c: "#3E6B4A", m: "✓" }, warn: { c: C.cautionText, m: "!" }, fail: { c: C.warnText, m: "×" } };

  return (
    <>
      <button className="ev-btn" onClick={onBack}
        style={{ fontFamily: "'Jost', sans-serif", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase",
          padding: "8px 13px", border: `1px solid ${C.rule}`, background: "transparent", color: C.tabIdle,
          cursor: "pointer", borderRadius: 2, marginBottom: 24 }}>
        ← {t.verify.buy.title}
      </button>

      <h2 style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: "clamp(28px,5vw,40px)", margin: "0 0 10px", color: C.inkDeep }}>
        {k.title}
      </h2>
      <p style={{ fontSize: 15, lineHeight: 1.62, color: "#2C3D4C", maxWidth: 640, marginTop: 0 }}>{k.intro}</p>

      {/* La advertencia va ANTES de subir nada, no después del resultado. */}
      <div style={{ marginTop: 16, padding: "16px 18px", background: "rgba(180,85,47,0.07)", border: `1px solid rgba(180,85,47,0.32)`, borderRadius: 4, maxWidth: 640 }}>
        <Label color={C.warnText}>{k.limitTitle}</Label>
        <div style={{ fontSize: 14, lineHeight: 1.6, color: "#5A4038", marginTop: 8 }}>{k.limitBody}</div>
      </div>

      <div style={{ marginTop: 22 }}>
        <input ref={fileRef} type="file" accept="image/*,application/pdf" onChange={onFile} style={{ display: "none" }} id="coa-file" />
        <label htmlFor="coa-file" className="ev-btn"
          style={{ display: "inline-block", fontFamily: "'Jost', sans-serif", fontSize: 12, letterSpacing: "0.13em",
            textTransform: "uppercase", padding: "13px 22px", background: busy ? C.chipBorder : C.ink,
            color: C.paper, borderRadius: 3, cursor: busy ? "wait" : "pointer" }}>
          {busy ? k.reading : k.upload}
        </label>
        <div style={{ fontSize: 12, color: C.tabIdle, marginTop: 9 }}>{k.formats(MAX_MB)}</div>
      </div>

      {err && (
        <div style={{ marginTop: 18, padding: "14px 16px", border: `1px solid rgba(180,85,47,0.35)`, background: "rgba(180,85,47,0.06)", borderRadius: 4, fontSize: 14, color: C.warnText, maxWidth: 640 }}>
          {err}
        </div>
      )}

      {data && (
        <>
          <section style={{ marginTop: 32 }}>
            <Label color={C.ink}>{k.found}</Label>
            <div style={{ marginTop: 12, border: `1px solid ${C.rule}`, borderRadius: 3, background: "#FFF", overflow: "hidden" }}>
              {[
                ["product", data.product], ["lot", data.lot], ["date", data.date],
                ["purity", data.purityHPLC != null ? data.purityHPLC + "%" : null],
                ["ms", data.massSpecConfirmed == null ? null : data.massSpecConfirmed ? k.yes : k.no],
                ["lab", data.lab], ["reportNumber", data.reportNumber],
              ].map(([id, val], i) => (
                <div key={id} style={{ display: "grid", gridTemplateColumns: "160px minmax(0,1fr)", gap: 14, padding: "12px 18px", borderTop: i ? `1px solid ${C.rule}` : "none" }} className="ev-coarow">
                  <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: C.tabIdle }}>{k.fields[id]}</div>
                  <div style={{ fontSize: 14.5, color: val ? C.inkDeep : C.muted, fontStyle: val ? "normal" : "italic" }}>{val || k.missing}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Lo único que el software SÍ puede resolver por completo. */}
          <section style={{ marginTop: 28 }}>
            <Label color={C.ink}>{k.lotTitle}</Label>
            <div style={{ fontSize: 13.5, color: "#4A5560", marginTop: 6, maxWidth: 620, lineHeight: 1.55 }}>{k.lotIntro}</div>
            <input
              value={vialLot} onChange={(e) => setVialLot(e.target.value)} placeholder={k.lotPlaceholder}
              className="ev-input"
              style={{ marginTop: 12, width: "100%", maxWidth: 340, padding: "12px 14px", border: `1px solid ${C.chipBorder}`, borderRadius: 3, background: "#FFF", fontSize: 16, color: C.inkDeep, fontFamily: "inherit" }}
            />
            {lotMatch !== null && (
              <div style={{ marginTop: 12, padding: "13px 16px", borderRadius: 4, maxWidth: 480,
                border: `1px solid ${lotMatch ? "rgba(62,107,74,0.4)" : "rgba(180,85,47,0.4)"}`,
                background: lotMatch ? "rgba(62,107,74,0.08)" : "rgba(180,85,47,0.07)",
                color: lotMatch ? "#3E6B4A" : C.warnText, fontSize: 14.5, lineHeight: 1.55 }}>
                {lotMatch ? k.lotOk : k.lotBad}
              </div>
            )}
          </section>

          <section style={{ marginTop: 32 }}>
            <Label color={C.ink}>{k.checks}</Label>
            <div style={{ marginTop: 12 }}>
              {results.map((r) => {
                const rule = RULES.find((x) => x.id === r.id)[lang];
                const tone = TONE[r.state];
                return (
                  <div key={r.id} style={{ display: "grid", gridTemplateColumns: "22px minmax(0,1fr)", gap: 12, padding: "13px 0", borderTop: `1px solid ${C.rule}` }}>
                    <span style={{ color: tone.c, fontSize: 16, lineHeight: 1.3, textAlign: "center" }}>{tone.m}</span>
                    <div>
                      <div style={{ fontSize: 14.5, color: r.state === "pass" ? C.inkDeep : tone.c, lineHeight: 1.4 }}>
                        {r.state === "pass" ? rule.pass : rule.fail}
                      </div>
                      {r.state !== "pass" && (
                        <div style={{ fontSize: 13, color: "#4A5560", marginTop: 5, lineHeight: 1.55 }}>{rule.why}</div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          <section style={{ marginTop: 30, padding: "20px 22px", background: "rgba(30,63,95,0.06)", border: `1px solid ${C.rule}`, borderRadius: 4, maxWidth: 660 }}>
            <Label color={C.ink}>{k.nextTitle}</Label>
            <div style={{ fontSize: 14.5, lineHeight: 1.62, color: "#22384A", marginTop: 9 }}>
              {criticalFailed > 0 ? k.nextBlocked(criticalFailed) : k.nextOk}
            </div>
            {data.reportNumber && (
              <div style={{ marginTop: 14, padding: "13px 15px", background: "#FFF", border: `1px solid ${C.rule}`, borderRadius: 3, fontSize: 13.5, lineHeight: 1.6, color: "#2C3D4C", fontFamily: "'IBM Plex Serif', serif" }}>
                {k.emailTemplate(data.reportNumber, data.lot || "—", data.product || "—")}
              </div>
            )}
            {data.verificationUrl && (
              <div style={{ fontSize: 13, color: C.tabIdle, marginTop: 10 }}>{k.foundUrl}: {data.verificationUrl}</div>
            )}
          </section>
        </>
      )}
    </>
  );
}
