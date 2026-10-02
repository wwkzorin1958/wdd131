// scripts/nav.js
// Injects the main navigation into the .nav-links container
function injectNavigation() {
  const nav = document.querySelector('[data-nav]');
  if (nav) {
    nav.innerHTML = `
      <a href="index.html" aria-current="page">Home</a>
      <a href="sections.html">All sections</a>
      <a href="plan.html">Plan</a>
      <a href="references.html">References</a>
    `;
  }
}

document.addEventListener('DOMContentLoaded', injectNavigation);