# Pro du Tuyau — comparaison vs références (Black Plumbing / Fry Plumbing)

Document interne de la boucle de vision. Captures de référence : `reference/`
(vues coupées dans `reference/study/`). Captures du site : `compare/`.
(Artefacts locaux, ignorés par git — voir `.gitignore`.)

## 1. Cible visuelle

- **Black Plumbing** (`blackplumbing.com`) : cible principale pour la structure,
  le ton, la palette, la typographie et la quasi-totalité des pages.
- **Fry Plumbing** (`fryplumbing.com`) : uniquement le **hero** (photo + texte à
  gauche + CTAs empilés) et la **trust-bar** (bandeau de preuves sous le hero).

Identité, nom, téléphone, logo et textes **non copiés** : tout le contenu est
original, en français québécois, pour l'entreprise fictive « Pro du Tuyau ».

## 2. Tokens design

| Token | Valeur | Source |
|---|---|---|
| Fond principal | `#171516` (coal) | Black : fond quasi-noir chaud |
| Fond nav / cartes sombres | `#211F21` (coal-nav) | Black : nav #211F21 |
| Rouge | `#C9272B` (blaze) | Black : rouge CTA/pills |
| Lignes | `#2E2B2D` (coal-line) | Black : séparateurs |
| Textes clairs | `#F5F4F3` (bone) | Black : textes blancs cassés |
| Fond clair | `#F5F4F3` / cartes blanches | Black : sections claires |
| Texte sombre | `#1A191B` (ink) | Black |
| Display | **Anton** | Black utilise « Brexter » (Anton ≈) |
| Nav / labels | **Bebas Neue** | Black : condensed caps |
| Corps | **Inter** | Standard |
| Pills | rayon plein (`rounded-pill`) | Black : CTAs en pilule |
| Ghost text | contours de grands titres | Black : « SEE WHAT OUR CUSTOMERS ARE SAYING », « OPEN 24/7 » |

## 3. Page d'accueil

| Élément Black | Pro du Tuyau | Notes |
|---|---|---|
| Top-bar + nav sombre, logo gauche, menu, pill téléphone droite | Identique (438 399 3014, switch FR/EN) | CTA « Prendre rendez-vous » en rouge à droite |
| Hero photo équipe + titre gauche + ghost « OPEN 24/7 » | **Hero Fry** : van brandé + titre Anton + 2 CTAs + ghost « 24/7 » | Choix spécifié Fry pour le hero |
| Trust-bar : Google 4.8, FB 4.2, pill, Angi, BBB | Bandeau Fry-style : 3 pills (depuis 1984 / un appel c'est réglé / Laval–Montréal) | Choix Fry |
| Rangée de notes (Google/FB/BBB) | Section notes dédiée sous le trust-bar (avec mention « démo ») | Contenu démo, pas de faux avis vérifiés |
| « PLUMBING / HVAC SERVICES » + 7 icônes circulaires texturées | « NOS SERVICES DE PLOMBERIE » + 7 icônes circulaires (trait) | 7 services identiques en nombre |
| Map + « LOCATIONS WE SERVE » (12 villes, 3 colonnes) | « AIRES DE SERVICE » : 12 villes en chips (2×6) sur texture | Pas de carte interactive (scope) ; villes réelles de la Rive-Sud/Nord |
| Watermark « SEE WHAT OUR CUSTOMERS ARE SAYING » + rangée d'icônes | Watermark « CE QUE DISENT NOS CLIENTS » + badges ghost aux coins | Badges ghost seulement aux très grands écrans (2xl) pour éviter les collisions |
| Carte réputation sombre + 7 cartes d'avis (étoiles, « X days ago », nom, logo Google) | Carte réputation sombre + 5 avis + carte CTA « 24/7 » rouge | Avis fictifs étiquetés « démo » |
| Pill « NEED HELP WITH FINANCING? » + panneau rouge (photo + WE HAVE YOU COVERED + CTA noir) | Pill « ON DOIT Y PENSER? » + panneau rouge « ON A UNE SOLUTION » + CTA | Même mécanique de pill débordant sur le panneau |
| Bloc régional : badges empilés + titre + téléphone | Bloc régional : 4 badges + « DES PLOMBIERS EXPERTS À LAVAL ET MONTRÉAL » + pill téléphone | Badges en ligne (desktop) plutôt qu'empilés |
| Footer sombre, 4 colonnes, liseré rouge | Identique (Services / Aires / Entreprise) | « Site de démonstration — entreprise fictive » |

## 4. Pages services (7)

| Élément Black | Pro du Tuyau | Notes |
|---|---|---|
| Hero photo chantier, titre outline débordant sous la photo, pill « Schedule » | Identique (fix z-index pour le débordement outline) | Titre Anton outline (fill ink + stroke blanc) |
| « ← Back to … » | « ← Retour aux services » | Même position |
| Long-form gauche (h2 Anton, paragraphes, carte citation sombre, FAQ en rouge) | Long-form gauche : intro + 2 sections + carte « ce qu'en disent nos clients » + **FAQ accordéon** | FAQ en accordéon (plus UX) plutôt que blocs rouges |
| Sidebar sombre : SERVICES (actif en rouge) + RESOURCES + téléphone | Identique (Services / Ressources + téléphone + CTA en ligne) | CTA « Prendre rendez-vous en ligne » |
| CTA rouge « OUR TEAM MOVES FAST… » | CTA rouge « VOTRE PROJET COMMENCE PAR UN COUP DE FIL » | Même panneau arrondi |
| Bloc régional + footer | Footer directement | Le bloc régional est sur l'accueil (scope) |

## 5. Prise de rendez-vous

| Élément Black | Pro du Tuyau | Notes |
|---|---|---|
| Hero texture sombre + titre outline + pill téléphone | Hero texture sombre + pill blanc « PRENDRE RENDEZ-VOUS » | Version plus épurée |
| Pill « WE ARE READY TO HELP » + panneau rouge, widget blanc : mois, scroller de jours, créneaux 2×2 | Pill « ON EST LÀ POUR VOUS » + panneau rouge débordant, widget : 7 jours + 5 créneaux, puis formulaire | **Fonctionnel** : `POST /api/rdv` → 201 + UUID |
| Bloc régional (badges + van) | Section « NOS ÉQUIPES EN RÉGION » : 6 cartes ville (adresse + téléphone) | Adresses fictives cohérentes |

## 6. À propos

| Élément Black | Pro du Tuyau | Notes |
|---|---|---|
| Hero photo équipe + titre centré + pill téléphone | Hero photo chantier + titre outline débordant | |
| Vidéo/vidéo van (arrondie) | (supprimé — scope) | |
| « SKILLED AND EXPERIENCED PLUMBERS » + paragraphes + pill | Kicker rouge + 2 paragraphes de story | |
| 2 blocs icones sombres (Licensed / Family-owned) | 2 cartes claires « ÉQUIPE LICENCIÉE ET ASSURÉE » / « UNE ENTREPRISE FAMILIALE » | Inversion sombre→clair pour la variété |
| Map + Locations | Ligne de badges (Urgence 24/7, Licencié RBQ, Assuré 2 M $, Service premium) | |
| Bloc régional + footer | Panneau CTA « PARLONS DE VOTRE PROJET » + footer | |

## 7. Boucle de vision (résultats)

Captures finales : `compare/` (home desktop/mobile + menu mobile, service,
rendez-vous, à propos, home EN).

Corrections apportées après comparaison :
1. **Hero service/à-propos** : titre outline invisible (overlay gradient peignait
   par-dessus le `<h1>` statique) → `relative z-10` sur les titres débordants.
2. **Badges ghost témoignages** : collisions avec les cartes d'avis → cantonnés
   aux coins, visibles seulement en 2xl.
3. **Ghost « 24/7 » du hero** : stroke trop faible (0.12 → 0.22).
4. **Menu mobile** : ajout d'« À propos » + lien téléphone.
5. **OG images** : le renderer `takumi` n'hérite pas du `font-family` des
   conteneurs sur les nœuds texte → chaque ligne de texte porte son style
   explicite ; multi-lignes via `flex-column` (pas de `<br>`).

Vérifications : `npm run build` (prerender FR+EN complet), `npx nuxi typecheck`,
`npm run lint` — les trois passent. `POST /api/rdv` → 201.

## 8. Ce qui diffère (décision consciente)

- Hero en rouge diagonal + van (Fry) plutôt que photo d'équipe (Black).
- Chips de villes plutôt que carte (Black a une map SVG).
- FAQ accordéon plutôt que blocs FAQ rouges.
- Blocs à propos en clair plutôt qu'en sombre.
- Pas de section blog, pages par ville, carrières ou page financement dédiée (scope).
