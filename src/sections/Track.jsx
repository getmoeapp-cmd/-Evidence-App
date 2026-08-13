import React, { useState, useEffect, useMemo } from "react";
import { C } from "../theme.js";
import Label from "../components/Label.jsx";
import { CATALOG } from "../data/catalog.js";
import { load, save, wipe, FREQ, ceilingOf, compare } from "../data/track.js";

const today = () => new Date().toISOString().slice(0, 10);
const uid = () => Math.random().toString(36).slice(2, 10);

export default function Track({ full, lang, t }) {
  const [entries, setEntries] = useState([]);
  const [form, setForm] = useState({ slug: "", dose: "", freq: "week", date: today(), notes: "", adverse: false });
  const [confirmWipe, setConfirmWipe] = useState(false);
  const k = t.track;

  useEffect(() => { setEntries(load()); }, []);

  const byDate = useMemo(() => [...entries].sort((a, b) => b.date.localeCompare(a.date)), [entries]);
  const record = form.slug ? full.find((p) => p.slug === form.slug) : null;
  const ceiling = record ? ceilingOf(record, lang) : null;
  const preview = form.slug && form.dose ? compare(form, ceiling) : null;

  function add() {
    if (!form.slug || !form.dose) return;
    const next = [{ ...form, id: uid() }, ...entries];
    setEntries(next); save(next);
    setForm({ slug: form.slug, dose: "", freq: form.freq, date: today(), notes: "", adverse: false });
  }
  function remove(id) {
    const next = entries.filter((e) => e.id !== id);
    setEntries(next); save(next);
  }
  function exportJson() {
    const blob = new Blob([JSON.stringify(entries, null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `evidence-track-${today()}.json`;
    a.click(); URL.revokeObjectURL(a.href);
  }

  const field = (v, on, ph, type = "text") => (
    <input value={v} onChange={(e) => on(e.target.value)} placeholder={ph} type={type} inputMode={type === "number" ? "decimal" : undefined}
      className="ev-input"
      style={{ width: "100%", padding: "12px 14px", border: `1px solid ${C.chipBorder}`, borderRadius: 3, background: "#FFF", fontSize: 16, color: C.inkDeep, fontFamily: "inherit" }} />
  );
  const cap = (s) => (
    <span style={{ display: "block", fontFamily: "'Jost', sans-serif", fontSize: 9.5, letterSpacing: "0.16em", textTransform: "uppercase", color: C.tabIdle, marginBottom: 6 }}>{s}</span>
  );

  return (
    <>
      <Label color={C.ink}>{k.title}</Label>
      <div style={{ fontSize: 13.5, color: C.muted, marginTop: 6, maxWidth: 640, lineHeight: 1.55 }}>{k.intro}</div>

      {/* El aviso de privacidad va primero, no en el pie. */}
      <div style={{ marginTop: 16, padding: "17px 19px", background: "rgba(30,63,95,0.06)", border: `1px solid ${C.ridge}`, borderRadius: 4, maxWidth: 660 }}>
        <Label color={C.ink}>{k.privacyTitle}</Label>
        <div style={{ fontSize: 14, lineHeight: 1.62, color: "#22384A", marginTop: 8 }}>{k.privacyBody}</div>
      </div>

      {/* Alta de registro */}
      <section style={{ marginTop: 28, maxWidth: 660 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(190px,1fr))", gap: 12 }}>
          <label>
            {cap(k.compound)}
            <select value={form.slug} onChange={(e) => setForm({ ...form, slug: e.target.value })} className="ev-input"
              style={{ width: "100%", padding: "12px 14px", border: `1px solid ${C.chipBorder}`, borderRadius: 3, background: "#FFF", fontSize: 15, color: C.inkDeep, fontFamily: "inherit", cursor: "pointer" }}>
              <option value="">{k.choose}</option>
              {CATALOG.filter((c) => !c.blend).map((c) => <option key={c.slug} value={c.slug}>{c.name}</option>)}
            </select>
          </label>
          <label>{cap(k.date)}{field(form.date, (v) => setForm({ ...form, date: v }), "", "date")}</label>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 12 }}>
          <label>{cap(k.dose)}{field(form.dose, (v) => setForm({ ...form, dose: v }), "", "number")}</label>
          <label>
            {cap(k.freq)}
            <select value={form.freq} onChange={(e) => setForm({ ...form, freq: e.target.value })} className="ev-input"
              style={{ width: "100%", padding: "12px 14px", border: `1px solid ${C.chipBorder}`, borderRadius: 3, background: "#FFF", fontSize: 15, color: C.inkDeep, fontFamily: "inherit", cursor: "pointer" }}>
              {FREQ.map((f) => <option key={f.id} value={f.id}>{f[lang]}</option>)}
            </select>
          </label>
        </div>

        {/* Comparación con el techo — el dato que solo Evidence puede dar */}
        {preview && preview.kind !== "no_ceiling" && (
          <div style={{ marginTop: 14, padding: "14px 17px", borderRadius: 4, fontSize: 14, lineHeight: 1.6,
            border: `1px solid ${preview.kind === "above" ? "rgba(180,85,47,0.45)" : C.rule}`,
            background: preview.kind === "above" ? "rgba(180,85,47,0.08)" : "rgba(30,63,95,0.05)",
            color: preview.kind === "above" ? "#5A4038" : "#22384A" }}>
            {preview.kind === "above" && k.above(preview.ceiling.label, preview.ceiling.frequency)}
            {preview.kind === "within" && k.within(preview.ceiling.label, preview.ceiling.frequency)}
            {preview.kind === "freq_mismatch" && k.freqMismatch(preview.ceiling.label, preview.ceiling.frequency)}
          </div>
        )}
        {preview && preview.kind === "no_ceiling" && (
          <div style={{ marginTop: 14, padding: "14px 17px", borderRadius: 4, border: `1px dashed ${C.muted}`, background: "#FFF", fontSize: 14, lineHeight: 1.6, color: "#4A5560" }}>
            {k.noCeiling}
          </div>
        )}

        <label style={{ display: "block", marginTop: 14 }}>
          {cap(k.notes)}
          <textarea value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} rows={3} placeholder={k.notesPh}
            className="ev-input"
            style={{ width: "100%", padding: "12px 14px", border: `1px solid ${C.chipBorder}`, borderRadius: 3, background: "#FFF", fontSize: 15, color: C.inkDeep, fontFamily: "inherit", resize: "vertical" }} />
        </label>

        <button className="ev-btn" onClick={() => setForm({ ...form, adverse: !form.adverse })} aria-pressed={form.adverse}
          style={{ marginTop: 12, display: "flex", alignItems: "center", gap: 10, width: "100%", textAlign: "left",
            padding: "12px 14px", borderRadius: 3, cursor: "pointer",
            border: `1px solid ${form.adverse ? C.warn : C.chipBorder}`,
            background: form.adverse ? "rgba(180,85,47,0.08)" : "#FFF", fontFamily: "inherit" }}>
          <span aria-hidden="true" style={{ width: 19, height: 19, borderRadius: 3, flexShrink: 0,
            border: `1.5px solid ${form.adverse ? C.warn : C.chipBorder}`, background: form.adverse ? C.warn : "#FFF",
            color: "#FFF", fontSize: 12, lineHeight: "17px", textAlign: "center" }}>{form.adverse ? "✓" : ""}</span>
          <span style={{ fontSize: 14.5, color: form.adverse ? C.warnText : "#4A5560" }}>{k.adverse}</span>
        </button>

        {form.adverse && (
          <div style={{ marginTop: 10, padding: "13px 16px", background: "rgba(180,85,47,0.07)", border: `1px solid rgba(180,85,47,0.32)`, borderRadius: 4, fontSize: 14, lineHeight: 1.6, color: "#5A4038" }}>
            {k.adverseNote}
          </div>
        )}

        <button className="ev-btn" onClick={add} disabled={!form.slug || !form.dose}
          style={{ marginTop: 18, width: "100%", fontFamily: "'Jost', sans-serif", fontSize: 12, letterSpacing: "0.14em",
            textTransform: "uppercase", padding: "14px 16px", border: "none",
            background: !form.slug || !form.dose ? C.chipBorder : C.ink, color: C.paper, borderRadius: 3,
            cursor: !form.slug || !form.dose ? "not-allowed" : "pointer" }}>
          {k.add}
        </button>
      </section>

      {/* Historial */}
      <section style={{ marginTop: 40 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 12, flexWrap: "wrap" }}>
          <Label color={C.ink}>{k.history}</Label>
          {entries.length > 0 && (
            <div style={{ display: "flex", gap: 8 }}>
              <button className="ev-btn" onClick={exportJson}
                style={{ fontFamily: "'Jost', sans-serif", fontSize: 10.5, letterSpacing: "0.12em", textTransform: "uppercase",
                  padding: "7px 12px", border: `1px solid ${C.chipBorder}`, background: "transparent", color: C.tabIdle, borderRadius: 2, cursor: "pointer" }}>
                {k.export}
              </button>
              <button className="ev-btn" onClick={() => { if (confirmWipe) { wipe(); setEntries([]); setConfirmWipe(false); } else setConfirmWipe(true); }}
                style={{ fontFamily: "'Jost', sans-serif", fontSize: 10.5, letterSpacing: "0.12em", textTransform: "uppercase",
                  padding: "7px 12px", border: `1px solid ${confirmWipe ? C.warn : C.chipBorder}`, background: confirmWipe ? "rgba(180,85,47,0.08)" : "transparent",
                  color: confirmWipe ? C.warnText : C.tabIdle, borderRadius: 2, cursor: "pointer" }}>
                {confirmWipe ? k.wipeConfirm : k.wipe}
              </button>
            </div>
          )}
        </div>

        {byDate.length === 0 ? (
          <div style={{ marginTop: 16, padding: "30px 24px", border: `1px dashed ${C.chipBorder}`, borderRadius: 3, background: "#FFF", fontSize: 14.5, color: "#4A5560", lineHeight: 1.62, maxWidth: 640 }}>
            {k.empty}
          </div>
        ) : (
          <div style={{ marginTop: 14 }}>
            {byDate.map((e) => {
              const rec = full.find((p) => p.slug === e.slug);
              const cmp = compare(e, ceilingOf(rec, lang));
              const cat = CATALOG.find((c) => c.slug === e.slug);
              return (
                <div key={e.id} style={{ borderTop: `1px solid ${C.rule}`, padding: "16px 0" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "baseline", flexWrap: "wrap" }}>
                    <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 17, color: C.inkDeep }}>
                      {cat?.name || e.slug}
                      <span style={{ color: C.tabIdle, fontSize: 14, marginLeft: 10 }}>
                        {e.dose} mg · {FREQ.find((f) => f.id === e.freq)?.[lang]}
                      </span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <span style={{ fontSize: 12.5, color: C.muted }}>{e.date}</span>
                      <button className="ev-btn" onClick={() => remove(e.id)} aria-label={k.delete}
                        style={{ border: "none", background: "transparent", color: C.muted, cursor: "pointer", fontSize: 16, lineHeight: 1, padding: 2 }}>×</button>
                    </div>
                  </div>

                  {cmp.kind === "above" && (
                    <div style={{ marginTop: 8, fontSize: 13, color: C.warnText, lineHeight: 1.55 }}>
                      {k.aboveShort(cmp.ceiling.label, cmp.ceiling.frequency)}
                    </div>
                  )}
                  {e.adverse && (
                    <div style={{ marginTop: 8, display: "inline-block", fontFamily: "'Jost', sans-serif", fontSize: 9.5,
                      letterSpacing: "0.14em", textTransform: "uppercase", color: C.warnText,
                      border: `1px solid rgba(180,85,47,0.4)`, borderRadius: 2, padding: "3px 7px" }}>
                      {k.adverseTag}
                    </div>
                  )}
                  {e.notes && (
                    <div style={{ marginTop: 8, fontSize: 14, color: "#2C3D4C", lineHeight: 1.6, whiteSpace: "pre-wrap" }}>{e.notes}</div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </section>
    </>
  );
}
