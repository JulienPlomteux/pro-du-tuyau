# Pro du Tuyau — site vitrine bilingue FR/EN

Site de démonstration complet pour l'entreprise de plomberie fictive
**Pro du Tuyau** (Laval / Montréal), produit comme pièce de portfolio.
Direction artistique calquée sur un référence de plomberie haut de gamme
(structure et ton de *Black Plumbing*, hero et trust-bar à la *Fry Plumbing*) —
voir [COMPARISON.md](./COMPARISON.md) pour le détail.

> ⚠️ **Entreprise fictive.** Site de démonstration : téléphone, avis,
> adresses et témoignages sont inventés. Aucun prix n'est affiché.

## Stack

- **Nuxt 4** (SSR + prerendering statique complet FR/EN)
- **Tailwind CSS 4** (tokens design : palette `coal`/`blaze`/`bone`/`ink`)
- **@nuxtjs/i18n v9** — `fr` (français québécois, racine) + `en` (`/en`)
- **nuxt-og-image** (renderer `takumi`) — images OG 1200×630 prérendues
- **nuxt-schema-org**, **@nuxtjs/sitemap**, **@nuxtjs/robots**, **nuxt-site-config**
- **@nuxt/image** (AVIF/WebP, `_ipx`)
- **Nitro** — endpoint `POST /api/rdv` (validation + persistance JSON)
- Polices : **Anton** (display), **Bebas Neue** (nav/labels), **Inter** (corps)

## Lancer

```bash
npm install
npm run dev        # http://localhost:4343
```

Build de production :

```bash
npm run build      # prerender toutes les routes FR + EN
node .output/server/index.mjs   # ou : npm run preview
```

Vérifications (les trois passent) :

```bash
npm run build
npx nuxi typecheck
npm run lint
```

### Tester le formulaire de rendez-vous

```bash
curl -i -X POST http://localhost:4344/api/rdv \
  -H 'Content-Type: application/json' \
  -d '{"type":"rdv","name":"Jean Tremblay","phone":"438 555 0101",
       "service":"reparation","day":"2026-09-20","slot":"8 h – 10 h","locale":"fr"}'
# → 201 {"ok":true,"status":"ok","id":"<uuid>",...}
```

Les demandes sont persistées dans `server/data/rdv.json` (à ignorer pour la démo).

## Routes

| Route FR | Route EN | Contenu |
|---|---|---|
| `/` | `/en` | Accueil : hero (van), trust-bar, notes, 7 services, aires, témoignages, financement, régional |
| `/services/{reparation\|fuites\|chauffe-eau\|salles-de-bain\|drainage\|urgences\|installation}` | `/en/services/…` | Page longue + sidebar + FAQ + CTA |
| `/prendre-rendez-vous` | `/en/book` | Widget jour + créneaux + formulaire (POST `/api/rdv`) |
| `/a-propos` | `/en/about` | Story, badges, CTA |
| `/contact` | `/en/contact` | Formulaire commercial (même endpoint, `type: "contact"`) |
| `404` | `404` | Page d'erreur brandée |

## Structure

```
app/
  components/        # sections, widget, sidebar, icônes SVG
  components/OgImage/Default.takumi.vue   # image OG (branding PT)
  composables/       # useSite (constantes), useLanguage
  data/content.ts    # données structurées bilingues (avis, villes, créneaux, FAQ)
  layouts/default.vue# reveal on-scroll (IntersectionObserver)
  pages/             # routes
i18n/locales/        # fr.json / en.json (chaînes plates — i18n v9)
server/api/rdv.post.ts
public/img/          # logo, van, textures, photos de chantier
```

### Note i18n (v9)

Avec `@nuxtjs/i18n` v9, seules les **chaînes plates** survivent à `t()` ;
les tableaux/objets sont compilés en chaînes uniques. Toutes les données
structurées (avis, villes, badges, créneaux, FAQ par service) vivent donc dans
`app/data/content.ts` (typed `Record<'fr'|'en', …>`), pas dans les JSON.
`localePath()` vient du composable auto-importé `useLocalePath()`, pas de
`useI18n()`.

## Identité

- Téléphone : `438 399 3014` · Domaine : `https://www.produtuyeau.ca` (placeholder)
- Logo : `public/img/logo.png` (placeholder — remplacer par le logo final)
- GTM : ID configurable via `runtimeConfig` (vide par défaut)

## Artefacts de la boucle de vision

Générés en local pendant le développement (ignorés par git) :

- `reference/` — captures des sites de référence (+ vues coupées dans `reference/study/`)
- `compare/` — captures du site (desktop/mobile/menu, service, rdv, à propos, EN)
- `COMPARISON.md` — correspondance élément par élément + corrections apportées
