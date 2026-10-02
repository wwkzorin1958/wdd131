// scripts/backtotop.js
// Creates a "Back to top" button that appears on scroll

(function() {
  const btn = document.createElement('button');
  btn.textContent = '↑ Top';
  btn.setAttribute('aria-label', 'Back to top');
  btn.style.cssText = `
    position: fixed; bottom: 24px; right: 24px; background: var(--primary);
    color: white; border: none; border-radius: 40px; padding: 0.6rem 1.2rem;
    font-family: var(--font); font-weight: 500; cursor: pointer;
    box-shadow: var(--shadow-md); display: none; z-index: 100;
    transition: opacity 0.2s;
  `;
  document.body.appendChild(btn);

  window.addEventListener('scroll', function() {
    if (window.scrollY > 400) {
      btn.style.display = 'block';
    } else {
      btn.style.display = 'none';
    }
  });

  btn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();