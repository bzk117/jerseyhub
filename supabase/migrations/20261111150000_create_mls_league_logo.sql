create table if not exists public.club_league_logos (
  league_name text primary key check (league_name = 'MLS'),
  image_url text not null check (image_url ~* '^https?://'),
  updated_at timestamptz not null default now(),
  updated_by uuid references auth.users(id)
);

alter table public.club_league_logos enable row level security;

grant select on public.club_league_logos to anon, authenticated;
grant insert, update, select on public.club_league_logos to authenticated;

create policy "Public can read club league logos"
on public.club_league_logos for select to anon, authenticated
using (true);

create policy "Admins can insert club league logos"
on public.club_league_logos for insert to authenticated
with check ((select auth.jwt() -> 'app_metadata' ->> 'role') = 'admin');

create policy "Admins can update club league logos"
on public.club_league_logos for update to authenticated
using ((select auth.jwt() -> 'app_metadata' ->> 'role') = 'admin')
with check ((select auth.jwt() -> 'app_metadata' ->> 'role') = 'admin');
