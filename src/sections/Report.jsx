import React, { useState } from "react";
import { C } from "../theme.js";
import Label from "../components/Label.jsx";
import { Card } from "../components/Shell.jsx";

function Choice({ label, value, onChange, options }) {
  return (
    <div style={{ marginTop: 20 }}>
      <div style={{ fontSize: 14, color: "#22384A", marginBottom: 8 }}>{label}</div>
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
        {options.map((o) => (
          <button
            key={o}
            className="ev-btn"
            onClick={() => onChange(o)}
            aria-pressed={value === o}
            style={{
              fontFamily: "'Jost', sans-serif", fontSize: 11.5, letterSpacing: "0.08em",
              padding: "8px 14px", borderRadius: 2, cursor: "pointer",
              border: `1px solid ${value === o ? C.field : C.rule}`,
              background: value === o ? C.field : "transparent",
              color: value === o ? "#FFF" : C.muted,
            }}
          >
            {o}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function Report({ list, t }) {
  const [compound, setCompound] = useState("");
  const [coa, setCoa] = useState(null);
  const [stack, setStack] = useState(null);
  const [habits, setHabits] = useState(null);
  const [adverse, setAdverse] = useState(null);
  const yn = [t.report.yes, t.report.no, t.report.unsure];

  return (
    <>
      <Label color={C.field}>{t.report.title}</Label>
      <div style={{ fontSize: 13, color: C.muted, marginTop: 6, maxWidth: 620, lineHeight: 1.5 }}>{t.report.intro}</div>

      <div style={{ marginTop: 24, maxWidth: 620 }}>
        <Card>
          <div style={{ fontSize: 14, color: "#22384A", marginBottom: 8 }}>{t.report.fCompound}</div>
          <select
            value={compound}
            onChange={(e) => setCompound(e.target.value)}
            className="ev-input"
            style={{ width: "100%", padding: "11px 13px", border: `1px solid ${C.rule}`, borderRadius: 2, background: C.paperDeep, fontSize: 14, color: C.inkDeep, fontFamily: "inherit", cursor: "pointer" }}
          >
            <option value="">{t.report.fChoose}</option>
            {list.map((p) => (
              <option key={p.slug} value={p.slug}>{p.name}</option>
            ))}
          </select>

          <Choice label={t.report.fAdverse} value={adverse} onChange={setAdverse} options={[t.report.fAdverseNone, t.report.yes]} />
          <Choice label={t.report.fCoa} value={coa} onChange={setCoa} options={yn} />
          <Choice label={t.report.fStack} value={stack} onChange={setStack} options={yn} />
          <Choice label={t.report.fHabits} value={habits} onChange={setHabits} options={yn} />

          <button
            className="ev-btn"
            style={{ marginTop: 26, width: "100%", fontFamily: "'Jost', sans-serif", fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", padding: "13px 16px", border: "none", background: C.field, color: "#FFF", borderRadius: 2, cursor: "pointer" }}
          >
            {t.report.submit}
          </button>
        </Card>

        <div style={{ fontSize: 12.5, color: C.muted, marginTop: 14, lineHeight: 1.6 }}>{t.report.why}</div>
      </div>
    </>
  );
}
