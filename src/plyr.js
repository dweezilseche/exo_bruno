/**
 * Lecteurs Plyr sur tout le site.
 *
 * Prérequis : Plyr chargé en global depuis le CDN (Webflow).
 * Dans main.js : appeler initSliders() avant initPlyr() si un carrousel contient des vidéos,
 * pour que les anciens lecteurs soient détruits avant d’en recréer.
 *
 * Création depuis le Designer Webflow (sans code Embed si tu préfères) :
 * 1. Ajouter un Div Block (vide) à l’endroit du lecteur.
 * 2. Panneau de droite → classe : ajouter `js-plyr` (combo class ou style global).
 * 3. Même panneau → « Element settings » (icône roue) → Custom attributes → ajouter :
 *    - data-plyr-provider = youtube ou vimeo
 *    - data-plyr-embed-id = l’ID de la vidéo (chaîne YouTube après v=, ou ID numérique Vimeo)
 *    - optionnel : data-plyr-ratio = 16:9, 5:4, etc.
 * 4. Laisser le div vide : Plyr injecte l’iframe au chargement du site.
 * 5. Optionnel : enrober ce div dans un parent avec la classe `plyr-adaptive` + hauteur sur le parent (voir _plyr.scss).
 * 6. Tu peux enregistrer ce bloc comme Component Webflow pour le réutiliser.
 *
 * Alternative : composant « Embed » avec le même markup en HTML si tu préfères coller du code.
 *
 * Fichier vidéo (MP4, etc.) : élément Video natif Webflow + classe `js-plyr` sur la balise vidéo si le Designer l’expose.
 */

// Sélecteurs : « tout élément qui correspond doit devenir un lecteur Plyr »
const MEDIA_SELECTOR = [
  "video.js-plyr",
  '.js-plyr[data-plyr-provider="youtube"]',
  '.js-plyr[data-plyr-provider="vimeo"]',
].join(", ");

// Évite de lancer deux fois new Plyr() sur le même nœud (cas rare, mais sécurise le code)
const alreadyInitialized = new WeakSet();

// Réglages communs (sans ratio ici : voir data-plyr-ratio ou classe plyr-adaptive + CSS)
const basePlyrSettings = {
  controls: [
    "play-large",
    "play",
    "progress",
    "current-time",
    "mute",
    "volume",
    "fullscreen",
  ],

  clickToPlay: true,
  hideControls: true,

  youtube: {
    rel: 0,
    modestbranding: 1,
  },
  vimeo: {
    byline: false,
    portrait: false,
    title: false,
  },
};

/** Options pour un lecteur : copie la base + ratio seulement si défini dans le HTML. */
function getPlyrOptionsForElement(element) {
  const options = { ...basePlyrSettings };

  const ratioFromHtml = element.getAttribute("data-plyr-ratio");
  if (ratioFromHtml) {
    options.ratio = ratioFromHtml;
  }

  return options;
}

/** Indique si un conteneur Swiper doit être traité comme un slider « média » (options Swiper). */
export function containerHasPlyrMedia(container) {
  const forcedByAttribute = container.hasAttribute("data-slider-video");
  const hasEmbedOrVideo = container.querySelector(MEDIA_SELECTOR) !== null;

  return forcedByAttribute || hasEmbedOrVideo;
}

/** Supprime les lecteurs Plyr à l’intérieur d’un bloc (avant de recréer le carrousel). */
export function destroyPlyrInside(container) {
  if (typeof Plyr === "undefined") {
    return;
  }

  const plyrRoots = container.querySelectorAll(".plyr");

  plyrRoots.forEach((root) => {
    const player = root.plyr;
    if (player) {
      player.destroy();
    }
  });
}

/** Crée un lecteur Plyr pour chaque cible trouvée sous root (par défaut : toute la page). */
export function initPlyr(root = document) {
  if (typeof Plyr === "undefined") {
    return;
  }

  const elements = root.querySelectorAll(MEDIA_SELECTOR);

  elements.forEach((element) => {
    if (alreadyInitialized.has(element)) {
      return;
    }

    new Plyr(element, getPlyrOptionsForElement(element));
    alreadyInitialized.add(element);
  });
}

/** Quand on change de slide Swiper, met en pause toutes les vidéos encore dans ce carrousel. */
export function bindPlyrPauseOnSlideChange(container, swiper) {
  if (!containerHasPlyrMedia(container)) {
    return;
  }

  function pauseAllPlayersInThisCarousel() {
    const plyrRoots = container.querySelectorAll(".plyr");

    plyrRoots.forEach((root) => {
      const player = root.plyr;
      if (player && typeof player.pause === "function") {
        player.pause();
      }
    });
  }

  swiper.on("slideChangeTransitionStart", pauseAllPlayersInThisCarousel);
}
