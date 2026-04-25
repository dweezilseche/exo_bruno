# exo-bruno

Repo JavaScript + CSS custom (Sass) pour integration Webflow one-page.

## Prerequis

- Node.js 18+ recommande

## Installation

```bash
npm install
```

## Build

```bash
npm run build
```

Le build genere :

- `dist/bundle.min.js` (JS custom)
- `dist/styles.min.css` (CSS custom compile depuis `src/styles.scss`)

## Structure

```text
src/
  main.js
  animations.js
  slider.js
  smooth-scroll.js
  text-split.js
  styles.scss
  styles/
    _abstracts.scss
    _base.scss
    _components.scss
dist/
  bundle.min.js
  styles.min.css
```

## Rappels importants

- Ne pas importer GSAP, ScrollTrigger, Lenis, SplitType ou Swiper via npm.
- Ces librairies sont chargees via CDN dans Webflow, en variables globales.
- Cibler les elements uniquement avec des attributs `data-*`.

## Snippets Webflow

Remplace `{user}` et `{repo}` par ton compte/repo GitHub.

Head (Project Settings -> Custom Code -> Head) :

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/{user}/{repo}@latest/dist/styles.min.css" />
```

Footer (Project Settings -> Custom Code -> Footer) :

```html
<script src="https://cdn.jsdelivr.net/npm/gsap@3/dist/gsap.min.js" defer></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrollTrigger.min.js" defer></script>
<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js" defer></script>
<script src="https://cdn.jsdelivr.net/npm/lenis@1/dist/lenis.min.js" defer></script>
<script src="https://cdn.jsdelivr.net/npm/split-type@0.3/umd/index.min.js" defer></script>
<script src="https://cdn.jsdelivr.net/gh/{user}/{repo}@latest/dist/bundle.min.js" defer></script>
```
