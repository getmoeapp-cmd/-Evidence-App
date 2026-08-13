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

// COA de ejemplo. Los valores son ficticios y están marcados como tales
// en la interfaz — es un modelo para leer, no un certificado real.
export const EXAMPLE = {
  ref: [
    { n: 1, k: "Producto", v: "BPC-157" },
    { n: 2, k: "Lote", v: "LOT 2406-118" },
    { n: 3, k: "Fecha de análisis", v: "2026-05-14" },
    { n: 4, k: "Pureza (HPLC)", v: "99.2 %" },
    { n: 5, k: "Identidad (MS)", v: "Confirmada · MW 1419.5" },
    { n: 6, k: "Laboratorio", v: "Laboratorio independiente" },
    { n: 7, k: "Nº de reporte", v: "A-10293" },
    { n: 8, k: "Endotoxinas", v: "< 0.5 EU/mg" },
  ],
  es: {
    title: "Un COA completo, campo por campo",
    intro: "Ejemplo con valores ficticios. Lo que importa no son las cifras: es qué campos tienen que estar y qué hace cada uno.",
    docTitle: "CERTIFICADO DE ANÁLISIS",
    fake: "Ejemplo · valores ficticios",
    notes: [
      "Debe coincidir exactamente con lo que pediste, no con un nombre parecido.",
      "Tiene que ser el mismo que está impreso en tu vial. Es el campo que conecta el papel con el producto.",
      "Reciente y anterior a que te lo enviaran. Fechas futuras o posteriores al envío no tienen explicación inocente.",
      "98% o más en producto serio. Y debería venir con el cromatograma, no solo con el número.",
      "Confirma que ES ese péptido. Sin este campo, la pureza no significa nada.",
      "Independiente del vendedor, con nombre y datos de contacto verificables.",
      "El campo que hace posible todo lo demás: es lo que le das al laboratorio para confirmar.",
      "Para inyectables. Habla de esterilidad, no de pureza química — son cosas distintas.",
    ],
  },
  en: {
    title: "A complete COA, field by field",
    intro: "An example with fictional values. What matters isn't the numbers: it's which fields have to be there and what each one does.",
    docTitle: "CERTIFICATE OF ANALYSIS",
    fake: "Example · fictional values",
    notes: [
      "Must match exactly what you ordered, not a similar-sounding name.",
      "Has to be the same one printed on your vial. It's the field that connects the paper to the product.",
      "Recent, and earlier than when it shipped to you. Future dates, or dates after shipping, have no innocent explanation.",
      "98% or higher for serious product. And it should come with the chromatogram, not just the number.",
      "Confirms it IS that peptide. Without this field, purity means nothing.",
      "Independent of the seller, with a verifiable name and contact details.",
      "The field that makes everything else possible: it's what you give the lab to confirm.",
      "For injectables. It speaks to sterility, not chemical purity — different things.",
    ],
  },
};

// Señales de COA falsificado o reutilizado.
// Ordenadas de la más decisiva a la más sutil.
export const FRAUD = {
  es: {
    title: "Cómo detectar un COA falso",
    intro: "Un certificado editado se ve igual de bien que uno real. Estas son las señales que sí se pueden revisar sin ser perito.",
    groups: [
      {
        h: "El documento no corresponde a tu producto",
        items: [
          "El lote del COA no coincide con el impreso en tu vial. Es la señal más común y la más definitiva: ese papel es de otra producción.",
          "El mismo COA aparece para varios productos o lotes distintos. Un certificado genérico no certifica nada.",
          "La fecha del análisis es posterior a la fecha en que te enviaron el producto, o está en el futuro.",
          "El nombre del péptido está escrito distinto en el COA y en la etiqueta del vial.",
        ],
      },
      {
        h: "No hay forma de verificarlo",
        items: [
          "No trae número de reporte, o lo trae pero el laboratorio no tiene manera de validarlo.",
          "El laboratorio no existe fuera del COA: sin web, sin dirección, sin teléfono, sin presencia verificable.",
          "El vendedor te manda una foto de una pantalla en vez del archivo original.",
          "La imagen está recortada justo donde iría el membrete, el pie de página o la firma del analista.",
        ],
      },
      {
        h: "El documento está manipulado",
        items: [
          "Las cifras tienen otra tipografía, otro tamaño o se ven más nítidas que el resto del texto: es el rastro típico de un número reemplazado.",
          "Texto desalineado respecto a su columna, o con un fondo ligeramente distinto.",
          "El logo del laboratorio se ve pixelado mientras el resto del documento está limpio.",
          "En las propiedades del PDF, el programa que lo creó es un editor de imágenes o de PDF y no un sistema de laboratorio.",
        ],
      },
      {
        h: "Los resultados no son creíbles",
        items: [
          "Solo una tabla de resultados, sin cromatograma ni espectro. Los datos crudos son la parte difícil de falsificar, y por eso es la que se omite.",
          "Pureza idéntica en todos los lotes, lote tras lote. La producción real varía.",
          "Solo HPLC, sin espectrometría de masas. Puede ser negligencia — o puede ser que la identidad no dé.",
          "Cifras redondas y perfectas donde un laboratorio pondría decimales.",
        ],
      },
    ],
    close: "Ninguna de estas señales prueba fraude por sí sola, y su ausencia tampoco prueba autenticidad. Lo único que lo prueba es escribirle al laboratorio.",
  },
  en: {
    title: "How to spot a fake COA",
    intro: "An edited certificate looks exactly as good as a real one. These are the signals you can actually check without being a forensic examiner.",
    groups: [
      {
        h: "The document doesn't belong to your product",
        items: [
          "The COA lot doesn't match the one printed on your vial. It's the most common signal and the most decisive: that paper is from a different production run.",
          "The same COA turns up for several different products or lots. A generic certificate certifies nothing.",
          "The analysis date is later than the date the product shipped to you, or it's in the future.",
          "The peptide name is spelled differently on the COA than on the vial label.",
        ],
      },
      {
        h: "There's no way to verify it",
        items: [
          "No report number, or there is one but the lab has no way to validate it.",
          "The laboratory doesn't exist outside the COA: no website, no address, no phone, no verifiable presence.",
          "The seller sends you a photo of a screen instead of the original file.",
          "The image is cropped exactly where the letterhead, footer, or analyst signature would be.",
        ],
      },
      {
        h: "The document has been altered",
        items: [
          "The figures use a different typeface or size, or look sharper than the surrounding text: the classic trace of a replaced number.",
          "Text misaligned with its column, or sitting on a slightly different background.",
          "The lab logo looks pixelated while the rest of the document is clean.",
          "In the PDF properties, the creating program is an image or PDF editor rather than a laboratory system.",
        ],
      },
      {
        h: "The results aren't credible",
        items: [
          "Only a results table, with no chromatogram or spectrum. The raw data is the hard part to fake, which is why it's the part that gets left out.",
          "Identical purity across every lot, batch after batch. Real production varies.",
          "HPLC only, no mass spectrometry. It may be negligence — or the identity may not check out.",
          "Round, perfect numbers where a laboratory would report decimals.",
        ],
      },
    ],
    close: "None of these signals proves fraud on its own, and their absence doesn't prove authenticity either. The only thing that proves it is writing to the laboratory.",
  },
};

// Comparación manual de lote + mensaje al laboratorio.
export const LOTCHECK = {
  es: {
    title: "Compara el lote",
    intro: "Es la única comprobación que puedes cerrar del todo por tu cuenta. Escribe los dos números y compáralos.",
    coaLot: "Lote que dice el COA",
    vialLot: "Lote impreso en tu vial",
    ok: "Coinciden. Este certificado sí corresponde al vial que tienes.",
    bad: "No coinciden. Este COA es de otra producción y no dice nada sobre tu vial. Pídele al vendedor el certificado de ESTE lote.",
    emailTitle: "Confírmalo con el laboratorio",
    emailIntro: "Completa el número de reporte y envíaselo al laboratorio, no al vendedor. Es el único paso que prueba que el documento es real.",
    reportLabel: "Nº de reporte del COA",
    productLabel: "Producto",
    copy: "Copiar mensaje",
    copied: "Copiado",
    tpl: (rep, lot, prod) =>
      `Buen día. Quisiera confirmar la autenticidad del reporte ${rep || "[número]"}, correspondiente al producto ${prod || "[producto]"}, lote ${lot || "[lote]"}. ¿Pueden verificar que fue emitido por ustedes y que los resultados coinciden con su registro? Gracias.`,
  },
  en: {
    title: "Compare the lot",
    intro: "It's the one check you can close completely on your own. Type both numbers and compare them.",
    coaLot: "Lot on the COA",
    vialLot: "Lot printed on your vial",
    ok: "They match. This certificate does correspond to the vial you have.",
    bad: "They don't match. This COA is from a different production run and says nothing about your vial. Ask the seller for the certificate for THIS lot.",
    emailTitle: "Confirm it with the laboratory",
    emailIntro: "Fill in the report number and send this to the laboratory, not to the seller. It's the only step that proves the document is real.",
    reportLabel: "COA report number",
    productLabel: "Product",
    copy: "Copy message",
    copied: "Copied",
    tpl: (rep, lot, prod) =>
      `Hello. I'd like to confirm the authenticity of report ${rep || "[number]"}, for product ${prod || "[product]"}, lot ${lot || "[lot]"}. Can you verify it was issued by you and that the results match your records? Thank you.`,
  },
};
