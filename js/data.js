/*
Group Members:
        Ajay Shrestha
        Gaurab Pokhrel
        Nirajan Karki
        Sakar Thapa
*/
//products data with the attributes id, name, old price, price, available quantity, description, image link and category
const products = [
  {
    id: 1,
    name: "Airpods Max",
    oldPrice: 800,
    price: 700,
    availableQuantity: 20,
    description:
      "AirPods Max combine high-fidelity audio with industry-leading Active Noise Cancellation to deliver an unparalleled listening experience. Each part of their custom-built driver works to produce sound with ultra-low distortion across the audible range. From deep, rich bass to accurate mids and crisp, clean highs, you’ll hear every note with a new sense of clarity.",
    images: ["./media/headphone/airpods-max-pink.png"],
    category: "HEADPHONE",
  },
  {
    id: 2,
    name: "Soundcore by Anker Life Q30",
    oldPrice: 200,
    price: 109.99,
    availableQuantity: 15,
    description:
      "Hybrid Active Noise Cancelling Headphones with Multiple Modes, Hi-Res Sound, Custom EQ via App, 40H Playtime, Comfortable Fit, Bluetooth Headphones, Connect to 2 Devices.",
    images: ["./media/headphone/anker-black.jpg"],
    category: "HEADPHONE",
  },
  {
    id: 3,
    name: "Beats Solo3 ",
    oldPrice: 400,
    price: 249.95,
    availableQuantity: 17,
    description:
      "Wireless On-Ear Headphones - Apple W1 Headphone Chip, Class 1 Bluetooth, 40 Hours of Listening Time, Built-in Microphone - Black (Latest Model).",
    images: ["./media/headphone/beats-black.jpg"],
    category: "HEADPHONE",
  },
  {
    id: 4,
    name: "Bose Noise Cancelling Wireless Bluetooth Headphones",
    oldPrice: 490,
    price: 479,
    availableQuantity: 13,
    description:
      "Powerful noise cancelling headphones - 11 levels of active noise cancelling let you enjoy music, podcasts, videos & calls without distractions",
    images: ["./media/headphone/bose-black.jpg"],
    category: "HEADPHONE",
  },
  {
    id: 5,
    name: "JBL Tune 510BT Wireless On-Ear Bluetooth Headphones",
    oldPrice: 80,
    price: 69.98,
    availableQuantity: 10,
    description:
      "The Tune 510BT wireless headphones feature renowned JBL Pure Bass sound, which can be found in the most famous venues all around the world.",
    images: ["./media/headphone/jbl-black.jpg"],
    category: "HEADPHONE",
  },
  {
    id: 6,
    name: "Logitech Zone Vibe 100 Lightweight Wireless Over Ear Headphones",
    oldPrice: 200,
    price: 129,
    availableQuantity: 15,
    description:
      "Work. Play. Vibe: Made for the way you work and play, Zone Vibe 100 over ear wireless headphones are professional enough for the office, casual enough for home, and available in three modern colors",
    images: ["./media/headphone/logitech-black.jpg"],
    category: "HEADPHONE",
  },
  {
    id: 7,
    name: "Razer Opus X Wireless Low Latency Headset",
    oldPrice: 100,
    price: 91.38,
    availableQuantity: 12,
    description:
      "Active Noise Cancellation (ANC) Technology: Whether you’re grooving to your favorite beats, watching a movie, or gaming, eliminate all distractions with Active Noise Cancellation that detects and nullifies unwanted ambient noise",
    images: ["./media/headphone/razer-green.jpg"],
    category: "HEADPHONE",
  },
  {
    id: 8,
    name: "Sony WH-CH720N Noise Cancelling Wireless Headphones",
    oldPrice: 260,
    price: 248.1,
    availableQuantity: 8,
    description:
      "Take noise cancelling to the next level with Sony’s Integrated Processor V1, so you can fully immerse yourself in the music.",
    images: ["./media/headphone/sony-black.jpg"],
    category: "HEADPHONE",
  },
  {
    id: 9,
    name: "Beats Studio Earbuds",
    oldPrice: 150,
    price: 138,
    availableQuantity: 9,
    description: "Custom acoustic platform delivers powerful, balanced sound",
    images: ["./media/earbud/beats-black-earbud.jpg"],
    category: "EARPHONE",
  },
  {
    id: 10,
    name: "Edifier X2 True Earbuds",
    oldPrice: 30,
    price: 24,
    availableQuantity: 10,
    description:
      "ADVANCED BLUETOOTH 5.1 – Featuring Bluetooth 5.1 technology, the X2 earbuds provide a stable audio transmission speed and instant pairing connection without interruptions.",
    images: ["./media/earbud/edifier-black-earbud.jpg"],
    category: "EARPHONE",
  },
  {
    id: 11,
    name: "Jabra Elite 4 Active in-Ear Bluetooth Earbuds",
    oldPrice: 30,
    price: 24,
    availableQuantity: 10,
    description:
      "ADVANCED BLUETOOTH 5.1 – Featuring Bluetooth 5.1 technology, the X2 earbuds provide a stable audio transmission speed and instant pairing connection without interruptions.",
    images: ["./media/earbud/jabra-grey-earbud.jpg"],
    category: "EARPHONE",
  },
  {
    id: 12,
    name: "Samsung Galaxy Buds",
    oldPrice: 100,
    price: 97.72,
    availableQuantity: 8,
    description:
      "Galaxy Buds Live comes with an iconic shape and ergonomic design, a fit that lets in your natural surroundings, and a speaker optimized for a better experience.",
    images: ["./media/earbud/samsung-black-earbud.jpg"],
    category: "EARPHONE",
  },
  {
    id: 13,
    name: "JBL Tune 130NC",
    oldPrice: 72,
    price: 69.98,
    availableQuantity: 8,
    description:
      "JBL Pure Bass Sound: Smartly designed 10mm drivers enhanced by the Dot form factor deliver JBL’s Pure Bass Sound so you’ll feel every pulsing beat.",
    images: ["./media/earbud/jbl-blue-earbud.jpg"],
    category: "EARPHONE",
  },
  {
    id: 14,
    name: "Soundcore A40 Auto-Adjustable Active Noise Cancelling Wireless Earbuds",
    oldPrice: 90,
    price: 79.99,
    availableQuantity: 9,
    description:
      "Reduce Noise By Up to 98%: Space A40 has an upgraded noise cancelling system to block out a wider range of distracting noises. So wherever you go, you'll always have the space you need to focus",
    images: ["./media/earbud/soundcore-black-earbud.jpg"],
    category: "EARPHONE",
  },
  {
    id: 15,
    name: "Apple AirPods (3rd Generation)",
    oldPrice: 210,
    price: 199.99,
    availableQuantity: 5,
    description:
      "Personalized Spatial Audio with dynamic head tracking places sound all around you",
    images: ["./media/earbud/apple-white-earbud.jpg"],
    category: "EARPHONE",
  },
  {
    id: 16,
    name: "JBL Go 3 Eco: Portable Speaker",
    oldPrice: 74,
    price: 69.98,
    availableQuantity: 10,
    description:
      "JBL Pro Sound delivers surprisingly big audio and punchy bass from Go 3’s ultra-compact size.",
    images: ["./media/speaker/jbl3-blue-speaker.jpg"],
    category: "SPEAKER",
  },
  {
    id: 17,
    name: "JBL Charge 4 Portable Waterproof Wireless Bluetooth Speaker",
    oldPrice: 150,
    price: 129.5,
    availableQuantity: 8,
    description:
      "20 HOURS OF PLAYTIME: Built in rechargeable battery supports up to 20 hours of playtime and charges your device via USB port.Signal-to-noise ratio>80dB",
    images: ["./media/speaker/jbl-blue-speaker.jpg"],
    category: "SPEAKER",
    quantity: 1,
  },
  {
    id: 18,
    name: "Bose SoundLink Micro Bluetooth Speaker",
    oldPrice: 160,
    price: 149.5,
    availableQuantity: 5,
    description:
      "WATERPROOF speaker from the Inside out (Ipx7 rating), with soft, rugged exterior, resists dents, cracks and scratches",
    images: ["./media/speaker/bose-stoneblue-speaker.jpg"],
    category: "SPEAKER",
  },

  {
    id: 19,
    name: "Anker Soundcore Bluetooth Speaker",
    oldPrice: 65,
    price: 34,
    availableQuantity: 10,
    description:
      "ASTONISHING SOUND: Breathtaking stereo sound with deep bass is delivered with exceptional clarity and zero distortion by two high-sensitivity drivers and a patented bass port.",
    images: ["./media/speaker/anker-black-speaker.jpg"],
    category: "SPEAKER",
  },
  {
    id: 20,
    name: "ZEALOT 80W Bluetooth Speaker Wireless",
    oldPrice: 105,
    price: 93,
    availableQuantity: 10,
    description:
      "80W BASS WITH DUAL PAIRING,GREAT POWER BLUETOOTH SPEAKER. To achieve the incredible 80W, Zealot S57 speaker comes with an exclusive customised 2 woofers and two 25W full-range drivers and two 15W tweeters. Combine with DSP chip for top of the line bass stereo effect. Crazy and shocking. ",
    images: ["./media/speaker/zealot-black-speaker.jpg"],
    category: "SPEAKER",
  },
  {
    id: 21,
    name: "SOULION R40 Computer Speakers",
    oldPrice: 50,
    price: 36,
    availableQuantity: 5,
    description:
      "R40 Computer speaker is combined with full range 2.0 channel enhanced stereo core, produces rich and crystal audio for music, movie and gaming.",
    images: ["./media/speaker/soulion-speaker.jpg"],
    category: "SPEAKER",
  },
  {
    id: 22,
    name: "BUGANI Bluetooth Speakers",
    oldPrice: 100,
    price: 85,
    availableQuantity: 5,
    description:
      "BUGANI 80W stereo loud speaker with two 40 watt full-range drivers, which pump out more powerful clear sound and plays the music with less than 1% total harmonic distortion, which makes the M118 loud Bluetooth speaker perfect for any gatherings and the ideal indoor and outdoor speaker",
    images: ["./media/speaker/bugani-orange-speaker.jpg"],
    category: "SPEAKER",
  },
  {
    id: 23,
    name: "EWA A106 Mini Bluetooth Speaker",
    oldPrice: 60,
    price: 30,
    availableQuantity: 5,
    description:
      "IMPRESSIVE VOLUME AND BASS - A106Pro mini speaker is conveniently small but able to releasing crystal clear sound with impressive bass and room-filling loudness through a high-performance driver and a passive subwoofer",
    images: ["./media/speaker/ewa-black-speaker.jpg"],
    category: "SPEAKER",
  },
];

export default products;
