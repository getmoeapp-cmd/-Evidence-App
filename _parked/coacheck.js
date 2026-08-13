// Reglas de revisión estructural de un COA.
// Cada regla mira un campo extraído. Ninguna prueba autenticidad —
// eso no lo puede hacer ningún software, solo el laboratorio emisor.

export const RULES = [
  { id: "product", weight: "critical",
    ok: (d) => Boolean(d.product),
    es: { pass: "Producto identificado", fail: "No se lee el nombre del producto",
          why: "Sin nombre exacto no puedes confirmar que el análisis corresponde a lo que compraste." },
    en: { pass: "Product identified", fail: "Product name not legible",
          why: "Without the exact name you can't confirm the analysis matches what you bought." } },

  { id: "lot", weight: "critical",
    ok: (d) => Boolean(d.lot),
    es: { pass: "Número de lote presente", fail: "Sin número de lote",
          why: "Un COA sin lote no es trazable: no prueba nada sobre el vial que tienes." },
    en: { pass: "Lot number present", fail: "No lot number",
          why: "A COA without a lot number isn't traceable: it proves nothing about the vial you hold." } },

  { id: "reportNumber", weight: "critical",
    ok: (d) => Boolean(d.reportNumber),
    es: { pass: "Número de reporte presente", fail: "Sin número de reporte",
          why: "Es lo que te permite confirmar el documento con el laboratorio. Sin él no hay verificación posible." },
    en: { pass: "Report number present", fail: "No report number",
          why: "It's what lets you confirm the document with the lab. Without it there's no verification possible." } },

  { id: "lab", weight: "critical",
    ok: (d) => Boolean(d.lab) && d.labIsThirdParty !== false,
    es: { pass: "Laboratorio identificado", fail: "Laboratorio ausente o análisis interno",
          why: "«Análisis interno» es la palabra del vendedor. El estándar es un tercero independiente." },
    en: { pass: "Laboratory identified", fail: "Lab missing or in-house testing",
          why: "'In-house testing' is the seller's word for it. The standard is an independent third party." } },

  { id: "purity", weight: "high",
    ok: (d) => typeof d.purityHPLC === "number" && d.purityHPLC >= 98,
    warn: (d) => typeof d.purityHPLC === "number" && d.purityHPLC >= 95 && d.purityHPLC < 98,
    es: { pass: "Pureza por HPLC de 98% o más", fail: "Pureza ausente o por debajo de lo esperable",
          why: "98% o más es lo normal en producto serio. Por debajo de 95% es una alerta." },
    en: { pass: "HPLC purity of 98% or higher", fail: "Purity missing or below expectation",
          why: "98% or above is normal for serious product. Below 95% is a warning." } },

  { id: "ms", weight: "high",
    ok: (d) => d.massSpecConfirmed === true,
    es: { pass: "Identidad confirmada por espectrometría", fail: "Sin confirmación de identidad",
          why: "HPLC mide pureza, no identidad. Algo puede ser 99% puro de la sustancia equivocada." },
    en: { pass: "Identity confirmed by mass spectrometry", fail: "No identity confirmation",
          why: "HPLC measures purity, not identity. Something can be 99% pure of the wrong substance." } },

  { id: "date", weight: "medium",
    ok: (d) => Boolean(d.date),
    es: { pass: "Fecha de análisis presente", fail: "Sin fecha de análisis",
          why: "Un COA sin fecha no se puede contrastar con la producción del lote." },
    en: { pass: "Analysis date present", fail: "No analysis date",
          why: "A COA without a date can't be checked against the lot's production." } },

  { id: "endotoxin", weight: "medium",
    ok: (d) => d.endotoxinTested === true,
    es: { pass: "Incluye prueba de endotoxinas", fail: "Sin prueba de endotoxinas",
          why: "Para inyectables es la prueba que habla de esterilidad, no solo de pureza química." },
    en: { pass: "Includes endotoxin testing", fail: "No endotoxin testing",
          why: "For injectables this is the test that speaks to sterility, not just chemical purity." } },
];

export function review(d) {
  return RULES.map((r) => ({
    id: r.id,
    weight: r.weight,
    state: r.ok(d) ? "pass" : r.warn && r.warn(d) ? "warn" : "fail",
  }));
}
