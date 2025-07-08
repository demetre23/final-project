//scroll color change
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".header_nav");
  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

//cookie
document.addEventListener("DOMContentLoaded", () => {
  const cookieBox = document.getElementById("cookie-notice");
  const acceptBtn = document.getElementById("accept-cookies");

  if (!localStorage.getItem("cookiesAccepted")) {
    cookieBox.style.display = "flex";
  }

  acceptBtn.addEventListener("click", () => {
    localStorage.setItem("cookiesAccepted", "true");
    cookieBox.style.display = "none";
  });
});

// Back to top
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("backToTopBtn");
  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

//burger bar
document.addEventListener("DOMContentLoaded", () => {
  const burger = document.getElementById("burger");
  const navMenu = document.querySelector(".nav_ul");

  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });
});
