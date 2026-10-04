function injectNavigation() {
  var nav = document.querySelector('[data-nav]');
  if (!nav) {
    return;
  }

  var currentPage = document.body.getAttribute('data-section');
  if (!currentPage) {
    currentPage = 'sections';
  }

  var links = [
    { href: 'index.html', label: 'All sections', key: 'sections' },
    { href: 'plan.html', label: 'Plan', key: 'plan' },
    { href: 'references.html', label: 'References', key: 'references' }
  ];

  var html = '';
  for (var i = 0; i < links.length; i++) {
    var link = links[i];
    var current = '';
    if (link.key === currentPage) {
      current = ' aria-current="page"';
    }
    html += '<a href="' + link.href + '"' + current + '>' + link.label + '</a>';
  }
  nav.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', injectNavigation);