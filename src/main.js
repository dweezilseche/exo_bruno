import { initSmoothScroll } from "./smooth-scroll.js";
import { initAnimations } from "./animations.js";
import { initTextSplit } from "./text-split.js";
import { initSliders } from "./slider.js";

document.addEventListener("DOMContentLoaded", () => {
  initSmoothScroll();
  initTextSplit();
  initAnimations();
  initSliders();
});
