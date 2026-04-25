# Design System Webflow

> Source analysee via MCP Figma: fichier `pwPYzjrR3Cq5JVn9Y8DQxe`, node `193:5205` (`Product V2`) et ses sections enfants.
> Ce document distingue:
> - **Observe dans Figma**: valeur explicite extraite.
> - **Deduit**: harmonisation recommandee pour Webflow/Client-First.
> - **A valider**: point non totalement fiable sans revue design.

## 1. Resume de la direction visuelle

- **Direction globale**: interface editoriale tech, contraste fort, dominante navy + accents chauds/froids.
- **Palette**: bleu tres fonce en fond (`#0a0227` / `#050028`), neutres clairs (`#faf1cd`, `#ffffff`), accent CTA jaune (`#ffbf00`), accent secondaire orange (`#ffa560`) et cyan (`#c6f3fd`).
- **Typographies**:
  - display/headings: `Milling Trial` (Duplex 1mm)
  - texte UI: `Inter` Medium
  - labels/meta: `JetBrains Mono`
- **Langage de forme**: petits radius (2px, 4px, 8px), bordures fines `0.5px-1px`, alternance `solid` / `dashed`.
- **Layouts**: sections full-width, container principal `1376px` (marges lat. 32px), grilles 2 colonnes (384/912, 912/421), puis 3-4 colonnes pour cards.
- **Composants signatures**: CTA split avec icone fleche, tags monospace en uppercase, cards dark avec overlays graphiques circulaires.

## 2. Variables globales

### 2.1 Couleurs

| Token | Valeur | Usage | Classe Webflow recommandee |
| ----- | -----: | ----- | -------------------------- |
| `color-brand-primary` | `#0a0227` | Fonds hero/footer/sections dark | `bg-brand-primary`, `text-on-brand` |
| `color-brand-primary-strong` | `#050028` | Texte dark sur fonds clairs, variantes dark | `text-brand-primary`, `bg-brand-primary-strong` |
| `color-brand-secondary` | `#ffbf00` | CTA primaire (hero, nav) | `bg-brand-secondary`, `text-on-secondary` |
| `color-accent-orange` | `#ffa560` | Cards metrique, tags, sections alternes | `bg-accent-orange` |
| `color-accent-cyan` | `#c6f3fd` | Benefit cards / tags / highlights | `bg-accent-cyan` |
| `color-surface-cream` | `#faf1cd` | Cards claires, fonds contenus | `bg-surface-cream` |
| `color-neutral-white` | `#ffffff` | Texte dark section, fonds cards | `text-white`, `bg-white` |
| `color-neutral-black` | `#000000` | Texte principal section claire | `text-black` |
| `color-text-primary` | `#212223` | Texte courant (variante observee) | `text-primary` |
| `color-text-secondary` | `rgba(0,0,0,0.8)` | Corps secondaire section claire | `text-secondary` |
| `color-border-primary` | `#000000` | Bordures cards/cta light | `border-primary` |
| `color-border-inverse` | `#ffffff` | Bordures sur fond dark | `border-inverse` |

### 2.2 Typographies

| Style | Font family | Size | Line-height | Weight | Letter-spacing | Classe Webflow |
| ----- | ----------: | ---: | ----------: | -----: | -------------: | -------------- |
| `Titles/H2` | Milling Trial | 38px | 1.10 | 400 | 0.9257px | `heading-style-h2` |
| `Titles/H3` | Milling Trial | 26px | 1.10 | 400 | 0 | `heading-style-h3` |
| `Titles/H4` | Milling Trial | 24px | 1.08 | 400 | 0 | `heading-style-h4` |
| `Titles/H5` | Milling Trial | 18px | 1.35 | 400 | 0 | `heading-style-h5` |
| `Text/M` | Inter | 16px | 1.40 | 500 | 0 | `text-size-medium` |
| `Text/S` | Inter | 14px | 1.40 | 500 | 0 | `text-size-regular` |
| `Subtitles/SUB1` | JetBrains Mono | 18px | 1.25 | 400 | 0 | `text-size-large text-style-uppercase` |
| `Subtitles/SUB2` | JetBrains Mono | 16px | 1.20 | 400 | 0 | `text-size-medium text-style-uppercase` |
| `Subtitles/SUB3` | JetBrains Mono | 14px | 1.10 | 400 | 1px | `text-size-small text-style-uppercase` |
| `Subtitles/SUB4` | JetBrains Mono | 12px | 1.10 | 400 | 0 | `text-size-tiny text-style-uppercase` |

### 2.3 Espacements

| Token | Valeur | Usage |
| ----- | -----: | ----- |
| `space-1` | 0.25rem (4px) | gap icone+texte, tags |
| `space-2` | 0.5rem (8px) | chips, badges, petits gaps |
| `space-3` | 0.75rem (12px) | blocs labels/actions |
| `space-4` | 1rem (16px) | nav gap, colonne cards |
| `space-6` | 1.5rem (24px) | header interne cartes |
| `space-8` | 2rem (32px) | padding global horizontal, separations |
| `space-10` | 2.5rem (40px) | blocs footer, sections compactes |
| `space-12` | 3rem (48px) | CTA/footer blocks |
| `space-15` | 3.75rem (60px) | ecarts entre grands groupes |
| `space-18` | 4.5rem (72px) | padding section standard |

### 2.4 Radius

| Token | Valeur | Usage |
| ----- | -----: | ----- |
| `radius-small` | 2px | tags/labels micros |
| `radius-medium` | 4px | boutons, cards standard, inputs |
| `radius-large` | 8px | hero container, image wrappers |
| `radius-xlarge` | 10.43px | image hero principale (observe) |
| `radius-full` | 999px | reserve (non dominant dans cette maquette) |

### 2.5 Bordures

| Token | Width | Style | Couleur | Usage |
| ----- | ----: | ----- | ------- | ----- |
| `border-width-hairline` | 0.5px | solid | blanc/noir | chips, tags, separators |
| `border-width-regular` | 1px | solid | noir/blanc | boutons outline, cards |
| `border-width-image` | 1.3px | solid | `#e4e4e4` / `#ededed` | cadres images |
| `border-style-dashed` | 1px | dashed | noir/blanc/jaune | CTA icon, grilles, colonnes |
| `border-style-solid` | 1px | solid | noir/blanc | outline et separations |

## 3. Typographie detaillee

- **Display (`Milling Trial`)**
  - Utiliser pour H1-H5 et grandes accroches.
  - Tracking visible surtout en H2 (`~0.93px`) pour garder le rendu editorial.
- **Corps (`Inter Medium`)**
  - Texte principal 14/16px, poids 500 constant.
  - Opacites utilisees (`0.8-0.9`) sur secondaires.
- **Meta/UI (`JetBrains Mono`)**
  - Labels uppercase, tags dates, categories, sous-titres section.
  - Valeurs 12-18px selon importance.
- **Classes Client-First proposees**
  - `heading-style-h1` (deduit: 46px observe en hero title)
  - `heading-style-h2`, `heading-style-h3`, `heading-style-h4`, `heading-style-h5`
  - `text-size-large`, `text-size-medium`, `text-size-regular`, `text-size-small`, `text-size-tiny`
  - `text-style-uppercase`, `text-style-muted`, `text-weight-medium`

## 4. Boutons et CTA

| Composant | Classe | Size | Padding | Background | Text color | Border | Radius | Usage |
| --------- | ------ | ---: | ------: | ---------- | ---------- | ------ | -----: | ----- |
| CTA nav primaire | `button nav_button` | 32px h | 16px x | `#ffbf00` | `#000` | none | 4px | Header hero |
| CTA hero split icon | `button is-icon-left` | 48px h | icon `16x12`, label `28x12` | icon outline + label jaune | noir | `1px dashed #ffbf00` (icone) | 4px | Hero principal |
| CTA primaire dark section | `button` | 48px h | 28-32px x | `#000` | `#fff` | none | 4-8px | Feature cards |
| CTA outline dark bg | `button is-outline` | 48px h | 28-32px x | transparent | `#fff` | `1px solid #fff` | 4px | Section benefits |
| CTA outline light bg | `button is-outline` | 48px h | 32px x | transparent | `#000` | `1px solid #000` | 4px | Resources header |
| CTA footer dash | `button is-dashed` | 48px h | 32px x | `#fafafa` | `#0a0227` | `1px dashed #000` | 4px | Footer |
| Text link action | `text-link` | auto | 0 | transparent | noir/blanc | none | 0 | `See more`, `See the article` |

**Etats (deduits, non explicitement fournis par Figma):**
- Hover bouton plein: `filter: brightness(0.95)`
- Hover outline: fond 6-8% de la couleur de texte
- Focus: `outline 2px` contraste eleve (`#ffbf00` sur dark, `#0a0227` sur light)

## 5. Layout system

- **Page shell**
  - `page-wrapper` > `main-wrapper`
  - sections full-width avec `padding-global` (`32px`) et `padding-section-large` (`72px` vertical)
- **Containers**
  - largeur principale observee: `1376px` (1440 - 2x32)
  - variantes proposees:
    - `container-large` `max-width: 86rem` (1376px)
    - `container-medium` `max-width: 75rem`
    - `container-small` `max-width: 48rem`
- **Grilles dominantes**
  - 2 colonnes asymetriques: `384/912` et `912/421`
  - 3 colonnes: cartes temoignages (`448x3`)
  - 4 colonnes: benefits/resources (`1fr 1fr 1fr 1fr`)
- **Gaps recurrences**
  - horizontal: `16px`, `24px`, `32px`
  - vertical: `24px`, `48px`, `60px`, `72px`

## 6. Sections principales

1. **Hero + top nav** (`193:5243`)
   - Fond dark, nav simple links + CTA
   - Headline large + CTA split + badges features
2. **Feature stack** (`193:5381`)
   - Intro + bloc 2 colonnes alternees + trio cards
3. **Benefits** (`193:5464`)
   - Titre + CTA outline + grille 4 cards benefices
4. **Research/Proof** (`193:5519`)
   - 3 cards: quote, metric, proof logo
5. **Ecosystem map** (`193:5566`)
   - Carte visuelle logos outils/cloud/dev
6. **Featured resources** (`193:5813`)
   - Header + CTA + grille 4 resource cards
7. **Media/demo slider** (`193:5890`)
   - Titre section + media preview + controls
8. **Dual offer cards** (`193:5941`)
   - 2 cards produits + CTA plein + lien secondaire
9. **Footer mega-links** (`193:6007`)
   - 4 colonnes liens + social + legal

## 7. Composants reutilisables

- `component/navbar`
- `component/button` (`primary`, `outline`, `dashed`, `icon-left`)
- `component/tag` (mono uppercase, border hairline)
- `component/feature-chip`
- `component/resource-card`
- `component/benefit-card`
- `component/testimonial-card`
- `component/metric-card`
- `component/media-frame`
- `component/footer-column`
- `component/social-icon`

## 8. Cards et blocs de contenu

- **Resource card**
  - dark background, metadata badges top-left, title en bas, text-link footer
- **Benefit card**
  - fond cyan (plein ou translucide), header badge, texte explicatif
- **Feature card**
  - fond creme, titre H3, illustration centree, CTA principal + lien
- **Testimonial/metric**
  - variations de fonds (`cream`, `orange`, `dark`)
  - conserver meme trame: headline -> detail -> signature/logo

## 9. Header / Navigation

- **Structure**
  - `section_header` > `padding-global` > `container-large`
  - row: nav links gauche, actions droite (`Log in` + `Book a demo`)
- **Classes Client-First**
  - `nav_component`, `nav_menu`, `nav_link`, `nav_right`, `nav_button`
- **Specs observees**
  - hauteur header: `70px`
  - typo nav: `Inter 14/1.4 500`
  - gap menu: `32px`

## 10. Footer

- **Structure**
  - bloc intro sentence
  - grille liens multi-colonnes (Company/Resources/Connect/Action)
  - ligne legal finale
- **Classes recommandees**
  - `footer_component`, `footer_top`, `footer_columns`, `footer_col`, `footer_link-list`, `footer_bottom`
- **Specs observees**
  - fond `#0a0227`
  - bordures de separation dashed 0.5px
  - CTA footer style dashed inversé

## 11. Responsive

- **Breakpoints Webflow (deduits)**
  - Desktop: `>= 992`
  - Tablet: `991-768`
  - Mobile landscape: `767-480`
  - Mobile portrait: `<= 479`
- **Comportements recommandes**
  - Grilles 4 colonnes -> 2 colonnes (tablet) -> 1 colonne (mobile)
  - Layouts 384/912 et 912/421 -> stack vertical
  - CTA split hero -> bouton simple `button is-large` sur mobile
  - Footer 4 colonnes -> accordions/stack

## 12. Recommandations Client-First

- **Structure utilitaire**
  - `page-wrapper`, `main-wrapper`, `padding-global`, `container-large`
  - `padding-section-large`, `padding-section-medium`, `padding-section-small`
- **Spacing utilities**
  - `spacer-tiny` 4px, `spacer-xxsmall` 8px, `spacer-xsmall` 12px, `spacer-small` 16px, `spacer-medium` 24px, `spacer-large` 32px, `spacer-xlarge` 48px, `spacer-xxlarge` 72px
- **Utilities cibles**
  - `text-color-white`, `text-color-black`, `background-color-dark`, `background-color-cream`, `border-color-white`, `border-style-dashed`
- **Composants**
  - prefixer par role: `button`, `card_resource`, `card_benefit`, `section_hero`, `section_resources`
  - modifiers `is-`: `is-dark`, `is-outline`, `is-featured`, `is-active`

## 13. Incoherences ou points a valider

1. **Radius CTA non uniforme**: 4px et 8px coexistent selon sections.
2. **Nuances dark proches**: `#0a0227` et `#050028` utilisees en parallele, besoin d'une regle de priorite.
3. **Typo display**: `Milling Trial` (font custom) necessite verification licence + fallback web-safe.
4. **Bordures hairline** (`0.5px`) peuvent mal rendre sur certains ecrans non-retina.
5. **Sections nommees "Logo / 3 /"** dans Figma: nomenclature non semantique, a renommer avant handoff final.
6. **Certaines valeurs precision flottante** (ex: `10.432px`) probablement issues de scaling; normalisation recommandee (10px ou 12px).
7. **Responsive non explicitement documente dans le node**: comportements proposes sont deduits et a confirmer avec design.

---

## Classes Client-First recommandees (liste de depart)

`page-wrapper`, `main-wrapper`, `padding-global`, `container-large`, `container-medium`, `container-small`, `padding-section-large`, `padding-section-medium`, `padding-section-small`, `section_hero`, `section_features`, `section_benefits`, `section_resources`, `section_footer`, `heading-style-h1`, `heading-style-h2`, `heading-style-h3`, `heading-style-h4`, `text-size-large`, `text-size-medium`, `text-size-regular`, `text-size-small`, `text-size-tiny`, `text-style-uppercase`, `button`, `button is-outline`, `button is-dashed`, `button is-icon-left`, `text-link`, `card_resource`, `card_benefit`, `card_testimonial`, `badge`, `tag`, `spacer-small`, `spacer-medium`, `spacer-large`, `spacer-xlarge`.
