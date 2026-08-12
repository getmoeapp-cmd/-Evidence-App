// English content. Same slugs and same order as es.js.
// Demonstration data: replace with real PubMed records.
export const PEPTIDES_EN = [
  {
    slug: "semaglutida",
    name: "Semaglutide",
    altName: "Semaglutide",
    className: "GLP-1 receptor agonist",
    level: "A",
    summary:
      "The uncommon case in this category: a large body of randomized human trials, published and replicated, with regulatory approval in several countries.",
    ceiling: {
      state: "established",
      dose: "2.4 mg", frequency: "per week", indication: "weight management",
      steps: ["0.25", "0.5", "1.0", "1.7", "2.4"],
      schedule: "4 weeks per step · 16 weeks to the final dose",
      note: "This is the highest dose studied and approved for this indication. Above it, no safety data has been published.",
      adverse: { total: 612, aboveCeiling: 214, skipped: 331 },
    },
    reports: {
      n: 4820, noAdverse: 0.41, stacking: 0.22, habits: 0.71,
      effects: [
        { text: "Weight loss", pct: 0.88, level: "A" },
        { text: "Less food preoccupation", pct: 0.79, level: "A" },
        { text: "Better relationship with food", pct: 0.52, level: "B" },
        { text: "More daytime energy", pct: 0.31, level: "NO_DATA" },
        { text: "No change at all", pct: 0.06, none: true },
      ],
    },
    safety: [
      { kind: "absolute", text: "Personal or family history of medullary thyroid carcinoma", origin: "label" },
      { kind: "absolute", text: "Multiple endocrine neoplasia syndrome type 2 (MEN2)", origin: "label" },
      { kind: "absolute", text: "Pregnancy", origin: "label" },
      { kind: "relative", text: "History of pancreatitis", origin: "trial", detail: "Exclusion criterion in the pivotal trials, so no data exists for this group." },
      { kind: "relative", text: "Gastroparesis or severe gastrointestinal disease", origin: "label" },
      { kind: "interaction", text: "Insulin or sulfonylureas", origin: "label", detail: "Hypoglycemia risk; requires supervised adjustment." },
    ],
    claims: [
      { text: "Reduces body weight in people with obesity", level: "A", n: 14, nh: 14 },
      { text: "Improves glycemic control in type 2 diabetes", level: "A", n: 22, nh: 22 },
      { text: "Reduces major cardiovascular events", level: "A", n: 3, nh: 3 },
    ],
    study: {
      title: "Once-Weekly Semaglutide in Adults with Overweight or Obesity",
      journal: "New England Journal of Medicine", year: 2021,
      type: "Randomized, double-blind controlled trial", n: "1,961 participants",
      plain: "A 68-week trial in adults with overweight or obesity without diabetes. The treated group lost substantially more body weight than the placebo group. The most frequent side effects were gastrointestinal.",
      limits: "All participants also received lifestyle counseling. The trial was funded by the drug's manufacturer.",
    },
    regulatory: [
      { country: "United States", agency: "FDA", status: "Approved", tone: "ok" },
      { country: "Colombia", agency: "INVIMA", status: "Active marketing authorization", tone: "ok" },
      { country: "Mexico", agency: "COFEPRIS", status: "Approved", tone: "ok" },
    ],
    community: { n: 4820, adverse: 612, coa: 18 },
  },
  {
    slug: "pt-141",
    name: "PT-141",
    altName: "Bremelanotide",
    className: "Melanocortin receptor agonist",
    level: "A",
    summary:
      "FDA-approved after two randomized phase 3 trials. One of the few peptides in this category that went the full regulatory distance, with a complete product label and published safety data.",
    ceiling: {
      state: "established",
      dose: "1.75 mg", frequency: "per dose, as needed",
      indication: "hypoactive sexual desire disorder in premenopausal women",
      steps: ["1.75"],
      schedule: "Single dose · maximum one per 24 h and eight per month",
      note: "Fixed dose established in the pivotal trials. No titration required, but there is a frequency limit.",
      adverse: { total: 430, aboveCeiling: 96, skipped: 41 },
    },
    reports: {
      n: 2140, noAdverse: 0.48, stacking: 0.19, habits: 0.12,
      effects: [
        { text: "Increased sexual desire", pct: 0.71, level: "A" },
        { text: "Noticeable effect the same day", pct: 0.64, level: "A" },
        { text: "Better response over time", pct: 0.28, level: "B" },
        { text: "No change at all", pct: 0.22, none: true },
      ],
    },
    safety: [
      { kind: "absolute", text: "Uncontrolled hypertension or established cardiovascular disease", origin: "label", detail: "Causes transient increases in blood pressure." },
      { kind: "relative", text: "Pregnancy", origin: "label" },
      { kind: "interaction", text: "Oral naltrexone", origin: "label", detail: "May significantly reduce its concentration." },
    ],
    claims: [
      { text: "Increases sexual desire in premenopausal women", level: "A", n: 6, nh: 6 },
      { text: "Improves erectile function", level: "B", n: 4, nh: 4 },
    ],
    study: {
      title: "Bremelanotide for Hypoactive Sexual Desire Disorder in Premenopausal Women",
      journal: "Obstetrics & Gynecology", year: 2019,
      type: "Two randomized, double-blind, placebo-controlled trials", n: "1,267 participants",
      plain: "Two phase 3 trials in premenopausal women with hypoactive sexual desire disorder. The treated group showed significant improvements over placebo on desire and related distress scales.",
      limits: "The average effect size was modest and there was a high dropout rate from nausea. Trials funded by the developer.",
    },
    regulatory: [
      { country: "United States", agency: "FDA", status: "Approved", tone: "ok" },
      { country: "European Union", agency: "EMA", status: "Not approved", tone: "alert" },
      { country: "Colombia", agency: "INVIMA", status: "No registration", tone: "grey" },
    ],
    community: { n: 2140, adverse: 430, coa: 24 },
  },
  {
    slug: "bpc-157",
    name: "BPC-157",
    altName: "BPC-157",
    className: "Gastric pentadecapeptide",
    level: "C",
    summary:
      "One of the most discussed peptides online and one of the least studied in people. Nearly all the existing literature is in rodents. That gap between what is claimed and what has been measured is the entire point of this card.",
    ceiling: {
      state: "none",
      note: "No human trial has set a dose for this compound yet. The figures circulating come from accumulated practice rather than a study — worth knowing where they came from.",
      adverse: { total: 1180, aboveCeiling: null, skipped: null },
    },
    reports: {
      n: 12470, noAdverse: 0.62, stacking: 0.68, habits: 0.54,
      effects: [
        { text: "Less joint pain", pct: 0.61, level: "C" },
        { text: "Faster recovery after training", pct: 0.54, level: "C" },
        { text: "Better digestion", pct: 0.37, level: "C" },
        { text: "Faster injury healing", pct: 0.29, level: "NO_DATA" },
        { text: "No change at all", pct: 0.19, none: true },
      ],
    },
    safety: [
      { kind: "relative", text: "Active malignancy or cancer history", origin: "mechanism", detail: "Angiogenic activity has been described in preclinical models. This is an inference from mechanism, not a finding measured in people." },
    ],
    claims: [
      { text: "Accelerates tendon and ligament repair", level: "C", n: 11, nh: 0 },
      { text: "Protects the intestinal lining", level: "C", n: 8, nh: 0 },
      { text: "Speeds injury recovery in humans", level: "NO_DATA", n: 0, nh: 0 },
    ],
    study: {
      title: "Stable gastric pentadecapeptide BPC 157 in trials for inflammatory bowel disease",
      journal: "Current Pharmaceutical Design", year: 2011,
      type: "Narrative review", n: "Not applicable — animal models",
      plain: "A review of available work on the compound in models of gastrointestinal injury, mostly in rats. It describes effects on mucosal healing in those models.",
      limits: "This is a review, not a trial. The results come from animals and have not been reproduced in controlled human trials. Several of the cited papers share a research group.",
    },
    regulatory: [
      { country: "United States", agency: "FDA", status: "Not approved · research use only", tone: "alert" },
      { country: "Colombia", agency: "INVIMA", status: "No specific regulation", tone: "grey" },
      { country: "European Union", agency: "EMA", status: "Not approved", tone: "alert" },
    ],
    community: { n: 12470, adverse: 1180, coa: 31 },
  },
  {
    slug: "epitalon",
    name: "Epitalon",
    altName: "Epitalon",
    className: "Synthetic tetrapeptide",
    level: "NO_DATA",
    summary:
      "It is credited with effects on telomeres and longevity. Searching PubMed for controlled human trials returns none. It is not that the evidence is weak — there is no published evidence to review yet.",
    ceiling: {
      state: "none",
      note: "No human trial has set a dose for this compound yet. What circulates comes from people's experience, not from a published protocol.",
      adverse: { total: 190, aboveCeiling: null, skipped: null },
    },
    reports: {
      n: 3110, noAdverse: 0.74, stacking: 0.59, habits: 0.44,
      effects: [
        { text: "Better sleep quality", pct: 0.47, level: "NO_DATA" },
        { text: "More energy on waking", pct: 0.38, level: "NO_DATA" },
        { text: "Better skin appearance", pct: 0.21, level: "NO_DATA" },
        { text: "No change at all", pct: 0.35, none: true },
      ],
    },
    safety: [],
    claims: [
      { text: "Lengthens telomeres in humans", level: "NO_DATA", n: 0, nh: 0 },
      { text: "Extends lifespan", level: "NO_DATA", n: 0, nh: 0 },
      { text: "Modulates melatonin secretion", level: "D", n: 2, nh: 0 },
    ],
    study: null,
    regulatory: [
      { country: "United States", agency: "FDA", status: "Not approved · research use only", tone: "alert" },
      { country: "Colombia", agency: "INVIMA", status: "No specific regulation", tone: "grey" },
    ],
    community: { n: 3110, adverse: 190, coa: 12 },
  },
];
