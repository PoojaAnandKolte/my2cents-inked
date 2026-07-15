/* My2cents Inked — shared site behavior: theme, mobile nav, newsletter, back-to-top */

(function () {
  "use strict";

  /* ---------- Theme (dark mode) ---------- */
  const THEME_KEY = "m2c-theme";
  const root = document.documentElement;

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    document.querySelectorAll("[data-theme-toggle]").forEach((btn) => {
      btn.setAttribute("aria-pressed", String(theme === "dark"));
    });
  }

  // Light is always the default reading experience; dark mode is opt-in and
  // remembered, but never auto-applied from the system/OS preference.
  const storedTheme = localStorage.getItem(THEME_KEY);
  applyTheme(storedTheme === "dark" ? "dark" : "light");

  document.querySelectorAll("[data-theme-toggle]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      const apply = () => {
        localStorage.setItem(THEME_KEY, next);
        applyTheme(next);
      };
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (document.startViewTransition && !reduceMotion) {
        document.startViewTransition(apply);
      } else {
        apply();
      }
    });
  });

  /* ---------- Scroll reveal (fade + rise), safe for dynamically rendered cards ---------- */
  const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  const revealObserver = ("IntersectionObserver" in window && !reduceMotionQuery.matches)
    ? new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" })
    : null;

  function revealNew(scope) {
    const els = (scope || document).querySelectorAll(".reveal:not(.is-visible)");
    if (!revealObserver) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    els.forEach((el) => revealObserver.observe(el));
  }
  window.revealNew = revealNew;
  revealNew(document);

  /* ---------- Mobile nav ---------- */
  const menuToggle = document.querySelector("[data-menu-toggle]");
  const mobileNav = document.querySelector("[data-mobile-nav]");
  const menuClose = document.querySelector("[data-menu-close]");

  function openMenu() {
    if (!mobileNav) return;
    mobileNav.classList.add("is-open");
    menuToggle.setAttribute("aria-expanded", "true");
    const firstLink = mobileNav.querySelector("a");
    if (firstLink) firstLink.focus();
    document.body.style.overflow = "hidden";
  }
  function closeMenu() {
    if (!mobileNav) return;
    mobileNav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
    menuToggle.focus();
  }
  if (menuToggle && mobileNav) {
    menuToggle.addEventListener("click", () => {
      const expanded = menuToggle.getAttribute("aria-expanded") === "true";
      expanded ? closeMenu() : openMenu();
    });
    if (menuClose) menuClose.addEventListener("click", closeMenu);
    mobileNav.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMenu();
    });
    mobileNav.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeMenu));
  }

  /* ---------- Active nav link ---------- */
  const currentPage = (location.pathname.split("/").pop() || "index.html");
  document.querySelectorAll(".nav-primary a, .mobile-nav a, .footer-grid a").forEach((a) => {
    const href = a.getAttribute("href");
    if (href && href.split("#")[0] === currentPage) {
      a.setAttribute("aria-current", "page");
    }
  });

  /* ---------- Newsletter forms ---------- */
  document.querySelectorAll("[data-newsletter-form]").forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = form.querySelector('input[type="email"]');
      const success = form.parentElement.querySelector("[data-newsletter-success]") || form.querySelector("[data-newsletter-success]");
      if (!input || !input.checkValidity()) {
        if (input) input.reportValidity();
        return;
      }
      form.hidden = true;
      if (success) {
        success.classList.add("is-visible");
        success.textContent = `Thank you — a confirmation is on its way to ${input.value}.`;
        success.focus?.();
      }
      form.reset();
    });
  });

  /* ---------- Back to top ---------- */
  const backToTop = document.querySelector("[data-back-to-top]");
  if (backToTop) {
    window.addEventListener("scroll", () => {
      backToTop.classList.toggle("is-visible", window.scrollY > 700);
    }, { passive: true });
    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ---------- Reading progress (post pages) ---------- */
  const progress = document.querySelector("[data-reading-progress]");
  const article = document.querySelector("[data-article]");
  if (progress && article) {
    window.addEventListener("scroll", () => {
      const rect = article.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      const pct = total > 0 ? (scrolled / total) * 100 : 0;
      progress.style.width = pct + "%";
    }, { passive: true });
  }

  /* ---------- Footer year ---------- */
  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });
})();
