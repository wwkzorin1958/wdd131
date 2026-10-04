function getSectionIdFromUrl() {
  var query = window.location.search;
  if (!query) {
    return 1;
  }
  var parts = query.substring(1).split('&');
  for (var i = 0; i < parts.length; i++) {
    var pair = parts[i].split('=');
    if (pair[0] === 'id') {
      var id = parseInt(pair[1], 10);
      if (!isNaN(id)) {
        return id;
      }
    }
  }
  return 1;
}

function findSectionById(id) {
  for (var i = 0; i < trailSections.length; i++) {
    if (trailSections[i].id === id) {
      return trailSections[i];
    }
  }
  return null;
}

function buildStars(difficulty) {
  var stars = '';
  for (var s = 0; s < difficulty; s++) {
    stars += '★';
  }
  for (var e = difficulty; e < 5; e++) {
    stars += '☆';
  }
  return stars;
}

function buildGalleryHTML(images) {
  var html = '';
  for (var i = 0; i < images.length; i++) {
    var img = images[i];
    html += '<figure class="gallery-item">';
    html += '  <img src="' + img.src + '" alt="' + img.alt + '" loading="lazy" width="800" height="600">';
    html += '  <figcaption>' + img.alt + '</figcaption>';
    html += '</figure>';
  }
  return html;
}

function renderSectionDetail(id) {
  var container = document.getElementById('section-content');
  if (!container) {
    return;
  }

  var section = findSectionById(id);

  if (!section) {
    container.innerHTML =
      '<div class="hero">' +
        '<h1>Section not found</h1>' +
        '<p>Please choose a section from the list below.</p>' +
        '<p><a href="index.html" class="btn">← Back to all sections</a></p>' +
      '</div>';
    return;
  }

  var stars = buildStars(section.difficulty);
  document.title = 'Section ' + section.id + ' · ' + section.title + ' · MacLehose Trail';

  var galleryHTML = buildGalleryHTML(section.images);

  var html = '';
  html += '<div class="hero section-hero">';
  html += '  <span class="badge">' + section.badge + '</span>';
  html += '  <h1>' + section.title + '</h1>';
  html += '  <p>' + section.description + '</p>';
  html += '  <div class="stats-grid">';
  html += '    <div class="stat-item"><div class="label">Distance</div><div class="value">' + section.distance + '</div></div>';
  html += '    <div class="stat-item"><div class="label">Time</div><div class="value">' + section.time + '</div></div>';
  html += '    <div class="stat-item"><div class="label">Difficulty</div><div class="value difficulty-stars">' + stars + '</div></div>';
  html += '    <div class="stat-item"><div class="label">Section</div><div class="value">' + section.id + ' / 10</div></div>';
  html += '  </div>';
  html += '</div>';

  html += '<div class="info-panel">';
  html += '  <h3>About this section</h3>';
  html += '  <p>' + section.description + ' This section is part of the 100 km MacLehose Trail, which stretches across eight country parks in Hong Kong\'s New Territories. The full trail is well-marked and can be hiked in sections or as a thru-hike.</p>';
  html += '</div>';

  html += '<div class="info-panel">';
  html += '  <h3>Scenery gallery</h3>';
  html += '  <div class="gallery">' + galleryHTML + '</div>';
  html += '</div>';

  html += '<div class="info-panel">';
  html += '  <h3>Highlights</h3>';
  html += '  <ul class="highlight-list">';
  html += '    <li>📏 ' + section.distance + ' of trail</li>';
  html += '    <li>⏱️ Estimated ' + section.time + '</li>';
  html += '    <li>⭐ Difficulty: ' + stars + '</li>';
  html += '    <li>🗺️ Part of the 100 km MacLehose Trail</li>';
  html += '  </ul>';
  html += '</div>';

  container.innerHTML = html;

  renderSectionNavigation(id);
}

function renderSectionNavigation(id) {
  var nav = document.getElementById('section-nav-links');
  if (!nav) {
    return;
  }

  var total = trailSections.length;
  var html = '';

  if (id > 1) {
    html += '<a href="section.html?id=' + (id - 1) + '" class="btn">← Section ' + (id - 1) + '</a> ';
  }
  html += '<a href="index.html" class="btn">All sections</a>';
  if (id < total) {
    html += ' <a href="section.html?id=' + (id + 1) + '" class="btn">Section ' + (id + 1) + ' →</a>';
  }
  nav.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', function () {
  var id = getSectionIdFromUrl();
  renderSectionDetail(id);
});