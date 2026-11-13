# Comment on travaille sur ce repo

Deux branches fixes :

| Branche   | Rôle                         | Déployée sur      |
|-----------|------------------------------|-------------------|
| `main`    | la prod, ce que les gens voient | Vercel production |
| `staging` | la pré-prod, pour tester     | Vercel staging    |

Le code arrive par lots, un lot = une branche `feature/...` :

1. Je crée la branche du lot depuis `staging`.
2. Je code, je commit, je push. Vercel fait une preview à chaque push.
3. J'ouvre une PR **vers `staging`** (jamais vers `main`).
4. La PR est relue et validée, puis mergée dans `staging`.
5. Je fais la recette sur l'adresse staging.
6. Quand tout est bon, une PR `staging` vers `main` passe le tout en prod.

Chaque section a son bloc dans `index.html` et son propre fichier CSS, pour que deux lots ne se marchent pas dessus.
