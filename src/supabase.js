// Cliente de Supabase + configuración de acceso.
//
// Proyecto compartido con MOE (moe-app): todo lo de Evidence en la base va
// con prefijo evidence_. La clave es la *publishable*
// — es pública por diseño; la seguridad la pone RLS, no el secreto de la clave.
//
// REQUIRE_LICENSE: en false, cualquier cuenta entra (beta). Al encenderlo,
// entrar exige además una licencia activa en la tabla `licenses` — el
// interruptor del pase de 12 meses. No lo enciendas hasta que los webhooks
// de pago estén escribiendo licencias.

import { createClient } from "@supabase/supabase-js";

export const SUPABASE_URL = "https://fsvlxosbbevzyvegbqry.supabase.co";
export const SUPABASE_KEY = "sb_publishable_V6h6HbnMNYnL1WUwjz_EZQ_n5nNT-Lr";
export const REQUIRE_LICENSE = false;

export const CONFIGURED = !SUPABASE_URL.includes("PASTE");

export const supabase = CONFIGURED
  ? createClient(SUPABASE_URL, SUPABASE_KEY)
  : null;
