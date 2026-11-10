-- Retrait réversible des maillots de clubs du catalogue public.
-- Les fiches et images sources restent intactes ; seules les clés de visibilité sont stockées ici.
create table if not exists public.club_product_exclusions (
  product_key text primary key,
  product_name text not null,
  club_name text not null,
  product_source text not null default 'catalog'
    check (product_source in ('catalog', 'r2_gallery')),
  hidden_by uuid references auth.users(id) on delete set null,
  hidden_at timestamptz not null default now(),
  constraint club_product_exclusions_key_length check (char_length(product_key) between 1 and 1000),
  constraint club_product_exclusions_name_length check (char_length(product_name) between 1 and 300),
  constraint club_product_exclusions_club_length check (char_length(club_name) between 1 and 200)
);

create index if not exists club_product_exclusions_club_idx
  on public.club_product_exclusions (club_name, hidden_at desc);
create index if not exists club_product_exclusions_hidden_by_idx
  on public.club_product_exclusions (hidden_by);

alter table public.club_product_exclusions enable row level security;

drop policy if exists "club exclusions are publicly readable" on public.club_product_exclusions;
create policy "club exclusions are publicly readable"
  on public.club_product_exclusions for select to anon, authenticated
  using (true);

drop policy if exists "admins hide club products" on public.club_product_exclusions;
create policy "admins hide club products"
  on public.club_product_exclusions for insert to authenticated
  with check (public.is_admin() and hidden_by = (select auth.uid()));

drop policy if exists "admins restore club products" on public.club_product_exclusions;
create policy "admins restore club products"
  on public.club_product_exclusions for delete to authenticated
  using (public.is_admin());

grant select on public.club_product_exclusions to anon, authenticated;
grant insert, delete on public.club_product_exclusions to authenticated;
