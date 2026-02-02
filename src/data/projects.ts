export type Category = 'Creative' | 'Inquiry' | 'Strategy';

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
  heroImage: string;
  quote?: string;
  description: string;
  description2?: string;
  description3?: string;
  images: string[];
  videos?: string[];
  isSeries?: boolean;
  imageTitles?: string[];
  imageDescriptions?: string[];
  contextImage?: string;
  contextCaption?: string;
  watermarkedImages?: string[];
}

export const projects: Project[] = [
  // 1. Bang
  {
    slug: 'bang',
    title: 'Bang',
    category: ['Creative'],
    subCategory: ['Performative Systems'],
    status: 'Awaiting Fabrication',
    year: '2026',
    medium: 'Kinetic Installation (Latex, Pneumatics)',
    dimensions: '48 x 24 x 24 inches',
    weight: '25 lb',
    price: '$2,500.00',
    note: 'Requires 15A Circuit',
    heroImage: '/images/bang.png',
    quote: 'A breathing universe.',
    description: 'In the quiet of the gallery, a universe is born and collapses, again and again. Bang is a potent kinetic sculpture that transforms a common scientific instrument—a weather balloon—into a profound and tangible cosmic event. Through a starkly simple yet powerful mechanism, the artwork invites viewers into a direct, physical engagement with the fundamental rhythms of creation and destruction.',
    description2: 'At the heart of the work is a large black weather balloon, whose deep, matte surface is speckled with countless white dots. Using a precisely controlled, closed-loop air pressure system, the artwork performs a relentless, meditative cycle. The balloon slowly expands from a dense, "singularity-like" state to a massive 5.5-foot sphere, holding its form before contracting back to its origin. This rhythmic inflation and deflation is the artwork\'s "cosmic breath"—a living, breathing entity whose presence alters the scale, sound, and even the subtle air currents of the room.\n\nBang powerfully evokes the cycle of cosmic creation and destruction—a tangible metaphor for the Big Bang and the hypothetical "Big Crunch." Its engagement with perception and negative space places it in dialogue with the minimalist and Light and Space movements.',
    description3: 'Like artists who use pigment or light to create seemingly bottomless voids, Bang uses its light-absorbing surface and shifting volume to dematerialize solid form. This work is a distilled, physical expression of Todd Margolis\'s career-long exploration of technology, perception, and immersive experience. While his digital work uses code and screens to transport the user, Bang achieves a similar perceptual shift using only air and latex, giving tangible, rhythmic form to abstract cosmological concepts of universal expansion and contraction.',
    images: [
        '/images/bang.png',
        '/images/Uninflated.jpg',
        '/images/BigBang.jpg'
    ],
    videos: [
      '/images/Balloon Expanding Closeup.mp4' 
    ],
    watermarkedImages: ['/images/bang.png', '/images/Uninflated.jpg', '/images/BigBang.jpg']
  },
  // 2. Black Hole Vision
  {
    slug: 'black-hole-vision',
    title: 'Spaghettification',
    category: ['Creative'],
    subCategory: ['Immersive Installations'],
    status: 'Awaiting Fabrication',
    year: '2026',
    medium: 'Virtual Reality',
    dimensions: '7 x 6 x 12 inches',
    weight: '1 lb',
    price: '$5,000.00',
    note: 'Requires power',
    heroImage: '/images/Spaghettification.1.png',
    quote: 'The tidal force of the infinite.',
    description: 'Spaghettification offers a visceral, firsthand encounter with one of the universe\'s most mind-bending phenomena. The artwork moves beyond mere illustration, crafting an immersive simulation that invites viewers to witness the dramatic distortion of an object as it crosses a black hole\'s event horizon - the infamous "point of no return." Rooted in Einstein\'s theory of general relativity, the piece makes perceptible the theoretical process of extreme tidal forces stretching matter vertically while simultaneously squeezing it horizontally.\n\nThis is not a passive observation, but an embodied experience of overwhelming transformation, designed to evoke the cosmic sublime: a profound sense of awe, fragility, and existential dread. The viewer is confronted with the disintegration of form as an object is elongated into a terrifyingly thin strand, just moments before vanishing into the singularity - the infinitely dense point where the laws of physics break down. Spaghettification thus transposes a purely theoretical concept into a lived sensation, challenging the limits of human perception and offering a confrontation with ultimate unknowability.',
    description2: 'This work is a distilled expression of artist Todd Margolis\'s career at the intersection of art, science, and technology. For over two decades, Margolis has used advanced immersive technologies to visualize complex systems and transform abstract data into tangible, experiential art. His extensive background in Electronic Visualization and pioneering work in Virtual and Augmented Reality provide the robust framework for such a project.\n\nThis piece aligns perfectly with a consistent pattern seen in works like ATLAS in silico, which visualized particle physics simulations in VR, and his research developing "artistically impelled immersive environments for large-scale data exploration." Across his practice - from co-inventing the Varrier™ auto-stereoscopic VR display to leading interdisciplinary teams at institutions like the Qualcomm Institute - Margolis has consistently sought to create platforms that manipulate and extend human perception. Spaghettification is therefore not an outlier, but a signature achievement that leverages deep technological expertise to make the invisible forces of the cosmos palpable, continuing his enduring exploration of the dialogue between scientific inquiry and artistic expression.',
    images: [
      '/images/Spaghettification.1.png',
      '/images/black-hole-vision-2.jpg'
    ],
    watermarkedImages: ['/images/Spaghettification.1.png', '/images/black-hole-vision-2.jpg']
  },
  // 3. Delayed Vision
  {
    slug: 'delayed-vision',
    title: 'Delayed Vision',
    category: ['Creative', 'Inquiry'],
    subCategory: ['Augmented Interventions', 'Display & Interaction Systems'],
    status: 'Work in Progress',
    year: '2026',
    medium: 'Android app running on  Galaxy A9+ Tablet',
    dimensions: '11 x 7 x 1 inches',
    weight: '1 lb',
    price: '$1000 each',
    note: 'Power to each tablet. Light so tablet camera can see',
    isSeries: true,
    heroImage: '/images/Sun_Previs-1.png', // Using Sun as hero
    quote: 'Light is a fossil of time.',
    description: 'Imagine seeing yourself not as you are now, but as you were moments, or even an hour, ago. This series of video mirrors forces a visceral encounter with a profound truth of our universe: because light travels at a finite speed, all observation is an act of looking into the past. By introducing a precise, scientifically-calibrated delay into your reflection, each mirror makes this cosmic latency immediate and deeply personal.',
    description2: 'The work dismantles the illusion of a shared, instantaneous present, rendering the self in the mirror perpetually out of reach—a version of you that has already vanished. The experience scales dramatically, moving from the subtly disorienting to the profoundly estranged. The mirrors cease to be mere surfaces for self-recognition and transform into portals, translating abstract astronomical data into a concrete, lived experience.\n\nThis work is a potent memento mori, a reminder that even in our most immediate self-perception, we are always confronting a ghost. It is the culmination of decades of artistic practice by Todd Margolis, who has consistently explored the intersection of perception, technology, and science. His extensive career in virtual and augmented reality, from co-inventing VR systems at the Electronic Visualization Lab to creating telepresence performances, has always questioned the nature of presence and the delays inherent in mediated communication. This series is a direct extension of that inquiry, grounding the technological manipulation of time not in artistic whim, but in the physical laws of the universe.',
    images: [
      '/images/Moon_Previs-1.png',
      '/images/Sun_Previs-1.png',
      '/images/Saturn_Previs-1.png',
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
    description3: 'This work finds a powerful precedent in Margolis\'s 2012 augmented reality piece, Moon Lust, exhibited at the Adler Planetarium, which first combined celestial concepts with technologies of altered perception. By turning a core principle of observational astronomy into a deeply personal, philosophical, and unforgettable encounter, the work transforms the gallery into an observatory that looks inward to reveal the most fundamental truths of our place in the cosmos.'
  },
  // 4. Star Trails
  {
    slug: 'star-trails',
    title: 'Star Trails',
    category: ['Creative'],
    subCategory: ['Tangible Artifacts'],
    year: '2023-2024',
    medium: 'Archival Pigment Prints',
    dimensions: '20 x 30 inches each',
    weight: '5kg each',
    price: '$1,000.00 each',
    note: 'n/a',
    isSeries: true,
    heroImage: '/images/GeminidTrails.jpg',
    quote: 'Earth\'s rotation captured in light.',
    description: 'In the photographic series "Star Trails" the night sky is transformed into a canvas for the captivating dance of celestial motion. Using the technique of long-exposure photography, individual stars are drawn out from mere pinpoints of light into mesmerizing streaks and elegant arcs. Each trail meticulously inscribes the path of our own planet’s relentless rotation through space. This is not a picture of stars moving, but rather a direct visualization of the Earth spinning on its axis beneath a fixed firmament. The technique brilliantly compresses hours of cosmic time into a single, silent frame, allowing us to perceive a motion that is otherwise imperceptible. The work offers a profound shift in perspective: we are not passive observers of a distant cosmos, but active participants on a moving world. By rendering the passage of time as a physical trace of light, the series makes the abstract geometry of our planetary existence a tangible, visual experience.',
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
    description3: 'This series serves as a foundational exploration for artist Todd Margolis, whose career has consistently been dedicated to revealing the unseen. With a background in Electronic Visualization and a professional trajectory focused on creating immersive systems for large-scale data, Margolis has long used technology to expand the limits of human perception. Whether using a camera shutter left open for hours or designing complex VR environments, the conceptual goal remains the same: to make invisible systems, patterns, and forces both visible and experiential. Just as these images translate the hidden data of planetary mechanics into beautiful form, his advanced scientific visualizations provide new ways to navigate and understand complex information. The "Star Trails" series is therefore more than a collection of stunning astrophotography; it is a rigorous inquiry into reality itself, standing at the intersection of scientific visualization and time-based art, and marking a critical articulation of the technologically-mediated experience that defines Margolis\'s broader practice.'
  },
  // 5. 3D Horizons
  {
    slug: '3d-horizons',
    title: 'Horizons',
    category: ['Creative', 'Inquiry'],
    subCategory: ['Tangible Artifacts', 'Display & Interaction Systems'],
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
    description2: 'Yet, these pristine scientific vistas are not left uninhabited. In a provocative artistic intervention, Margolis disrupts the purity of the data by embedding contemporary avatars of extra-planetary ambition within the scenes. With the simple, mechanical click of the viewer’s lever, one might encounter the icy mountains of Pluto, only to find them scaled by a diminutive Jeff Bezos; turn the wheel again, and Elon Musk is revealed surveying the dust-strewn craters of Mars\'s moon Phobos.\n\nThe result is an intimate, personal encounter with the sublime, complicated by the uncanny presence of human ego. The artwork collapses the immense distances of space, placing both the grandeur of cosmic phenomena—like the explosive energy of a Solar Coronal Mass Ejection—and the caricatures of modern corporate spacefarers directly into your hands. It transforms abstract data into a visceral experience, inviting a private communion with sights otherwise inaccessible to humankind, while simultaneously questioning who gets to claim dominion over them.',
    images: [
      '/images/Pluto-Previs_1.jpg',
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
    watermarkedImages: ['/images/View-MasterReelSm.png', '/images/Pluto-Previs_1.jpg','/images/asteroid-anaglyph.png', '/images/ProximaAvi.png', '/images/Horizons-moon.jpg']
  },
  // 6. Metronome
  {
    slug: 'audio-counter',
    title: 'Metronome',
    category: ['Creative'],
    subCategory: ['Performative Systems'],
    status: 'Awaiting Fabrication',
    year: '2026',
    medium: 'Generative Audio',
    dimensions: 'Variable',
    weight: 'N/A',
    note: 'Stereo Speakers',
    heroImage: '/images/pulsar.jpg',
    quote: 'A chorus of the cosmos.',
    description: 'METRONOME is an auditory experiment that invites you to listen to—and physically feel—the immense scale of the observable universe. While our cosmos holds an estimated two trillion galaxies, it is also governed by a precision that rivals the finest clockwork. This artwork transforms the incomprehensible magnitude of celestial time into a tangible, visceral encounter.',
    description2: 'The installation functions as a dual-layered cosmic timepiece. Every second, the piece triggers the audible sonification of a unique pulsar—the "cosmic metronomes" of the universe. These spinning neutron stars are the most stable timekeepers in existence, and here, they provide a persistent 1Hz heartbeat for the room. Listeners hear a constantly evolving "chorus of the cosmos," ranging from the sharp, metallic clicks of millisecond pulsars to the hollow, percussive thumps of ancient stars.\n\nThis steady rhythmic immersion is punctuated every hour by a "Catastrophic Event." The pulsar clock falls into a heavy, expectant silence as the room is overtaken by raw, low-frequency data from a LIGO binary black hole merger. By time-stretching these sub-second events into thirty-second swells, METRONOME shifts the experience from the ears to the bones. Using high-output subwoofers, the merger becomes a pressure event—a literal sensation of spacetime being compressed and stretched. It is the sublime rendered audible and tactile for the first time.',
    description3: 'This piece is a natural culmination of artist Todd Margolis\'s two-decade career exploring the intersection of art, technology, and large-scale data. From developing immersive discovery platforms for scientific research in Virtual Reality to his academic work on "Scalable Auditory Data Signatures," Margolis has consistently sought to translate vast, abstract information into meaningful human experiences. Here, he extends that inquiry to the ultimate dataset: the fundamental fabric of spacetime.\n\nThe artwork resonates deeply with the mission of Observables, exploring the contrast between the ancient, enduring universe and the fleeting, ephemeral nature of the digital sound attempting to capture it. METRONOME becomes an artifact from a future we haven\'t yet reached—a self-organizing sonic tapestry that embodies our ambition to comprehend the incomprehensible, forcing a confrontation with humanity\'s place within an unfathomable expanse.',
    images: [
      '/images/gravitationWave.jpg',
      '/images/gsmf.gif'
    ],
    watermarkedImages: ['/images/Audio_Stats.png', '/images/gsmf.gif']
  },
  // 7. The Edge
  {
    slug: 'the-edge',
    title: 'The Edge',
    category: ['Creative', 'Inquiry'],
    subCategory: ['Immersive Installations', 'Display & Interaction Systems'],
    status: 'Awaiting Fabrication',
    year: '2026',
    medium: 'Laminar Flow Fog Screen',
    dimensions: '70 x 30 inches',
    weight: '30kg',
    price: '$10,000.00',
    note: 'Requires non-windy environment',
    heroImage: '/images/LaminarFlowMethod-1.png',
    quote: 'A curtain of uncertainty.',
    description: 'This work uses advanced laminar flow technology—a technique that creates a perfectly smooth, undisturbed stream of air—to sculpt a seemingly impossible object: a perfect, thin wall of fog. It stands in the space like a slice of a cloud, a smooth, touchable plane that appears solid yet yields to the slightest touch. The wall is a physical boundary that is also an invitation. Visitors are encouraged to approach it, to see their reflection dissolve on its surface, to reach out and feel the cool, fine mist, and then to step through it.',
    description2: 'The installation is a physical metaphor for the edge of the observable universe. This cosmic boundary is not a wall in space, but the limit of what we can see—the point beyond which light has not had time to reach us. Like that boundary, the fog wall is visible and tangible, yet it is also permeable. Walking through it does not reveal what lies on the other side; it simply envelops you for a moment in the very substance of the boundary itself. The experience transforms an astronomical concept into an intimate, personal encounter, creating a profound awareness of the limits of our own perception and challenging us to reconsider the nature of edges, both physical and conceptual.',
    description3: 'For over two decades, my work has explored the intersection of technology and perception, creating immersive environments that make intangible ideas tangible. From building Virtual Reality worlds that visualize massive scientific datasets to developing Augmented Reality experiences that overlay digital information onto our physical space, my practice has consistently focused on how we encounter and understand boundaries. This installation is a logical extension of that inquiry, moving beyond the screen to create a purely physical, yet technologically mediated, experience. Where my past work in VR and AR used digital portals to explore new realities, this fog wall provides a physical one. It synthesizes a career of technological research with a fundamental question about the human condition: how do we relate to the things we can perceive but not fully comprehend? The fog wall offers no answers, only the direct, sensory experience of standing at the edge.',
    images: [
      '/images/LaminarFlowMethod-1.png',
      '/images/EdgeSideView.png'
    ],
    videos: [
      '/images/EdgePrevis.mp4' 
    ],
    watermarkedImages: ['/images/LaminarFlowMethod-1.png', '/images/EdgeSideView.png']
  },
  // 8. Now & Then
  {
    slug: 'now-and-then',
    title: 'Now & Then',
    category: ['Creative'],
    subCategory: ['Tangible Artifacts'],
    status: 'Work in Progress',
    year: '2021-2026',
    medium: 'Archival Prints',
    dimensions: '20 x 30 inches each',
    weight: '1 lb',
    price: '$1,000.00 each',
    note: 'n/a',
    isSeries: true,
    heroImage: '/images/1-Whirlpool.png',
    quote: 'Folding time onto itself.',
    description: 'In the Now & Then series, I explore the profound reality that astronomy is, at its core, the study of the past. Every photon captured by my lens carries a "history of travel," revealing not where a star is today, but where it was when its light began its journey across the void. To bridge the gap between human history and cosmic time, I use AI to generate contextual scenes of the specific historical era on Earth when that light first departed.',
    description2: 'By inserting the astronomical subject into these reconstructed landscapes and applying textures like fossilized rock, flaking parchment, or ancient stone etchings, I aim to materialize the "latency" of the universe, making the deep time of the cosmos tangible through the lens of human heritage.',
    images: [
      '/images/1-Whirlpool.png',
      '/images/Andromeda.jpg',
      '/images/Eagle v2.jpg',
      '/images/Orion.jpg',
      '/images/Horsehead and flame nebulas.png',
      '/images/California nebula.jpg',
      '/images/Veil.jpg'
    ],
    imageTitles: [
        'Whirlpool',
        'Andromeda',
        'Eagle',
        'Orion',
        'Horsehead',
        'California',
        'Veil Nebula'
    ],
    imageDescriptions: [
        'Fossilised into the appearance of ancient rock, this image captures the galaxy as it looked 23 million years ago when the continents were only just settling into their modern positions.',
        'Rendered as a primitive stone etching, this piece portrays our neighbor as it was 2.5 million years ago, a time when Homo habilis first began fashioning primitive tools in East Africa.',
        'Presented as a Neolithic stone carving, this work depicts the nebula as it appeared 7,000 years ago while early humans were domesticating cattle in a green Sahara and building the first proto-cities.',
        'Visualized on weathered, flaking parchment, this artwork captures the nebula as it looked 1,344 years ago during the height of the classic peak of Maya civilization.',
        'Created with the aesthetic of a Migration Period tapestry, this silhouette shows the nebula as it existed 1,375 years ago while Germanic tribes reshaped Europe and the Gupta Empire thrived in India.',
        'Styled as a medieval illuminated manuscript, this image captures the nebula as it was 1,000 years ago, a moment when the Golden Age of Islam flourished.',
        'Presented as a weathered Roman fresco, this work depicts the nebula as it appeared 2,400 years ago during the rise of the Roman Republic and the life of Siddhartha Gautama in India.'
    ],
    watermarkedImages: ['/images/Andromeda.jpg', '/images/Eagle v2.jpg', '/images/Orion.jpg', '/images/Horsehead and flame nebulas.png', '/images/California nebula.jpg', '/images/California nebula (1).jpg']
  },
  // 9. Sculpture
  {
    slug: 'sculpture',
    title: 'Neighbors',
    category: ['Creative'],
    subCategory: ['Tangible Artifacts'],
    status: 'Awaiting Fabrication',
    year: '2026',
    medium: 'Cast Material',
    dimensions: 'Variable',
    weight: 'Variable',
    note: 'Delicate packing',
    isSeries: true,
    heroImage: '/images/Spheroids-Previs1.png', 
    quote: 'Tactile astronomy.',
    description: 'This project presents a series of tactile reliefs created from scientific data of cosmic objects and phenomena, marking a compelling intersection of scientific rigor and artistic translation. It fundamentally recalibrates our relationship with the universe by transforming remote, abstract data into tangible, touchable sculptures. The work invites a haptic engagement—a direct connection through touch—with phenomena previously confined to sight or conceptual understanding. Here, you can run your fingers over the actual craters of the Moon and the surface of Mars, their topographies recreated from remote sensing data. You are also invited to explore physical interpretations of events and structures that have no solid surface: the warped spacetime around a black hole, the vast density of the Milky Way, and the fleeting, dynamic form of a solar flare. This act collapses immense astronomical distance into personal, intimate proximity. By bypassing purely intellectual or visual perception, the work fosters an embodied cognition, constructing a deeply personal and immediate connection to the cosmos rooted in our most grounding sense.',
    description2: 'The work situates itself within a contemporary lineage of art that leverages scientific data to evoke a new kind of technological sublime—an experience of awe mediated not by a vast landscape, but by the elegant translation of complex information into physical form. This project is a natural culmination of artist Todd Margolis\’s career-long exploration of making the invisible visible and the digital tangible. Drawing on decades of experience in 3D fabrication and designing immersive virtual reality systems—translating scientific data into experiential environments—Margolis now inverts his process. Instead of creating virtual worlds from data, he materializes data into real-world artifacts that we can hold and feel. Echoing ancient reliefs that embedded narratives in stone, these sculptures embed the discoveries of 21st-century science into their very texture. They transform scientific data from abstract information into a palpable presence, creating a bridge between the unseen forces of the universe and our most direct, human sense of touch.',
    contextImage: '/images/Flats-Previs_1.png', 
    contextCaption: 'Milky Way and Black Hole',
    images: [
      '/images/Mars-Previs_1..png',
      '/images/MilkyWay-Previs_1.png',
      '/images/Moon-Previs_1.png',
      '/images/Sun-Previs_1.png',
      '/images/BlackHole-Previs_1.png'
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
    watermarkedImages: ['/images/Spheroids-Previs1.png', '/images/Flats-Previs_1.png', '/images/Mars-Previs_1..png', '/images/MilkyWay-Previs_1.png', '/images/Moon-Previs_1.png', '/images/Sun-Previs_1.png', '/images/BlackHole-Previs_1.png']
  },
  // 10. CMB VR
  {
    slug: 'cmb-vr',
    title: 'CMB',
    category: ['Creative', 'Inquiry'],
    subCategory: ['Immersive Installations', 'Display & Interaction Systems'],
    status: 'Awaiting Fabrication',
    year: '2026',
    medium: 'Virtual Reality',
    dimensions: '7 x 6 x 12 inches',
    weight: '1 lb',
    price: '$5,000.00',
    note: 'Requires power',
    heroImage: '/images/Screenshot_20260101-084458~2.png',
    quote: 'Inside the first light.',
    description: 'This Virtual Reality experience offers a direct, personal encounter with the origins of our universe. You are positioned within a sphere mapped with the Cosmic Microwave Background (CMB)—the faint energy leftover from the Big Bang, often called the oldest light in the universe. Rather than observing data on a screen, you are literally placed inside it. Floating in this primal afterglow, the abstract measurements of cosmology are transformed into an enveloping visual fabric, making the universe\'s birth not just something to be seen, but to be felt.',
    description2: 'This visual immersion is synchronized with a unique audio landscape that represents the Doppler effect, the same phenomenon you hear in the changing pitch of a passing siren. Here, the soundscape gives a visceral dimension to the cosmic motion, expansion, and vast timescales embedded within the light. The experience collapses the immense observational distance between us and the dawn of time, aiming to inspire a state of awe and recalibrate our sense of scale, self, and connection to the grand cosmic narrative. It presents the fundamental story of our universe not as a cognitive exercise, but as a direct, perceptual immersion.',
    images: [
      '/images/Screenshot_20260101-084458~2.png',
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop'
    ],
    watermarkedImages: ['/images/Screenshot_20260101-084458~2.png']
  },
  // 11. Redshifter
  {
    slug: 'redshifter',
    title: 'Redshifter',
    category: ['Creative'],
    subCategory: ['Immersive Installations'],
    status: 'Awaiting Fabrication',
    year: '2026',
    medium: 'Room Installation',
    dimensions: '70 x 30 inches',
    weight: 'N/A',
    price: '$10,000.00',
    note: '1 Large (ideally 12 foot diagonal) short throw projector. Camera and LIDAR ceiling mounted',
    heroImage: '/images/Redshifter.png',
    quote: 'The color of velocity.',
    description: 'Before you stands a massive, hyper-realistic screen, a digital mirror reflecting the gallery and you within it. But this is no ordinary mirror; it is a window looking down an impossibly deep corridor of time and space. As you watch figures on the screen—your fellow visitors, perhaps even yourself—recede into this virtual distance, a profound transformation begins. First, their image stretches and shifts into the deep, ruby hues of "redshift," the same visual evidence astronomers use to see the universe expanding.',
    description2: 'Further on, they fade beyond visible light, becoming ghostly, high-contrast monochrome figures as if seen in infrared. The most striking effect is that of time itself unraveling. With increasing distance, adults seamlessly de-age into children, then into tiny, near-static newborn infants. This is a direct and poignant visualization of "lookback time," the cosmological principle that to look out across the universe is to look back into its primordial past. At the absolute limit of perception, these infants dissolve completely, fading into the grainy, gray static of the Cosmic Microwave Background—the faint, persistent echo of the Big Bang, the earliest light in our universe. "The 1089th Step" is an immediate, visceral experience that translates the grand, abstract narrative of the cosmos into a tangible and deeply personal journey.',
    description3: 'This work is a powerful culmination of Todd Margolis\'s career, which has consistently pioneered the use of emerging technology to create profound human experiences. His extensive background in developing immersive systems—from inventing new VR hardware to creating "expressive virtual reality contexts" for large-scale scientific data in works like "ATLAS in silico"—provides the technical and conceptual foundation for this piece. "Redshifter" situates itself in the lineage of Light and Space art, but instead of architectural light, it uses sophisticated digital simulation to manipulate our perception. It is not merely an illustration of science but a direct phenomenological inquiry, using the "live feed" to implicate us directly in its cosmic timeline. The installation evokes a modern "technological sublime," harnessing digital media to inspire the same awe and existential reflection that vast natural landscapes once did. By collapsing 13.8 billion years into the length of a gallery hall, the work transforms complex physics into an embodied encounter, bridging the unfathomable scale of the universe with the intimate scale of a single human life and asking a fundamental question: how do we perceive our place within this grand, unfolding story?',
    images: [
      '/images/Redshifter.png',
      'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop'
    ],
    watermarkedImages: ['/images/Redshifter.png']
  },
  // 12. Sky Watcher
  {
    slug: 'sky-watcher',
    title: 'Sky Watcher',
    category: ['Creative'],
    subCategory: ['Tangible Artifacts'],
    status: 'Work in Progress',
    year: '2026',
    medium: 'Mixed Media Light Sculpture (Arduino, Makeon Controller, LEDs, Vellum, Gold Acrylic)',
    dimensions: '24 x 24 x 3 inches', // Estimated based on the JWST hexagon layout
    weight: '8 lbs',
    price: '$8,500.00',
    note: 'Requires stable Wi-Fi connection for real-time astronomical data fetching. Wall-mounted installation.',
    heroImage: '/images/Sky Watcher3.jpg',
    quote: 'A terrestrial tether to cosmic clarity.',
    description: '"Sky Watcher" emerges as a compelling contemporary artifact, a data-driven light sculpture that bridges the vastness of the cosmos with the intimacy of human curiosity. Inspired by the iconic honeycomb geometry of the James Webb Space Telescope, the piece serves as a living infographic for the amateur astronomer. It pulls real-time information from astronomical APIs, analyzing crucial conditions like cloud cover, lunar phase, and atmospheric transparency (how free the sky is from haze) and seeing (how steady the air is). When these elements align for a perfect night of deep-sky imaging, the sculpture awakens. It doesn\'t flash or blare; instead, it projects a soft, vellum-diffused glow, transforming abstract data into an embodied, anticipatory experience.',
    description2: 'This subtle illumination functions as a potent prompt for human perception. The artwork doesn\'t merely present information; it materializes readiness. It fosters a relationship of patience and attunement, training the observer to read the environment through an aesthetic filter, elevating a functional notification into a moment of sublime potential. The eventual act of bringing out the telescope completes a feedback loop, cementing the sculpture as an interface not just between data and light, but between a human desire for cosmic connection and the ephemeral generosity of the heavens. It becomes a living, pulsing index of astronomical serendipity, imbuing a scientific pursuit with ritualistic grace.',
    images: [
      '/images/SkyWatcherTech.3.jpg',
      '/images/Sky Watcher3.jpg'
    ],
    videos: [
      '/images/SkyWatcher.mp4' 
    ]
  },
  // Historical: ATLAS in silico
  {
    slug: 'atlas-in-silico',
    title: 'ATLAS in silico',
    category: ['Creative', 'Inquiry'],
    subCategory: ['Immersive Installations', 'Collaborative Environments'],
    year: '2007-2013',
    medium: 'VR Installation',
    heroImage: '/images/placeholder.png',
    description: 'ATLAS in silico is a physically interactive virtual reality installation that fuses dynamic media, computer vision, and spatialized multichannel audio with pioneering science. It functions as an expressive virtual reality context for large-scale data exploration. Rather than simply displaying numbers, it translates massive scientific datasets—specifically touching on metagenomics and biological sequences—into a visceral, navigable environment. It uses computer vision to track the viewer, allowing their physical presence to drive the audiovisual representation of the data, effectively bridging the gap between abstract information and physical perception.',
    description2: 'The project was the subject of significant academic inquiry, leading to publications such as "Algorithmic Object as Natural Specimen" in Leonardo and "Sensate Abstraction" in SPIE, which detailed hybrid strategies for handling multi-dimensional data. The work has been exhibited globally at major venues including the National Academy of Sciences, SIGGRAPH, the Perot Museum of Nature and Science, 9e2 (Seattle), and the Museum of Old and New Art (MONA) in Tasmania.',
    images: ['/images/placeholder.png']
  },
  // Historical: Varrier Display
  {
    slug: 'varrier-siggraph',
    title: 'The VarrierTM autostereoscopic virtual reality display',
    category: ['Inquiry'],
    subCategory: ['Display & Interaction Systems'],
    year: '2005',
    medium: 'SIGGRAPH 2005',
    dimensions: 'Sandin, Margolis, Ge, Girado, Peterka, et al.',
    weight: 'Technical Paper',
    heroImage: '/images/varrier-siggraph.jpg',
    description: 'Virtual reality (VR) has long been hampered by the gear needed to make the experience possible; specifically, stereo glasses and tracking devices. Autostereoscopic display devices are gaining popularity by freeing the user from stereo glasses, however few qualify as VR displays. The Electronic Visualization Laboratory (EVL) at the University of Illinois at Chicago (UIC) has designed and produced a large scale, high resolution head-tracked barrier-strip autostereoscopic display system that produces a VR immersive experience without requiring the user to wear any encumbrances. The resulting system, called Varrier, is a passive parallax barrier 35-panel tiled display that produces a wide field of view, head-tracked VR experience. This paper presents background material related to parallax barrier autostereoscopy, provides system configuration and construction details, examines Varrier interleaving algorithms used to produce the stereo images, introduces calibration and testing, and discusses the camera-based tracking subsystem.',
    images: ['/images/varrier-siggraph.jpg']
  },
  // Vroom (Virtual Room)
  {
    slug: 'vroom',
    title: 'Vroom (Virtual Room)',
    category: ['Inquiry'],
    subCategory: ['Collaborative Environments'],
    year: '2010-2013',
    medium: 'Tiled display environment at UCSD',
    heroImage: '/images/placeholder.png',
    description: 'Next-gen reconfigurable tiled display environment for distributed collaboration.',
    images: ['/images/placeholder.png']
  },
  // Placeholder: CineGrid 3D 4K
  {
    slug: 'cinegrid-3d-4k',
    title: 'CineGrid 3D 4K',
    category: ['Inquiry'],
    subCategory: ['Collaborative Environments'],
    year: '2006-2013',
    medium: 'High-Performance Networked Media',
    heroImage: '/images/placeholder.png',
    description: 'CineGrid is a global, non-profit organization dedicated to the research and demonstration of ultra-high-quality digital media over high-speed photonic networks. At its core, the project functions as a specialized "collaboratory," integrating high-performance computing with the rigorous demands of digital cinema. By utilizing 10 Gbps optical networks, CineGrid enables the real-time distribution and collaborative editing of 4K, 8K, and stereoscopic 3D media across vast distances. This infrastructure effectively removes the geographical barriers of high-end production, allowing interdisciplinary teams to treat global networks as a singular, unified workspace.',
    description2: 'A highlight of my research included networking media infrastructure, culminating in the tri-continental premiere of 4K feature-length media.  This milestone successfully established new benchmarks for distributed cinema, proving that uncompressed, ultra-high-resolution streams could be synchronized across continents with minimal latency.',
    images: ['/images/placeholder.png']
  },
  // Placeholder: HUVR (Heads-Up Virtual Reality)
  {
    slug: 'huvr',
    title: 'HUVR',
    category: ['Inquiry'],
    subCategory: ['Display & Interaction Systems', 'Augmented Interventions'],
    year: '2010-2012',
    medium: 'Heads-Up Virtual Reality at UCSD',
    heroImage: '/images/placeholder.png',
    description: 'Placeholder for HUVR.',
    images: ['/images/placeholder.png']
  },
  // Placeholder: Scalable City
  {
    slug: 'scalable-city',
    title: 'Scalable City',
    category: ['Inquiry'],
    subCategory: ['Immersive Installations', 'Collaborative Environments'],
    year: '2009',
    medium: 'Immersive Installation',
    heroImage: '/images/placeholder.png',
    description: 'Scalable City is a multi-dimensional art and research project developed within the Experimental Game Lab at the Qualcomm Institute, UCSD. The work functions as a provocative critique of urban sprawl and algorithmic logic, utilizing the mechanics of a video game to simulate the relentless expansion and eventual collapse of a hyper-consumerist landscape. By intersecting technologies from the leading edge of visualization research with extended game industry tools, the project creates a hybrid experience that explores how software systems permeate and shape contemporary society.',
    description2: 'The artwork is structured around a series of algorithmic "rules" that automate the construction of a sprawling, chaotic city—transforming the serene geometry of a digital landscape into a densely packed environment of roads and suburban architecture. As the simulation progresses, the very tools used for creation become the agents of destruction, leading to a "beautifully entropic" failure of the urban system.',
    images: ['/images/placeholder.png']
  },
  // Placeholder: Moon Lust
  {
    slug: 'moon-lust',
    title: 'Moon Lust',
    category: ['Inquiry'],
    subCategory: ['Augmented Interventions'],
    year: 'TBD',
    medium: 'TBD',
    heroImage: '/images/placeholder.png',
    description: 'Placeholder for Moon Lust.',
    images: ['/images/placeholder.png']
  },
  // Placeholder: Museum of Future Objects (MOFO)
  {
    slug: 'museum-of-future-objects-mofo',
    title: 'Museum of Future Objects (MOFO)',
    category: ['Inquiry'],
    subCategory: ['Augmented Interventions'],
    year: 'TBD',
    medium: 'TBD',
    heroImage: '/images/placeholder.png',
    description: 'Placeholder for Museum of Future Objects (MOFO).',
    images: ['/images/placeholder.png']
  },
  // Placeholder: TeleMotions
  {
    slug: 'telemotions',
    title: 'TeleMotions',
    category: ['Inquiry'],
    subCategory: ['Performative Systems', 'Collaborative Environments'],
    year: '2011',
    medium: 'Telepresence Performance',
    heroImage: '/images/placeholder.png',
    description: 'TeleMotions was an experimental telepresence performance project developed by the Experimental Game Lab at the Qualcomm Institute (UCSD). The project functioned as an inquiry into networked collaboration, utilizing high-bandwidth optical networks to facilitate real-time, distributed performances between remote participants. By connecting physically separated performers through immersive media environments, TeleMotions sought to challenge traditional notions of "presence" and "place," creating a shared virtual stage where movement and sound could interact without geographical constraints.',
    description2: 'In my role as Technical Director at the lab, I managed the complex infrastructure required for such high-stakes, real-time media systems. This involved coordinating the logistical planning, latency management, and fault-tolerant network architecture necessary to ensure that human intuition and algorithmic logic could coexist seamlessly across a distributed network.',
    images: ['/images/placeholder.png']
  },
  // Placeholder: ResoNations
  {
    slug: 'resonations',
    title: 'ResoNations',
    category: ['Inquiry'],
    subCategory: ['Performative Systems', 'Collaborative Environments'],
    year: '2009',
    medium: 'Telepresence Performance',
    heroImage: '/images/placeholder.png',
    description: 'ResoNations was an international, multi-site "telematic" performance that connected musicians across global distances in real-time, creating a unified sonic experience through high-speed optical networks. The project served as a high-stakes inquiry into the possibilities of networked media, utilizing the infrastructure of CineGrid and the Qualcomm Institute to facilitate low-latency, high-fidelity collaboration between performers in locations such as San Diego, New York, and Belfast. By bridging these geographically disparate spaces, the performance challenged the limitations of physical distance and explored the emergence of a "distributed" stage.',
    description2: 'In my capacity as Technical Director for this performance, I was responsible for the rigorous logistical planning and fault-tolerant network architecture required to maintain synchronicity across continents. Managing the latency and audio-visual fidelity of ResoNations required more than just technical oversight; it demanded a strategic approach to Collaborative Environments, where human artistic intuition could coexist with complex algorithmic logic.',
    images: ['/images/placeholder.png']
  },
  // Placeholder: Cultural Analytics
  {
    slug: 'cultural-analytics',
    title: 'Cultural Analytics',
    category: ['Inquiry'],
    subCategory: ['Publications & Theory'],
    year: '2012-2014',
    medium: 'Immersive Analytics',
    heroImage: '/images/placeholder.png',
    description: 'The GeoMedia Analytics Platform was a research project that transformed thousands of Flickr and Instagram photos into a spatialized visual history of New York City. By utilizing a custom "Flickr Harvester" and high-performance computing, the project analyzed the collective output of social media users along Park Avenue and other major urban corridors. This allowed for the creation of massive, high-resolution "photo clouds" that layered the city\'s digital metadata directly onto its physical geography, revealing invisible cultural patterns and the shifting rhythms of urban life.',
    description2: 'In my capacity as Technical Director for the Software Studies Initiative, I leveraged the Vroom and HIPerSpace tiled display environments to visualize these datasets at an unprecedented scale. This work moved beyond simple data mapping to explore how software and social algorithms influence human behavior and architectural perception. Within my current portfolio, this project served as a cornerstone of Inquiry, demonstrating my ability to synthesize Public Data, Visual Analytics, and Immersive Design to make the hidden infrastructures of our modern society visible.',
    images: ['/images/placeholder.png']
  },
  // Publications & Theory: Immersive Art in Augmented Reality (Springer Chapter)
  {
    slug: 'immersive-art-in-augmented-reality',
    title: 'Immersive Art in Augmented Reality',
    category: ['Inquiry'],
    subCategory: ['Publications & Theory'],
    year: '2014',
    medium: 'Augmented Reality Art book chapter (Springer)',
    heroImage: '/images/placeholder.png',
    description: 'In the context of the 2014 publication Augmented Reality Art: From an Emerging Technology to a Novel Creative Medium, this chapter serves as a pivotal investigation into the shift from technical spectacle to a nuanced creative discipline. Rather than focusing on the mere "suspension of disbelief" or the visual blending of the real and virtual, the text situates the medium as a platform for "social immersion". By exploring the cultural potential of mobile AR, it bridges the gap between art history, gaming culture, and contemporary practice. This positioning defines the chapter as a foundational study of how AR serves as an integrative work of art, where the "freedom" of the medium allows for a model of the world that is conditionally defined through participant interaction.',
    description2: 'Relating to the Manifest.AR collective\’s ethos in 2014, the chapter reflects the group\'s radical move toward locative and socially-driven interventions. It highlights a specific turn away from purely sensorial technology toward a "new social form of immersion" that prioritizes the connection between people across distance and time. As the collective was known for its interventionist approach—often placing digital objects in physical spaces like MoMA or the Venice Biennale—this chapter provides the theoretical backbone for those actions. It argues that the true power of the medium lies in "collaborative locative media," shifting the focus from the artist\’s individual vision to collective, social outcomes within the shared digital-physical landscape.',
    images: ['/images/placeholder.png']
  },
  // Varrier at IEEE
  {
    slug: 'varrier-IEEE',
    title: 'Camera Based Automatic Calibration for the Varrier System',
    category: ['Inquiry'],
    subCategory: ['Publications & Theory'],
    year: '2005',
    medium: 'IEEE Computer Society Conference paper',
    dimensions: 'Jinghua Ge, Dan Sandin, Tom Peterka, Todd Margolis, Tom DeFanti',
    weight: 'Computer Vision and Pattern Recognition. Volume 3 pg. 110',
    description: 'Varrier is a head-tracked, 35-panel tiled autostereoscopic display system which is produced by The Electronic Visualization Laboratory (EVL) at the University of Illinois at Chicago (UIC). Varrier produces autostereoscopic imagery through a combination of a physical parallax barrier and a virtual barrier, so that the stereoscopic images are directed correctly into the viewers eyes. Since a small amount of rotation and translation between physical and virtual barriers can cause large-scale effects, registration is critical for correct stereo viewing. The process is automated by examining image frames of two video cameras separated by the interocular distance as a simulation of human eyes. Three registration parameters for each panel are calibrated in the process. An arbitrary start condition is allowed and a robust stopping criterion is used to end the process and report results. Instead of exhaustive three dimensional searching, an efficient two phase calibration method is introduced. The combination of a heuristic rough calibration and an adaptive fine calibration guarantees a fast searching process with the best solution.',
    heroImage: '/images/placeholder.png',
    images: ['/images/placeholder.png']
  },
  // Varrier at SPIE
  {
    slug: 'varrier-SPIE',
    title: 'Varrier autostereographic display',
    category: ['Inquiry'],
    subCategory: ['Publications & Theory'],
    year: '2001',
    medium: 'SPIE conference paper',
    dimensions: 'Daniel J. Sandin, Todd Margolis, Greg Dawe, Jason Leigh, Thomas A. DeFanti',
    weight: 'Proc. SPIE 4297, Stereoscopic Displays and Virtual Reality Systems VIII, (22 June 2001); https://doi.org/10.1117/12.430818',
    description: 'The goal of this research is to develop a head-tracked, stern virtual reality system utilizing plasma or LCD panels. This paper describes a head-tracked barrier auto-stereographic method that is optimized for real-time interactive virtual reality systems. In this method, virtual barrier screen is created simulating the physical barrier screen, and placed in the virtual world in front of the projection plane. An off- axis perspective projection of this barrier screen, combined with the rest of the virtual world, is projected from at least two viewpoints corresponding to the eye positions of the head- tracked viewer. During the rendering process, the simulated barrier screen effectively casts shadows on the projection plane. Since the different projection points cast shadows at different angles, the different viewpoints are spatially separated on the projection plane. These spatially separated images are projected into the viewer\'s space at different angles by the physical barrier screen. The flexibility of this computational process allows more complicated barrier screens than the parallel opaque lines typically used in barrier strip auto-stereography. In addition this method supports the focusing and steering of images for a user\'s given viewpoint, and allows for very wide angles of view. This method can produce an effective panel-based auto-stereo virtual reality system.',
    heroImage: '/images/placeholder.png',
    images: ['/images/placeholder.png']
  },
  // Publications & Theory: Scalable metadata environments (SPIE Paper)
  {
    slug: 'scalable-metadata-environments',
    title: 'Scalable metadata environments',
    category: ['Inquiry'],
    subCategory: ['Publications & Theory'],
    year: '2014',
    medium: 'SPIE Conference Paper',
    dimensions: 'Ruth G. West, Todd Margolis, Andrew Prudhomme, Jürgen P. Schulze, Iman Mostafavi, J. P. Lewis, Joachim Gossmann, and Rajvikram Singh',
    weight: 'Proc. SPIE 9012, The Engineering Reality of Virtual Reality 2014, 901205 (28 February 2014); https://doi.org/10.1117/12.2038673',
    heroImage: '/images/placeholder.png',
    description: 'Scalable Metadata Environments (MDEs) are an artistic approach for designing immersive environments for large scale data exploration in which users interact with data by forming multiscale patterns that they alternatively disrupt and reform. Developed and prototyped as part of an art-science research collaboration, we define an MDE as a 4D virtual environment structured by quantitative and qualitative metadata describing multidimensional data collections. Entire data sets (e.g.10s of millions of records) can be visualized and sonified at multiple scales and at different levels of detail so they can be explored interactively in real-time within MDEs. They are designed to reflect similarities and differences in the underlying data or metadata such that patterns can be visually/aurally sorted in an exploratory fashion by an observer who is not familiar with the details of the mapping from data to visual, auditory or dynamic attributes. While many approaches for visual and auditory data mining exist, MDEs are distinct in that they utilize qualitative and quantitative data and metadata to construct multiple interrelated conceptual coordinate systems. These "regions" function as conceptual lattices for scalable auditory and visual representations within virtual environments computationally driven by multi-GPU CUDA-enabled fluid dyamics systems.',
    images: ['/images/placeholder.png']
  },
  // Research Assistant (UIC/EVL)
  {
    slug: 'uic-evl',
    title: 'Electronic Visualization Laboratory',
    category: ['Inquiry'],
    subCategory: ['Display & Interaction Systems', 'Pedagogy & Labs'],
    year: '1998-2005',
    medium: 'Research Assistant',
    dimensions: 'University of Illinois at Chicago',
    heroImage: '/images/placeholder.png',
    description: 'Lead project developer creating Virtual Reality content and co-inventor of the Varrier™ auto-stereoscopic barrier strip display. Co-authored a paper on VR systems published at SPIE 2001 and premiered the Varrier system at IEEE VR 2004.',
    images: ['/images/placeholder.png']
  },
  // Professional experience
  // 1. Qlik
  {
    slug: 'qlik',
    title: 'Qlik',
    category: ['Strategy', 'Inquiry'],
    subCategory: ['R&D Leadership', 'Display & Interaction Systems'],
    year: '2014-present',
    medium: 'Sr. Director of Applied Research & Emerging Technologies',
    heroImage: '/images/placeholder.png',
    contextImage: '/images/Qlik_Logo_No_Trademark_2_Color_Positive_RGB.png',
    description: 'Lead a team of ML engineers accelerating our long-term roadmap, defining strategy and developing new capabilities leveraging emerging media platforms. My deep empathy for customer and user needs paired with my passion for innovation drives my creative, yet data-driven approach to prioritization. I have extensive prototyping and presentation experience and enjoy providing thought leadership in executive briefings, conference keynotes and academic symposiums globally. At Qlik, I have previously held roles as Director of Product Management as well as a Sr. Solution Architect.',
    images: ['/images/placeholder2.png']
  },
  // 2. University of California, San Diego (Qualcomm Institute)
  {
    slug: 'ucsd-qualcomm',
    title: 'Qualcomm Institute',
    category: ['Strategy','Inquiry'],
    subCategory: ['Pedagogy & Labs', 'Institutional Architecture'],
    year: '2012-2014',
    medium: 'Assistant Project Scientist & Lecturer',
    dimensions: 'University of California, San Diego',
    heroImage: '/images/placeholder.png',
    description: 'Researcher with the Qualcomm Institute at the California Institute for Telecommunications and Information Technology (Calit2) designing and developing immersive systems using VR and large-format tiled displays. Focus on leading interdisciplinary teams of academic and industry researchers to create discovery platforms for large-scale geospatial, metagenomics and healthcare data. Instructed on Digital Imaging, Collaborative Image production, Web 2.0 Interaction, Transmedia, Programming, Augmented Reality',
    images: ['/images/placeholder.png']
  },
  // 3. University of California, San Diego (CRCA)
  {
    slug: 'ucsd-crca',
    title: 'CRCA',
    category: ['Strategy', 'Inquiry'],
    subCategory: ['Institutional Architecture', 'Pedagogy & Labs'],
    year: '2005-2012',
    medium: 'Technical Director',
    dimensions: 'University of California, San Diego',
    heroImage: '/images/placeholder.png',
    description: 'Provided organizational administration, research development, project management and grant writing for the Center for Research in Computing and the Arts. Created the design, specification, installation, configuration, operation, training and maintenance routine of CRCA\'s new 10,000 sq ft facilities including Virtual Reality, Spatialized Audio, Motion Capture, Gaming and Digital Cinema labs. Technical Director for dozens of interdisciplinary research projects that have been published and exhibited world-wide, as well as new products that have been brought to market. Managed small to medium groups on short-term projects as well as long-term teams.',
    images: ['/images/placeholder.png']
  },
  // 4. Rensselaer Polytechnic Institute
  {
    slug: 'rpi',
    title: 'Rensselaer Polytechnic Institute',
    category: ['Strategy', 'Inquiry'],
    subCategory: ['Institutional Architecture', 'Display & Interaction Systems'],
    year: '2011-2012',
    medium: 'Consultant',
    heroImage: '/images/placeholder.png',
    description: 'Provided technical expertise for building a Virtual Reality system for the new Emergent Reality Lab at RPI. This included space planning, CAD drawing, requirements assessment, system design, equipment specification and configuration of the immersive and interactive system.',
    images: ['/images/placeholder.png']
  },
  // 5. Florida State University
  {
    slug: 'florida-state-university',
    title: 'Florida State University',
    category: ['Strategy', 'Inquiry'],
    subCategory: ['Institutional Architecture'],
    year: '2011-2012',
    medium: 'Consultant',
    heroImage: '/images/placeholder.png',
    description: 'In preparation for constructing a new 50,000 sq. foot Transmedia Research Institute, I provided guidance on the building characterization and design. This included defining research activities, facility specification, space requirements, equipment classification and furnishing specifications.',
    images: ['/images/placeholder.png']
  },
  // 7. Columbia College Chicago
  {
    slug: 'columbia-college-chicago',
    title: 'Interactive Arts and Media',
    category: ['Inquiry'],
    subCategory: ['Pedagogy & Labs'],
    year: '2000-2003',
    medium: 'Adjunct Faculty',
    dimensions: 'Columbia College Chicago',
    heroImage: '/images/placeholder.png',
    description: 'Instructor for Programming Web Databases (PHP/MySQL) and Introduction to Multimedia Programming (Macromedia Director/Lingo). Frequent guest lecturer for courses relating to art and technology in the Photography, Art History, Academic Computing and Interactive Multimedia departments.',
    images: ['/images/placeholder.png']
  },
  // 8. School of the Art Institute of Chicago
  {
    slug: 'saic',
    title: 'Art and Technology',
    category: ['Inquiry'],
    subCategory: ['Pedagogy & Labs'],
    year: '1999-2003',
    medium: 'Instructor',
    dimensions: 'School of the Art Institute of Chicago',
    heroImage: '/images/placeholder.png',
    description: 'Taught graduate courses in Virtual Environments (Linux/C++/YG/OpenGL/Performer), Web Architecture (DHTML/Macromedia Flash) and Experimental Programming for the Web (DHTML/Macromedia Flash).',
    images: ['/images/placeholder.png']
  },
  // Updated: (art)n Laboratory
  {
    slug: 'artn-laboratory',
    title: '(art)n Laboratory',
    category: ['Creative', 'Inquiry','Strategy'],
    subCategory: ['Tangible Artifacts', 'Display & Interaction Systems','Cultural Entrepreneurship'],
    year: '1999-2000',
    medium: 'Artist-in-residence, Curator',
    heroImage: '/images/placeholder.png',
    description: 'Produced 3D artwork based on PHSCologram and ImmersaGram technology utilizing 3D modeling and animation. Served as project lead for a searchable image-database website and managed network systems and web server administration.',
    images: ['/images/placeholder.png']
  },
  // 10. University of Illinois at Chicago (Lecturer)
  {
    slug: 'uic-lecturer',
    title: 'Electronic Visualization Laboratory',
    category: ['Inquiry'],
    subCategory: ['Pedagogy & Labs'],
    year: '1998-2000',
    medium: 'Lecturer / Lab Administrator',
    dimensions: 'University of Illinois at Chicago',
    heroImage: '/images/placeholder.png',
    description: 'Assisted instructor in guiding students in programming computer graphics utilizing C/C++, OpenGL and glut. Administered a computer lab that consisted of 12 SGI workstations. Installed and updated software, created and maintained user accounts, configured the network and assisted students with lab projects. Guest lecturer for several Virtual Reality art courses in the School of Art and Design.',
    images: ['/images/placeholder.png']
  },
  // 11. NetSight
  {
    slug: 'netsight',
    title: 'NetSight',
    category: ['Strategy'],
    subCategory: ['R&D Leadership'],
    year: '1995-1996',
    medium: 'Webmaster',
    heroImage: '/images/placeholder.png',
    description: 'Developed new business areas for a local ISP to offer web hosting and design services. We specialized in providing some of the first 3D VRML websites for the Chicago area.',
    images: ['/images/placeholder.png']
  },
  // Professional Organizations
  // Manifest.AR
  {
    slug: 'manifest-ar',
    title: 'Manifest.AR',
    category: ['Strategy', 'Creative'],
    subCategory: ['Cultural Entrepreneurship', 'Augmented Interventions'],
    year: '2011-2012',
    medium: 'Artist Member',
    heroImage: '/images/placeholder.png',
    description: 'An international artists collective working with emergent forms of augmented reality as interventionist public art. The group sees this medium as a way of transforming public space and institutions by installing virtual objects and artworks which respond to and overlay the configuration of located physical meaning.',
    images: ['/images/placeholder.png']
  },
  // NVision
  {
    slug: 'nvision',
    title: 'University of Northampton NVision',
    category: ['Strategy', 'Inquiry'],
    subCategory: ['R&D Leadership', 'Display & Interaction Systems'],
    year: '2010-2012',
    medium: 'Honorary Board Member',
    heroImage: '/images/placeholder.png',
    note: 'Northampton, UK',
    description: 'A state-of-the-art technology centre in Northampton, UK designed to bring 3D immersive stereo visualisation and high performance computing to the local University and wider community.',
    images: ['/images/placeholder.png']
  },
  // Applied Interactives, N.F.P.
  {
    slug: 'applied-interactives',
    title: 'Applied Interactives',
    category: ['Strategy', 'Creative'],
    subCategory: ['Cultural Entrepreneurship', 'Immersive Installations'],
    year: '2001-2005',
    medium: 'Founding Member / President',
    heroImage: '/images/placeholder.png',
    description: 'A 501(c)3 non-profit dedicated to propagating VR technologies into galleries and contemporary art museums. Facilitated installations at the Museum of Contemporary Art Chicago and the Block Museum. Led the creation of a VR installation using the Auschwitz-Birkenau concentration camp as a setting for exploring persistence and memory, based on a PHSCologram housed in the Museum of Jewish Heritage.',
    images: ['/images/placeholder.png']
  },
  // Updated: Sine::apsis Experiments
  {
    slug: 'sine-apsis',
    title: 'Sine::apsis Experiments',
    category: ['Strategy', 'Creative'],
    subCategory: ['Cultural Entrepreneurship', 'Performative Systems'],
    year: '2000-2005',
    medium: 'Director / Artist Member',
    heroImage: '/images/placeholder.png',
    description: 'A 501(c)3 collective taking an unorthodox look at the role of technology in life and art. Organized exhibitions, lectures, and workshops featured in "Information Arts" by Steve Wilson, MIT’s Leonardo journal, and YLEM. Managed multimedia programming, web site development, and technical support for large-scale new media art shows.',
    images: ['/images/placeholder.png']
  },
  // Software Studies Initiative
  {
    slug: 'software-studies',
    title: 'Software Studies Initiative',
    category: ['Inquiry', 'Strategy'],
    subCategory: ['Pedagogy & Labs', 'Publications & Theory'],
    year: '2008-2012',
    medium: 'Technical Director',
    heroImage: '/images/placeholder.png',
    description: 'Founded by Dr. Lev Manovich to disseminate the broad vision that software is a layer that permeates all areas of contemporary societies. As Technical Director, I developed projects, workshops, and publications analyzing contemporary techniques of control, communication, representation, and simulation through the lens of this software layer.',
    images: ['/images/placeholder.png']
  },
  // Experimental Game Lab
  {
    slug: 'experimental-game-lab',
    title: 'Experimental Game Lab',
    category: ['Inquiry', 'Creative'],
    subCategory: ['Pedagogy & Labs', 'Immersive Installations'],
    year: '2005-2012',
    medium: 'Technical Director',
    heroImage: '/images/placeholder.png',
    description: 'Founded by Sheldon Brown, EGL is a research studio positioning gaming as the defining cultural form of the 21st century. We provided innovative, multi-disciplinary expertise to push forward its technological and expressive fronts. By intersecting technologies from the leading edge of visualization research with extended game industry tools, we created new cultural forms and hybrid experiences.',
    images: ['/images/placeholder.png']
  },
  // New: PowerUser Inc.
  {
    slug: 'poweruser-inc',
    title: 'PowerUser Inc.',
    category: ['Strategy'],
    subCategory: ['R&D Leadership'],
    year: '1998-2000',
    medium: 'Web Developer / Project Manager',
    heroImage: '/images/placeholder.png',
    description: 'Project manager for dynamic, database-driven websites. Installed and administered web server and e-commerce systems, collaborating on interactive site creation and site layout programming.',
    images: ['/images/placeholder.png']
  }
];
