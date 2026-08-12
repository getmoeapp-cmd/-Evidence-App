// Cadenas de interfaz. El contenido de cada péptido vive en src/data/.
export const UI = {
  es: {
    tagline: "No te decimos qué tomar. Te mostramos qué dice la evidencia.",
    levels: {
      A: { label: "Nivel A", gloss: "Ensayo aleatorizado en humanos o metaanálisis" },
      B: { label: "Nivel B", gloss: "Estudio en humanos, no aleatorizado" },
      C: { label: "Nivel C", gloss: "Solo estudios en animales" },
      D: { label: "Nivel D", gloss: "Solo in vitro o reporte de caso" },
      NOT_SHOWN: { label: "No demostrado", gloss: "Se estudió en humanos y no se demostró" },
      NO_DATA: { label: "Sin datos", gloss: "No hay literatura publicada indexada" },
    },
    axes: {
      science: "Eje científico",
      community: "Reporte comunitario",
      studies: (n, nh) => `${n} estudios indexados · ${nh} en humanos`,
      reports: (n, adv, coa) =>
        `${n.toLocaleString("es")} reportes · ${adv.toLocaleString("es")} de efectos adversos · ${coa}% verificó COA`,
      neverAveraged: "Estos dos ejes nunca se promedian. Miden cosas distintas.",
    },
    ceiling: {
      title: "Techo estudiado",
      intro:
        "La dosis más alta que alguna vez se administró en un ensayo publicado en humanos. No es una recomendación: es el borde del mapa.",
      none: "Sin techo establecido",
      howReached: "Cómo se llegó ahí",
      signal: "Señal comunitaria",
      signalText: (total, above, skip) =>
        `De ${total.toLocaleString("es")} reportes de efectos adversos, ${above}% describe uso por encima del techo estudiado y ${skip}% describe haberse saltado el escalonamiento.`,
    },
    reports: {
      title: "Lo que se reporta",
      intro: (n) =>
        `Cambios que la gente describe en sus propios protocolos, con el nivel de evidencia de cada uno al lado. ${n.toLocaleString("es")} reportes.`,
      noAdverse: "no reportó ningún efecto adverso",
      stacking: "usaba otros compuestos al mismo tiempo",
      habits: "cambió dieta o entrenamiento en el mismo periodo",
    },
    claims: {
      title: "Qué se afirma · qué se ha medido",
      none: "ningún estudio",
      count: (n, nh) => `${n} estudios · ${nh} en humanos`,
    },
    source: {
      title: "La fuente",
      plain: "En español",
      original: "Original en inglés",
      limits: "Limitaciones",
      open: "Ver el estudio completo",
      emptyTitle: "No hay ensayos controlados en humanos indexados en PubMed para este compuesto.",
      emptyBody:
        "Esto no significa que no funcione. Significa que todavía nadie lo ha medido de una forma que podamos revisar contigo.",
    },
    safety: {
      title: "Contraindicaciones e interacciones",
      empty:
        "Todavía no hay contraindicaciones establecidas, porque el compuesto no se ha estudiado en personas. Una lista vacía aún no es una señal de seguridad — es un capítulo por escribir.",
      surveillance: "Señales en vigilancia",
      kinds: { absolute: "No usar", relative: "Requiere supervisión", interaction: "Interacción" },
      origins: {
        label: "Ficha técnica aprobada",
        trial: "Criterio de exclusión en ensayos",
        pharmacovigilance: "Reporte posterior a la aprobación",
        mechanism: "Inferido del mecanismo — no medido en personas",
      },
    },
    regulatory: { title: "Estatus regulatorio" },
    footer:
      "Prototipo de interfaz. Los estudios, cifras y reportes mostrados son datos de demostración y deben reemplazarse por los registros reales de PubMed antes de publicar. Material informativo: no es consejo médico ni recomendación de uso.",
  },

  en: {
    tagline: "We don't tell you what to take. We show you what the evidence says.",
    levels: {
      A: { label: "Level A", gloss: "Randomized human trial or meta-analysis" },
      B: { label: "Level B", gloss: "Human study, not randomized" },
      C: { label: "Level C", gloss: "Animal studies only" },
      D: { label: "Level D", gloss: "In vitro or case report only" },
      NOT_SHOWN: { label: "Not shown", gloss: "Studied in humans and not demonstrated" },
      NO_DATA: { label: "No data", gloss: "No indexed published literature" },
    },
    axes: {
      science: "Scientific axis",
      community: "Community reporting",
      studies: (n, nh) => `${n} indexed studies · ${nh} in humans`,
      reports: (n, adv, coa) =>
        `${n.toLocaleString("en")} reports · ${adv.toLocaleString("en")} adverse · ${coa}% verified a COA`,
      neverAveraged: "These two axes are never averaged. They measure different things.",
    },
    ceiling: {
      title: "Studied ceiling",
      intro:
        "The highest dose ever given in a published human trial. Not a recommendation — the edge of the map.",
      none: "No established ceiling",
      howReached: "How that dose was reached",
      signal: "Community signal",
      signalText: (total, above, skip) =>
        `Of ${total.toLocaleString("en")} adverse-effect reports, ${above}% describe use above the studied ceiling and ${skip}% describe skipping the titration schedule.`,
    },
    reports: {
      title: "What people report",
      intro: (n) =>
        `Changes people describe in their own protocols, with the evidence level for each one beside it. ${n.toLocaleString("en")} reports.`,
      noAdverse: "reported no adverse effects at all",
      stacking: "were using other compounds at the same time",
      habits: "also changed diet or training in the same period",
    },
    claims: {
      title: "What's claimed · what's been measured",
      none: "no studies",
      count: (n, nh) => `${n} studies · ${nh} in humans`,
    },
    source: {
      title: "The source",
      plain: "In plain language",
      original: "Original citation",
      limits: "Limitations",
      open: "Open the full study",
      emptyTitle: "There are no controlled human trials indexed in PubMed for this compound.",
      emptyBody:
        "That doesn't mean it doesn't work. It means no one has measured it yet in a way we can check with you.",
    },
    safety: {
      title: "Contraindications and interactions",
      empty:
        "There are no established contraindications yet, because the compound has not been studied in people. An empty list is not yet a sign of safety — it's a chapter still to be written.",
      surveillance: "Signals under watch",
      kinds: { absolute: "Do not use", relative: "Needs supervision", interaction: "Interaction" },
      origins: {
        label: "Approved product label",
        trial: "Trial exclusion criterion",
        pharmacovigilance: "Post-approval reporting",
        mechanism: "Inferred from mechanism — not measured in people",
      },
    },
    regulatory: { title: "Regulatory status" },
    footer:
      "Interface prototype. Studies, figures, and reports shown are demonstration data and must be replaced with real PubMed records before publishing. Informational material: not medical advice or a recommendation to use.",
  },
};
