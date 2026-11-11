-- JerseyHub — fondation Supabase
-- À exécuter dans SQL Editor du projet Supabase, une seule fois.
-- Région recommandée : UE (Frankfurt). Ne jamais publier la clé service_role.

create extension if not exists pgcrypto;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  first_name text not null default '',
  last_name text not null default '',
  phone text,
  role text not null default 'customer' check (role in ('customer','admin')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.requests (
  id uuid primary key default gen_random_uuid(),
  customer_id uuid not null references auth.users(id) on delete restrict,
  status text not null default 'En attente'
    check (status in ('En attente','En transit','Reçu','Terminé','Pas de stock')),
  customer_note text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Numéro de commande lisible par le client, attribué automatiquement côté base.
create sequence if not exists public.jerseyhub_order_number_seq;
alter table public.requests add column if not exists order_number text;
create or replace function public.assign_request_order_number()
returns trigger language plpgsql security definer set search_path = '' as $
begin
  new.order_number := 'JH-' || to_char(coalesce(new.created_at, now()), 'YYYY') || '-' ||
    lpad(nextval('public.jerseyhub_order_number_seq')::text, 6, '0');
  return new;
end;
$;
drop trigger if exists requests_assign_order_number on public.requests;
create trigger requests_assign_order_number before insert on public.requests
for each row execute function public.assign_request_order_number();
update public.requests set order_number = 'JH-' || to_char(created_at, 'YYYY') || '-' ||
  lpad(nextval('public.jerseyhub_order_number_seq')::text, 6, '0') where order_number is null;
alter table public.requests alter column order_number set not null;
create unique index if not exists requests_order_number_uidx on public.requests(order_number);
revoke all on function public.assign_request_order_number() from public, anon, authenticated;

create table if not exists public.request_items (
  id uuid primary key default gen_random_uuid(),
  request_id uuid not null references public.requests(id) on delete cascade,
  category text not null,
  team_brand text not null,
  model text,
  season text,
  size text not null,
  quantity integer not null default 1 check (quantity between 1 and 50),
  status text not null default 'En attente'
    check (status in ('En attente','En transit','Reçu','Terminé','Pas de stock')),
  customization_type text not null default 'Aucune'
    check (customization_type in ('Aucune','Nom et numéro du joueur','Nom et numéro personnalisés')),
  custom_name text,
  custom_number text,
  created_at timestamptz not null default now()
);

create index if not exists requests_customer_created_idx
  on public.requests(customer_id, created_at desc);
create index if not exists request_items_request_idx
  on public.request_items(request_id);

-- Notes internes séparées : elles ne sont jamais lisibles par les clients.
create table if not exists public.request_admin_notes (
  request_id uuid primary key references public.requests(id) on delete cascade,
  note text not null default '',
  updated_at timestamptz not null default now()
);

create or replace function public.set_updated_at()
returns trigger language plpgsql set search_path = '' as $
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists profiles_updated_at on public.profiles;
create trigger profiles_updated_at before update on public.profiles
for each row execute function public.set_updated_at();

drop trigger if exists requests_updated_at on public.requests;
create trigger requests_updated_at before update on public.requests
for each row execute function public.set_updated_at();

drop trigger if exists request_admin_notes_updated_at on public.request_admin_notes;
create trigger request_admin_notes_updated_at before update on public.request_admin_notes
for each row execute function public.set_updated_at();

-- Création automatique du profil à l'inscription.
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  insert into public.profiles (id, first_name, last_name, phone)
  values (
    new.id,
    coalesce(new.raw_user_meta_data ->> 'first_name', ''),
    coalesce(new.raw_user_meta_data ->> 'last_name', ''),
    nullif(new.raw_user_meta_data ->> 'phone', '')
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
after insert on auth.users
for each row execute procedure public.handle_new_user();

alter table public.profiles enable row level security;
alter table public.requests enable row level security;
alter table public.request_items enable row level security;
alter table public.request_admin_notes enable row level security;

-- Rôle admin lu uniquement depuis app_metadata, jamais depuis user_metadata.
create or replace function public.is_admin()
returns boolean
language sql stable security invoker
set search_path = ''
as $$
  select coalesce((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin', false);
$$;

drop policy if exists "profile read own or admin" on public.profiles;
create policy "profile read own or admin" on public.profiles
for select to authenticated
using (id = (select auth.uid()) or public.is_admin());

drop policy if exists "profile update own" on public.profiles;
create policy "profile update own" on public.profiles
for update to authenticated
using (id = (select auth.uid()))
with check (id = (select auth.uid()) and role = 'customer');

-- Les clients voient et créent uniquement leurs demandes.
drop policy if exists "request read own or admin" on public.requests;
create policy "request read own or admin" on public.requests
for select to authenticated
using (customer_id = (select auth.uid()) or public.is_admin());

drop policy if exists "request create own" on public.requests;
create policy "request create own" on public.requests
for insert to authenticated
with check (customer_id = (select auth.uid()) and status = 'En attente');

drop policy if exists "admin update requests" on public.requests;
create policy "admin update requests" on public.requests
for update to authenticated
using (public.is_admin())
with check (public.is_admin());

drop policy if exists "item read through own request or admin" on public.request_items;
create policy "item read through own request or admin" on public.request_items
for select to authenticated
using (
  public.is_admin() or exists (
    select 1 from public.requests r
    where r.id = request_id and r.customer_id = (select auth.uid())
  )
);

drop policy if exists "item create through own request" on public.request_items;
create policy "item create through own request" on public.request_items
for insert to authenticated
with check (
  status = 'En attente' and exists (
    select 1 from public.requests r
    where r.id = request_id
      and r.customer_id = (select auth.uid())
      and r.status = 'En attente'
  )
);

drop policy if exists "admin update items" on public.request_items;
create policy "admin update items" on public.request_items
for update to authenticated
using (public.is_admin())
with check (public.is_admin());

drop policy if exists "admin delete items" on public.request_items;
create policy "admin delete items" on public.request_items
for delete to authenticated
using (public.is_admin());

-- Important : attribuer le rôle admin manuellement via Supabase Auth > Users
-- > utilisateur concerné > app_metadata : {"role":"admin"}.
-- Ne jamais placer service_role dans le navigateur.

-- Seuls les administrateurs peuvent lire ou modifier les notes internes.
drop policy if exists "admin manage request notes" on public.request_admin_notes;
create policy "admin manage request notes" on public.request_admin_notes
for all to authenticated
using (public.is_admin())
with check (public.is_admin());


-- Explicit Data API grants: RLS still controls which rows each signed-in user can access.
grant usage on schema public to authenticated;
grant select, update on public.profiles to authenticated;
grant select, insert, update, delete on public.requests to authenticated;
grant select, insert, update, delete on public.request_items to authenticated;
grant select, insert, update, delete on public.request_admin_notes to authenticated;
grant execute on function public.is_admin() to authenticated;

-- Internal trigger functions and the DDL event-trigger helper are not RPC endpoints.
revoke all on function public.handle_new_user() from public, anon, authenticated;
revoke all on function public.set_updated_at() from public, anon, authenticated;
revoke all on function public.is_admin() from public, anon;
revoke all on function public.rls_auto_enable() from public, anon, authenticated;

comment on table public.request_admin_notes is 'Private internal admin notes; accessible only to admins through RLS.';


-- JerseyHub — commentaires clients avec modération.
-- Ces instructions doivent être exécutées dans Supabase SQL Editor.
create table if not exists public.site_comments (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  display_name text not null default 'Client',
  content text not null check (char_length(content) between 3 and 1200),
  status text not null default 'pending' check (status in ('pending','approved','rejected')),
  admin_reply text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists site_comments_status_created_idx on public.site_comments(status, created_at desc);
create index if not exists site_comments_user_id_idx on public.site_comments(user_id);
alter table public.site_comments enable row level security;
drop policy if exists "comments visible when approved or own" on public.site_comments;
create policy "comments visible when approved or own" on public.site_comments
for select to authenticated using (status = 'approved' or user_id = (select auth.uid()) or public.is_admin());
drop policy if exists "customers submit pending comments" on public.site_comments;
create policy "customers submit pending comments" on public.site_comments
for insert to authenticated with check (user_id = (select auth.uid()) and status = 'pending');
drop policy if exists "admins moderate comments" on public.site_comments;
create policy "admins moderate comments" on public.site_comments
for update to authenticated using (public.is_admin()) with check (public.is_admin());
drop policy if exists "admins delete comments" on public.site_comments;
create policy "admins delete comments" on public.site_comments
for delete to authenticated using (public.is_admin());
grant select, insert, update, delete on public.site_comments to authenticated;


-- Patchs illustrés pour maillots nationaux (migration 20261105092843).
-- JerseyHub — patchs illustrés pour maillots nationaux.
alter table public.request_items
  add column if not exists patch_selections jsonb not null default '[]'::jsonb,
  add column if not exists patch_total_eur numeric(10,2) not null default 0
    check (patch_total_eur >= 0);

create table if not exists public.patch_options (
  id uuid primary key default gen_random_uuid(),
  category text not null default 'national',
  team_name text,
  product_name text,
  slot_number smallint not null check (slot_number between 1 and 3),
  label text not null,
  image_url text not null,
  extra_price_eur numeric(10,2) not null default 0 check (extra_price_eur >= 0),
  is_active boolean not null default true,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint patch_options_image_url_http check (image_url ~* '^https?://')
);

create index if not exists patch_options_lookup_idx
  on public.patch_options(category, team_name, product_name, slot_number, is_active, sort_order);

alter table public.patch_options enable row level security;

drop policy if exists "active patch options are publicly readable" on public.patch_options;
create policy "active patch options are publicly readable"
  on public.patch_options for select to anon, authenticated
  using (is_active = true or public.is_admin());

drop policy if exists "admins manage patch options" on public.patch_options;
create policy "admins manage patch options"
  on public.patch_options for all to authenticated
  using (public.is_admin())
  with check (public.is_admin());

grant select on public.patch_options to anon, authenticated;
grant insert, update, delete on public.patch_options to authenticated;
grant select, insert, update on public.request_items to authenticated;

drop trigger if exists patch_options_updated_at on public.patch_options;
create trigger patch_options_updated_at before update on public.patch_options
for each row execute function public.set_updated_at();

comment on table public.patch_options is
  'Patch choices available on JerseyHub product pages. Public reads are limited to active options; only admins manage options.';
comment on column public.request_items.patch_selections is
  'Snapshot of the selected patch options (slot, label, image URL and extra price) at order time.';
comment on column public.request_items.patch_total_eur is
  'Sum of patch surcharges in EUR, snapshotted at order time.';

-- Logo personnalisé du championnat MLS, importé depuis le panel administrateur.
create table if not exists public.club_league_logos (
  league_name text primary key check (league_name = 'MLS'),
  image_url text not null check (image_url ~* '^https?://'),
  updated_at timestamptz not null default now(),
  updated_by uuid references auth.users(id)
);
alter table public.club_league_logos enable row level security;
grant select on public.club_league_logos to anon, authenticated;
grant insert, update, select on public.club_league_logos to authenticated;
drop policy if exists "Public can read club league logos" on public.club_league_logos;
drop policy if exists "Admins can insert club league logos" on public.club_league_logos;
drop policy if exists "Admins can update club league logos" on public.club_league_logos;
create policy "Public can read club league logos"
  on public.club_league_logos for select to anon, authenticated using (true);
create policy "Admins can insert club league logos"
  on public.club_league_logos for insert to authenticated
  with check ((select auth.jwt() -> 'app_metadata' ->> 'role') = 'admin');
create policy "Admins can update club league logos"
  on public.club_league_logos for update to authenticated
  using ((select auth.jwt() -> 'app_metadata' ->> 'role') = 'admin')
  with check ((select auth.jwt() -> 'app_metadata' ->> 'role') = 'admin');
