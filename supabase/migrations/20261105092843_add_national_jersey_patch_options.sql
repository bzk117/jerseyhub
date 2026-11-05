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
