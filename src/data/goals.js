// Objetivos y sus candidatos.
//
// IMPORTANTE — qué significa esta asignación:
// Un péptido aparece bajo un objetivo porque ESO ES LO QUE LA GENTE BUSCA
// cuando lo usa. No es una afirmación de que funcione para eso. El nivel de
// evidencia va al lado de cada nombre y es lo que responde esa pregunta.
//
// Un compuesto puede estar en varios objetivos. Los slugs deben existir en
// data/catalog.js.

export const GOAL_MAP = [
  {
    slug: "grasa",
    peptides: ["semaglutida", "tirzepatide", "retatrutide", "aod-9604", "tesamorelin"],
  },
  {
    slug: "musculo",
    peptides: ["cjc-1295", "ipamorelin", "sermorelin", "tesamorelin"],
  },
  {
    slug: "recuperacion",
    peptides: ["bpc-157", "tb-500", "wolverine", "glow", "klow", "ghk-cu", "kpv"],
  },
  {
    slug: "piel",
    peptides: ["ghk-cu", "glow", "klow"],
  },
  {
    slug: "intestino",
    peptides: ["bpc-157", "kpv", "ll-37"],
  },
  {
    slug: "inmune",
    peptides: ["thymosin-alpha-1", "ll-37", "kpv"],
  },
  {
    slug: "sueno",
    peptides: ["dsip", "epitalon", "selank"],
  },
  {
    slug: "cognicion",
    peptides: ["semax", "selank", "pinealon", "dsip"],
  },
  {
    slug: "libido",
    peptides: ["pt-141", "kisspeptin-10"],
  },
  {
    slug: "longevidad",
    peptides: ["epitalon", "mots-c", "ss-31", "nad", "pinealon", "ghk-cu"],
  },
];

export const GOAL_LABELS = {
  es: {
    grasa:        { name: "Pérdida de grasa",        note: "Metabolismo, apetito y composición corporal." },
    musculo:      { name: "Músculo y rendimiento",   note: "Eje de hormona de crecimiento e IGF-1." },
    recuperacion: { name: "Recuperación y lesiones", note: "Tendones, ligamentos y tejido blando." },
    piel:         { name: "Piel y colágeno",         note: "Señalización de reparación cutánea." },
    intestino:    { name: "Salud intestinal",        note: "Mucosa e inflamación digestiva." },
    inmune:       { name: "Sistema inmune",          note: "Modulación de la respuesta inmunitaria." },
    sueno:        { name: "Sueño",                   note: "Arquitectura del sueño y ritmo circadiano." },
    cognicion:    { name: "Cognición y ánimo",       note: "Foco, memoria y respuesta al estrés." },
    libido:       { name: "Libido y salud sexual",   note: "Eje reproductivo y respuesta sexual." },
    longevidad:   { name: "Longevidad y celular",    note: "Función mitocondrial y envejecimiento." },
  },
  en: {
    grasa:        { name: "Fat loss",                 note: "Metabolism, appetite, and body composition." },
    musculo:      { name: "Muscle and performance",   note: "Growth hormone and IGF-1 axis." },
    recuperacion: { name: "Recovery and injury",      note: "Tendons, ligaments, and soft tissue." },
    piel:         { name: "Skin and collagen",        note: "Skin repair signaling." },
    intestino:    { name: "Gut health",               note: "Mucosal lining and digestive inflammation." },
    inmune:       { name: "Immune system",            note: "Modulation of the immune response." },
    sueno:        { name: "Sleep",                    note: "Sleep architecture and circadian rhythm." },
    cognicion:    { name: "Cognition and mood",       note: "Focus, memory, and stress response." },
    libido:       { name: "Libido and sexual health", note: "Reproductive axis and sexual response." },
    longevidad:   { name: "Longevity and cellular",   note: "Mitochondrial function and aging." },
  },
};
