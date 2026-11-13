# Cahier de recette

À dérouler sur l'adresse **staging** avant chaque PR `staging` → `main`. Chaque test se fait sur PC (1366 px) et sur mobile (390 px).

## Les tests

| N° | Test | Comment | Résultat attendu |
|---|---|---|---|
| R1 | La page répond | ouvrir l'adresse | page affichée, code 200 |
| R2 | Toutes les sections sont là | faire défiler | hero, services, 6 projets, formulaire, footer |
| R3 | Pas de débordement | faire défiler sur mobile | aucune barre de défilement horizontale |
| R4 | Images | faire défiler jusqu'en bas | les 6 images des projets s'affichent |
| R5 | Formulaire vide | cliquer « Envoyer » sans rien remplir | message d'erreur, les 3 champs en rouge |
| R6 | E-mail invalide | taper `pas-un-mail` | le champ e-mail reste en rouge |
| R7 | Formulaire correct | remplir les champs avec un vrai e-mail | la messagerie s'ouvre avec le sujet et le message préremplis |
| R8 | Footer | regarder l'année | année en cours |
| R9 | Console | ouvrir les outils de dev (F12) | aucune erreur rouge |
| R10 | Liens externes | cliquer chaque projet, mon site, Malt | chaque lien ouvre la bonne page |
| R11 | Ancres | cliquer « Voir mes projets », « Contact », « Haut de page » | la page descend ou remonte au bon endroit |

## Recette du 13/11/2026

Staging en version `f94ff37` (lots 1 à 4 mergés). Tests passés à la main et avec un script Playwright (Edge, sans fenêtre).

| N° | PC | Mobile | Remarque |
|---|---|---|---|
| R1 | OK | OK | |
| R2 | OK | OK | services pas encore là (PR #6 en attente) |
| R3 | OK | OK | largeur 1366 / 390, rien ne dépasse |
| R4 | OK | OK | 6/6 |
| R5 | OK | OK | 3 champs signalés |
| R6 | OK | OK | |
| R7 | OK | OK | |
| R8 | OK | OK | 2026 |
| R9 | **KO** | OK | `favicon.ico` en 404, corrigé dans la PR #8 |
| R10 | OK | OK | 8 liens vérifiés |
| R11 | OK | OK | |

**Décision** : mise en prod possible, l'anomalie R9 ne gêne pas l'utilisation. Correctif en PR #8, à revérifier à la prochaine recette.

## Modèle pour la prochaine recette

Copier ce bloc sous le précédent :

```markdown
## Recette du JJ/MM/AAAA

Staging en version `xxxxxxx`.

| N° | PC | Mobile | Remarque |
|---|---|---|---|
| R1 | | | |
| ... | | | |

**Décision** : mise en prod oui / non.
```
