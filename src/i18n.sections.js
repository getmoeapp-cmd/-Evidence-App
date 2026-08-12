// Cadenas de las secciones de navegación. Se fusionan con UI en App.jsx.
export const SECTIONS = {
  es: {
    nav: { peptides: "Péptidos", goals: "Por objetivo", verify: "Verificar", report: "Reportar" },
    families: { label: "Familia" },
    stub: {
      badge: "Ficha en preparación",
      body: "Este compuesto ya está en el catálogo, pero su ingesta de PubMed todavía no se ha corrido. Cuando esté, aquí aparecen los estudios, el techo estudiado, las contraindicaciones y el estatus regulatorio.",
      preliminary: "Todavía no hemos publicado la ficha completa de este compuesto. El nivel que ves es una estimación de trabajo, no un dato verificado.",
      provisional: "Provisional",
    },
    blend: {
      title: "Es una mezcla, no un compuesto",
      intro: "Esta combinación no tiene literatura propia: nadie la ha estudiado como conjunto. Lo que se sabe es lo que se sabe de cada componente por separado.",
      note: "Toca cualquier componente para ver su ficha. No le asignamos un nivel al conjunto porque no existe ningún estudio del conjunto — y sumar niveles no es cómo funciona la evidencia.",
    },
    search: { placeholder: "Buscar péptido…", empty: "Ningún péptido coincide con esa búsqueda.", back: "Volver al catálogo" },
    catalog: {
      title: "Catálogo",
      intro: "Los compuestos que circulan en el mercado hispanohablante, con su nivel de evidencia.",
      allLevels: "Todos los niveles",
      count: (n) => `${n} péptidos`,
    },
    goals: {
      title: "Por objetivo",
      intro:
        "Un compuesto aparece aquí porque eso es lo que la gente busca cuando lo usa — no porque esté demostrado que funcione para eso. La cresta al lado de cada nombre responde esa segunda pregunta.",
      candidates: (n) => `${n} candidatos`,
      empty: "Todavía no hay compuestos catalogados para este objetivo.",
      blend: "Mezcla",
      footnote:
        "Dentro de cada objetivo, los candidatos van ordenados por nivel de evidencia: primero lo mejor respaldado. Un compuesto puede aparecer en varios objetivos.",
    },
    verify: {
      title: "Verificar",
      intro: "Dos preguntas distintas: ¿es cierto lo que leíste? y ¿es real lo que te van a vender?",
      audit: {
        title: "Auditoría de afirmaciones",
        desc: "Pega una afirmación que hayas leído en redes, en un PDF o en la página de un vendedor. Te devolvemos qué estudios existen sobre ella, de qué tipo y qué no dicen.",
        placeholder: "Ej: «El BPC-157 regenera tendones en 4 semanas»",
        cta: "Auditar",
      },
      buy: {
        title: "Comprar bien",
        desc: "Cómo leer un certificado de análisis, cómo confirmarlo con el laboratorio y cómo evaluar a un vendedor antes de pagar.",
        coa: "Guía del COA",
        scorecard: "Scorecard de vendedor",
      },
      soon: "En construcción",
    },
    report: {
      title: "Reportar",
      intro:
        "Lo que reportas aquí alimenta el único conjunto de datos en español sobre esto. No pedimos tu nombre y no publicamos nada individual — solo agregados.",
      fCompound: "Compuesto",
      fChoose: "Elige uno",
      fEffects: "¿Qué notaste?",
      fNone: "No noté ningún cambio",
      fAdverse: "¿Algún efecto adverso?",
      fAdverseNone: "Ninguno",
      fCoa: "¿Verificaste el COA del lote?",
      fStack: "¿Usabas otros compuestos al mismo tiempo?",
      fHabits: "¿Cambiaste dieta o entrenamiento en el mismo periodo?",
      yes: "Sí", no: "No", unsure: "No sé",
      submit: "Enviar reporte",
      why: "Preguntamos por lo que usaste en paralelo y por tus cambios de hábitos porque sin eso ningún reporte se puede interpretar. Los reportes sin cambio son tan útiles como los demás.",
    },
  },
  en: {
    nav: { peptides: "Peptides", goals: "By goal", verify: "Verify", report: "Report" },
    families: { label: "Family" },
    stub: {
      badge: "Card in progress",
      body: "This compound is already in the catalog, but its PubMed ingestion hasn't been run yet. Once it is, the studies, studied ceiling, contraindications, and regulatory status appear here.",
      preliminary: "We haven't published the full card for this compound yet. The level shown is a working estimate, not verified data.",
      provisional: "Provisional",
    },
    blend: {
      title: "This is a blend, not a compound",
      intro: "This combination has no literature of its own — no one has studied it as a whole. What is known is what's known about each component separately.",
      note: "Tap any component to open its card. We don't assign a level to the blend because no study of the blend exists — and adding levels together isn't how evidence works.",
    },
    search: { placeholder: "Search peptide…", empty: "No peptide matches that search.", back: "Back to catalog" },
    catalog: {
      title: "Catalog",
      intro: "The compounds circulating in the market, with their evidence level.",
      allLevels: "All levels",
      count: (n) => `${n} peptides`,
    },
    goals: {
      title: "By goal",
      intro:
        "A compound appears here because that's what people are after when they use it — not because it's proven to work for that. The ridge meter beside each name answers that second question.",
      candidates: (n) => `${n} candidates`,
      empty: "No compounds catalogued for this goal yet.",
      blend: "Blend",
      footnote:
        "Within each goal, candidates are ordered by evidence level — best supported first. A compound can appear under more than one goal.",
    },
    verify: {
      title: "Verify",
      intro: "Two different questions: is what you read true, and is what you're about to buy real?",
      audit: {
        title: "Claim audit",
        desc: "Paste a claim you read on social media, in a PDF, or on a seller's page. We return what studies exist on it, what kind they are, and what they don't say.",
        placeholder: "e.g. \u201CBPC-157 regenerates tendons in 4 weeks\u201D",
        cta: "Audit it",
      },
      buy: {
        title: "Buy well",
        desc: "How to read a certificate of analysis, how to confirm it with the lab, and how to assess a seller before you pay.",
        coa: "COA guide",
        scorecard: "Vendor scorecard",
      },
      soon: "In progress",
    },
    report: {
      title: "Report",
      intro:
        "What you report here feeds the only dataset of its kind. We don't ask for your name and never publish anything individual — aggregates only.",
      fCompound: "Compound",
      fChoose: "Choose one",
      fEffects: "What did you notice?",
      fNone: "No change at all",
      fAdverse: "Any adverse effects?",
      fAdverseNone: "None",
      fCoa: "Did you verify the batch COA?",
      fStack: "Were you using other compounds at the same time?",
      fHabits: "Did you change diet or training in the same period?",
      yes: "Yes", no: "No", unsure: "Not sure",
      submit: "Submit report",
      why: "We ask what you ran alongside it and whether your habits changed because without that, no report can be interpreted. Reports of no change matter as much as the rest.",
    },
  },
};
