-- Retrait des fonctions d'administration des maillots de clubs et de la bibliothèque centrale de patchs.
-- Les objets et images originaux de Cloudflare R2 ne sont ni modifiés ni supprimés.
-- La galerie publique jerseyhub_club_gallery et l'inventaire R2 sont conservés.
drop function if exists public.jerseyhub_admin_club_directory();
drop table if exists public.club_patch_assignments;
drop table if exists public.club_patch_library;
drop table if exists public.club_product_exclusions;
