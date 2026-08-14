-- Licencias del pase de 12 meses.
-- Los usuarios solo LEEN su propia licencia. Nadie inserta ni edita desde el
-- cliente: las escrituras llegan por webhook de pago con la service key.

create table if not exists public.licenses (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete set null,
  email text not null,
  source text not null default 'manual',        -- stripe | hotmart | manual
  status text not null default 'active',        -- active | revoked
  activated_at timestamptz not null default now(),
  expires_at timestamptz,                       -- null = sin vencimiento
  created_at timestamptz not null default now()
);

create index if not exists licenses_email_idx on public.licenses (lower(email));
create index if not exists licenses_user_idx on public.licenses (user_id);

alter table public.licenses enable row level security;

create policy "read own license" on public.licenses
  for select to authenticated
  using (
    user_id = auth.uid()
    or lower(email) = lower(coalesce(auth.jwt() ->> 'email', ''))
  );
-- Sin políticas de insert/update/delete para authenticated: solo service role.
