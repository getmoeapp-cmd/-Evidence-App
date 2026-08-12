import React from "react";
import { C } from "../theme.js";
import Ridges from "../components/Ridges.jsx";
import Label from "../components/Label.jsx";

const toneMap = {
  ok: { border: C.ridge, text: C.ink },
  alert: { border: C.warn, text: C.warnText },
  grey: { border: C.muted, text: "#6C7178" },
};

function StudiedCeiling({ ceiling, t }) {
  const none = ceiling.state === "none";
  return (
    <section style={{ marginBottom: 40 }}>
      <Label color={C.ink}>{t.ceiling.title}</Label>
      <div style={{ fontSize: 12.5, color: C.muted, marginTop: 6, maxWidth: 620, lineHeight: 1.5 }}>{t.ceiling.intro}</div>
      <div style={{ marginTop: 16, border: none ? `1px dashed ${C.muted}` : `1px solid ${C.rule}`, borderRadius: 3, background: "#FFF", padding: 24 }}>
        {none ? (
          <>
            <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "clamp(24px,4.5vw,34px)", fontWeight: 300, color: C.muted }}>
              {t.ceiling.none}
            </div>
            <div style={{ fontSize: 14.5, lineHeight: 1.62, marginTop: 12, maxWidth: 560, color: "#22384A" }}>{ceiling.note}</div>
          </>
        ) : (
          <>
            <div style={{ display: "flex", alignItems: "baseline", gap: 12, flexWrap: "wrap" }}>
              <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "clamp(38px,7vw,58px)", fontWeight: 300, color: C.inkDeep, lineHeight: 1, letterSpacing: "-0.02em" }}>
                {ceiling.dose}
              </div>
              <div style={{ fontSize: 15, color: C.muted }}>{ceiling.frequency} · {ceiling.indication}</div>
            </div>
            <div style={{ marginTop: 26 }}>
              <Label>{t.ceiling.howReached}</Label>
              <div style={{ display: "flex", alignItems: "flex-end", gap: 6, marginTop: 12, height: 74 }}>
                {ceiling.steps.map((step, i) => {
                  const h = ((i + 1) / ceiling.steps.length) * 100;
                  const last = i === ceiling.steps.length - 1;
                  return (
                    <div key={i} style={{ flex: 1, maxWidth: 92, textAlign: "center" }}>
                      <div style={{ height: `${h * 0.62}px`, background: last ? C.ink : C.ridge, opacity: last ? 1 : 0.34 + i * 0.13, borderRadius: "2px 2px 0 0" }} />
                      <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 11.5, color: last ? C.ink : C.muted, marginTop: 6, fontWeight: last ? 500 : 400 }}>{step}</div>
                    </div>
                  );
                })}
              </div>
              <div style={{ fontSize: 12.5, color: C.muted, marginTop: 10 }}>{ceiling.schedule}</div>
            </div>
            <div style={{ marginTop: 20, paddingTop: 16, borderTop: `1px solid ${C.rule}`, fontSize: 13.5, lineHeight: 1.6, color: "#22384A", maxWidth: 620 }}>
              {ceiling.note}
            </div>
          </>
        )}
        {ceiling.adverse.aboveCeiling !== null && (
          <div style={{ marginTop: 20, paddingTop: 16, borderTop: `1px solid ${C.rule}` }}>
            <Label color={C.field}>{t.ceiling.signal}</Label>
            <div style={{ fontSize: 13.5, color: "#4A5240", marginTop: 8, lineHeight: 1.6, maxWidth: 620 }}>
              {t.ceiling.signalText(
                ceiling.adverse.total,
                Math.round((ceiling.adverse.aboveCeiling / ceiling.adverse.total) * 100),
                Math.round((ceiling.adverse.skipped / ceiling.adverse.total) * 100)
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function WhatPeopleReport({ reports, t }) {
  return (
    <section style={{ marginBottom: 40 }}>
      <Label color={C.field}>{t.reports.title}</Label>
      <div style={{ fontSize: 12.5, color: C.muted, marginTop: 6, maxWidth: 620, lineHeight: 1.5 }}>{t.reports.intro(reports.n)}</div>
      <div style={{ marginTop: 16, border: `1px solid ${C.rule}`, borderRadius: 3, background: "#FFF", padding: 22 }}>
        {reports.effects.map((e, i) => (
          <div key={i} style={{ marginBottom: i === reports.effects.length - 1 ? 0 : 16 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 14, marginBottom: 6 }}>
              <span style={{ fontSize: 14.5, color: e.none ? C.muted : "#22384A", fontStyle: e.none ? "italic" : "normal" }}>{e.text}</span>
              <span style={{ fontFamily: "'Jost', sans-serif", fontSize: 13, color: e.none ? C.muted : C.field, whiteSpace: "nowrap" }}>
                {Math.round(e.pct * 100)}%
                {!e.none && (
                  <span style={{ color: C.muted, fontSize: 11, letterSpacing: "0.1em", marginLeft: 9 }}>
                    {t.levels[e.level].label.toUpperCase()}
                  </span>
                )}
              </span>
            </div>
            <div style={{ height: 6, background: C.paperDeep, borderRadius: 3, overflow: "hidden" }}>
              <div style={{ width: `${e.pct * 100}%`, height: "100%", background: e.none ? C.muted : C.fieldSoft, opacity: e.none ? 0.45 : 1, borderRadius: 3 }} />
            </div>
          </div>
        ))}
        <div style={{ marginTop: 22, paddingTop: 16, borderTop: `1px solid ${C.rule}`, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))", gap: 18 }}>
          {[
            { v: reports.noAdverse, l: t.reports.noAdverse },
            { v: reports.stacking, l: t.reports.stacking },
            { v: reports.habits, l: t.reports.habits },
          ].map((s, i) => (
            <div key={i}>
              <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 22, color: C.field, fontWeight: 300 }}>{Math.round(s.v * 100)}%</div>
              <div style={{ fontSize: 12, color: C.muted, marginTop: 3, lineHeight: 1.45 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Safety({ safety, t }) {
  const tones = {
    absolute: { c: C.warnText, b: C.warn },
    relative: { c: C.cautionText, b: C.caution },
    interaction: { c: C.interText, b: C.inter },
  };
  return (
    <section style={{ marginBottom: 40 }}>
      <Label color={C.ink}>{t.safety.title}</Label>
      {safety.length === 0 ? (
        <div style={{ marginTop: 14, border: `1px dashed ${C.muted}`, borderRadius: 3, padding: "28px 24px", background: "#FFF", fontSize: 15, lineHeight: 1.62, color: "#22384A", maxWidth: 620 }}>
          {t.safety.empty}
        </div>
      ) : (
        <div style={{ marginTop: 14 }}>
          {safety.map((it, i) => {
            const tone = tones[it.kind];
            const inferred = it.origin === "mechanism";
            return (
              <div key={i} style={{ borderTop: `1px solid ${C.rule}`, padding: "15px 0", display: "grid", gridTemplateColumns: "minmax(0,1fr) 180px", gap: 18, alignItems: "start" }}>
                <div style={{ minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 9, flexWrap: "wrap" }}>
                    <span style={{ width: 3, height: 15, background: tone.b, display: "inline-block" }} />
                    <span style={{ fontSize: 15, color: "#22384A", lineHeight: 1.4 }}>{it.text}</span>
                  </div>
                  {it.detail && <div style={{ fontSize: 13, color: C.muted, marginTop: 7, lineHeight: 1.55, paddingLeft: 12 }}>{it.detail}</div>}
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 10.5, letterSpacing: "0.14em", textTransform: "uppercase", color: tone.c }}>
                    {t.safety.kinds[it.kind]}
                  </div>
                  <div style={{ fontSize: 11, color: inferred ? C.warnText : C.muted, marginTop: 4, lineHeight: 1.4, fontStyle: inferred ? "italic" : "normal" }}>
                    {t.safety.origins[it.origin]}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}


export default function PeptideCard({ p, t }) {
  const lv = t.levels[p.level];
  return (
    <>
      <section style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) auto", gap: 28, alignItems: "start", marginBottom: 34 }}>
        <div style={{ minWidth: 0 }}>
          <Label>{p.className}</Label>
          <h1 style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: "clamp(32px, 6vw, 52px)", lineHeight: 1.02, margin: "10px 0 4px", color: C.inkDeep, letterSpacing: "-0.01em" }}>
            {p.name}
          </h1>
          {p.altName !== p.name && (
            <div style={{ fontFamily: "'IBM Plex Serif', serif", fontStyle: "italic", color: C.muted, fontSize: 15 }}>{p.altName}</div>
          )}
          <p style={{ marginTop: 18, fontSize: 15.5, lineHeight: 1.62, maxWidth: 560, color: "#2C3D4C" }}>{p.summary}</p>
        </div>
        <div style={{ textAlign: "right" }}>
          <Ridges level={p.level} width={172} height={72} weight={1.6} />
          <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 13, letterSpacing: "0.16em", textTransform: "uppercase", color: p.level === "NO_DATA" ? C.muted : C.ink, marginTop: 8 }}>
            {lv.label}
          </div>
          <div style={{ fontSize: 11.5, color: C.muted, maxWidth: 190, marginTop: 4, lineHeight: 1.45 }}>{lv.gloss}</div>
        </div>
      </section>

      <section style={{ marginBottom: 40 }}>
        <div className="ev-axes" style={{ display: "grid", gridTemplateColumns: "1fr 1px 1fr", gap: 22, border: `1px solid ${C.rule}`, background: C.paperDeep, padding: 22, borderRadius: 3 }}>
          <div>
            <Label color={C.ink}>{t.axes.science}</Label>
            <div style={{ marginTop: 12 }}><Ridges level={p.level} width={120} height={34} animate={false} /></div>
            <div style={{ fontSize: 13.5, color: "#2C3D4C", marginTop: 10, lineHeight: 1.5 }}>
              {t.axes.studies(p.claims.reduce((a, c) => a + c.n, 0), p.claims.reduce((a, c) => a + c.nh, 0))}
            </div>
          </div>
          <div style={{ background: C.rule }} />
          <div>
            <Label color={C.field}>{t.axes.community}</Label>
            <div style={{ marginTop: 12, display: "flex", alignItems: "flex-end", gap: 3, height: 34 }}>
              {[0.5, 0.8, 0.65, 1, 0.75, 0.9, 0.55, 0.85].map((h, i) => (
                <div key={i} style={{ width: 9, height: `${h * 100}%`, background: C.fieldSoft, opacity: 0.85 }} />
              ))}
            </div>
            <div style={{ fontSize: 13.5, color: "#4A5240", marginTop: 10, lineHeight: 1.5 }}>
              {t.axes.reports(p.community.n, p.community.adverse, p.community.coa)}
            </div>
          </div>
        </div>
        <div style={{ fontSize: 11.5, color: C.muted, marginTop: 9, textAlign: "center" }}>{t.axes.neverAveraged}</div>
      </section>

      <StudiedCeiling ceiling={p.ceiling} t={t} />
      <WhatPeopleReport reports={p.reports} t={t} />

      <section style={{ marginBottom: 40 }}>
        <Label color={C.ink}>{t.claims.title}</Label>
        <div style={{ marginTop: 14 }}>
          {p.claims.map((c, i) => (
            <div key={i} className="ev-claim" style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) 92px 130px", gap: 16, alignItems: "center", padding: "15px 0", borderTop: `1px solid ${C.rule}` }}>
              <div style={{ fontSize: 15, lineHeight: 1.45, color: c.level === "NO_DATA" ? C.muted : "#22384A" }}>{c.text}</div>
              <Ridges level={c.level} width={92} height={26} weight={1.2} />
              <div className="ev-claim-meta" style={{ textAlign: "right" }}>
                <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: c.level === "NO_DATA" ? C.muted : C.ink }}>
                  {t.levels[c.level].label}
                </div>
                <div style={{ fontSize: 11.5, color: C.muted, marginTop: 2 }}>
                  {c.n === 0 ? t.claims.none : t.claims.count(c.n, c.nh)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: 40 }}>
        <Label color={C.ink}>{t.source.title}</Label>
        {p.study ? (
          <div style={{ marginTop: 14, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", border: `1px solid ${C.rule}`, borderRadius: 3, overflow: "hidden" }}>
            <div style={{ padding: 22, background: "#FFF" }}>
              <Label>{t.source.plain}</Label>
              <div style={{ fontSize: 14.5, lineHeight: 1.6, marginTop: 12, color: "#22384A" }}>{p.study.plain}</div>
              <div style={{ marginTop: 16, paddingTop: 14, borderTop: `1px solid ${C.rule}` }}>
                <Label color={C.warnText}>{t.source.limits}</Label>
                <div style={{ fontSize: 13.5, lineHeight: 1.55, marginTop: 8, color: "#5A4038" }}>{p.study.limits}</div>
              </div>
            </div>
            <div style={{ padding: 22, background: C.paperDeep, borderLeft: `1px solid ${C.rule}` }}>
              <Label>{t.source.original}</Label>
              <div style={{ fontFamily: "'IBM Plex Serif', serif", fontSize: 14.5, lineHeight: 1.5, marginTop: 12, color: C.inkDeep }}>{p.study.title}</div>
              <div style={{ fontSize: 12.5, color: C.muted, marginTop: 10, lineHeight: 1.7 }}>
                {p.study.journal}, {p.study.year}<br />{p.study.type}<br />{p.study.n}
              </div>
              <button className="ev-btn" style={{ marginTop: 16, fontFamily: "'Jost', sans-serif", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", padding: "9px 14px", border: `1px solid ${C.ink}`, background: "transparent", color: C.ink, cursor: "pointer", borderRadius: 2 }}>
                {t.source.open}
              </button>
            </div>
          </div>
        ) : (
          <div style={{ marginTop: 14, border: `1px dashed ${C.muted}`, borderRadius: 3, padding: "34px 24px", textAlign: "center", background: "#FFF" }}>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: 14 }}><Ridges level="NO_DATA" width={200} height={20} /></div>
            <div style={{ fontSize: 15.5, color: "#22384A", maxWidth: 470, margin: "0 auto", lineHeight: 1.6 }}>{t.source.emptyTitle}</div>
            <div style={{ fontSize: 13, color: C.muted, maxWidth: 470, margin: "10px auto 0" }}>{t.source.emptyBody}</div>
          </div>
        )}
      </section>

      <Safety safety={p.safety} t={t} />

      <section>
        <Label color={C.ink}>{t.regulatory.title}</Label>
        <div style={{ marginTop: 14, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))", gap: 18 }}>
          {p.regulatory.map((r, i) => {
            const tone = toneMap[r.tone];
            return (
              <div key={i} style={{ borderLeft: `2px solid ${tone.border}`, paddingLeft: 10, marginBottom: 12 }}>
                <Label color={C.muted}>{r.country} · {r.agency}</Label>
                <div style={{ fontSize: 13.5, color: tone.text, marginTop: 3 }}>{r.status}</div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
