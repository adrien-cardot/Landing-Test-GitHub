# Journal des versions

Une version = un commit sur `main`. Le numéro de version est le début du hash du commit, le même que Vercel affiche sur le déploiement de prod. On ajoute une ligne à chaque mise en prod (PR `staging` → `main`).

| Version | Date | Mise en prod par | Ce qui change | Déploiement Vercel |
|---|---|---|---|---|
| `34568d5` | 13/11/2026 | PR #5 | Page complète : hero (#1), projets (#2), formulaire de contact (#3), footer (#4) | `landing-adrien-cardot-ddt3erv52` |
| `864870f` | 13/11/2026 | commit direct (socle) | Lot 0 : squelette de la page, styles de base, règles de travail | `landing-adrien-cardot-l0w41ygre` |
| `eb4c5d9` | 16/10/2026 | commit direct | Présentation du projet dans le README | pas encore sur Vercel |
| `0d28a4d` | 17/09/2026 | création du repo | Commit initial | pas encore sur Vercel |

## En attente (PR ouvertes vers `staging`)

| PR | Contenu |
|---|---|
| #6 | Lot 5 : section « Ce que je fais » |
| #7 | Docs : schéma, maquette, journal des versions, déploiement, recette, modèle de PR |
| #8 | Correctif : favicon manquant (relevé en recette) |

## Retrouver une version

```bash
git log --first-parent main --oneline   # toutes les versions
git show 34568d5                        # le détail d'une version
```
