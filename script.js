
function markActiveNav() {
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.tab-btn').forEach((link) => {
    const target = link.getAttribute('href');
    link.classList.toggle('active', target === path);
  });
}
markActiveNav();

const targetDate = new Date('2026-07-01T00:00:00');
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const noteEl = document.getElementById('countdownNote');

function updateCountdown() {
  if (!daysEl || !hoursEl || !minutesEl || !secondsEl || !noteEl) return;

  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) {
    daysEl.textContent = '00';
    hoursEl.textContent = '00';
    minutesEl.textContent = '00';
    secondsEl.textContent = '00';
    noteEl.textContent = 'Święto Półrocza właśnie trwa!';
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  daysEl.textContent = String(days).padStart(2, '0');
  hoursEl.textContent = String(hours).padStart(2, '0');
  minutesEl.textContent = String(minutes).padStart(2, '0');
  secondsEl.textContent = String(seconds).padStart(2, '0');

  noteEl.textContent = `Do 1 lipca 2026 zostało ${days} dni, ${hours} godzin, ${minutes} minut i ${seconds} sekund.`;
}

updateCountdown();
setInterval(updateCountdown, 1000);

const form = document.getElementById('contactForm');
const msg = document.getElementById('formMsg');

if (form && msg) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    msg.classList.remove('hidden');
    msg.textContent = 'Dziękujemy! Zgłoszenie zostało zapisane lokalnie w interfejsie strony.';
    msg.style.color = 'var(--good)';
    form.reset();
  });
}
