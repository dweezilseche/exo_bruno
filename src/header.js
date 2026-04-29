
function isMenuOpen(header) {
  if (header.hasAttribute("data-header-menu-open")) {
    return true;
  }
  const expanded = header.querySelector('[aria-expanded="true"]');
  return expanded !== null;
}

function onHeaderScroll(header, scroll, direction) {
  if (isMenuOpen(header)) return;

  if (direction === 1) {
    if (scroll > 0) {
      header.classList.add("has-scrolled");
      header.classList.remove("is-visible");
    }
  } else if (direction === -1) {
    header.classList.remove("has-scrolled");
    header.classList.add("is-visible");

    if (scroll <= 10) {
      header.classList.remove("is-visible");
    }
  }
}

/**
 * @param {object | null} lenis — instance Lenis (initSmoothScroll) ; si null, scroll natif window.
 */
export function initHeader(lenis) {
  const header = document.querySelector("[data-header]");
  if (!header) return;

  if (lenis && typeof lenis.on === "function") {
    lenis.on("scroll", (instance) => {
      const scroll = typeof instance.scroll === "number" ? instance.scroll : 0;
      const direction =
        typeof instance.direction === "number" ? instance.direction : 0;
      if (direction === 0) return;
      onHeaderScroll(header, scroll, direction);
    });
    return;
  }

  let lastScrollY = window.scrollY || 0;

  window.addEventListener(
    "scroll",
    () => {
      const scroll = window.scrollY || 0;
      const direction = scroll > lastScrollY ? 1 : scroll < lastScrollY ? -1 : 0;
      if (direction === 0) return;
      lastScrollY = scroll;
      onHeaderScroll(header, scroll, direction);
    },
    { passive: true },
  );
}
