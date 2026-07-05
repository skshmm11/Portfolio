/* ==============================================
   INIT
   ============================================== */
document.getElementById('year').textContent = new Date().getFullYear();

/* ==============================================
   MOBILE NAV TOGGLE
   ============================================== */
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

/* ==============================================
   SCROLL PROGRESS BAR
   ============================================== */
const progressBar = document.getElementById('scrollProgress');

function updateProgressBar() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  progressBar.style.width = pct + '%';
}

/* ==============================================
   SCROLLSPY — highlight active nav link
   ============================================== */
const sections = ['about', 'skills', 'log', 'contact']
  .map(id => document.getElementById(id))
  .filter(Boolean);
const navAnchors = document.querySelectorAll('.nav-links a[data-section]');

function updateActiveNav() {
  const scrollPos = window.scrollY + window.innerHeight * 0.3;
  let currentId = null;

  sections.forEach(section => {
    if (scrollPos >= section.offsetTop) currentId = section.id;
  });

  navAnchors.forEach(a => {
    a.classList.toggle('active', a.dataset.section === currentId);
  });
}

/* Combine scroll-driven updates into one listener, throttled with rAF */
let scrollTicking = false;
window.addEventListener('scroll', () => {
  if (!scrollTicking) {
    requestAnimationFrame(() => {
      updateProgressBar();
      updateActiveNav();
      toggleBackToTop();
      scrollTicking = false;
    });
    scrollTicking = true;
  }
});
updateProgressBar();
updateActiveNav();

/* ==============================================
   SCROLL REVEAL
   ============================================== */
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('in');
  });
}, { threshold: 0.15 });
revealEls.forEach(el => revealObserver.observe(el));

/* ==============================================
   TYPEWRITER — cycles through roles in the hero
   ============================================== */
const typedRoleEl = document.getElementById('typedRole');
const roles = [
  'B.Tech CSE, 3rd Year',
  'Frontend Developer',
  'Full-Stack Enthusiast',
  'Problem Solver'
];

if (typedRoleEl) {
  let roleIndex = 0;
  let charIndex = roles[0].length;
  let deleting = false;

  function typeLoop() {
    const currentRole = roles[roleIndex];

    if (!deleting) {
      charIndex++;
      if (charIndex >= currentRole.length) {
        deleting = true;
        typedRoleEl.textContent = currentRole;
        setTimeout(typeLoop, 1800); // pause on full text
        return;
      }
    } else {
      charIndex--;
      if (charIndex <= 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        charIndex = 0;
      }
    }

    typedRoleEl.textContent = currentRole.slice(0, charIndex);
    setTimeout(typeLoop, deleting ? 40 : 70);
  }

  setTimeout(typeLoop, 2200);
}

/* ==============================================
   ANIMATED STAT COUNTERS
   ============================================== */
const statNums = document.querySelectorAll('.stat-num');

function animateCount(el) {
  const target = parseFloat(el.dataset.target);
  const isDecimal = el.dataset.decimal === 'true';
  const suffix = el.dataset.suffix || '';
  const duration = 1100;
  const start = performance.now();

  function frame(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
    const value = target * eased;
    el.textContent = (isDecimal ? value.toFixed(2) : Math.round(value)) + suffix;
    if (progress < 1) requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

const statObserver = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCount(entry.target);
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.4 });
statNums.forEach(el => statObserver.observe(el));

/* ==============================================
   BUILD LOG FILTERING
   ============================================== */
const filterBtns = document.querySelectorAll('.filter-btn');
const logEntries = document.querySelectorAll('.log-entry');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;
    logEntries.forEach(entry => {
      const match = filter === 'all' || entry.dataset.tag === filter;
      entry.classList.toggle('hidden', !match);
    });
  });
});

/* ==============================================
   COPY TO CLIPBOARD
   ============================================== */
const toast = document.getElementById('toast');
let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
}

document.querySelectorAll('.copy-btn').forEach(btn => {
  btn.addEventListener('click', async () => {
    const text = btn.dataset.copy;
    try {
      await navigator.clipboard.writeText(text);
      showToast('Email copied to clipboard');
    } catch {
      showToast('Could not copy — please copy manually');
    }
  });
});

/* ==============================================
   BACK TO TOP
   ============================================== */
const backToTopBtn = document.getElementById('backToTop');

function toggleBackToTop() {
  backToTopBtn.classList.toggle('show', window.scrollY > 500);
}

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ==============================================
   CONTACT FORM — validation + mailto fallback
   ============================================== */
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');

const fields = {
  cName: { error: 'errName', message: 'Please enter your name.' },
  cEmail: {
    error: 'errEmail',
    message: 'Please enter a valid email address.',
    validate: val => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)
  },
  cMessage: { error: 'errMessage', message: "Don't leave this blank — say what's up." }
};

function validateField(id) {
  const input = document.getElementById(id);
  const config = fields[id];
  const errorEl = document.getElementById(config.error);
  const value = input.value.trim();

  const valid = config.validate ? config.validate(value) : value.length > 0;

  input.classList.toggle('invalid', !valid);
  errorEl.textContent = valid ? '' : config.message;
  return valid;
}

Object.keys(fields).forEach(id => {
  document.getElementById(id).addEventListener('blur', () => validateField(id));
});

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const results = Object.keys(fields).map(validateField);
  const allValid = results.every(Boolean);

  if (!allValid) {
    status.style.color = '#E8918A';
    status.textContent = 'Please fix the highlighted fields.';
    return;
  }

  const name = document.getElementById('cName').value.trim();
  const email = document.getElementById('cEmail').value.trim();
  const message = document.getElementById('cMessage').value.trim();

  const subject = encodeURIComponent(`Portfolio contact from ${name}`);
  const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
  window.location.href = `mailto:arorasaksham773@gmail.com?subject=${subject}&body=${body}`;

  status.style.color = '#9FC2B3';
  status.textContent = 'Opening your email app…';
  form.reset();
});
