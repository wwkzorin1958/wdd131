function createBackToTopButton() {
  var btn = document.createElement('button');
  btn.textContent = '↑ Top';
  btn.setAttribute('aria-label', 'Back to top');
  btn.id = 'back-to-top';
  document.body.appendChild(btn);

  window.addEventListener('scroll', handleScrollForBackToTop);
  btn.addEventListener('click', scrollToTop);
}

function handleScrollForBackToTop() {
  var btn = document.getElementById('back-to-top');
  if (!btn) {
    return;
  }
  if (window.scrollY > 400) {
    btn.style.display = 'block';
  } else {
    btn.style.display = 'none';
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', createBackToTopButton);