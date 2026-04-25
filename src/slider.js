function initTestimonialsSlider() {
  const sliderEl = document.querySelector("[data-slider='testimonials']");
  if (!sliderEl || typeof Swiper === "undefined") {
    return;
  }

  new Swiper(sliderEl, {
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: sliderEl.querySelector(".swiper-pagination"),
      clickable: true,
    },
    breakpoints: {
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    },
  });
}

export function initSliders() {
  initTestimonialsSlider();
}
