// Cliente de Supabase + configuración de acceso.
//
// SUPABASE_URL y SUPABASE_KEY se rellenan al crear el proyecto "evidence"
// (la clave es la *publishable* — es pública por diseño; la seguridad la
// pone RLS en la base, no el secreto de la clave).
//
// REQUIRE_LICENSE: en false, cualquier cuenta entra (beta). Al encenderlo,
// entrar exige además una licencia activa en la tabla `licenses` — el
// interruptor del pase de 12 meses. No lo enciendas hasta que los webhooks
// de pago estén escribiendo licencias.

import { createClient } from "@supabase/supabase-js";

export const SUPABASE_URL = "PASTE_SUPABASE_URL";
export const SUPABASE_KEY = "PASTE_SUPABASE_PUBLISHABLE_KEY";
export const REQUIRE_LICENSE = false;

export const CONFIGURED = !SUPABASE_URL.includes("PASTE");

export const supabase = CONFIGURED
  ? createClient(SUPABASE_URL, SUPABASE_KEY)
  : null;
