-- JerseyHub: archive orders without deleting customer history and use the explicit payment label.
alter table public.requests
  add column if not exists archived_at timestamptz null;

update public.requests
set payment_status = 'En attente de paiement'
where payment_status = 'En attente';

alter table public.requests
  alter column payment_status set default 'En attente de paiement';
