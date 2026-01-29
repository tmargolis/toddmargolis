export interface Project {
  slug: string;
  title: string;
  status?: string;
  year: string;
  medium: string;
  dimensions: string;
  weight: string;
  price?: string;
  note: string;
  heroImage: string;
  quote: string;
  description: string;
  description2: string;
  description3?: string;
  images: string[];
  videos?: string[];
  isSeries?: boolean;
  imageTitles?: string[];
  imageDescriptions?: string[]; // New field for specific descriptions per image
  contextImage?: string;
  contextCaption?: string;
  watermarkedImages?: string[]; // Array of image paths that should show watermark
}

export const projects: Project[] = [
  // 1. Bang
  {
    slug: 'bang',
    title: 'Bang',
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
    status: 'Alpha Version',
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
      '/images/Saturn_Previs-1.png'
    ],
    imageTitles: [
        'The Moon (1.3s delay)',
        'The Sun (8m 20s delay)',
        'Saturn (79m delay)'
    ],
    imageDescriptions: [
        'The "Moon" mirror confronts you with a 1.3-second delay, a slight, uncanny hiccup in reality. This subtle temporal disjunction makes perceptible the distance between Earth and our nearest celestial neighbor, transforming a familiar reflection into something slightly, unsettlingly out of sync.',
        'In the "Sun" mirror, an 8-minute and 20-second gap separates you from your reflection, translating the immense scale of our solar system into a tangible temporal disjunction. The delay represents the time it takes for light to travel from the Sun to Earth, making the vastness of space immediately, personally felt.',
        'The "Saturn" mirror introduces a delay of nearly an hour and a half; the reflected self is so temporally removed it feels like another person, a phantom of your own recent history.'
    ],
    description3: 'This work finds a powerful precedent in Margolis\'s 2012 augmented reality piece, Moon Lust, exhibited at the Adler Planetarium, which first combined celestial concepts with technologies of altered perception. By turning a core principle of observational astronomy into a deeply personal, philosophical, and unforgettable encounter, the work transforms the gallery into an observatory that looks inward to reveal the most fundamental truths of our place in the cosmos.'
  },
  // 4. Star Trails
  {
    slug: 'star-trails',
    title: 'Star Trails',
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
  }
];
