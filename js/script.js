document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("currentYear");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  const videos = document.querySelectorAll(".hero-video, .about-video");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  if (reducedMotion.matches) {
    videos.forEach((video) => video.pause());
  }

  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  const navbarCollapse = document.getElementById("navbarNav");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (navbarCollapse && navbarCollapse.classList.contains("show")) {
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        if (bsCollapse) {
          bsCollapse.hide();
        }
      }
    });
  });
});