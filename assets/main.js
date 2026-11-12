(() => {
  // Support legacy service filters if present
  const filters = [...document.querySelectorAll('.filter')];
  const cards = [...document.querySelectorAll('.service-card')];
  const count = document.getElementById('service-count');
  const totalText = count?.textContent?.trim().replace(/^\d+\s*/, '') || '';

  if (filters.length > 0 && cards.length > 0) {
    filters.forEach(button => button.addEventListener('click', () => {
      const val = Number(button.dataset.filter);
      filters.forEach(b => b.setAttribute('aria-pressed', String(b === button)));
      let n = 0;
      cards.forEach(card => {
        const visible = val < 0 || Number(card.dataset.group) === val;
        card.hidden = !visible;
        if (visible) n++;
      });
      if (count) count.textContent = n + ' ' + totalText;
    }));
  }

  // Close language menu when clicking outside
  window.addEventListener('click', event => {
    document.querySelectorAll('details.language[open]').forEach(d => {
      if (!d.contains(event.target)) d.open = false;
    });
  });

  // Smooth scroll & subtle highlight for quick-pills
  document.querySelectorAll('.quick-pill').forEach(pill => {
    pill.addEventListener('click', event => {
      const targetId = pill.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        const el = document.querySelector(targetId);
        if (el) {
          event.preventDefault();
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
          el.style.transition = 'box-shadow .4s ease, border-color .4s ease';
          el.style.borderColor = '#2568da';
          el.style.boxShadow = '0 0 0 3px rgba(37, 104, 218, 0.25), 0 14px 34px rgba(18, 42, 68, 0.12)';
          setTimeout(() => {
            el.style.borderColor = '';
            el.style.boxShadow = '';
          }, 1800);
        }
      }
    });
  });
})();
