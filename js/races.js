//scroll to top
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("backToTopBtn");
  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

//scroll color changed
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".header_nav");
  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

// Burger menu toggle
document.addEventListener("DOMContentLoaded", () => {
  const burger = document.getElementById("burger");
  const navMenu = document.querySelector(".nav_ul");

  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });
});
