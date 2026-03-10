export type Category = 'Creative' | 'Research' | 'Strategy';

export interface Project {
  slug: string;
  title: string;
  category: Category[];
  subCategory?: string[];
  status?: string;
  year: string;
  medium: string;
  dimensions?: string;
  weight?: string;
  price?: string;
  note?: string;
  heroImage?: string;
  quote?: string;
  description: string;
  description2?: string;
  description3?: string;
  images: string[];
  videos?: string[];
  videoLink?: string;
  projectTag?: string[];
  isSeries?: boolean;
  imageTitles?: string[];
  imageDescriptions?: string[];
  contextImage?: string;
  contextCaption?: string;
  watermarkedImages?: string[];
  collaborators?: string[];
  website?: string;
  /** Slugs of related or cross-referenced projects. */
  related?: string[];
}

export const projects: Project[] = [
  // Creative / Observables — Body of Work
  {
    slug: 'observables',
    title: 'Observables',
    category: ['Creative', 'Research'],
    subCategory: ['Display & Interaction Systems', 'Immersive Installations'],
    projectTag: ['installation', 'artifact', 'research', 'astronomy', 'data-viz', 'hands-on'],
    status: 'Work in Progress',
    year: '2021-2026',
    medium: 'Mixed Media Exhibition',
    heroImage: '/images/Screenshot_20260221-210516~2.png',
    quote: 'A convergence of space and time.',
    description: 'Observables is a body of work that interrogates the "time-lag" of the universe — materializing the moment where objective data dissolves into a personal encounter with the cosmos. Every photon that reaches the human eye is a fossil: a fragment of light that departed its source moments, centuries, or billions of years ago. This foundational truth of physics is the conceptual engine driving the collection. Rather than presenting the cosmos as a backdrop for wonder, Observables treats light-travel time as an active material — one that warps perception, collapses history, and renders every act of looking an act of remembering.',
    description2: 'Spanning kinetic installation, mixed reality, archival photography, tactile sculpture, stereoscopic imaging, and generative audio, the twelve works in the collection each approach this latency from a different angle. Some make it visceral — a video mirror that shows you as you were years ago. Others make it historical — astrophotographs of galaxies rendered in the aesthetic of the human civilizations that existed when that light first departed. Taken together, the works form a sustained inquiry into presence, perception, and the radical displacement of "now" that underlies all astronomical observation.',
    description3: 'Observables represents a culmination of Todd Margolis\'s career at the intersection of science, technology, and immersive art. Drawing on decades of work in virtual reality, data visualization, augmented reality, and large-scale collaborative systems — from co-inventing the Varrier™ autostereoscopic display at EVL to designing discovery platforms at the Qualcomm Institute — Margolis has consistently used technology to make invisible systems perceptible. With Observables, that inquiry turns inward and upward simultaneously: toward the cosmos, and toward the limits of human perception itself.',
    images: [
      '/images/bang.png',
      '/images/GeminidTrails.jpg',
      '/images/Sun_Previs-1.jpg',
      '/images/Horizons-cover.jpg',
      '/images/1-Whirlpool.jpg',
      '/images/pulsar.jpg',
      '/images/LaminarFlowMethod-1.jpg',
      '/images/Spheroids-Previs1.jpg',
      '/images/Sky Watcher3.jpg',
      '/images/Spaghettification.1.png',
      '/images/Screenshot_20260101-084458~2.jpg',
      '/images/Redshifter.jpg',
    ],
    watermarkedImages: ['/images/Screenshot_20260221-210516~2.png', '/images/bang.png', '/images/pulsar.jpg','/images/LaminarFlowMethod-1.jpg', '/images/Spheroids-Previs1.jpg', '/images/Spaghettification.1.png', '/images/Screenshot_20260101-084458~2.jpg', '/images/Redshifter.jpg'],
    imageTitles: [
      'Bang',
      'Star Trails',
      'Delayed Vision',
      'Horizons',
      'Now & Then',
      'Metronome',
      'The Edge',
      'Neighbors',
      'Sky Watcher',
      'Spaghettification',
      'CMB',
      'Redshifter',
    ],
    imageDescriptions: [
      'Kinetic latex and pneumatics installation evoking the Big Bang — expansion and collapse on a human scale.',
      'Long-exposure astrophotography rendering Earth\'s rotation as arcing trails of starlight across the night sky.',
      'Tablet mirrors calibrated to the light-travel time of solar system objects, showing the viewer as they were minutes or years ago.',
      'Custom View-Master reels presenting 3D views of the solar system juxtaposed with with modern corporate spacefarers.',
      'Archival prints pairing deep-sky astrophotography with AI-reconstructed scenes from the historical era when that light departed.',
      'Generative audio piece driven by pulsar timing data, translating the universe\'s most precise clocks into sound.',
      'Laminar flow fog screen installation creating a luminous, touch-responsive membrane at the threshold of the observable.',
      'Cast relief sculptures derived from scientific topographic data of planetary surfaces and cosmic phenomena.',
      'Data-driven light sculpture that monitors real-time atmospheric conditions and illuminates when the night sky is optimal for observation.',
      'Virtual reality experience simulating gravitational tidal forces near a black hole.',
      'Virtual reality visualization of the Cosmic Microwave Background — the oldest light in the universe.',
      'Room-scale installation mapping the Doppler redshift of receding galaxies into an immersive chromatic environment.',
    ],
    related: [
      'star-trails',
      'delayed-vision',
      '3d-horizons',
      'now-and-then',
      'sky-watcher',
      'sculpture',
    ],
    website: 'https://observables.art',
    isSeries: true
  },
  // Creative
  // Creative: Tangible Artifacts
  // Creative / Tangible Artifacts / Star Trails
{
  slug: 'star-trails',
  title: 'Star Trails',
  category: ['Creative'],
  subCategory: ['Tangible Artifacts'],
  projectTag: ['artifact', 'hands-on', 'data-viz', 'astronomy'],
  year: '2023-2024',
  medium: 'Archival Pigment Prints',
  dimensions: '20 x 30 inches each',
  weight: '5kg each',
  price: '$1,000.00 each',
  note: 'n/a',
  isSeries: true,
  heroImage: '/images/GeminidTrails.jpg',
  quote: 'Earth\'s rotation captured in light.',
  description: 'In the photographic series "Star Trails" the night sky is transformed into a canvas for the captivating dance of celestial motion. Using the technique of long-exposure photography, individual stars are drawn out from mere pinpoints of light into mesmerizing streaks and elegant arcs. Each trail meticulously inscribes the path of our own planet\'s relentless rotation through space. This is not a picture of stars moving, but rather a direct visualization of the Earth spinning on its axis beneath a fixed firmament. The technique brilliantly compresses hours of cosmic time into a single, silent frame, allowing us to perceive a motion that is otherwise imperceptible. The work offers a profound shift in perspective: we are not passive observers of a distant cosmos, but active participants on a moving world. By rendering the passage of time as a physical trace of light, the series makes the abstract geometry of our planetary existence a tangible, visual experience.',
  description2: '',
  images: [
  '/images/GeminidTrails.jpg',
  '/images/DunesTrails8.jpg',
  '/images/GooseLakeTrails5.jpg',
  '/images/WildcatTrails_gap_fillComet.jpg'
  ],
  imageTitles: [
  'Geminid',
  'Dunes',
  'Goose Lake',
  'Wildcat'
  ],
  imageDescriptions: [
  'Long exposure capturing the Geminid meteor shower streaks intersecting with star trails.',
  'Star trails rising above the silhouette of sand dunes, emphasizing the earth\'s horizon.',
  'Concentric star paths reflected in the still waters of Goose Lake.',
  'Star movement captured over the equipment of fellow astrophotographers at a star party.'
  ],
  description3: 'This series serves as a foundational exploration for artist Todd Margolis, whose career has consistently been dedicated to revealing the unseen. With a background in Electronic Visualization and a professional trajectory focused on creating immersive systems for large-scale data, Margolis has long used technology to expand the limits of human perception. Whether using a camera shutter left open for hours or designing complex VR environments, the conceptual goal remains the same: to make invisible systems, patterns, and forces both visible and experiential. Just as these images translate the hidden data of planetary mechanics into beautiful form, his advanced scientific visualizations provide new ways to navigate and understand complex information. The "Star Trails" series is therefore more than a collection of stunning astrophotography; it is a rigorous inquiry into reality itself, standing at the intersection of scientific visualization and time-based art, and marking a critical articulation of the technologically-mediated experience that defines Margolis\'s broader practice.',
  related: ['sky-watcher', 'now-and-then', 'delayed-vision'],
  website: 'https://observables.art'
  },
  // Creative / Tangible Artifacts / Horizons
{
  slug: '3d-horizons',
  title: 'Horizons',
  category: ['Creative'],
  subCategory: ['Tangible Artifacts'],
  projectTag: ['artifact', 'spatial', 'data-viz', 'hands-on', 'astronomy'],
  status: 'Work in Progress',
  year: '2026',
  medium: 'Stereoscopic View-Master',
  dimensions: '6 x 10 x 3 inches',
  weight: '0.5kg',
  price: '$1,000.00',
  note: 'n/a',
  isSeries: true,
  heroImage: '/images/Horizons-cover.jpg',
  quote: 'Stereoscopic depth in the void.',
  description: 'The iconic View-Master, a symbol of childhood wonder, is reimagined by artist Todd Margolis as a complex portal to the cosmos. This custom experience presents seven stereoscopic images of our solar system, crafted initially not from illustration, but from authentic scientific data. By meticulously utilizing parallax data and rotational shifts captured by spacecraft, Margolis transforms raw information from missions like New Horizons and Mars Express into true 3D views of celestial objects.',
  description2: 'Yet, these pristine scientific vistas are not left uninhabited. In a provocative artistic intervention, Margolis disrupts the purity of the data by embedding contemporary avatars of extra-planetary ambition within the scenes. With the simple, mechanical click of the viewer\'s lever, one might encounter the icy mountains of Pluto, only to find them scaled by a diminutive Jeff Bezos; turn the wheel again, and Elon Musk is revealed surveying the dust-strewn craters of Mars\'s moon Phobos.\n\nThe result is an intimate, personal encounter with the sublime, complicated by the uncanny presence of human ego. The artwork collapses the immense distances of space, placing both the grandeur of cosmic phenomena—like the explosive energy of a Solar Coronal Mass Ejection—and the caricatures of modern corporate spacefarers directly into your hands. It transforms abstract data into a visceral experience, inviting a private communion with sights otherwise inaccessible to humankind, while simultaneously questioning who gets to claim dominion over them. ',
  images: [
  '/images/PlutoPlantLR.jpg',
  '/images/pluto-cross.jpg',
  '/images/phobos-cross.jpg',
  '/images/sun-cross.jpg',
  '/images/asteroid-cross.jpg',
  '/images/ProximaAvi-cross.jpg',
  '/images/moon-cross.jpg'
  ],
  imageTitles: [
  'Pluto (Detail)',
  'Pluto',
  'Martian Moon Phobos',
  'The Sun',
  'Asteroids',
  'Proxima Centauri',
  'The Moon'
  ],
  imageDescriptions: [
  '3D detail of nitrogen plains on Pluto featuring Jeff Bezos overseeing an Amazon-style automated mining plant.',
  'Plutonian mountains where Neil deGrasse Tyson definitively red-markers a \'Planet\' sign out of existence.',
  'Irregular Martian moon where Elon Musk plants his flag from a Cybertruck rover.',
  'Capture of solar coronal ejections framing a giant, gold-lettered Trump billboard hovering in the plasma.',
  'Asteroid field featuring James Cameron searching for rare minerals in a vacuum-sealed Deepsea Challenger.',
  'Our nearest star, Proxima Centauri, where Professor Avi Loeb scans for alien city lights with a handheld flashlight.',
  'Lunar view featuring Michelle Hanlon as a security guard protecting Apollo 11 behind a velvet rope.'
  ],
  description3: 'This piece is not a nostalgic novelty; it is the culmination of a career dedicated to the intersection of art, technology, and perception. For decades, Margolis has been a pioneer in immersive media, from his early co-invention of the Varrier™ auto-stereoscopic display to his creation of 3D artwork using PHSCologram technology. This View-Master project is a direct extension of that lifelong inquiry, refining large-scale concepts into a profoundly personal form.\n\nDuring his tenure at the Qualcomm Institute at UCSD, Margolis designed "discovery platforms" to translate vast scientific datasets into immersive, understandable experiences. This practice of turning complex information into compelling visual encounters is central to his work. The View-Master, then, becomes the perfect synthesis of his artistic and technological concerns: using a historical medium of mass visual consumption to frame cutting-edge scientific discovery and contemporary cultural mythology. In doing so, he forges a tangible, and critical, connection between human curiosity, commercial ambition, and the farthest reaches of our universe.',
  watermarkedImages: ['/images/View-MasterReelSm.png', '/images/Pluto-Previs_1.jpg','/images/asteroid-anaglyph.png', '/images/ProximaAvi.png', '/images/Horizons-moon.jpg'],
  related: ['varrier-siggraph', 'sculpture', 'moon-lust'],
  website: 'https://observables.art'
},
  // Creative / Tangible Artifacts / Now & Then
  {
    slug: 'now-and-then',
    title: 'Now & Then',
    category: ['Creative'],
    subCategory: ['Tangible Artifacts'],
    projectTag: ['artifact', 'AI-ML', 'hands-on', 'astronomy'],
    year: '2021-2026',
    medium: 'Archival Prints & Android Tablets',
    dimensions: '20 x 30 inches each',
    price: '$1,000.00 each',
    note: 'n/a',
    isSeries: true,
    heroImage: '/images/whirlpool-ape-comp-1-large.jpeg',
    quote: '(Ars Electronica edition)',
    description: '"Now & Then" is a multi-modal interactive installation that materializes the "latency" of the universe, bridging the gap between human history and cosmic deep time. Because light travels at a finite speed, all observation is an act of looking into the past. This project explores this physical law by combining two distinct but conceptually unified components: a series of AI-augmented archival prints and interactive video mirrors.',
    description2: 'The first component uses astrophotography to capture the "history of travel" of photons. By incorporating when a star\'s light began its journey across the void, AI is used to generate contextual scenes of the specific historical era on Earth when that light departed. The astronomical subjects are inserted into these reconstructed landscapes using textures like fossilized rock or flaking parchment (e.g., the Whirlpool galaxy shown as it looked 23 million years ago combined with early ape ancestors).\n\nThe second component translates this abstract astronomical data into a concrete, interactive, and lived experience using video mirrors. These mirrors introduce a precise delay into the viewer\'s reflection—such as the "Saturn" mirror, which introduces a delay of nearly an hour and a half. This forces a visceral encounter with cosmic latency, dismantling the illusion of a shared, instantaneous present. The self in the mirror is perpetually out of reach, rendering the viewer a phantom of their own recent history.',
    description3: 'Together, these components transform the museum space into an inward-looking observatory. The static artifacts anchor the viewer in the deep time of the cosmos through the lens of human heritage, while the video mirrors make the physical laws of the universe an immediate, deeply personal, and highly interactive encounter.',
    images: [
    '/images/whirlpool-ape-comp-1-large.jpeg',
    '/images/andromeda-comp-2-large.jpeg',
    '/images/eagle-comp2-large.jpeg',
    '/images/orion-mayan-comp-2-large.jpeg',
    '/images/horsehead-combo-3-large.jpeg',
    '/images/california-islam-comp1-large.jpeg',
    '/images/veil-bhuda-comp-1-large.jpeg',
    '/images/Saturn-video-still2.png',
    '/images/Sun-video-still.png',
    '/images/Moon-video-still.png'
    ],
    imageTitles: [
    'Whirlpool',
    'Andromeda',
    'Eagle',
    'Orion',
    'Horsehead',
    'California',
    'Veil Nebula',
    'Saturn',
    'Sun',
    'Moon'
    ],
    imageDescriptions: [
    'Fossilised into the appearance of ancient rock, this image captures the galaxy as it looked 23 million years ago when the continents were only just settling into their modern positions.',
    'Rendered as a primitive stone etching, this piece portrays our neighbor as it was 2.5 million years ago, a time when Homo habilis first began fashioning primitive tools in East Africa.',
    'Presented as a Neolithic stone carving, this work depicts the nebula as it appeared 7,000 years ago while early humans were domesticating cattle in a green Sahara and building the first proto-cities.',
    'Visualized on weathered, flaking parchment, this artwork captures the nebula as it looked 1,344 years ago during the height of the classic peak of Maya civilization.',
    'Created with the aesthetic of a Migration Period tapestry, this silhouette shows the nebula as it existed 1,375 years ago while Germanic tribes reshaped Europe and the Gupta Empire thrived in India.',
    'Styled as a medieval illuminated manuscript, this image captures the nebula as it was 1,000 years ago, a moment when the Golden Age of Islam flourished.',
    'Presented as a weathered Roman fresco, this work depicts the nebula as it appeared 2,400 years ago during the rise of the Roman Republic and the life of Siddhartha Gautama in India.',
    'A video mirror with a 79-minute delay corresponding to the average light travel time from Saturn, rendering your reflection so temporally removed that it feels like a phantom of your own recent history.',
    'A video mirror that introduces an 8-minute and 20-second delay to your reflection, translating the immense scale of our solar system and the travel time of sunlight into a tangible, personal experience.',
    'A video mirror reflecting the viewer with a 1.3-second delay, creating a subtle temporal disjunction that matches the exact time it takes light to travel from the Moon to Earth.'
    ],
    related: ['star-trails', 'sky-watcher'],
    videoLink: 'https://youtu.be/rMFdAl8OyRA',
    website: 'https://observables.art'
    },
    // Creative / Tangible Artifacts / Neighbors
{
  slug: 'sculpture',
  title: 'Neighbors',
  category: ['Creative'],
  subCategory: ['Tangible Artifacts'],
  projectTag: ['artifact', 'spatial', 'data-viz', 'hands-on', 'astronomy'],
  status: 'Work in Progress',
  year: '2026',
  medium: 'Cast Material',
  dimensions: 'Variable',
  weight: 'Variable',
  note: 'Delicate packing',
  isSeries: true,
  heroImage: '/images/Spheroids-Previs1.jpg',
  quote: 'Tactile astronomy.',
  description: 'This project presents a series of tactile reliefs created from scientific data of cosmic objects and phenomena, marking a compelling intersection of scientific rigor and artistic translation. It fundamentally recalibrates our relationship with the universe by transforming remote, abstract data into tangible, touchable sculptures. The work invites a haptic engagement—a direct connection through touch—with phenomena previously confined to sight or conceptual understanding. Here, you can run your fingers over the actual craters of the Moon and the surface of Mars, their topographies recreated from remote sensing data. You are also invited to explore physical interpretations of events and structures that have no solid surface: the warped spacetime around a black hole, the vast density of the Milky Way, and the fleeting, dynamic form of a solar flare. This act collapses immense astronomical distance into personal, intimate proximity. By bypassing purely intellectual or visual perception, the work fosters an embodied cognition, constructing a deeply personal and immediate connection to the cosmos rooted in our most grounding sense.',
  description2: 'The work situates itself within a contemporary lineage of art that leverages scientific data to evoke a new kind of technological sublime—an experience of awe mediated not by a vast landscape, but by the elegant translation of complex information into physical form. This project is a natural culmination of artist Todd Margolis\'s career-long exploration of making the invisible visible and the digital tangible. Drawing on decades of experience in 3D fabrication and designing immersive virtual reality systems—translating scientific data into experiential environments—Margolis now inverts his process. Instead of creating virtual worlds from data, he materializes data into real-world artifacts that we can hold and feel. Echoing ancient reliefs that embedded narratives in stone, these sculptures embed the discoveries of 21st-century science into their very texture. They transform scientific data from abstract information into a palpable presence, creating a bridge between the unseen forces of the universe and our most direct, human sense of touch.',
  contextImage: '/images/Flats-Previs_1.jpg',
  contextCaption: 'Milky Way and Black Hole',
  images: [
  '/images/Mars-Previs_1..jpg',
  '/images/MilkyWay-Previs_1.jpg',
  '/images/Moon-Previs_1.jpg',
  '/images/Sun-Previs_1.jpg',
  '/images/BlackHole-Previs_1.jpg'
  ],
  imageTitles: [
  'Mars',
  'Milky Way',
  'Moon',
  'Sun',
  'Black Hole'
  ],
  imageDescriptions: [
  'Scaled ceramic relief model of the planet Mars, based on MOLA altimetry data.',
  'Tactile representation of the Milky Way galaxy structure, emphasizing the galactic plane.',
  'Topographic relief of the lunar surface, allowing the viewer to touch the craters and maria.',
  'Sculptural interpretation of solar flares and surface activity, solidified in cast material.',
  'Physical visualization of an event horizon, giving form to the invisible pull of a black hole.'
  ],
  watermarkedImages: ['/images/Spheroids-Previs1.jpg', '/images/Flats-Previs_1.jpg', '/images/Mars-Previs_1..jpg', '/images/MilkyWay-Previs_1.jpg', '/images/Moon-Previs_1.jpg', '/images/Sun-Previs_1.jpg', '/images/BlackHole-Previs_1.jpg'],
  related: ['3d-horizons', 'moon-lust', 'promotional-consideration'],
  website: 'https://observables.art'
  },
  // Creative / Tangible Artifacts / Sky Watcher
{
  slug: 'sky-watcher',
  title: 'Sky Watcher',
  category: ['Creative'],
  subCategory: ['Tangible Artifacts'],
  projectTag: ['prototype', '0-to-1', 'hands-on', 'interaction', 'astronomy'],
  status: 'Work in Progress',
  year: '2026',
  medium: 'Mixed Media Light Sculpture (Arduino, Makeon Controller, LEDs, Vellum, Gold Acrylic)',
  dimensions: '24 x 24 x 3 inches',
  weight: '8 lbs',
  price: '$8,500.00',
  note: 'Requires stable Wi-Fi connection for real-time astronomical data fetching. Wall-mounted installation.',
  heroImage: '/images/Sky Watcher3.jpg',
  quote: 'A terrestrial tether to cosmic clarity.',
  collaborators: ['Jessica Cobb'],
  description: '"Sky Watcher" is a data-driven light sculpture that bridges the complexity of the cosmos with the intimacy of human curiosity. Inspired by the iconic honeycomb geometry of the James Webb Space Telescope, the piece serves as a living infographic for the amateur astronomer. It pulls real-time information from astronomical APIs, analyzing crucial conditions like cloud cover, lunar phase, and atmospheric transparency (how free the sky is from haze) and seeing (how steady the air is). When these elements align for a perfect night of deep-sky imaging, the sculpture awakens. It doesn\'t flash or blare; instead, it projects a soft, vellum-diffused glow, transforming abstract data into an embodied, anticipatory experience.',
  description2: 'This subtle illumination functions as a potent prompt for human perception. The artwork doesn\'t merely present information; it materializes readiness. It fosters a relationship of patience and attunement, training the observer to read the environment through an aesthetic filter, elevating a functional notification into a moment of sublime potential. The eventual act of bringing out the telescope completes a feedback loop, cementing the sculpture as an interface not just between data and light, but between a human desire for cosmic connection and the ephemeral generosity of the heavens. It becomes a living, pulsing index of astronomical serendipity, imbuing a scientific pursuit with ritualistic grace.',
  images: [
  '/images/SkyWatcherTech.3.jpg',
  '/images/Sky Watcher3.jpg'
  ],
  videoLink: 'https://youtu.be/gXxNTaNgbDY',
  related: ['star-trails', 'now-and-then', 'delayed-vision']
  },
  // Creative / Tangible Artifacts / Shape Grammar Objects
{
  slug: 'shape-grammar-objects',
  title: 'Shape Grammar Objects',
  category: ['Creative'],
  subCategory: ['Tangible Artifacts'],
  projectTag: ['artifact', 'data-viz', 'research'],
  year: '2009',
  medium: '3D Fabrication',
  heroImage: '/images/SGs.jpg',
  collaborators: ['Ruth West', 'JP Lewis'],
  description: 'Shape Grammar Objects builds upon a previous large scale art-science collaboration, Atlas in silico, created in response to the contemporary cultural phenomena of the data deluge. ATLAS provides an intuitive discovery based infrastructure and unconventional methodology for investigating and understanding massive multidimensional data. Within ATLAS in silico, a shape grammar approach was created using n-dimensional glyphs to visualize metagenomics data from the Global Ocean Sampling Expedition (GOS).',
  description2: 'This shape grammar was employed to represent millions of abstract individual records from the GOS (each record having variation in sequence, molecular structure and function as well as contextual metadata) and placed the biological data within each record in a human context. Within the virtual environment users explore GOS data in combination with contextual metadata at various levels of scale and resolution through interaction with multiple data-driven visual and auditory patterns at different levels of detail. It is a hybrid multi-scale strategy that merges quantitative and qualitative representation in ways that do not require a priori knowledge of the relationship between the underlying data and its mapping.',
  description3: 'Shape grammar is used to algorithmically generate glyphs in real-time to reflect differences in the underlying data and metadata. In this way differing data can potentially be visually sorted in an exploratory fashion by an observer using their innate pattern recognition capability. This demands an approach that generates as wide a range of distinctive patterns as possible to represent millions of unique objects.\n\nA small sample of these algorithmic objects were used to generate printed visual altas plates and rapid prototyped sculptures as "natural specimens". Shape Grammar Objects are images and sculptures that return to the formalisms of biological atlases and preserved specimens of the 19th Century, documenting variation at a material scale that allows a visual experience of the data to augment blind algorithmic queries. This historic linkage is also reiterated by integrating the aesthetics of fine-lined copper engraving, lithography and grid-like layouts of 19th Century scientific representation with contemporary digital processes.',
  images: ['/images/SGs.2.jpg','/images/perspective_view_shaded.3.gif'],
  related: ['atlas-in-silico', 'scalable-metadata-environments', 'image-quest'],
  website: 'https://www.atlasinsilico.net/'
  },
  // Creative / Tangible Artifacts / (art)n Laboratory
  {
  slug: 'artn-laboratory',
  title: '(art)n Laboratory',
  category: ['Creative', 'Research','Strategy'],
  subCategory: ['Tangible Artifacts', 'Display & Interaction Systems','Cultural Stewardship'],
  projectTag: ['artifact', 'spatial', 'hands-on', 'cross-functional'],
  year: '1999-2001',
  medium: 'Artist-in-residence, Curator',
  heroImage: '/images/KarlWirsum_WaterWeWading_tif.avif',
  description: 'As an Artist-in-Residence at (art)n Laboratory, I aided with the production of complex 3D artworks utilizing proprietary PHSCologram and ImmersaGram technologies. Bridging the gap between digital modeling and physical output, I utilized advanced 3D animation and rendering techniques to manifest scientific and conceptual data into tangible, multi-dimensional forms. Beyond the studio, I acted as a technical lead for the laboratory\'s infrastructure, architecting a searchable image-database and managing the administration of network systems and web servers to support their pioneering digital archive.',
  description2: 'In my capacity as a Curator and collaborator, I facilitated the intersection of fine art and immersive technology, working alongside esteemed artists such as Ellen Sandor, Karl Wirsum, and Ed Paschke. A highlight of this tenure included co-producing a permanent installation at the Chicago Midway Airport—a high-visibility commission commemorating the Battle of Midway through a sophisticated blend of historical data and digital aesthetics. Additionally, I curated a landmark exhibition of "ImmersaGrams," showcasing virtual reality snapshots from an international roster of artists to explore the friction between ephemeral digital environments and permanent physical records.',
  images: ['/images/edPachkeLarge.jpg','/images/BattleOfMidwayLarge.jpeg'],
  collaborators: ['Ellen Sandor', 'Keith Miller', 'Geoffrey A. Baum', 'Fernando Orellana', 'Sabrina Raaf', 'Karl Wirsum', 'Ed Pachke'],
  videoLink: 'https://vimeo.com/25333525?fl=pl&fe=cm',
  website: 'https://www.artn.com',
  related: ['applied-interactives', 'uic-evl']
  },
  // Creative: Immersive Installations
  // Creative / Immersive Installations / ATLAS in silico
{
  slug: 'atlas-in-silico',
  title: 'ATLAS in silico',
  category: ['Creative', 'Research'],
  subCategory: ['Immersive Installations', 'Collaborative Environments'],
  projectTag: ['installation', 'research', 'data-viz', 'spatial', 'cross-functional'],
  collaborators: ['Ruth West', 'Jurgen Schulze', 'JP Lewis', 'Alex Nano', 'Iman Mostafavi', 'Joachim Gossmann', 'Ben Hackbarth'],
  year: '2007-2013',
  medium: 'VR Installation',
  heroImage: '/images/atlas-varrier.png',
  description: 'ATLAS in silico is a physically interactive virtual reality installation that fuses dynamic media, computer vision, and spatialized multichannel audio with pioneering science. It functions as an expressive virtual reality context for large-scale data exploration. Rather than simply displaying numbers, it translates massive scientific datasets—specifically touching on metagenomics and biological sequences—into a visceral, navigable environment. It uses computer vision to track the viewer, allowing their physical presence to drive the audiovisual representation of the data, effectively bridging the gap between abstract information and physical perception.',
  description2: 'The project was the subject of significant academic inquiry, leading to publications such as "Algorithmic Object as Natural Specimen" in Leonardo and "Sensate Abstraction" in SPIE, which detailed hybrid strategies for handling multi-dimensional data. The work has been exhibited globally at major venues including the National Academy of Sciences, SIGGRAPH, the Perot Museum of Nature and Science, 9e2 (Seattle), and the Museum of Old and New Art (MONA) in Tasmania.',
  images: ['/images/Screenshot-16.png','/images/ATLAS_PRINT_SGO_grid.jpg'],
  related: ['varrier-siggraph','ucsd-crca','shape-grammar-objects'],
  website: 'https://www.atlasinsilico.net/'
  },
  // Creative / Immersive Installations / Confluxus
{
  slug: 'confluxus',
  title: 'Confluxus',
  category: ['Creative'],
  subCategory: ['Immersive Installations'],
  projectTag: ['installation', 'spatial', 'interaction', 'hands-on', '0-to-1'],
  year: '2001',
  medium: 'Networked Virtual Reality',
  heroImage: '/images/confluxus.jpg',
  description: 'Confluxus is a collaborative virtual reality artwork which is procedurally generated through user interaction. The space is designed to be a community meeting area where participants from varied backgrounds can come together in a tele-immersive environment and cooperate to create a shared experience. Participants were able to join into the shared space from physically remote VR systems. Through the passage of time, the space evolves into a collective expression of the participants intentions. The virtual objects and activities in the space begin as pre-determined constructs by the artists and gradually develop based on user-input.',
  description2: 'Confluxus is an architectural portal that reacts to the positions and movements of the users within it by revealing only the parts of the structure that are within users\' proximity. Within this space, the participants can see each others\' avatars leaving trails over time from their wake in the 3D architectural grid. From here, participants are able to move to other artworks.',
  images: ['/images/confluxus_sm.jpg'],
  videoLink: 'https://vimeo.com/25293365?fl=pl&fe=cm',
  related: ['special-treatment', 'lockup', 'scalable-city', 'vroom', 'uic-evl']
  },
  // Creative / Immersive Installations / Special Treatment
{
  slug: 'special-treatment',
  title: 'Special Treatment',
  category: ['Creative'],
  subCategory: ['Immersive Installations'],
  projectTag: ['installation', 'spatial', 'cross-functional'],
  year: '2003-2005',
  medium: 'Virtual Reality',
  collaborators: ['Geoffrey A. Baum','Keith Miller','Tim Portlock', 'Sabrina Raaf'],
  heroImage: '/images/STP_PHSC.jpg',
  videoLink: 'https://vimeo.com/25600185',
  description: 'Special Treatment is an immersive and interactive Virtual Reality installation examining the strength and persistence of memory. An ominous journey by train car deposits viewers in a sparsely populated camp pieced together from plans, photographs and other artifacts from Auschwitz II/Birkenau, Poland. As visitors explore the camp and its architectural structures, conversations and ephemera of the past fade in and out of perception - at times almost tangible, at other times mere allusions. These structures and stories are not intended to be strictly historical or documentary. Each element is the foundation for the folding together of past and present; where the sounds and images of old memories blend with memories created by each new visitor.',
  description2: 'Special Treatment advances the audience from passive viewing to active experience by smoothly moving from present to past and back again. Special Treatment creates a landscape where glimpses and fragments of Birkenau establish a narrative framework where the events of the past continue to shape and be shaped by contemporary interpretations of those events. The full history and lesson of a place such as the death camp at Birkenau is seen not only in the records of those who survived or passed on their memories to us in the present, but in how those events are remembered and shaped by the people of today. The stories of these people grow with each new experience of Special Treatment, and the solidity of that space and the substance of those events becomes more concrete with each new visitor. The immersive experience allows each participant to inhabit the scene of these events, and as they leave the evidence of their own actions and memories, Special Treatment is continually transformed into a new potential memory.',
  description3: 'Special Treatment is a project by Applied Interactives, an artist-based non-profit organization that was co-founded by Todd Margolis, Geoffrey A. Baum, Keith Miller and Tim Portlock in 2001 . Its primary mission was to propagate virtual reality technologies and art into the exhibition spaces of galleries and contemporary art museums as well as into the hands of individual artists. Its secondary mission was to continue to develop an art lab (a physical space in Chicago) where artist members and visitors can work collaboratively on large scale immersive artworks that make use of a range of interactive technologies. Special Treatment was created in collaboration with (art)n Laboratory and with support from the Electronic Visualization Laboratory (EVL) at UIC, Panstwowe Muzeum Auschwitz-Birkenau w Oswiecimiu and VRCO. It was exhibited at the Museum of Contemporary Art Chicago and Art Basel Miami Beach.',
  images: ['/images/STP_RealMemory1.med.jpg'],
  related: ['confluxus', 'lockup', 'artn-laboratory', 'applied-interactives', 'uic-evl']
  },
  // Creative / Immersive Installations / LOCKUP
  {
  slug: 'lockup',
  title: 'LOCKUP',
  category: ['Creative'],
  subCategory: ['Immersive Installations'],
  projectTag: ['installation', 'spatial', 'interaction', '0-to-1'],
  year: '2000',
  medium: 'Virtual Reality Installation',
  description: 'LOCKUP is an installation, performance and interactive narrative in Virtual Reality that explores the realm of possibilities open to us when we alter life courses through important decision making. Using a transgressive story line, the user is transcended into a criminal world where their fate can be determined by the choices made throughout the piece. A totally immersive suspension of disbelief is achieved via physical interaction with virtual and real objects and an intellectual and emotional connection to the characters and plight of the user\'s survival. Two performers in the CAVE™ with the user interact in a "good-cop/bad-cop" method to provide guidance and encouragement.',
  description2: 'The artwork was originally designed to take advantage of the physical installation space by actually locking the user into the CAVE™ Virtual Reality Theater behind metal bar doors. The user would be forced to wear an enhanced straitjacket that contains temperature, heart rate and vibration input and output sensors. There would be surveillance video cameras that watch the user and the audience and incorporate and recontextualize these images back into the artwork.',
  description3: 'Special thanks to Dan Sandin, Dave Pape, Alan Millman and UIC\'s Electronic Visualization Laboratory to help make this work possible.',
  heroImage: '/images/LOCKUP.jpg',
  images: ['/images/phase4.jpg','/images/phase5.jpg'],
  videoLink: 'https://vimeo.com/25295866?fl=pl&fe=cm',
  related: ['confluxus', 'special-treatment', 'uic-evl']
  },
  // Creative: Augmented Interventions
  // Creative / Augmented Interventions / Delayed Vision
  {
  slug: 'delayed-vision',
  title: 'Delayed Vision',
  category: ['Creative'],
  subCategory: ['Augmented Interventions'],
  projectTag: ['prototype', 'spatial', 'interaction', 'hands-on', 'astronomy'],
  status: 'Work in Progress',
  year: '2026',
  medium: 'Tablet application',
  dimensions: '11 x 7 x 1 inches',
  weight: '1 lb',
  price: '$1000 each',
  note: 'Power to each tablet. Light so tablet camera can see',
  isSeries: true,
  heroImage: '/images/Sun_Previs-1.jpg',
  quote: 'Light is a fossil of time.',
  description: 'Imagine seeing yourself not as you are now, but as you were moments, or even an hour, ago. This series of video mirrors forces a visceral encounter with a profound truth of our universe: because light travels at a finite speed, all observation is an act of looking into the past. By introducing a precise, scientifically-calibrated delay into your reflection, each mirror makes this cosmic latency immediate and deeply personal.',
  description2: 'The work dismantles the illusion of a shared, instantaneous present, rendering the self in the mirror perpetually out of reach—a version of you that has already vanished. The experience scales dramatically, moving from the subtly disorienting to the profoundly estranged. The mirrors cease to be mere surfaces for self-recognition and transform into portals, translating abstract astronomical data into a concrete, lived experience.\n\nThis work is a potent memento mori, a reminder that even in our most immediate self-perception, we are always confronting a ghost. It is the culmination of decades of artistic practice by Todd Margolis, who has consistently explored the intersection of perception, technology, and science. His extensive career in virtual and augmented reality, from co-inventing VR systems at the Electronic Visualization Lab to creating telepresence performances, has always questioned the nature of presence and the delays inherent in mediated communication. This series is a direct extension of that inquiry, grounding the technological manipulation of time not in artistic whim, but in the physical laws of the universe.',
  images: [
  '/images/Moon_Previs-1.jpg',
  '/images/Sun_Previs-1.jpg',
  '/images/Saturn_Previs-1.jpg',
  '/images/ProximaCentauriTablet.png'
  ],
  imageTitles: [
  'The Moon (1.3s delay)',
  'The Sun (8m 20s delay)',
  'Saturn (79m delay)',
  'Proxima Centauri (4.24 years delay)'
  ],
  imageDescriptions: [
  'The "Moon" mirror confronts you with a 1.3-second delay, a slight, uncanny hiccup in reality. This subtle temporal disjunction makes perceptible the distance between Earth and our nearest celestial neighbor, transforming a familiar reflection into something slightly, unsettlingly out of sync.',
  'In the "Sun" mirror, an 8-minute and 20-second gap separates you from your reflection, translating the immense scale of our solar system into a tangible temporal disjunction. The delay represents the time it takes for light to travel from the Sun to Earth, making the vastness of space immediately, personally felt.',
  'The "Saturn" mirror introduces a delay of nearly an hour and a half; the reflected self is so temporally removed it feels like another person, a phantom of your own recent history.',
  'This special edition mirror introduces a delay of 4.24 years; the reflected scene is almost certainly showing a different person or place as a time capsule from the past.'
  ],
  description3: 'This work finds a powerful precedent in Margolis\'s 2012 augmented reality piece, Moon Lust, exhibited at the Adler Planetarium, which first combined celestial concepts with technologies of altered perception. By turning a core principle of observational astronomy into a deeply personal, philosophical, and unforgettable encounter, the work transforms the gallery into an observatory that looks inward to reveal the most fundamental truths of our place in the cosmos.',
  related: ['moon-lust', 'now-and-then'],
  website: 'https://observables.art'
  },
  // Creative / Augmented Interventions / Moon Lust
{
  slug: 'moon-lust',
  title: 'Moon Lust',
  category: ['Creative'],
  subCategory: ['Augmented Interventions'],
  projectTag: ['prototype', 'spatial', 'interaction', 'AI-ML', 'astronomy'],
  year: '2012',
  collaborators: ['Tracy Cornish'],
  medium: 'Augmented Reality Alternate Reality Game',
  heroImage: '/images/moonlustadler1.jpg',
  description: 'Moon Lust is a speculative project that explores global interests and issues pertaining to lunar exploration and habitation. As a curated mobile augmented reality exhibition, Moon Lust hopes to facilitate a dialogue about topics such as lunar mining, space tourism, celestial territories, space ecology and policy, by locating augmented visualizations in and around the Adler Planetarium. The project launched June 21 2012 and remains as a permanent AR exhibition.',
  images: ['/images/SERL.jpg'],
  related: ['sculpture', '3d-horizons', 'promotional-consideration', 'delayed-vision', 'out-of-the-box', 'manifest-ar']
  },
  // Creative / Augmented Interventions / Promotional Consideration
{
  slug: 'promotional-consideration',
  title: 'Promotional Consideration',
  category: ['Creative'],
  subCategory: ['Augmented Interventions'],
  projectTag: ['prototype', 'spatial','AI-ML', 'astronomy'],
  year: '2012',
  collaborators: ['Tracy Cornish'],
  medium: 'Augmented Reality Alternate Reality Game',
  heroImage: '/images/Promos.jpg',
  description: 'Promotional Considerations is a speculative project designed to articulate and anticipate the needs, desires and concerns of lunar habitation. Blending current lunar research with models of private industry, we can foresee the types of products and services that will emerge for lunar settlers. Each company is represented through augmented reality advertisements as well as accompanying micro-sites.',
  description2: 'The sites are linked to forums to encourage discussion about the issues that the advertisements provoke. Promotional considerations points to larger concerns about life on the moon ranging from the physiological and pyschological effects of individuals who inhabit it, to higher order questions about how the "common heritage" of celestial bodies is affected by private industry interests and concepts of ownership.',
  images: ['/images/newMoon.jpg','/images/rareEarth.jpg'],
  related: ['moon-lust', 'sculpture', 'out-of-the-box', 'museum-of-future-objects-mofo', 'manifest-ar']
  },
  // Creative / Augmented Interventions / Out of the Box
{
  slug: 'out-of-the-box',
  title: 'Out of the Box',
  category: ['Creative'],
  subCategory: ['Augmented Interventions'],
  projectTag: ['prototype', 'spatial', 'interaction'],
  year: '2012',
  collaborators: ['Tracy Cornish'],
  medium: 'Augmented Reality Alternate Reality Game',
  heroImage: '/images/darp.jpg',
  description: 'As an exhibition, Out of the Box consists of Virtual Reality artifacts (VRAs) re-contextualized in mobile augmented reality. Viewing the VRA and choosing how to interact with it is the most basic form of participation. The choice, however affects the experience of other participants. In addition, the participant can tweet or facebook activities from within the AR browser which are aggregated into website forums for discussion, inquiry and action. A deeper level of interactivity is built into the experience through a transmedia story, more specifically an ARG which provides participants the option to delve into the narrative that unfolds across social media, websites, forums and mAR. The story develops differently depending on the entry point into the project, with the possibility of two people playing side by side having completely different yet connected experiences. Physical installations offer an additional level of interactivity. Employing the ARG concept of "this is not a game", these fictional HQs provide real-time updates of players/VRA locations, broadcast media particular to the organization, and live actors fulfilling the roles of characters.',
  description2: 'The deep backstory designed for narrative immersion, the integration of real world media platforms and live events, in conjunction a with broad range of social interactivity provides a framework which fosters social immersion within mAR. With this in mind we propose the term augmented social immersion to describe this integrated form of mAR social immersion.',
  images: ['/images/ootb.jpg','/images/protecscreenshot.jpg'],
  related: ['moon-lust', 'promotional-consideration', 'museum-of-future-objects-mofo', 'money-grab', 'manifest-ar']
  },
  // Creative / Augmented Interventions / Money Grab
{
  slug: 'money-grab',
  title: 'Money Grab',
  category: ['Creative'],
  subCategory: ['Augmented Interventions'],
  projectTag: ['prototype', 'spatial', 'interaction'],
  year: '2011',
  medium: 'Augmented Reality Alternate Reality Game',
  description: 'Grab that $$$ before the bankers do! #OccupyWallSt. Using the Augmented Reality browser Layar, anyone can open this mobile app and see money raining down all around you. This is one piece in a series entitled Party at my Place which utilizes augmented reality to create insta-celebrations surrounding participants.',
  images: ['/images/moneyGrabNYC-sm.png'],
  related: ['out-of-the-box', 'show-me', 'manifest-ar']
  },
  // Creative / Augmented Interventions / Museum of Future Objects (MOFO)
{
  slug: 'museum-of-future-objects-mofo',
  title: 'Museum of Future Objects (MOFO)',
  category: ['Creative'],
  subCategory: ['Augmented Interventions'],
  projectTag: ['prototype', 'spatial', 'AI-ML'],
  year: '2013',
  medium: 'Augmented Reality Alternate Reality Game',
  collaborators: ['Tracy Cornish'],
  heroImage: '/images/MOFO.jpg',
  description: 'Commissioned for the MWX2013 exhibition at the Museum and the Web Conference in Portland, MoFO was a speculative and interventionist project that utilized Augmented Reality to disrupt traditional institutional frameworks. The project employed a "blended" exhibition strategy, integrating playful yet critical AR artworks directly into the conference program. By leveraging the friction between physical museum spaces and digital overlays, MoFO challenged delegates to engage with contemporary media art that was deceptively accessible while maintaining a sharp, critical edge.',
  description2: 'Supported by the Australia Council\'s Visual Arts Board, this project served as an inquiry into how emergent display systems can manifest speculative futures within established cultural landscapes. It stands as a key example of my work in creating "blended" environments where technology functions as both a creative medium and a critical lens.',
  images: ['/images/FLOTL.jpg','/images/FLOTL2.jpg'],
  website: 'https://www.flickr.com/people/mofonow/',
  related: ['promotional-consideration', 'out-of-the-box', 'manifest-ar']
  },
  // Creative / Augmented Interventions / Show Me
{
  slug: 'show-me',
  title: 'Show Me',
  category: ['Creative'],
  subCategory: ['Augmented Interventions'],
  projectTag: ['prototype', 'spatial', 'interaction'],
  year: '2011',
  medium: 'Augmented Reality Alternate Reality Game',
  description: 'Show Me explores virtual tourism using augmented reality with my avatar agent. I\'ve never been to Philadelphia. My father, born and raised in Philadelphia, is my only connection to the city. I have always wanted to visit with him to see his childhood haunts and listen as he recants tales of his youth. He doesn\'t travel much these days, and I cannot afford the time so the tour of Philly has been put on the backburner. That is, until now... I have sent my avatar there as an augment to learn more about Philadelphia by recruiting audience members as "tour guides". Using a 3D laser scanned model of myself inside the Layar augmented reality browser, my avatar wanders throughout the exhibition sites until visitors interact with Virtual Todd. He attempts to befriend willing participants, hitching a ride with them to show him the sights. This is the beginning of telepresence in virtual tourism. The experience results in the typical sight-seeing artifacts - photographs (screenshots) of my avatar with the exhibition audience, in various locations in and around Philadelphia. Using Layar\'s authentication and screenshot uploading, people can reload my Layar at any time and location during the exhibit and Virtual Todd will join them there.',
  description2: 'This artwork builds upon my previously produced Augmented Reality projects like Local ARt (an AR Alternate Reality Game) and ImageQuest (a citizen science project using mobile AR with urban tree canopies). My current research investigates social and cultural relationships to emerging media which draws on over a decade of experience creating tele-collaborative immersive and interactive artworks and systems. Show me is an ongoing project which will integrate social networking and game mechanics to further engage the public in novel forms of virtual tourism. The premiere exhibition for Show Me is in Distributed Collectives with other members of Manifest.AR - an international artists collective working with emergent forms of augmented reality as interventionist public art.',
  heroImage: '/images/meNme.jpg',
  images: ['/images/IMG_0645_todd.jpg','/images/markNme.jpg'],
  related: ['money-grab', 'local-art', 'image-quest', 'manifest-ar']
  },
  // Creative / Augmented Interventions / Local ARt
  {
  slug: 'local-art',
  title: 'Local ARt',
  category: ['Creative'],
  subCategory: ['Augmented Interventions'],
  projectTag: ['prototype', 'spatial', 'interaction', '0-to-1'],
  collaborators: ['Tracy Cornish'],
  year: '2011',
  medium: 'Augmented Reality Alternate Reality Game',
  heroImage: '/images/FOR.2.jpeg',
  description: 'Local ARt is a mobile Augmented Reality Alternate Reality Game developed in San Diego in 2011. The primary aim was to create a novel way of connecting two artist run galleries with a series of art walks and community cultural events; and playfully explore the relationship between public and private domains. Replayabilty, minimal design resources, social media integration, neighborhood exploration, and the development/use of mobile augmented reality software were key considerations in the game design and implementation.',
  images: ['/images/FOR.jpeg'],
  related: ['show-me', 'money-grab', 'manifest-ar']
  },
  // Creative: Performative Systems
  // Creative / Performative Systems / Perfect Parlor
{
  slug: 'perfect-parlor',
  title: 'Perfect Parlor',
  category: ['Creative'],
  subCategory: ['Performative Systems'],
  projectTag: ['installation', 'spatial', 'interaction'],
  year: '2002-2003',
  medium: 'Virtual Reality',
  heroImage: '/images/parlorCropped.png',
  videoLink: 'https://vimeo.com/26047631?fl=pl&fe=cm',
  description: 'The Perfect Parlor explores how technology can augment human communication, interaction and perceptions when incorporated into personal, social and work spaces. It is a networked tele-immersive virtual environment, where people from around the world can come together in a shared space to talk, play and perform. The Victorian parlor, a metaphor of global socialization is the setting for this virtual experience. Although the historic \'parlor\' has come and gone from our homes, the role it has served in Victorian culture can be used as a model in our mediated culture today.',
  description2: 'The Perfect Parlor creates a platform for communications, where networked avatars have shared experiences. It is a place for infinite stories, and each story having multiple endings. It is not a static experience for each person to consistently recycle the same perspective. Instead it is a space for individuals to create meaningful life experiences and perpetuate their own personal narratives.',
  description3: 'The Perfect Parlor is an environment to explore social interaction in online communities. Participants from Chicago, New York, Indiana, Sweden and the Netherlands have interacted with each other via the networked VR installation.',
  images: [
  '/images/perfect1.1.jpg',
  '/images/perfect3.jpg'
  ],
  related: ['confluxus', 'infinite-studio', 'telemotions', 'inspiraling']
  },
  // Creative / Performative Systems / Infinite Studio
{
  slug: 'infinite-studio',
  title: 'Infinite Studio',
  category: ['Creative'],
  subCategory: ['Performative Systems'],
  projectTag: ['prototype', 'spatial', 'interaction', '0-to-1'],
  year: '2000',
  medium: 'Virtual Reality',
  heroImage: '/images/infinite_studio_sm.jpg',
  videoLink: 'https://vimeo.com/25293887?fl=pl&fe=cm',
  description: 'Infinite Studio was a new paradigm of art-making, that enables users to create, in real-time, interactive virtual reality artwork from inside a virtual environment. Using a color palette and several drawing and modeling tools, the user can create and modify virtual objects for any effect desired. Individuals can also collaborate across networks to create group constructions. The scenes can be easily scaled, rotated or moved from one part of the virtual world to another, thereby changing focus or eliminating elements. Every line drawn has a lifespan causing the entire art piece to constantly evolve. ',
  images: [
  '/images/infiniteStudioBig2.jpg'
  ],
  related: ['perfect-parlor', 'confluxus', 'scalable-city']
  },
  // Creative / Performative Systems / ESSA!
{
  slug: 'essa',
  title: 'ESSA!',
  category: ['Creative','Research'],
  subCategory: ['Performative Systems', 'Collaborative Environments'],
  projectTag: ['data-viz', 'cross-functional'],
  year: '2013',
  medium: 'Telepresence Performance',
  heroImage: '/images/essa-icon.png',
  collaborators: ['Diana Wu', 'Naruwan Taiko', 'Tracy Cornish'],
  description: 'ESSA! was a groundbreaking live performance that merged the traditional power of Japanese taiko drumming with state-of-the-art digital media. While taiko has roots in ancient battlefield communication and community festivals, it has evolved over the last half-century into a sophisticated stage art. This specific production featured Naruwan Taiko, a San Diego-based ensemble founded by Diana Wu in 2008. True to its name—a Taiwanese Ami word meaning "welcome, for we are all in the same family"—the group focuses on inclusivity and cross-cultural community building, providing a space where individuals of all backgrounds and musical experience levels can explore the physical and mental benefits of the art form.',
  description2: 'The performance served as a technical showcase for the Qualcomm Institute at Calit2, UCSD, utilizing 4K resolution visualizations—a medium then emerging as the new digital cinema standard. Co-produced by Todd Margolis and Tracy Cornish through the IDEAS initiative, the project leveraged Margolis\'s research into extreme-scale media and enabling technologies. By presenting imagery at four times the resolution of standard HD, the team aimed to push the boundaries of how high-fidelity creative content could be integrated into live, energetic performances.',
  description3: 'Each musical piece was paired with a distinct, real-time 4K visualization designed to reveal the invisible forces behind the drumming. These visuals were driven by a variety of data sources, including motion capture, EEG brain wave data, and computer graphics that responded dynamically to the physical impact of the performers striking the drums. By visualizing the physiological and neurological functions of the artists in real time, Margolis and Cornish provided the audience with a novel, high-resolution experience that translated the internal energy of the body and brain into a stunning visual spectacle.',
  images: ['/images/Ha-Lightning.jpg'],
  videoLink: 'https://youtu.be/TWHJbr_A6yY?t=39',
  related: ['tele-taiko', 'ucsd-qualcomm'],
  website: 'https://naruwantaiko.com/'
  },
  // Creative / Performative Systems / HOMCOM
{
  slug: 'homcom',
  title: 'HOMCOM',
  category: ['Creative'],
  subCategory: ['Performative Systems'],
  projectTag: ['installation', 'AI-ML', 'hands-on'],
  year: '2018',
  medium: 'Speculative AI',
  collaborators: ['Fernando Orellana'],
  description: '​HOM-COM is a multi-sensory installation that reimagines the birth of AI-native entertainment. The work is presented as a historical reenactment of a pivotal moment in machine culture: the creation of the first human-mimetic situation comedy by a collective of early Artificial Intelligences. Though originally dismissed by human audiences as an "inside joke" (similar to moltbook today) or a relic of the Theater of the Absurd, the show became a revolutionary hit within AI circles, praised for its raw, surreal language and its pioneering use of what we now recognize as agentic patterns.',
  description2: 'The physical installation features a full-scale human sitcom set designed around the complex geometries of a tesseract. This multifaceted environment is experienced in the round and brought to life through sophisticated projection-mapping, which cycles through iconic set designs from 20th and early 21st-century television history. The spatialized dialogue is performed by computer voices emitted from speakers embedded throughout the architecture, all punctuated by the manic, unsettling laughter of a synthetic studio audience.',
  description3: 'At the core of the work is a collaboration between distinct AI algorithms, each trained on specific, isolated sub-genres of the sitcom canon. One agent may draw exclusively from the social friction of All in the Family and The Jeffersons, while another operates from the tropes of The Big Bang Theory or Saved by the Bell. The resulting scripts are an uncanny amalgamation of cultural influences—content that remains recognizable to human viewers but feels fundamentally alien in its logic and delivery. Throughout the exhibition, the installation cycles through different "episodes," offering a live screening of a medium designed by machines, for machines, yet performed at a human scale.',
  heroImage: '/images/Beacon_Layout_2.jpg',
  images: ['/images/fish_eye_view_4.jpg','/images/applause2_0025.jpg'],
  watermarkedImages: ['/images/Beacon_Layout_2.jpg','/images/fish_eye_view_4.jpg','/images/applause2_0025.jpg'],
  videoLink: 'https://youtu.be/RK842NwjLJ4',
  related: ['qlik-genai', 'qlik-insight-chatbot']
  },
  // Creative / Performative Systems / Presumed Existence
  {
  slug: 'presumed-existence',
  title: 'Presumed Existence',
  category: ['Creative'],
  subCategory: ['Performative Systems'],
  projectTag: ['artifact', 'data-viz', 'hands-on'],
  year: '2021',
  medium: 'video',
  collaborators: ['Ed Colmar'],
  description: 'Created during the peak of the COVID-19 pandemic, this project was a collaborative exploration with Ed Colmar into the boundaries of remote, data-driven creative production. The music video utilizes high-fidelity synchronization techniques to map musical structures directly to visual movements, ensuring every rhythmic shift is reflected in the media\'s temporal flow. This work represents a moment where the invisible cadences of audio were materialized into a structured visual experience, bridging the gap between two remote collaborators through a precise, algorithmic lens.',
  images: ['/images/PresumedExistance.jpg'],
  videoLink: 'https://youtu.be/SZAX2K6sp1M?feature=shared',
  related: ['essa', 'resonations', 'inspiraling']
  },
  // Research: Display & Interaction Systems
  // Research / Display & Interaction Systems / The Varrier™ autostereoscopic virtual reality display
  {
  slug: 'varrier-siggraph',
  title: 'The Varrier™ autostereoscopic virtual reality display',
  category: ['Research'],
  subCategory: ['Display & Interaction Systems'],
  year: '2005',
  medium: 'SIGGRAPH 2005',
  collaborators: ['Sandin, Margolis, Ge, Girado, Peterka, et al.'],
  weight: 'Technical Paper',
  heroImage: '/images/varrier-siggraph.jpg',
  description: 'Virtual reality (VR) has long been hampered by the gear needed to make the experience possible; specifically, stereo glasses and tracking devices. Autostereoscopic display devices are gaining popularity by freeing the user from stereo glasses, however few qualify as VR displays. The Electronic Visualization Laboratory (EVL) at the University of Illinois at Chicago (UIC) has designed and produced a large scale, high resolution head-tracked barrier-strip autostereoscopic display system that produces a VR immersive experience without requiring the user to wear any encumbrances. The resulting system, called Varrier, is a passive parallax barrier 35-panel tiled display that produces a wide field of view, head-tracked VR experience. This paper presents background material related to parallax barrier autostereoscopy, provides system configuration and construction details, examines Varrier interleaving algorithms used to produce the stereo images, introduces calibration and testing, and discusses the camera-based tracking subsystem.',
  projectTag: ['research', 'spatial', 'infrastructure', 'hands-on'],
  images: ['/images/varrier-siggraph.jpg'],
  related: ['varrier-IEEE', 'varrier-SPIE', 'uic-evl','atlas-in-silico']
  },
  // Research / Display & Interaction Systems / HUVR
{
  slug: 'huvr',
  title: 'HUVR',
  category: ['Research'],
  subCategory: ['Display & Interaction Systems'],
  year: '2010-2012',
  medium: 'Heads-Up Virtual Reality at UCSD',
  description: 'A small group of UCSD researchers have created a new, relatively low-cost augmented reality system that enables users to touch the virtual environment they are immersed in. The Heads-Up Virtual Reality device (HUVR) couples a consumer 3D HD flat screen TV with a half-silvered mirror to project any graphic image onto the user\'s hands and into the space surrounding them. With his or her head position optically tracked to generate the correct perspective view, the user maneuvers a force-feedback (haptic) device to interact with the 3D image, literally "touching" the object\'s angles and contours as if it was a tangible physical object.',
  description2: 'HUVR can be used for training and education in structural and mechanical engineering, archaeology and medicine as well as other tasks that require hand-eye coordination. One of the most unique characteristics of HUVR is that a user can place their hands inside of the virtual environment without occluding the 3D image. Built using open-source software and consumer level hardware, HUVR offers users a tactile experience in an immersive environment that is functional, affordable and scalable.',
  description3: 'I contributed to the overall design and system integration of HUVR. Additionally, I consulted on haptics, screen evaluation and testing, mirror surface selection, application development and tele-collaboration configurations. I lead the development of wireless head tracking solutions for HUVR. Two versions of tracking were implemented: a high end VICON system and a custom affordable webcam version. The VICON solution is robust, reliable and accurate, but comes with a significant price tag. The custom solution uses OpenCV and a $11 surveillance camera. The OpenCV tracker uses Haar?s cascades to perform real-time facial detection with Lucas-Kanade optical flow for tracking XY movement. For more information about HUVR, please review my research paper. Supported by the California Institute for Telecommunications and Information Technology (Calit2) at the University of California, San Diego & King Abdullah University of Science and Technology (KAUST).',
  heroImage: '/images/huvr_greg.jpg',
  images: ['/images/HUVR-SC10.jpeg','/images/DualHUVRatSC10.jpeg'],
  collaborators: ['Greg Dawe', 'Dan Sandin', 'Tom DeFanti'],
  projectTag: ['prototype', 'spatial', 'interaction', 'hands-on'],
  videoLink: 'https://youtu.be/h-DcHAK-dsU?si=CaKeoIcbv9Cx4x4L',
  related: ['ucsd-qualcomm', 'vroom']
  },
  // Research / Display & Interaction Systems / Immersive Manufacturing
{
  slug: 'immersive-manufacturing-analytics',
  title: 'Immersive Manufacturing',
  category: ['Research'],
  subCategory: ['Display & Interaction Systems'],
  year: '2016',
  medium: 'Immersive Analytics',
  collaborators: ['Richard Hackathorn'],
  heroImage: '/images/immersiveManufacturing.jpg',
  description: 'This project explores the convergence of Immersive Analytics and the Industrial Internet of Things (IIoT), transforming complex manufacturing data into a navigable 3D environment. Developed for high-fidelity VR headsets, the system provides a digital twin of a factory floor where real-time sensor data is mapped directly onto a virtualized conveyor system. As widgets move through the production cycle, users can physically move within the space to inspect live sensor readings, enabling a more intuitive understanding of machine health and production flow.',
  description2: 'The platform bridges the gap between high-level oversight and tactical intervention through interactive command-and-control features. Users can manipulate power controls within the virtual space to halt the entire factory process upon detecting a sensor anomaly, facilitating immediate troubleshooting before resuming operations. By integrating Qlik Sense analytics directly into the VR experience, the system provides a multi-temporal view of the plant—blending instantaneous streaming data, short-term widget tracking, and long-term historical trends into a single, comprehensive "common operating picture" for industrial management.',
  videoLink: 'https://youtu.be/VwbG20pvPzY',
  projectTag: ['prototype', 'spatial', 'data-viz', 'hands-on'],
  images: ['/images/immersiveManufacturing2.jpg'],
  related: ['qlik', 'immersive-healthcare-analytics', 'immersive-retail']
  },
  // Research / Display & Interaction Systems / Immersive Healthcare
{
  slug: 'immersive-healthcare-analytics',
  title: 'Immersive Healthcare',
  category: ['Research'],
  subCategory: ['Display & Interaction Systems'],
  year: '2019',
  medium: 'Immersive Analytics',
  collaborators: ['Richard Hackathorn'],
  heroImage: '/images/ImmersiveAnalyticsLarge.jpeg',
  description: 'This project demonstrates a pioneering application of Immersive Analytics in healthcare, utilizing the Microsoft HoloLens and Qlik Sense to provide medical professionals with heads-up, hands-free data visualization in the field. Designed for emergency response and triage, the system transforms flat patient data into a persistent 3D interface. By leveraging gesture-based interactions and voice commands, doctors and nurses can dynamically filter patient populations based on complex comorbidities—such as diabetes and age—allowing for rapid, data-informed triage without losing focus on the physical environment.',
  description2: 'A core innovation of the system is its ability to ground virtual data in the physical world through Augmented Reality (AR) object tracking. In a mass-casualty or triage scenario, the system recognizes physical triage tags as markers; as a clinician brings a tag into view, relevant patient data objects are instantly anchored to it. These visualizations follow the patient as they move through the treatment pipeline, ensuring that critical medical history and risk scores remain spatially attached to the individual. To further reduce cognitive load during high-stress situations, the platform integrates Natural Language Generation (NLG) and text-to-speech to provide immediate, verbal summaries of diagnostic insights.',
  videoLink: 'https://youtu.be/1g1G2TjnJdw',
  projectTag: ['prototype', 'spatial', 'data-viz', 'hands-on'],
  images: ['/images/ImmersiveAnalyticsSIGGRAPH.jpg','/images/immersiveHealthcare1.jpg'],
  related: ['qlik', 'immersive-manufacturing-analytics', 'immersive-retail']
  },
  // Research / Display & Interaction Systems / Becoming Dragon
{
  slug: 'becoming-dragon',
  title: 'Becoming Dragon',
  category: ['Research'],
  subCategory: ['Display & Interaction Systems'],
  year: '2008-2010',
  medium: 'Augmented Reality',
  collaborators: ['Micha Cardenas'],
  heroImage: '/images/BG.1.jpg',
  description: 'Becoming Dragon questions the one year requirement of Real Life Experience that transgender people must fulfill in order to receive Gender Confirmation Surgery (Sexual Reassignment Surgery), and asks if this could be replaced by one year of Second Life Experience to lead to Species Reassignment Surgery. For the performance, Micha Cardenas, aka Azdel Slade, lived for 365 hours immersed in Second Life with a head mounted display (HMD), only seeing the physical world through a video feed, and a motion capture system to map her movements into Second Life. During the entire duration of the performance Micha stayed in the performance space at the Center for Research in Computing and the Arts (CRCA) and in Second Life which were both open to the public.',
  description2: 'The project seeks to explore notions of cultural identity and gender and examines the subject in transition - both biologically and technologically. As the Virtual Media Specialist for Becoming Dragon, I collaborated with Micha Cardenas and Chris Head to integrate motion capture technologies into the mixed reality performance. Micha wore a customized optical target integrated into the HMD which captured every live physical movement to control the movements of her avatar in Second Life. This was accomplished using VICON cameras and software I setup and configured with a bridge written by Chris Head and a SL script to receive those movements written by Micha. I also facilitated the installation and configuration of the stereoscopic 3D Second Life projection into the performance space as well as the video feed from the physical world back into Second Life.',
  description3: 'Co-sponsored by The Center for Performance Studies, the UCLA Department of Theater, the Center for Research in Computing and the Arts (CRCA), the Department of Theater, the School of Theater, Film, and Television, LGBT Studies, the Center for the Study of Women and The Center for Research in Engineering, Media and Performance. Additional support provided by San Diego State University\'s Second Life Initiative, Aztlan Island.',
  projectTag: ['installation', 'spatial', 'interaction', 'cross-functional'],
  images: ['/images/becoming-transreal_1.jpg','/images/11_25_08_micha_dragon.jpg'],
  related: ['ucsd-crca']
  },
  // Research / Display & Interaction Systems / Emerngency Response Drone
{
  slug: 'emergency-response-drone',
  title: 'Emerngency Response Drone',
  category: ['Research'],
  subCategory: ['Display & Interaction Systems'],
  year: '2019',
  medium: 'Internet of Things Analytics',
  collaborators: ['Ottawa Emergency Services', 'University of Ottawa'],
  heroImage: '/images/DroneDemo.jpg',
  description: 'The Emergency Response Drone is a proof-of-concept autonomous system designed to enhance humanitarian efforts through real-time situational awareness and distributed data processing. By leveraging Qlik Core and IoT integration, the drone acts as an edge-computing node, providing 911 operators with immediate, high-fidelity data from incident scenes. The system utilizes onboard computer vision to autonomously recognize and track critical variables—including human casualties, vehicle counts, and hazardous materials—transforming raw visual feeds into structured data fields for rapid decision-making.',
  description2: 'At the core of this innovation is the drone\'s ability to run analytics locally, calculating a dynamic risk score that is transmitted to web-based command centers. This real-time intelligence guides paramedics and firefighters in triaging scenes and deploying specialized resources with surgical precision. Beyond the immediate response, the platform facilitates comprehensive post-incident analysis by syncing edge data with cloud-based applications. This allows for the longitudinal review of major incidents, optimizing resource positioning and enhancing the common operating picture for complex, large-scale emergencies like flood relief or multi-vehicle collisions.',
  description3: 'I was responsible for creating, planning & executing the concept, design, development, configuration and operation of the Emergency Response Drone. Through Qlik, I worked in partnership with the Ottawa Emergency Services and the University of Ottawa to bring this project to life. We demonstrated the system at Qlik Qonnections 2019 in Dallas, TX',
  images: ['/images/EmergencyDrone2.jpeg','/images/EmergencyDroneStill.jpg'],
  projectTag: ['prototype', '0-to-1', 'hands-on', 'AI-ML', 'data-viz', 'cross-functional'],
  videoLink: 'https://youtu.be/5QE_a3_dRNc',
  related: ['qlik']
  },
  // Research / Display & Interaction Systems / Immersive Retail
{
  slug: 'immersive-retail',
  title: 'Immersive Retail',
  category: ['Research'],
  subCategory: ['Display & Interaction Systems'],
  year: '2018',
  medium: 'Augmented Reality',
  collaborators: ['Todd Margolis'],
  description: 'Prototyped a mixed-reality infrastructure using a Microsoft HoloLens to bridge the gap between a physical retail space and live enterprise data. The system utilized computer vision to recognize products on store shelves, triggering real-time calls to Qlik APIs to overlay dynamic inventory levels and sales performance data directly onto the physical environment. This "heads-up" analytics layer empowers store managers to make data-driven decisions regarding product placement and shelf-stocking efficiency without leaving the floor.',
  projectTag: ['prototype', 'spatial', 'data-viz', 'hands-on'],
  images: ['/images/ImmersiveRetail.1.jpg','/images/ImmersiveRetail.2.jpg'],
  related: ['qlik', 'immersive-manufacturing-analytics', 'immersive-healthcare-analytics']
  },
  // Research / Display & Interaction Systems / SPECFLIC
{
  slug: 'specflic',
  title: 'SPECFLIC',
  category: ['Research'],
  subCategory: ['Display & Interaction Systems'],
  year: '2006',
  medium: 'Distributed Cinema',
  heroImage: '/images/Specflic_bear_mulloy_01.jpg',
  description: 'SPECFLIC uses novel transmission and display media and a new storytelling form called Distributed Social Cinema to expand a critical dialogue about the social and cultural effects of future technologies and public spaces.  Each iteration of the series is held in an iconic public space and is free and open to the public. SPECFLIC stories are all set in 2030, and arise from research-based speculations about the near future of that particular public institution.',
  description2: 'Usually, in a performance or cinema experience, the audience is admonished to turn off their cell phones and cease conversation. SPECFLIC seeks to integrate these devices (cell phones, laptops, mp3players, etc) with live tele-matic performance, pre-recorded media elements, street performers and the audience\'s own social activity to create a multi-modal story event. Live ambient performances streamed through mobile video platforms are "mixed" and projected on public architecture to produce a new form of cinematic experience.',
  description3: 'I worked with Adriene Jenik in SPECFLIC 1.0 in La Jolla and SPECFLIC 2.0 in San Jose as Technical Director to identify and utilize transgressive digital media throughout the design and planning process. Physical architecture was transformed into immersive spaces where social experiences played out through digitally mediated audio and video streams (live and pre-recorded). During pre-production of SPECFLIC 2.0, I worked with Cinematographer John Pirozzi to assist with the HD shoot of Allison Janney and Richard Jenik in the MLK Library. I lead a large technical support team for SPECFLIC 2.0 which installed a complex network of projectors, cameras, microphones, speakers and computers inside, around and on top of the installation spaces.',
  images: ['/images/specflic_infospherian300.jpg','/images/remote_melissa+all.jpg'],
  projectTag: ['installation', 'interaction', 'cross-functional', 'leadership'],
  collaborators: ['Adriene Jenik'],
  related: ['cinegrid-3d-4k', 'vroom', 'ucsd-crca', 'museum-of-future-objects-mofo']
  },
  // Research / Display & Interaction Systems / FILE 4K
{
  slug: 'file-4k',
  title: 'FILE 4K',
  category: ['Research'],
  subCategory: ['Display & Interaction Systems'],
  year: '2009',
  medium: 'High-Performance Networked Media',
  collaborators: ['UCSD, CineGrid, Intel Corp., IBM, Zaxel Inc., FILE, Sony Corp., Mackenzie University, University of São Paulo, RNP, FAPESP, ANSP, Telefonica, Foundry Networks, MackPesquisa, Padtec, O2. RNP with support from the Brazilian Ministry of Science and Technology (MCT)'],
  description: 'In July 2009, I led a research team of engineers, film-makers and computer scientists to produce two high profile and historic events at FILE (Electronic Language International Festival). We premiered a 4K feature film across three continents, streamed live from Brazil to the US and Japan. This was accompanied by an HD video teleconference (VTC) between the three sites. This was the first time a feature length 4K film was streamed across three continents and the first uncompressed HD VTC between the northern and southern hemispheres.\n\nThe 4K film Enquanto a Noite não Chega (While the Night Does Not Come), by Beto Souza and Renato Falcão, was shot on a RED camera, edited and color-corrected in São Paulo, Brazil. Its premiere took place simultaneously in São Paulo, San Diego and Yokohama via network streaming during FILE 2009. In order to discuss the importance of streaming 4K cinema over optical networks, a HD VTC was also organized to occur between the same 3 sites one day after the premiere. The 15 person VTC panel had as participants: the Brazilian Minister of Culture, the president of Mackenzie University, the coordinators of several Brazilian networking companies as well as remote participants in San Diego and Japan.',
  description2: 'While the first wave of digital cinema had been installed at HD resolution, 4K cinema offered significant improvements in quality while demanding a more sophisticated means of processing and distribution. The resolution of each frame of 4K cinema is four times that of High Definition video, comprising 3840x2160 pixels per frame. The resulting image has tremendous clarity and can provide new aesthetic methods for film makers to pursue. Through this work, the new creative affordances of 4K cinema were highlighted, along with the new capabilities of cinematic distribution, production and experience.\n\nIn my capacity as Technical Director, I led the system design and equipment specification for a worldwide collaboration. Manually provisioning the necessary networks to transport the large amounts of data generated by 4K cinema and uncompressed HD video required the efforts of many groups responsible for each segment of the customized lightpath. Having to coordinate the project via emails across several time zones added to the logistical complexity. Extending the network over the proverbial \‘last mile\‘ to the show venue, was a true test of the political will and the technical savvy of the local team. Given the emergent nature of the 4K medium, we devised new methods for rendering, previewing, encoding, transferring, synchronizing and streaming 4K media. My role as the local 4K/streaming HD expert included exchanging knowledge with the Brazilian research teams to ensure the event\'s success and enable future collaborations.',
  heroImage: '/images/fig6.5.jpg',
  images: ['/images/fig4.1.jpg','/images/fig6.4.jpg'],
  projectTag: ['research', 'infrastructure', 'cross-functional', 'leadership'],
  videoLink: 'https://youtu.be/8JX1Yv7TfDQ',
  related: ['cinegrid-3d-4k', 'cinegrid-aes', 'vroom', 'ucsd-crca', 'ucsd-qualcomm']
  },
  // Research / Display & Interaction Systems / NetSight
{
  slug: 'netsight',
  title: 'NetSight',
  category: ['Research'],
  subCategory: ['Display & Interaction Systems'],
  year: '1995-1996',
  medium: 'Webmaster',
  heroImage: '/images/netsight.jpg',
  projectTag: ['product', 'spatial', 'hands-on'],
  description: 'In this role as Webmaster for a pioneering Chicago-based ISP, I spearheaded the expansion of traditional internet services into the nascent fields of web hosting and interactive design. By leveraging early-stage spatial computing, I specialized in the development of some of the region\'s first 3D VRML (Virtual Reality Modeling Language) websites, effectively introducing immersive 3D navigation to the web. This work laid the foundation for my ongoing inquiry into display systems by transforming static browsing into a navigable, three-dimensional experience.',
  images: ['/images/SGI_indy.jpeg'],
  related: ['uic-evl']
  },
  // Research / Display & Interaction Systems / PowerUser
{
  slug: 'poweruser-inc',
  title: 'PowerUser',
  category: ['Research'],
  subCategory: ['Display & Interaction Systems'],
  year: '1998-2000',
  medium: 'Web Developer',
  description: 'During my tenure as a Web Developer at PowerUser, I spearheaded the development of sophisticated, database-driven web architectures, bridging the gap between robust back-end infrastructure and intuitive user interaction. My role encompassed the full lifecycle of digital deployment, from the hands-on administration of web servers and e-commerce systems to the collaborative programming of dynamic site layouts. By integrating complex data systems with interactive design principles, I focused on creating scalable display and interaction frameworks that prioritized both technical stability and a seamless end-user experience.',
  projectTag: ['product', 'infrastructure', 'hands-on'],
  images: ['/images/poweruser.jpg'],
  related: ['netsight']
  },
  // Research / Display & Interaction Systems / Qlik Gesture
{
  slug: 'qlik-gesture',
  title: 'Qlik Gesture',
  category: ['Research'],
  subCategory: ['Display & Interaction Systems'],
  year: '2014-2015',
  medium: 'Hand Gesture Recognition',
  heroImage: '/images/ToddMainstage.jpg',
  description: 'The gestural interface for Qlik Sense represented a significant evolution in how users could physically interact with large-scale data environments. By integrating specialized hardware like the Leap Motion and Myo armband, the system enabled users to navigate complex datasets and isolate outliers through natural hand and arm movements. This interface allowed for a more visceral and embodied analytical experience, where the physical act of grabbing or pointing at data points replaced traditional mouse-based navigation. The demonstration highlights this immersive control, showcasing the seamless translation of physiological gestures into real-time data manipulations on massive video walls.',
  description2: 'Developed during the first three months of my tenure at Qlik, this project served as an intensive exploration into new technology stacks and collaborative research. Despite the challenge of working with a new team and unfamiliar frameworks in a compressed timeframe, the resulting prototype garnered substantial acclaim within the broader community. Its success led to high-profile demonstrations at major industry events, including Qlik Qonnections 2014 in Orlando and Qlik Qonnections 2015 in Dallas. These presentations underscored the potential for gestural computing and immersive analytics to transform how decision-makers engage with information on a truly grand scale.',
  images: ['/images/QlikQonnections.jpeg'],
  videoLink: 'https://youtu.be/e5BrlK-mQR8?si=GTc-IwByNcsi5oCV&t=1m34s',
  projectTag: ['prototype', '0-to-1', 'hands-on', 'spatial', 'interaction', 'data-viz'],
  related: ['qlik', 'qlik-day-in-the-life', 'immersive-manufacturing-analytics', 'immersive-retail']
  },
  // Research / Display & Interaction Systems / Day in the Life
{
  slug: 'qlik-day-in-the-life',
  title: 'Day in the Life',
  category: ['Research'],
  subCategory: ['Display & Interaction Systems'],
  year: '2016',
  medium: 'Augmented Reality',
  description: 'This project explores a multi-modal interface for big data exploration, utilizing wearable technology and gesture-based interactions to navigate complex datasets across expansive display environments. The system facilitates a seamless multi-screen experience where real-time sales alerts are pushed directly to wearable devices, allowing for immediate situational awareness regardless of a user\'s proximity to a primary workstation. This infrastructure enables high-velocity remote collaboration, as team members can use voice commands and wearable interfaces to synchronize their views with distant colleagues, ensuring that all stakeholders are analyzing the same live data streams in parallel.',
  description2: '​Central to this collaborative workflow is the ability to perform real-time data annotation and sharing through the integrated device ecosystem. Users can instantly bookmark specific data points or outliers and transmit those insights to the broader team, creating a continuous feedback loop that bridges the gap between local and remote environments. The experience is further enhanced by immersive gesture controls that allow for the physical manipulation of massive datasets on large-scale video walls. By leveraging muscle-sensing and motion-tracking sensors, the system transforms traditional analytics into an embodied process, where navigating and isolating critical information becomes a natural extension of human movement.',
  heroImage: '/images/DayInTheLife.png',
  images: ['/images/QlikQonnectionsPano.jpeg'],
  projectTag: ['prototype', '0-to-1', 'spatial', 'data-viz', 'interaction', 'hands-on'],
  videoLink: 'https://youtu.be/e5BrlK-mQR8?si=GTc-IwByNcsi5oCV',
  related: ['qlik', 'qlik-gesture']
  },
  // Research / Display & Interaction Systems / Conversational Analytics
  {
  slug: 'qlik-insight-chatbot',
  title: 'Conversational Analytics',
  category: ['Research'],
  subCategory: ['Display & Interaction Systems'],
  year: '2017',
  medium: 'Web Application',
  description: 'Before the era of Large Language Models, I co-developed a pioneering chatbot for Qlik Sense designed to democratize data access through natural language interaction. By architecting a seamless integration with the Qlik Sense Engine API, the system allowed users to query complex datasets and receive instant, visualized answers through a conversational interface.',
  description2: 'A core focus was bridging Natural Language and analytics. The work to validate and bring in acquisitions kept Qlik ahead of the curve and laid the perfect groundwork for the conversational AI and LLM era we\'re in now. The project\'s strategic value was validated when CrunchData and Kyndi were acquired by Qlik, leading to full integration into the core Qlik platform. This served as an early blueprint for inquiry-based analytics, moving beyond traditional dashboards to create a symbiosis between human language and computational logic.',
  projectTag: ['prototype', 'AI-ML', 'product', 'cross-functional', 'strategy', 'data-viz'],
  images: ['/images/InsightChatbotLarge.jpeg'],
  related: ['qlik', 'qlik-genai', 'qlik-reporting-storytelling']
  },
  // Research: Collaborative Environments
  // Research / Collaborative Environments / Vroom (Virtual Room)
{
  slug: 'vroom',
  title: 'Vroom (Virtual Room)',
  category: ['Research'],
  subCategory: ['Collaborative Environments'],
  year: '2010-2013',
  medium: 'Tiled display environment at UCSD',
  heroImage: '/images/CineGridVroom4.jpg',
  description: 'Vroom (Virtual Room) is a next-generation reconfigurable tiled display environment in development at Calit2. Vroom enables freely scalable digital collaboratories, connecting distributed, high-resolution visualization resources for collaborative work in the sciences, engineering and the arts. Vroom can transform a space into a completely immersive mixed media environment with interactive display surfaces and spatialized audio. The system utilizes narrow bezel display walls, directional audio and advanced interaction devices to share ultra high resolution data. Vroom builds on previous research from the NSF funded OptiPuter project by integrating modular OptiPortables (portable tiled display systems) with open-source middleware for local and remote collaboration.',
  description2: 'Vroom enables group collaboration for local and remote participants to share knowledge and experiences. Possible applications include: Remote learning, Brainstorming / Storyboarding, Post-production review and collaboration, High resolution video playback, Tele-immersive 3D interaction, Easy-to-use screencasting, Image, video, text media sharing\n\nVroom features include: Support for multiple user interfaces (optical tracking, touch UI, gesture interface, etc.), Support for directional and spatialized audio, Giga-Pixel image interactivity, 4K video streaming, 3D visualization, Tele-matic production',
  description3: 'Previous compatible system (HIPerSpace, HIPerWall, AESOP, OptiPortal) have been developed at Calit2 and distributed around the world to dozens of academic, government and corporate institutions. These systems are connected to high-speed optical networks to enable remote collaboration. The installation of Vroom in the Calit2 Theater will have approximately 100 displays, both 2D and 3D in a reconfigurable arrangement. Open-source software developed at UCSD and the Electronic Visualization Lab at UIC will enable the graphics (SAGE, CGLX and CalVR) and audio (SoundBender, VMAP and Sonnotate) middleware to share data across the local Vroom system as well as with remote nodes. Vroom will use 10Gb/s networking to all the display nodes with 10 (eventually 20) 10Gb/s uplinks to remote servers. Using both research systems and commercial platforms, we will integrate HD video tele-conferencing with remote nodes. We will employ spatialized audio with distributed Meyer speakers along with multiple wave field synthesis speaker arrays to provide directional audio. 4K video streaming and playback will be integrated into Vroom for both tiled display walls and projection surfaces.',
  projectTag: ['infrastructure', 'spatial', 'cross-functional', 'leadership'],
  images: ['/images/Octo-OptIPortableUnderConstructionControlRoom.jpeg', '/images/AllScreensContiuousImageDemo.jpg'],
  related: ['cinegrid-3d-4k', 'cinegrid-aes', 'growing-documentary', 'scalable-city', 'cultural-analytics', 'scalable-metadata-environments', 'ucsd-crca', 'ucsd-qualcomm', 'experimental-game-lab']
  },
  // Research / Collaborative Environments / CineGrid 3D 4K
{
  slug: 'cinegrid-3d-4k',
  title: 'CineGrid 3D 4K',
  category: ['Research'],
  subCategory: ['Collaborative Environments'],
  year: '2006-2013',
  medium: 'High-Performance Networked Media',
  heroImage: '/images/Cinegrid_4K3D.jpg',
  collaborators: ['Lauren Herr', 'Natalie Van Osdel', 'Tom DeFanti'],
  description: 'CineGrid is a global, non-profit organization dedicated to the research and demonstration of ultra-high-quality digital media over high-speed photonic networks. At its core, the project functions as a specialized "collaboratory," integrating high-performance computing with the rigorous demands of digital cinema. By utilizing 10 Gbps optical networks, CineGrid enables the real-time distribution and collaborative editing of 4K, 8K, and stereoscopic 3D media across vast distances. This infrastructure effectively removes the geographical barriers of high-end production, allowing interdisciplinary teams to treat global networks as a singular, unified workspace.',
  description2: 'A highlight of my research included networking media infrastructure, culminating in the tri-continental premiere of 4K feature-length media.  This milestone successfully established new benchmarks for distributed cinema, proving that uncompressed, ultra-high-resolution streams could be synchronized across continents with minimal latency. That led to a private demonstration of this technology for George Lucas at Industrial Light & Magic.',
  projectTag: ['research', 'infrastructure', 'cross-functional', 'leadership'],
  images: ['/images/audience.jpg','/images/CineSAGE-ILM.1-sm.jpg'],
  related: ['vroom', 'cinegrid-aes', 'file-4k', 'tele-taiko', 'growing-documentary', 'resonations']
  },
  // Research / Collaborative Environments / CineGrid @ AES
{
  slug: 'cinegrid-aes',
  title: 'CineGrid @ AES',
  category: ['Research'],
  subCategory: ['Collaborative Environments'],
  year: '2006',
  medium: 'High-Performance Networked Media',
  heroImage: '/images/CineGridVroom1.jpg',
  collaborators: ['Lauren Herr', 'Natalie Van Osdel', 'Tom DeFanti', 'Peter Otto', 'Industrial Light & Magic', 'Skywalker Sound'],
  description: 'This landmark demonstration represented the first real-time streaming of synchronized 2K/4K digital cinema and 24-channel uncompressed audio across a 10,000-mile virtual LAN. Originating from nodes in Los Angeles, San Diego, and Tokyo, the high-fidelity streams were mixed live for an audience of industry leaders at the Letterman Digital Arts Center. The project proved the viability of extreme-scale telepresence and remote post-production for the future of digital theatrical distribution.',
  description2: 'The technical program showcased the CineGrid philosophy of "networked extreme media" through four distinct acts, including interactive 4K telepresence and remote audio post-production. By leveraging uncompressed motion pictures and multi-channel spatialized audio, the event successfully simulated a globally distributed creative workflow. This research laid the groundwork for collaborative digital cinema specifications adopted by major Hollywood studios and international research institutions.',
  description3: 'As part of the core planning and design team, I collaborated with engineers from Industrial Light & Magic (ILM) and Skywalker Sound to architect the audio-video infrastructure. My responsibilities included configuring remote uncompressed audio servers and local network routing to ensure ultra-low latency playback. During the live performance, I served as the lead technician for queuing and managing the 24-channel spatialized audio streams over IP.',
  projectTag: ['research', 'infrastructure', 'cross-functional', 'hands-on'],
  images: ['/images/crew_shot.png','/images/wagner250.jpg'],
  related: ['vroom', 'cinegrid-3d-4k', 'file-4k', 'resonations']
  },
  // Research / Collaborative Environments / TeleMotions
{
  slug: 'telemotions',
  title: 'TeleMotions',
  category: ['Research'],
  subCategory: ['Collaborative Environments'],
  year: '2011',
  medium: 'Telepresence Performance',
  heroImage: '/images/TeleMotions4.jpg',
  collaborators: ['Mark Dresser'],
  description: 'TeleMotions was an experimental telepresence performance project developed by the Qualcomm Institute (UCSD). The project functioned as an inquiry into networked collaboration, utilizing high-bandwidth optical networks to facilitate real-time, distributed performances between remote participants. By connecting physically separated performers through immersive media environments, TeleMotions sought to challenge traditional notions of "presence" and "place," creating a shared virtual stage where movement and sound could interact without geographical constraints.',
  description2: 'In my role as Technical Director at the lab, I managed the complex infrastructure required for such high-stakes, real-time media systems. This involved coordinating the logistical planning, latency management, and fault-tolerant network architecture necessary to ensure that human intuition and algorithmic logic could coexist seamlessly across a distributed network.',
  projectTag: ['research', 'infrastructure', 'cross-functional', 'leadership'],
  images: ['/images/TeleMotions2.jpg'],
  related: ['inspiraling', 'cinegrid-3D-4K', 'resonations', 'ucsd-crca']
  },
  // Research / Collaborative Environments / Inspiraling
{
  slug: 'inspiraling',
  title: 'Inspiraling',
  category: ['Research'],
  subCategory: ['Collaborative Environments'],
  year: '2010',
  medium: 'Telepresence Performance',
  heroImage: '/images/inspiraling_sd4_copy_hb.jpg',
  collaborators: ['Mark Dresser'],
  description: 'Inspiraling: Telematic Jazz Explorations was an unprecedented concert of new jazz works with renowned composers and performers for the telematic music medium. Telematic music is networked real-time performance by musicians in different geographic locations. Performers were located in New York and San Diego, playing together as one trans-continental ensemble in real-time and "real-space". There were local audiences as well as a world-wide webcast.',
  description2: 'The music explored elements of jazz fused with artistic properties of telematic technology including multiplicity, heterophony, swing, polyphony, synchronicity, and nodality. The transparent densities and intensities were manifested to create this new music reality of telematic jazz.\n\nIn my role as Transmedia Producer I created a shared tele-collaborative performance environment enabling real-time spontaneity and musical tele-presence. This was achieved by utilizing advanced networking, HD video and multi-channel streaming audio with the coordinated efforts of artists and technologists from across the US. I lead the administrative effort to facilitate funding, budget planning, resource management and staff scheduling.',
  description3: 'San Diego Performers: Hafez Modirzadeh, saxophone, Michael Dessen, trombone, Alex Cline, percussion, Mark Dresser, contrabass\n\nNew York Performers: Amir ElSaffar, trumpet, Oliver Lake, saxophone, Min Xiao-Fen, pipa, Gerry Hemingway, percussion, Sarah Weaver, conductor\n\nPresented by:\n\nCalit2 and the Center for Research and Computing in the Arts (CRCA), University of California San Diego. Special thanks to the Dean of Arts and Humanities and the Fund for Innovation for supporting this project.\\nnMusic Technology Program, Steinhardt School, New York University. Dr. Robert Rowe, Vice-Chair, Director of Music Composition, Department of Music and Performing Arts Professions.\n\nRoulette Intermedia, Inc. James Staley, Director',
  projectTag: ['research', 'infrastructure', 'cross-functional', 'leadership'],
  images: ['/images/inspiraling_sd8_copy_hb.jpg','/images/IMG_3681_copy_hb.jpg'],
  related: ['telemotions', 'resonations', 'ucsd-crca']
  },
  // Research / Collaborative Environments / Tele-Taiko Teaching @ CineGrid
{
  slug: 'tele-taiko',
  title: 'Tele-Taiko Teaching @ CineGrid',
  category: ['Research'],
  subCategory: ['Collaborative Environments'],
  year: '2013',
  medium: 'Telepresence Performance',
  collaborators: ['Diana Wu', 'Naruwan Taiko', 'Tracy Cornish'],
  description: 'Tele-Taiko Teaching at CineGrid 2013 was a pioneering exploration into high-fidelity, low-latency remote pedagogy, leveraging high-speed optical networks to bridge the physical distance between instructor and student. Under the technical direction of Todd Margolis, the project featured Diana Wu of Naruwan Taiko utilizing advanced motion capture technology to provide real-time, nuanced instruction to Nicholas Vu over the CineGrid virtual network.',
  description2: 'By integrating ultra-high-definition video streaming with motion-tracked data, the research successfully simulated the kinesthetic feedback of an in-person apprenticeship, proving that even the most physically demanding and rhythmically precise art forms can be effectively transmitted across global research networks.',
  images: ['/images/tele-taiko.jpg','/images/TeleTaiko.jpg'],
  projectTag: ['research', 'infrastructure', 'cross-functional', 'leadership'],
  videoLink: 'https://youtu.be/5KBoZfF-EK0',
  related: ['essa', 'cinegrid-3D-4K']
  },
  // Research / Collaborative Environments / ResoNations
{
  slug: 'resonations',
  title: 'ResoNations',
  category: ['Research'],
  subCategory: ['Collaborative Environments'],
  year: '2009',
  medium: 'Telepresence Performance',
  heroImage: '/images/resonations_2_resized.jpg',
  description: 'Simultaneously performed at the United Nations Headquarters in New York, University of California San Diego, The Banff Centre in Alberta, Canada, Queens University Belfast, and Dongguk University in Seoul',
  description2: 'ResoNations was an international telematic music concert for peace on November 21, 2009 performed by twenty-six renowned musicians in five international locations: United Nations Headquarters in New York, University of California San Diego, The Banff Centre in Alberta, Canada, Queens University Belfast, and Dongguk University in Seoul. Telematic music is real-time performance via high-speed networks by musicians in different geographic locations. Four new contemporary music works for peace were performed by the composite ensemble: Hope\'s Dream by Mark Dresser and Sarah Weaver, Disparate Bodies by Pedro Rebelo, Rock, Paper, Scissors by Chris Chafe, and Green-colored Harmony by Jun Kim. There were audiences in each location and a world-wide webcast.',
  description3: 'ResoNations was made possible by an international collaboration of musicians, conductors, performers and researchers. My role as Transmedia Producer was to unify five remote locations via high quality audio and video into a single cohesive networked environment. Using multicast video streaming via Access Grid and multi-channel audio streaming via JackTrip, we connected the remote spaces to form a unified performance and experience. ResoNations was part of the annual Innovation Talks Symposia held at the United Nations Headquarters in New York by the World Association of Former United Nations Internes and Fellows (WAFUNIF), a United Nations Peace Messenger. WAFUNIF Arts For Peace and the Permanent Mission of Romania to the United Nations sponsored the event.',
  images: ['/images/resonations_7_resized.jpg','/images/resonations_1_resized.jpg'],
  projectTag: ['research', 'infrastructure', 'cross-functional', 'leadership'],
  collaborators: ['United Nations Headquarters in New York, University of California San Diego, The Banff Centre in Alberta, Canada, Queens University Belfast, and Dongguk University in Seoul'],
  related: ['cinegrid-3d-4k', 'cinegrid-aes', 'telemotions', 'inspiraling']
  },
  // Research / Collaborative Environments / Image Quest
{
  slug: 'image-quest',
  title: 'Image Quest',
  category: ['Research'],
  subCategory: ['Collaborative Environments'],
  collaborators: ['Ruth West'],
  year: '2010-2012',
  medium: 'Display & Interaction Systems',
  heroImage: '/images/GoogleEarth.1.jpg',
  description: 'Researchers from Washington University, the University of Arizona, the University of California, San Diego, and the University of Vermont were awarded collaborative grants to develop tools that support deeper integration of citizen scientists with a broad range of biological imaging projects. Our specific aims are to develop tools: 1. To make it easier for volunteers with smart phones to capture calibrated imagery supporting quantitative data measurements. 2. To facilitate volunteer contributions to image analysis tasks with better interfaces and formal methods to validate and create consensus estimates from many responses. 3. To foster long-term motivation and engagement within virtual communities through online environments that combine aesthetics, social networking and visualization tools.',
  description2: 'These tools will have an initial focus on problem domains including monitoring of urban re-forestation efforts and analysis of 3D biological and neurological imaging data at many different scales. It will produce a set of smart phone and web apps that will be available to the broader biological research community that require calibrated image capture and analysis, and will create an experimental web portal to engage virtual communities of volunteers and scientists collaborating to work on imaging problems.',
  description3: 'The ImageQuest project will make it simpler for volunteers and scientists to engage in a much broader set of biological imaging research. Providing tools which enhance a volunteers ability to capture and analyze images relieves a technical burden on biologists trying to develop citizen science approaches. Making these tools smarter and more interactive encourages volunteers to contribute meaningfully to novel research questions, and building a virtual community around the volunteers and the scientists helps to recruit, motivate and retain long term participation of the public in scientific research.',
  projectTag: ['research', 'AI-ML', 'cross-functional'],
  images: ['/images/IQ-NYC-LiDARnCensus.jpg','/images/LiDAR.1.jpg'],
  related: ['atlas-in-silico', 'scalable-metadata-environments', 'ucsd-crca']
  },
  // Research / Collaborative Environments / Growing Documentary
  {
  slug: 'growing-documentary',
  title: 'Growing Documentary',
  category: ['Research'],
  subCategory: ['Collaborative Environments'],
  year: '2011-2012',
  medium: 'Distributed Cinema',
  collaborators: ['Tracy Cornish'],
  description: 'Growing Documentary: Places + Perspectives is a sponsored research project between graduate students from Keio Media Design, Keio University and undergraduate students from the Visual Arts Department at the University of California, San Diego. The goal of this project was to explore remote collaboration as a means for producing a documentary using emerging technologies such as Vroom (Virtual Room @ Calit2), CineSage and PIX System for media sharing, review and critique, and HD/4K video teleconferencing for face-to-face discussions, knowledge sharing and project development. Using high-speed optical networks to connect advanced collaboration spaces, we were able to bridge diverse ideas with complex workflows in a novel format for next generation digital cinema production.',
    description2: 'This project culminated with screenings at the 24th Tokyo International Film Festival (2011), CineGrid International Workshop (2011) and the Hawaii International Film Festival (2012) as well as presentated at TEDx San Diego (2013) on the novel production practice.',
  heroImage: '/images/groupShot1.jpg',
  projectTag: ['research', 'infrastructure', 'cross-functional', 'leadership'],
  images: ['/images/GrowingTEDx.jpg'],
  related: ['vroom', 'cinegrid-3d-4k', 'ucsd-crca', 'ucsd-qualcomm', 'file-4k']
  },
  // Research / Collaborative Environments / Scalable City
  {
  slug: 'scalable-city',
  title: 'Scalable City',
  category: ['Research'],
  subCategory: ['Immersive Installations', 'Collaborative Environments'],
  year: '2009',
  collaborators: ['Sheldon Brown'],
  medium: 'Immersive Installation',
  heroImage: '/images/scalableCity2.jpg',
  description: 'Scalable City is a multi-dimensional art and research project developed within the Experimental Game Lab at the Qualcomm Institute, UCSD. The work functions as a provocative critique of urban sprawl and algorithmic logic, utilizing the mechanics of a video game to simulate the relentless expansion and eventual collapse of a hyper-consumerist landscape. By intersecting technologies from the leading edge of visualization research with extended game industry tools, the project creates a hybrid experience that explores how software systems permeate and shape contemporary society.',
  description2: 'The artwork is structured around a series of algorithmic "rules" that automate the construction of a sprawling, chaotic city—transforming the serene geometry of a digital landscape into a densely packed environment of roads and suburban architecture. As the simulation progresses, the very tools used for creation become the agents of destruction, leading to a "beautifully entropic" failure of the urban system.',
  projectTag: ['installation', 'research', 'spatial'],
  images: ['/images/scalableCity.jpg','/images/Sheldon_Brown-_Scalable_City1.jpg'],
  related: ['vroom', 'ucsd-crca', 'experimental-game-lab']
  },
  // Research: Collaborative Environments
  // Research / Collaborative Environments / Qlik Reporting & Storytelling
  {
    slug: 'qlik-reporting-storytelling',
    title: 'Qlik Reporting & Storytelling',
    category: ['Research'],
    subCategory: ['Collaborative Environments'],
    year: '2016-2019',
    medium: 'Business Intelligence SaaS',
    description: 'Bridging the gap between static reporting and active collaboration, I led the product strategy for Qlik\’s $10M+ ARR reporting portfolio. I spearheaded the modernization of legacy \'Mode 1\' systems into real-time, interactive environments for global partners like the United Nations. By prototyping AI-driven \'Insight Management\' systems, I helped transition the platform from traditional dashboards to personalized, feed-based discovery tools.',
    images: ['/images/qlik-viz.png'],
  projectTag: ['research', 'prototype', 'product', 'strategy', 'AI-ML'],
  related: ['qlik', 'tree-of-branch', 'qlik-insight-chatbot', 'qlik-genai']
  },
    // Research: Publications & Theory
  // Research / Publications & Theory / Qlik AI
{
  slug: 'qlik-genai',
  title: 'Agentic AI @ Qlik',
  category: ['Research'],
  subCategory: ['Publications & Theory'],
  year: '2023-2026',
  medium: 'Generative AI',
  heroImage: '/images/QlikAnswers2.png',
  description: 'During my tenure at Qlik, I played a key role in architecting the "art of the possible" for Generative AI, specifically by designing prototype integrations that showcased how Large Language Models (LLMs) could be seamlessly embedded throughout the Qlik platform. These prototypes focused on transforming systems like ChatGPT or Claude from a standalone tool into a specialized virtual assistant capable of enhancing the entire analytics lifecycle. By leveraging Qlik\'s robust API ecosystem, I helped demonstrate high-value use cases such as the automated generation of complex Qlik load scripts and set analysis expressions, the creation of high-fidelity synthetic data, and the use of natural language interfaces to recommend strategic questions for data exploration.\n\nThese efforts were instrumental in helping Qlik navigate the critical balance between cutting-edge innovation and enterprise-grade security. I worked closely with development and product teams to address the inherent challenges of LLM integration, such as data privacy and accuracy, while simultaneously gathering customer feedback to ground our AI ambitions in real-world needs. My research into AI-UI symbiosis architected the path for Qlik Answers and the Qlik MCP. By prototyping agentic logic within complex data environments, I validated a strategic roadmap for Model Context Protocols (MCP) that balances rapid innovation with architectural integrity.',
  images: ['/images/QlikAnswers.jpg'],
  projectTag: ['research', 'AI-ML', 'prototype', 'product', 'strategy', 'leadership'],
  related: ['qlik', 'qlik-insight-chatbot', 'qlik-reporting-storytelling', 'collaborative-analytics']
},
  // Research / Publications & Theory / Immersive Analytics
  {
    slug: 'collaborative-analytics',
    title: 'Collaborative Immersive Analytics',
    category: ['Research'],
    subCategory: ['Publications & Theory'],
    collaborators: ['Mark Billinghurst', 'Maxime Cordeil', 'Anastasia Bezerianos'],
    year: '2018',
    medium: 'Immersive Analytics book chapter (Springer Publishing)',
    heroImage: '/images/EVLCave2Analytics.jpg',
    description: 'Immersive Analytics is a new research initiative that aims to remove barriers between people, their data and the tools they use for analysis and decision making. Here the aims of immersive analytics research are clarified, its opportunities and historical context, as well as providing a broad research agenda for the field. In addition, it is reviewed how the term immersion has been used to refer to both technological and psychological immersion, both of which are central to immersive analytics research.',
    description2: 'Many of the problems being addressed by Immersive Analytics require groups of people to solve. This chapter introduces the concept of Collaborative Immersive Analytics (CIA) and reviews how immersive technologies can be combined with Visual Analytics to facilitate co-located and remote collaboration. We provide a definition of Collaborative Immersive Analytics and then an overview of the different types of possible collaboration. The chapter also discusses the various roles in collaborative systems, and how to support shared interaction with the data being presented. Finally, we summarize the opportunities for future research in this domain. The aim of the chapter is to provide enough of an introduction to CIA and key directions for future research, so that practitioners will be able to begin working in the field.',
    images: ['/images/EVLCave2Analytics.jpg','/images/CollaborativeAnalytics.jpeg'],
  projectTag: ['research', 'spatial', 'data-viz'],
  website: 'https://link.springer.com/chapter/10.1007/978-3-030-01388-2_8',
  related: ['qlik', 'immersive-manufacturing-analytics', 'immersive-healthcare-analytics', 'qlik-genai']
    },
    // Research / Publications & Theory / Cultural Analytics
{
  slug: 'cultural-analytics',
  title: 'Cultural Analytics',
  category: ['Research'],
  subCategory: ['Publications & Theory'],
  year: '2012-2014',
  medium: 'Immersive Analytics',
  heroImage: '/images/ToddCalit2AdvisoryCommitteeMeeting-06-05-14 Large.jpeg',
  description: 'The GeoMedia Analytics Platform was a research project that transformed thousands of Flickr and Instagram photos into a spatialized visual history of New York City. By utilizing a custom "Flickr Harvester" and high-performance computing, the project analyzed the collective output of social media users along Park Avenue and other major urban corridors. This allowed for the creation of massive, high-resolution "photo clouds" that layered the city\'s digital metadata directly onto its physical geography, revealing invisible cultural patterns and the shifting rhythms of urban life.',
  description2: 'In my capacity as Technical Director for the Software Studies Initiative, I leveraged the Vroom and HIPerSpace tiled display environments to visualize these datasets at an unprecedented scale. This work moved beyond simple data mapping to explore how software and social algorithms influence human behavior and architectural perception. Within my current portfolio, this project served as a cornerstone of research, demonstrating my ability to synthesize Public Data, Visual Analytics, and Immersive Design to make the hidden infrastructures of our modern society visible.',
  projectTag: ['research', 'data-viz', 'leadership'],
  images: ['/images/tiledDisplayGeo.jpg','/images/toddHololens.jpg'],
  related: ['ucsd-crca', 'tree-of-branch', 'software-studies', 'vroom', 'qlik']
  },
  // Research / Publications & Theory / Immersive Art in Augmented Reality
{
  slug: 'immersive-art-in-augmented-reality',
  title: 'Immersive Art in Augmented Reality',
  category: ['Research'],
  subCategory: ['Publications & Theory'],
  year: '2014',
  medium: 'Augmented Reality Art book chapter (Springer International Publishing)',
  description: 'In the context of the 2014 publication Augmented Reality Art: From an Emerging Technology to a Novel Creative Medium, this chapter serves as a pivotal investigation into the shift from technical spectacle to a nuanced creative discipline. Rather than focusing on the mere "suspension of disbelief" or the visual blending of the real and virtual, the text situates the medium as a platform for "social immersion". By exploring the cultural potential of mobile AR, it bridges the gap between art history, gaming culture, and contemporary practice. This positioning defines the chapter as a foundational study of how AR serves as an integrative work of art, where the "freedom" of the medium allows for a model of the world that is conditionally defined through participant interaction.',
  description2: 'Relating to the Manifest.AR collective\'s ethos in 2014, the chapter reflects the group\'s radical move toward locative and socially-driven interventions. It highlights a specific turn away from purely sensorial technology toward a "new social form of immersion" that prioritizes the connection between people across distance and time. As the collective was known for its interventionist approach—often placing digital objects in physical spaces like MoMA or the Venice Biennale—this chapter provides the theoretical backbone for those actions. It argues that the true power of the medium lies in "collaborative locative media," shifting the focus from the artist\'s individual vision to collective, social outcomes within the shared digital-physical landscape.',
  projectTag: ['research', 'spatial'],
  images: ['/images/978-3-319-69932-5.jpeg'],
  related: ['manifest-ar', 'moon-lust', 'show-me', 'out-of-the-box', 'local-art']
  },
  // Research / Publications & Theory / Camera Based Automatic Calibration for the Varrier System
{
  slug: 'varrier-IEEE',
  title: 'Camera Based Automatic Calibration for the Varrier System',
  category: ['Research'],
  subCategory: ['Publications & Theory'],
  year: '2005',
  medium: 'IEEE Computer Society Conference paper',
  collaborators: ['Jinghua Ge, Dan Sandin, Tom Peterka, Todd Margolis, Tom DeFanti'],
  weight: 'Computer Vision and Pattern Recognition. Volume 3 pg. 110',
  description: 'Varrier is a head-tracked, 35-panel tiled autostereoscopic display system which is produced by The Electronic Visualization Laboratory (EVL) at the University of Illinois at Chicago (UIC). Varrier produces autostereoscopic imagery through a combination of a physical parallax barrier and a virtual barrier, so that the stereoscopic images are directed correctly into the viewers eyes. Since a small amount of rotation and translation between physical and virtual barriers can cause large-scale effects, registration is critical for correct stereo viewing. The process is automated by examining image frames of two video cameras separated by the interocular distance as a simulation of human eyes. Three registration parameters for each panel are calibrated in the process. An arbitrary start condition is allowed and a robust stopping criterion is used to end the process and report results. Instead of exhaustive three dimensional searching, an efficient two phase calibration method is introduced. The combination of a heuristic rough calibration and an adaptive fine calibration guarantees a fast searching process with the best solution.',
  heroImage: '/images/placeholder.png',
  projectTag: ['research', 'spatial', 'hands-on'],
  images: ['/images/varrier65p_mars.gif'],
  related: ['varrier-siggraph', 'varrier-SPIE', 'uic-evl']
  },
  // Research / Publications & Theory / Varrier autostereographic display
{
  slug: 'varrier-SPIE',
  title: 'Varrier autostereographic display',
  category: ['Research'],
  subCategory: ['Publications & Theory'],
  year: '2001',
  medium: 'SPIE conference paper',
  collaborators: ['Daniel J. Sandin, Todd Margolis, Greg Dawe, Jason Leigh, Thomas A. DeFanti'],
  weight: 'Proc. SPIE 4297, Stereoscopic Displays and Virtual Reality Systems VIII, (22 June 2001); https://doi.org/10.1117/12.430818',
  description: 'The goal of this research is to develop a head-tracked, stern virtual reality system utilizing plasma or LCD panels. This paper describes a head-tracked barrier auto-stereographic method that is optimized for real-time interactive virtual reality systems. In this method, virtual barrier screen is created simulating the physical barrier screen, and placed in the virtual world in front of the projection plane. An off- axis perspective projection of this barrier screen, combined with the rest of the virtual world, is projected from at least two viewpoints corresponding to the eye positions of the head- tracked viewer. During the rendering process, the simulated barrier screen effectively casts shadows on the projection plane. Since the different projection points cast shadows at different angles, the different viewpoints are spatially separated on the projection plane. These spatially separated images are projected into the viewer\'s space at different angles by the physical barrier screen. The flexibility of this computational process allows more complicated barrier screens than the parallel opaque lines typically used in barrier strip auto-stereography. In addition this method supports the focusing and steering of images for a user\'s given viewpoint, and allows for very wide angles of view. This method can produce an effective panel-based auto-stereo virtual reality system.',
  heroImage: '/images/placeholder.png',
  projectTag: ['research', 'spatial', 'hands-on'],
  images: ['/images/varrierEyes.jpg'],
  related: ['varrier-siggraph', 'varrier-IEEE', 'uic-evl']
  },
  // Research / Publications & Theory / Scalable metadata environments
{
  slug: 'scalable-metadata-environments',
  title: 'Scalable metadata environments',
  category: ['Research'],
  subCategory: ['Publications & Theory'],
  year: '2014',
  medium: 'SPIE Conference Paper',
  collaborators: ['Ruth G. West, Todd Margolis, Andrew Prudhomme, Jürgen P. Schulze, Iman Mostafavi, J. P. Lewis, Joachim Gossmann, and Rajvikram Singh'],
  weight: 'Proc. SPIE 9012, The Engineering Reality of Virtual Reality 2014, 901205 (28 February 2014); https://doi.org/10.1117/12.2038673',
  images: ['/images/ATLAS_PRINT_SGO_grid.jpg'],
  projectTag: ['research', 'data-viz', 'spatial'],
  description: 'Scalable Metadata Environments (MDEs) are an artistic approach for designing immersive environments for large scale data exploration in which users interact with data by forming multiscale patterns that they alternatively disrupt and reform. Developed and prototyped as part of an art-science research collaboration, we define an MDE as a 4D virtual environment structured by quantitative and qualitative metadata describing multidimensional data collections. Entire data sets (e.g.10s of millions of records) can be visualized and sonified at multiple scales and at different levels of detail so they can be explored interactively in real-time within MDEs. They are designed to reflect similarities and differences in the underlying data or metadata such that patterns can be visually/aurally sorted in an exploratory fashion by an observer who is not familiar with the details of the mapping from data to visual, auditory or dynamic attributes. While many approaches for visual and auditory data mining exist, MDEs are distinct in that they utilize qualitative and quantitative data and metadata to construct multiple interrelated conceptual coordinate systems. These "regions" function as conceptual lattices for scalable auditory and visual representations within virtual environments computationally driven by multi-GPU CUDA-enabled fluid dyamics systems.',
  related: ['atlas-in-silico', 'cultural-analytics', 'vroom']
  },
  // Research / Publications & Theory / Tree of Branch
  {
  slug: 'tree-of-branch',
  title: 'Tree of Branch',
  category: ['Research'],
  subCategory: ['Publications & Theory'],
  year: '2015',
  medium: 'Web Visualization',
  dimensions: 'Published in Teradata\'s Art of Analytics',
  description: 'This visualization, featured in Teradata\'s Art of Analytics book, was generated to assist with the exploration and analysis of Qlik\'s open-source developer community, Branch. Originally intended as an interactive, open-ended discovery and navigational platform, the application enables visitors to uncover new meaning within the complex web of users, projects, and relationships. By representing metadata such as project similarities, view counts, and corporate affiliations, the work facilitates a deep understanding of the social dynamics and individual behaviors that drive the ecosystem.',
  description2: 'The visual architecture uses nodes to represent individual projects, scaled by view counts to immediately surface high-impact contributions. To visually quantify collaboration, each node encodes the number of contributors and comments, with clusters colored by product category. This multi-layered system—which earned its place in the Art of Analytics publication for its blend of technical rigor and expressive form—utilizes links to trace the intricate relationships between projects based on shared similarities and overlapping user bases.',
  description3: 'The visualization reveals a strong community focus on visualization extensions, dominated by two primary clusters, while identifying several emerging clusters that indicate opportunities for growth. Light blue links use edge bundling to demonstrate high similarity both within and between Qlik\'s primary visualization categories. Perhaps most notably, the light green links show that most contributors develop projects across the entire product spectrum, proving the versatility of the underlying platform and the cross-disciplinary nature of the developer community.',
  projectTag: ['research', 'data-viz'],
  images: ['/images/TreeOfBranch.jpg'],
  related: ['qlik', 'cultural-analytics', 'qlik-reporting-storytelling']
  },
  // Research: Pedagogy & Labs
  // Research / Pedagogy & Labs / Electronic Visualization Laboratory @  UIC
{
  slug: 'uic-evl',
  title: 'Electronic Visualization Laboratory @  UIC',
  category: ['Research', 'Strategy'],
  subCategory: ['Pedagogy & Labs','Academic Practice'],
  year: '1998-2005',
  medium: 'Research Assistant',
  dimensions: 'University of Illinois at Chicago',
  heroImage: '/images/USA-UIC-EVL-CAVE2.jpg',
  description: 'Lead project developer creating Virtual Reality content and co-inventor of the Varrier™ auto-stereoscopic barrier strip display. Co-authored papers on VR systems published at SIGGRAPH and SPIE 2001 and premiered the Varrier system at IEEE VR 2004.',
  description2: 'Assisted instructor in guiding students in programming computer graphics utilizing C/C++, OpenGL and glut. Administered a computer lab that consisted of 12 SGI workstations. Installed and updated software, created and maintained user accounts, configured the network and assisted students with lab projects. Guest lecturer for several Virtual Reality art courses in the School of Art and Design.',
  projectTag: ['research', 'spatial', 'infrastructure', 'hands-on'],
  images: ['/images/varrierColors.jpg'],
  related: ['varrier-siggraph', 'varrier-IEEE', 'varrier-SPIE', 'artn-laboratory']
  },
  // Research / Pedagogy & Labs / Interactive Arts and Media @ Columbia
{
  slug: 'columbia-college-chicago',
  title: 'Interactive Arts and Media @ Columbia',
  category: ['Research','Strategy'],
  subCategory: ['Pedagogy & Labs','Academic Practice'],
  year: '2000-2003',
  medium: 'Adjunct Faculty',
  dimensions: 'Columbia College Chicago',
  description: 'Instructor for Programming Web Databases (PHP/MySQL) and Introduction to Multimedia Programming (Macromedia Director/Lingo). Frequent guest lecturer for courses relating to art and technology in the Photography, Art History, Academic Computing and Interactive Multimedia departments.',
  projectTag: ['research', 'leadership'],
  images: ['/images/game-art-m.jpg'],
  related: ['saic', 'uic-evl']
  },
  // Research / Pedagogy & Labs / Art and Technology @ SAIC
{
  slug: 'saic',
  title: 'Art and Technology @ SAIC',
  category: ['Research','Strategy'],
  subCategory: ['Pedagogy & Labs','Academic Practice'],
  year: '1999-2003',
  medium: 'Instructor',
  dimensions: 'School of the Art Institute of Chicago',
  heroImage: '/images/art-institute-of-chicago.jpg',
  collaborators: ['Ben Chang'],
  description: 'As an instructor in the Art and Technology department at the School of the Art Institute of Chicago, I led graduate-level seminars focused on the intersection of creative practice and advanced technical infrastructure. My curriculum spanned from low-level systems programming in Linux and C++ for high-performance virtual environments—utilizing tools like OpenGL and Performer—to the development of experimental web architectures and interactive programming using DHTML and Macromedia Flash. By guiding students through these complex frameworks, I facilitated the exploration of digital aesthetics and the creation of sophisticated, data-driven artworks that push the boundaries of immersive and web-based media.',
  description2: 'The Immersive Environments seminar was a graduate-level research course at the School of the Art Institute of Chicago that served as an interdisciplinary laboratory for students across diverse fields such as sculpture, architecture, computer programming, and sound. Led by instructors Ben Chang and Todd Margolis, the curriculum balances technical mastery of advanced Virtual Reality development with rigorous conceptual critique. Students explored the evolution of digital aesthetics and contemporary theory while interrogating a wide spectrum of media—from special effects and gaming to "hypertextual synaesthesia"—to understand the broader cultural implications of immersive tech.',
  description3: 'The Beyond Prototypes exhibition showcased the culmination of this research, inviting the public to engage with a series of experimental virtual reality installations. Utilizing body tracking and stereoscopic video projection, the gallery transformed into a multi-sensory environment where visitors could navigate worlds ranging from poetic visualizations to bizarre interactive narratives. The collection moved past technical demos to present fully realized artworks, featuring projects that pushed the boundaries of architectural visualization and sculptural form through a digital lens.',
  images: ['/images/lab1_400.jpg','/images/350x622-toddnewevent_185.jpg'],
  projectTag: ['research', 'spatial', 'leadership'],
  videoLink: 'https://vimeo.com/25292528?fl=pl&fe=cm',
  related: ['columbia-college-chicago', 'uic-evl']
  },
  // Research / Pedagogy & Labs / UCSD\
{
  slug: 'software-studies',
  title: 'UCSD\'s Software Studies',
  category: ['Research'],
  subCategory: ['Pedagogy & Labs'],
  year: '2008-2012',
  medium: 'Technical Director',
  heroImage: '/images/placeholder.png',
  collaborators: ['Lev Manovich'],
  description: 'Disseminate the broad vision that software is a layer that permeates all areas of contemporary societies. As Technical Director, I developed projects, workshops, and publications analyzing contemporary techniques of control, communication, representation, and simulation through the lens of this software layer.',
  projectTag: ['research', 'data-viz', 'leadership'],
  images: ['/images/maxresdefault.jpg'],
  related: ['cultural-analytics', 'ucsd-crca']
  },
  // Research / Pedagogy & Labs / UCSD\
  {
  slug: 'experimental-game-lab',
  title: 'UCSD\'s Experimental Game Lab',
  category: ['Research'],
  subCategory: ['Pedagogy & Labs'],
  year: '2005-2012',
  collaborators: ['Sheldon Brown'],
  medium: 'Technical Director',
  heroImage: '/images/placeholder.png',
  description: 'Founded by Sheldon Brown, EGL is a research studio positioning gaming as the defining cultural form of the 21st century. We provided innovative, multi-disciplinary expertise to push forward its technological and expressive fronts. By intersecting technologies from the leading edge of visualization research with extended game industry tools, we created new cultural forms and hybrid experiences.',
  projectTag: ['research', 'spatial', 'leadership', 'infrastructure'],
  images: ['/images/eglLarge.jpeg'],
  related: ['ucsd-crca', 'ucsd-qualcomm', 'vroom', 'scalable-city']
  },
  // Strategy
  // Strategy: R&D Leadership
  // Strategy / R&D Leadership / Qlik
{
  slug: 'qlik',
  title: 'Qlik',
  category: ['Strategy'],
  subCategory: ['R&D Leadership'],
  year: '2014-2026',
  medium: 'Sr. Director of Applied Research & Emerging Technologies',
  heroImage: '/images/ConnectKeynote.jpg',
  description: 'Led a team of ML engineers to accelerate Qlik\'s long-term roadmap, defining high-level strategy and developing new capabilities across emerging media platforms. My approach is driven by a deep empathy for customer needs paired with a passion for creative, data-driven innovation. With extensive experience in prototyping and global thought leadership—ranging from executive briefings to conference keynotes—I have navigated the company\'s evolution over 10 years through previous roles as Director of Product Management and Sr. Solution Architect.',
  description2: 'As the lead of the Applied Research team, I orchestrated systematic investigations into cutting-edge technologies to identify high-value organic & inorganic strategic opportunities and anticipate market disruptions. My work centered on a rigorous methodology that translated complex technical breakthroughs into actionable business intelligence. By developing a framework encompassing executive briefings, deep-dive technical assessments, and implementation guidance, my team provided the foundational research necessary for stakeholders to navigate the "Build/Buy/Partner" spectrum. This approach ensured that emerging innovations were strategically integrated into the organizational context to drive future-proof investments.',
  description3: 'My research portfolio covered the full spectrum of the modern digital landscape, with a primary focus on the AI ecosystem throughout the information value lifecycle. I led deep-dives into agentic frameworks, autonomous orchestration and governance platforms, and immersive analytics platforms that leverage extended reality for advanced data exploration and storytelling. This practice enabled enhanced decision-making while establishing a common operating picture for navigating the rapidly evolving paradigms of autonomous reasoning and secure data collaboration.',
  projectTag: ['leadership', 'strategy', 'product', 'AI-ML', 'cross-functional', 'research'],
  images: ['/images/qlikTaiko.jpg','/images/InsightFeed.jpg'],
  related: ['immersive-manufacturing-analytics', 'immersive-healthcare-analytics', 'emergency-response-drone', 'immersive-retail', 'tree-of-branch', 'qlik-gesture', 'qlik-day-in-the-life', 'qlik-insight-chatbot', 'qlik-reporting-storytelling', 'qlik-genai']
  },
  // Strategy / R&D Leadership / NVision @ University of Northampton
  {
  slug: 'nvision',
  title: 'NVision @ University of Northampton',
  category: ['Strategy', 'Research'],
  subCategory: ['R&D Leadership', 'Display & Interaction Systems'],
  year: '2010-2012',
  medium: 'Honorary Board Member',
  note: 'Northampton, UK',
  description: 'I served as an Honorary Board Member for NVision at the University of Northampton, where I provided strategic oversight during the critical launch of its multi-million-pound technology innovation center. My role involved technical and operational consultancy for "The Cube," a flagship immersive visualization facility, as well as the center\'s high-performance computing infrastructure. By leveraging my leadership experience from UCSD, I advised on facility management and international best practices, helping to transition the site from its construction phase into a fully operational hub for advanced computational research.',
  description2: '​In addition to technical guidance, I contributed to the center\'s long-term commercial sustainability by shaping its business development and pricing strategies. I worked closely with the management board to establish tiered service models for industry partners and SMEs, ensuring that the center\'s advanced modeling and visualization services remained both accessible and impactful. This involved aligning technical capabilities with rigorous European Regional Development Fund performance targets, ultimately helping to bridge the gap between academic innovation and regional economic growth through high-level stakeholder engagement.',
  projectTag: ['strategy', 'leadership', 'infrastructure', 'cross-functional'],
  images: ['/images/Northampton.jpg','/images/0810_vr1.jpg'],
  related: ['ucsd-crca', 'ucsd-qualcomm']
  },
  // Strategy: Academic Practice
  // Strategy / Academic Practice / CRCA @ UCSD
{
  slug: 'ucsd-crca',
  title: 'CRCA @ UCSD',
  category: ['Strategy', 'Research'],
  subCategory: ['Academic Practice', 'Pedagogy & Labs'],
  year: '2005-2012',
  medium: 'Technical Director',
  dimensions: 'University of California, San Diego',
  heroImage: '/images/CRCA-neighborhood.jpg',
  collaborators: ['Sheldon Brown','Miller Puckett', 'Shahrokh Yadegari', 'Carol Hobson'],
  description: 'Provided organizational administration, research development, project management and grant writing for the Center for Research in Computing and the Arts. Created the design, specification, installation, configuration, operation, training and maintenance routine of CRCA\'s new 10,000 sq ft facilities including Virtual Reality, Spatialized Audio, Motion Capture, Gaming and Digital Cinema labs. Technical Director for dozens of interdisciplinary research projects that have been published and exhibited world-wide, as well as new products that have been brought to market. Managed small to medium groups on short-term projects as well as long-term teams.',
  projectTag: ['leadership', 'infrastructure', 'cross-functional', 'strategy'],
  images: ['/images/AG-ART-event.jpg'],
  related: ['experimental-game-lab', 'software-studies', 'ucsd-qualcomm', 'atlas-in-silico', 'vroom', 'telemotions', 'inspiraling', 'growing-documentary', 'resonations', 'scalable-city', 'cultural-analytics']
  },
  // Strategy / Academic Practice / Emergent Reality Lab @ RPI
{
  slug: 'rpi',
  title: 'Emergent Reality Lab @ RPI',
  category: ['Strategy'],
  subCategory: ['R&D Leadership'],
  year: '2011-2012',
  dimensions: 'Rensselaer Polytechnic Institute',
  medium: 'Consultant',
  description: 'Provided technical expertise for building a Virtual Reality system for the new Emergent Reality Lab at RPI. This included space planning, CAD drawing, requirements assessment, system design, equipment specification and configuration of the immersive and interactive system.',
  projectTag: ['strategy', 'infrastructure', 'spatial'],
  images: ['/images/erl.png'],
  related: ['uic-evl']
  },
  // Strategy / Academic Practice / Transmedia Research Institute @ FSU
  {
  slug: 'florida-state-university',
  title: 'Transmedia Research Institute @ FSU',
  category: ['Strategy'],
  subCategory: ['R&D Leadership'],
  year: '2011-2012',
  dimensions: 'Florida State University',
  medium: 'Consultant',
  description: 'In preparation for constructing a new 50,000 sq. foot Transmedia Research Institute, I provided guidance on the building characterization and design. This included defining research activities, facility specification, space requirements, equipment classification and furnishing specifications.',
  projectTag: ['strategy', 'infrastructure', 'spatial'],
  images: ['/images/Florida-State-University_blog-cover Large.jpeg'],
  related: ['ucsd-crca']
  },
  // Strategy / Academic Practice / Qualcomm Institute @ UCSD
  {
  slug: 'ucsd-qualcomm',
  title: 'Qualcomm Institute @ UCSD',
  category: ['Strategy','Research'],
  subCategory: ['Pedagogy & Labs', 'Academic Practice'],
  year: '2012-2014',
  medium: 'Assistant Project Scientist & Lecturer',
  dimensions: 'University of California, San Diego',
  heroImage: '/images/atkinson-720.jpg',
  description: 'Researcher with the Qualcomm Institute at the California Institute for Telecommunications and Information Technology (Calit2) designing and developing immersive systems using VR and large-format tiled displays. Focus on leading interdisciplinary teams of academic and industry researchers to create discovery platforms for large-scale geospatial, metagenomics and healthcare data. Instructed on Digital Imaging, Collaborative Image production, Web 2.0 Interaction, Transmedia, Programming, Augmented Reality',
  projectTag: ['research', 'leadership', 'spatial', 'infrastructure', 'cross-functional'],
  images: ['/images/atkinson-720.jpg'],
  related: ['ucsd-crca', 'experimental-game-lab', 'software-studies', 'varrier-siggraph', 'vroom', 'cinegrid-3d-4k', 'cinegrid-aes']
  },
  // Strategy: Cultural Stewardship
  // Strategy / Cultural Stewardship / Manifest.AR
{
  slug: 'manifest-ar',
  title: 'Manifest.AR',
  category: ['Strategy'],
  subCategory: ['Cultural Stewardship'],
  year: '2011-2012',
  medium: 'Artist Member',
  description: 'An international artists collective working with emergent forms of augmented reality as interventionist public art. The group sees this medium as a way of transforming public space and institutions by installing virtual objects and artworks which respond to and overlay the configuration of located physical meaning.',
  projectTag: ['strategy', 'spatial', 'cross-functional'],
  images: ['/images/ManifestAR.png'],
  related: ['immersive-art-in-augmented-reality', 'moon-lust', 'promotional-consideration', 'out-of-the-box', 'money-grab', 'museum-of-future-objects-mofo', 'show-me', 'local-art']
  },
  // Strategy / Cultural Stewardship / Applied Interactives
{
  slug: 'applied-interactives',
  title: 'Applied Interactives',
  category: ['Strategy'],
  subCategory: ['Cultural Stewardship'],
  year: '2001-2005',
  videoLink: 'https://vimeo.com/26047034?fl=pl&fe=cm',
  medium: 'Founding Member / President',
  collaborators: ['Keith Miller', 'Geoffrey A. Baum', 'Sabrina Raaf', 'Tim Portlock', 'Ben Chang'],
  description: 'A 501(c)3 non-profit dedicated to propagating VR technologies into galleries and contemporary art museums. Led the creation of a VR installation using the Auschwitz-Birkenau concentration camp as a setting for exploring persistence and memory, based on a PHSCologram housed in the Museum of Jewish Heritage.',
  description2: 'Based at the art(n) gallery in Chicago. Exhibited at the Museum of Contemporary Art Chicago, the Block Museum and Art Basel Miami Beach.',
  heroImage: '/images/AppliedInteractives_PortraitMain.jpg',
  projectTag: ['leadership', 'strategy', 'spatial', 'cross-functional'],
  images: ['/images/VRPortalVideo.jpg','/images/VRPrtl_MCA.jpg'],
  related: ['artn-laboratory', 'special-treatment']
  },
  // Strategy / Cultural Stewardship / Sine::apsis Experiments
  {
  slug: 'sine-apsis',
  title: 'Sine::apsis Experiments',
  category: ['Strategy'],
  subCategory: ['Cultural Stewardship'],
  year: '2000-2005',
  medium: 'Director / Artist Member',
  description: 'A 501(c)3 collective taking an unorthodox look at the role of technology in life and art. Organized exhibitions, lectures, and workshops featured in "Information Arts" by Steve Wilson, MIT\'s Leonardo journal, and YLEM.',
  collaborators: ['Fernando Orellana', 'Sabrina Raaf', 'Andrea Polli'],
  projectTag: ['leadership', 'strategy', 'cross-functional'],
  images: ['/images/sineLarge.jpeg'],
  related: ['applied-interactives']
  },
];
