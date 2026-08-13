// "Comprar bien" — guía de COA + scorecard de vendedor.
//
// LÓGICA DEL SCORECARD: dos criterios son COMPUERTAS, no puntos.
// Sin COA del lote y sin laboratorio independiente, ningún puntaje alto
// compensa: no se puede "sumar" hasta salir de comprar a ciegas.
// Los pesos son propios — ajústalos, pero mantén las compuertas.

export const COA = {
  es: {
    title: "Cómo leer un COA",
    intro:
      "El Certificado de Análisis es el informe de laboratorio que dice qué es el producto y qué tan puro es. Sin uno específico de tu lote y de un laboratorio independiente, no tienes prueba de nada.",
    fields: [
      { k: "Producto", v: "El nombre exacto del péptido.", why: "Debe coincidir con lo que compraste, no con una familia parecida." },
      { k: "Lote", v: "El número de producción.", why: "Tiene que coincidir con el impreso en tu vial. Un COA de otro lote no dice nada sobre el tuyo." },
      { k: "Fecha", v: "Cuándo se hizo el análisis.", why: "Un COA viejo no representa el lote que tienes en la mano." },
      { k: "Pureza (HPLC)", v: "El porcentaje de pureza.", why: "98% o más es lo esperable; por debajo de 95% es una alerta." },
      { k: "Identidad (MS)", v: "Espectrometría de masas.", why: "Confirma que ES el péptido declarado. Algo puede ser 99% puro… de otra sustancia." },
      { k: "Laboratorio", v: "Quién hizo el análisis.", why: "Independiente y verificable. «Análisis interno» es la palabra del vendedor." },
    ],
    pairTitle: "HPLC y MS responden preguntas distintas",
    pair: "HPLC mide pureza. La espectrometría de masas confirma identidad. Un COA con solo HPLC está a medias: te dice que hay poca basura, no que dentro esté lo que pediste.",
    verifyTitle: "El paso que casi nadie da",
    verifyIntro:
      "Un PDF se edita en minutos. El COA solo vale si lo confirmas con el laboratorio, no con quien te lo vende.",
    verify: [
      "Busca el número de reporte y valídalo en la web del laboratorio, o por el QR si lo trae.",
      "Si el laboratorio valida por correo, escríbeles tú con ese número y confirma que coincide.",
      "Compara producto, lote y fecha del COA con lo que dice tu vial.",
      "Desconfía de un COA sin número de reporte, sin nombre de laboratorio, o en imagen de baja resolución.",
    ],
    inspectTitle: "Cuando llega",
    inspect: [
      { k: "Vial y sello", v: "Tapa flip-top intacta. Etiqueta legible con nombre, cantidad y lote. Vidrio sin fisuras." },
      { k: "El polvo", v: "Liofilizado: polvo o torta blanca. En viales de pocos mcg puede verse muy poco, es normal. Color amarillo o marrón, o aspecto aceitoso, es alerta." },
      { k: "Al reconstituir", v: "La solución debe quedar transparente. Turbidez, partículas o color: no lo uses y contacta al vendedor." },
    ],
    inspectNote:
      "Esto es control de calidad, no permiso de uso. Que se vea bien no significa que sea lo que dice la etiqueta — para eso está el COA.",
  },
  en: {
    title: "How to read a COA",
    intro:
      "The Certificate of Analysis is the lab report that says what the product is and how pure it is. Without one specific to your lot, from an independent lab, you have proof of nothing.",
    fields: [
      { k: "Product", v: "The exact peptide name.", why: "It has to match what you bought, not a similar-sounding family member." },
      { k: "Lot", v: "The production number.", why: "It has to match the one printed on your vial. A COA from another lot says nothing about yours." },
      { k: "Date", v: "When the analysis was run.", why: "An old COA doesn't represent the lot in your hand." },
      { k: "Purity (HPLC)", v: "The purity percentage.", why: "98% or above is what to expect; below 95% is a warning." },
      { k: "Identity (MS)", v: "Mass spectrometry.", why: "Confirms it IS the declared peptide. Something can be 99% pure… of the wrong substance." },
      { k: "Laboratory", v: "Who ran the analysis.", why: "Independent and verifiable. 'In-house testing' is the seller's word for it." },
    ],
    pairTitle: "HPLC and MS answer different questions",
    pair: "HPLC measures purity. Mass spectrometry confirms identity. A COA with only HPLC is half a document: it tells you there's little junk, not that what's inside is what you ordered.",
    verifyTitle: "The step almost nobody takes",
    verifyIntro:
      "A PDF can be edited in minutes. A COA only counts if you confirm it with the laboratory, not with the person selling it to you.",
    verify: [
      "Find the report number and validate it on the lab's website, or via the QR code if there is one.",
      "If the lab validates by email, write to them yourself with that number and confirm it matches.",
      "Compare product, lot, and date on the COA against what's on your vial.",
      "Be wary of a COA with no report number, no lab name, or presented as a low-resolution image.",
    ],
    inspectTitle: "When it arrives",
    inspect: [
      { k: "Vial and seal", v: "Flip-top cap intact. Legible label with name, quantity, and lot. Glass with no cracks." },
      { k: "The powder", v: "Lyophilized: white powder or cake. In low-microgram vials there may be very little visible, which is normal. Yellow or brown color, or an oily look, is a warning." },
      { k: "On reconstitution", v: "The solution should be clear. Cloudiness, particles, or color: don't use it and contact the seller." },
    ],
    inspectNote:
      "This is quality control, not permission to use. Looking right doesn't mean it's what the label says — that's what the COA is for.",
  },
};

// Compuertas: si fallan, ningún puntaje las compensa.
export const GATES = [
  { id: "lot_coa", es: "Entrega un COA específico de TU lote", en: "Provides a COA specific to YOUR lot" },
  { id: "third_party", es: "El COA es de un laboratorio independiente, no interno", en: "The COA is from an independent lab, not in-house" },
];

// Criterios puntuados. Suman 100.
export const CRITERIA = [
  { id: "verifiable", w: 14, es: "Puedes verificar el COA con el laboratorio por tu cuenta", en: "You can verify the COA with the lab yourself" },
  { id: "lot_match", w: 12, es: "El lote del COA coincide con el impreso en el vial", en: "The COA lot matches the one printed on the vial" },
  { id: "hplc", w: 12, es: "Pureza por HPLC de 98% o más", en: "HPLC purity of 98% or higher" },
  { id: "ms", w: 10, es: "Identidad confirmada por espectrometría de masas", en: "Identity confirmed by mass spectrometry" },
  { id: "endotoxin", w: 9, es: "Prueba de endotoxinas o esterilidad (para inyectables)", en: "Endotoxin or sterility testing (for injectables)" },
  { id: "routine", w: 9, es: "Publica los análisis de forma habitual, no solo si los pides", en: "Publishes testing routinely, not only on request" },
  { id: "track", w: 9, es: "Trayectoria verificable y reputación consistente", en: "Verifiable track record and consistent reputation" },
  { id: "vials", w: 7, es: "Viales sellados, etiquetados y en buen estado al llegar", en: "Vials sealed, labeled, and in good condition on arrival" },
  { id: "answers", w: 6, es: "Responde preguntas técnicas sin evasivas", en: "Answers technical questions without evasion" },
  { id: "logistics", w: 5, es: "Transparencia en origen, envío, conservación y devoluciones", en: "Transparency on origin, shipping, storage, and returns" },
  { id: "price", w: 4, es: "Precio dentro del rango de mercado", en: "Price within the market range" },
  { id: "payment", w: 3, es: "Método de pago con algún recurso o protección", en: "Payment method with some recourse or protection" },
];

// Preguntas que se generan a partir de lo que NO se marcó.
export const ASKS = {
  lot_coa:   { es: "¿Me envían el COA de este lote específico?", en: "Can you send the COA for this specific lot?" },
  third_party:{ es: "¿Qué laboratorio independiente hizo el análisis?", en: "Which independent lab ran the analysis?" },
  verifiable:{ es: "¿Cuál es el número de reporte para verificarlo con el laboratorio?", en: "What's the report number so I can verify it with the lab?" },
  lot_match: { es: "¿El lote del COA coincide con el impreso en el vial?", en: "Does the COA lot match the one printed on the vial?" },
  hplc:      { es: "¿Qué pureza por HPLC tiene este lote?", en: "What's the HPLC purity for this lot?" },
  ms:        { es: "¿Confirmaron la identidad por espectrometría de masas?", en: "Did you confirm identity by mass spectrometry?" },
  endotoxin: { es: "¿Tienen prueba de endotoxinas o esterilidad?", en: "Do you have endotoxin or sterility testing?" },
  routine:   { es: "¿Publican los análisis de todos los lotes?", en: "Do you publish testing for every lot?" },
  track:     { es: "¿Dónde puedo ver referencias verificables de otros compradores?", en: "Where can I see verifiable references from other buyers?" },
  vials:     { es: "¿Cómo llegan los viales: sellados, etiquetados, con lote?", en: "How do the vials arrive: sealed, labeled, with a lot number?" },
  answers:   { es: "", en: "" },
  logistics: { es: "¿Cómo se envía y conserva, y qué pasa si llega dañado?", en: "How is it shipped and stored, and what happens if it arrives damaged?" },
  price:     { es: "", en: "" },
  payment:   { es: "¿Qué métodos de pago aceptan?", en: "What payment methods do you accept?" },
};

// Veredicto: las compuertas mandan sobre el puntaje.
export function verdict(score, gatesPassed) {
  if (gatesPassed === 0) return "avoid";
  if (gatesPassed === 1) return score >= 50 ? "caution" : "avoid";
  if (score >= 75) return "trust";
  if (score >= 50) return "caution";
  return "avoid";
}
