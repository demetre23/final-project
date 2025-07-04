const form = document.getElementById('signinForm');
const email = document.getElementById('signinEmail');
const password = document.getElementById('signinPassword');
const toggle = document.getElementById('togglePassword');
const error = document.getElementById('signinError');

const emailOrPhoneRegex = /^((\+?\d{9,15})|([a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}))$/;

toggle.addEventListener('click', () => {
  const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
  password.setAttribute('type', type);
  toggle.textContent = type === 'password' ? '👁' : '🙈';
});

form.addEventListener('submit', (e) => {
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

  error.textContent = "✅ Logged in successfully!";
  // Add your login logic here
});


