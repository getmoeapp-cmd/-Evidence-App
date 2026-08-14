// English content — 27 fichas (24 compuestos + 3 mezclas).
// Generado desde las fichas en markdown. Mismos slugs y mismo orden en los dos idiomas.
export const PEPTIDES_EN = [
  {
    slug: "retatrutide",
    name: "Retatrutide",
    altName: "LY3437943",
    className: "TRIPLE GIP / GLP-1 / GLUCAGON AGONIST",
    level: "A",
    summary: "The most closely watched case in the category: the highest results ever reported in obesity trials — with no regulatory approval in any country, and phase 3 available only as company-reported topline data.",
    levelNote: "no human publication of that combination",
    ceiling: {
      state: "established",
      dose: "12 mg",
      frequency: "per week",
      indication: "obesity (published phase 2 and phase 3 TRIUMPH-1)",
      steps: ["2"],
      schedule: "2 gradual escalation every 4 weeks to the target dose (4, 9 or 12 mg).",
      note: "This is the clinical trial protocol, not a usage guide. Above 12 mg weekly, no safety data exists in humans.",
      adverse: {
        pending: true,
        categories: ["use above the studied ceiling", "skipped titration steps", "stacking with other compounds", "product without a verified COA."]
      }
    },
    safety: [
      { kind: "absolute", text: "Personal or family history of medullary thyroid carcinoma — DO NOT USE", origin: "trial", detail: "GLP-1 class warning · trial exclusion criterion" },
      { kind: "absolute", text: "Multiple endocrine neoplasia syndrome type 2 (MEN2) — DO NOT USE", origin: "trial", detail: "GLP-1 class warning · trial exclusion criterion" },
      { kind: "absolute", text: "Pregnancy and breastfeeding — DO NOT USE", origin: "trial", detail: "Exclusion criterion in all trials" },
      { kind: "watch", text: "History of pancreatitis — NEEDS SUPERVISION", origin: "trial", detail: "Exclusion criterion in the pivotal trials: no data exists for this group." },
      { kind: "relative", text: "Gastroparesis or severe gastrointestinal disease — NEEDS SUPERVISION", origin: "mechanism", detail: "Class effect (delayed gastric emptying)" },
      { kind: "relative", text: "Diabetic retinopathy (in people with T2D) — NEEDS SUPERVISION", origin: "mechanism", detail: "Class effect from rapid glucose lowering" },
      { kind: "interaction", text: "Insulin or sulfonylureas — INTERACTION", origin: "mechanism", detail: "Hypoglycemia risk; requires supervised adjustment." },
      { kind: "watch", text: "MONITORED SIGNALS (phase 3, 2026)", origin: "pharmacovigilance", detail: "Dysesthesia (altered skin sensation) and urinary tract infections reported in TRIUMPH-1 — mostly mild to moderate, most resolving during treatment. Vomiting in up to 25.3% at the highest dose. Discontinuation due to adverse events: 4.1%–11.3%, rising with dose." }
    ],
    safetyNote: "No approved label exists. Everything below comes from trial exclusion criteria and GLP-1 class effects.",
    claims: [
      { text: "Reduces body weight in obesity", level: "A", n: 0, nh: 0, note: "Published phase 2 (up to 24.2% at 48 weeks). Phase 3 topline: up to 28.3% at 80 weeks and 30.3% at 104 weeks — bariatric surgery range." },
      { text: "Improves glycemic control in type 2 diabetes", level: "A", n: 0, nh: 0, note: "Published phase 2 (dose-dependent HbA1c reductions). TRIUMPH-2 topline: up to 20.8% weight loss in people with T2D." },
      { text: "Reduces liver fat (fatty liver / MASLD)", level: "B", n: 0, nh: 0, note: "Phase 2 substudy with reductions in liver fat in most participants. No formal phase 3 indication yet." },
      { text: "Reduces knee osteoarthritis pain", level: "B", n: 0, nh: 0, note: "TRIUMPH-4 topline (2026): up to 28.7% weight loss with pain reduction. Not peer-reviewed." },
      { text: "Reduces major cardiovascular events", level: "NOT_SHOWN", n: 0, nh: 0, note: "The cardiovascular event analysis in TRIUMPH-3 was inconclusive. It improved risk markers (non-HDL cholesterol, blood pressure), which is not the same as reducing events." },
      { text: "Effects on cancer", level: "NO_DATA", n: 0, nh: 0, note: "Preclinical research only. No human trials with this endpoint." }
    ],
    study: {
      title: "Triple-Hormone-Receptor Agonist Retatrutide for Obesity — A Phase 2 Trial",
      journal: "New England Journal of Medicine · Randomized, double-blind, placebo-controlled trial",
      year: "2023",
      n: "338 participants",
      plain: "A 48-week trial in adults with obesity or overweight, without diabetes. The highest-dose group lost an average of 24.2% of body weight — the largest reduction reported in an obesity trial at the time. The most frequent adverse effects were gastrointestinal and increased with dose. A transient rise in heart rate was also observed.",
      limits: "338 participants — small next to a phase 3 trial. Funded by the manufacturer (Eli Lilly). The 2026 phase 3 data comes from company press releases and has not been peer-reviewed."
    },
    regulatory: [
      { country: "United States", agency: "FDA", status: "Not approved · investigational. The manufacturer plans to file (BLA) in the first quarter of 2027.", tone: "alert" },
      { country: "Colombia", agency: "INVIMA", status: "No marketing authorization.", tone: "ok" },
      { country: "Mexico", agency: "COFEPRIS", status: "Not approved.", tone: "alert" },
      { country: "Europe", agency: "EMA", status: "Not authorized. No commercial version exists in any country. Everything circulating today is sold outside regulated channels, without pharmaceutical quality control.", tone: "grey" }
    ],
    video: [
      {
        who: "Dr. Jones, DC — YouTube (Jun 2026)",
        source: "\"How to Dose Retatrutide to Maximize Fat Loss\", 16 min. He runs a GLP-1 telemedicine clinic and the video funnels to his practice.",
        points: [
          { text: "Trial titration schedules were built to find the maximum tolerable dose, not your optimal one: 12 mg is a ceiling, not a target", rel: "matches", note: "exactly how this card presents the studied ceiling" },
          { text: "Going from 8 to 12 mg (50% more drug) added only 1.4 percentage points of weight loss, with more side-effect dropouts in that range", rel: "matches", note: "published phase 2" },
          { text: "In body composition, 8 mg matched or slightly beat 12 mg", rel: "matches", note: "with the caveat he states himself: a substudy in a diabetic population" },
          { text: "The glucagon receptor mobilizes liver fat but raises heart rate and total system load", rel: "matches", note: "phase 2 reported dose-dependent heart-rate increases" },
          { text: "Hold every dose a minimum of 4 weeks: the long half-life delays the effect and escalating at week two is overcorrecting", rel: "matches", note: "the trials escalated in 4-week steps" },
          { text: "Start at 0.5–1 mg, never 2", rel: "beyond", note: "below 2 mg no studied human arm exists" },
          { text: "His own dose rule: appetite controlled, protein covered, training intact; most of his patients land at 2–4 mg", rel: "beyond", note: "clinical experience; no trial optimized individual dosing this way" },
          { text: "Combining low-dose retatrutide with low-dose tirzepatide for appetite", rel: "beyond", note: "no human publication of that combination" }
        ]
      }
    ],
    community: { pending: true }
  },
  {
    slug: "tirzepatide",
    name: "Tirzepatide",
    altName: "Mounjaro / Zepbound",
    className: "DUAL GIP / GLP-1 AGONIST",
    level: "A",
    summary: "The current standard of the category: the most effective approved drug for weight loss, with one of the largest trial programs in modern medicine — and the first to beat semaglutide head to head.",
    levelNote: "LEVEL A — Randomized human trials, published, replicated, and approved in several countries.",
    ceiling: {
      state: "established",
      dose: "15 mg",
      frequency: "per week",
      indication: "type 2 diabetes, obesity and sleep apnea",
      steps: ["2.5", "5", "7.5", "10", "12.5", "15"],
      schedule: "4 weeks per step · 20 weeks to the maximum dose (approved label protocol)",
      note: "Above 15 mg weekly, no safety data has been published.",
      adverse: {
        pending: true,
        categories: ["use above the studied ceiling", "skipped titration steps", "concurrent use of other compounds", "product without a verified COA."]
      }
    },
    safety: [
      { kind: "absolute", text: "Personal or family history of medullary thyroid carcinoma — DO NOT USE", origin: "label", detail: "Approved product label" },
      { kind: "absolute", text: "Multiple endocrine neoplasia syndrome type 2 (MEN2) — DO NOT USE", origin: "label", detail: "Approved product label" },
      { kind: "absolute", text: "Pregnancy — DO NOT USE", origin: "label", detail: "Approved product label" },
      { kind: "relative", text: "History of pancreatitis — NEEDS SUPERVISION", origin: "trial", detail: "Not studied in this group: excluded from the pivotal trials." },
      { kind: "relative", text: "Gastroparesis or severe gastrointestinal disease — NEEDS SUPERVISION", origin: "label", detail: "Approved product label (delayed gastric emptying)" },
      { kind: "relative", text: "Diabetic retinopathy (in people with T2D) — NEEDS SUPERVISION", origin: "label", detail: "Approved product label" },
      { kind: "watch", text: "Gallbladder disease — MONITORED SIGNAL", origin: "trial", detail: "Gallbladder events reported in trials; seek care for severe abdominal pain." },
      { kind: "interaction", text: "Insulin or sulfonylureas — INTERACTION", origin: "label", detail: "Hypoglycemia risk; requires supervised adjustment. Approved product label" },
      { kind: "interaction", text: "Oral contraceptives — INTERACTION", origin: "label", detail: "Delayed gastric emptying may reduce their effectiveness. The label recommends a backup method for 4 weeks after starting and after each dose increase. Specific to tirzepatide." }
    ],
    claims: [
      { text: "Reduces body weight in obesity", level: "A", n: 0, nh: 0, note: "SURMOUNT-1: up to 20.9% loss at 72 weeks vs 3.1% on placebo. In SURMOUNT-5, head to head, it outperformed semaglutide — the only approved drug that has." },
      { text: "Improves glycemic control in type 2 diabetes", level: "A", n: 0, nh: 0, note: "The full SURPASS program: HbA1c reductions superior to placebo and to active comparators." },
      { text: "Treats obstructive sleep apnea", level: "A", n: 0, nh: 0, note: "SURMOUNT-OSA: substantial reduction in apnea events. First drug therapy approved by the FDA for this indication (2024)." },
      { text: "Reduces major cardiovascular events", level: "A", n: 0, nh: 0, note: "SURPASS-CVOT (NEJM 2025, 13,299 patients, 4 years): noninferior to dulaglutide — a drug that already reduces events on its own. Superiority on the composite of CV death, heart attack and stroke was not reached (p=0.09). All-cause mortality was 16% lower. Translation: protects the heart at least as much as a proven GLP-1; \"better than\" is not yet demonstrated." },
      { text: "Reduces liver fat (MASH / fatty liver)", level: "B", n: 0, nh: 0, note: "Phase 2 trial with resolution of steatohepatitis in most treated patients. No approved indication." },
      { text: "Improves heart failure with preserved ejection fraction (HFpEF)", level: "A", n: 0, nh: 0, note: "SUMMIT (NEJM 2024): fewer heart failure events in people with obesity. Indication not yet approved." }
    ],
    study: {
      title: "Tirzepatide Once Weekly for the Treatment of Obesity",
      journal: "New England Journal of Medicine · Randomized, double-blind, placebo-controlled trial",
      year: "2022",
      n: "2,539 participants",
      plain: "A 72-week trial in adults with obesity or overweight, without diabetes. The maximum-dose group lost an average of 20.9% of body weight versus 3.1% on placebo. The most frequent side effects were gastrointestinal — nausea, diarrhea, constipation — mostly mild to moderate and concentrated during dose escalation.",
      limits: "All participants also received lifestyle counseling. The trial was funded by the manufacturer (Eli Lilly)."
    },
    regulatory: [
      { country: "United States", agency: "FDA", status: "Approved. Mounjaro: type 2 diabetes (2022; extended to children 10+). Zepbound: obesity (2023) and obstructive sleep apnea (2024).", tone: "ok" },
      { country: "Colombia", agency: "INVIMA", status: "Mounjaro registered for type 2 diabetes (2025). Zepbound (obesity indication) not registered to date.", tone: "grey" },
      { country: "Mexico", agency: "COFEPRIS", status: "Approved (Mounjaro).", tone: "ok" },
      { country: "Europe", agency: "EMA", status: "Approved (Mounjaro, for type 2 diabetes and weight management). Unlike retatrutide, a regulated pharmaceutical route does exist here. Anything sold as \"research tirzepatide\" outside that route passes through no pharmaceutical quality control.", tone: "ok" }
    ],
    community: { pending: true }
  },
  {
    slug: "semaglutida",
    name: "Semaglutide",
    altName: "Ozempic / Wegovy / Rybelsus",
    className: "GLP-1 RECEPTOR AGONIST",
    level: "A",
    summary: "The uncommon case in this category: the molecule with the most published trials, the most approved indications, and two routes of administration — injectable and oral. The benchmark everything else is measured against.",
    levelNote: "LEVEL A — Randomized human trials, published, replicated, and approved in several countries.",
    ceiling: {
      state: "established",
      dose: "7.2 mg",
      frequency: "per week",
      indication: "injectable (Wegovy HD, approved 2026)",
      altNote: "An oral route also exists: 25 mg daily (approved late 2025). The classic 2.4 mg weekly ceiling remains the standard dose.",
      steps: ["0.25", "0.5", "1.0", "1.7", "2.4"],
      schedule: "4 weeks per step · 16 weeks to the standard dose (approved label)",
      note: "The 7.2 mg presentation adds further titration steps under its own label. Above 7.2 mg weekly, no safety data has been published.",
      adverse: {
        pending: true,
        categories: ["use above the studied ceiling", "skipped titration steps", "concurrent use of other compounds", "product without a verified COA."]
      }
    },
    safety: [
      { kind: "absolute", text: "Personal or family history of medullary thyroid carcinoma — DO NOT USE", origin: "label", detail: "Approved product label" },
      { kind: "absolute", text: "Multiple endocrine neoplasia syndrome type 2 (MEN2) — DO NOT USE", origin: "label", detail: "Approved product label" },
      { kind: "absolute", text: "Pregnancy — DO NOT USE", origin: "label", detail: "Approved product label" },
      { kind: "watch", text: "History of pancreatitis — NEEDS SUPERVISION", origin: "trial", detail: "Exclusion criterion in the pivotal trials, so no data exists for this group." },
      { kind: "relative", text: "Gastroparesis or severe gastrointestinal disease — NEEDS SUPERVISION", origin: "label", detail: "Approved product label (delayed gastric emptying)" },
      { kind: "watch", text: "Diabetic retinopathy (in people with T2D) — NEEDS SUPERVISION", origin: "label", detail: "Signal observed in SUSTAIN-6 from rapid glucose lowering. Approved product label" },
      { kind: "watch", text: "Gallbladder disease — MONITORED SIGNAL", origin: "trial", detail: "Gallbladder events reported in trials; seek care for severe abdominal pain." },
      { kind: "watch", text: "Ischemic optic neuropathy (NAION) — MONITORED SIGNAL", origin: "label", detail: "Very rare. Added to the European label in 2025 after reports of sudden vision loss. Estimated frequency is extremely low, but it is the most discussed new signal for this molecule." },
      { kind: "interaction", text: "Insulin or sulfonylureas — INTERACTION", origin: "label", detail: "Hypoglycemia risk; requires supervised adjustment. Approved product label" }
    ],
    claims: [
      { text: "Reduces body weight in obesity", level: "A", n: 0, nh: 0, note: "STEP 1: 14.9% loss at 68 weeks on 2.4 mg vs 2.4% on placebo. STEP UP: 20.7% at 72 weeks on the newer 7.2 mg dose." },
      { text: "Improves glycemic control in type 2 diabetes", level: "A", n: 0, nh: 0, note: "SUSTAIN (injectable) and PIONEER (oral) programs: HbA1c reductions superior to placebo and to active comparators." },
      { text: "Reduces major cardiovascular events", level: "A", n: 0, nh: 0, note: "SELECT (17,604 patients): fewer cardiovascular deaths, heart attacks and strokes vs placebo in people with cardiovascular disease and overweight or obesity, without diabetes. FDA-approved indication (2024; oral route 2025). The only molecule in this category in Evidence with demonstrated cardiovascular superiority over placebo." },
      { text: "Protects the kidney in chronic kidney disease with diabetes", level: "A", n: 0, nh: 0, note: "FLOW: less kidney progression and death. Approved indication (2025)." },
      { text: "Treats fatty liver with inflammation (MASH)", level: "A", n: 0, nh: 0, note: "ESSENCE: resolution of steatohepatitis vs placebo. Approved in 2025 for MASH with moderate-to-advanced fibrosis — the first liver indication in this category." },
      { text: "Prevents or treats Alzheimer's", level: "NOT_SHOWN", n: 0, nh: 0, note: "The phase 3 trials (EVOKE) missed their primary endpoint (2025). A promising mechanism is not the same as a positive result." }
    ],
    study: {
      title: "Once-Weekly Semaglutide in Adults with Overweight or Obesity",
      journal: "New England Journal of Medicine · Randomized, double-blind, placebo-controlled trial",
      year: "2021",
      n: "1,961 participants",
      plain: "A 68-week trial in adults with overweight or obesity, without diabetes. The treated group lost substantially more body weight than placebo (14.9% vs 2.4%). The most frequent side effects were gastrointestinal — nausea, diarrhea, vomiting — mostly transient and concentrated during titration.",
      limits: "All participants also received lifestyle counseling. The trial was funded by the manufacturer (Novo Nordisk)."
    },
    regulatory: [
      { country: "United States", agency: "FDA", status: "Approved. Ozempic: type 2 diabetes (2017) and chronic kidney disease (2025). Wegovy: obesity (2021), cardiovascular risk (2024), MASH (2025), high dose 7.2 mg (2026). Oral Wegovy 25 mg (late 2025). Oral tablets for T2D with a cardiovascular indication (2025).", tone: "ok" },
      { country: "Colombia", agency: "INVIMA", status: "Ozempic registered for type 2 diabetes since 2019. Wegovy registered for obesity since 2024.", tone: "grey" },
      { country: "Mexico", agency: "COFEPRIS", status: "Approved (Ozempic and Wegovy).", tone: "ok" },
      { country: "Europe", agency: "EMA", status: "Approved (Ozempic, Wegovy, Rybelsus). This is the most counterfeited molecule in the category: INVIMA has issued alerts over compounded and social-media \"semaglutide\" with no marketing authorization. Registration does not mean the thing sold to you on Instagram is the registered product.", tone: "ok" }
    ],
    community: { pending: true }
  },
  {
    slug: "tesamorelin",
    name: "Tesamorelin",
    altName: "Egrifta",
    className: "GHRH ANALOG (GROWTH HORMONE RELEASER)",
    level: "A",
    summary: "The exception on the GH axis: the only growth hormone releaser with regulatory approval, published phase 3 trials and a real label. Everything CJC-1295 and sermorelin promise, tesamorelin had to demonstrate.",
    levelNote: "LEVEL A — Phase 3 randomized trials, published, replicated and FDA-approved — for one specific indication.",
    ceiling: {
      state: "established",
      dose: "2 mg",
      frequency: "per day",
      indication: "subcutaneous (approved label — note: daily, not weekly like the GLP-1s)",
      schedule: "A fixed 2 mg daily dose, no titration. Requires monitoring of IGF-1 and glucose during treatment. Above the label dose, no published data exists.",
      adverse: {
        pending: true,
        categories: ["off-label use (aesthetic, \"belly fat\" without HIV)", "discontinuation over cost", "compounded versus original product."]
      }
    },
    safety: [
      { kind: "absolute", text: "Active cancer — DO NOT USE", origin: "label", detail: "Approved product label" },
      { kind: "absolute", text: "Disruption of the hypothalamic-pituitary axis (surgery, radiation, pituitary tumor) — DO NOT USE", origin: "label", detail: "Approved product label" },
      { kind: "absolute", text: "Pregnancy — DO NOT USE", origin: "label", detail: "Approved product label" },
      { kind: "relative", text: "Diabetes or glucose intolerance — NEEDS SUPERVISION", origin: "label", detail: "Raises glucose; the label requires monitoring." },
      { kind: "watch", text: "Fluid retention, joint pain, carpal tunnel — CLASS SIGNAL", origin: "trial", detail: "Reported in the trials; generally reversible." },
      { kind: "relative", text: "Requires IGF-1 monitoring — LABEL", origin: "mechanism", detail: "The prescriber must watch that the growth factor does not spike." }
    ],
    safetyNote: "There is an approved label here — and it applies to anyone using unapproved GHRH analogs too:",
    claims: [
      { text: "Reduces visceral abdominal fat (in HIV lipodystrophy)", level: "A", n: 0, nh: 0, note: "Phase 3: ~15–18% reduction in visceral fat at 26–52 weeks versus placebo. It is the approved indication — and the effect reverses on stopping." },
      { text: "Reduces liver fat (in people with HIV)", level: "A", n: 0, nh: 0, note: "Published randomized trial with reduced liver fat. No approved indication for this." },
      { text: "Improves cognition — MIXED RESULTS", level: "NO_DATA", n: 0, nh: 0, note: "Small studies with signals in some subgroups; nothing conclusive or approved." },
      { text: "Works for abdominal aesthetics in the general population", level: "NO_DATA", n: 0, nh: 0, note: "All the evidence is in HIV lipodystrophy. Extrapolation to \"burning belly fat\" in healthy people has never been tested." }
    ],
    study: {
      title: "Phase 3 trials of tesamorelin in HIV-associated lipodystrophy",
      journal: "New England Journal of Medicine (pivotal program)",
      year: "2007",
      n: "Randomized, double-blind, placebo-controlled · ~400 participants",
      plain: "Phase 3 trials in people with HIV and visceral fat accumulation from antiretroviral treatment. The group treated with 2 mg daily lost a significant portion of deep visceral fat versus placebo, measured by imaging. When the drug was stopped, the fat came back — it is a maintenance treatment, not a cure.",
      limits: "A specific population (HIV with lipodystrophy): results do not automatically transfer to the general population. Manufacturer-funded."
    },
    regulatory: [
      { country: "United States", agency: "FDA", status: "Approved (Egrifta, 2010; new formulations since 2025) for reduction of visceral fat in HIV-associated lipodystrophy. Any other use is off-label.", tone: "ok" },
      { country: "Colombia · Invima / Mexico", agency: "COFEPRIS", status: "No known marketing authorization to date. In the region almost everything circulates via compounding or as \"research material.\"", tone: "ok" },
      { country: "Europe", agency: "EMA", status: "No current centralized authorization.", tone: "ok" },
      { country: "Sport", agency: "WADA", status: "Prohibited (growth hormone releaser), even though it is an approved drug.", tone: "ok" }
    ],
    community: { pending: true }
  },
  {
    slug: "aod-9604",
    name: "AOD-9604",
    altName: "hGH 176-191",
    className: "GROWTH HORMONE FRAGMENT (176-191)",
    level: "NOT_SHOWN",
    summary: "The cleanest case of \"measured and it didn't work\": six human trials, more than 900 participants, an excellent safety profile — and a flat failure in the one large study designed to test whether it helps you lose weight.",
    levelNote: "NOT SHOWN — This is not missing data. It is a real negative result, in the trial that mattered.",
    ceiling: {
      state: "range",
      note: "Published protocols used ranges of 250–1000 mcg per administration, 1–2 times daily, in trials of 12 to 24 weeks. Unlike almost everything in the catalog, a human map does exist here — and what it shows is the absence of a significant effect.",
      adverse: {
        pending: true,
        categories: ["\"spot fat burning\" use", "combination with GLP-1s", "product without a COA."]
      }
    },
    safety: [
      { kind: "relative", text: "Safety profile — CLEAN in trials", origin: "mechanism", detail: "Well tolerated across more than 900 participants, with no IGF-1 elevation, no insulin resistance, no fluid retention." },
      { kind: "watch", text: "Pregnancy and breastfeeding", origin: "mechanism", detail: "A note on honesty: being safe does not make something effective. This compound is the perfect demonstration of that difference." }
    ],
    claims: [
      { text: "Burns fat / causes weight loss", level: "NOT_SHOWN", n: 0, nh: 0, note: "Phase 2a (12 weeks): 2.6 kg versus 0.8 kg on placebo — a real signal. Phase 2b (24 weeks, ~536 people): no statistically significant difference versus placebo. The program was terminated because of it." },
      { text: "Does not raise IGF-1 or affect glucose", level: "B", n: 0, nh: 0, note: "Confirmed in humans. This is its real mechanistic advantage: the one claim the trials do support." },
      { text: "Repairs cartilage / knee osteoarthritis", level: "C", n: 0, nh: 0, note: "A small 2014 study and animal models. No phase 3. The current benchmark is semaglutide, which did reduce knee pain in a large trial." },
      { text: "Spot fat burning\" (belly, chin)", level: "NO_DATA", n: 0, nh: 0, note: "No study has tested a local effect from a subcutaneous injection." }
    ],
    study: { journal: "—", plain: "The decisive study was a 24-week phase 2b with more than 500 adults with obesity, designed specifically to answer whether AOD-9604 caused weight loss. The answer was no: no significant difference versus placebo. The company closed the program in 2007.", limits: "Safety was well documented (one of the best safety datasets in the peptide space). Efficacy was not." },
    regulatory: [
      { country: "United States", agency: "FDA", status: "Not approved for any indication. Removed from the Category 2 list in 2026 (nomination withdrawn), which is not approval.", tone: "alert" },
      { country: "Colombia · Invima / Mexico", agency: "COFEPRIS", status: "No marketing authorization. Circulates as a \"research reagent.\"", tone: "ok" },
      { country: "Sport", agency: "WADA", status: "Prohibited (growth hormone fragment).", tone: "alert" }
    ],
    community: { pending: true }
  },
  {
    slug: "cjc-1295",
    name: "CJC-1295",
    altName: "CJC-1295",
    className: "GHRH ANALOG (GROWTH HORMONE RELEASER)",
    level: "B",
    summary: "It does have human trials — and that is the trap: they showed it raises growth hormone, not that this does anything good for you. Pharmaceutical development was abandoned almost two decades ago.",
    levelNote: "LEVEL B — Small randomized human trials, on hormone markers only (GH, IGF-1). No clinical outcome ever tested. Development abandoned.",
    ceiling: {
      state: "none",
      note: "The published trials used single and weekly doses calculated by body weight, in a few dozen healthy volunteers, over short periods. No established dose exists, no long-term data, and not a single study of the months-long protocols circulating in forums. Sustained, unsupervised IGF-1 elevation is exactly what no trial has studied.",
      adverse: {
        pending: true,
        categories: ["combination with ipamorelin (the most common GH-axis stack)", "protocol length", "product without a COA."]
      }
    },
    safety: [
      { kind: "watch", text: "Active cancer or recent history — STRONG CAUTION", origin: "mechanism", detail: "Elevated IGF-1 is a cell growth factor. Approved GH products contraindicate it in active malignancy." },
      { kind: "watch", text: "Diabetes or prediabetes — CAUTION", origin: "mechanism", detail: "The GH axis raises glucose. A documented class effect in approved analogs." },
      { kind: "watch", text: "Fluid retention, joint pain, carpal tunnel — CLASS SIGNAL", origin: "mechanism", detail: "Pregnancy and breastfeeding — NO DATA AT ALL" }
    ],
    safetyNote: "No label exists. GH-axis signals (shared with approved releasers):",
    claims: [
      { text: "Raises GH and IGF-1", level: "B", n: 0, nh: 0, note: "Demonstrated in small controlled trials. This is a blood marker, not a benefit." },
      { text: "Builds muscle / reduces fat", level: "NO_DATA", n: 0, nh: 0, note: "Never measured in any trial. It is inferred from the mechanism, which is precisely what Evidence does not do." },
      { text: "Improves sleep and recovery", level: "NO_DATA", n: 0, nh: 0, note: "Anti-aging — NO DATA Chronic GH/IGF-1 elevation in fact carries adverse signals in the longevity literature." }
    ],
    study: { title: "Prolonged stimulation of growth hormone and IGF-I secretion by CJC-1295", journal: "Journal of Clinical Endocrinology & Metabolism · Randomized, placebo-controlled trial in healthy adults", year: "2006", plain: "A randomized placebo-controlled trial in healthy adults showed that one or two injections raised GH and IGF-1 in a sustained way for days or weeks. The study measured hormones and short-term safety. It did not measure muscle, fat, performance or any outcome that matters to the person buying it.", limits: "Dozens of participants, weeks of follow-up, purely hormonal endpoints, and a program the manufacturer itself later abandoned." },
    regulatory: [
      { country: "United States", agency: "FDA", status: "Not approved. Restricted from compounding in 2023 (Category 2); included in the 2024–2026 reclassification process. No approved indication.", tone: "alert" },
      { country: "Colombia · Invima / Mexico", agency: "COFEPRIS", status: "No marketing authorization. Circulates only as a \"research reagent.\"", tone: "ok" },
      { country: "Sport", agency: "WADA", status: "Prohibited (growth hormone releaser).", tone: "alert" }
    ],
    community: { pending: true }
  },
  {
    slug: "ipamorelin",
    name: "Ipamorelin",
    altName: "Ipamorelin",
    className: "GROWTH HORMONE SECRETAGOGUE (GHRELIN MIMETIC)",
    level: "B",
    summary: "The card with the fact nobody mentions: ipamorelin did reach pharmaceutical phase 2 — and the program was discontinued without demonstrating efficacy. It is the only compound in this batch with a real negative clinical result.",
    levelNote: "LEVEL B — Phase 1 in humans on hormone markers. Plus a genuine clinical NOT SHOWN: its development for postoperative ileus was abandoned.",
    ceiling: {
      state: "none",
      note: "The published trials used body-weight-based doses, in hospital and laboratory settings, over short periods. No established dose exists and no long-term data. The daily months-long protocols circulating in forums appear in no study.",
      adverse: {
        pending: true,
        categories: ["stack with CJC-1295 (the best-selling GH-axis combination)", "nighttime use \"for sleep\"", "product without a COA."]
      }
    },
    safety: [
      { kind: "watch", text: "Active cancer or recent history — STRONG CAUTION", origin: "mechanism", detail: "Elevated IGF-1 is a cell growth factor." },
      { kind: "watch", text: "Diabetes or prediabetes — CAUTION", origin: "mechanism", detail: "GH-axis class effect on glucose." },
      { kind: "watch", text: "Increased appetite — ITS OWN SIGNAL", origin: "pharmacovigilance", detail: "It is a ghrelin mimetic — the hunger hormone. Consistently reported." },
      { kind: "watch", text: "Pregnancy and breastfeeding", origin: "mechanism" }
    ],
    safetyNote: "No label exists. GH-axis signals:",
    claims: [
      { text: "Releases GH without raising cortisol or prolactin", level: "B", n: 0, nh: 0, note: "Demonstrated in phase 1. It is the real data behind all of its marketing — and it is a marker, not a benefit." },
      { text: "Treats postoperative ileus", level: "NOT_SHOWN", n: 0, nh: 0, note: "The only clinical indication ever formally tested. The phase 2 program was discontinued without reaching efficacy. Measured and failed: different from \"no data.\"" },
      { text: "Builds muscle / burns fat", level: "NO_DATA", n: 0, nh: 0, note: "Never measured in humans." },
      { text: "Improves sleep", level: "NO_DATA", n: 0, nh: 0, note: "Inferred from the nocturnal GH pulse; never tested as an outcome." }
    ],
    study: { journal: "—", plain: "In phase 1 studies, ipamorelin produced growth hormone pulses comparable to other secretagogues but without raising cortisol or prolactin. When it was tested for a real clinical outcome — restoring bowel function after surgery — development was abandoned without showing that it worked.", limits: "The hormonal selectivity is real and well measured. The leap from \"clean GH pulse\" to \"more muscle, better sleep, anti-aging\" has been made by no trial." },
    regulatory: [
      { country: "United States", agency: "FDA", status: "Not approved. Restricted from compounding in 2023 (Category 2); included in the 2024–2026 reclassification process. No approved indication.", tone: "alert" },
      { country: "Colombia · Invima / Mexico", agency: "COFEPRIS", status: "No marketing authorization. Circulates only as a \"research reagent.\"", tone: "ok" },
      { country: "Sport", agency: "WADA", status: "Prohibited (growth hormone releaser).", tone: "alert" }
    ],
    community: { pending: true }
  },
  {
    slug: "sermorelin",
    name: "Sermorelin",
    altName: "GRF 1-29",
    className: "GHRH ANALOG (FRAGMENT 1-29)",
    level: "B",
    summary: "The \"it used to be approved\" card: sermorelin had FDA approval — for children with growth hormone deficiency, decades ago. It was withdrawn from the market for commercial reasons, not safety ones. Today clinics sell it to adults for something that was never tested.",
    levelNote: "LEVEL B · ADULT USE — The historical LEVEL A evidence is pediatric (diagnosed GH deficiency). For the adult anti-aging use sold today: hormone markers only.",
    ceiling: {
      state: "none",
      note: "The approved product used daily body-weight-based doses in children with diagnosed GH deficiency, under medical and laboratory supervision. For adult anti-aging use no validated dose exists: the clinic and forum protocols come from no trial with clinical outcomes.",
      adverse: {
        pending: true,
        categories: ["source (compounding clinic vs gray market)", "stack with ipamorelin", "use without IGF-1 measurement."]
      }
    },
    safety: [
      { kind: "watch", text: "Active cancer or recent history — STRONG CAUTION", origin: "mechanism", detail: "Elevated IGF-1 is a cell growth factor." },
      { kind: "watch", text: "Diabetes or prediabetes — CAUTION", origin: "mechanism", detail: "The GH axis raises glucose." },
      { kind: "watch", text: "Untreated hypothyroidism — CAUTION", origin: "label", detail: "Interferes with the GH-axis response (signal from the historical label)." },
      { kind: "watch", text: "Pregnancy and breastfeeding", origin: "mechanism" }
    ],
    safetyNote: "No current label. GH-axis signals apply (documented in approved analogs):",
    claims: [
      { text: "Treats GH deficiency in children", level: "A", n: 0, nh: 0, note: "The indication that won approval. A pediatric population with diagnosed deficiency — not healthy adults." },
      { text: "Raises GH and IGF-1 in adults", level: "B", n: 0, nh: 0, note: "Demonstrated as a marker. It raises less, and more briefly, than modern secretagogues — it is the short-acting analog of the group." },
      { text: "Rejuvenates\" / improves body composition in adults", level: "NO_DATA", n: 0, nh: 0, note: "No trial of clinical outcomes in healthy adults. This is the entire gap between what is sold and what was measured." },
      { text: "Improves deep sleep", level: "NO_DATA", n: 0, nh: 0, note: "Small studies with weak signals; nothing replicated." }
    ],
    study: { journal: "—", plain: "The trials behind the original approval showed sermorelin stimulated growth in children with growth hormone deficiency. The manufacturer withdrew the product in 2008 for business reasons. None of that evidence proves that injecting it into a 45-year-old adult rejuvenates them — that was never studied.", limits: "\"Once approved\" is not \"approved for what you are being sold.\" The population, the endpoint and the supervision of the original use bear no resemblance to today's use." },
    regulatory: [
      { country: "United States", agency: "FDA", status: "No current approved product (historical approval withdrawn in 2008 for commercial reasons). It is one of the few peptides US compounding pharmacies can legally prepare with a prescription — legality of preparation, not evidence of adult efficacy.", tone: "ok" },
      { country: "Colombia · Invima / Mexico", agency: "COFEPRIS", status: "No current marketing authorization. Circulates via compounding or as \"research material.\"", tone: "ok" },
      { country: "Sport", agency: "WADA", status: "Prohibited (growth hormone releaser).", tone: "alert" }
    ],
    community: { pending: true }
  },
  {
    slug: "bpc-157",
    name: "BPC-157",
    altName: "BPC-157",
    className: "REPAIR PEPTIDE (GASTRIC PENTADECAPEPTIDE)",
    level: "C",
    summary: "The most famous peptide in the repair category — and the clearest example of the gap between fame and evidence: more than 100 animal studies, zero published randomized trials in humans.",
    levelNote: "LEVEL C — Primarily animal evidence. The only published human data are tiny pilots with no control group.",
    ceiling: {
      state: "none",
      note: "DOES NOT EXIST in humans. No published randomized trial has established a dose, duration or safety profile in people. The doses circulating in forums come from extrapolating rat studies — an extrapolation nobody has validated. The edge of the map is at zero.",
      adverse: {
        pending: true,
        categories: ["route (oral vs injected)", "combination with TB-500 (\"Wolverine\")", "cycle length", "product without a COA."]
      }
    },
    safety: [
      { kind: "watch", text: "Active cancer or recent history — THEORETICAL CAUTION", origin: "mechanism", detail: "BPC-157 stimulates angiogenesis (VEGF) in animal models — the same mechanism tumors use to grow. Never studied in humans with cancer." },
      { kind: "interaction", text: "Pregnancy and breastfeeding", origin: "mechanism", detail: "Drug interactions — NO DATA AT ALL" }
    ],
    safetyNote: "No label and no human safety base exist. The following are theoretical mechanism signals, not clinical data.",
    claims: [
      { text: "Speeds tendon and muscle healing", level: "C", n: 0, nh: 0, note: "Consistent in animal models (rodents). Zero controlled human trials." },
      { text: "Protects and repairs the gut", level: "C", n: 0, nh: 0, note: "The compound's strongest preclinical base. A phase 2 in ulcerative colitis was started; its results never appeared in a peer-reviewed journal." },
      { text: "Reduces inflammation and joint pain", level: "NO_DATA", n: 0, nh: 0, note: "A 12-patient report using bladder injections (2024) and uncontrolled case series. Spontaneous improvement, placebo and reporting bias could explain everything observed." },
      { text: "Protects the brain / repairs nerves", level: "C", n: 0, nh: 0, note: "Animals only." }
    ],
    study: { journal: "—", plain: "A 2025 systematic review analyzed 36 BPC-157 studies published between 1993 and 2024. It found 35 preclinical and only 1 clinical. The only published intravenous safety pilot in humans had 2 participants. That is the entire human map.", limits: "Most of the animal literature comes from a single research group (Croatia), with little independent replication — a methodological red flag in any field." },
    regulatory: [
      { country: "United States", agency: "FDA", status: "Not approved. Restricted from compounding in 2023 (Category 2, safety concerns); in 2026 the FDA began reclassification and committee review. Coming off a restricted list is not approval: there is still no indication, no validated dose and no human efficacy data.", tone: "alert" },
      { country: "Colombia · Invima / Mexico", agency: "COFEPRIS", status: "No marketing authorization. Circulates only as a \"research reagent.\"", tone: "ok" },
      { country: "Sport", agency: "WADA", status: "Prohibited. It will show up on a doping test.", tone: "alert" }
    ],
    community: { pending: true }
  },
  {
    slug: "tb-500",
    name: "TB-500",
    altName: "Thymosin beta-4 fragment",
    className: "REPAIR PEPTIDE (THYMOSIN BETA-4 FRAGMENT)",
    level: "C",
    summary: "The card with a catch: the parent molecule (thymosin beta-4) did reach human trials — as eye drops. The injectable fragment sold as \"TB-500\" has never been tested in a person.",
    levelNote: "LEVEL C — Animal evidence for the injectable fragment in circulation. The existing human trials used a different formulation, a different route and a different indication.",
    ceiling: {
      state: "none",
      note: "DOES NOT EXIST in humans for the injectable product in circulation. The ophthalmic trials of the parent molecule do not transfer to systemic injections: different exact molecule, different dose, different route. The edge of the map is at zero.",
      adverse: {
        pending: true,
        categories: ["combination with BPC-157 (\"Wolverine\")", "frequency of \"loading cycles\"", "product without a COA."]
      }
    },
    safety: [
      { kind: "watch", text: "Active cancer or recent history — THEORETICAL CAUTION", origin: "mechanism", detail: "Promotes angiogenesis and cell migration in models — a mechanism shared with tumor growth. Never studied in humans with cancer." },
      { kind: "interaction", text: "Pregnancy and breastfeeding", origin: "mechanism", detail: "Interactions — NO DATA AT ALL" }
    ],
    safetyNote: "No label and no human safety base exist for the injectable. Theoretical signals:",
    claims: [
      { text: "Repairs muscle, tendon and connective tissue", level: "C", n: 0, nh: 0, note: "Animal wound-healing models. Zero human trials with the injectable." },
      { text: "Improves flexibility and reduces inflammation", level: "NO_DATA", n: 0, nh: 0, note: "Community reporting with no controlled study behind it." },
      { text: "Repairs the cornea / dry eye (parent molecule, as drops)", level: "B", n: 0, nh: 0, note: "Real randomized trials exist — with mixed results that did not consistently meet their primary endpoints. It is the closest this family has come to real medicine, and it was not with injections." },
      { text: "Regenerates the heart", level: "NOT_SHOWN", n: 0, nh: 0, note: "Human cardiac development was abandoned without demonstrating efficacy." }
    ],
    study: { journal: "—", plain: "The only randomized human trials in this family tested thymosin beta-4 eye drops for ocular surface disease. Some endpoints improved, primary endpoints failed in several trials, and the program has not produced an approved drug. The injectable fragment sold as TB-500 appears in none of these studies.", limits: "Carrying results from an eye drop over to a weekly intramuscular injection is pure speculation: neither the molecule nor the exposure is equivalent." },
    regulatory: [
      { country: "United States", agency: "FDA", status: "Not approved. Restricted from compounding in 2023 (Category 2); included in the 2026 reclassification and committee review. No approved indication.", tone: "alert" },
      { country: "Colombia · Invima / Mexico", agency: "COFEPRIS", status: "No marketing authorization. Circulates only as a \"research reagent.\"", tone: "ok" },
      { country: "Sport", agency: "WADA", status: "Prohibited. TB-500 is historically notorious for doping cases, including equine doping.", tone: "alert" }
    ],
    community: { pending: true }
  },
  {
    slug: "ghk-cu",
    name: "GHK-Cu",
    altName: "Copper peptide",
    className: "COPPER PEPTIDE (GHK-Cu TRIPEPTIDE)",
    level: "B",
    summary: "The card that depends on the route: as a cream it has small human studies and a legitimate place in cosmetics. Injected — which is how the peptide market sells it — it has not a single human study.",
    levelNote: "LEVEL B · TOPICAL ROUTE ONLY — Small human studies with cosmetic endpoints. The injectable route: NO DATA.",
    ceiling: {
      state: "none",
      note: "Topical: cosmetic concentrations in creams and serums (studies used daily facial application for 8–12 weeks). Injectable: NO ceiling exists in humans. No published study. The edge of the map is at zero.",
      adverse: {
        pending: true,
        categories: ["route (topical vs subcutaneous vs microneedling)", "hair use", "product without a COA."]
      }
    },
    safety: [
      { kind: "relative", text: "Topical route", origin: "mechanism", detail: "Generally well tolerated as a cosmetic; local irritation possible." },
      { kind: "interaction", text: "Injectable route", origin: "mechanism", detail: "Blood pressure, copper load, interactions: nobody has measured them in people." },
      { kind: "watch", text: "Pregnancy and breastfeeding", origin: "mechanism", detail: "(any systemic route)" }
    ],
    claims: [
      { text: "Improves skin appearance (wrinkles, elasticity)", level: "B", n: 0, nh: 0, note: "Small controlled cream studies showed improvements versus vehicle. Industry funding and small samples: real but weak evidence." },
      { text: "Stimulates hair growth", level: "C", n: 0, nh: 0, note: "Preclinical work and commercial formulations; no published independent randomized trials." },
      { text: "Wound healing", level: "C", n: 0, nh: 0, note: "Broad animal base; human data limited to small series." },
      { text: "Resets\" gene expression / systemic anti-aging", level: "NO_DATA", n: 0, nh: 0, note: "The claim comes from in vitro gene expression studies. Nobody has demonstrated a systemic effect from injecting GHK-Cu into people." }
    ],
    study: { journal: "—", plain: "The best human data are 8–12 week facial cream studies: the treated side showed measurable improvements in elasticity and appearance versus the control side. None of that says what happens when the compound is injected.", limits: "Small samples, partly subjective cosmetic endpoints, and funding from the industry that sells the creams." },
    regulatory: [
      { country: "Topical Cosmetic", status: "Legal as a cosmetic ingredient. In Colombia, topical cosmetic peptides enter under Mandatory Health Notification (Andean Community Decision 516).", tone: "ok" },
      { country: "Injectable", agency: "UNITED STATES FDA", status: "Not approved. The injectable route was restricted from compounding in 2023 (Category 2) and included in the 2026 reclassification. No approved indication.", tone: "alert" },
      { country: "Colombia · Invima / Mexico", agency: "COFEPRIS", status: "Not registered as a medicine. The injectable circulates only as a \"research reagent.\"", tone: "grey" }
    ],
    community: { pending: true }
  },
  {
    slug: "kpv",
    name: "KPV",
    altName: "α-MSH 11-13",
    className: "ANTI-INFLAMMATORY TRIPEPTIDE (α-MSH FRAGMENT)",
    level: "C",
    summary: "Three amino acids with an elegant mechanistic story — and a blank human map. Everything claimed about KPV comes from cells, mice and colitis models.",
    levelNote: "LEVEL C — Preclinical evidence exclusively. Zero published randomized trials in humans.",
    ceiling: {
      state: "none",
      note: "DOES NOT EXIST in humans. No published study has established a dose, route or safety profile in people. The figures circulating (oral, topical, subcutaneous) come from no trial. The edge of the map is at zero.",
      adverse: {
        pending: true,
        categories: ["route (oral for gut vs topical vs injected)", "combination with BPC-157 in digestive protocols", "product without a COA."]
      }
    },
    safety: [
      { kind: "interaction", text: "Autoimmune disease under treatment", origin: "mechanism", detail: "It modulates the inflammatory response; interaction with immunomodulators has not been studied." },
      { kind: "interaction", text: "Pregnancy and breastfeeding", origin: "mechanism", detail: "Interactions — NO DATA AT ALL" }
    ],
    safetyNote: "No human safety base exists.",
    claims: [
      { text: "Reduces intestinal inflammation", level: "C", n: 0, nh: 0, note: "Consistent in animal colitis models. Zero human data." },
      { text: "Treats skin conditions (acne, eczema, psoriasis)", level: "C", n: 0, nh: 0, note: "Preclinical base and commercial topical formulations; no published controlled trials." },
      { text: "Antimicrobial", level: "C", n: 0, nh: 0, note: "Activity demonstrated in vitro. Not translated to humans." },
      { text: "Wound healing", level: "C", n: 0, nh: 0, note: "It is \"the anti-inflammatory part of α-MSH without the pigmentation effects\" — PLAUSIBLE MECHANISM The logic is real, and it is why the compound is interesting. Logic is not evidence." }
    ],
    study: { journal: "—", plain: "KPV is the terminal fragment of the hormone α-MSH. In cells and in mice it blocks key inflammatory pathways without causing skin darkening, the effect that limits the full molecule. Nobody has tested that in a person in a controlled study.", limits: "A three-amino-acid peptide with good theoretical bioavailability is still, in humans, an untested hypothesis." },
    regulatory: [
      { country: "United States", agency: "FDA", status: "Not approved. Restricted from compounding in 2023 (Category 2); included in the 2026 reclassification and committee review. No approved indication.", tone: "alert" },
      { country: "Colombia · Invima / Mexico", agency: "COFEPRIS", status: "No marketing authorization. Circulates as a \"research reagent.\"", tone: "ok" }
    ],
    community: { pending: true }
  },
  {
    slug: "ll-37",
    name: "LL-37",
    altName: "Cathelicidin",
    className: "ANTIMICROBIAL PEPTIDE (HUMAN CATHELICIDIN)",
    level: "C",
    summary: "The only one in this group the FDA kept restricted when it eased up on the others — and for concrete reasons, not paperwork. Your body makes it; that does not mean injecting it is safe.",
    levelNote: "LEVEL C — Abundant in vitro and preclinical evidence. Clinical trials remain in very early phases; no formulation has regulatory approval.",
    ceiling: {
      state: "none",
      note: "DOES NOT EXIST in humans for the subcutaneous route in circulation. There is no dosing protocol established from controlled clinical data. The figures shared in forums are anecdotal. The edge of the map is at zero.",
      adverse: {
        pending: true,
        categories: ["use for chronic infections or SIBO", "nebulized use", "local injection site reactions", "product without a COA."]
      }
    },
    safety: [
      { kind: "watch", text: "Effects on male fertility — SIGNAL STATED BY THE FDA", origin: "mechanism", detail: "Protumorigenic effects in some tissues — SIGNAL STATED BY THE FDA" },
      { kind: "watch", text: "Autoimmune or inflammatory disease (psoriasis, lupus, rheumatoid arthritis) — STRONG CAUTION", origin: "mechanism", detail: "The peptide is implicated in the pathophysiology of these conditions." },
      { kind: "watch", text: "Cytotoxicity — MECHANISM SIGNAL", origin: "mechanism", detail: "The concentrations that kill bacteria approach those that damage human cells." },
      { kind: "watch", text: "Pregnancy and breastfeeding", origin: "mechanism" }
    ],
    safetyNote: "No label exists. The following are the concerns the FDA itself named when keeping it restricted:",
    claims: [
      { text: "Kills bacteria, including resistant strains", level: "C", n: 0, nh: 0, note: "Very well demonstrated in a laboratory dish. Translation to humans runs into three known problems: it degrades quickly under proteases, it is cytotoxic at concentrations near the antimicrobial range, and it is expensive to produce." },
      { text: "Breaks up biofilms", level: "C", n: 0, nh: 0, note: "In vitro." },
      { text: "Heals wounds / improves skin", level: "C", n: 0, nh: 0, note: "Preclinical and skin barrier data; no conclusive trials." },
      { text: "Treats chronic infections in people", level: "NO_DATA", n: 0, nh: 0, note: "This is the use being sold and the one with no trials." },
      { text: "Critical point:", level: "NO_DATA", n: 0, nh: 0, note: "LL-37 is not simply \"the body's antibiotic.\" When it is overexpressed or in the wrong place, it participates in the inflammation of psoriasis, lupus, rheumatoid arthritis and several cancers. It is a documented double-edged sword." }
    ],
    study: { journal: "—", plain: "LL-37 is the only cathelicidin humans produce, released by neutrophils and epithelial cells in response to infection or injury. In the laboratory it destroys bacterial membranes with notable efficiency. That same mechanism, misdirected, damages the body's own cells — which is why no medicine based on it exists yet.", limits: "Decades of mechanistic research have produced no approval. The gap is not one of scientific interest: it is safety and stability." },
    regulatory: [
      { country: "United States", agency: "FDA", status: "Not approved. Placed in Category 2 in 2023 and kept there: it was not among the peptides released in the 2024–2026 reclassification, alongside melanotan II, GHRP-2, GHRP-6 and others. That is an important distinction within the catalog.", tone: "alert" },
      { country: "Colombia · Invima / Mexico", agency: "COFEPRIS", status: "No marketing authorization. Circulates as a \"research reagent.\"", tone: "ok" }
    ],
    community: { pending: true }
  },
  {
    slug: "mots-c",
    name: "MOTS-c",
    altName: "MOTS-c",
    className: "MITOCHONDRIAL PEPTIDE",
    level: "C",
    summary: "\"Exercise in a syringe,\" according to the marketing. According to the science: a fascinating peptide in mice, whose levels rise with exercise in humans — and zero efficacy trials in people.",
    levelNote: "LEVEL C — Animal and observational evidence. The only human clinical program (for an analog) stopped when the company shut down.",
    ceiling: {
      state: "none",
      note: "DOES NOT EXIST in humans for the MOTS-c in circulation. That your body makes more MOTS-c when you train says nothing about injecting the synthetic peptide. The edge of the map is at zero.",
      adverse: {
        pending: true,
        categories: ["\"pre-workout\" use", "combination with other metabolic compounds", "product without a COA."]
      }
    },
    safety: [
      { kind: "watch", text: "Diabetes or glucose-lowering medication — THEORETICAL CAUTION", origin: "mechanism", detail: "If it does in people what it does in mice, it would move glucose and insulin. Nobody has measured it." },
      { kind: "watch", text: "Pregnancy and breastfeeding", origin: "mechanism" }
    ],
    safetyNote: "No human safety base exists. Theoretical signals:",
    claims: [
      { text: "Improves metabolism and insulin sensitivity", level: "C", n: 0, nh: 0, note: "Consistent in mice, including high-fat-diet models. Zero human trials." },
      { text: "Mimics or enhances exercise", level: "C", n: 0, nh: 0, note: "In humans, all that has been observed is that endogenous levels rise with training — correlation, not treatment." },
      { text: "Helps with fat loss", level: "NO_DATA", n: 0, nh: 0, note: "Longevity / mitochondrial function — LEVEL C A real and interesting laboratory mechanism. No evidence of a clinical outcome in people." }
    ],
    study: { journal: "—", plain: "The furthest this compound got in humans was a phase 1 of a pharmaceutical analog for fatty liver and obesity. The company developing it wound down operations and never published efficacy data. Everything else is mouse, cell or correlation.", limits: "A clinical program dying for financial reasons does not prove the compound fails — but it leaves the human map exactly where it was: empty." },
    regulatory: [
      { country: "United States", agency: "FDA", status: "Not approved. Restricted from compounding in 2023 (Category 2); included in the 2026 reclassification and committee review. No approved indication.", tone: "alert" },
      { country: "Colombia · Invima / Mexico", agency: "COFEPRIS", status: "No marketing authorization. Circulates only as a \"research reagent.\"", tone: "ok" },
      { country: "Sport", agency: "WADA", status: "Prohibited (metabolic modulator). It will show up on a doping test.", tone: "alert" }
    ],
    community: { pending: true }
  },
  {
    slug: "ss-31",
    name: "SS-31 (Elamipretide)",
    altName: "Elamipretide",
    className: "MITOCHONDRIAL PEPTIDE (CARDIOLIPIN-TARGETED)",
    level: "A",
    summary: "The only mitochondrial peptide with FDA approval — earned in 2025, after two rejections, for an ultra-rare disease affecting about 150 people in the United States. That is the entire indication. Nothing sold as \"cellular energy\" is approved.",
    levelNote: "LEVEL A · FOR ITS APPROVED INDICATION — Accelerated approval based on an intermediate endpoint (knee extensor muscle strength) in Barth syndrome. For everything else: LEVEL B or NO DATA.",
    ceiling: {
      state: "established",
      dose: "40 mg",
      frequency: "per day",
      indication: "subcutaneous (TAZPOWER trial dose; the approved product is given to patients weighing 30 kg or more)",
      schedule: "A fixed daily dose, no titration, in a supervised clinical setting, in patients with a diagnosed genetic disease. There is no study of use in healthy adults for \"energy\" or performance.",
      adverse: {
        pending: true,
        categories: ["off-label use for longevity/performance", "approved versus \"research\" product", "injection site reactions."]
      }
    },
    safety: [
      { kind: "relative", text: "Injection site reactions — MOST FREQUENT ADVERSE EFFECT", origin: "trial", detail: "The most reported in the trials." },
      { kind: "relative", text: "Patients under 30 kg — OFF-LABEL", origin: "mechanism", detail: "The approval covers adults and pediatric patients of 30 kg or more; data is still being collected below that weight." },
      { kind: "watch", text: "Pregnancy and breastfeeding", origin: "mechanism", detail: "Use in people without mitochondrial disease — NO DATA AT ALL" }
    ],
    safetyNote: "An approved label exists, scoped to the indication:",
    claims: [
      { text: "Improves muscle strength in Barth syndrome", level: "A", n: 0, nh: 0, note: "The approved indication. Important: it was approved on an intermediate endpoint (knee extensor strength), and continued approval may be contingent on confirmatory trials verifying clinical benefit." },
      { text: "Treats primary mitochondrial myopathy", level: "NOT_SHOWN", n: 0, nh: 0, note: "The broader program did not produce an approval; research continues." },
      { text: "Treats dry macular degeneration — UNDER STUDY", level: "NO_DATA", n: 0, nh: 0, note: "No approval." },
      { text: "Improves energy, performance or longevity in healthy people", level: "NO_DATA", n: 0, nh: 0, note: "Zero trials. This is the use driving the gray market and the one without a single study." }
    ],
    study: { title: "TAZPOWER (NCT03098797) — elamipretide in Barth syndrome", journal: "Randomized, double-blind, placebo-controlled phase 2, with open-label extension · FDA accelerated approval (Forzinity), September", year: "2025", plain: "Barth syndrome is a rare genetic disease that damages the heart and muscle through mitochondrial dysfunction. In a randomized trial with a long-term extension, treated patients improved in muscle strength. With that data — and after two prior rejections — the FDA granted accelerated approval in September 2025. It was the first treatment for the disease and the first mitochondria-targeted drug ever approved.", limits: "The total population is about 150 people in the US. The trials are tiny by necessity. The approval rests on an intermediate marker, not a definitive clinical outcome — the manufacturer says so itself." },
    regulatory: [
      { country: "United States", agency: "FDA", status: "Approved via the accelerated pathway (Forzinity, September 2025) to improve muscle strength in Barth syndrome, in patients weighing 30 kg or more. Continued approval subject to verification in confirmatory trials. Any other use is off-label.", tone: "ok" },
      { country: "Europe", agency: "EMA", status: "Orphan drug designation for Barth syndrome; no marketing authorization.", tone: "ok" },
      { country: "Colombia · Invima / Mexico", agency: "COFEPRIS", status: "No marketing authorization. What is sold as \"research SS-31\" is not the approved product.", tone: "ok" }
    ],
    community: { pending: true }
  },
  {
    slug: "epitalon",
    name: "Epitalon",
    altName: "Epithalon",
    className: "SYNTHETIC PINEAL PEPTIDE (TETRAPEPTIDE)",
    level: "C",
    summary: "The peptide with the biggest claims in the catalog — extend life, extend telomeres — and the most fragile evidence: studies from a single group, mostly published in Russian, with no independent replication in three decades.",
    levelNote: "LEVEL C — Human studies exist, but nearly all come from the same laboratory, with methodology and reporting that do not meet current standards. No external replication.",
    ceiling: {
      state: "none",
      note: "Published protocols use short cycles (typically 10–20 days) repeated annually, at microgram to low-milligram doses. None of those figures comes from a modern controlled trial. Treating them as \"the protocol\" borrows an authority the studies do not have.",
      adverse: {
        pending: true,
        categories: ["cycle length", "annual frequency", "combination with other longevity protocols", "product without a COA."]
      }
    },
    safety: [
      { kind: "watch", text: "Active cancer — THEORETICAL CAUTION", origin: "mechanism", detail: "Any compound that modulates cell proliferation and telomerase warrants caution here. No data." },
      { kind: "interaction", text: "Pregnancy and breastfeeding", origin: "mechanism", detail: "Interactions — NO DATA AT ALL" }
    ],
    safetyNote: "No label and no modern safety base exist.",
    claims: [
      { text: "Extends life / reduces mortality", level: "C", n: 0, nh: 0, note: "Reported in Russian cohorts of older adults followed for years. No modern randomization, no verifiable blinding, no independent replication. It is the biggest claim with the weakest support." },
      { text: "Lengthens telomeres", level: "C", n: 0, nh: 0, note: "Observed in cell culture. Never demonstrated as a clinical outcome in humans." },
      { text: "Regulates melatonin and sleep", level: "C", n: 0, nh: 0, note: "Pineal mechanistic rationale; scarce human data." },
      { text: "General anti-aging", level: "NO_DATA", n: 0, nh: 0 }
    ],
    study: { journal: "—", plain: "The core evidence is follow-up studies in older Russian adults reporting lower mortality in the treated groups. They were published mostly in Russian journals, by the same group that developed the compound, and nobody has independently reproduced them in more than thirty years.", limits: "When a single laboratory produces all the positive evidence for a compound, that is a methodological red flag in any field — not proof that it is false, but a reason not to treat it as established." },
    regulatory: [
      { country: "United States", agency: "FDA", status: "Not approved. Restricted from compounding in 2023 (Category 2); included in the 2026 committee review. No approved indication.", tone: "alert" },
      { country: "Russia", status: "Related peptide products exist on the Russian market; that authorization is not equivalent to FDA, EMA, INVIMA or COFEPRIS approval.", tone: "ok" },
      { country: "Colombia · Invima / Mexico", agency: "COFEPRIS", status: "No marketing authorization. Circulates as a \"research reagent.\"", tone: "ok" }
    ],
    community: { pending: true }
  },
  {
    slug: "pinealon",
    name: "Pinealon",
    altName: "Pinealon",
    className: "BIOREGULATOR PEPTIDE (TRIPEPTIDE)",
    level: "C",
    summary: "From the same family and the same laboratory as Epitalon, with the same pattern: big claims about the brain, evidence almost entirely in Russian, from a single group, with no independent replication.",
    levelNote: "LEVEL C — Preclinical evidence and studies from a single research group. No independent randomized human trials.",
    ceiling: {
      state: "none",
      note: "DOES NOT EXIST in humans. No controlled study has established a dose, route or safety profile in people. The cycles in circulation (10–20 days, repeated) copy the Epitalon format, not a validated protocol. The edge of the map is at zero.",
      adverse: {
        pending: true,
        categories: ["combination with Epitalon and other bioregulators", "repeated cycles", "product without a COA."]
      }
    },
    safety: [
      { kind: "interaction", text: "Pregnancy and breastfeeding", origin: "mechanism", detail: "Interactions — NO DATA AT ALL" },
      { kind: "watch", text: "Long-term use", origin: "pharmacovigilance", detail: "The absence of reported adverse effects is not the same as demonstrated safety: where nobody has measured, nobody has found anything." }
    ],
    safetyNote: "No label and no human safety base exist.",
    claims: [
      { text: "Protects neurons / improves brain function", level: "C", n: 0, nh: 0, note: "Cell and animal models of hypoxia and oxidative stress. Zero controlled human data." },
      { text: "Improves memory and concentration", level: "NO_DATA", n: 0, nh: 0, note: "No cognitive trial in humans exists." },
      { text: "Regulates gene expression in the brain (\"peptide bioregulation\") — THE AUTHOR'S HYPOTHESIS", level: "NO_DATA", n: 0, nh: 0, note: "This is the theoretical framework of the laboratory that developed it, not an independently replicated finding." },
      { text: "Brain anti-aging", level: "NO_DATA", n: 0, nh: 0 }
    ],
    study: { journal: "—", plain: "All the relevant literature comes from the same Russian institute that created the family of short \"peptide bioregulators.\" The papers describe neuronal protection in cells and animals under stress. Nobody outside that group has reproduced it, and not one randomized trial in people exists.", limits: "When all of a compound's positive evidence comes from those who developed and commercialize it, the evidence is not nullified — but it cannot be treated as established either." },
    regulatory: [
      { country: "United States", agency: "FDA", status: "Not approved for any indication.", tone: "alert" },
      { country: "Russia", status: "Products from the bioregulator family exist on the Russian market; that status is not equivalent to FDA, EMA, INVIMA or COFEPRIS approval.", tone: "grey" },
      { country: "Colombia · Invima / Mexico", agency: "COFEPRIS", status: "No marketing authorization. Circulates as a \"research reagent.\"", tone: "ok" }
    ],
    community: { pending: true }
  },
  {
    slug: "nad",
    name: "NAD+",
    altName: "NMN / NR",
    className: "COENZYME — NOT A PEPTIDE",
    level: "B",
    summary: "It is in the catalog because it circulates inside the category, not because it belongs to it. And its card depends on the route: the oral precursors (NR, NMN) have real randomized trials; the IV NAD+ that clinics sell has almost none.",
    levelNote: "LEVEL B · ORAL PRECURSORS — Randomized trials showing it raises NAD+ in the blood. Clinical outcomes are another story. · LEVEL C · INTRAVENOUS NAD+ — tolerability pilots, no efficacy trials.",
    ceiling: {
      state: "range",
      note: "Oral: trials used ranges from hundreds to ~1000 mg daily of NR or NMN over weeks or months. Intravenous: published studies used ~500 mg infusions on consecutive days, measuring tolerability — not efficacy. No dose validated by clinical outcome exists.",
      adverse: {
        pending: true,
        categories: ["route (oral vs clinic IV)", "cost per session", "combination with other longevity protocols."]
      }
    },
    safety: [
      { kind: "relative", text: "IV infusion — TOLERABILITY", origin: "pharmacovigilance", detail: "Reports of moderate to severe gastrointestinal symptoms, increased heart rate and chest pressure during infusion, resolving on completion. This is why infusions are given slowly." },
      { kind: "watch", text: "Active cancer — THEORETICAL CAUTION", origin: "mechanism", detail: "NAD+ metabolism also fuels tumor cells; no clinical data resolves this." },
      { kind: "watch", text: "Pregnancy and breastfeeding", origin: "mechanism" }
    ],
    claims: [
      { text: "Raises NAD+ levels in the blood", level: "A", n: 0, nh: 0, note: "Well demonstrated and replicated. This is a laboratory marker, not a health benefit." },
      { text: "Improves energy and reverses aging", level: "NO_DATA", n: 0, nh: 0, note: "Human trials with clinical outcomes have been small and mixed. Several metabolic studies did not reproduce what is seen in animals." },
      { text: "Benefits in specific populations", level: "C", n: 0, nh: 0, note: "Preliminary signals in prediabetes, early Parkinson's and peripheral artery disease. Small studies, no large replication." },
      { text: "IV NAD+ reaches cells better than oral", level: "NOT_SHOWN", n: 0, nh: 0, note: "The NAD+ molecule is large and breaks down before entering the cell. The commercial premise of the IV route is not established." }
    ],
    study: { journal: "—", plain: "A 2026 study compared three NAD+ precursors in humans: NR and NMN doubled circulating NAD+ after 14 days; nicotinamide did not sustain it. That answers \"does the level go up?\" — it does not answer \"does it make you feel or live better,\" which is what is being sold.", limits: "Nearly all human research is short-term, with small samples and intermediate markers. A direct IV-versus-oral comparison on clinical outcomes does not exist." },
    regulatory: [
      { country: "Oral Precursors (Nr, Nmn)", status: "Sold as supplements in several markets; NMN's status in the US has been the subject of regulatory dispute.", tone: "grey" },
      { country: "Intravenous Nad+", status: "Not an approved medicine for any indication. Administered in clinics as a service, not as an authorized therapy.", tone: "ok" },
      { country: "Colombia · Invima / Mexico", agency: "COFEPRIS", status: "Not registered as a medicine for the indications being promoted.", tone: "grey" }
    ],
    community: { pending: true }
  },
  {
    slug: "semax",
    name: "Semax",
    altName: "ACTH 4-7 analog",
    className: "NEUROTROPHIC PEPTIDE (ACTH 4-7 ANALOG)",
    level: "B",
    summary: "It has been on Russia's List of Vital and Essential Medicines since 2011 — for stroke and optic nerve disorders, in hospitals, by prescription. In the West it is sold as a nootropic for healthy people, which is exactly the population it has never been studied in.",
    levelNote: "LEVEL B · WITH AN ASTERISK — Human trials exist for specific neurological indications, almost all Russian and without Western replication. For cognitive use in healthy people: NO DATA.",
    ceiling: {
      state: "none",
      note: "Russian clinical protocols use intranasal administration in hospital settings, with high doses in acute stroke and low doses in outpatient use. For the daily nootropic use circulating outside Russia, no validated dose exists and no long-term data.",
      adverse: {
        pending: true,
        categories: ["variants (Semax vs N-Acetyl-Semax vs amidated)", "stack with Selank", "continuous use", "product without a COA."]
      }
    },
    safety: [
      { kind: "watch", text: "Use alongside psychiatric medication — CAUTION", origin: "mechanism", detail: "Given its dopaminergic and serotonergic activity, combination with SSRIs, MAOIs, antipsychotics or stimulants has not been studied and warrants medical supervision." },
      { kind: "watch", text: "Anxiety or restlessness — REPORTED SIGNAL", origin: "mechanism", detail: "More likely at higher doses, via the dopaminergic pathway." },
      { kind: "relative", text: "Insomnia", origin: "pharmacovigilance", detail: "reported with late-in-the-day administration." },
      { kind: "watch", text: "Pregnancy and breastfeeding", origin: "mechanism", detail: "Long-term use — NO DATA" }
    ],
    claims: [
      { text: "Helps recovery after ischemic stroke", level: "B", n: 0, nh: 0, note: "Russian trials with accelerated functional recovery and increased BDNF. It is the registered indication." },
      { text: "Treats optic nerve pathology", level: "B", n: 0, nh: 0, note: "A registered indication in Russia." },
      { text: "Improves memory, focus and cognition in healthy people", level: "NO_DATA", n: 0, nh: 0, note: "No controlled trial of cognitive enhancement in a healthy population exists. It is the dominant use in the West and the one with no support." },
      { text: "Raises BDNF", level: "B", n: 0, nh: 0, note: "Measured in humans. A biological marker, not a clinical outcome." },
      { text: "Works for ADHD — HYPOTHESIS", level: "NO_DATA", n: 0, nh: 0, note: "A hypothesis paper exists in the literature; no clinical trial." }
    ],
    study: { journal: "—", plain: "The strongest human study followed about 110 patients in rehabilitation after a stroke and reported better functional recovery along with increased BDNF in blood. That is a hospital setting, with sick patients and medical supervision — nothing like a healthy adult using it to concentrate at work.", limits: "Literature almost exclusively Russian, concentrated in few groups, with publication standards different from those the FDA requires. No registered Western trial." },
    regulatory: [
      { country: "Russia", status: "Registered medicine (ischemic stroke, optic nerve pathology); on the List of Vital and Essential Medicines.", tone: "grey" },
      { country: "United States", agency: "FDA", status: "Not approved, never submitted for review. Restricted from compounding in 2023 (Category 2); included in the 2026 committee review.", tone: "alert" },
      { country: "Europe", agency: "EMA", status: "No authorization.", tone: "grey" },
      { country: "Colombia · Invima / Mexico", agency: "COFEPRIS", status: "No marketing authorization. Circulates as a \"research reagent.\"", tone: "ok" }
    ],
    community: { pending: true }
  },
  {
    slug: "selank",
    name: "Selank",
    altName: "Tuftsin analog",
    className: "ANXIOLYTIC PEPTIDE (TUFTSIN ANALOG)",
    level: "B",
    summary: "A real medicine — in Russia. Registered as an anxiolytic, with published trials comparing it to benzodiazepines. Outside Russia: a research compound whose evidence nobody has replicated.",
    levelNote: "LEVEL B · WITH AN ASTERISK — Human clinical trials exist and report an anxiolytic effect. Almost all the literature is Russian, from few groups, with small samples and no Western replication.",
    ceiling: {
      state: "none",
      note: "The Russian trials used daily intranasal administration for 2 to 4 weeks, at milligram-range doses. Outside those protocols no validated dose exists, and no long-term data.",
      adverse: {
        pending: true,
        categories: ["stack with Semax", "continuous versus cycled use", "product without a COA."]
      }
    },
    safety: [
      { kind: "interaction", text: "Use alongside psychiatric medication", origin: "mechanism", detail: "Interaction with SSRIs, benzodiazepines or other anxiolytics has not been studied." },
      { kind: "watch", text: "Pregnancy and breastfeeding", origin: "trial", detail: "Long-term use — NO DATA The trials lasted weeks, not years." },
      { kind: "relative", text: "Nasal irritation", origin: "pharmacovigilance", detail: "the most reported adverse effect of the intranasal route." }
    ],
    claims: [
      { text: "Reduces anxiety", level: "B", n: 0, nh: 0, note: "Russian trials in generalized anxiety disorder, including a comparison with a benzodiazepine. It is the registered indication and the best-supported claim." },
      { text: "Reduces fatigue / neurasthenia", level: "B", n: 0, nh: 0, note: "A registered indication in Russia; the neurasthenia diagnosis does not exist in current US diagnostic criteria." },
      { text: "Improves memory and focus in healthy people", level: "NO_DATA", n: 0, nh: 0, note: "No trial of cognitive enhancement in a healthy population. It is the main use in the West and the least supported." },
      { text: "Modulates the immune system", level: "C", n: 0, nh: 0, note: "Inherits tuftsin biology; preclinical data." }
    ],
    study: { journal: "—", plain: "The most cited study followed 62 patients with anxiety and reported a reduction comparable to a benzodiazepine, without the characteristic sedation. It is an interesting result — with a small sample, in a single country, and nobody outside it has reproduced it.", limits: "Placebo response rates in anxiety trials commonly run 30–40%, which makes small samples without rigorous blinding especially fragile." },
    regulatory: [
      { country: "Russia", status: "Registered as a prescription anxiolytic medicine.", tone: "grey" },
      { country: "United States", agency: "FDA", status: "Not approved. Removed from the Category 2 list in 2024 when nominations were withdrawn; that is not approval.", tone: "alert" },
      { country: "Europe", agency: "EMA", status: "No authorization.", tone: "grey" },
      { country: "Colombia · Invima / Mexico", agency: "COFEPRIS", status: "No marketing authorization. Circulates as a \"research reagent.\"", tone: "ok" }
    ],
    community: { pending: true }
  },
  {
    slug: "dsip",
    name: "DSIP",
    altName: "Delta Sleep-Inducing Peptide",
    className: "SLEEP PEPTIDE (EMIDELTIDE)",
    level: "C",
    summary: "It is called \"delta sleep-inducing peptide,\" and that name does almost all the marketing work. The human evidence is from the 1970s and 80s, small, inconsistent — and it is not even clear that it induces sleep.",
    levelNote: "LEVEL C — Old, small human studies with inconsistent results. No modern randomized trial.",
    ceiling: {
      state: "none",
      note: "The old studies used intravenous administration in a clinical setting, at microgram-per-kilogram doses. No validated protocol exists for the nighttime subcutaneous use circulating today, and no data on repeated use. The edge of the map froze forty years ago.",
      adverse: {
        pending: true,
        categories: ["nighttime use for insomnia", "combination with other sleep compounds", "product without a COA."]
      }
    },
    safety: [
      { kind: "interaction", text: "Use alongside sedatives, alcohol or hypnotics", origin: "mechanism", detail: "Interaction not studied; obvious caution given the intended effect." },
      { kind: "watch", text: "Pregnancy and breastfeeding", origin: "mechanism", detail: "Long-term use — NO DATA AT ALL" }
    ],
    safetyNote: "No label and no modern safety base exist.",
    claims: [
      { text: "Induces deep (delta) sleep", level: "C", n: 0, nh: 0, note: "That is its name, not its result. Human studies did not consistently confirm that it increases slow-wave sleep. Later work even questioned whether it is a sleep peptide at all." },
      { text: "Reduces chronic pain", level: "C", n: 0, nh: 0, note: "Reported in small old case series." },
      { text: "Helps with alcohol and opioid withdrawal", level: "C", n: 0, nh: 0, note: "The line of research with the most signal in the old studies; never developed." },
      { text: "Reduces stress / normalizes blood pressure", level: "NO_DATA", n: 0, nh: 0 }
    ],
    study: { journal: "—", plain: "The compound was isolated in 1977 after researchers observed that a blood extract from rabbits in induced sleep produced delta sleep in other animals. Attempts to reproduce that effect in humans, decades ago, gave uneven results, and the research stopped. What is sold today rests on that name and on anecdotal reports.", limits: "Forty years without a modern trial is itself a data point: no group has considered it worth confirming." },
    regulatory: [
      { country: "United States", agency: "FDA", status: "Not approved. Restricted from compounding in 2023 (Category 2); in 2026 it came under compounding committee review as \"emideltide.\" Review is not approval.", tone: "alert" },
      { country: "Colombia · Invima / Mexico", agency: "COFEPRIS", status: "No marketing authorization. Circulates as a \"research reagent.\"", tone: "ok" }
    ],
    community: { pending: true }
  },
  {
    slug: "pt-141",
    name: "PT-141 (Bremelanotide)",
    altName: "Bremelanotide · Vyleesi",
    className: "MELANOCORTIN RECEPTOR AGONIST",
    level: "A",
    summary: "One of the few in the catalog with FDA approval — but for a very specific indication: hypoactive sexual desire disorder in premenopausal women. Male use, which is nearly the whole market, is off-label and stopped at phase 2.",
    levelNote: "LEVEL A · FOR ITS APPROVED INDICATION — Randomized phase 3, published, FDA-approved (2019). For use in men: LEVEL B, unapproved.",
    ceiling: {
      state: "established",
      dose: "1.75 mg",
      frequency: "per dose",
      indication: "subcutaneous, as needed (autoinjector)",
      schedule: "At least 45 minutes before anticipated sexual activity. No more than one dose per 24 hours and no more than ~8 doses per month. In the trials, average use was 2 to 3 times per month. More frequent use increases the risk of hyperpigmentation.",
      adverse: {
        pending: true,
        categories: ["off-label male use", "frequency above the label limit", "original versus \"research\" product", "combination with PDE5 inhibitors."]
      }
    },
    safety: [
      { kind: "absolute", text: "Uncontrolled hypertension or cardiovascular disease — DO NOT USE / CAUTION", origin: "label", detail: "It produces transient blood pressure elevations. Approved product label" },
      { kind: "absolute", text: "Pregnancy — DO NOT USE", origin: "label", detail: "Approved product label" },
      { kind: "relative", text: "Nausea — MAIN ADVERSE EFFECT", origin: "trial", detail: "The most frequent in the trials and the most common cause of discontinuation." },
      { kind: "watch", text: "Hyperpigmentation (darkening of skin or gums) — LABEL SIGNAL", origin: "mechanism", detail: "Higher risk with frequent use; may not be reversible. This is the reason for the monthly limit." },
      { kind: "interaction", text: "Oral naltrexone — INTERACTION", origin: "label", detail: "May reduce its levels. Approved product label" }
    ],
    safetyNote: "There is an approved label here.",
    claims: [
      { text: "Increases sexual desire in premenopausal women with HSDD", level: "A", n: 0, nh: 0, note: "Phase 3: statistically significant improvement in the desire domain versus placebo. The absolute difference is modest — real, measured and approved, but not spectacular." },
      { text: "Treats erectile dysfunction in men", level: "B", n: 0, nh: 0, note: "Phase 2 data, including PDE5 non-responders. Never taken to phase 3 and never submitted for approval." },
      { text: "Acts on desire, not on blood flow", level: "A", n: 0, nh: 0, note: "This is the real difference from Viagra/Cialis: it acts in the central nervous system via melanocortin receptors." },
      { text: "Works in postmenopausal women", level: "NO_DATA", n: 0, nh: 0, note: "All the phase 3 evidence is in premenopausal women." }
    ],
    study: {
      title: "RECONNECT program — Bremelanotide for HSDD in premenopausal women",
      journal: "Obstetrics & Gynecology",
      year: "2019",
      n: "Two randomized, double-blind, placebo-controlled trials · ~1,247 participants",
      plain: "Two phase 3 trials with more than 1,200 premenopausal women with hypoactive sexual desire showed a significant improvement on desire scales versus placebo. The magnitude of the change was modest, and on that basis the FDA approved the drug in 2019.",
      limits: "The mean effect is small in absolute terms, and nausea drove discontinuations in the trials. Strictly premenopausal population. Manufacturer-funded."
    },
    regulatory: [
      { country: "United States", agency: "FDA", status: "Approved (Vyleesi, June 2019) for acquired, generalized hypoactive sexual desire disorder in premenopausal women. No approved generic. Any use in men is off-label.", tone: "ok" },
      { country: "Europe", agency: "EMA / CANADA / UNITED KINGDOM", status: "No marketing authorization.", tone: "ok" },
      { country: "Colombia · Invima / Mexico", agency: "COFEPRIS", status: "No known marketing authorization. What circulates as \"research PT-141\" is not the approved product and passes through no pharmaceutical control.", tone: "ok" }
    ],
    community: { pending: true }
  },
  {
    slug: "kisspeptin-10",
    name: "Kisspeptin-10",
    altName: "KP-10",
    className: "REPRODUCTIVE AXIS NEUROPEPTIDE",
    level: "B",
    summary: "Real academic research — phase 1 and 2 at a London university hospital — with two caveats the market never mentions: almost all the evidence comes from a single center, and the fragment being sold (the -10) has a half-life of minutes.",
    levelNote: "LEVEL B — Phase 1 and 2 human trials, published and of good quality. No phase 3, no broad independent replication, and mostly with kisspeptin-54, not the -10.",
    ceiling: {
      state: "none",
      note: "Published trials used intravenous administration (bolus or infusion) calculated by body weight, in a hospital setting. Kisspeptin-10's half-life is about 4 minutes — which is why studies infuse it into a vein. The occasional subcutaneous injections being sold reproduce no studied condition.",
      adverse: {
        pending: true,
        categories: ["use as \"PCT\" or for testosterone", "use for libido", "route (subcutaneous versus the studied IV)", "product without a COA."]
      }
    },
    safety: [
      { kind: "watch", text: "Hormone-dependent cancer — THEORETICAL CAUTION", origin: "mechanism", detail: "It activates the entire reproductive axis and therefore sex hormone production." },
      { kind: "watch", text: "Pregnancy", origin: "trial", detail: "Repeated or prolonged use — NO DATA The trials were single administrations or short infusions in a hospital setting." }
    ],
    safetyNote: "No approved label exists.",
    claims: [
      { text: "Stimulates LH and activates the reproductive axis", level: "A", n: 0, nh: 0, note: "Demonstrated and replicated in humans. This is a hormone marker, not a clinical outcome." },
      { text: "Ovulation trigger in IVF without hyperstimulation syndrome", level: "B", n: 0, nh: 0, note: "The program's most valuable finding: phase 2 with zero cases of OHSS. With kisspeptin-54, in a hospital protocol." },
      { text: "Improves sexual desire", level: "B", n: 0, nh: 0, note: "Brain imaging studies in people with low desire, with positive signals. Small samples." },
      { text: "Raises testosterone / works as \"PCT\" after a cycle", level: "NO_DATA", n: 0, nh: 0, note: "No trial has tested axis recovery after steroid suppression. It is the most-sold use in forums and the one without a single study." }
    ],
    study: { journal: "—", plain: "The strongest clinical program tested kisspeptin as a trigger for egg maturation in IVF. It worked, and without causing ovarian hyperstimulation syndrome — a serious complication of conventional triggers. All of it happened in a hospital, intravenously, under medical supervision.", limits: "Nearly the entire clinical body of work comes from a single group at Imperial College London: no broad independent replication, no phase 3, and the -10 fragment is limited by its half-life of minutes." },
    regulatory: [
      { country: "United States", agency: "FDA", status: "Not approved for any indication. Restricted from compounding in 2023 (Category 2); included in the 2026 reclassification. It remains a compound in clinical research.", tone: "alert" },
      { country: "Colombia · Invima / Mexico", agency: "COFEPRIS", status: "No marketing authorization. Circulates as a \"research reagent.\"", tone: "ok" }
    ],
    community: { pending: true }
  },
  {
    slug: "thymosin-alpha-1",
    name: "Thymosin Alpha-1 (Tα1)",
    altName: "Thymalfasin · Zadaxin",
    className: "THYMIC IMMUNOMODULATORY PEPTIDE",
    level: "A",
    summary: "The best-validated peptide in the catalog that almost nobody knows: it is an approved medicine in more than 35 countries since the 1990s — just not in the United States. Its absence from the FDA is commercial, not scientific.",
    levelNote: "LEVEL A · FOR ITS APPROVED INDICATION — Published randomized trials in chronic hepatitis B, with regulatory approval in dozens of countries. For the \"wellness\" uses being sold: LEVEL C.",
    ceiling: {
      state: "established",
      dose: "1.6 mg",
      frequency: "twice weekly",
      indication: "subcutaneous (standard dose in the trials and on the international Zadaxin label)",
      schedule: "This is one of the few compounds in this group where the \"ceiling\" comes from a real label, not a forum.",
      adverse: {
        pending: true,
        categories: ["\"immune support\" use without an indication", "original versus compounded versus research product", "cycle length."]
      }
    },
    safety: [
      { kind: "watch", text: "Active autoimmune disease — CAUTION", origin: "mechanism", detail: "It modulates the immune response upward: theoretical risk of flare." },
      { kind: "watch", text: "Organ transplant / immunosuppression — STRONG CAUTION", origin: "mechanism", detail: "May work against the goal of immunosuppressive treatment." },
      { kind: "watch", text: "Pregnancy and breastfeeding", origin: "mechanism", detail: "Tolerability profile — CLEAN Decades of clinical use with a low adverse-event rate; the most common issue is an injection site reaction." }
    ],
    safetyNote: "An international label exists; a US one does not.",
    claims: [
      { text: "Treats chronic hepatitis B", level: "A", n: 0, nh: 0, note: "Approved indication in 35+ countries. Phase 3 with sustained virologic response superior to placebo." },
      { text: "Adjunct in oncology and immunosuppression", level: "B", n: 0, nh: 0, note: "Established clinical use in several countries (China, Italy and others) with trials of variable quality." },
      { text: "Improves vaccine response", level: "B", n: 0, nh: 0, note: "An approved indication in some markets." },
      { text: "Sepsis and COVID-19 — MIXED RESULTS", level: "NO_DATA", n: 0, nh: 0, note: "Pandemic-era studies with inconsistent signals; nothing conclusive." },
      { text: "Boosts the immune system\" in healthy people", level: "NO_DATA", n: 0, nh: 0, note: "All of its evidence is in populations with disease. It is a modulator, not a generic booster — and in healthy people it was never tested." }
    ],
    study: { title: "Thymalfasin (thymosin alpha-1) trials in chronic hepatitis B", journal: "Pivotal program · randomized and controlled · Approved as Zadaxin in 35+ countries", plain: "Randomized trials in patients with chronic hepatitis B showed that a significantly larger share of the treated group achieved sustained control of the virus versus control. On that basis it was approved as a medicine (Zadaxin) in dozens of countries.", limits: "The absence of approval in the US and centrally in Europe reflects commercial development decisions more than a safety rejection. Even so, without FDA/EMA review there is no Western label standard for its use." },
    regulatory: [
      { country: "International", status: "Approved as Zadaxin/thymalfasin in more than 35 countries (China, Italy, India, the Philippines, several in Latin America and the Middle East) for chronic hepatitis B and oncology immunomodulation.", tone: "ok" },
      { country: "United States", agency: "FDA", status: "Not approved. Holds orphan drug designation for some indications. Restricted from compounding in 2023; included in the 2026 reclassification.", tone: "alert" },
      { country: "Europe", agency: "EMA", status: "No centralized approval, despite clinical use in Italy.", tone: "grey" },
      { country: "Colombia · Invima / Mexico", agency: "COFEPRIS", status: "Verify local registration: approval elsewhere does not imply registration here. What is sold as \"research grade\" is not the approved product.", tone: "ok" }
    ],
    community: { pending: true }
  },
  {
    slug: "wolverine",
    name: "Wolverine Stack (BPC-157 + TB-500)",
    altName: "BPC-157 + TB-500",
    className: "BLEND — NO EVIDENCE LEVEL",
    levelNote: "NO LEVEL — This card shows no evidence level for the blend, because no literature on the blend exists. Not one study has tested this combination as such — not in humans, not in animals, not in cells. Showing a level here would invent an authority nobody has earned. What we can show is what it is made of and what level each part holds on its own.",
    isBlend: true,
    components: [
      { text: "BPC-157", levelTag: "LEVEL C", note: "More than 100 preclinical studies, zero published randomized trials in humans. Studied ceiling in humans: does not exist." },
      { text: "TB-500 (thymosin beta-4 fragment)", levelTag: "LEVEL C", note: "The family's human trials used ophthalmic drops of the parent molecule, not the injectable fragment. Studied ceiling for the injectable: does not exist." }
    ],
    blendNote: "Combining two compounds without data does not add two bodies of evidence: it multiplies the unknowns. If an adverse effect appears, there is no way to know which one caused it. If a benefit appears, the same is true. And each component's theoretical signals stack: both promote angiogenesis in animal models, the same mechanism that raises concern in the presence of active cancer. That caution is not diluted by mixing — it is reinforced. ",
    safety: [
      { kind: "watch", text: "Active cancer or recent history", origin: "mechanism", detail: "Both components promote angiogenesis and cell migration in models." },
      { kind: "interaction", text: "Pregnancy and breastfeeding", origin: "mechanism", detail: "Interactions — NO DATA AT ALL" }
    ],
    safetyNote: "Each component's apply, added together:",
    claims: [
      { text: "They potentiate each other\" (synergy)", level: "NO_DATA", n: 0, nh: 0, note: "Synergy is a measurable claim, and nobody has measured it. Two compounds with animal evidence do not automatically produce a combined effect." },
      { text: "Speeds injury recovery", level: "NO_DATA", n: 0, nh: 0, note: "Each component has separate animal evidence. The combination has none." },
      { text: "It is \"the standard recovery protocol\" — COMMUNITY REPORTING", level: "NO_DATA", n: 0, nh: 0, note: "Its popularity comes from the name and word of mouth, not from a study." }
    ],
    regulatory: [
      { country: "Sport", agency: "WADA", status: "Both components are prohibited.", tone: "alert" }
    ],
    regulatoryNote: "No authority has evaluated this combination, because it does not exist as a regulated product in any country. Both components were restricted from US compounding in 2023 and included in the 2026 review — separately, never as a blend.",
    community: { pending: true }
  },
  {
    slug: "glow",
    name: "GLOW (GHK-Cu + BPC-157 + TB-500)",
    altName: "GHK-Cu + BPC-157 + TB-500",
    className: "BLEND — NO EVIDENCE LEVEL",
    levelNote: "NO LEVEL — This card shows no evidence level for the blend, because no literature on the blend exists. Zero studies have tested this three-compound combination — in any species. What we can show: what it is made of, what level each part holds, and one detail almost nobody mentions.",
    isBlend: true,
    components: [
      { text: "GHK-Cu", levelTag: "LEVEL B (topical route only) · NO DATA (injectable)", note: "Here is the critical point: GHK-Cu's human evidence is from facial cream. In GLOW it is injected, which is precisely the route with no human studies at all. The blend's cosmetic promise rests on data from a route the blend does not use." },
      { text: "BPC-157", levelTag: "LEVEL C", note: "More than 100 preclinical studies, zero randomized trials in humans." },
      { text: "TB-500", levelTag: "LEVEL C", note: "Human trials only with the parent molecule as eye drops, not with the injectable fragment." }
    ],
    blendNote: "Three compounds without combined data do not give three times the confidence: they give three variables that cannot be separated. If something works, you will not know which one. If something goes wrong, the same. And a problem of its own is added here: copper. A repeated systemic injection of a copper compound raises load questions nobody has measured in people. ",
    safety: [
      { kind: "watch", text: "Active cancer or recent history", origin: "mechanism", detail: "BPC-157 and TB-500 promote angiogenesis in models." },
      { kind: "watch", text: "Copper load / blood pressure", origin: "mechanism", detail: "The injectable route of GHK-Cu has never been studied in humans." },
      { kind: "interaction", text: "Pregnancy and breastfeeding", origin: "mechanism", detail: "Interactions — NO DATA AT ALL" }
    ],
    safetyNote: "Each component's apply, added together:",
    claims: [
      { text: "Improves skin, hair and scars", level: "NO_DATA", n: 0, nh: 0, note: "The skin evidence being cited is from topical GHK-Cu, in creams, with cosmetic endpoints. It does not transfer to an injection of three compounds." },
      { text: "Combines internal and external repair", level: "NO_DATA", n: 0, nh: 0, note: "A marketing narrative, not a finding." },
      { text: "Synergy\" among the three", level: "NO_DATA", n: 0, nh: 0 }
    ],
    regulatory: [
      { country: "Sport", agency: "WADA", status: "BPC-157 and TB-500 are prohibited.", tone: "alert" }
    ],
    regulatoryNote: "No authority has evaluated this combination: it does not exist as a regulated product in any country. All three components were restricted from US compounding in 2023 and included in the 2026 review — separately, never as a blend. Topical GHK-Cu does have a legal cosmetic route; the injectable in this blend does not.",
    community: { pending: true }
  },
  {
    slug: "klow",
    name: "KLOW (GHK-Cu + BPC-157 + TB-500 + KPV)",
    altName: "GHK-Cu + BPC-157 + TB-500 + KPV",
    className: "BLEND — NO EVIDENCE LEVEL",
    levelNote: "NO LEVEL — This card shows no evidence level for the blend, because no literature on the blend exists. Zero studies have tested this four-compound combination — in any species. It is GLOW with KPV added. And that addition is precisely the component with the emptiest human map of the four.",
    isBlend: true,
    components: [
      { text: "KPV", levelTag: "LEVEL C", note: "Evidence exclusively preclinical: cells and mice. Zero published human clinical trials, by any route. This is what separates KLOW from GLOW." },
      { text: "GHK-Cu", levelTag: "LEVEL B (topical) · NO DATA (injectable)", note: "The human evidence is from facial cream; here it is injected." },
      { text: "BPC-157", levelTag: "LEVEL C", note: "More than 100 preclinical studies, zero randomized trials in humans." },
      { text: "TB-500", levelTag: "LEVEL C", note: "Human trials only with the parent molecule as eye drops." }
    ],
    blendNote: "Four compounds in one syringe are four variables that cannot be separated. No combination in this catalog has been studied as a whole, and the four-part one is the most opaque of all: if there is a reaction, there are four suspects and no way to know which. This is also why Evidence never assigns a level to a blend. It is the rule that keeps the product from becoming the thing it criticizes. ",
    safety: [
      { kind: "watch", text: "Active cancer or recent history", origin: "mechanism", detail: "BPC-157 and TB-500 promote angiogenesis in models." },
      { kind: "watch", text: "Copper load / blood pressure", origin: "mechanism", detail: "The injectable route of GHK-Cu has never been studied in humans." },
      { kind: "interaction", text: "Autoimmune disease under treatment", origin: "mechanism", detail: "KPV modulates the inflammatory response; interaction with immunomodulators has not been studied." },
      { kind: "interaction", text: "Pregnancy and breastfeeding", origin: "mechanism", detail: "Interactions — NO DATA AT ALL" }
    ],
    safetyNote: "All four components' apply, added together:",
    claims: [
      { text: "Adds an anti-inflammatory effect to GLOW", level: "NO_DATA", n: 0, nh: 0, note: "KPV's anti-inflammatory effect is documented in mice with colitis, not in people and not in this combination." },
      { text: "Better for inflamed skin, gut and recovery", level: "NO_DATA", n: 0, nh: 0, note: "\"It's the complete version\" — PRODUCT LOGIC, NOT EVIDENCE LOGIC Adding a fourth compound with no human data completes nothing: it widens the unmapped zone." }
    ],
    regulatory: [
      { country: "Sport", agency: "WADA", status: "BPC-157 and TB-500 are prohibited.", tone: "alert" }
    ],
    regulatoryNote: "No authority has evaluated this combination: it does not exist as a regulated product in any country. All four components were restricted from US compounding in 2023 and included in the 2026 review — separately, never as a blend.",
    community: { pending: true }
  },
];
