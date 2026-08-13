// Registro personal — solo en el dispositivo.
//
// REGLA QUE NO SE ROMPE: estos datos nunca salen del navegador. No hay
// endpoint, no hay sincronización, no hay agregado. Si algún día se añade
// sincronización, tiene que ser opt-in explícito y con otro aviso.
//
// Y la otra: el número de una persona NUNCA se le muestra a otra. Sin
// promedios, sin "lo habitual", sin percentiles. Un registro personal es un
// espejo; un gráfico comunitario de dosis es una recomendación disfrazada.

const KEY = "evidence-track-v1";

export function load() {
  try {
    const raw = localStorage.getItem(KEY);
    const v = raw ? JSON.parse(raw) : [];
    return Array.isArray(v) ? v : [];
  } catch { return []; }
}

export function save(entries) {
  try { localStorage.setItem(KEY, JSON.stringify(entries)); return true; }
  catch { return false; }
}

export function wipe() {
  try { localStorage.removeItem(KEY); return true; } catch { return false; }
}

export const FREQ = [
  { id: "week", es: "por semana", en: "per week" },
  { id: "day", es: "por día", en: "per day" },
  { id: "dose", es: "por dosis", en: "per dose" },
];

// Convierte el techo de la ficha en un número comparable.
// Solo compara cuando la frecuencia coincide: 12 mg semanales y 12 mg
// diarios no son la misma cifra, y tratarlas igual sería un error grave.
export function ceilingOf(record, lang) {
  const c = record?.ceiling;
  if (!c || c.state !== "established" || !c.dose) return null;
  const n = parseFloat(String(c.dose).replace(",", ".").replace(/[^\d.]/g, ""));
  if (!isFinite(n)) return null;
  const f = (c.frequency || "").toLowerCase();
  const freq = /semana|week/.test(f) ? "week" : /día|dia|day/.test(f) ? "day" : /dosis|dose/.test(f) ? "dose" : null;
  return { value: n, freq, label: c.dose, frequency: c.frequency || "", indication: c.indication || "" };
}

export function compare(entry, ceiling) {
  if (!ceiling) return { kind: "no_ceiling" };
  if (ceiling.freq && entry.freq !== ceiling.freq) return { kind: "freq_mismatch", ceiling };
  const d = parseFloat(String(entry.dose).replace(",", "."));
  if (!isFinite(d)) return { kind: "no_ceiling" };
  if (d > ceiling.value) return { kind: "above", ceiling, ratio: d / ceiling.value };
  return { kind: "within", ceiling };
}
