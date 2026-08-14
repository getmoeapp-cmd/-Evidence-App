// Webhook de Hotmart → licencias de Evidence.
//
// Configura en Vercel (Settings → Environment Variables):
//   HOTMART_HOTTOK        — el token que Hotmart muestra al crear el webhook
//   SUPABASE_SERVICE_KEY  — service role key del proyecto moe-app (dashboard
//                           → Settings → API). NUNCA va en el cliente.
//
// En Hotmart: Herramientas → Webhook → URL:
//   https://evidence-app-rho.vercel.app/api/hotmart-webhook
// Eventos: compra aprobada/completa, reembolso, contracargo, cancelación.

const SUPABASE_URL = "https://fsvlxosbbevzyvegbqry.supabase.co";

const GRANT = new Set(["PURCHASE_APPROVED", "PURCHASE_COMPLETE"]);
const REVOKE = new Set(["PURCHASE_REFUNDED", "PURCHASE_CHARGEBACK", "PURCHASE_CANCELED", "PURCHASE_PROTEST"]);

async function rpc(fn, args, key) {
  const r = await fetch(`${SUPABASE_URL}/rest/v1/rpc/${fn}`, {
    method: "POST",
    headers: { "content-type": "application/json", apikey: key, authorization: `Bearer ${key}` },
    body: JSON.stringify(args),
  });
  if (!r.ok) throw new Error(`${fn}: ${r.status} ${await r.text()}`);
  return r.json();
}

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "method_not_allowed" });

  const hottok = process.env.HOTMART_HOTTOK;
  const key = process.env.SUPABASE_SERVICE_KEY;
  if (!hottok || !key) return res.status(500).json({ error: "missing_env" });

  // Autenticación del webhook: el header debe traer el hottok exacto.
  const got = req.headers["x-hotmart-hottok"];
  if (got !== hottok) return res.status(401).json({ error: "bad_token" });

  try {
    const event = req.body?.event;
    const email = req.body?.data?.buyer?.email;
    if (!event || !email) return res.status(400).json({ error: "missing_fields" });

    if (GRANT.has(event)) {
      await rpc("evidence_grant_license", { p_email: email, p_days: 365, p_source: "hotmart" }, key);
      return res.status(200).json({ ok: true, action: "granted" });
    }
    if (REVOKE.has(event)) {
      await rpc("evidence_revoke_license", { p_email: email }, key);
      return res.status(200).json({ ok: true, action: "revoked" });
    }
    // Evento que no nos interesa: 200 para que Hotmart no reintente.
    return res.status(200).json({ ok: true, action: "ignored", event });
  } catch (e) {
    return res.status(500).json({ error: String(e).slice(0, 300) });
  }
}
