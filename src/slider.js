/**
 * Parcourt chaque bloc Webflow marqué `data-slider` sur le conteneur Swiper
 * et lance (ou relance) Swiper avec autoplay + contrôles optionnels.
 * Nécessite Swiper en global (script CDN dans Webflow).
 */
export function initSliders() {
  if (typeof Swiper === "undefined") {
    return;
  }

  document.querySelectorAll("[data-slider]").forEach((container) => {
    // Webflow peut avoir déjà initialisé ce slider : on détruit l’ancienne instance.
    if (container.swiper) {
      container.swiper.destroy(true, true);
    }

    const prevButton = container.querySelector(".carousel_arrow.is-prev");
    const nextButton = container.querySelector(".carousel_arrow.is-next");
    const paginationRoot =
      container.querySelector(".swiper-pagination") ||
      container.querySelector(".carousel_pagination");

    const options = {
      loop: true,
      slidesPerView: 1,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
      },
    };

    if (prevButton && nextButton) {
      options.navigation = {
        prevEl: prevButton,
        nextEl: nextButton,
      };
    }

    if (paginationRoot) {
      options.pagination = {
        el: paginationRoot,
        clickable: true,
      };
    }

    new Swiper(container, options);
  });
}
