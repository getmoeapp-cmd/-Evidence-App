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

## Catálogo

`src/data/catalog.js` tiene las 27 entradas. Campos neutros de idioma; los
nombres de clase y familia se traducen con los mapas `CLASSES` y `FAMILIES`
del mismo archivo, así que añadir un compuesto es una línea, no dos.

Cada entrada lleva `aliases`: nombres comerciales, abreviaturas y variantes en
español. El buscador ignora acentos y acepta varias palabras, así que "reta",
"ozempic", "timosina alfa" y "epitalon" encuentran lo correcto.

Las cuatro fichas completas viven en `data/es.js` y `data/en.js`. Cualquier
entrada del catálogo sin ficha completa abre `sections/Stub.jsx` con la
insignia "Ficha en preparación". A medida que corras la ingesta, mueves
compuestos del stub a la ficha completa sin tocar el catálogo.

### Mezclas

Wolverine, GLOW y KLOW llevan `blend: [slugs]` y `level: null`. Su ficha lista
los componentes con el nivel de cada uno y no muestra nivel del conjunto,
porque no existe literatura del conjunto. **No le pongas un nivel a una mezcla**
— es la regla que evita que el producto se convierta en lo que critica.

### NAD+

Está en el catálogo porque circula dentro de la categoría, pero su clase dice
"Coenzima — no es un péptido". Es más útil aclararlo que omitirlo.

## Marca

Los archivos están en `public/`:

| Archivo | Uso |
|---|---|
| `evidence-mark.png` | La huella sola, 512 px, fondo transparente |
| `evidence-lockup.png` | Marca + wordmark, para redes y Open Graph |
| `favicon.ico` | Pestaña del navegador |
| `apple-touch-icon.png` | Pantalla de inicio en iOS |
| `icon-512.png` | Icono del manifest |

Todos se generaron a partir del PNG original: se recortó el fondo crema, se
limpió el grano del papel y se recoloreó el trazo al azul de marca
(`C.ink`, #1E3F5F), así que el alfa queda limpio sobre cualquier fondo.

`components/Logo.jsx` combina la marca en imagen con el wordmark **en
tipografía**, no como imagen. Escala nítido en cualquier pantalla, se puede
seleccionar, y lo leen los lectores de pantalla. Acepta `size` y
`showWordmark`, por si necesitas solo la huella en espacios estrechos.

Si más adelante consigues el logo en SVG, cambia el `<img>` de `Logo.jsx` por
el vector y borra los PNG excepto los iconos.

## Objetivos

`src/data/goals.js` — diez objetivos, con los 27 compuestos repartidos. Un
compuesto puede estar en varios (BPC-157 aparece en recuperación e intestino;
GHK-Cu en recuperación, piel y longevidad).

**Qué significa la asignación:** un compuesto está bajo un objetivo porque eso
es lo que la gente busca cuando lo usa. No es una afirmación de eficacia. El
nivel de evidencia va al lado de cada nombre y es lo que responde esa pregunta.

Dentro de cada objetivo el orden es por nivel: primero lo mejor respaldado. Eso
hace que la lista de "Pérdida de grasa" abra con tres compuestos de nivel A, y
que la de "Longevidad" abra con nivel B y termine en sin datos. La estructura
cuenta la historia sin que haya que escribirla.

Editar un objetivo es una línea en `GOAL_MAP`; los nombres y las descripciones
están en `GOAL_LABELS`, por idioma.

## Explicación de niveles

`components/LevelKey.jsx` exporta dos cosas:

- `LevelKeyTrigger` — el botón resaltado "¿Qué significan los niveles?"
- `LevelKey` — la ventana con las cinco escalas, cada una con su cresta

Está en tres sitios: encima de la lista del catálogo, encima de los objetivos,
y en la propia ficha (la insignia grande de nivel es pulsable y lleva un "?").

Se cierra con Escape, tocando fuera o con el botón. Bloquea el scroll del fondo
mientras está abierta. En móvil sube desde abajo; en escritorio va centrada.

El texto vive en `levelKey` dentro de `i18n.sections.js`, en los dos idiomas.
Si cambias la regla de calificación en `nivel_de_claim()`, cambia también estas
descripciones — son la misma promesa contada de dos formas.

## Comprobar los datos antes de desplegar

```bash
npm run check
```

Recorre cada ficha y valida todo lo que la tarjeta va a tocar: niveles que
existan, `ceiling.adverse` presente, `reports` completo o marcado como
`pending`, orígenes de contraindicación válidos, slugs que existan en el
catálogo, y que `es.js` y `en.js` tengan los mismos slugs en el mismo orden.

Vale la pena correrlo al añadir cada ficha nueva. Un campo que falte no rompe
el build de Vite — rompe la tarjeta en el navegador, en blanco y sin aviso.

### Registros incompletos

Si una ficha todavía no tiene datos comunitarios, márcala así:

```js
reports:   { pending: true },
community: { pending: true },
ceiling: { ..., adverse: { pending: true, categories: ["…"] } },
```

La tarjeta muestra un estado de "Pendiente" en lugar de ceros.

## Fichas: de markdown a datos

Las fichas se escriben en markdown y se convierten con el parser de
`/build/`. Si añades una nueva:

1. Escríbela con la misma estructura de secciones (`## TECHO ESTUDIADO`,
   `## LO QUE SE AFIRMA · LO QUE SE HA MEDIDO`, `## LA FUENTE`,
   `## CONTRAINDICACIONES…`, `## ESTATUS REGULATORIO`).
2. Corre el parser → genera el registro de `src/data/es.js`.
3. `npm run check` antes de desplegar.

Los niveles de `catalog.js` se sincronizan con los de las fichas: la ficha
manda, el catálogo la sigue.

### Estados de techo

| Estado | Cuándo | Qué muestra |
|---|---|---|
| `established` | Hay dosis publicada en humanos | La cifra grande + escalera si existe |
| `range` | Hay dosis humanas publicadas pero sin techo único | «Rango estudiado, sin techo único» |
| `none` | Ningún ensayo humano fijó dosis | «Sin techo establecido» |

`steps` es opcional: los compuestos de dosis fija (Tesamorelina, PT-141,
Timosina α1) no llevan escalera y muestran solo la pauta de la etiqueta.

### Traducción pendiente

`es.js` puede ir por delante de `en.js`. Cuando una ficha existe en español
pero no en inglés, la versión EN muestra la tarjeta corta con un aviso de
«Full card available» y un botón que cambia el idioma. `npm run check`
informa cuántas faltan por traducir en vez de tratarlo como error.
