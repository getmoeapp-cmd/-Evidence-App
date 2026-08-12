import React from "react";
import { C } from "../theme.js";

// La marca real (huella de curvas de nivel) + el wordmark en tipografía.
// El wordmark va como texto y no como imagen: escala nítido en cualquier
// pantalla y se puede seleccionar y leer por lectores de pantalla.
export default function Logo({ size = 30, showWordmark = true, gap = 13 }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap }}>
      <img
        src="/evidence-mark.png"
        alt=""
        width={size}
        height={size}
        style={{ display: "block", flexShrink: 0 }}
      />
      {showWordmark && (
        <span
          style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: Math.round(size * 0.62),
            letterSpacing: "0.4em",
            color: C.ink,
            fontWeight: 400,
            lineHeight: 1,
            paddingLeft: 1,
          }}
        >
          EVIDENCE
        </span>
      )}
    </div>
  );
}
