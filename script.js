// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
}, { threshold: 0.15 });
revealEls.forEach(el => io.observe(el));

// Contact form — opens the visitor's email client with the message pre-filled.
// No backend required. Swap this out later if you build an API.
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  if (!form.checkValidity()) {
    status.textContent = 'Please fill in all fields.';
    return;
  }
  const name = document.getElementById('cName').value;
  const email = document.getElementById('cEmail').value;
  const message = document.getElementById('cMessage').value;

  const subject = encodeURIComponent(`Portfolio contact from ${name}`);
  const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
  window.location.href = `mailto:arorasaksham773@gmail.com?subject=${subject}&body=${body}`;

  status.textContent = 'Opening your email app…';
  form.reset();
});
