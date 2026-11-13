# Schéma de travail

## Le circuit d'un lot

```mermaid
flowchart LR
    A["feature/lot<br/>je code"] -->|push| B["Preview Vercel<br/>de la branche"]
    A -->|PR| C{"Relecture<br/>du prof"}
    C -->|refusée| A
    C -->|validée, merge| D["staging<br/>pré-prod"]
    D --> E["landing-adrien-cardot-staging<br/>.vercel.app"]
    D -->|recette OK, PR| F["main<br/>prod"]
    F --> G["landing-adrien-cardot<br/>.vercel.app"]
```

## L'historique des branches

```mermaid
gitGraph
    commit id: "Initial"
    commit id: "Lot 0 socle"
    branch staging
    checkout staging
    branch feature/hero-section
    commit id: "Lot 1 hero"
    checkout staging
    merge feature/hero-section tag: "PR #1"
    branch feature/projets
    commit id: "Lot 2 projets"
    checkout staging
    merge feature/projets tag: "PR #2"
    branch feature/formulaire-contact
    commit id: "Lot 3 contact"
    checkout staging
    merge feature/formulaire-contact tag: "PR #3"
    branch feature/footer
    commit id: "Lot 4 footer"
    checkout staging
    merge feature/footer tag: "PR #4"
    checkout main
    merge staging tag: "PR #5 mise en prod"
```

## Qui fait quoi

| Étape | Branche | Où on la voit | Qui valide |
|---|---|---|---|
| Je code un lot | `feature/...` | preview Vercel de la branche | moi |
| PR du lot | `feature/...` → `staging` | page de la PR | le prof |
| Recette | `staging` | adresse staging | moi |
| Mise en prod | `staging` → `main` | adresse de prod | le prof |

Un commit = une version. Vercel affiche le début du hash du commit sur chaque déploiement, c'est ce numéro qui sert de numéro de version.

## Découpage de la page en lots

| Lot | Branche | Section | Fichiers |
|---|---|---|---|
| 0 | `main` | squelette | `index.html`, `css/base.css` |
| 1 | `feature/hero-section` | hero | `css/hero.css` |
| 2 | `feature/projets` | projets | `css/projets.css` |
| 3 | `feature/formulaire-contact` | contact | `css/contact.css`, `js/contact.js` |
| 4 | `feature/footer` | footer | `css/footer.css` |
| 5 | `feature/services` | ce que je fais | `css/services.css` |

Chaque section a son bloc balisé dans `index.html` et son propre CSS, donc deux lots ne touchent jamais les mêmes lignes.

Maquette de la page : [maquette.svg](maquette.svg)
