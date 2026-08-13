import React, { useState } from "react";
import { C } from "../theme.js";
import Label from "../components/Label.jsx";
import { Card, Soon } from "../components/Shell.jsx";
import BuyWell from "./BuyWell.jsx";

export default function Verify({ lang, t }) {
  const [claim, setClaim] = useState("");
  const [openBuy, setOpenBuy] = useState(false);

  if (openBuy) return <BuyWell lang={lang} t={t} onBack={() => setOpenBuy(false)} />;

  return (
    <>
      <Label color={C.ink}>{t.verify.title}</Label>
      <div style={{ fontSize: 13, color: C.muted, marginTop: 6, maxWidth: 620, lineHeight: 1.5 }}>{t.verify.intro}</div>

      <div style={{ marginTop: 24, display: "grid", gap: 18 }}>
        <Card>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
            <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 20, fontWeight: 400, color: C.inkDeep }}>{t.verify.audit.title}</div>
            <Soon text={t.verify.soon} />
          </div>
          <p style={{ fontSize: 14, lineHeight: 1.6, color: "#2C3D4C", marginTop: 10, maxWidth: 560 }}>{t.verify.audit.desc}</p>
          <textarea
            value={claim}
            onChange={(e) => setClaim(e.target.value)}
            placeholder={t.verify.audit.placeholder}
            rows={3}
            className="ev-input"
            style={{ width: "100%", marginTop: 14, padding: "12px 13px", border: `1px solid ${C.rule}`, borderRadius: 2, background: C.paperDeep, fontSize: 14, color: C.inkDeep, fontFamily: "inherit", resize: "vertical" }}
          />
          <button
            className="ev-btn"
            disabled
            style={{ marginTop: 12, fontFamily: "'Jost', sans-serif", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", padding: "10px 16px", border: `1px solid ${C.rule}`, background: "transparent", color: C.muted, borderRadius: 2, cursor: "not-allowed" }}
          >
            {t.verify.audit.cta}
          </button>
        </Card>

        <Card>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
            <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 20, fontWeight: 400, color: C.inkDeep }}>{t.verify.buy.title}</div>
          </div>
          <p style={{ fontSize: 14, lineHeight: 1.6, color: "#2C3D4C", marginTop: 10, maxWidth: 560 }}>{t.verify.buy.desc}</p>
          <div style={{ display: "flex", gap: 8, marginTop: 14, flexWrap: "wrap" }}>
            <button
              className="ev-btn"
              onClick={() => setOpenBuy(true)}
              style={{ fontFamily: "'Jost', sans-serif", fontSize: 11.5, letterSpacing: "0.13em", textTransform: "uppercase", padding: "11px 18px", border: "none", background: C.ink, color: C.paper, borderRadius: 3, cursor: "pointer" }}
            >
              {t.verify.buy.open}
            </button>
          </div>
        </Card>
      </div>
    </>
  );
}
