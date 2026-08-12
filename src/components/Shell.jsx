import React from "react";
import { C } from "../theme.js";

export function Card({ children, dashed = false, pad = 22 }) {
  return (
    <div style={{ border: dashed ? `1px dashed ${C.muted}` : `1px solid ${C.rule}`, borderRadius: 3, background: "#FFF", padding: pad }}>
      {children}
    </div>
  );
}

export function Soon({ text }) {
  return (
    <span style={{ fontFamily: "'Jost', sans-serif", fontSize: 9.5, letterSpacing: "0.16em", textTransform: "uppercase", color: C.muted, border: `1px solid ${C.rule}`, borderRadius: 2, padding: "3px 7px" }}>
      {text}
    </span>
  );
}
