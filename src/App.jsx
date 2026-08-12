import React, { useState, useEffect } from "react";
import { C } from "./theme.js";
import { UI } from "./i18n.js";
import { SECTIONS } from "./i18n.sections.js";
import { PEPTIDOS_ES } from "./data/es.js";
import { PEPTIDES_EN } from "./data/en.js";

import Peptides from "./sections/Peptides.jsx";
import ByGoal from "./sections/ByGoal.jsx";
import Verify from "./sections/Verify.jsx";
import Report from "./sections/Report.jsx";
import Logo from "./components/Logo.jsx";

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

  return (
    <div style={{ background: C.paper, minHeight: "100vh", color: C.inkDeep }}>
      <style>{`
        .ev-btn:focus-visible, .ev-row:focus-visible, .ev-input:focus-visible, .ev-tab:focus-visible {
          outline: 2px solid ${C.ink}; outline-offset: 2px;
        }
        .ev-btn, .ev-tab { transition: background 160ms ease, color 160ms ease, border-color 160ms ease; }
        .ev-row:hover { background: ${C.paperDeep} !important; }
        .ev-chip:hover { border-color: ${C.ink} !important; color: ${C.ink} !important; }
        .ev-help:hover { background: rgba(30,63,95,0.13) !important; }
        .ev-levelbadge:hover { opacity: 0.78; }
        @media (min-width: 721px) {
          .ev-modal-wrap { align-items: center !important; padding: 24px !important; }
          .ev-modal { border-radius: 6px !important; }
        }
        .ev-chip[aria-pressed="true"]:hover { color: ${C.paper} !important; }
        .ev-input { outline: none; }
        .ev-input:focus { border-color: ${C.ink} !important; }

        /* Los filtros van en una fila en escritorio, dos columnas en móvil */
        @media (min-width: 721px) {
          .ev-filters { grid-template-columns: 260px 200px !important; }
        }
        .ev-picker:focus { border-color: ${C.ink} !important; }

        /* Buscador pegajoso mientras se escribe */
        @media (max-width: 720px) {
          .ev-searchbar-on {
            position: sticky; top: 0; z-index: 20;
            background: ${C.paper};
            padding: 8px 0 10px;
            box-shadow: 0 6px 14px -8px rgba(18,40,61,0.30);
          }
        }
        .ev-shell { max-width: 1080px; margin: 0 auto; padding: 0 20px 40px; }
        @media (max-width: 720px) { .ev-shell { padding-bottom: 110px; } }

        /* Selector de idioma fijo arriba a la derecha */
        .ev-lang {
          position: fixed; top: 14px; right: 16px; z-index: 40;
          display: flex; border: 1px solid ${C.rule}; border-radius: 2px;
          overflow: hidden; background: ${C.paper};
          box-shadow: 0 1px 3px rgba(18,40,61,.06);
        }

        /* Pestañas */
        .ev-tabs { display: flex; gap: 2px; border-bottom: 1px solid ${C.rule}; margin-bottom: 30px; }
        .ev-tab {
          font-family: 'Jost', sans-serif; font-size: 12.5px; letter-spacing: 0.12em;
          text-transform: uppercase; padding: 12px 16px; cursor: pointer;
          background: transparent; border: none; color: ${C.tabIdle};
          font-weight: 500; border-bottom: 2px solid transparent;
        }
        .ev-tab[aria-selected="true"] { color: ${C.ink}; border-bottom-color: ${C.ink}; }

        @media (max-width: 720px) {
          .ev-tabs {
            position: fixed; bottom: 0; left: 0; right: 0; z-index: 30;
            background: #FFFFFF; border-top: 1px solid ${C.rule}; border-bottom: none;
            margin: 0; padding: 7px 8px calc(7px + env(safe-area-inset-bottom));
            gap: 5px; justify-content: space-between;
            box-shadow: 0 -6px 22px rgba(18, 40, 61, 0.10);
          }
          .ev-tab {
            flex: 1; text-align: center; padding: 12px 6px;
            font-size: 11.5px; letter-spacing: 0.07em; font-weight: 500;
            border-bottom: none; border-radius: 3px; color: ${C.tabIdle};
          }
          /* Activa: pastilla sólida — mismo idioma que el selector de idioma */
          .ev-tab[aria-selected="true"] {
            background: ${C.ink}; color: ${C.paper}; border-bottom: none;
          }
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
          <Logo size={30} />
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
              >
                {t.nav[key]}
              </button>
            );
          })}
        </nav>

        <main>
          {tab === "peptides" && <Peptides full={list} lang={lang} t={t} />}
          {tab === "goals" && <ByGoal full={list} lang={lang} t={t} />}
          {tab === "verify" && <Verify t={t} />}
          {tab === "report" && <Report list={list} t={t} />}
        </main>

        <footer style={{ marginTop: 56, paddingTop: 22, borderTop: `1px solid ${C.rule}`, display: "flex", gap: 18, alignItems: "flex-start" }}>
          <img src="/evidence-mark.png" alt="" width={34} height={34} style={{ opacity: 0.28, flexShrink: 0, marginTop: 2 }} />
          <div style={{ fontSize: 11.5, color: C.muted, lineHeight: 1.6 }}>{t.footer}</div>
        </footer>
      </div>
    </div>
  );
}
