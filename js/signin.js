const form = document.getElementById("signinForm");
const email = document.getElementById("signinEmail");
const password = document.getElementById("signinPassword");
const toggle = document.getElementById("togglePassword");
const error = document.getElementById("signinError");

const emailOrPhoneRegex = /^(5\d{8}|[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,})$/;

toggle.addEventListener("click", () => {
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);
  toggle.textContent = type === "password" ? "👁" : "🙈";
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const emailValue = email.value.trim();
  const passValue = password.value.trim();

  if (!emailValue || !passValue) {
    error.textContent = "Please fill in all fields.";
    return;
  }

  if (!emailOrPhoneRegex.test(emailValue)) {
    error.textContent = "Invalid email or phone format.";
    return;
  }
  if (passValue.length < 8) {
    error.textContent = "Password must be at least 8 characters long.";
    return;
  }

  error.textContent = "Logged in successfully!";
  setTimeout(() => {
    window.location.href = "index.html";
  }, 800);
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
