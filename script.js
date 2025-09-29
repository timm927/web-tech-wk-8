// ===== Responsive Menu Toggle =====
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// ===== Contact Form Validation =====
const contactForm = document.getElementById('contactForm');
const formMsg = document.getElementById('formMsg');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      formMsg.textContent = "⚠️ Please fill out all fields.";
      formMsg.style.color = "red";
      return;
    }

    formMsg.textContent = "✅ Message sent successfully!";
    formMsg.style.color = "green";
    contactForm.reset();
  });
}
