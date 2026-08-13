// Vercel Serverless Function — extracción estructurada de un COA.
//
// QUÉ HACE: lee el documento y devuelve los campos que encuentra.
// QUÉ NO HACE: verificar que el COA sea auténtico. Un PDF se edita en
// minutos. La autenticidad solo la confirma el laboratorio emisor. La
// interfaz tiene que decirlo, y lo dice.
//
// Requiere la variable de entorno ANTHROPIC_API_KEY en Vercel.

const SYSTEM = `You extract fields from a peptide Certificate of Analysis (COA).

Return ONLY a JSON object, no preamble, no markdown fences:
{
  "isCOA": boolean,
  "product": string|null,
  "lot": string|null,
  "date": string|null,
  "purityHPLC": number|null,
  "massSpecConfirmed": boolean|null,
  "lab": string|null,
  "labIsThirdParty": boolean|null,
  "reportNumber": string|null,
  "verificationUrl": string|null,
  "endotoxinTested": boolean|null,
  "notes": string[]
}

Rules:
- Report ONLY what is legibly present. Use null for anything absent or unreadable. Never infer or invent.
- purityHPLC is the numeric percentage only (99.2, not "99.2%").
- labIsThirdParty: true only if the document names an external laboratory. If it says "in-house", "internal", or names the seller as the tester, return false. If unclear, null.
- notes: short factual observations only — illegible sections, internal inconsistencies, missing signature or letterhead. Do not judge authenticity.
- If the document is not a COA at all, set isCOA false and leave the rest null.`;

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "method_not_allowed" });
  const key = process.env.ANTHROPIC_API_KEY;
  if (!key) return res.status(500).json({ error: "missing_api_key" });

  try {
    const { data, mediaType } = req.body || {};
    if (!data || !mediaType) return res.status(400).json({ error: "missing_file" });

    const isPdf = mediaType === "application/pdf";
    const block = isPdf
      ? { type: "document", source: { type: "base64", media_type: "application/pdf", data } }
      : { type: "image", source: { type: "base64", media_type: mediaType, data } };

    const r = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": key,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-6",
        max_tokens: 1000,
        system: SYSTEM,
        messages: [{ role: "user", content: [block, { type: "text", text: "Extract the COA fields." }] }],
      }),
    });

    if (!r.ok) return res.status(502).json({ error: "upstream", detail: await r.text() });

    const out = await r.json();
    const text = (out.content || []).filter((b) => b.type === "text").map((b) => b.text).join("");
    const clean = text.replace(/```json|```/g, "").trim();

    let parsed;
    try { parsed = JSON.parse(clean); }
    catch { return res.status(502).json({ error: "unparseable", raw: clean.slice(0, 400) }); }

    return res.status(200).json(parsed);
  } catch (e) {
    return res.status(500).json({ error: "server", detail: String(e).slice(0, 300) });
  }
}
