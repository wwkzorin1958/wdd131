/* ============================================================
   filtered-temples.js
   1. Populates footer (year + last modified).
   2. Handles the responsive hamburger menu.
   3. Dynamically builds temple cards from an array.
   4. Filters temples via the nav menu (Home/Old/New/Large/Small).
   ============================================================ */

/* ------------------------------------------------------------
   1. FOOTER
   ------------------------------------------------------------ */
const yearSpan = document.querySelector('#currentyear');
const lastModifiedPara = document.querySelector('#lastModified');

const today = new Date();
yearSpan.textContent = today.getFullYear();
lastModifiedPara.textContent = `Last Modified: ${document.lastModified}`;

/* ------------------------------------------------------------
   2. HAMBURGER MENU
   ------------------------------------------------------------ */
const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
  mainnav.classList.toggle('show');
  hambutton.classList.toggle('show');
});

/* ------------------------------------------------------------
   3. TEMPLE DATA  (9 temples)
   ------------------------------------------------------------ */
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Salt Lake",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 253015,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/400x250/salt-lake-temple-37762.jpg"
  },
  {
    templeName: "San Diego California",
    location: "San Diego, California, United States",
    dedicated: "1993, April, 25",
    area: 72000,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/san-diego-california/400x250/san-diego-temple-765109-wallpaper.jpg"
  }
];

/* ------------------------------------------------------------
   4. RENDER FUNCTION
   ------------------------------------------------------------ */
const gallery = document.querySelector('main');

function createTempleCard(temple) {
  const card = document.createElement('figure');

  const img = document.createElement('img');
  img.src = temple.imageUrl;
  img.alt = temple.templeName;
  img.loading = 'lazy';
  img.width = 400;
  img.height = 250;

  const caption = document.createElement('figcaption');
  caption.innerHTML = `
    <h2>${temple.templeName}</h2>
    <p><strong>Location:</strong> ${temple.location}</p>
    <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
    <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
  `;

  card.appendChild(img);
  card.appendChild(caption);
  return card;
}

function displayTemples(filteredTemples) {
  gallery.innerHTML = '';
  filteredTemples.forEach(temple => {
    gallery.appendChild(createTempleCard(temple));
  });
}

/* ------------------------------------------------------------
   5. FILTER LOGIC
   ------------------------------------------------------------ */
function filterTemples(criteria) {
  let filtered = temples;

  switch (criteria) {
    case 'old':
      filtered = temples.filter(t => parseInt(t.dedicated.split(',')[0]) < 1900);
      break;
    case 'new':
      filtered = temples.filter(t => parseInt(t.dedicated.split(',')[0]) > 2000);
      break;
    case 'large':
      filtered = temples.filter(t => t.area > 90000);
      break;
    case 'small':
      filtered = temples.filter(t => t.area < 10000);
      break;
    case 'home':
    default:
      filtered = temples;
  }

  displayTemples(filtered);
}

/* ------------------------------------------------------------
   6. EVENT LISTENERS
   ------------------------------------------------------------ */
document.querySelector('#home').addEventListener('click', (e) => {
  e.preventDefault();
  filterTemples('home');
});

document.querySelector('#old').addEventListener('click', (e) => {
  e.preventDefault();
  filterTemples('old');
});

document.querySelector('#new').addEventListener('click', (e) => {
  e.preventDefault();
  filterTemples('new');
});

document.querySelector('#large').addEventListener('click', (e) => {
  e.preventDefault();
  filterTemples('large');
});

document.querySelector('#small').addEventListener('click', (e) => {
  e.preventDefault();
  filterTemples('small');
});

/* ------------------------------------------------------------
   7. INITIAL LOAD
   ------------------------------------------------------------ */
displayTemples(temples);