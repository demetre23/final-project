document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("backToTopBtn");
  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("backToTopBtn");
  const burger = document.getElementById("burger");
  const navMenu = document.querySelector(".nav_ul");

  // Back to top smooth scroll
  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Burger menu toggle
  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });
});
