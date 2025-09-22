document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');

  form && form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    form.reset();
  });
});
