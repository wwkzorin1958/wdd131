// scripts/filter.js
// Renders the trail cards from data using template literals and array methods

const trailSections = [
  {
    id: 1,
    badge: 'Section 1',
    title: 'Pak Tam Chung → Long Ke',
    distance: '10.6 km',
    time: '3–4 h',
    difficulty: 2,
    description: 'Easy walk along High Island Reservoir, hexagonal rock columns, Long Ke beach.',
    img: 'https://picsum.photos/id/1018/800/600',
    alt: 'High Island Reservoir along Section 1'
  },
  {
    id: 2,
    badge: 'Section 2',
    title: 'Long Ke → Pak Tam Au',
    distance: '13.5 km',
    time: '5–6 h',
    difficulty: 3,
    description: 'Most scenic: Tai Long Wan, Sai Wan, Ham Tin beaches. “Hong Kong’s Maldives”.',
    img: 'https://picsum.photos/id/1015/800/600',
    alt: 'Tai Long Wan beach on Section 2'
  },
  {
    id: 3,
    badge: 'Section 3',
    title: 'Pak Tam Au → Kei Ling Ha',
    distance: '10.2 km',
    time: '4–5 h',
    difficulty: 4,
    description: 'Rocky peaks, Cheung Sheung plateau, views over Sai Kung inner sea.',
    img: 'https://picsum.photos/id/1016/800/600',
    alt: 'Cheung Sheung plateau on Section 3'
  },
  {
    id: 4,
    badge: 'Section 4',
    title: 'Kei Ling Ha → Tate\'s Cairn',
    distance: '12.7 km',
    time: '5–6 h',
    difficulty: 4,
    description: 'Ma On Shan country, Ngong Ping plateau, bamboo groves, high ridges.',
    img: 'https://picsum.photos/id/1019/800/600',
    alt: 'Ma On Shan ridge on Section 4'
  },
  {
    id: 5,
    badge: 'Section 5',
    title: 'Tate\'s Cairn → Tai Po Road',
    distance: '10.6 km',
    time: '3–4 h',
    difficulty: 3,
    description: 'Lion Rock, WWII relics, Lion Pavilion, panoramic views of Kowloon.',
    img: 'https://picsum.photos/id/1021/800/600',
    alt: 'Lion Rock on Section 5'
  },
  {
    id: 6,
    badge: 'Section 6',
    title: 'Tai Po Road → Shing Mun',
    distance: '4.6 km',
    time: '1.5–2 h',
    difficulty: 1,
    description: 'Shortest & easiest. Shing Mun Reservoir, paperbark trees, macaques.',
    img: 'https://picsum.photos/id/1024/800/600',
    alt: 'Shing Mun Reservoir on Section 6'
  },
  {
    id: 7,
    badge: 'Section 7',
    title: 'Shing Mun → Lead Mine Pass',
    distance: '6.2 km',
    time: '3–4 h',
    difficulty: 3,
    description: 'Needle Hill & Grassy Hill, old mining relics, views over Sha Tin.',
    img: 'https://picsum.photos/id/1025/800/600',
    alt: 'Needle Hill on Section 7'
  },
  {
    id: 8,
    badge: 'Section 8',
    title: 'Lead Mine Pass → Route Twisk',
    distance: '9.7 km',
    time: '4–5 h',
    difficulty: 4,
    description: 'Tai Mo Shan, highest peak in Hong Kong (957 m). Weather station, sea of clouds.',
    img: 'https://picsum.photos/id/1036/800/600',
    alt: 'Tai Mo Shan summit on Section 8'
  },
  {
    id: 9,
    badge: 'Section 9',
    title: 'Route Twisk → Tin Fu Tsai',
    distance: '6.3 km',
    time: '2–3 h',
    difficulty: 1,
    description: 'Gentle shaded path through Tai Lam Country Park, easy forest walk.',
    img: 'https://picsum.photos/id/1039/800/600',
    alt: 'Tai Lam forest path on Section 9'
  },
  {
    id: 10,
    badge: 'Section 10',
    title: 'Tin Fu Tsai → Tuen Mun',
    distance: '15.6 km',
    time: '4–5 h',
    difficulty: 3,
    description: 'Tai Lam Chung Reservoir “Thousand Island Lake”, longest section, grand finale.',
    img: 'https://picsum.photos/id/1043/800/600',
    alt: 'Tai Lam Chung Reservoir Thousand Island Lake on Section 10'
  }
];

function renderTrailCards() {
  const grid = document.getElementById('trail-card-grid');
  if (!grid) return;

  const cardsHTML = trailSections.map(section => {
    const stars = '★'.repeat(section.difficulty) + '☆'.repeat(5 - section.difficulty);
    return `
      <div class="trail-card" data-section-id="${section.id}">
        <div class="card-img">
          <img src="${section.img}" alt="${section.alt}" loading="lazy" width="800" height="600">
        </div>
        <div class="card-content">
          <span class="badge">${section.badge}</span>
          <h3>${section.title}</h3>
          <div class="card-meta">
            <span>📏 ${section.distance}</span>
            <span>⏱️ ${section.time}</span>
            <span class="difficulty-stars">${stars}</span>
          </div>
          <p>${section.description}</p>
          <a href="section${section.id}.html" class="btn">View section →</a>
        </div>
      </div>
    `;
  }).join('');

  grid.innerHTML = cardsHTML;
}

document.addEventListener('DOMContentLoaded', renderTrailCards);