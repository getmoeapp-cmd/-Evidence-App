-- YA APLICADA al proyecto moe-app (fsvlxosbbevzyvegbqry) el 8/14/26.
-- Copia de referencia.
-- Licencias del pase de 12 meses.
-- Los usuarios solo LEEN su propia licencia. Nadie inserta ni edita desde el
-- cliente: las escrituras llegan por webhook de pago con la service key.

create table if not exists public.evidence_licenses (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete set null,
  email text not null,
  source text not null default 'manual',        -- stripe | hotmart | manual
  status text not null default 'active',        -- active | revoked
  activated_at timestamptz not null default now(),
  expires_at timestamptz,                       -- null = sin vencimiento
  created_at timestamptz not null default now()
);

create index if not exists evidence_licenses_email_idx on public.evidence_licenses (lower(email));
create index if not exists evidence_licenses_user_idx on public.evidence_licenses (user_id);

alter table public.evidence_licenses enable row level security;

create policy "read own license" on public.evidence_licenses
  for select to authenticated
  using (
    user_id = auth.uid()
    or lower(email) = lower(coalesce(auth.jwt() ->> 'email', ''))
  );
-- Sin políticas de insert/update/delete para authenticated: solo service role.
