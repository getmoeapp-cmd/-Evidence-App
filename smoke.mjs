// Render de humo: recorre cada péptido y cada campo que la ficha toca,
// para que un registro incompleto falle aquí y no en el navegador.
import { PEPTIDOS_ES } from "./src/data/es.js";
import { PEPTIDES_EN } from "./src/data/en.js";
import { CATALOG } from "./src/data/catalog.js";
import { GOAL_MAP } from "./src/data/goals.js";
import { UI } from "./src/i18n.js";
import { SECTIONS } from "./src/i18n.sections.js";
import { RIDGES } from "./src/theme.js";

let fail = 0;
const err = (m) => { console.log("  ✗ " + m); fail++; };

for (const [lang, list] of [["es", PEPTIDOS_ES], ["en", PEPTIDES_EN]]) {
  const t = { ...UI[lang], ...SECTIONS[lang] };
  for (const p of list) {
    const w = (m) => err(`[${lang}] ${p.slug}: ${m}`);
    if (!t.levels[p.level]) w(`nivel desconocido "${p.level}"`);
    if (RIDGES[p.level] === undefined) w(`sin crestas para "${p.level}"`);
    if (!p.ceiling) w("sin ceiling");
    if (p.ceiling?.state === "established" && !Array.isArray(p.ceiling.steps)) w("ceiling sin steps");
    if (!p.ceiling?.adverse) w("ceiling.adverse ausente");
    if (!p.ceiling?.adverse?.pending && p.ceiling?.adverse?.aboveCeiling === undefined) w("adverse sin aboveCeiling ni pending");
    if (p.ceiling?.adverse?.pending && !Array.isArray(p.ceiling.adverse.categories)) w("pending sin categories");
    if (!p.reports) w("sin reports");
    if (!p.reports?.pending) {
      if (typeof p.reports?.n !== "number") w("reports.n no numérico");
      for (const k of ["noAdverse", "stacking", "habits"]) if (typeof p.reports?.[k] !== "number") w(`reports.${k} ausente`);
      for (const e of p.reports?.effects ?? []) if (!e.none && !t.levels[e.level]) w(`efecto con nivel malo "${e.level}"`);
    }
    if (!p.community) w("sin community");
    if (!p.community?.pending && typeof p.community?.n !== "number") w("community.n no numérico");
    if (!Array.isArray(p.safety)) w("safety no es array");
    for (const it of p.safety ?? []) {
      if (!t.safety.kinds[it.kind]) w(`kind malo "${it.kind}"`);
      if (!t.safety.origins[it.origin]) w(`origin malo "${it.origin}"`);
    }
    for (const c of p.claims ?? []) if (!t.levels[c.level]) w(`claim con nivel malo "${c.level}"`);
    for (const r of p.regulatory ?? []) if (!["ok","alert","grey"].includes(r.tone)) w(`tone malo "${r.tone}"`);
  }
}

const slugs = new Set(CATALOG.map((c) => c.slug));
for (const p of PEPTIDOS_ES) if (!slugs.has(p.slug)) err(`es.js "${p.slug}" no está en el catálogo`);
for (const g of GOAL_MAP) for (const s of g.peptides) if (!slugs.has(s)) err(`objetivo ${g.slug} → "${s}" no existe`);
const esS = PEPTIDOS_ES.map(p=>p.slug).join(","), enS = PEPTIDES_EN.map(p=>p.slug).join(",");
if (esS !== enS) err("es.js y en.js no coinciden en orden/slugs");

console.log(fail ? `\n${fail} problema(s)` : "\n✓ todo limpio — " + PEPTIDOS_ES.length + " fichas completas, " + CATALOG.length + " en catálogo");
process.exit(fail ? 1 : 0);
