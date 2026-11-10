-- Bibliothèque centrale des patchs des clubs JerseyHub.
-- Les images sources restent dans leur stockage d'origine : seule leur URL est référencée ici.
create table if not exists public.club_patch_library (
  id uuid primary key default gen_random_uuid(),
  label text not null check (char_length(label) between 2 and 160),
  category text not null default 'competition'
    check (category in ('competition','club','national','other')),
  image_url text not null check (image_url ~* '^https?://'),
  source_image_url text not null check (source_image_url ~* '^https?://'),
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create unique index if not exists club_patch_library_label_image_uidx
  on public.club_patch_library (lower(label), image_url);
create index if not exists club_patch_library_category_created_idx
  on public.club_patch_library (category, created_at desc);

create table if not exists public.club_patch_assignments (
  id uuid primary key default gen_random_uuid(),
  patch_id uuid not null references public.club_patch_library(id) on delete cascade,
  country text not null check (char_length(country) between 2 and 100),
  club_name text not null check (char_length(club_name) between 2 and 160),
  season text,
  created_at timestamptz not null default now()
);
create unique index if not exists club_patch_assignments_unique_idx
  on public.club_patch_assignments (patch_id, country, club_name, coalesce(season, ''));
create index if not exists club_patch_assignments_club_idx
  on public.club_patch_assignments (country, club_name, season);

alter table public.club_patch_library enable row level security;
alter table public.club_patch_assignments enable row level security;

drop policy if exists "admins manage club patch library" on public.club_patch_library;
create policy "admins manage club patch library"
  on public.club_patch_library for all to authenticated
  using (public.is_admin())
  with check (public.is_admin());

drop policy if exists "admins manage club patch assignments" on public.club_patch_assignments;
create policy "admins manage club patch assignments"
  on public.club_patch_assignments for all to authenticated
  using (public.is_admin())
  with check (public.is_admin());

grant select, insert, update, delete on public.club_patch_library to authenticated;
grant select, insert, update, delete on public.club_patch_assignments to authenticated;

drop trigger if exists club_patch_library_updated_at on public.club_patch_library;
create trigger club_patch_library_updated_at before update on public.club_patch_library
for each row execute function public.set_updated_at();

comment on table public.club_patch_library is
  'Bibliothèque centrale des patchs des clubs. Une image peut être réutilisée pour plusieurs clubs et saisons.';
comment on table public.club_patch_assignments is
  'Associations entre les patchs de la bibliothèque centrale et les clubs/saisons.';
