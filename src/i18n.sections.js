// Cadenas de las secciones de navegación. Se fusionan con UI en App.jsx.
export const SECTIONS = {
  es: {
    nav: { peptides: "Péptidos", goals: "Por objetivo", verify: "Verificar", report: "Reportar" },
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
        "Elige lo que buscas y mira qué respalda a cada candidato. La barra de la derecha es el nivel de evidencia, no una recomendación.",
      candidates: (n) => `${n} candidatos`,
      empty: "Todavía no hay compuestos catalogados para este objetivo.",
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
        "Pick what you're after and see what backs each candidate. The bar on the right is the evidence level, not a recommendation.",
      candidates: (n) => `${n} candidates`,
      empty: "No compounds catalogued for this goal yet.",
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
