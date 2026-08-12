import React, { useEffect, useRef } from "react";
import { C } from "../theme.js";
import Ridges from "./Ridges.jsx";

const ORDER = ["A", "B", "C", "D", "NOT_SHOWN", "NO_DATA"];

// El botón que abre la explicación. Va resaltado a propósito: es la pregunta
// que todo el mundo se hace la primera vez que ve una cresta.
export function LevelKeyTrigger({ onClick, label }) {
  return (
    <button
      className="ev-btn ev-help"
      onClick={onClick}
      style={{
        display: "inline-flex", alignItems: "center", gap: 7,
        fontFamily: "'Jost', sans-serif", fontSize: 11.5, letterSpacing: "0.06em",
        fontWeight: 500, padding: "7px 12px 7px 8px", borderRadius: 20, cursor: "pointer",
        border: `1px solid ${C.ink}`, background: "rgba(30,63,95,0.07)", color: C.ink,
      }}
    >
      <span
        aria-hidden="true"
        style={{
          display: "inline-flex", alignItems: "center", justifyContent: "center",
          width: 17, height: 17, borderRadius: "50%", background: C.ink,
          color: C.paper, fontSize: 11, lineHeight: 1, fontWeight: 500, paddingBottom: 1,
        }}
      >
        ?
      </span>
      {label}
    </button>
  );
}

export default function LevelKey({ open, onClose, t }) {
  const panelRef = useRef(null);
  const closeRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;
  const k = t.levelKey;

  return (
    <div
      onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}
      style={{
        position: "fixed", inset: 0, zIndex: 90,
        background: "rgba(18,40,61,0.34)",
        display: "flex", alignItems: "flex-end", justifyContent: "center",
        padding: 0,
      }}
      className="ev-modal-wrap"
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={k.title}
        className="ev-modal"
        style={{
          background: C.paper, width: "100%", maxWidth: 560,
          borderRadius: "10px 10px 0 0", padding: "26px 24px 30px",
          maxHeight: "88vh", overflowY: "auto",
          boxShadow: "0 -10px 40px rgba(18,40,61,0.22)",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16 }}>
          <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 22, fontWeight: 400, color: C.inkDeep, lineHeight: 1.2 }}>
            {k.title}
          </div>
          <button
            ref={closeRef}
            className="ev-btn"
            onClick={onClose}
            aria-label={k.close}
            style={{
              flexShrink: 0, width: 30, height: 30, borderRadius: "50%",
              border: `1px solid ${C.chipBorder}`, background: "#FFF",
              color: C.tabIdle, fontSize: 15, lineHeight: 1, cursor: "pointer",
            }}
          >
            ×
          </button>
        </div>

        <p style={{ fontSize: 14, lineHeight: 1.62, color: "#2C3D4C", marginTop: 12, marginBottom: 0 }}>
          {k.intro}
        </p>

        <div style={{ marginTop: 22 }}>
          {ORDER.map((lv) => (
            <div
              key={lv}
              style={{
                display: "grid", gridTemplateColumns: "86px minmax(0,1fr)", gap: 14,
                alignItems: "start", padding: "15px 0", borderTop: `1px solid ${C.rule}`,
              }}
            >
              <div>
                <Ridges level={lv} width={80} height={24} weight={1.2} animate={false} />
                <div
                  style={{
                    fontFamily: "'Jost', sans-serif", fontSize: 10.5, letterSpacing: "0.13em",
                    textTransform: "uppercase", color: lv === "NOT_SHOWN" ? C.warnText : lv === "NO_DATA" ? C.tabIdle : C.ink, marginTop: 5,
                  }}
                >
                  {t.levels[lv].label}
                </div>
              </div>
              <div style={{ fontSize: 13.5, lineHeight: 1.58, color: "#22384A", paddingTop: 1 }}>
                {k.items[lv]}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: 20, padding: "15px 16px", background: "rgba(30,63,95,0.05)",
            border: `1px solid ${C.rule}`, borderRadius: 4,
            fontSize: 13, lineHeight: 1.6, color: "#2C3D4C",
          }}
        >
          {k.footer}
        </div>
      </div>
    </div>
  );
}
