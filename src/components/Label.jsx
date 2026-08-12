import React from "react";
import { C } from "../theme.js";

export default function Label({ children, color = C.muted }) {
  return (
    <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color, fontWeight: 500 }}>
      {children}
    </div>
  );
}
