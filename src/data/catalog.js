// Catálogo completo. Campos neutros de idioma + etiquetas traducidas abajo.
//
// level y ceiling son HIPÓTESIS DE TRABAJO para planificar la ingesta de
// PubMed, no datos verificados. El nivel definitivo lo calcula
// nivel_de_claim() a partir de la metadata, no de este archivo.
//
// blend: lista de slugs. Una mezcla no tiene literatura propia — su ficha
// muestra el nivel de cada componente, nunca un nivel inventado del conjunto.

export const CATALOG = [
  // ── Metabólicos ────────────────────────────────────────────────
  { slug: "retatrutide",   name: "Retatrutide",   alt: "LY3437943",        cls: "triple",   family: "metabolico",   level: "A",       ceiling: "established", aliases: ["reta", "retatrutida"] },
  { slug: "tirzepatide",   name: "Tirzepatide",   alt: "LY3298176",        cls: "dual",     family: "metabolico",   level: "A",       ceiling: "established", aliases: ["tirze", "tirzepatida", "mounjaro", "zepbound"] },
  { slug: "semaglutida",   name: "Semaglutide",   alt: "Semaglutide",      cls: "glp1",     family: "metabolico",   level: "A",       ceiling: "established", aliases: ["sema", "semaglutida", "ozempic", "wegovy"] },
  { slug: "tesamorelin",   name: "Tesamorelin",   alt: "Egrifta",          cls: "ghrh",     family: "metabolico",   level: "A",       ceiling: "established", aliases: ["tesamorelina", "egrifta"] },
  { slug: "aod-9604",      name: "AOD-9604",      alt: "hGH 176-191",      cls: "ghfrag",   family: "metabolico",   level: "NOT_SHOWN",       ceiling: "established", aliases: ["aod", "aod9604"] },

  // ── Hormona de crecimiento ─────────────────────────────────────
  { slug: "cjc-1295",      name: "CJC-1295",      alt: "DAC / no-DAC",     cls: "ghrh",     family: "gh",           level: "B",       ceiling: "none",        aliases: ["cjc", "cjc1295", "mod grf"] },
  { slug: "ipamorelin",    name: "Ipamorelin",    alt: "Ipamorelin",       cls: "ghrelin",  family: "gh",           level: "B",       ceiling: "none",        aliases: ["ipa", "ipamorelina"] },
  { slug: "sermorelin",    name: "Sermorelin",    alt: "GRF 1-29",         cls: "ghrh",     family: "gh",           level: "B",       ceiling: "established", aliases: ["sermorelina", "geref"] },

  // ── Reparación ─────────────────────────────────────────────────
  { slug: "bpc-157",       name: "BPC-157",       alt: "Body Protection Compound", cls: "repair", family: "reparacion", level: "C",  ceiling: "none",        aliases: ["bpc", "bpc157", "pentadecapeptide"] },
  { slug: "tb-500",        name: "TB-500",        alt: "Thymosin Beta-4 fragment", cls: "repair", family: "reparacion", level: "C",  ceiling: "none",        aliases: ["tb500", "tb4", "timosina beta 4", "thymosin beta"] },
  { slug: "ghk-cu",        name: "GHK-Cu",        alt: "Copper peptide",   cls: "copper",   family: "reparacion",   level: "B",       ceiling: "none",        aliases: ["ghk", "ghkcu", "cobre", "copper"] },
  { slug: "kpv",           name: "KPV",           alt: "α-MSH 11-13",      cls: "repair",   family: "reparacion",   level: "C",       ceiling: "none",        aliases: ["kpv"] },
  { slug: "ll-37",         name: "LL-37",         alt: "Cathelicidin",     cls: "amp",      family: "reparacion",   level: "C",       ceiling: "none",        aliases: ["ll37", "catelicidina", "cathelicidin"] },

  // ── Mitocondrial y longevidad ──────────────────────────────────
  { slug: "mots-c",        name: "MOTS-c",        alt: "MOTS-c",           cls: "mito",     family: "mitocondrial", level: "C",       ceiling: "none",        aliases: ["motsc", "mots"] },
  { slug: "ss-31",         name: "SS-31",         alt: "Elamipretide",     cls: "mito",     family: "mitocondrial", level: "A",       ceiling: "established", aliases: ["ss31", "elamipretide", "elamipretida", "mtp-131"] },
  { slug: "epitalon",      name: "Epitalon",      alt: "Epithalon",        cls: "tetra",    family: "mitocondrial", level: "C", ceiling: "none",        aliases: ["epitalón", "epithalon", "epitalone"] },
  { slug: "pinealon",      name: "Pinealon",      alt: "Pinealon",         cls: "tetra",    family: "mitocondrial", level: "C", ceiling: "none",        aliases: ["pinealón"] },
  { slug: "nad",           name: "NAD+",          alt: "Nicotinamide adenine dinucleotide", cls: "coenzyme", family: "mitocondrial", level: "B", ceiling: "none", aliases: ["nad", "nad+", "nmn", "nr"] },

  // ── Nootrópicos ────────────────────────────────────────────────
  { slug: "semax",         name: "Semax",         alt: "ACTH 4-10 analog", cls: "noot",     family: "nootropico",   level: "B",       ceiling: "none",        aliases: ["semax"] },
  { slug: "selank",        name: "Selank",        alt: "Tuftsin analog",   cls: "noot",     family: "nootropico",   level: "B",       ceiling: "none",        aliases: ["selank"] },
  { slug: "dsip",          name: "DSIP",          alt: "Delta Sleep-Inducing Peptide", cls: "sleep", family: "nootropico", level: "C", ceiling: "none",       aliases: ["dsip", "sueño delta", "delta sleep"] },

  // ── Sexual y reproductivo ──────────────────────────────────────
  { slug: "pt-141",        name: "PT-141",        alt: "Bremelanotide",    cls: "melano",   family: "sexual",       level: "A",       ceiling: "established", aliases: ["pt141", "bremelanotide", "bremelanotida", "vyleesi"] },
  { slug: "kisspeptin-10", name: "Kisspeptin-10", alt: "KP-10",            cls: "kiss",     family: "sexual",       level: "B",       ceiling: "none",        aliases: ["kisspeptina", "kisspeptin", "kp10"] },

  // ── Inmune ─────────────────────────────────────────────────────
  { slug: "thymosin-alpha-1", name: "Thymosin Alpha-1", alt: "Thymalfasin / Zadaxin", cls: "immune", family: "inmune", level: "A", ceiling: "established", aliases: ["ta1", "ta-1", "timosina alfa", "thymalfasin", "zadaxin"] },

  // ── Mezclas ────────────────────────────────────────────────────
  { slug: "wolverine",     name: "Wolverine Stack", alt: "BPC-157 + TB-500", cls: "blend", family: "mezcla", level: null, ceiling: "none", blend: ["bpc-157", "tb-500"], aliases: ["wolverine", "bpc tb500", "bpc + tb"] },
  { slug: "glow",          name: "GLOW",            alt: "GHK-Cu + BPC-157 + TB-500", cls: "blend", family: "mezcla", level: null, ceiling: "none", blend: ["ghk-cu", "bpc-157", "tb-500"], aliases: ["glow"] },
  { slug: "klow",          name: "KLOW",            alt: "GHK-Cu + BPC-157 + TB-500 + KPV", cls: "blend", family: "mezcla", level: null, ceiling: "none", blend: ["ghk-cu", "bpc-157", "tb-500", "kpv"], aliases: ["klow"] },
];

export const CLASSES = {
  es: {
    glp1: "Análogo de GLP-1", dual: "Agonista dual GIP/GLP-1", triple: "Agonista triple GIP/GLP-1/glucagón",
    ghrh: "Análogo de GHRH", ghrelin: "Agonista del receptor de grelina", ghfrag: "Fragmento de hormona de crecimiento",
    repair: "Péptido de reparación tisular", copper: "Tripéptido de cobre", amp: "Péptido antimicrobiano",
    mito: "Péptido mitocondrial", tetra: "Tetrapéptido sintético", coenzyme: "Coenzima — no es un péptido",
    noot: "Péptido nootrópico", sleep: "Péptido inductor del sueño", melano: "Agonista de melanocortina",
    kiss: "Regulador del eje reproductivo", immune: "Péptido inmunomodulador", blend: "Mezcla de compuestos",
  },
  en: {
    glp1: "GLP-1 receptor agonist", dual: "Dual GIP/GLP-1 agonist", triple: "Triple GIP/GLP-1/glucagon agonist",
    ghrh: "GHRH analog", ghrelin: "Ghrelin receptor agonist", ghfrag: "Growth hormone fragment",
    repair: "Tissue repair peptide", copper: "Copper tripeptide", amp: "Antimicrobial peptide",
    mito: "Mitochondrial peptide", tetra: "Synthetic tetrapeptide", coenzyme: "Coenzyme — not a peptide",
    noot: "Nootropic peptide", sleep: "Sleep-inducing peptide", melano: "Melanocortin receptor agonist",
    kiss: "Reproductive axis regulator", immune: "Immunomodulatory peptide", blend: "Compound blend",
  },
};

export const FAMILIES = {
  es: { all: "Todas las familias", metabolico: "Metabólicos", gh: "Hormona de crecimiento", reparacion: "Reparación", mitocondrial: "Mitocondrial y longevidad", nootropico: "Nootrópicos", sexual: "Sexual y reproductivo", inmune: "Inmune", mezcla: "Mezclas" },
  en: { all: "All families", metabolico: "Metabolic", gh: "Growth hormone", reparacion: "Repair", mitocondrial: "Mitochondrial and longevity", nootropico: "Nootropics", sexual: "Sexual and reproductive", inmune: "Immune", mezcla: "Blends" },
};

export const FAMILY_ORDER = ["metabolico", "gh", "reparacion", "mitocondrial", "nootropico", "sexual", "inmune", "mezcla"];
