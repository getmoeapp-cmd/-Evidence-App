import React, { useState, useEffect } from "react";
import { C } from "./theme.js";
import { UI } from "./i18n.js";
import { SECTIONS } from "./i18n.sections.js";
import { PEPTIDOS_ES } from "./data/es.js";
import { PEPTIDES_EN } from "./data/en.js";
import { GOALS } from "./data/goals.js";

import Peptides from "./sections/Peptides.jsx";
import ByGoal from "./sections/ByGoal.jsx";
import Verify from "./sections/Verify.jsx";
import Report from "./sections/Report.jsx";

const DATA = { es: PEPTIDOS_ES, en: PEPTIDES_EN };
const TABS = ["peptides", "goals", "verify", "report"];

export default function App() {
  const [lang, setLang] = useState(() => {
    try { return localStorage.getItem("evidence-lang") || "es"; } catch { return "es"; }
  });
  const [tab, setTab] = useState("peptides");

  useEffect(() => {
    try { localStorage.setItem("evidence-lang", lang); } catch {}
    document.documentElement.lang = lang;
  }, [lang]);

  const t = { ...UI[lang], ...SECTIONS[lang] };
  const list = DATA[lang];
  const goals = GOALS[lang];

  return (
    <div style={{ background: C.paper, minHeight: "100vh", color: C.inkDeep }}>
      <style>{`
        .ev-btn:focus-visible, .ev-row:focus-visible, .ev-input:focus-visible, .ev-tab:focus-visible {
          outline: 2px solid ${C.ink}; outline-offset: 2px;
        }
        .ev-btn, .ev-tab { transition: background 160ms ease, color 160ms ease, border-color 160ms ease; }
        .ev-row:hover { background: ${C.paperDeep} !important; }
        .ev-input { outline: none; }
        .ev-input:focus { border-color: ${C.ink} !important; }
        .ev-shell { max-width: 1080px; margin: 0 auto; padding: 0 20px 96px; }

        /* Selector de idioma fijo arriba a la derecha */
        .ev-lang {
          position: fixed; top: 14px; right: 16px; z-index: 40;
          display: flex; border: 1px solid ${C.rule}; border-radius: 2px;
          overflow: hidden; background: ${C.paper};
          box-shadow: 0 1px 3px rgba(18,40,61,.06);
        }

        /* Pestañas: barra inferior en móvil, en línea en escritorio */
        .ev-tabs {
          display: flex; gap: 2px;
          border-bottom: 1px solid ${C.rule};
          margin-bottom: 30px;
        }
        @media (max-width: 720px) {
          .ev-tabs {
            position: fixed; bottom: 0; left: 0; right: 0; z-index: 30;
            background: ${C.paper}; border-top: 1px solid ${C.rule}; border-bottom: none;
            margin: 0; padding: 4px 6px calc(4px + env(safe-area-inset-bottom));
            justify-content: space-around;
          }
          .ev-tab { flex: 1; text-align: center; }
          .ev-axes { grid-template-columns: 1fr !important; }
          .ev-axes > div:nth-child(2) { height: 1px; width: 100%; }
          .ev-claim { grid-template-columns: minmax(0,1fr) 72px !important; }
          .ev-claim-meta { grid-column: 1 / -1; text-align: left !important; }
        }
      `}</style>

      {/* Idioma — fijo, esquina superior derecha */}
      <div className="ev-lang">
        {["es", "en"].map((code) => (
          <button
            key={code}
            className="ev-btn"
            onClick={() => setLang(code)}
            aria-pressed={lang === code}
            aria-label={code === "es" ? "Español" : "English"}
            style={{
              fontFamily: "'Jost', sans-serif", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase",
              padding: "7px 12px", border: "none", cursor: "pointer",
              background: lang === code ? C.ink : "transparent",
              color: lang === code ? C.paper : C.muted,
            }}
          >
            {code}
          </button>
        ))}
      </div>

      <div className="ev-shell">
        <header style={{ paddingTop: 26, paddingBottom: 18, paddingRight: 96 }}>
          <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 19, letterSpacing: "0.42em", color: C.ink }}>EVIDENCE</div>
          <div style={{ fontSize: 12.5, color: C.muted, marginTop: 7, maxWidth: 420, lineHeight: 1.5 }}>{t.tagline}</div>
        </header>

        <nav className="ev-tabs" role="tablist">
          {TABS.map((key) => {
            const active = tab === key;
            return (
              <button
                key={key}
                role="tab"
                aria-selected={active}
                className="ev-tab ev-btn"
                onClick={() => setTab(key)}
                style={{
                  fontFamily: "'Jost', sans-serif", fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase",
                  padding: "11px 16px", cursor: "pointer", background: "transparent",
                  border: "none", borderBottom: `2px solid ${active ? C.ink : "transparent"}`,
                  color: active ? C.ink : C.muted,
                }}
              >
                {t.nav[key]}
              </button>
            );
          })}
        </nav>

        <main>
          {tab === "peptides" && <Peptides list={list} t={t} />}
          {tab === "goals" && <ByGoal goals={goals} list={list} t={t} />}
          {tab === "verify" && <Verify t={t} />}
          {tab === "report" && <Report list={list} t={t} />}
        </main>

        <footer style={{ marginTop: 56, paddingTop: 18, borderTop: `1px solid ${C.rule}`, fontSize: 11.5, color: C.muted, lineHeight: 1.6 }}>
          {t.footer}
        </footer>
      </div>
    </div>
  );
}
