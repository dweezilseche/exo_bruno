export function initSmoothScroll() {
  if (typeof Lenis === "undefined") {
    return;
  }

  const lenis = new Lenis({
    lerp: 0.1,
    smooth: true,
  });

  if (typeof ScrollTrigger !== "undefined") {
    lenis.on("scroll", ScrollTrigger.update);
  }

  if (typeof gsap !== "undefined") {
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);
  }
}
