// Contenido en español — 27 fichas (24 compuestos + 3 mezclas).
// Generado desde las fichas en markdown. Mismos slugs y mismo orden en los dos idiomas.
export const PEPTIDOS_ES = [
  {
    slug: "retatrutide",
    name: "Retatrutida",
    altName: "LY3437943",
    className: "AGONISTA TRIPLE GIP / GLP-1 / GLUCAGÓN",
    level: "A",
    summary: "El caso más vigilado de la categoría: los resultados más altos jamás reportados en ensayos de obesidad — pero sin aprobación regulatoria en ningún país, y con la fase 3 disponible solo como datos preliminares del fabricante.",
    levelNote: "NIVEL A — Ensayo aleatorizado en humanos, publicado y revisado por pares (fase 2). Los resultados de fase 3 (2026) son \"topline\" del fabricante: aún sin publicación revisada.",
    ceiling: {
      state: "established",
      dose: "12 mg",
      frequency: "por semana",
      indication: "obesidad (fase 2 publicada y fase 3 TRIUMPH-1)",
      steps: ["2"],
      schedule: "2 escalada gradual cada 4 semanas hasta la dosis objetivo (4, 9 o 12 mg).",
      note: "Este es el protocolo de los ensayos clínicos, no una pauta de uso. Por encima de 12 mg semanales no existe ningún dato de seguridad publicado en humanos.",
      adverse: {
        pending: true,
        categories: ["uso por encima del techo estudiado", "saltos en la escalada", "combinación con otros compuestos (\"stacking\")", "producto sin COA verificado."]
      }
    },
    reports: { pending: true },
    safety: [
      { kind: "absolute", text: "Antecedente personal o familiar de carcinoma medular de tiroides", origin: "trial", detail: "Advertencia de clase GLP-1 · criterio de exclusión en ensayos" },
      { kind: "absolute", text: "Neoplasia endocrina múltiple tipo 2 (MEN2)", origin: "trial", detail: "Advertencia de clase GLP-1 · criterio de exclusión en ensayos" },
      { kind: "absolute", text: "Embarazo y lactancia", origin: "trial", detail: "Criterio de exclusión en todos los ensayos" },
      { kind: "relative", text: "Antecedente de pancreatitis — REQUIERE SUPERVISIÓN", origin: "trial", detail: "Criterio de exclusión en los ensayos pivotales: no existen datos para este grupo." },
      { kind: "relative", text: "Gastroparesia o enfermedad gastrointestinal severa — REQUIERE SUPERVISIÓN", origin: "mechanism", detail: "Efecto de clase (vaciamiento gástrico retardado)" },
      { kind: "relative", text: "Retinopatía diabética (en personas con DM2) — REQUIERE SUPERVISIÓN", origin: "mechanism", detail: "Efecto de clase por descenso rápido de glucosa" },
      { kind: "interaction", text: "Insulina o sulfonilureas — INTERACCIÓN", origin: "mechanism", detail: "Riesgo de hipoglucemia; requiere ajuste supervisado." },
      { kind: "watch", text: "SEÑALES EN VIGILANCIA (fase 3, 2026)", origin: "pharmacovigilance", detail: "Disestesias (alteraciones de sensibilidad en la piel) e infecciones urinarias reportadas en TRIUMPH-1 — mayormente leves a moderadas, la mayoría resueltas durante el tratamiento. Vómito hasta en 25.3% con la dosis más alta. Abandono por efectos adversos: 4.1%–11.3%, subiendo con la dosis." }
    ],
    safetyNote: "No existe etiqueta aprobada. Todo lo siguiente proviene de criterios de exclusión de los ensayos y de efectos de clase de los agonistas GLP-1.",
    claims: [
      { text: "Reduce el peso corporal en obesidad", level: "A", n: 0, nh: 0, note: "Fase 2 publicada (hasta 24.2% a 48 semanas). Fase 3 topline: hasta 28.3% a 80 semanas y 30.3% a 104 semanas — rango de cirugía bariátrica." },
      { text: "Mejora el control glucémico en diabetes tipo 2", level: "A", n: 0, nh: 0, note: "Fase 2 publicada (reducciones de HbA1c dependientes de dosis). TRIUMPH-2 topline: hasta 20.8% de pérdida de peso en personas con DM2." },
      { text: "Reduce la grasa hepática (hígado graso / MASLD)", level: "B", n: 0, nh: 0, note: "Subestudio de fase 2 con reducciones mayoritarias de grasa hepática. Sin indicación formal estudiada en fase 3 todavía." },
      { text: "Reduce el dolor de rodilla en artrosis", level: "B", n: 0, nh: 0, note: "TRIUMPH-4 topline (2026): pérdida de peso de hasta 28.7% con reducción de dolor. Sin publicación revisada por pares." },
      { text: "Reduce eventos cardiovasculares mayores", level: "NOT_SHOWN", n: 0, nh: 0, note: "El análisis de eventos cardiovasculares de TRIUMPH-3 fue no concluyente. Mejoró marcadores de riesgo (colesterol no-HDL, presión arterial), que no es lo mismo que reducir eventos." },
      { text: "Efectos sobre cáncer", level: "NO_DATA", n: 0, nh: 0, note: "Solo investigación preclínica. Ningún ensayo en humanos con este objetivo." }
    ],
    study: {
      title: "Triple-Hormone-Receptor Agonist Retatrutide for Obesity — A Phase 2 Trial",
      journal: "New England Journal of Medicine · Ensayo aleatorizado, doble ciego, controlado con placebo",
      year: "2023",
      n: "338 participantes",
      plain: "Ensayo de 48 semanas en adultos con obesidad o sobrepeso, sin diabetes. El grupo de dosis más alta perdió en promedio 24.2% del peso corporal — la mayor reducción reportada hasta entonces en un ensayo de obesidad. Los efectos adversos más frecuentes fueron gastrointestinales y aumentaron con la dosis. También se observó un aumento transitorio de la frecuencia cardíaca.",
      limits: "338 participantes — pequeño frente a un ensayo de fase 3. Financiado por el fabricante (Eli Lilly). Los datos de fase 3 de 2026 provienen de comunicados de la empresa y aún no han pasado revisión por pares."
    },
    regulatory: [
      { country: "Estados Unidos", agency: "FDA", status: "No aprobado · en investigación. El fabricante planea presentar la solicitud (BLA) en el primer trimestre de 2027.", tone: "alert" },
      { country: "Colombia", agency: "INVIMA", status: "Sin registro sanitario.", tone: "grey" },
      { country: "México", agency: "COFEPRIS", status: "No aprobado.", tone: "alert" },
      { country: "Europa", agency: "EMA", status: "No autorizado. No existe ninguna versión comercial en ningún país. Todo lo que circula hoy se vende fuera de canales regulados, sin control de calidad farmacéutico.", tone: "grey" }
    ],
    community: { pending: true }
  },
  {
    slug: "tirzepatide",
    name: "Tirzepatida",
    altName: "Mounjaro / Zepbound",
    className: "AGONISTA DUAL GIP / GLP-1",
    level: "A",
    summary: "El estándar actual de la categoría: el fármaco aprobado más eficaz para bajar de peso, con uno de los programas de ensayos más grandes de la medicina moderna — y el primero en ganarle a la semaglutida en un ensayo cara a cara.",
    levelNote: "NIVEL A — Ensayos aleatorizados en humanos, publicados, replicados y con aprobación regulatoria en varios países.",
    ceiling: {
      state: "established",
      dose: "15 mg",
      frequency: "por semana",
      indication: "diabetes tipo 2, obesidad y apnea del sueño",
      steps: ["2.5", "5", "7.5", "10", "12.5", "15"],
      schedule: "4 semanas por paso · 20 semanas hasta la dosis máxima (protocolo de la etiqueta aprobada)",
      note: "Por encima de 15 mg semanales no existe ningún dato de seguridad publicado.",
      adverse: {
        pending: true,
        categories: ["uso por encima del techo estudiado", "saltos en la escalada", "combinación con otros compuestos", "producto sin COA verificado."]
      }
    },
    reports: { pending: true },
    safety: [
      { kind: "absolute", text: "Antecedente personal o familiar de carcinoma medular de tiroides", origin: "label", detail: "Etiqueta aprobada" },
      { kind: "absolute", text: "Neoplasia endocrina múltiple tipo 2 (MEN2)", origin: "label", detail: "Etiqueta aprobada" },
      { kind: "absolute", text: "Embarazo", origin: "label", detail: "Etiqueta aprobada" },
      { kind: "relative", text: "Antecedente de pancreatitis — REQUIERE SUPERVISIÓN", origin: "trial", detail: "No estudiado en este grupo: excluido de los ensayos pivotales." },
      { kind: "relative", text: "Gastroparesia o enfermedad gastrointestinal severa — REQUIERE SUPERVISIÓN", origin: "label", detail: "Etiqueta aprobada (vaciamiento gástrico retardado)" },
      { kind: "relative", text: "Retinopatía diabética (en personas con DM2) — REQUIERE SUPERVISIÓN", origin: "label", detail: "Etiqueta aprobada" },
      { kind: "watch", text: "Enfermedad de vesícula biliar — SEÑAL EN VIGILANCIA", origin: "trial", detail: "Eventos de vesícula reportados en ensayos; consultar ante dolor abdominal intenso." },
      { kind: "interaction", text: "Insulina o sulfonilureas — INTERACCIÓN", origin: "label", detail: "Riesgo de hipoglucemia; requiere ajuste supervisado. Etiqueta aprobada" },
      { kind: "interaction", text: "Anticonceptivos orales — INTERACCIÓN", origin: "label", detail: "El vaciamiento gástrico retardado puede reducir su eficacia. La etiqueta recomienda método de respaldo durante 4 semanas tras el inicio y tras cada aumento de dosis. Específico de tirzepatida." }
    ],
    claims: [
      { text: "Reduce el peso corporal en obesidad", level: "A", n: 0, nh: 0, note: "SURMOUNT-1: hasta 20.9% de pérdida a 72 semanas frente a 3.1% con placebo. En SURMOUNT-5, cara a cara, superó a la semaglutida — el único fármaco aprobado que lo ha hecho." },
      { text: "Mejora el control glucémico en diabetes tipo 2", level: "A", n: 0, nh: 0, note: "Programa SURPASS completo: reducciones de HbA1c superiores a placebo y a comparadores activos." },
      { text: "Trata la apnea obstructiva del sueño", level: "A", n: 0, nh: 0, note: "SURMOUNT-OSA: reducción mayoritaria de eventos de apnea. Primera terapia farmacológica aprobada por la FDA para esta indicación (2024)." },
      { text: "Reduce eventos cardiovasculares mayores", level: "A", n: 0, nh: 0, note: "SURPASS-CVOT (NEJM 2025, 13,299 pacientes, 4 años): no inferior a dulaglutida — un fármaco que ya reduce eventos por sí mismo. La superioridad en el compuesto de muerte CV, infarto y ACV no se alcanzó (p=0.09). La mortalidad por cualquier causa sí fue 16% menor. Traducción: protege el corazón al menos tanto como un GLP-1 probado; \"mejor que\" aún no está demostrado." },
      { text: "Reduce la grasa hepática (MASH / hígado graso)", level: "B", n: 0, nh: 0, note: "Ensayo de fase 2 con resolución de esteatohepatitis en la mayoría de tratados. Sin indicación aprobada." },
      { text: "Mejora la insuficiencia cardíaca con fracción preservada (HFpEF)", level: "A", n: 0, nh: 0, note: "SUMMIT (NEJM 2024): menos eventos de insuficiencia cardíaca en personas con obesidad. Indicación aún no aprobada." }
    ],
    study: {
      title: "Tirzepatide Once Weekly for the Treatment of Obesity",
      journal: "New England Journal of Medicine · Ensayo aleatorizado, doble ciego, controlado con placebo",
      year: "2022",
      n: "2,539 participantes",
      plain: "Ensayo de 72 semanas en adultos con obesidad o sobrepeso, sin diabetes. El grupo de dosis máxima perdió en promedio 20.9% del peso corporal frente a 3.1% con placebo. Los efectos adversos más frecuentes fueron gastrointestinales — náusea, diarrea, estreñimiento — mayormente leves a moderados y concentrados durante la escalada de dosis.",
      limits: "Todos los participantes recibieron también asesoría de estilo de vida. El ensayo fue financiado por el fabricante (Eli Lilly)."
    },
    regulatory: [
      { country: "Estados Unidos", agency: "FDA", status: "Aprobado. Mounjaro: diabetes tipo 2 (2022; ampliado a niños de 10+ años). Zepbound: obesidad (2023) y apnea obstructiva del sueño (2024).", tone: "ok" },
      { country: "Colombia", agency: "INVIMA", status: "Mounjaro con registro sanitario para diabetes tipo 2 (2025). Zepbound (indicación de obesidad) sin registro a la fecha.", tone: "grey" },
      { country: "México", agency: "COFEPRIS", status: "Aprobado (Mounjaro).", tone: "ok" },
      { country: "Europa", agency: "EMA", status: "Aprobado (Mounjaro, para diabetes tipo 2 y control de peso). A diferencia de la retatrutida, aquí sí existe una vía farmacéutica regulada. Todo lo que se vende como \"tirzepatida de investigación\" fuera de esa vía no pasa por ningún control de calidad farmacéutico.", tone: "ok" }
    ],
    community: { pending: true }
  },
  {
    slug: "semaglutida",
    name: "Semaglutida",
    altName: "Ozempic / Wegovy / Rybelsus",
    className: "AGONISTA DEL RECEPTOR GLP-1",
    level: "A",
    summary: "El caso raro de la categoría: la molécula con más ensayos publicados, más indicaciones aprobadas y dos vías de administración (inyectable y oral). El punto de referencia contra el que se mide todo lo demás.",
    levelNote: "NIVEL A — Ensayos aleatorizados en humanos, publicados, replicados y con aprobación regulatoria en varios países.",
    ceiling: {
      state: "established",
      dose: "7.2 mg",
      frequency: "por semana",
      indication: "inyectable (Wegovy HD, aprobado en 2026)",
      altNote: "También existe la vía oral: 25 mg al día (aprobada a fines de 2025). El techo clásico de 2.4 mg semanales sigue siendo la dosis estándar.",
      steps: ["0.25", "0.5", "1.0", "1.7", "2.4"],
      schedule: "4 semanas por paso · 16 semanas hasta la dosis estándar (etiqueta aprobada)",
      note: "La presentación de 7.2 mg añade pasos de escalada adicionales según su propia etiqueta. Por encima de 7.2 mg semanales no existe ningún dato de seguridad publicado.",
      adverse: {
        pending: true,
        categories: ["uso por encima del techo estudiado", "saltos en la escalada", "combinación con otros compuestos", "producto sin COA verificado."]
      }
    },
    reports: { pending: true },
    safety: [
      { kind: "absolute", text: "Antecedente personal o familiar de carcinoma medular de tiroides", origin: "label", detail: "Etiqueta aprobada" },
      { kind: "absolute", text: "Neoplasia endocrina múltiple tipo 2 (MEN2)", origin: "label", detail: "Etiqueta aprobada" },
      { kind: "absolute", text: "Embarazo", origin: "label", detail: "Etiqueta aprobada" },
      { kind: "relative", text: "Antecedente de pancreatitis — REQUIERE SUPERVISIÓN", origin: "trial", detail: "Criterio de exclusión en los ensayos pivotales: no existen datos para este grupo." },
      { kind: "relative", text: "Gastroparesia o enfermedad gastrointestinal severa — REQUIERE SUPERVISIÓN", origin: "label", detail: "Etiqueta aprobada (vaciamiento gástrico retardado)" },
      { kind: "watch", text: "Retinopatía diabética (en personas con DM2) — REQUIERE SUPERVISIÓN", origin: "label", detail: "Señal observada en SUSTAIN-6 por descenso rápido de glucosa. Etiqueta aprobada" },
      { kind: "watch", text: "Enfermedad de vesícula biliar — SEÑAL EN VIGILANCIA", origin: "trial", detail: "Eventos de vesícula reportados en ensayos; consultar ante dolor abdominal intenso." },
      { kind: "watch", text: "Neuropatía óptica isquémica (NAION) — SEÑAL EN VIGILANCIA", origin: "label", detail: "Muy rara. Añadida a la etiqueta europea en 2025 tras reportes de pérdida visual súbita. Frecuencia estimada bajísima, pero es la señal nueva más comentada de la molécula." },
      { kind: "interaction", text: "Insulina o sulfonilureas — INTERACCIÓN", origin: "label", detail: "Riesgo de hipoglucemia; requiere ajuste supervisado. Etiqueta aprobada" }
    ],
    claims: [
      { text: "Reduce el peso corporal en obesidad", level: "A", n: 0, nh: 0, note: "STEP 1: 14.9% de pérdida a 68 semanas con 2.4 mg frente a 2.4% con placebo. STEP UP: 20.7% a 72 semanas con la nueva dosis de 7.2 mg." },
      { text: "Mejora el control glucémico en diabetes tipo 2", level: "A", n: 0, nh: 0, note: "Programas SUSTAIN (inyectable) y PIONEER (oral): reducciones de HbA1c superiores a placebo y comparadores." },
      { text: "Reduce eventos cardiovasculares mayores", level: "A", n: 0, nh: 0, note: "SELECT (17,604 pacientes): menos muerte cardiovascular, infarto y ACV frente a placebo en personas con enfermedad cardiovascular y sobrepeso u obesidad, sin diabetes. Indicación aprobada por la FDA (2024; vía oral en 2025). La única molécula de esta categoría en Evidence con superioridad cardiovascular demostrada frente a placebo." },
      { text: "Protege el riñón en enfermedad renal crónica con diabetes", level: "A", n: 0, nh: 0, note: "FLOW: menos progresión renal y muerte. Indicación aprobada (2025)." },
      { text: "Trata el hígado graso con inflamación (MASH)", level: "A", n: 0, nh: 0, note: "ESSENCE: resolución de esteatohepatitis frente a placebo. Aprobado en 2025 para MASH con fibrosis moderada a avanzada — primera indicación hepática de la categoría." },
      { text: "Previene o trata el Alzheimer", level: "NOT_SHOWN", n: 0, nh: 0, note: "Los ensayos de fase 3 (EVOKE) no alcanzaron su objetivo primario (2025). Que un mecanismo sea prometedor no es lo mismo que un resultado positivo." }
    ],
    study: {
      title: "Once-Weekly Semaglutide in Adults with Overweight or Obesity",
      journal: "New England Journal of Medicine · Ensayo aleatorizado, doble ciego, controlado con placebo",
      year: "2021",
      n: "1,961 participantes",
      plain: "Ensayo de 68 semanas en adultos con sobrepeso u obesidad, sin diabetes. El grupo tratado perdió sustancialmente más peso que el grupo placebo (14.9% frente a 2.4%). Los efectos adversos más frecuentes fueron gastrointestinales — náusea, diarrea, vómito — mayormente transitorios y concentrados durante la escalada.",
      limits: "Todos los participantes recibieron también asesoría de estilo de vida. El ensayo fue financiado por el fabricante (Novo Nordisk)."
    },
    regulatory: [
      { country: "Estados Unidos", agency: "FDA", status: "Aprobado. Ozempic: diabetes tipo 2 (2017) y enfermedad renal crónica (2025). Wegovy: obesidad (2021), riesgo cardiovascular (2024), MASH (2025), dosis alta 7.2 mg (2026). Wegovy oral 25 mg (fines de 2025). Tabletas orales para DM2 con indicación cardiovascular (2025).", tone: "ok" },
      { country: "Colombia", agency: "INVIMA", status: "Ozempic con registro sanitario para diabetes tipo 2 desde 2019. Wegovy con registro para obesidad desde 2024.", tone: "ok" },
      { country: "México", agency: "COFEPRIS", status: "Aprobado (Ozempic y Wegovy).", tone: "ok" },
      { country: "Europa", agency: "EMA", status: "Aprobado (Ozempic, Wegovy, Rybelsus). Es la molécula más falsificada de la categoría: INVIMA ha emitido alertas por \"semaglutida\" magistral y de redes sociales sin registro sanitario. Registro no significa que lo que te venden por Instagram sea el producto registrado.", tone: "grey" }
    ],
    community: { pending: true }
  },
  {
    slug: "tesamorelin",
    name: "Tesamorelina",
    altName: "Egrifta",
    className: "ANÁLOGO DE GHRH (LIBERADOR DE HORMONA DE CRECIMIENTO)",
    level: "A",
    summary: "La excepción del eje GH: el único liberador de hormona de crecimiento con aprobación regulatoria, fases 3 publicadas y etiqueta real. Todo lo que CJC-1295 y sermorelin prometen, tesamorelina lo tuvo que demostrar.",
    levelNote: "NIVEL A — Ensayos aleatorizados de fase 3, publicados, replicados y con aprobación de la FDA — para una indicación específica.",
    ceiling: {
      state: "established",
      dose: "2 mg",
      frequency: "por día",
      indication: "subcutáneo (etiqueta aprobada — ojo: diario, no semanal como los GLP-1)",
      schedule: "Dosis fija de 2 mg diarios, sin escalada. Requiere monitoreo de IGF-1 y glucosa durante el tratamiento. Por encima de la dosis de etiqueta no hay datos publicados.",
      adverse: {
        pending: true,
        categories: ["uso fuera de indicación (estética, \"grasa abdominal\" sin VIH)", "abandono por costo", "producto magistral vs original."]
      }
    },
    reports: { pending: true },
    safety: [
      { kind: "absolute", text: "Cáncer activo", origin: "label", detail: "Etiqueta aprobada" },
      { kind: "absolute", text: "Alteración del eje hipotálamo-hipófisis (cirugía, radiación, tumor hipofisario)", origin: "label", detail: "Etiqueta aprobada" },
      { kind: "absolute", text: "Embarazo", origin: "label", detail: "Etiqueta aprobada" },
      { kind: "relative", text: "Diabetes o intolerancia a la glucosa — REQUIERE SUPERVISIÓN", origin: "label", detail: "Eleva la glucosa; la etiqueta exige monitoreo." },
      { kind: "watch", text: "Retención de líquidos, dolor articular, túnel carpiano — SEÑAL DE CLASE", origin: "trial", detail: "Reportados en los ensayos; generalmente reversibles." },
      { kind: "relative", text: "Requiere monitoreo de IGF-1 — ETIQUETA", origin: "mechanism", detail: "El médico debe vigilar que el factor de crecimiento no se dispare." }
    ],
    safetyNote: "Aquí sí hay etiqueta aprobada — y aplica también a quien usa análogos GHRH sin aprobación:",
    claims: [
      { text: "Reduce la grasa visceral abdominal (en lipodistrofia por VIH)", level: "A", n: 0, nh: 0, note: "Fases 3: reducción de ~15–18% de grasa visceral a 26–52 semanas frente a placebo. Es la indicación aprobada — y el efecto se revierte al suspender." },
      { text: "Reduce la grasa del hígado (en personas con VIH)", level: "A", n: 0, nh: 0, note: "Ensayo aleatorizado publicado con reducción de grasa hepática. Sin indicación aprobada para esto." },
      { text: "Mejora la cognición — RESULTADOS MIXTOS", level: "NO_DATA", n: 0, nh: 0, note: "Estudios pequeños con señales en algunos subgrupos; nada concluyente ni aprobado." },
      { text: "Sirve para estética abdominal en población general", level: "NO_DATA", n: 0, nh: 0, note: "Toda la evidencia es en lipodistrofia por VIH. La extrapolación a \"quemar panza\" en gente sana nunca se ha probado." }
    ],
    study: {
      title: "Ensayos de fase 3 de tesamorelina en lipodistrofia asociada a VIH",
      journal: "New England Journal of Medicine (programa pivotal)",
      year: "2007",
      n: "Aleatorizado, doble ciego, controlado con placebo · ~400 participantes",
      plain: "Ensayos de fase 3 en personas con VIH y acumulación de grasa visceral por el tratamiento antirretroviral. El grupo tratado con 2 mg diarios perdió una parte significativa de la grasa visceral profunda frente a placebo, medida por imagen. Al suspender el fármaco, la grasa volvió — es un tratamiento de mantenimiento, no una cura.",
      limits: "Población específica (VIH con lipodistrofia): los resultados no se trasladan automáticamente a población general. Financiado por el fabricante."
    },
    regulatory: [
      { country: "Estados Unidos", agency: "FDA", status: "Aprobado (Egrifta, 2010; nuevas formulaciones desde 2025) para reducción de grasa visceral en lipodistrofia asociada a VIH. Cualquier otro uso es fuera de indicación.", tone: "ok" },
      { country: "Colombia · Invima / México", agency: "COFEPRIS", status: "Sin registro sanitario conocido a la fecha. En la región circula casi todo por vía magistral o \"de investigación\".", tone: "grey" },
      { country: "Europa", agency: "EMA", status: "Sin autorización centralizada vigente.", tone: "grey" },
      { country: "Deporte", agency: "WADA", status: "Prohibido (liberador de hormona de crecimiento), aunque sea un fármaco aprobado.", tone: "ok" }
    ],
    community: { pending: true }
  },
  {
    slug: "aod-9604",
    name: "AOD-9604",
    altName: "hGH 176-191",
    className: "FRAGMENTO DE HORMONA DE CRECIMIENTO (176-191)",
    level: "NOT_SHOWN",
    summary: "El caso más limpio de \"medido y no funcionó\": seis ensayos humanos, más de 900 participantes, un perfil de seguridad excelente — y un fracaso rotundo en el único estudio grande diseñado para probar si sirve para bajar de peso.",
    levelNote: "NO DEMOSTRADO — No es falta de datos. Es un resultado negativo real, en el ensayo que importaba.",
    ceiling: {
      state: "range",
      note: "Los protocolos publicados usaron rangos de 250–1000 mcg por administración, 1–2 veces al día, en ensayos de 12 a 24 semanas. A diferencia de casi todo el catálogo, aquí sí existe un mapa humano — y lo que muestra es ausencia de efecto significativo.",
      adverse: {
        pending: true,
        categories: ["uso \"quema-grasa localizada\"", "combinación con GLP-1", "producto sin COA."]
      }
    },
    reports: { pending: true },
    safety: [
      { kind: "relative", text: "Perfil de seguridad — LIMPIO en ensayos", origin: "mechanism", detail: "Bien tolerado en más de 900 participantes, sin elevación de IGF-1, sin resistencia a la insulina, sin retención de líquidos." },
      { kind: "watch", text: "Embarazo y lactancia", origin: "mechanism", detail: "Nota de honestidad: que algo sea seguro no lo hace efectivo. Este compuesto es la demostración perfecta de esa diferencia." }
    ],
    claims: [
      { text: "Quema grasa / hace bajar de peso", level: "NOT_SHOWN", n: 0, nh: 0, note: "Fase 2a (12 semanas): 2.6 kg frente a 0.8 kg con placebo — señal real. Fase 2b (24 semanas, ~536 personas): sin diferencia estadísticamente significativa frente a placebo. El programa se terminó por eso." },
      { text: "No eleva IGF-1 ni afecta la glucosa", level: "B", n: 0, nh: 0, note: "Confirmado en humanos. Es su ventaja mecanística real: la única afirmación del compuesto que los ensayos sí respaldan." },
      { text: "Repara cartílago / artrosis de rodilla", level: "C", n: 0, nh: 0, note: "Un estudio pequeño de 2014 y modelos animales. Sin fase 3. La referencia comparativa hoy es la semaglutida, que sí redujo dolor de rodilla en un ensayo grande." },
      { text: "Quema grasa localizada\" (abdomen, papada)", level: "NO_DATA", n: 0, nh: 0, note: "Ningún estudio ha probado efecto local de una inyección subcutánea." }
    ],
    study: { title: "Programa clínico de Metabolic Pharmaceuticals (fase 2a 2001 · fase 2b 2007)", journal: "—", n: "~536 participantes en el ensayo pivotal · objetivo primario no alcanzado", plain: "El estudio decisivo fue una fase 2b de 24 semanas con más de 500 adultos con obesidad, diseñada específicamente para responder si AOD-9604 hacía bajar de peso. La respuesta fue no: sin diferencia significativa frente a placebo. La empresa cerró el programa en 2007.", limits: "La seguridad quedó bien documentada (uno de los mejores datasets de seguridad del espacio peptídico). Lo que no quedó es la eficacia." },
    regulatory: [
      { country: "Estados Unidos", agency: "FDA", status: "No aprobado para ninguna indicación. Salió de la lista Categoría 2 en 2026 (nominación retirada), lo cual no es aprobación.", tone: "alert" },
      { country: "Colombia · Invima / México", agency: "COFEPRIS", status: "Sin registro sanitario. Circula como \"reactivo de investigación\".", tone: "grey" },
      { country: "Deporte", agency: "WADA", status: "Prohibido (fragmento de hormona de crecimiento).", tone: "alert" }
    ],
    community: { pending: true }
  },
  {
    slug: "cjc-1295",
    name: "CJC-1295",
    altName: "CJC-1295",
    className: "ANÁLOGO DE GHRH (LIBERADOR DE HORMONA DE CRECIMIENTO)",
    level: "B",
    summary: "Sí tiene ensayos humanos — y ahí está la trampa: demostraron que sube la hormona de crecimiento, no que eso te haga nada bueno. El desarrollo farmacéutico se abandonó hace casi dos décadas.",
    levelNote: "NIVEL B — Ensayos aleatorizados pequeños en humanos, solo con marcadores hormonales (GH, IGF-1). Ningún resultado clínico jamás probado. Desarrollo abandonado.",
    ceiling: {
      state: "none",
      note: "Los ensayos publicados usaron dosis únicas y semanales calculadas por peso corporal, en pocas decenas de voluntarios sanos, por periodos cortos. No existe dosis establecida, ni datos de uso prolongado, ni un solo estudio de los protocolos de meses que circulan en foros. Elevar IGF-1 de forma sostenida sin supervisión es exactamente lo que ningún ensayo ha estudiado.",
      adverse: {
        pending: true,
        categories: ["combinación con ipamorelin (el stack más común del eje GH)", "duración de protocolos", "producto sin COA."]
      }
    },
    reports: { pending: true },
    safety: [
      { kind: "relative", text: "Cáncer activo o antecedente reciente — PRECAUCIÓN FUERTE", origin: "mechanism", detail: "IGF-1 elevado es un factor de crecimiento celular. Los productos GH aprobados lo contraindican en malignidad activa." },
      { kind: "relative", text: "Diabetes o prediabetes — PRECAUCIÓN", origin: "mechanism", detail: "El eje GH sube la glucosa. Efecto de clase documentado en los análogos aprobados." },
      { kind: "watch", text: "Retención de líquidos, dolor articular, túnel carpiano — SEÑAL DE CLASE", origin: "mechanism", detail: "Embarazo y lactancia — SIN NINGÚN DATO" }
    ],
    safetyNote: "No existe etiqueta. Señales del eje GH (compartidas con los liberadores aprobados):",
    claims: [
      { text: "Eleva GH e IGF-1", level: "B", n: 0, nh: 0, note: "Demostrado en ensayos controlados pequeños. Esto es un marcador de sangre, no un beneficio." },
      { text: "Aumenta músculo / reduce grasa", level: "NO_DATA", n: 0, nh: 0, note: "Nunca medido en ningún ensayo. Se infiere del mecanismo, que es precisamente lo que Evidence no hace." },
      { text: "Mejora el sueño y la recuperación", level: "NO_DATA", n: 0, nh: 0, note: "Antienvejecimiento — SIN DATO La elevación crónica de GH/IGF-1 tiene, de hecho, señales adversas en la literatura de longevidad." }
    ],
    study: { title: "Prolonged stimulation of growth hormone and IGF-I secretion by CJC-1295", journal: "Journal of Clinical Endocrinology & Metabolism · Ensayo aleatorizado, controlado con placebo, en adultos sanos", year: "2006", plain: "Un ensayo aleatorizado controlado con placebo en adultos sanos mostró que una o dos inyecciones elevaban GH e IGF-1 de forma sostenida durante días o semanas. El estudio midió hormonas y seguridad a corto plazo. No midió músculo, grasa, rendimiento ni ningún resultado que le importe a quien lo compra.", limits: "Decenas de participantes, semanas de seguimiento, endpoints puramente hormonales, y un programa que el propio fabricante abandonó después." },
    regulatory: [
      { country: "Estados Unidos", agency: "FDA", status: "No aprobado. Restringido para formulación magistral en 2023 (Categoría 2); incluido en el proceso de reclasificación 2024–2026. Sin indicación aprobada.", tone: "alert" },
      { country: "Colombia · Invima / México", agency: "COFEPRIS", status: "Sin registro sanitario. Circula solo como \"reactivo de investigación\".", tone: "grey" },
      { country: "Deporte", agency: "WADA", status: "Prohibido (liberador de hormona de crecimiento).", tone: "alert" }
    ],
    community: { pending: true }
  },
  {
    slug: "ipamorelin",
    name: "Ipamorelin",
    altName: "Ipamorelin",
    className: "SECRETAGOGO DE HORMONA DE CRECIMIENTO (MIMÉTICO DE GRELINA)",
    level: "B",
    summary: "La ficha con el dato que nadie cuenta: ipamorelin sí llegó a fase 2 farmacéutica — y el programa se descontinuó sin demostrar eficacia. Es el único compuesto de este lote con un resultado clínico negativo real.",
    levelNote: "NIVEL B — Fase 1 en humanos con marcadores hormonales. Y un NO DEMOSTRADO clínico genuino: su desarrollo para íleo postoperatorio se abandonó.",
    ceiling: {
      state: "none",
      note: "Los ensayos publicados usaron dosis por peso corporal, en contextos hospitalarios y de laboratorio, por periodos cortos. No existe dosis establecida ni datos de uso prolongado. Los protocolos diarios de meses que circulan en foros no aparecen en ningún estudio.",
      adverse: {
        pending: true,
        categories: ["stack con CJC-1295 (la combinación más vendida del eje GH)", "uso nocturno \"para el sueño\"", "producto sin COA."]
      }
    },
    reports: { pending: true },
    safety: [
      { kind: "relative", text: "Cáncer activo o antecedente reciente — PRECAUCIÓN FUERTE", origin: "mechanism", detail: "IGF-1 elevado es factor de crecimiento celular." },
      { kind: "relative", text: "Diabetes o prediabetes — PRECAUCIÓN", origin: "mechanism", detail: "Efecto de clase del eje GH sobre la glucosa." },
      { kind: "watch", text: "Aumento de apetito — SEÑAL PROPIA", origin: "pharmacovigilance", detail: "Es un mimético de grelina — la hormona del hambre. Reportado de forma consistente." },
      { kind: "relative", text: "Embarazo y lactancia", origin: "mechanism" }
    ],
    safetyNote: "No existe etiqueta. Señales del eje GH:",
    claims: [
      { text: "Libera GH sin subir cortisol ni prolactina", level: "B", n: 0, nh: 0, note: "Demostrado en fase 1. Es el dato real detrás de todo su marketing — y es un marcador, no un beneficio." },
      { text: "Trata el íleo postoperatorio", level: "NOT_SHOWN", n: 0, nh: 0, note: "La única indicación clínica que se probó formalmente. El programa de fase 2 se descontinuó sin alcanzar eficacia. Medido y no mostrado: distinto de \"sin datos\"." },
      { text: "Aumenta músculo / quema grasa", level: "NO_DATA", n: 0, nh: 0, note: "Nunca medido en humanos." },
      { text: "Mejora el sueño", level: "NO_DATA", n: 0, nh: 0, note: "Inferido del pulso de GH nocturno; jamás probado como resultado." }
    ],
    study: { title: "Estudios de fase 1 de ipamorelin (selectividad GH) · Programa de fase 2 en íleo postoperatorio, descontinuado", journal: "—", plain: "En estudios de fase 1, ipamorelin produjo pulsos de hormona de crecimiento comparables a otros secretagogos pero sin elevar cortisol ni prolactina. Cuando se probó para un resultado clínico real — recuperar la función intestinal tras cirugía — el desarrollo se abandonó sin demostrar que funcionara.", limits: "La selectividad hormonal es real y está bien medida. El salto de \"pulso limpio de GH\" a \"más músculo, mejor sueño, antienvejecimiento\" no lo ha dado ningún ensayo." },
    regulatory: [
      { country: "Estados Unidos", agency: "FDA", status: "No aprobado. Restringido para formulación magistral en 2023 (Categoría 2); incluido en el proceso de reclasificación 2024–2026. Sin indicación aprobada.", tone: "alert" },
      { country: "Colombia · Invima / México", agency: "COFEPRIS", status: "Sin registro sanitario. Circula solo como \"reactivo de investigación\".", tone: "grey" },
      { country: "Deporte", agency: "WADA", status: "Prohibido (liberador de hormona de crecimiento).", tone: "alert" }
    ],
    community: { pending: true }
  },
  {
    slug: "sermorelin",
    name: "Sermorelin",
    altName: "GRF 1-29",
    className: "ANÁLOGO DE GHRH (FRAGMENTO 1-29)",
    level: "B",
    summary: "La ficha del \"estuvo aprobado\": sermorelin tuvo aprobación de la FDA — para niños con deficiencia de hormona de crecimiento, hace décadas. Se retiró del mercado por razones comerciales, no de seguridad. Hoy las clínicas lo venden a adultos para algo que nunca se probó.",
    levelNote: "NIVEL B · USO ADULTO — La evidencia NIVEL A histórica es pediátrica (deficiencia de GH diagnosticada). Para el uso antienvejecimiento adulto que se vende hoy: solo marcadores hormonales.",
    ceiling: {
      state: "none",
      note: "El producto aprobado usaba dosis diarias por peso corporal en niños con deficiencia diagnosticada de GH, bajo control médico y de laboratorio. Para el uso adulto antienvejecimiento no existe dosis validada: los protocolos de clínica y de foro no provienen de ningún ensayo con resultados clínicos.",
      adverse: {
        pending: true,
        categories: ["origen (clínica magistral vs mercado gris)", "stack con ipamorelin", "uso sin medición de IGF-1."]
      }
    },
    reports: { pending: true },
    safety: [
      { kind: "relative", text: "Cáncer activo o antecedente reciente — PRECAUCIÓN FUERTE", origin: "mechanism", detail: "IGF-1 elevado es factor de crecimiento celular." },
      { kind: "relative", text: "Diabetes o prediabetes — PRECAUCIÓN", origin: "mechanism", detail: "El eje GH eleva la glucosa." },
      { kind: "watch", text: "Hipotiroidismo no tratado — PRECAUCIÓN", origin: "label", detail: "Interfiere con la respuesta al eje GH (señal de la etiqueta histórica)." },
      { kind: "watch", text: "Embarazo y lactancia", origin: "mechanism" }
    ],
    safetyNote: "Sin etiqueta vigente. Aplican las señales del eje GH (documentadas en los análogos aprobados):",
    claims: [
      { text: "Trata la deficiencia de GH en niños", level: "A", n: 0, nh: 0, note: "La indicación que ganó la aprobación. Población pediátrica con deficiencia diagnosticada — no adultos sanos." },
      { text: "Eleva GH e IGF-1 en adultos", level: "B", n: 0, nh: 0, note: "Demostrado como marcador. Sube menos y más brevemente que los secretagogos modernos — es el análogo de vida corta del grupo." },
      { text: "Rejuvenece\" / mejora composición corporal en adultos", level: "NO_DATA", n: 0, nh: 0, note: "Ningún ensayo de resultados clínicos en adultos sanos. Es la brecha completa entre lo que se vende y lo que se midió." },
      { text: "Mejora el sueño profundo", level: "NO_DATA", n: 0, nh: 0, note: "Estudios pequeños con señales débiles; nada replicado." }
    ],
    study: { title: "Programa de ensayos pediátricos de sermorelin (Geref) en deficiencia de GH — producto retirado del mercado en 2008 por razones comerciales", journal: "—", plain: "Los ensayos que respaldaron la aprobación original mostraron que sermorelin estimulaba el crecimiento en niños con deficiencia de hormona de crecimiento. El fabricante retiró el producto en 2008 por razones de negocio. Nada de esa evidencia prueba que inyectarlo a un adulto de 45 años lo rejuvenezca — eso nunca se estudió.", limits: "\"Aprobado alguna vez\" no es \"aprobado para lo que te lo venden\". La población, el endpoint y la supervisión del uso original no se parecen en nada al uso actual." },
    regulatory: [
      { country: "Estados Unidos", agency: "FDA", status: "Sin producto aprobado vigente (aprobación histórica retirada en 2008 por razones comerciales). Es de los pocos péptidos que las farmacias magistrales de EE.UU. pueden preparar legalmente con receta — legalidad de preparación, no evidencia de eficacia adulta.", tone: "ok" },
      { country: "Colombia · Invima / México", agency: "COFEPRIS", status: "Sin registro sanitario vigente. Circula por vía magistral o \"de investigación\".", tone: "grey" },
      { country: "Deporte", agency: "WADA", status: "Prohibido (liberador de hormona de crecimiento).", tone: "alert" }
    ],
    community: { pending: true }
  },
  {
    slug: "bpc-157",
    name: "BPC-157",
    altName: "BPC-157",
    className: "PÉPTIDO DE REPARACIÓN (PENTADECAPÉPTIDO GÁSTRICO)",
    level: "C",
    summary: "El péptido más famoso de la categoría reparación — y el mejor ejemplo de la brecha entre fama y evidencia: más de 100 estudios en animales, cero ensayos aleatorizados publicados en humanos.",
    levelNote: "NIVEL C — Evidencia principalmente animal. Los únicos datos humanos publicados son pilotos diminutos sin grupo control.",
    ceiling: {
      state: "none",
      note: "NO EXISTE en humanos. Ningún ensayo aleatorizado publicado ha establecido dosis, duración ni seguridad en personas. Las dosis que circulan en foros provienen de extrapolar estudios en ratas — extrapolación que nadie ha validado. El borde del mapa está en cero.",
      adverse: {
        pending: true,
        categories: ["vía de administración (oral vs inyectada)", "combinación con TB-500 (\"Wolverine\")", "duración de ciclos", "producto sin COA."]
      }
    },
    reports: { pending: true },
    safety: [
      { kind: "relative", text: "Cáncer activo o antecedente reciente — PRECAUCIÓN TEÓRICA", origin: "mechanism", detail: "BPC-157 estimula angiogénesis (VEGF) en modelos animales — el mismo mecanismo que los tumores usan para crecer. Nunca estudiado en humanos con cáncer." },
      { kind: "interaction", text: "Embarazo y lactancia", origin: "mechanism", detail: "Interacciones con medicamentos — SIN NINGÚN DATO" }
    ],
    safetyNote: "No existe etiqueta ni base de seguridad humana. Lo siguiente son señales teóricas de mecanismo, no datos clínicos.",
    claims: [
      { text: "Acelera la curación de tendones y músculo", level: "C", n: 0, nh: 0, note: "Consistente en modelos animales (roedores). Cero ensayos controlados en humanos." },
      { text: "Protege y repara el intestino", level: "C", n: 0, nh: 0, note: "Base preclínica más fuerte del compuesto. Una fase 2 en colitis ulcerosa se inició; sus resultados nunca aparecieron en una revista revisada por pares." },
      { text: "Reduce inflamación y dolor articular", level: "NO_DATA", n: 0, nh: 0, note: "Un reporte de 12 pacientes con inyecciones vesicales (2024) y series de casos sin placebo. La mejoría espontánea, el placebo y el sesgo de reporte pueden explicar todo lo observado." },
      { text: "Protege el cerebro / repara nervios", level: "C", n: 0, nh: 0, note: "Solo animales." }
    ],
    study: { title: "Revisión sistemática de estudios de BPC-157 (1993–2024), publicada en 2025", journal: "36 estudios analizados · 1 clínico · 35 preclínicos", plain: "Una revisión sistemática de 2025 analizó 36 estudios de BPC-157 publicados entre 1993 y 2024. Encontró 35 preclínicos y solo 1 clínico. El único piloto de seguridad intravenosa en humanos publicado tenía 2 participantes. Eso es todo el mapa humano.", limits: "La mayor parte de la literatura animal proviene de un solo grupo de investigación (Croacia), con poca replicación independiente — una señal de alerta metodológica en cualquier campo." },
    regulatory: [
      { country: "Estados Unidos", agency: "FDA", status: "No aprobado. Restringido para formulación magistral en 2023 (Categoría 2 por preocupaciones de seguridad); en 2026 la FDA inició su reclasificación y revisión en comité. Salir de una lista restrictiva no es aprobación: sigue sin indicación, sin dosis validada y sin datos de eficacia humana.", tone: "alert" },
      { country: "Colombia · Invima / México", agency: "COFEPRIS", status: "Sin registro sanitario. Circula solo como \"reactivo de investigación\".", tone: "grey" },
      { country: "Deporte", agency: "WADA", status: "Prohibido. Da positivo en control antidopaje.", tone: "alert" }
    ],
    community: { pending: true }
  },
  {
    slug: "tb-500",
    name: "TB-500",
    altName: "Thymosin beta-4 fragment",
    className: "PÉPTIDO DE REPARACIÓN (FRAGMENTO DE TIMOSINA BETA-4)",
    level: "C",
    summary: "La ficha con truco: la molécula madre (timosina beta-4) sí llegó a ensayos humanos — en gotas para los ojos. El fragmento inyectable que se vende como \"TB-500\" nunca se ha probado en una persona.",
    levelNote: "NIVEL C — Evidencia animal para el fragmento inyectable que circula. Los ensayos humanos existentes usaron otra formulación, otra vía y otra indicación.",
    ceiling: {
      state: "none",
      note: "NO EXISTE en humanos para el producto inyectable que circula. Los ensayos oftálmicos de la molécula madre no aplican a inyecciones sistémicas: distinta molécula exacta, distinta dosis, distinta vía. El borde del mapa está en cero.",
      adverse: {
        pending: true,
        categories: ["combinación con BPC-157 (\"Wolverine\")", "frecuencia de \"ciclos de carga\"", "producto sin COA."]
      }
    },
    reports: { pending: true },
    safety: [
      { kind: "relative", text: "Cáncer activo o antecedente reciente — PRECAUCIÓN TEÓRICA", origin: "mechanism", detail: "Promueve angiogénesis y migración celular en modelos — mecanismo compartido con crecimiento tumoral. Nunca estudiado en humanos con cáncer." },
      { kind: "interaction", text: "Embarazo y lactancia", origin: "mechanism", detail: "Interacciones — SIN NINGÚN DATO" }
    ],
    safetyNote: "No existe etiqueta ni base de seguridad humana para el inyectable. Señales teóricas:",
    claims: [
      { text: "Repara músculo, tendón y tejido conectivo", level: "C", n: 0, nh: 0, note: "Modelos animales de cicatrización. Cero ensayos en humanos con el inyectable." },
      { text: "Mejora la flexibilidad y reduce inflamación", level: "NO_DATA", n: 0, nh: 0, note: "Reporte comunitario sin ningún estudio controlado detrás." },
      { text: "Repara la córnea / ojo seco (molécula madre, en gotas)", level: "B", n: 0, nh: 0, note: "Ensayos aleatorizados reales existen — con resultados mixtos que no alcanzaron consistentemente sus objetivos primarios. Es lo más cerca que esta familia ha estado de la medicina real, y no fue con inyecciones." },
      { text: "Regenera el corazón", level: "NOT_SHOWN", n: 0, nh: 0, note: "El desarrollo cardíaco en humanos se abandonó sin demostrar eficacia." }
    ],
    study: { title: "Programa de ensayos oftálmicos de timosina beta-4 (fase 2–3), resultados mixtos", journal: "Fragmento inyectable: sin estudios humanos publicados", plain: "Los únicos ensayos aleatorizados en humanos de esta familia probaron gotas oftálmicas de timosina beta-4 para enfermedades de la superficie del ojo. Algunos endpoints mejoraron, los primarios fallaron en varios ensayos, y el programa no ha producido un fármaco aprobado. El fragmento inyectable vendido como TB-500 no aparece en ninguno de estos estudios.", limits: "Trasladar resultados de una gota ocular a una inyección intramuscular semanal es especulación pura: ni la molécula ni la exposición son equivalentes." },
    regulatory: [
      { country: "Estados Unidos", agency: "FDA", status: "No aprobado. Restringido para formulación magistral en 2023 (Categoría 2); incluido en la reclasificación y revisión de comité de 2026. Sin indicación aprobada.", tone: "alert" },
      { country: "Colombia · Invima / México", agency: "COFEPRIS", status: "Sin registro sanitario. Circula solo como \"reactivo de investigación\".", tone: "grey" },
      { country: "Deporte", agency: "WADA", status: "Prohibido. TB-500 es históricamente famoso por casos de dopaje (incluido dopaje equino).", tone: "alert" }
    ],
    community: { pending: true }
  },
  {
    slug: "ghk-cu",
    name: "GHK-Cu",
    altName: "Copper peptide",
    className: "PÉPTIDO DE COBRE (TRIPÉPTIDO GHK-Cu)",
    level: "B",
    summary: "La ficha que depende de la vía: en crema tiene estudios humanos pequeños y un lugar legal en la cosmética. Inyectado — que es como lo vende el mercado de péptidos — no tiene ni un solo estudio en personas.",
    levelNote: "NIVEL B · SOLO VÍA TÓPICA — Estudios humanos pequeños con endpoints cosméticos. La vía inyectable: SIN DATO.",
    ceiling: {
      state: "none",
      note: "Tópico: concentraciones cosméticas en cremas y sérums (los estudios usaron aplicación facial diaria por 8–12 semanas). Inyectable: NO EXISTE techo en humanos. Ningún estudio publicado. El borde del mapa está en cero.",
      adverse: {
        pending: true,
        categories: ["vía (tópica vs subcutánea vs microneedling)", "uso capilar", "producto sin COA."]
      }
    },
    reports: { pending: true },
    safety: [
      { kind: "relative", text: "Vía tópica", origin: "mechanism", detail: "Perfil cosmético generalmente bien tolerado; posible irritación local." },
      { kind: "interaction", text: "Vía inyectable", origin: "mechanism", detail: "Presión arterial, carga de cobre, interacciones: nadie lo ha medido en personas." },
      { kind: "watch", text: "Embarazo y lactancia", origin: "mechanism", detail: "(cualquier vía sistémica)" }
    ],
    claims: [
      { text: "Mejora la apariencia de la piel (arrugas, elasticidad)", level: "B", n: 0, nh: 0, note: "Estudios pequeños controlados de cremas mostraron mejoras frente a vehículo. Financiación industrial y muestras chicas: evidencia real pero débil." },
      { text: "Estimula el crecimiento del cabello", level: "C", n: 0, nh: 0, note: "Preclínica y formulaciones comerciales; sin ensayos aleatorizados independientes publicados." },
      { text: "Cicatrización de heridas", level: "C", n: 0, nh: 0, note: "Base animal amplia; datos humanos limitados a series pequeñas." },
      { text: "Resetea\" la expresión génica / antienvejecimiento sistémico", level: "NO_DATA", n: 0, nh: 0, note: "La afirmación viene de estudios in vitro de expresión génica. Nadie ha demostrado un efecto sistémico inyectando GHK-Cu en personas." }
    ],
    study: { title: "Estudios controlados de GHK-Cu tópico en piel facial (8–12 semanas)", journal: "Vía inyectable: sin estudios humanos publicados", plain: "Los mejores datos humanos son estudios de crema facial de 8–12 semanas: el lado tratado mostró mejoras medibles en elasticidad y apariencia frente al lado control. Nada de eso dice qué pasa cuando el compuesto se inyecta.", limits: "Muestras pequeñas, endpoints cosméticos subjetivos en parte, y financiación de la propia industria que vende las cremas." },
    regulatory: [
      { country: "Cosmético Tópico", status: "Legal como ingrediente cosmético. En Colombia, los péptidos cosméticos tópicos entran con Notificación Sanitaria Obligatoria (Decisión 516 de la Comunidad Andina).", tone: "ok" },
      { country: "Inyectable", agency: "ESTADOS UNIDOS FDA", status: "No aprobado. La vía inyectable fue restringida para formulación magistral en 2023 (Categoría 2) e incluida en la reclasificación de 2026. Sin indicación aprobada.", tone: "alert" },
      { country: "Colombia · Invima / México", agency: "COFEPRIS", status: "Sin registro como medicamento. El inyectable circula solo como \"reactivo de investigación\".", tone: "grey" }
    ],
    community: { pending: true }
  },
  {
    slug: "kpv",
    name: "KPV",
    altName: "α-MSH 11-13",
    className: "TRIPÉPTIDO ANTIINFLAMATORIO (FRAGMENTO DE α-MSH)",
    level: "C",
    summary: "Tres aminoácidos con una historia mecanística elegante — y un mapa humano en blanco. Todo lo que se afirma sobre KPV viene de células, ratones y modelos de colitis.",
    levelNote: "NIVEL C — Evidencia preclínica exclusivamente. Cero ensayos aleatorizados publicados en humanos.",
    ceiling: {
      state: "none",
      note: "NO EXISTE en humanos. Ningún estudio publicado ha establecido dosis, vía ni seguridad en personas. Las cifras que circulan (oral, tópico, subcutáneo) no provienen de ningún ensayo. El borde del mapa está en cero.",
      adverse: {
        pending: true,
        categories: ["vía (oral para intestino vs tópico vs inyectado)", "combinación con BPC-157 en protocolos digestivos", "producto sin COA."]
      }
    },
    reports: { pending: true },
    safety: [
      { kind: "interaction", text: "Enfermedad autoinmune bajo tratamiento", origin: "mechanism", detail: "Modula la respuesta inflamatoria; interacción con inmunomoduladores no estudiada." },
      { kind: "interaction", text: "Embarazo y lactancia", origin: "mechanism", detail: "Interacciones — SIN NINGÚN DATO" }
    ],
    safetyNote: "No existe base de seguridad humana.",
    claims: [
      { text: "Reduce la inflamación intestinal", level: "C", n: 0, nh: 0, note: "Consistente en modelos animales de colitis. Cero datos humanos." },
      { text: "Trata condiciones de piel (acné, eczema, psoriasis)", level: "C", n: 0, nh: 0, note: "Base preclínica y formulaciones tópicas comerciales; sin ensayos controlados publicados." },
      { text: "Antimicrobiano", level: "C", n: 0, nh: 0, note: "Actividad demostrada in vitro. No traducida a humanos." },
      { text: "Cicatrización de heridas", level: "C", n: 0, nh: 0, note: "Es \"la parte antiinflamatoria de la α-MSH sin los efectos de pigmentación\" — MECANISMO PLAUSIBLE La lógica es real y por eso el compuesto es interesante. La lógica no es evidencia." }
    ],
    study: { title: "Literatura preclínica de KPV en modelos de inflamación intestinal y cutánea", journal: "Sin ensayos clínicos humanos publicados", plain: "KPV es el fragmento final de la hormona α-MSH. En células y en ratones bloquea vías inflamatorias clave sin causar oscurecimiento de la piel, que es el efecto que limita a la molécula completa. Nadie ha probado eso en una persona en un estudio controlado.", limits: "Un péptido de tres aminoácidos con buena biodisponibilidad teórica sigue siendo, en humanos, una hipótesis sin probar." },
    regulatory: [
      { country: "Estados Unidos", agency: "FDA", status: "No aprobado. Restringido para formulación magistral en 2023 (Categoría 2); incluido en la reclasificación y revisión de comité de 2026. Sin indicación aprobada.", tone: "alert" },
      { country: "Colombia · Invima / México", agency: "COFEPRIS", status: "Sin registro sanitario. Circula como \"reactivo de investigación\".", tone: "grey" }
    ],
    community: { pending: true }
  },
  {
    slug: "ll-37",
    name: "LL-37",
    altName: "Cathelicidin",
    className: "PÉPTIDO ANTIMICROBIANO (CATELICIDINA HUMANA)",
    level: "C",
    summary: "El único de este grupo que la FDA dejó restringido cuando levantó la mano con los demás — y por razones concretas, no por falta de papeleo. Tu cuerpo lo produce; eso no significa que inyectarlo sea seguro.",
    levelNote: "NIVEL C — Evidencia in vitro y preclínica abundante. Los ensayos clínicos siguen en fases muy tempranas; ninguna formulación tiene aprobación regulatoria.",
    ceiling: {
      state: "none",
      note: "NO EXISTE en humanos para la vía subcutánea que circula. No hay protocolo de dosificación establecido a partir de datos clínicos controlados. Las cifras que se comparten en foros son anecdóticas. El borde del mapa está en cero.",
      adverse: {
        pending: true,
        categories: ["uso para infecciones crónicas o SIBO", "uso nebulizado", "reacción local en el sitio de inyección", "producto sin COA."]
      }
    },
    reports: { pending: true },
    safety: [
      { kind: "watch", text: "Efectos sobre la fertilidad masculina — SEÑAL DECLARADA POR LA FDA", origin: "mechanism", detail: "Efectos protumorales en algunos tejidos — SEÑAL DECLARADA POR LA FDA" },
      { kind: "relative", text: "Enfermedad autoinmune o inflamatoria (psoriasis, lupus, artritis reumatoide) — PRECAUCIÓN FUERTE", origin: "mechanism", detail: "El péptido está implicado en la fisiopatología de estas condiciones." },
      { kind: "watch", text: "Citotoxicidad — SEÑAL DE MECANISMO", origin: "mechanism", detail: "Las concentraciones que matan bacterias se acercan a las que dañan células humanas." },
      { kind: "relative", text: "Embarazo y lactancia", origin: "mechanism" }
    ],
    safetyNote: "No existe etiqueta. Las siguientes son las preocupaciones que la propia FDA nombró al mantenerlo restringido:",
    claims: [
      { text: "Mata bacterias, incluidas resistentes", level: "C", n: 0, nh: 0, note: "Muy bien demostrado en placa de laboratorio. La traducción a humanos choca con tres problemas conocidos: se degrada rápido por proteasas, es citotóxico a concentraciones cercanas a las antimicrobianas, y es caro de producir." },
      { text: "Rompe biopelículas", level: "C", n: 0, nh: 0, note: "In vitro." },
      { text: "Cicatriza heridas / mejora la piel", level: "C", n: 0, nh: 0, note: "Datos preclínicos y de barrera cutánea; sin ensayos concluyentes." },
      { text: "Trata infecciones crónicas en personas", level: "NO_DATA", n: 0, nh: 0, note: "Es el uso que se vende y el que no tiene ensayos." },
      { text: "Punto crítico:", level: "NO_DATA", n: 0, nh: 0, note: "LL-37 no es solo \"el antibiótico del cuerpo\". Cuando se expresa de más o en el lugar equivocado, participa en la inflamación de psoriasis, lupus, artritis reumatoide y varios tipos de cáncer. Es un arma de doble filo documentada." }
    ],
    study: { title: "Revisiones de la familia catelicidina y modificaciones de LL-37 (2025–2026)", journal: "Limitaciones reportadas: baja estabilidad proteolítica, citotoxicidad, costo de producción", plain: "LL-37 es la única catelicidina que produce el ser humano, liberada por neutrófilos y células epiteliales ante infección o herida. En laboratorio destruye membranas bacterianas con eficacia notable. Ese mismo mecanismo, mal dirigido, daña células propias — que es la razón por la que aún no existe un medicamento basado en él.", limits: "Décadas de investigación mecanística no han producido una sola aprobación. La brecha no es de interés científico: es de seguridad y estabilidad." },
    regulatory: [
      { country: "Estados Unidos", agency: "FDA", status: "No aprobado. Colocado en Categoría 2 en 2023 y mantenido ahí: no fue incluido entre los péptidos liberados en la reclasificación de 2024–2026, junto con melanotán II, GHRP-2, GHRP-6 y otros. Es una distinción importante dentro del catálogo.", tone: "alert" },
      { country: "Colombia · Invima / México", agency: "COFEPRIS", status: "Sin registro sanitario. Circula como \"reactivo de investigación\".", tone: "grey" }
    ],
    community: { pending: true }
  },
  {
    slug: "mots-c",
    name: "MOTS-c",
    altName: "MOTS-c",
    className: "PÉPTIDO MITOCONDRIAL",
    level: "C",
    summary: "El \"ejercicio en una jeringa\" según el marketing. Según la ciencia: un péptido fascinante en ratones, con niveles que suben con el ejercicio en humanos — y cero ensayos de eficacia en personas.",
    levelNote: "NIVEL C — Evidencia animal y observacional. El único programa clínico humano (de un análogo) se detuvo cuando la empresa cerró.",
    ceiling: {
      state: "none",
      note: "NO EXISTE en humanos para el MOTS-c que circula. Que tu cuerpo produzca más MOTS-c cuando entrenas no dice nada sobre inyectarse el péptido sintético. El borde del mapa está en cero.",
      adverse: {
        pending: true,
        categories: ["uso \"pre-entreno\"", "combinación con otros compuestos metabólicos", "producto sin COA."]
      }
    },
    reports: { pending: true },
    safety: [
      { kind: "relative", text: "Diabetes o medicación hipoglucemiante — PRECAUCIÓN TEÓRICA", origin: "mechanism", detail: "Si hace lo que hace en ratones, movería glucosa e insulina. Nadie lo ha medido en personas." },
      { kind: "relative", text: "Embarazo y lactancia", origin: "mechanism" }
    ],
    safetyNote: "No existe base de seguridad humana. Señales teóricas:",
    claims: [
      { text: "Mejora el metabolismo y la sensibilidad a la insulina", level: "C", n: 0, nh: 0, note: "Consistente en ratones, incluidos modelos de dieta alta en grasa. Cero ensayos humanos." },
      { text: "Imita o potencia el ejercicio", level: "C", n: 0, nh: 0, note: "En humanos solo se ha observado que los niveles endógenos suben al entrenar — correlación, no tratamiento." },
      { text: "Ayuda a perder grasa", level: "NO_DATA", n: 0, nh: 0, note: "Longevidad / función mitocondrial — NIVEL C Mecanismo real e interesante en laboratorio. Ninguna evidencia de resultado clínico en personas." }
    ],
    study: { title: "Fase 1 del análogo CB4211 (hígado graso/obesidad) — programa descontinuado sin resultados de eficacia publicados", journal: "—", plain: "Lo más lejos que llegó este compuesto en humanos fue una fase 1 de un análogo farmacéutico para hígado graso y obesidad. La empresa que lo desarrollaba cerró operaciones y nunca publicó datos de eficacia. Todo lo demás es ratón, célula o correlación.", limits: "Un programa clínico que muere por razones financieras no prueba que el compuesto falle — pero deja el mapa humano exactamente donde estaba: vacío." },
    regulatory: [
      { country: "Estados Unidos", agency: "FDA", status: "No aprobado. Restringido para formulación magistral en 2023 (Categoría 2); incluido en la reclasificación y revisión de comité de 2026. Sin indicación aprobada.", tone: "alert" },
      { country: "Colombia · Invima / México", agency: "COFEPRIS", status: "Sin registro sanitario. Circula solo como \"reactivo de investigación\".", tone: "grey" },
      { country: "Deporte", agency: "WADA", status: "Prohibido (modulador metabólico). Da positivo en control antidopaje.", tone: "alert" }
    ],
    community: { pending: true }
  },
  {
    slug: "ss-31",
    name: "SS-31 (Elamipretida)",
    altName: "Elamipretide",
    className: "PÉPTIDO MITOCONDRIAL (DIRIGIDO A CARDIOLIPINA)",
    level: "A",
    summary: "El único péptido mitocondrial con aprobación de la FDA — conseguida en 2025, tras dos rechazos, para una enfermedad ultra-rara que afecta a unas 150 personas en Estados Unidos. Esa es toda la indicación. Nada de lo que se vende como \"energía celular\" está aprobado.",
    levelNote: "NIVEL A · PARA SU INDICACIÓN APROBADA — Aprobación acelerada basada en un marcador intermedio (fuerza del extensor de rodilla) en síndrome de Barth. Para todo lo demás: NIVEL B o SIN DATO.",
    ceiling: {
      state: "established",
      dose: "40 mg",
      frequency: "al día",
      indication: "subcutáneo (dosis del ensayo TAZPOWER; el producto aprobado se administra en pacientes de 30 kg o más)",
      schedule: "Dosis diaria fija, sin escalada, en contexto clínico supervisado, en pacientes con una enfermedad genética diagnosticada. No existe ningún estudio de uso en adultos sanos para \"energía\" o rendimiento.",
      adverse: {
        pending: true,
        categories: ["uso fuera de indicación por longevidad/rendimiento", "producto aprobado vs \"de investigación\"", "reacción en el sitio de inyección."]
      }
    },
    reports: { pending: true },
    safety: [
      { kind: "relative", text: "Reacciones en el sitio de inyección — EFECTO ADVERSO MÁS FRECUENTE", origin: "trial", detail: "El más reportado en los ensayos." },
      { kind: "relative", text: "Pacientes de menos de 30 kg — FUERA DE ETIQUETA", origin: "mechanism", detail: "La aprobación cubre adultos y pediátricos de 30 kg o más; en menores de ese peso se siguen recogiendo datos." },
      { kind: "watch", text: "Embarazo y lactancia", origin: "mechanism", detail: "Uso en personas sin enfermedad mitocondrial — SIN NINGÚN DATO" }
    ],
    safetyNote: "Existe etiqueta aprobada, acotada a la indicación:",
    claims: [
      { text: "Mejora la fuerza muscular en síndrome de Barth", level: "A", n: 0, nh: 0, note: "La indicación aprobada. Importante: se aprobó sobre un objetivo intermedio (fuerza del extensor de rodilla), y la aprobación puede quedar condicionada a que ensayos confirmatorios verifiquen el beneficio clínico." },
      { text: "Trata la miopatía mitocondrial primaria", level: "NOT_SHOWN", n: 0, nh: 0, note: "El programa más amplio no produjo una aprobación; sigue en investigación." },
      { text: "Trata la degeneración macular seca — EN ESTUDIO", level: "NO_DATA", n: 0, nh: 0, note: "Sin aprobación." },
      { text: "Mejora la energía, el rendimiento o la longevidad en personas sanas", level: "NO_DATA", n: 0, nh: 0, note: "Cero ensayos. Es el uso que impulsa el mercado gris y el que no tiene ni un estudio." }
    ],
    study: { title: "TAZPOWER (NCT03098797) — elamipretida en síndrome de Barth", journal: "Fase 2 aleatorizada, doble ciego, controlada con placebo, con extensión abierta · Aprobación acelerada de la FDA (Forzinity), septiembre de", year: "2025", plain: "El síndrome de Barth es una enfermedad genética rara que daña el corazón y el músculo por disfunción mitocondrial. En un ensayo aleatorizado con extensión de largo plazo, los pacientes tratados mejoraron su fuerza muscular. Con esos datos —y tras dos rechazos previos— la FDA otorgó aprobación acelerada en septiembre de 2025. Fue el primer tratamiento para esa enfermedad y el primer fármaco dirigido a la mitocondria en aprobarse.", limits: "La población total es de unas 150 personas en EE.UU. Los ensayos son diminutos por necesidad. La aprobación descansa en un marcador intermedio, no en un resultado clínico definitivo — el propio fabricante lo señala." },
    regulatory: [
      { country: "Estados Unidos", agency: "FDA", status: "Aprobado por vía acelerada (Forzinity, septiembre de 2025) para mejorar la fuerza muscular en síndrome de Barth, en pacientes de 30 kg o más. Continuidad de la aprobación sujeta a verificación en ensayos confirmatorios. Cualquier otro uso es fuera de indicación.", tone: "ok" },
      { country: "Europa", agency: "EMA", status: "Designación de medicamento huérfano para síndrome de Barth; sin autorización de comercialización.", tone: "grey" },
      { country: "Colombia · Invima / México", agency: "COFEPRIS", status: "Sin registro sanitario. Lo que se vende como \"SS-31 de investigación\" no es el producto aprobado.", tone: "grey" }
    ],
    community: { pending: true }
  },
  {
    slug: "epitalon",
    name: "Epitalon",
    altName: "Epithalon",
    className: "PÉPTIDO PINEAL SINTÉTICO (TETRAPÉPTIDO)",
    level: "C",
    summary: "El péptido con las afirmaciones más grandes del catálogo — alargar la vida, alargar los telómeros — y la evidencia más frágil: estudios de un solo grupo, en su mayoría publicados en ruso, sin replicación independiente en tres décadas.",
    levelNote: "NIVEL C — Estudios humanos existen, pero provienen casi todos del mismo laboratorio, con metodología y reporte que no cumplen estándares actuales. Sin replicación externa.",
    ceiling: {
      state: "none",
      note: "Los protocolos publicados usan ciclos cortos (típicamente 10–20 días) repetidos anualmente, con dosis en microgramos a bajos miligramos. Ninguna de esas cifras proviene de un ensayo controlado moderno. Tratarlas como \"el protocolo\" es tomar prestada una autoridad que los estudios no tienen.",
      adverse: {
        pending: true,
        categories: ["duración de ciclos", "frecuencia anual", "combinación con otros protocolos de longevidad", "producto sin COA."]
      }
    },
    reports: { pending: true },
    safety: [
      { kind: "watch", text: "Cáncer activo — PRECAUCIÓN TEÓRICA", origin: "mechanism", detail: "Cualquier compuesto que module proliferación celular y telomerasa merece cautela aquí. Sin datos." },
      { kind: "interaction", text: "Embarazo y lactancia", origin: "mechanism", detail: "Interacciones — SIN NINGÚN DATO" }
    ],
    safetyNote: "No existe etiqueta ni base de seguridad moderna.",
    claims: [
      { text: "Alarga la vida / reduce la mortalidad", level: "C", n: 0, nh: 0, note: "Reportado en cohortes rusas de adultos mayores seguidas por años. Sin aleatorización moderna, sin cegamiento verificable, sin replicación independiente. Es la afirmación más grande con el soporte más débil." },
      { text: "Alarga los telómeros", level: "C", n: 0, nh: 0, note: "Observado en cultivo celular. Nunca demostrado como resultado clínico en humanos." },
      { text: "Regula la melatonina y el sueño", level: "C", n: 0, nh: 0, note: "Racional mecanístico pineal; datos humanos escasos." },
      { text: "Antienvejecimiento general", level: "NO_DATA", n: 0, nh: 0 }
    ],
    study: { title: "Estudios de cohorte del grupo Khavinson en adultos mayores (San Petersburgo)", journal: "Publicaciones mayormente en ruso · sin replicación independiente", plain: "La evidencia central son estudios de seguimiento en adultos mayores rusos que reportaron menor mortalidad en los grupos tratados. Fueron publicados mayormente en revistas rusas, por el mismo grupo que desarrolló el compuesto, y nadie los ha reproducido de forma independiente en más de treinta años.", limits: "Que un solo laboratorio produzca toda la evidencia positiva de un compuesto es, en cualquier campo, una señal de alerta metodológica — no una prueba de que sea falso, pero sí una razón para no tratarlo como establecido." },
    regulatory: [
      { country: "Estados Unidos", agency: "FDA", status: "No aprobado. Restringido para formulación magistral en 2023 (Categoría 2); incluido en la revisión de comité de 2026. Sin indicación aprobada.", tone: "alert" },
      { country: "Rusia", status: "Existen productos peptídicos relacionados en el mercado ruso; esa autorización no equivale a aprobación de FDA, EMA, INVIMA ni COFEPRIS.", tone: "grey" },
      { country: "Colombia · Invima / México", agency: "COFEPRIS", status: "Sin registro sanitario. Circula como \"reactivo de investigación\".", tone: "grey" }
    ],
    community: { pending: true }
  },
  {
    slug: "pinealon",
    name: "Pinealon",
    altName: "Pinealon",
    className: "PÉPTIDO BIORREGULADOR (TRIPÉPTIDO)",
    level: "C",
    summary: "De la misma familia y del mismo laboratorio que Epitalon, con el mismo patrón: afirmaciones grandes sobre el cerebro, evidencia casi toda en ruso, de un solo grupo, sin replicación independiente.",
    levelNote: "NIVEL C — Evidencia preclínica y estudios de un único grupo de investigación. Sin ensayos aleatorizados independientes en humanos.",
    ceiling: {
      state: "none",
      note: "NO EXISTE en humanos. Ningún estudio controlado ha establecido dosis, vía ni seguridad en personas. Los ciclos que circulan (10–20 días, repetidos) copian el formato de Epitalon, no un protocolo validado. El borde del mapa está en cero.",
      adverse: {
        pending: true,
        categories: ["combinación con Epitalon y otros biorreguladores", "ciclos repetidos", "producto sin COA."]
      }
    },
    reports: { pending: true },
    safety: [
      { kind: "interaction", text: "Embarazo y lactancia", origin: "mechanism", detail: "Interacciones — SIN NINGÚN DATO" },
      { kind: "relative", text: "Uso prolongado", origin: "pharmacovigilance", detail: "La ausencia de efectos adversos reportados no es lo mismo que seguridad demostrada: donde nadie ha medido, nadie ha encontrado nada." }
    ],
    safetyNote: "No existe etiqueta ni base de seguridad humana.",
    claims: [
      { text: "Protege las neuronas / mejora la función cerebral", level: "C", n: 0, nh: 0, note: "Modelos celulares y animales de hipoxia y estrés oxidativo. Cero datos humanos controlados." },
      { text: "Mejora la memoria y la concentración", level: "NO_DATA", n: 0, nh: 0, note: "No existe ningún ensayo cognitivo en humanos." },
      { text: "Regula la expresión génica en el cerebro (\"biorregulación peptídica\") — HIPÓTESIS DEL AUTOR", level: "NO_DATA", n: 0, nh: 0, note: "Es el marco teórico del laboratorio que lo desarrolló, no un hallazgo replicado de forma independiente." },
      { text: "Antienvejecimiento cerebral", level: "NO_DATA", n: 0, nh: 0 }
    ],
    study: { title: "Publicaciones del grupo Khavinson sobre biorreguladores peptídicos cortos", journal: "Mayormente en ruso · sin replicación independiente · sin ensayos humanos aleatorizados", plain: "Toda la literatura relevante proviene del mismo instituto ruso que creó la familia de \"biorreguladores peptídicos\" cortos. Los trabajos describen protección neuronal en células y animales sometidos a estrés. Nadie fuera de ese grupo lo ha reproducido, y no existe un solo ensayo aleatorizado en personas.", limits: "Cuando la totalidad de la evidencia positiva de un compuesto proviene de quienes lo desarrollaron y lo comercializan, la evidencia no se anula — pero tampoco se puede tratar como establecida." },
    regulatory: [
      { country: "Estados Unidos", agency: "FDA", status: "No aprobado para ninguna indicación.", tone: "alert" },
      { country: "Rusia", status: "Existen productos de la familia de biorreguladores en el mercado ruso; esa condición no equivale a aprobación de FDA, EMA, INVIMA ni COFEPRIS.", tone: "grey" },
      { country: "Colombia · Invima / México", agency: "COFEPRIS", status: "Sin registro sanitario. Circula como \"reactivo de investigación\".", tone: "grey" }
    ],
    community: { pending: true }
  },
  {
    slug: "nad",
    name: "NAD+",
    altName: "NMN / NR",
    className: "COENZIMA — NO ES UN PÉPTIDO",
    level: "B",
    summary: "Está en el catálogo porque circula dentro de la categoría, no porque lo sea. Y su ficha depende de la vía: los precursores orales (NR, NMN) tienen ensayos aleatorizados reales; el NAD+ intravenoso que venden las clínicas, casi ninguno.",
    levelNote: "NIVEL B · PRECURSORES ORALES — Ensayos aleatorizados que demuestran que sube el NAD+ en sangre. Los resultados clínicos son otra historia. · NIVEL C · NAD+ INTRAVENOSO — pilotos de tolerabilidad, sin ensayos de eficacia.",
    ceiling: {
      state: "range",
      note: "Oral: los ensayos usaron rangos de cientos a ~1000 mg diarios de NR o NMN por semanas o meses. Intravenoso: los estudios publicados usaron infusiones de ~500 mg en días consecutivos, midiendo tolerabilidad — no eficacia. No existe dosis validada por resultado clínico.",
      adverse: {
        pending: true,
        categories: ["vía (oral vs IV en clínica)", "costo por sesión", "combinación con otros protocolos de longevidad."]
      }
    },
    reports: { pending: true },
    safety: [
      { kind: "relative", text: "Infusión IV — TOLERABILIDAD", origin: "pharmacovigilance", detail: "Reportes de síntomas gastrointestinales moderados a severos, aumento de frecuencia cardíaca y presión en el pecho durante la infusión, que ceden al terminar. Por eso las infusiones se administran lento." },
      { kind: "relative", text: "Cáncer activo — PRECAUCIÓN TEÓRICA", origin: "mechanism", detail: "El metabolismo del NAD+ también alimenta células tumorales; no hay datos clínicos que resuelvan esto." },
      { kind: "watch", text: "Embarazo y lactancia", origin: "mechanism" }
    ],
    claims: [
      { text: "Sube los niveles de NAD+ en sangre", level: "A", n: 0, nh: 0, note: "Bien demostrado y replicado. Es un marcador de laboratorio, no un beneficio de salud." },
      { text: "Mejora la energía y revierte el envejecimiento", level: "NO_DATA", n: 0, nh: 0, note: "Los ensayos en humanos con resultados clínicos han sido pequeños y de resultados mixtos. Varios estudios metabólicos no reprodujeron lo que se ve en animales." },
      { text: "Beneficios en poblaciones específicas", level: "C", n: 0, nh: 0, note: "Señales preliminares en prediabetes, Parkinson temprano y enfermedad arterial periférica. Estudios chicos, sin replicación grande." },
      { text: "El NAD+ IV llega mejor a las células que el oral", level: "NOT_SHOWN", n: 0, nh: 0, note: "La molécula de NAD+ es grande y se degrada antes de entrar a la célula. La premisa comercial de la vía IV no está establecida." }
    ],
    study: { title: "Comparación de tres precursores de NAD+ en humanos", journal: "Nature Metabolism", year: "2026", plain: "Un estudio de 2026 comparó tres precursores de NAD+ en humanos: NR y NMN duplicaron el NAD+ circulante tras 14 días; la nicotinamida no lo sostuvo. Eso responde \"¿sube el nivel?\" — no responde \"¿te hace sentir o vivir mejor?\", que es lo que se vende.", limits: "Casi toda la investigación humana es de corto plazo, con muestras chicas y marcadores intermedios. La comparación directa entre IV y oral en resultados clínicos no existe." },
    regulatory: [
      { country: "Precursores Orales (Nr, Nmn)", status: "Se venden como suplemento en varios mercados; el estatus de NMN en EE.UU. ha sido objeto de disputa regulatoria.", tone: "grey" },
      { country: "Nad+ Intravenoso", status: "No es un medicamento aprobado para ninguna indicación. Se administra en clínicas como servicio, no como terapia autorizada.", tone: "ok" },
      { country: "Colombia · Invima / México", agency: "COFEPRIS", status: "Sin registro como medicamento para las indicaciones que se promocionan.", tone: "grey" }
    ],
    community: { pending: true }
  },
  {
    slug: "semax",
    name: "Semax",
    altName: "ACTH 4-7 analog",
    className: "PÉPTIDO NEUROTRÓFICO (ANÁLOGO DE ACTH 4-7)",
    level: "B",
    summary: "Está en la Lista de Medicamentos Vitales y Esenciales de Rusia desde 2011 — para ictus y trastornos del nervio óptico, en hospitales, bajo prescripción. En Occidente se vende como nootrópico para gente sana, que es exactamente la población en la que nunca se ha estudiado.",
    levelNote: "NIVEL B · CON ASTERISCO — Ensayos humanos existen para indicaciones neurológicas específicas, casi todos rusos y sin replicación occidental. Para uso cognitivo en personas sanas: SIN DATO.",
    ceiling: {
      state: "none",
      note: "Los protocolos clínicos rusos usan administración intranasal en contexto hospitalario, con dosis altas en ictus agudo y bajas en uso ambulatorio. Para el uso nootrópico diario que circula fuera de Rusia no existe dosis validada ni datos de uso prolongado.",
      adverse: {
        pending: true,
        categories: ["variantes (Semax vs N-Acetil-Semax vs amidado)", "stack con Selank", "uso continuo", "producto sin COA."]
      }
    },
    reports: { pending: true },
    safety: [
      { kind: "relative", text: "Uso junto con psicofármacos — PRECAUCIÓN", origin: "mechanism", detail: "Por su actividad dopaminérgica y serotoninérgica, la combinación con SSRI, IMAO, antipsicóticos o estimulantes no está estudiada y merece supervisión médica." },
      { kind: "watch", text: "Ansiedad o inquietud — SEÑAL REPORTADA", origin: "mechanism", detail: "Más probable a dosis altas, por la vía dopaminérgica." },
      { kind: "relative", text: "Insomnio", origin: "pharmacovigilance", detail: "reportado con administración tardía en el día." },
      { kind: "watch", text: "Embarazo y lactancia", origin: "mechanism", detail: "Uso prolongado — SIN DATO" }
    ],
    claims: [
      { text: "Ayuda en la recuperación tras ictus isquémico", level: "B", n: 0, nh: 0, note: "Ensayos rusos con recuperación funcional acelerada y aumento de BDNF. Es la indicación registrada." },
      { text: "Trata patología del nervio óptico", level: "B", n: 0, nh: 0, note: "Indicación registrada en Rusia." },
      { text: "Mejora memoria, foco y cognición en personas sanas", level: "NO_DATA", n: 0, nh: 0, note: "No existe ningún ensayo controlado de mejora cognitiva en población sana. Es el uso dominante en Occidente y el que no tiene respaldo." },
      { text: "Sube el BDNF", level: "B", n: 0, nh: 0, note: "Medido en humanos. Marcador biológico, no resultado clínico." },
      { text: "Sirve para TDAH — HIPÓTESIS", level: "NO_DATA", n: 0, nh: 0, note: "Existe un artículo de hipótesis en la literatura; ningún ensayo clínico." }
    ],
    study: { title: "Ensayo de rehabilitación post-ictus con Semax (~110 pacientes, BDNF y recuperación funcional)", journal: "Registro farmacéutico ruso · Lista de Medicamentos Vitales y Esenciales desde", year: "2011", plain: "El estudio humano más sólido siguió a unos 110 pacientes en rehabilitación tras un ictus y reportó mejor recuperación funcional junto con aumento de BDNF en sangre. Es un contexto hospitalario, con pacientes enfermos y supervisión médica — nada parecido a un adulto sano usándolo para concentrarse en el trabajo.", limits: "Literatura casi exclusivamente rusa, concentrada en pocos grupos, con estándares de publicación distintos a los que exige la FDA. Ningún ensayo occidental registrado." },
    regulatory: [
      { country: "Rusia", status: "Medicamento registrado (ictus isquémico, patología del nervio óptico); en la Lista de Medicamentos Vitales y Esenciales.", tone: "grey" },
      { country: "Estados Unidos", agency: "FDA", status: "No aprobado, nunca sometido a revisión. Restringido para formulación magistral en 2023 (Categoría 2); incluido en la revisión de comité de 2026.", tone: "alert" },
      { country: "Europa", agency: "EMA", status: "Sin autorización.", tone: "grey" },
      { country: "Colombia · Invima / México", agency: "COFEPRIS", status: "Sin registro sanitario. Circula como \"reactivo de investigación\".", tone: "grey" }
    ],
    community: { pending: true }
  },
  {
    slug: "selank",
    name: "Selank",
    altName: "Tuftsin analog",
    className: "PÉPTIDO ANSIOLÍTICO (ANÁLOGO DE TUFTSINA)",
    level: "B",
    summary: "Un medicamento real — en Rusia. Registrado como ansiolítico, con ensayos publicados que lo comparan con benzodiacepinas. Fuera de Rusia: un compuesto de investigación cuya evidencia nadie ha replicado.",
    levelNote: "NIVEL B · CON ASTERISCO — Ensayos clínicos humanos existen y reportan efecto ansiolítico. Casi toda la literatura es rusa, de pocos grupos, con muestras pequeñas y sin replicación occidental.",
    ceiling: {
      state: "none",
      note: "Los ensayos rusos usaron administración intranasal diaria durante 2 a 4 semanas, con dosis del rango de miligramos. Fuera de esos protocolos no existe dosis validada, ni datos de uso prolongado.",
      adverse: {
        pending: true,
        categories: ["stack con Semax", "uso continuo vs por ciclos", "producto sin COA."]
      }
    },
    reports: { pending: true },
    safety: [
      { kind: "interaction", text: "Uso junto con medicación psiquiátrica", origin: "mechanism", detail: "La interacción con SSRI, benzodiacepinas u otros ansiolíticos no está estudiada." },
      { kind: "watch", text: "Embarazo y lactancia", origin: "trial", detail: "Uso prolongado — SIN DATO Los ensayos duraron semanas, no años." },
      { kind: "relative", text: "Irritación nasal", origin: "pharmacovigilance", detail: "el efecto adverso más reportado de la vía intranasal." }
    ],
    claims: [
      { text: "Reduce la ansiedad", level: "B", n: 0, nh: 0, note: "Ensayos rusos en trastorno de ansiedad generalizada, incluida comparación con una benzodiacepina. Es la indicación registrada y la afirmación mejor sostenida." },
      { text: "Reduce la fatiga / neurastenia", level: "B", n: 0, nh: 0, note: "Indicación registrada en Rusia; el diagnóstico de neurastenia no existe en los criterios diagnósticos actuales de EE.UU." },
      { text: "Mejora la memoria y el enfoque en personas sanas", level: "NO_DATA", n: 0, nh: 0, note: "Ningún ensayo de mejora cognitiva en población sana. Es el uso principal en Occidente y el menos respaldado." },
      { text: "Modula el sistema inmune", level: "C", n: 0, nh: 0, note: "Hereda biología de la tuftsina; datos preclínicos." }
    ],
    study: { title: "Ensayo ruso de Selank en trastorno de ansiedad generalizada (~62 pacientes), comparado con medazepam", journal: "Registro farmacéutico en la Federación Rusa ()", year: "2009", plain: "El estudio más citado siguió a 62 pacientes con ansiedad y reportó una reducción comparable a la de una benzodiacepina, sin la sedación característica. Es un resultado interesante — con una muestra pequeña, en un solo país, sin que nadie fuera de ahí lo haya reproducido.", limits: "Las tasas de respuesta a placebo en ensayos de ansiedad suelen rondar el 30–40%, lo que hace que muestras pequeñas sin cegamiento riguroso sean especialmente frágiles." },
    regulatory: [
      { country: "Rusia", status: "Registrado como medicamento ansiolítico de prescripción.", tone: "grey" },
      { country: "Estados Unidos", agency: "FDA", status: "No aprobado. Salió de la lista Categoría 2 en 2024 al retirarse las nominaciones; eso no es aprobación.", tone: "alert" },
      { country: "Europa", agency: "EMA", status: "Sin autorización.", tone: "grey" },
      { country: "Colombia · Invima / México", agency: "COFEPRIS", status: "Sin registro sanitario. Circula como \"reactivo de investigación\".", tone: "grey" }
    ],
    community: { pending: true }
  },
  {
    slug: "dsip",
    name: "DSIP",
    altName: "Delta Sleep-Inducing Peptide",
    className: "PÉPTIDO DEL SUEÑO (EMIDELTIDA)",
    level: "C",
    summary: "Se llama \"péptido inductor del sueño delta\" y ese nombre hace casi todo el trabajo de marketing. La evidencia humana es de los años 70 y 80, pequeña, inconsistente — y ni siquiera está claro que induzca sueño.",
    levelNote: "NIVEL C — Estudios humanos antiguos y pequeños, con resultados inconsistentes. Ningún ensayo aleatorizado moderno.",
    ceiling: {
      state: "none",
      note: "Los estudios antiguos usaron administración intravenosa en entorno clínico, con dosis en microgramos por kilo. No existe protocolo validado para el uso nocturno subcutáneo que circula hoy, ni datos de uso repetido. El borde del mapa quedó congelado hace cuarenta años.",
      adverse: {
        pending: true,
        categories: ["uso nocturno para insomnio", "combinación con otros compuestos de sueño", "producto sin COA."]
      }
    },
    reports: { pending: true },
    safety: [
      { kind: "interaction", text: "Uso junto con sedantes, alcohol o hipnóticos", origin: "mechanism", detail: "Interacción no estudiada; precaución evidente por el efecto buscado." },
      { kind: "relative", text: "Embarazo y lactancia", origin: "mechanism", detail: "Uso prolongado — SIN NINGÚN DATO" }
    ],
    safetyNote: "No existe etiqueta ni base de seguridad moderna.",
    claims: [
      { text: "Induce sueño profundo (delta)", level: "C", n: 0, nh: 0, note: "Es su nombre, no su resultado. Los estudios en humanos no confirmaron de forma consistente que aumente el sueño de ondas lentas. Varios trabajos posteriores cuestionaron incluso que sea un péptido del sueño." },
      { text: "Reduce el dolor crónico", level: "C", n: 0, nh: 0, note: "Reportado en series pequeñas antiguas." },
      { text: "Ayuda en la abstinencia de alcohol y opioides", level: "C", n: 0, nh: 0, note: "La línea de investigación con más señal en los estudios viejos; nunca desarrollada." },
      { text: "Reduce el estrés / normaliza la presión arterial", level: "NO_DATA", n: 0, nh: 0 }
    ],
    study: { title: "Literatura original de DSIP (aislamiento 1977; estudios humanos de los años 70–80)", journal: "Sin ensayos aleatorizados modernos publicados", plain: "El compuesto se aisló en 1977 tras observar que un extracto de sangre de conejos en sueño inducido provocaba sueño delta en otros animales. Los intentos de reproducir ese efecto en humanos, décadas atrás, dieron resultados desiguales, y la investigación se detuvo. Lo que se vende hoy se apoya en ese nombre y en reportes anecdóticos.", limits: "Cuarenta años sin un ensayo moderno es, en sí mismo, un dato: ningún grupo ha considerado que valiera la pena confirmarlo." },
    regulatory: [
      { country: "Estados Unidos", agency: "FDA", status: "No aprobado. Restringido para formulación magistral en 2023 (Categoría 2); en 2026 quedó bajo revisión del comité de formulación magistral como \"emideltida\". Revisión no es aprobación.", tone: "alert" },
      { country: "Colombia · Invima / México", agency: "COFEPRIS", status: "Sin registro sanitario. Circula como \"reactivo de investigación\".", tone: "grey" }
    ],
    community: { pending: true }
  },
  {
    slug: "pt-141",
    name: "PT-141 (Bremelanotida)",
    altName: "Bremelanotide · Vyleesi",
    className: "AGONISTA DE RECEPTORES DE MELANOCORTINA",
    level: "A",
    summary: "Uno de los pocos del catálogo con aprobación de la FDA — pero para una indicación muy específica: deseo sexual hipoactivo en mujeres premenopáusicas. El uso masculino, que es casi todo el mercado, es fuera de indicación y se quedó en fase 2.",
    levelNote: "NIVEL A · PARA SU INDICACIÓN APROBADA — Fase 3 aleatorizada, publicada, con aprobación de la FDA (2019). Para uso en hombres: NIVEL B, sin aprobación.",
    ceiling: {
      state: "established",
      dose: "1.75 mg",
      frequency: "por dosis",
      indication: "subcutáneo, según necesidad (autoinyector)",
      schedule: "Al menos 45 minutos antes de la actividad sexual prevista. Máximo una dosis cada 24 horas y no más de ~8 dosis al mes. En los ensayos, el uso promedio fue de 2 a 3 veces por mes. Usarlo con más frecuencia aumenta el riesgo de hiperpigmentación.",
      adverse: {
        pending: true,
        categories: ["uso masculino fuera de indicación", "frecuencia por encima del límite de etiqueta", "producto original vs \"de investigación\"", "combinación con inhibidores de PDE5."]
      }
    },
    reports: { pending: true },
    safety: [
      { kind: "absolute", text: "Hipertensión no controlada o enfermedad cardiovascular", origin: "label", detail: "Produce elevaciones transitorias de la presión arterial. Etiqueta aprobada" },
      { kind: "absolute", text: "Embarazo", origin: "label", detail: "Etiqueta aprobada" },
      { kind: "relative", text: "Náusea — EFECTO ADVERSO PRINCIPAL", origin: "trial", detail: "El más frecuente en los ensayos y la causa más común de abandono." },
      { kind: "watch", text: "Hiperpigmentación (oscurecimiento de piel o encías) — SEÑAL DE ETIQUETA", origin: "mechanism", detail: "Riesgo mayor con uso frecuente; puede no ser reversible. Es la razón del límite mensual." },
      { kind: "interaction", text: "Naltrexona oral — INTERACCIÓN", origin: "label", detail: "Puede reducir sus niveles. Etiqueta aprobada" }
    ],
    safetyNote: "Aquí sí hay etiqueta aprobada.",
    claims: [
      { text: "Aumenta el deseo sexual en mujeres premenopáusicas con TDSH", level: "A", n: 0, nh: 0, note: "Fase 3: mejora estadísticamente significativa en el dominio de deseo frente a placebo. La diferencia absoluta es modesta — real, medida y aprobada, pero no espectacular." },
      { text: "Trata la disfunción eréctil en hombres", level: "B", n: 0, nh: 0, note: "Datos de fase 2, incluidos no respondedores a PDE5. Nunca se llevó a fase 3 ni se solicitó aprobación." },
      { text: "Actúa sobre el deseo, no sobre el flujo sanguíneo", level: "A", n: 0, nh: 0, note: "Es la diferencia real frente a Viagra/Cialis: actúa en el sistema nervioso central vía receptores de melanocortina." },
      { text: "Sirve en mujeres posmenopáusicas", level: "NO_DATA", n: 0, nh: 0, note: "Toda la evidencia de fase 3 es en premenopáusicas." }
    ],
    study: {
      title: "Programa RECONNECT — Bremelanotida para TDSH en mujeres premenopáusicas",
      journal: "Obstetrics & Gynecology",
      year: "2019",
      n: "Dos ensayos aleatorizados, doble ciego, controlados con placebo · ~1,247 participantes",
      plain: "Dos ensayos de fase 3 con más de 1,200 mujeres premenopáusicas con deseo sexual hipoactivo mostraron una mejora significativa en las escalas de deseo frente a placebo. La magnitud del cambio fue modesta, y sobre esa base la FDA aprobó el fármaco en 2019.",
      limits: "El efecto medio es pequeño en términos absolutos y la náusea llevó a abandonos en los ensayos. Población estrictamente premenopáusica. Financiado por el fabricante."
    },
    regulatory: [
      { country: "Estados Unidos", agency: "FDA", status: "Aprobado (Vyleesi, junio 2019) para trastorno del deseo sexual hipoactivo adquirido y generalizado en mujeres premenopáusicas. Sin genérico aprobado. Cualquier uso en hombres es fuera de indicación.", tone: "ok" },
      { country: "Europa", agency: "EMA / CANADÁ / REINO UNIDO", status: "Sin autorización de comercialización.", tone: "grey" },
      { country: "Colombia · Invima / México", agency: "COFEPRIS", status: "Sin registro sanitario conocido. Lo que circula como \"PT-141 de investigación\" no es el producto aprobado ni pasa por control farmacéutico.", tone: "grey" }
    ],
    community: { pending: true }
  },
  {
    slug: "kisspeptin-10",
    name: "Kisspeptina-10",
    altName: "KP-10",
    className: "NEUROPÉPTIDO DEL EJE REPRODUCTIVO",
    level: "B",
    summary: "Investigación académica de verdad — fases 1 y 2 en un hospital universitario de Londres — con dos advertencias que el mercado nunca menciona: casi toda la evidencia sale de un solo centro, y el fragmento que se vende (el -10) tiene una vida media de minutos.",
    levelNote: "NIVEL B — Ensayos de fase 1 y 2 en humanos, publicados y de buena calidad. Sin fase 3, sin replicación independiente amplia, y en su mayoría con kisspeptina-54, no con el -10.",
    ceiling: {
      state: "none",
      note: "Los ensayos publicados usaron administración intravenosa (bolo o infusión) calculada por peso corporal, en entorno hospitalario. La vida media de la kisspeptina-10 es de unos 4 minutos — por eso los estudios la infunden por vena. Las inyecciones subcutáneas ocasionales que se venden no reproducen ninguna condición estudiada.",
      adverse: {
        pending: true,
        categories: ["uso como \"PCT\" o para testosterona", "uso para libido", "vía (subcutánea vs la IV estudiada)", "producto sin COA."]
      }
    },
    reports: { pending: true },
    safety: [
      { kind: "relative", text: "Cáncer hormonodependiente — PRECAUCIÓN TEÓRICA", origin: "mechanism", detail: "Activa el eje reproductivo completo y por tanto la producción de hormonas sexuales." },
      { kind: "watch", text: "Embarazo", origin: "trial", detail: "Uso repetido o prolongado — SIN DATO Los ensayos fueron administraciones puntuales o infusiones cortas en contexto hospitalario." }
    ],
    safetyNote: "No existe etiqueta aprobada.",
    claims: [
      { text: "Estimula la LH y activa el eje reproductivo", level: "A", n: 0, nh: 0, note: "Demostrado y replicado en humanos. Es un marcador hormonal, no un resultado clínico." },
      { text: "Disparador de ovulación en FIV sin síndrome de hiperestimulación", level: "B", n: 0, nh: 0, note: "El hallazgo más valioso del programa: fase 2 con cero casos de SHO. Con kisspeptina-54, en protocolo hospitalario." },
      { text: "Mejora el deseo sexual", level: "B", n: 0, nh: 0, note: "Estudios con imagen cerebral en personas con bajo deseo, con señales positivas. Muestras pequeñas." },
      { text: "Sube la testosterona / sirve como \"PCT\" tras un ciclo", level: "NO_DATA", n: 0, nh: 0, note: "Ningún ensayo ha probado recuperación del eje tras supresión por esteroides. Es el uso más vendido en foros y el que no tiene ni un estudio." }
    ],
    study: { title: "Programa clínico de kisspeptina en FIV y salud reproductiva — Imperial College London", journal: "Fases 1 y 2, financiadas por el Medical Research Council", plain: "El programa clínico más sólido probó kisspeptina como disparador de maduración de óvulos en FIV. Funcionó, y sin provocar síndrome de hiperestimulación ovárica — una complicación seria de los disparadores convencionales. Todo ocurrió en un hospital, por vía intravenosa y bajo control médico.", limits: "Casi todo el conjunto clínico proviene de un solo grupo del Imperial College London: sin replicación independiente amplia, sin fase 3, y con el fragmento -10 limitado por su vida media de minutos." },
    regulatory: [
      { country: "Estados Unidos", agency: "FDA", status: "No aprobado para ninguna indicación. Restringido para formulación magistral en 2023 (Categoría 2); incluido en la reclasificación de 2026. Sigue siendo un compuesto en investigación clínica.", tone: "alert" },
      { country: "Colombia · Invima / México", agency: "COFEPRIS", status: "Sin registro sanitario. Circula como \"reactivo de investigación\".", tone: "grey" }
    ],
    community: { pending: true }
  },
  {
    slug: "thymosin-alpha-1",
    name: "Timosina Alfa-1 (Tα1)",
    altName: "Thymalfasin · Zadaxin",
    className: "PÉPTIDO TÍMICO INMUNOMODULADOR",
    level: "A",
    summary: "El péptido mejor validado del catálogo que casi nadie conoce: es un medicamento aprobado en más de 35 países desde los años 90 — solo que no en Estados Unidos. Su ausencia de la FDA es comercial, no científica.",
    levelNote: "NIVEL A · PARA SU INDICACIÓN APROBADA — Ensayos aleatorizados publicados en hepatitis B crónica, con aprobación regulatoria en decenas de países. Para los usos \"de bienestar\" que se venden: NIVEL C.",
    ceiling: {
      state: "established",
      dose: "1.6 mg",
      frequency: "dos veces por semana",
      indication: "subcutáneo (dosis estándar en los ensayos y en la etiqueta internacional de Zadaxin)",
      schedule: "Es de los pocos compuestos de este grupo donde el \"techo\" viene de una etiqueta real, no de un foro.",
      adverse: {
        pending: true,
        categories: ["uso \"para el sistema inmune\" sin indicación", "producto original vs magistral vs de investigación", "duración de ciclos."]
      }
    },
    reports: { pending: true },
    safety: [
      { kind: "relative", text: "Enfermedad autoinmune activa — PRECAUCIÓN", origin: "mechanism", detail: "Modula al alza la respuesta inmune: riesgo teórico de exacerbación." },
      { kind: "relative", text: "Trasplante de órgano / inmunosupresión — PRECAUCIÓN FUERTE", origin: "mechanism", detail: "Puede oponerse al objetivo del tratamiento inmunosupresor." },
      { kind: "watch", text: "Embarazo y lactancia", origin: "mechanism", detail: "Perfil de tolerancia — LIMPIO Décadas de uso clínico con baja tasa de eventos adversos; lo más común es reacción en el sitio de inyección." }
    ],
    safetyNote: "Existe etiqueta internacional, no estadounidense.",
    claims: [
      { text: "Trata la hepatitis B crónica", level: "A", n: 0, nh: 0, note: "Indicación aprobada en 35+ países. Fase 3 con respuesta virológica sostenida superior a placebo." },
      { text: "Adyuvante en oncología e inmunosupresión", level: "B", n: 0, nh: 0, note: "Uso clínico establecido en varios países (China, Italia y otros) con ensayos de calidad variable." },
      { text: "Mejora la respuesta a vacunas", level: "B", n: 0, nh: 0, note: "Indicación aprobada en algunos mercados." },
      { text: "Sepsis y COVID-19 — RESULTADOS MIXTOS", level: "NO_DATA", n: 0, nh: 0, note: "Estudios durante la pandemia con señales inconsistentes; nada concluyente." },
      { text: "Refuerza el sistema inmune\" en personas sanas", level: "NO_DATA", n: 0, nh: 0, note: "Toda su evidencia es en poblaciones con enfermedad. Es un modulador, no un potenciador genérico — y en gente sana nunca se probó." }
    ],
    study: { title: "Ensayos de timalfasina (timosina alfa-1) en hepatitis B crónica", journal: "Programa pivotal · aleatorizado y controlado · Aprobado como Zadaxin en 35+ países", plain: "Ensayos aleatorizados en pacientes con hepatitis B crónica mostraron que una parte significativamente mayor del grupo tratado alcanzó control sostenido del virus frente a control. Sobre esa base se aprobó como medicamento (Zadaxin) en decenas de países.", limits: "La ausencia de aprobación en EE.UU. y Europa central refleja decisiones de desarrollo comercial más que un rechazo por seguridad. Aun así, sin revisión de FDA/EMA no existe un estándar de etiqueta occidental para su uso." },
    regulatory: [
      { country: "Internacional", status: "Aprobado como Zadaxin/timalfasina en más de 35 países (China, Italia, India, Filipinas, varios de América Latina y Medio Oriente) para hepatitis B crónica e inmunomodulación oncológica.", tone: "ok" },
      { country: "Estados Unidos", agency: "FDA", status: "No aprobado. Tiene designación de medicamento huérfano para algunas indicaciones. Restringido para formulación magistral en 2023; incluido en la reclasificación de 2026.", tone: "alert" },
      { country: "Europa", agency: "EMA", status: "Sin aprobación centralizada, pese al uso clínico en Italia.", tone: "grey" },
      { country: "Colombia · Invima / México", agency: "COFEPRIS", status: "Verificar registro local: la aprobación en otros países no implica registro aquí. Lo que se vende como \"de investigación\" no es el producto aprobado.", tone: "ok" }
    ],
    community: { pending: true }
  },
  {
    slug: "wolverine",
    name: "Wolverine Stack (BPC-157 + TB-500)",
    altName: "BPC-157 + TB-500",
    className: "MEZCLA — NO LLEVA NIVEL DE EVIDENCIA",
    levelNote: "SIN NIVEL — Esta ficha no muestra nivel de evidencia del conjunto, porque no existe literatura del conjunto. Ni un solo estudio ha probado esta combinación como tal — ni en humanos, ni en animales, ni en célula. Mostrar un nivel aquí sería inventar una autoridad que nadie ha ganado. Lo que sí podemos mostrar es de qué está hecha y qué nivel tiene cada parte por separado.",
    isBlend: true,
    components: [
      { text: "BPC-157", levelTag: "NIVEL C", note: "Más de 100 estudios preclínicos, cero ensayos aleatorizados publicados en humanos. Techo estudiado en humanos: no existe." },
      { text: "TB-500 (fragmento de timosina beta-4)", levelTag: "NIVEL C", note: "Los ensayos humanos de la familia usaron gotas oftálmicas de la molécula madre, no el fragmento inyectable. Techo estudiado para el inyectable: no existe." }
    ],
    blendNote: "Combinar dos compuestos sin datos no suma dos evidencias: multiplica las incógnitas. Si aparece un efecto adverso, no hay forma de saber cuál lo causó. Si aparece un beneficio, tampoco. Y las señales teóricas de cada componente se acumulan: ambos promueven angiogénesis en modelos animales, el mismo mecanismo que preocupa en presencia de cáncer activo. Esa precaución no se diluye al mezclar — se refuerza. ",
    reports: { pending: true },
    safety: [
      { kind: "relative", text: "Cáncer activo o antecedente reciente — PRECAUCIÓN TEÓRICA REFORZADA", origin: "mechanism", detail: "Los dos componentes promueven angiogénesis y migración celular en modelos." },
      { kind: "interaction", text: "Embarazo y lactancia", origin: "mechanism", detail: "Interacciones — SIN NINGÚN DATO" }
    ],
    safetyNote: "Aplican las de cada componente, sumadas:",
    claims: [
      { text: "Se potencian entre sí\" (sinergia)", level: "NO_DATA", n: 0, nh: 0, note: "La sinergia es una afirmación medible, y nadie la ha medido. Dos compuestos con evidencia animal no producen automáticamente un efecto combinado." },
      { text: "Acelera la recuperación de lesiones", level: "NO_DATA", n: 0, nh: 0, note: "Cada componente tiene evidencia animal por separado. La combinación, ninguna." },
      { text: "Es \"el protocolo estándar\" de recuperación — REPORTE COMUNITARIO", level: "NO_DATA", n: 0, nh: 0, note: "Su popularidad viene del nombre y del boca a boca, no de un estudio." }
    ],
    regulatory: [
      { country: "Deporte", agency: "WADA", status: "Ambos componentes están prohibidos.", tone: "alert" }
    ],
    regulatoryNote: "Ninguna autoridad ha evaluado esta combinación, porque no existe como producto regulado en ningún país. Ambos componentes fueron restringidos para formulación magistral en EE.UU. en 2023 e incluidos en la revisión de 2026 — por separado, nunca como mezcla.",
    community: { pending: true }
  },
  {
    slug: "glow",
    name: "GLOW (GHK-Cu + BPC-157 + TB-500)",
    altName: "GHK-Cu + BPC-157 + TB-500",
    className: "MEZCLA — NO LLEVA NIVEL DE EVIDENCIA",
    levelNote: "SIN NIVEL — Esta ficha no muestra nivel de evidencia del conjunto, porque no existe literatura del conjunto. Cero estudios han probado esta combinación de tres compuestos — en ninguna especie. Lo que sí podemos mostrar: de qué está hecha, qué nivel tiene cada parte, y un detalle que casi nadie menciona.",
    isBlend: true,
    components: [
      { text: "GHK-Cu", levelTag: "NIVEL B (solo vía tópica) · SIN DATO (inyectable)", note: "Aquí está el punto crítico: la evidencia humana de GHK-Cu es de crema facial. En GLOW va inyectado, que es precisamente la vía sin ningún estudio en personas. La promesa estética de la mezcla se apoya en datos de una vía que la mezcla no usa." },
      { text: "BPC-157", levelTag: "NIVEL C", note: "Más de 100 estudios preclínicos, cero ensayos aleatorizados en humanos." },
      { text: "TB-500", levelTag: "NIVEL C", note: "Ensayos humanos solo con la molécula madre en gotas oftálmicas, no con el fragmento inyectable." }
    ],
    blendNote: "Tres compuestos sin datos combinados no dan tres veces más confianza: dan tres variables imposibles de separar. Si algo funciona, no sabrás cuál. Si algo sale mal, tampoco. Y aquí se suma un problema propio: el cobre. Una inyección sistémica repetida de un compuesto de cobre plantea preguntas de carga que nadie ha medido en personas. ",
    reports: { pending: true },
    safety: [
      { kind: "relative", text: "Cáncer activo o antecedente reciente — PRECAUCIÓN TEÓRICA REFORZADA", origin: "mechanism", detail: "BPC-157 y TB-500 promueven angiogénesis en modelos." },
      { kind: "watch", text: "Carga de cobre / presión arterial", origin: "mechanism", detail: "La vía inyectable de GHK-Cu nunca se ha estudiado en humanos." },
      { kind: "interaction", text: "Embarazo y lactancia", origin: "mechanism", detail: "Interacciones — SIN NINGÚN DATO" }
    ],
    safetyNote: "Aplican las de cada componente, sumadas:",
    claims: [
      { text: "Mejora la piel, el cabello y las cicatrices", level: "NO_DATA", n: 0, nh: 0, note: "La evidencia de piel que se cita es de GHK-Cu tópico, en cremas, con endpoints cosméticos. No es transferible a una inyección de tres compuestos." },
      { text: "Combina reparación interna y externa", level: "NO_DATA", n: 0, nh: 0, note: "Narrativa de marketing, no hallazgo." },
      { text: "Sinergia\" entre los tres", level: "NO_DATA", n: 0, nh: 0 }
    ],
    regulatory: [
      { country: "Deporte", agency: "WADA", status: "BPC-157 y TB-500 están prohibidos.", tone: "alert" }
    ],
    regulatoryNote: "Ninguna autoridad ha evaluado esta combinación: no existe como producto regulado en ningún país. Los tres componentes fueron restringidos para formulación magistral en EE.UU. en 2023 e incluidos en la revisión de 2026 — por separado, nunca como mezcla. El GHK-Cu tópico sí tiene vía cosmética legal; el inyectable de esta mezcla, no.",
    community: { pending: true }
  },
  {
    slug: "klow",
    name: "KLOW (GHK-Cu + BPC-157 + TB-500 + KPV)",
    altName: "GHK-Cu + BPC-157 + TB-500 + KPV",
    className: "MEZCLA — NO LLEVA NIVEL DE EVIDENCIA",
    levelNote: "SIN NIVEL — Esta ficha no muestra nivel de evidencia del conjunto, porque no existe literatura del conjunto. Cero estudios han probado esta combinación de cuatro compuestos — en ninguna especie. Es GLOW con KPV añadido. Y ese añadido es justo el componente con el mapa humano más vacío de los cuatro.",
    isBlend: true,
    components: [
      { text: "KPV", levelTag: "NIVEL C", note: "Evidencia exclusivamente preclínica: células y ratones. Cero ensayos clínicos humanos publicados, de ninguna vía. Es lo que separa KLOW de GLOW." },
      { text: "GHK-Cu", levelTag: "NIVEL B (tópico) · SIN DATO (inyectable)", note: "La evidencia humana es de crema facial; aquí va inyectado." },
      { text: "BPC-157", levelTag: "NIVEL C", note: "Más de 100 estudios preclínicos, cero ensayos aleatorizados en humanos." },
      { text: "TB-500", levelTag: "NIVEL C", note: "Ensayos humanos solo con la molécula madre en gotas oftálmicas." }
    ],
    blendNote: "Cuatro compuestos en una jeringa son cuatro variables que no se pueden separar. Ninguna combinación de este catálogo ha sido estudiada como conjunto, y la de cuatro es la más opaca de todas: si hay reacción, hay cuatro sospechosos y ninguna forma de saber cuál fue. Esta es también la razón por la que Evidence nunca asigna nivel a una mezcla. Es la regla que evita que el producto se convierta en aquello que critica. ",
    reports: { pending: true },
    safety: [
      { kind: "relative", text: "Cáncer activo o antecedente reciente — PRECAUCIÓN TEÓRICA REFORZADA", origin: "mechanism", detail: "BPC-157 y TB-500 promueven angiogénesis en modelos." },
      { kind: "watch", text: "Carga de cobre / presión arterial", origin: "mechanism", detail: "La vía inyectable de GHK-Cu nunca se ha estudiado en humanos." },
      { kind: "interaction", text: "Enfermedad autoinmune bajo tratamiento", origin: "mechanism", detail: "KPV modula la respuesta inflamatoria; interacción con inmunomoduladores no estudiada." },
      { kind: "interaction", text: "Embarazo y lactancia", origin: "mechanism", detail: "Interacciones — SIN NINGÚN DATO" }
    ],
    safetyNote: "Aplican las de los cuatro componentes, sumadas:",
    claims: [
      { text: "Suma efecto antiinflamatorio al de GLOW", level: "NO_DATA", n: 0, nh: 0, note: "El efecto antiinflamatorio de KPV está documentado en ratones con colitis, no en personas ni en esta combinación." },
      { text: "Mejor para piel inflamada, intestino y recuperación", level: "NO_DATA", n: 0, nh: 0, note: "\"Es la versión completa\" — LÓGICA DE PRODUCTO, NO DE EVIDENCIA Añadir un cuarto compuesto sin datos humanos no completa nada: amplía la zona sin mapa." }
    ],
    regulatory: [
      { country: "Deporte", agency: "WADA", status: "BPC-157 y TB-500 están prohibidos.", tone: "alert" }
    ],
    regulatoryNote: "Ninguna autoridad ha evaluado esta combinación: no existe como producto regulado en ningún país. Los cuatro componentes fueron restringidos para formulación magistral en EE.UU. en 2023 e incluidos en la revisión de 2026 — por separado, nunca como mezcla.",
    community: { pending: true }
  },
];
