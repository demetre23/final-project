window.addEventListener("scroll", () => {
  const nav = document.querySelector(".header_nav");
  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

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
