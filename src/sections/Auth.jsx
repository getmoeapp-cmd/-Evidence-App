import React, { useState } from "react";
import { C } from "../theme.js";
import Logo from "../components/Logo.jsx";
import { supabase } from "../supabase.js";

export default function Auth({ lang, setLang, t, recovery }) {
  const k = t.auth;
  const [mode, setMode] = useState(recovery ? "newpass" : "signin"); // signin | signup | forgot | newpass
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState(null);
  const [info, setInfo] = useState(null);

  async function go() {
    setErr(null); setInfo(null); setBusy(true);
    try {
      if (mode === "signin") {
        const { error } = await supabase.auth.signInWithPassword({ email, password: pass });
        if (error) throw error;
      } else if (mode === "signup") {
        const { data, error } = await supabase.auth.signUp({
          email, password: pass,
          options: { emailRedirectTo: window.location.origin },
        });
        if (error) throw error;
        if (data.user && !data.session) { setInfo(k.confirmSent); setMode("signin"); }
      } else if (mode === "forgot") {
        const { error } = await supabase.auth.resetPasswordForEmail(email, { redirectTo: window.location.origin });
        if (error) throw error;
        setInfo(k.resetSent); setMode("signin");
      } else if (mode === "newpass") {
        const { error } = await supabase.auth.updateUser({ password: pass });
        if (error) throw error;
      }
    } catch (e) {
      setErr(k.errors[e?.message] || e?.message || k.errors.generic);
    } finally { setBusy(false); }
  }

  const input = (v, on, ph, type) => (
    <input value={v} onChange={(e) => on(e.target.value)} placeholder={ph} type={type}
      autoCapitalize="none" autoCorrect="off" className="ev-input"
      style={{ width: "100%", padding: "13px 14px", border: `1px solid ${C.chipBorder}`, borderRadius: 3, background: "#FFF", fontSize: 16, color: C.inkDeep, fontFamily: "inherit" }} />
  );
  const showEmail = mode !== "newpass";
  const showPass = mode !== "forgot";

  return (
    <div style={{ minHeight: "100vh", background: C.paper, display: "flex", flexDirection: "column", alignItems: "center", padding: "10vh 22px 40px" }}>
      <div style={{ width: "100%", maxWidth: 360 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start" }}>
          <Logo />
          <div style={{ display: "flex", border: `1px solid ${C.chipBorder}`, borderRadius: 3, overflow: "hidden" }}>
            {["es", "en"].map((l) => (
              <button key={l} className="ev-btn" onClick={() => setLang(l)}
                style={{ fontFamily: "'Jost', sans-serif", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", padding: "7px 11px", border: "none", cursor: "pointer", background: lang === l ? C.ink : "transparent", color: lang === l ? C.paper : C.muted }}>
                {l}
              </button>
            ))}
          </div>
        </div>

        <div style={{ fontSize: 13, color: C.muted, marginTop: 10, lineHeight: 1.6 }}>
          {t.taglineParts.map(([verb, rest], i) => (
            <span key={i}>
              <span style={{ whiteSpace: "nowrap" }}>
                <span style={{ color: C.ink, fontWeight: 600 }}>{verb}</span>{rest}
              </span>
              {i < t.taglineParts.length - 1 ? " " : ""}
            </span>
          ))}
        </div>

        <div style={{ marginTop: 42 }}>
          <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: C.ink }}>
            {k.label[mode]}
          </div>

          {info && <div style={{ marginTop: 14, padding: "12px 15px", border: "1px solid rgba(62,107,74,0.4)", background: "rgba(62,107,74,0.08)", borderRadius: 4, fontSize: 14, lineHeight: 1.55, color: "#3E6B4A" }}>{info}</div>}
          {err && <div style={{ marginTop: 14, padding: "12px 15px", border: "1px solid rgba(180,85,47,0.4)", background: "rgba(180,85,47,0.07)", borderRadius: 4, fontSize: 14, lineHeight: 1.55, color: C.warnText }}>{err}</div>}

          <div style={{ marginTop: 16, display: "grid", gap: 10 }}>
            {showEmail && input(email, setEmail, k.email, "email")}
            {showPass && input(pass, setPass, mode === "newpass" ? k.newPassword : k.password, "password")}
          </div>

          <button className="ev-btn" onClick={go} disabled={busy || (showEmail && !email) || (showPass && pass.length < 6)}
            style={{ marginTop: 14, width: "100%", fontFamily: "'Jost', sans-serif", fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", padding: "14px 16px", border: "none", background: busy ? C.chipBorder : C.ink, color: C.paper, borderRadius: 3, cursor: busy ? "wait" : "pointer" }}>
            {busy ? "…" : k.cta[mode]}
          </button>

          {mode === "signin" && (
            <div style={{ marginTop: 18, display: "flex", justifyContent: "space-between", fontSize: 13.5 }}>
              <button className="ev-btn" onClick={() => { setMode("signup"); setErr(null); }} style={{ border: "none", background: "none", color: C.ink, cursor: "pointer", padding: 0, fontFamily: "inherit", fontSize: 13.5 }}>{k.toSignup}</button>
              <button className="ev-btn" onClick={() => { setMode("forgot"); setErr(null); }} style={{ border: "none", background: "none", color: C.tabIdle, cursor: "pointer", padding: 0, fontFamily: "inherit", fontSize: 13.5 }}>{k.forgot}</button>
            </div>
          )}
          {(mode === "signup" || mode === "forgot") && (
            <button className="ev-btn" onClick={() => { setMode("signin"); setErr(null); }} style={{ marginTop: 18, border: "none", background: "none", color: C.tabIdle, cursor: "pointer", padding: 0, fontFamily: "inherit", fontSize: 13.5 }}>{k.toSignin}</button>
          )}

          <div style={{ marginTop: 40, fontSize: 12.5, color: C.muted, lineHeight: 1.6, borderTop: `1px solid ${C.rule}`, paddingTop: 16 }}>
            {k.note}
          </div>
        </div>
      </div>
    </div>
  );
}
