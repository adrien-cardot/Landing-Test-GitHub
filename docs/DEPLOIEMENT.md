# Déploiement

Le site est hébergé sur Vercel (offre gratuite), projet `landing-adrien-cardot`, relié au repo GitHub. Il n'y a rien à lancer à la main : chaque push déclenche un déploiement.

## Les trois environnements

| Environnement | Branche | Adresse | Quand il bouge |
|---|---|---|---|
| Production | `main` | https://landing-adrien-cardot.vercel.app | à chaque merge dans `main` |
| Staging (pré-prod) | `staging` | https://landing-adrien-cardot-staging.vercel.app | à chaque merge dans `staging` |
| Preview | toute autre branche | adresse unique par déploiement, postée par le bot Vercel dans la PR | à chaque push sur la branche |

L'adresse staging est un domaine Vercel rattaché à la branche `staging` (Settings > Domains > Git Branch). Elle ne change jamais, contrairement aux previews.

## Le chemin d'une modification

1. Branche `feature/...` ou `fix/...` créée depuis `staging`.
2. Push : Vercel construit une preview, le bot poste le lien dans la PR.
3. PR vers `staging`, relue et validée, puis mergée : le staging se met à jour.
4. Recette sur l'adresse staging avec [RECETTE.md](RECETTE.md).
5. Recette OK : PR `staging` → `main`, merge, la prod se met à jour en moins d'une minute.
6. On ajoute la version dans [CHANGELOG.md](../CHANGELOG.md).

## Vérifier qu'un déploiement est passé

- Sur GitHub : la coche verte « Vercel » à côté du commit ou dans la PR.
- Sur Vercel : onglet Deployments, statut `Ready`. Le hash du commit est affiché sur chaque ligne.
- En ligne de commande : `vercel ls landing-adrien-cardot`.

## Revenir en arrière si la prod casse

Deux façons, de la plus rapide à la plus propre :

1. **Rollback Vercel (quelques secondes).** Deployments, choisir le dernier déploiement de prod qui marchait, menu ⋯ puis *Instant Rollback*. La prod repart sur l'ancienne version sans toucher au code. C'est pour l'urgence.
2. **Revert Git (la vraie correction).** Sur GitHub, ouvrir la PR fautive et cliquer *Revert*. GitHub crée une PR qui annule les changements. Elle passe par `staging`, puis vers `main` comme d'habitude. Une fois mergée, la prod est de nouveau alignée sur le code.

Après un rollback Vercel, il faut quand même faire le revert Git, sinon le prochain merge dans `main` remet le bug en ligne.

## Réglages du projet Vercel

| Réglage | Valeur |
|---|---|
| Framework | aucun (site statique : HTML, CSS, JS) |
| Commande de build | aucune |
| Branche de production | `main` |
| Protection des previews | désactivée, pour que le relecteur ouvre les previews sans compte Vercel |
| Variables d'environnement | aucune, le site n'a pas de secret |
