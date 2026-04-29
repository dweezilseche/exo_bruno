/**
 * Bandeau ribbon dans la nav (ou ailleurs).
 *
 * - data-ribbon sur le conteneur du bandeau (ex. div.ribbon)
 * - data-ribbon-close sur le bouton / image close
 *
 * Ne pas laisser hidden dans Webflow sur le conteneur : sinon le bandeau reste masqué.
 * Au chargement : affiché par défaut, sauf si déjà fermé dans cette session (sessionStorage).
 */

function getStorageKey(ribbon) {
  const id = ribbon.getAttribute("data-ribbon");
  const suffix = id && id.trim().length > 0 ? id.trim() : "default";
  return `ribbon-dismissed:${suffix}`;
}

function getRibbonRoot(trigger) {
  const withAttr = trigger.closest("[data-ribbon]");
  if (withAttr) return withAttr;

  const parent = trigger.parentElement;
  if (parent && parent !== document.documentElement && parent !== document.body) {
    return parent;
  }

  return null;
}

function applyDismissed(ribbon, dismissed) {
  if (dismissed) {
    ribbon.setAttribute("hidden", "");
    ribbon.setAttribute("aria-hidden", "true");
  } else {
    ribbon.removeAttribute("hidden");
    ribbon.removeAttribute("aria-hidden");
  }
}

export function initRibbon() {
  document.querySelectorAll("[data-ribbon]").forEach((ribbon) => {
    const dismissed = sessionStorage.getItem(getStorageKey(ribbon)) === "1";
    applyDismissed(ribbon, dismissed);
  });

  document.querySelectorAll("[data-ribbon-close]").forEach((trigger) => {
    const dismiss = (event) => {
      event.preventDefault();
      const ribbon = getRibbonRoot(trigger);
      if (!ribbon) return;
      applyDismissed(ribbon, true);
      sessionStorage.setItem(getStorageKey(ribbon), "1");
    };

    trigger.addEventListener("click", dismiss);

    trigger.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        dismiss(event);
      }
    });
  });
}
