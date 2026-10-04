var trailSections = [
  {
    id: 1,
    badge: 'Section 1',
    title: 'Pak Tam Chung → Long Ke',
    distance: '10.6 km',
    time: '3–4 h',
    difficulty: 2,
    description: 'Easy walk along High Island Reservoir, hexagonal rock columns, Long Ke beach.',
    images: [
      { src: 'images/S1_1.jpg', alt: 'High Island Reservoir dam and surrounding coastline on Section 1' },
      { src: 'images/S1_2.jpg', alt: 'Trail map of MacLehose Trail Sections 1 and 2 with a hiker on the path' },
      { src: 'images/S1_3.jpg', alt: 'Coastal inlet view over High Island Reservoir on Section 1' }
    ]
  },
  {
    id: 2,
    badge: 'Section 2',
    title: 'Long Ke → Pak Tam Au',
    distance: '13.5 km',
    time: '5–6 h',
    difficulty: 3,
    description: 'Most scenic: Tai Long Wan, Sai Wan, Ham Tin beaches. “Hong Kong’s Maldives”.',
    images: [
      { src: 'images/S2_1.jpg', alt: 'Turquoise bay with rocky cliffs on Section 2' },
      { src: 'images/S2_2.jpg', alt: 'Sandy beach and turquoise water at Tai Long Wan on Section 2' },
      { src: 'images/S2_3.jpg', alt: 'Long pier over calm water at Long Ke on Section 2' }
    ]
  },
  {
    id: 3,
    badge: 'Section 3',
    title: 'Pak Tam Au → Kei Ling Ha',
    distance: '10.2 km',
    time: '4–5 h',
    difficulty: 4,
    description: 'Rocky peaks, Cheung Sheung plateau, views over Sai Kung inner sea.',
    images: [
      { src: 'images/S3_1.jpg', alt: 'Sai Kung inner sea panorama from the ridge on Section 3' },
      { src: 'images/S3_2.jpg', alt: 'Rocky trail through green hills on Section 3' },
      { src: 'images/S3_3.jpg', alt: 'Coastal path with sea views on Section 3' }
    ]
  },
  {
    id: 4,
    badge: 'Section 4',
    title: "Kei Ling Ha → Tate's Cairn",
    distance: '12.7 km',
    time: '5–6 h',
    difficulty: 4,
    description: 'Ma On Shan country, Ngong Ping plateau, bamboo groves, high ridges.',
    images: [
      { src: 'images/S4_1.jpg', alt: 'Aerial view of Tate\'s Cairn ridge with the city of Sha Tin beyond' },
      { src: 'images/S4_2.jpg', alt: 'Rock climbing routes on a granite face near Tate\'s Cairn' },
      { src: 'images/S4_3.jpg', alt: 'Big Brother Mountain viewpoint at Tate\'s Cairn with the radar dome' }
    ]
  },
  {
    id: 5,
    badge: 'Section 5',
    title: "Tate's Cairn → Tai Po Road",
    distance: '10.6 km',
    time: '3–4 h',
    difficulty: 3,
    description: 'Lion Rock, WWII relics, Lion Pavilion, panoramic views of Kowloon.',
    images: [
      { src: 'images/S5_1.jpg', alt: 'Panoramic view from the ridge with Kowloon and Hong Kong Island in the distance' },
      { src: 'images/S5_2.jpg', alt: 'Lion Rock ridge with the radar dome at Tate\'s Cairn in the foreground' },
      { src: 'images/S5_3.jpg', alt: 'City skyline and harbour views from the MacLehose Trail ridge near Lion Rock' }
    ]
  },
  {
    id: 6,
    badge: 'Section 6',
    title: 'Tai Po Road → Shing Mun',
    distance: '4.6 km',
    time: '1.5–2 h',
    difficulty: 1,
    description: 'Shortest & easiest. Shing Mun Reservoir, paperbark trees, macaques.',
    images: [
      { src: 'images/S6_1.jpg', alt: 'Shing Mun Reservoir with its distinctive white pier on Section 6' },
      { src: 'images/S6_2.jpg', alt: 'Paperbark tree avenue along the paved trail at Shing Mun' },
      { src: 'images/S6_3.jpg', alt: 'Shing Mun Reservoir shoreline with rocky banks and calm water' }
    ]
  },
  {
    id: 7,
    badge: 'Section 7',
    title: 'Shing Mun → Lead Mine Pass',
    distance: '6.2 km',
    time: '3–4 h',
    difficulty: 3,
    description: 'Needle Hill & Grassy Hill, old mining relics, views over Sha Tin.',
    images: [
      { src: 'images/S7_1.jpg', alt: 'Hazy view over Sha Tin and the Shing Mun valley from Needle Hill' },
      { src: 'images/S7_2.jpg', alt: 'Stone steps leading to a wooden trail gate on Section 7' },
      { src: 'images/S7_3.jpg', alt: 'Forest road with MacLehose Trail signposts on Section 7' }
    ]
  },
  {
    id: 8,
    badge: 'Section 8',
    title: 'Lead Mine Pass → Route Twisk',
    distance: '9.7 km',
    time: '4–5 h',
    difficulty: 4,
    description: 'Tai Mo Shan, highest peak in Hong Kong (957 m). Weather station, sea of clouds.',
    images: [
      { src: 'images/S8_1.jpg', alt: 'Tai Mo Shan summit with its weather station and radar dome on Section 8' },
      { src: 'images/S8_2.jpg', alt: 'Rocky trail leading up to Tai Mo Shan summit on Section 8' },
      { src: 'images/S8_3.jpg', alt: 'Grassy ridgeline near the Tai Mo Shan summit with rolling clouds' }
    ]
  },
  {
    id: 9,
    badge: 'Section 9',
    title: 'Route Twisk → Tin Fu Tsai',
    distance: '6.3 km',
    time: '2–3 h',
    difficulty: 1,
    description: 'Gentle shaded path through Tai Lam Country Park, easy forest walk.',
    images: [
      { src: 'images/S9_1.jpg', alt: 'Shaded forest path through Tai Lam Country Park on Section 9' },
      { src: 'images/S9_2.jpg', alt: 'Calm reservoir inlet with rocks along the shore on Section 9' },
      { src: 'images/S9_3.jpg', alt: 'Riverside walk through lush greenery on Section 9' }
    ]
  },
  {
    id: 10,
    badge: 'Section 10',
    title: 'Tin Fu Tsai → Tuen Mun',
    distance: '15.6 km',
    time: '4–5 h',
    difficulty: 3,
    description: 'Tai Lam Chung Reservoir “Thousand Island Lake”, longest section, grand finale.',
    images: [
      { src: 'images/S10_1.jpg', alt: 'Aerial view of Tai Lam Chung Reservoir with its island-dotted water on Section 10' },
      { src: 'images/S10_2.jpg', alt: 'Tuen Mun riverside with residential towers and bridges on Section 10' },
      { src: 'images/S10_3.jpg', alt: 'Thousand Island Lake view of Tai Lam Chung Reservoir from the trail on Section 10' }
    ]
  }
];