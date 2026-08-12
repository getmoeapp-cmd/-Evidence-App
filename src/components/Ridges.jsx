import React, { useState, useEffect, useRef } from "react";
import { C, RIDGES } from "../theme.js";

// Las curvas de nivel del logo, usadas como escala de evidencia.
// Más línea = más evidencia. Línea plana punteada = nada medido.
export default function Ridges({ level, width = 160, height = 44, weight = 1.4, animate = true }) {
  const [shown, setShown] = useState(!animate);
  const reduced = useRef(
    typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    if (!animate) return;
    setShown(false);
    const t = setTimeout(() => setShown(true), 30);
    return () => clearTimeout(t);
  }, [level, animate]);

  const n = RIDGES[level];
  const flat = n === 0;
  const measured = level === "NOT_SHOWN";   // plana, pero medida
  const total = flat ? 1 : n;
  const mid = height / 2;

  const paths = Array.from({ length: total }, (_, i) => {
    if (flat) return { d: `M0 ${mid} L${width} ${mid}`, key: "flat", dash: measured ? null : "3 4" };
    const t = total === 1 ? 0.5 : i / (total - 1);
    const y = 4 + t * (height - 8);
    const amp = 5 * Math.sin(Math.PI * t) + 1.5;
    const d = `M0 ${y} C ${width * 0.25} ${y - amp}, ${width * 0.4} ${y + amp}, ${width * 0.55} ${y} S ${width * 0.85} ${y - amp}, ${width} ${y}`;
    return { d, key: i, dash: null };
  });

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} aria-hidden="true" style={{ overflow: "visible" }}>
      {paths.map((p, i) => (
        <path
          key={p.key}
          d={p.d}
          fill="none"
          stroke={measured ? C.warn : flat ? C.muted : C.ridge}
          strokeWidth={weight}
          strokeLinecap="round"
          strokeDasharray={p.dash ?? 400}
          strokeDashoffset={p.dash ? 0 : shown || reduced.current ? 0 : 400}
          style={{
            transition: reduced.current ? "none" : `stroke-dashoffset 700ms cubic-bezier(.22,.8,.3,1) ${i * 45}ms`,
            opacity: measured ? 0.9 : flat ? 0.7 : 1,
          }}
        />
      ))}
    </svg>
  );
}
