/* ============================================================
   temples.js
   1. Populates the footer with the current year and the
      document's last-modified date.
   2. Handles the responsive hamburger menu toggle.
   ============================================================ */

/* ------------------------------------------------------------
   1. FOOTER: current year + last modified date
   ------------------------------------------------------------ */

// Grab the elements from the footer
const yearSpan = document.querySelector('#currentyear');
const lastModifiedPara = document.querySelector('#lastModified');

// Insert the current year into the <span id="currentyear">
const today = new Date();
yearSpan.textContent = today.getFullYear();

// Insert the document's last-modified date into <p id="lastModified">
lastModifiedPara.textContent = `Last Modified: ${document.lastModified}`;


/* ------------------------------------------------------------
   2. RESPONSIVE HAMBURGER MENU
   ------------------------------------------------------------ */

// Select the nav list and the hamburger button
const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');

// Toggle both the nav list and the button when clicked.
// - Adds/removes .show on the <ul>  → shows/hides menu items
// - Adds/removes .show on the <button> → swaps ☰ to X
hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});