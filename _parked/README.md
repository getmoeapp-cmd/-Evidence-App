# Aparcado — revisor de COA por subida de archivo

Construido y luego retirado antes del lanzamiento. El código funciona; la
decisión fue de producto, no técnica.

## Por qué salió

1. **Riesgo de falsa tranquilidad.** Una pantalla con ocho comprobaciones en
   verde se lee como «este producto está bien», por muy visible que sea el
   aviso. Es justo el error que Evidence existe para evitar.
2. **Cambia la postura del producto.** Todo lo demás dice «esto es lo que se
   sabe, tú decides». Un revisor que evalúa el vial de alguien dice «evaluamos
   tu producto» — y eso pesa distinto viniendo de alguien que vende péptidos.
3. **Dependencia de backend antes de tener usuarios.** Clave de API, endpoint
   y límite de peticiones es trabajo que no acerca el lanzamiento.

El valor real de la función estaba en dos cosas que **no** necesitan subida:
la comparación de lote y el mensaje al laboratorio. Ambas están ya en la guía
del COA, hechas con dos campos de texto.

## Para reactivarlo

1. `mv _parked/CoaCheck.jsx src/sections/` · `mv _parked/coacheck.js src/data/`
2. `mkdir api && mv _parked/coa-check.js api/`
3. En `BuyWell.jsx`: importar `CoaCheck`, añadir
   `if (tool === "check") return <CoaCheck lang={lang} t={t} onBack={() => setTool(null)} />;`
   y volver a poner la tarjeta `check` en el índice.
4. Las cadenas `t.coacheck` siguen en `i18n.sections.js`, en los dos idiomas.
5. En Vercel: `ANTHROPIC_API_KEY`. Ponle límite de peticiones antes de abrirlo.
