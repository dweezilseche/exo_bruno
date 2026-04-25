export function initTextSplit() {
  if (
    typeof SplitType === "undefined" ||
    typeof gsap === "undefined" ||
    typeof ScrollTrigger === "undefined"
  ) {
    return;
  }

  const splitTargets = ["chars", "words", "lines"];

  splitTargets.forEach((splitType) => {
    document.querySelectorAll(`[data-split='${splitType}']`).forEach((el) => {
      const split = new SplitType(el, { types: splitType });
      const animateTargets = split[splitType] || [];

      if (!animateTargets.length) {
        return;
      }

      gsap.from(animateTargets, {
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.03,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    });
  });
}
