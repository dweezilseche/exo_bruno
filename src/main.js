import { initHeader } from "./header.js";
import { initSmoothScroll } from "./smooth-scroll.js";
import { initPlyr } from "./plyr.js";
import { initRibbon } from "./ribbon.js";
import { initSliders } from "./slider.js";
import "./styles.scss";

document.addEventListener("DOMContentLoaded", () => {
  const lenis = initSmoothScroll();
  initHeader(lenis);
  initSliders();
  initPlyr();
  initRibbon();
});
