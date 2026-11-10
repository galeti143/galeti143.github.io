const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
const themeToggle = document.getElementById("themeToggle");
const scrollProgress = document.getElementById("scrollProgress");
const backToTop = document.getElementById("backToTop");

menuToggle?.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

// Theme switch
const savedTheme = localStorage.getItem("ganesh-portfolio-theme");
if (savedTheme === "light") document.body.classList.add("light-theme");
updateThemeIcon();

themeToggle?.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
  localStorage.setItem(
    "ganesh-portfolio-theme",
    document.body.classList.contains("light-theme") ? "light" : "dark"
  );
  updateThemeIcon();
});

function updateThemeIcon() {
  const icon = themeToggle?.querySelector(".theme-icon");
  if (icon) icon.textContent = document.body.classList.contains("light-theme") ? "☾" : "☼";
}

// Scroll progress and back-to-top button
function updateScrollUI() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
  scrollProgress.style.width = `${progress}%`;
  backToTop.classList.toggle("visible", window.scrollY > 450);
}
window.addEventListener("scroll", updateScrollUI, { passive: true });
updateScrollUI();

// Reveal sections as they enter the viewport
const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach((item) => revealObserver.observe(item));

// Highlight the current navigation section
const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".nav-link");
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    navLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
    });
  });
}, { rootMargin: "-35% 0px -55% 0px" });
sections.forEach((section) => sectionObserver.observe(section));

// Project filters
const filterButtons = document.querySelectorAll(".filter-button");
const projectCards = document.querySelectorAll(".project-card");
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.toggle("active", item === button));
    projectCards.forEach((card) => {
      const show = filter === "all" || card.dataset.category === filter;
      card.classList.toggle("hidden", !show);
    });
  });
});

// Footer year
document.getElementById("currentYear").textContent = new Date().getFullYear();
