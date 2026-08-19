const tagline = "Transición a IT · Python | HTML | UX Writing";
const target = document.getElementById("typingText");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (target) {
  if (prefersReducedMotion) {
    target.textContent = tagline;
  } else {
    let i = 0;
    const type = () => {
      if (i <= tagline.length) {
        target.textContent = tagline.slice(0, i);
        i++;
        setTimeout(type, 35);
      }
    };
    type();
  }
}

