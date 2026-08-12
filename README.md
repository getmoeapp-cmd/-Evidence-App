# Evidence

Ficha de péptidos bilingüe (español / inglés). Prototipo de interfaz.

## Correr en local

```bash
npm install
npm run dev
```

Abre http://localhost:5173

## Desplegar en Vercel

Sube la carpeta a un repo de GitHub y conéctalo en Vercel.
Detecta Vite automáticamente. Si no:

- Build command: `npm run build`
- Output directory: `dist`

## Estructura

```
src/
  main.jsx        punto de entrada
  App.jsx         todos los componentes de la ficha
  theme.js        paleta y densidad de crestas por nivel
  i18n.js         TODAS las cadenas de interfaz (es / en)
  data/es.js      contenido de los péptidos en español
  data/en.js      contenido de los péptidos en inglés
```

## Cómo añadir un idioma

1. Añade una clave nueva en `UI` dentro de `i18n.js`.
2. Crea `src/data/<código>.js` con los mismos slugs y el mismo orden.
3. Regístralo en el objeto `DATA` de `App.jsx` y en el array del selector del header.

## Cómo añadir un péptido

Añade el objeto en **los dos** archivos de `data/`, con el mismo `slug` y en la
misma posición. El selector usa el índice del array, así que el orden debe
coincidir o el cambio de idioma saltará a otra ficha.

## Reglas del modelo de datos

Estas no son estilísticas — sostienen el producto:

- **El nivel (A/B/C/D/NO_DATA) sale de la metadata de PubMed**, no del criterio
  de nadie. Cuando conectes Supabase, lo calcula `nivel_de_claim()`.
- **Los dos ejes nunca se promedian.** El eje científico y el comunitario tienen
  paleta y forma distintas justamente para que no se confundan.
- **No hay campo de dosis comunitaria.** El único dato de dosis es
  `ceiling`, que viene de ensayos publicados. Los reportes comunitarios se
  indexan contra ese techo con booleanos, nunca con cifras.
- **`origin: "mechanism"`** en contraindicaciones se muestra en cursiva y en otro
  color: es una inferencia, no un hallazgo medido.

## Datos

Todo el contenido de `data/` es de **demostración**. Antes de publicar hay que
reemplazarlo por registros reales de PubMed y verificar cada PMID, cada dosis
de techo y cada estatus regulatorio.

## Navegación

Cuatro secciones, definidas en `TABS` dentro de `App.jsx`:

| Pestaña | Archivo | Qué hace |
|---|---|---|
| Péptidos | `sections/Peptides.jsx` | Catálogo con buscador y filtro por nivel → abre la ficha |
| Por objetivo | `sections/ByGoal.jsx` | Objetivos con sus candidatos y la cresta al lado |
| Verificar | `sections/Verify.jsx` | Auditoría de afirmaciones + guía de COA y scorecard |
| Reportar | `sections/Report.jsx` | Intake comunitario estructurado |

La ficha completa vive en `sections/PeptideCard.jsx` y la reutilizan tanto
Péptidos como Por objetivo.

En pantallas de menos de 720 px las pestañas se fijan como barra inferior.
El selector de idioma va fijo arriba a la derecha, sobre todas las secciones.

Los objetivos se editan en `src/data/goals.js`: cada uno lista slugs que deben
existir en `data/es.js` y `data/en.js`.

**Pendiente de conectar:** el botón de auditoría, los dos botones de "Comprar
bien" y el envío del formulario de reporte son maquetas. Esperan a Supabase.
