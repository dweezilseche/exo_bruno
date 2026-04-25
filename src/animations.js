function getAnimationConfig(type) {
  switch (type) {
    case "fade-in":
      return { y: 0, x: 0, opacity: 0, scale: 1 };
    case "fade-left":
      return { y: 0, x: 60, opacity: 0, scale: 1 };
    case "fade-right":
      return { y: 0, x: -60, opacity: 0, scale: 1 };
    case "scale-in":
      return { y: 0, x: 0, opacity: 0, scale: 0.92 };
    case "fade-up":
    default:
      return { y: 60, x: 0, opacity: 0, scale: 1 };
  }
}

export function initAnimations() {
  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  document.querySelectorAll("[data-animate]").forEach((el) => {
    const type = el.getAttribute("data-animate") || "fade-up";
    const delay = parseFloat(el.getAttribute("data-animate-delay")) || 0;
    const stagger = parseFloat(el.getAttribute("data-animate-stagger")) || 0;
    const fromValues = getAnimationConfig(type);

    const targets =
      stagger > 0
        ? el.querySelectorAll(":scope > *")
        : el;

    gsap.from(targets, {
      ...fromValues,
      duration: 1,
      delay,
      stagger,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });
  });
}
