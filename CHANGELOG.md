# Journal des versions

Une version = un commit sur `main`. Chaque mise en prod reçoit un tag Git (`v1.0`, `v1.1`…) posé sur ce commit, avec une Release GitHub. Le hash du commit est celui que Vercel affiche sur le déploiement de prod. On ajoute une ligne ici à chaque mise en prod (PR `staging` → `main`).

| Tag | Commit | Date | Mise en prod par | Ce qui change | Déploiement Vercel |
|---|---|---|---|---|---|
| [v1.0](https://github.com/adrien-cardot/Landing-Test-GitHub/releases/tag/v1.0) | `34568d5` | 13/11/2026 | PR #5 | Page complète : hero (#1), projets (#2), formulaire de contact (#3), footer (#4) | `landing-adrien-cardot-ddt3erv52` |
| [v0.1](https://github.com/adrien-cardot/Landing-Test-GitHub/releases/tag/v0.1) | `864870f` | 13/11/2026 | commit direct (socle) | Lot 0 : squelette de la page, styles de base, règles de travail | `landing-adrien-cardot-l0w41ygre` |
| | `eb4c5d9` | 16/10/2026 | commit direct | Présentation du projet dans le README | pas encore sur Vercel |
| | `0d28a4d` | 17/09/2026 | création du repo | Commit initial | pas encore sur Vercel |

## En attente (PR ouvertes vers `staging`)

| PR | Contenu |
|---|---|
| #6 | Lot 5 : section « Ce que je fais » |
| #7 | Docs : schéma, maquette, journal des versions, déploiement, recette, modèle de PR |
| #8 | Correctif : favicon manquant (relevé en recette) |

## Retrouver une version

```bash
git log --first-parent main --oneline   # toutes les versions
git show v1.0                           # le détail d'une version
git tag -n                              # la liste des tags
```
