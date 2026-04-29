import {
  bindPlyrPauseOnSlideChange,
  containerHasPlyrMedia,
  destroyPlyrInside,
} from "./plyr.js";

export function initSliders() {
  if (typeof Swiper === "undefined") {
    return;
  }

  document.querySelectorAll("[data-slider]").forEach((container) => {
    destroyPlyrInside(container);

    if (container.swiper) {
      container.swiper.destroy(true, true);
    }

    const prevButton = container.querySelector(".carousel_arrow.is-prev");
    const nextButton = container.querySelector(".carousel_arrow.is-next");
    const paginationRoot =
      container.querySelector(".swiper-pagination") ||
      container.querySelector(".carousel_pagination");

    const isVideoSlider = containerHasPlyrMedia(container);

    const options = {
      slidesPerView: 1,
      loop: !isVideoSlider,
      // autoplay: {
      //   delay: isVideoSlider ? 7000 : 4000,
      //   disableOnInteraction: false,
      //   pauseOnMouseEnter: false,
      // },
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

    const swiper = new Swiper(container, options);
    bindPlyrPauseOnSlideChange(container, swiper);
  });
}
