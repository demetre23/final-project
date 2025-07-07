document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("backToTopBtn");
    btn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
  

  window.addEventListener("scroll", () => {
    const nav = document.querySelector(".header_nav");
    if (window.scrollY > 50) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  });



  document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("backToTopBtn");
    const nav = document.querySelector(".header_nav");
    const burger = document.getElementById("burger");
    const navMenu = document.querySelector(".nav_ul");
  
    // Back to Top button
    btn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  
    // Navbar shadow on scroll
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        nav.classList.add("scrolled");
      } else {
        nav.classList.remove("scrolled");
      }
    });
  
    // Burger menu toggle
    burger.addEventListener("click", () => {
      burger.classList.toggle("active");
      navMenu.classList.toggle("active");
    });
  });
  


  