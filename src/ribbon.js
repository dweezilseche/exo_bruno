/**
 * Bandeau ribbon.
 *
 * - data-ribbon sur le conteneur du bandeau
 * - data-ribbon-close sur le bouton fermer
 *
 * Au clic : le conteneur data-ribbon passe en display: none (pas de sessionStorage).
 */

export function initRibbon() {
  document.querySelectorAll("[data-ribbon-close]").forEach((trigger) => {
    trigger.addEventListener("click", (event) => {
      event.preventDefault();
      const ribbon = trigger.closest("[data-ribbon]");
      if (ribbon) {
        ribbon.style.display = "none";
      }
    });
  });
}
