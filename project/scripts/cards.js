function buildCardHTML(section) {
  var stars = '';
  for (var s = 0; s < section.difficulty; s++) {
    stars += '★';
  }
  for (var e = section.difficulty; e < 5; e++) {
    stars += '☆';
  }

  var thumb = section.images[0];

  var html = '';
  html += '<div class="trail-card" data-section-id="' + section.id + '" data-difficulty="' + section.difficulty + '">';
  html += '  <div class="card-img">';
  html += '    <img src="' + thumb.src + '" alt="' + thumb.alt + '" loading="lazy" width="800" height="600">';
  html += '  </div>';
  html += '  <div class="card-content">';
  html += '    <span class="badge">' + section.badge + '</span>';
  html += '    <h3>' + section.title + '</h3>';
  html += '    <div class="card-meta">';
  html += '      <span>📏 ' + section.distance + '</span>';
  html += '      <span>⏱️ ' + section.time + '</span>';
  html += '      <span class="difficulty-stars">' + stars + '</span>';
  html += '    </div>';
  html += '    <p>' + section.description + '</p>';
  html += '    <a href="section.html?id=' + section.id + '" class="btn">View section →</a>';
  html += '  </div>';
  html += '</div>';
  return html;
}

function renderTrailCards(sections) {
  var grid = document.getElementById('trail-card-grid');
  if (!grid) {
    return;
  }

  var html = '';
  for (var i = 0; i < sections.length; i++) {
    html += buildCardHTML(sections[i]);
  }
  grid.innerHTML = html;
}

function renderAllCards() {
  renderTrailCards(trailSections);
}

function setupFilterBar() {
  var filterBar = document.getElementById('filter-bar');
  if (!filterBar) {
    return;
  }

  var filters = [
    { label: 'All', value: 'all' },
    { label: 'Easy', value: '1' },
    { label: 'Moderate', value: '2' },
    { label: 'Hard', value: '3' },
    { label: 'Very Hard', value: '4' }
  ];

  var html = '';
  for (var i = 0; i < filters.length; i++) {
    var active = '';
    if (i === 0) {
      active = ' active';
    }
    html += '<button class="filter-btn' + active + '" data-filter="' + filters[i].value + '">' + filters[i].label + '</button>';
  }
  filterBar.innerHTML = html;

  filterBar.addEventListener('click', handleFilterClick);
}

function handleFilterClick(event) {
  var btn = event.target.closest('.filter-btn');
  if (!btn) {
    return;
  }

  var buttons = document.querySelectorAll('.filter-btn');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove('active');
  }
  btn.classList.add('active');

  var filterValue = btn.getAttribute('data-filter');

  if (filterValue === 'all') {
    renderAllCards();
  } else {
    var filtered = [];
    var wanted = parseInt(filterValue, 10);
    for (var j = 0; j < trailSections.length; j++) {
      if (trailSections[j].difficulty === wanted) {
        filtered.push(trailSections[j]);
      }
    }
    renderTrailCards(filtered);
  }

  updateCardCompletionIndicators();
}

document.addEventListener('DOMContentLoaded', function () {
  renderAllCards();
  setupFilterBar();
});