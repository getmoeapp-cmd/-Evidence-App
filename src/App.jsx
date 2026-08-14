import React, { useState, useEffect } from "react";
import { C } from "./theme.js";
import { UI } from "./i18n.js";
import { SECTIONS } from "./i18n.sections.js";
import { PEPTIDOS_ES } from "./data/es.js";
import { PEPTIDES_EN } from "./data/en.js";

import Peptides from "./sections/Peptides.jsx";
import ByGoal from "./sections/ByGoal.jsx";
import Verify from "./sections/Verify.jsx";
import Track from "./sections/Track.jsx";
import Logo from "./components/Logo.jsx";
import Auth from "./sections/Auth.jsx";
import Landing from "./sections/Landing.jsx";
import { supabase, CONFIGURED, REQUIRE_LICENSE } from "./supabase.js";

const DATA = { es: PEPTIDOS_ES, en: PEPTIDES_EN };
const TABS = ["peptides", "goals", "verify", "track"];

export default function App() {
  const [lang, setLang] = useState(() => {
    try { return localStorage.getItem("evidence-lang") || "es"; } catch { return "es"; }
  });
  const [tab, setTab] = useState("peptides");
  const [session, setSession] = useState(undefined); // undefined = cargando
  const [recovery, setRecovery] = useState(false);
  const [licensed, setLicensed] = useState(!REQUIRE_LICENSE);

  useEffect(() => {
    if (!CONFIGURED) { setSession(null); return; }
    supabase.auth.getSession().then(({ data }) => setSession(data.session ?? null));
    const { data: sub } = supabase.auth.onAuthStateChange((event, s2) => {
      if (event === "PASSWORD_RECOVERY") setRecovery(true);
      if (event === "SIGNED_IN") setRecovery(false);
      setSession(s2 ?? null);
    });
    return () => sub.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!CONFIGURED || !REQUIRE_LICENSE || !session) return;
    supabase.from("evidence_licenses").select("status,expires_at").eq("status", "active").limit(1)
      .then(({ data }) => {
        const ok = (data || []).some((l) => !l.expires_at || new Date(l.expires_at) > new Date());
        setLicensed(ok);
      });
  }, [session]);

  useEffect(() => {
    try { localStorage.setItem("evidence-lang", lang); } catch {}
    document.documentElement.lang = lang;
  }, [lang]);

  const t = { ...UI[lang], ...SECTIONS[lang] };
  const esSlugs = new Set(PEPTIDOS_ES.map((p) => p.slug));
  const list = DATA[lang];

  // Puerta de acceso: sesión requerida cuando Supabase está configurado.
  if (CONFIGURED && session === undefined) {
    return <div style={{ minHeight: "100vh", background: C.paper }} />;
  }
  if (CONFIGURED && recovery) {
    return <Auth lang={lang} setLang={setLang} t={t} recovery={true} />;
  }
  if (CONFIGURED && !session) {
    return <Landing lang={lang} setLang={setLang} t={t} />;
  }
  if (CONFIGURED && session && !licensed) {
    return (
      <div style={{ minHeight: "100vh", background: C.paper, display: "flex", flexDirection: "column", alignItems: "center", padding: "14vh 26px" }}>
        <div style={{ width: "100%", maxWidth: 380 }}>
          <Logo />
          <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: C.ink, marginTop: 40 }}>{t.license.title}</div>
          <div style={{ fontSize: 14.5, lineHeight: 1.65, color: "#2C3D4C", marginTop: 12 }}>{t.license.body}</div>
          <button className="ev-btn" onClick={() => supabase.auth.signOut()}
            style={{ marginTop: 26, border: "none", background: "none", color: C.tabIdle, cursor: "pointer", padding: 0, fontFamily: "inherit", fontSize: 13 }}>
            {t.auth.signout}
          </button>
        </div>
      </div>
    );
  }

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
        .ev-check:hover span:first-child { border-color: ${C.ink} !important; }
        @media (max-width: 620px) {
          .ev-coarow { grid-template-columns: 1fr !important; gap: 6px !important; }
          .ev-coaex { grid-template-columns: 1fr !important; }
        }
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
        {CONFIGURED && session && (
          <button
            className="ev-btn"
            onClick={() => supabase.auth.signOut()}
            aria-label={t.auth.signout}
            style={{
              fontFamily: "'Jost', sans-serif", fontSize: 9.5, letterSpacing: "0.13em", textTransform: "uppercase",
              padding: "7px 10px", border: "none", borderLeft: `1px solid ${C.chipBorder}`,
              cursor: "pointer", background: "transparent", color: C.muted,
            }}
          >
            {t.auth.signout}
          </button>
        )}
      </div>

      <div className="ev-shell">
        <header style={{ paddingTop: 26, paddingBottom: 18, paddingRight: 96 }}>
          <Logo size={30} />
          <div style={{ fontSize: 13, color: C.muted, marginTop: 8, maxWidth: 440, lineHeight: 1.6 }}>
            {t.taglineParts.map(([verb, rest], i) => (
              <span key={i}>
                <span style={{ whiteSpace: "nowrap" }}>
                  <span style={{ color: C.ink, fontWeight: 600 }}>{verb}</span>
                  {rest}
                </span>
                {i < t.taglineParts.length - 1 ? " " : ""}
              </span>
            ))}
          </div>
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
          {tab === "peptides" && <Peptides full={list} lang={lang} t={t} setLang={setLang} esSlugs={esSlugs} />}
          {tab === "goals" && <ByGoal full={list} lang={lang} t={t} setLang={setLang} esSlugs={esSlugs} />}
          {tab === "verify" && <Verify lang={lang} t={t} />}
          {tab === "track" && <Track full={list} lang={lang} t={t} />}
        </main>

        <footer style={{ marginTop: 56, paddingTop: 22, borderTop: `1px solid ${C.rule}`, display: "flex", gap: 18, alignItems: "flex-start" }}>
          <img src="/evidence-mark.png" alt="" width={34} height={34} style={{ opacity: 0.28, flexShrink: 0, marginTop: 2 }} />
          <div style={{ fontSize: 11.5, color: C.muted, lineHeight: 1.6 }}>{t.footer}</div>
        </footer>
      </div>
    </div>
  );
}
