import { MenuItem, Review, FAQItem, GalleryImage } from './types';

// Let's use the actual generated images here and high-quality Unsplash image configurations for others.
export const IMAGES = {
  rooftopSunset: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAGsxdw2ssvis2aNVXke9jl038KhWLBP3DUCfWbEIpLUvabFIavgWWFCFvI5SMa89nlZTgSro56nvrySWmSiqTaPXzVHvhp9qzdv63OY8rLXeuy6U3Ro6fd_YzRSMQkNxVI7BireOVh29pnt=s1360-w1360-h1020-rw',
  foodPlatter: '/src/assets/images/food_platter_1779355613622.png',
  cocktailBar: '/src/assets/images/cocktail_bar_1779355632455.png',
  aboutChandigarh: 'https://lh3.googleusercontent.com/p/AF1QipMTgaQjOviRtKGHs6q8XKuMi57hU9qBqnC-MCcm=s1360-w1360-h1020-rw',
  placeholderInterior: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=1200',
  placeholderPasta: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=800',
  placeholderPizza: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800',
  placeholderSalad: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800',
  galleryReal1: 'https://lh3.googleusercontent.com/p/AF1QipPgMr0ONWyxj-9CK3n3UINC__8YHTbxHwTZARth=s1360-w1360-h1020-rw',
  galleryReal2: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAHXp8G7es9w5vvXXElZMAZV0tWJwicL7vx5D7SwQG7-QXd6JwBOEpLq1SWwHaXz_pH6DJjlSM0gZAbgl5Av_E1vO2xdDmAPRT9AFAluslHWbidtAbWtcPF5yNKmwu1e-RAZLXD435RW-Tk=s1360-w1360-h1020-rw',
  galleryReal3: 'https://lh3.googleusercontent.com/p/AF1QipPe4nULndENzc9iDx05NS_YxJAEWcmcP9r8wmhW=s1360-w1360-h1020-rw',
  galleryReal4: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAGV7ifAMaIjuYUTlx2PP0jhy90Jp73mq7nQnuvCnPlKmhB2uQXhyPmbb_FM-I-5Xp8g63BeFoNO4dmqEmuG3Mg4BoNO1fTdBATnC2Jf8v4FIG0-ipfgsVDH5Op6ejpZkF9qnE-NiZKlR8Q=s1360-w1360-h1020-rw',
  galleryReal5: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAHiLgzkK6KDNZvhOGfWFBq29guGq07e1d90esFJeS-1pS-Ic1cxshLCCav_HpHR8WNVwaT4MsIFF47umcVuikOSqmo4yNF5NnpfnkbEz1kdy-ONbEfSXtk8vKPB7VtCJzKZsahp7ITo-H93=s1360-w1360-h1020-rw',
  galleryReal6: 'https://lh3.googleusercontent.com/p/AF1QipOSc72VYcBpAPs9k6c3IyZlvyg7fhTgymLNMQr7=s1360-w1360-h1020-rw',
  galleryReal7: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAHRInJpnhUBk46RL_Juq2b0Twvgnu-_odwLs4e91GPPcVhzkbzhv_Bvoaxe_PGj-xWt9MSFEK7JE6rmVFiJyEnW6leA_AhIg8pUp9lS8Lu0bWVn-O4w1RgaieUn3nK5wTOUoKcg=s1360-w1360-h1020-rw',
  menuImageCard: 'https://lh3.googleusercontent.com/p/AF1QipNPCZKkEbvnY2ouosVp6XY6-tDqG0mUGjg8XY1-=w101-h169-n-k-no-nu'
};

export const MENU_ITEMS: MenuItem[] = [
  // Starters
  {
    id: 's1',
    name: 'Mango Achari Paneer Tikka',
    description: 'Grilled cottage cheese cubes marinated in our signature tangy mango-spice chutney and cooked in tandoor.',
    category: 'starters',
    price: 450,
    dietType: 'veg',
    popular: true,
    spiciness: 1
  },
  {
    id: 's2',
    name: 'Allahabadi Bharwan Aloo',
    description: 'Crispy hollowed potatoes stuffed with a rich spiced mixture of cottage cheese, mint, and dried fruits, grilled perfectly.',
    category: 'starters',
    price: 450,
    dietType: 'veg',
    popular: true,
    spiciness: 1
  },
  {
    id: 's3',
    name: 'Fish Amritsari',
    description: 'Crispy gram-flour battered deep-fried fish seasoned with dynamic Punjabi spices and carom seeds, served with mint dip.',
    category: 'starters',
    price: 480,
    dietType: 'non-veg',
    popular: true,
    spiciness: 2
  },
  {
    id: 's4',
    name: 'Mixed Grill Platter',
    description: 'Premium chef-curated selection of tandoori malai chicken, lamb seekh kebab, and fish tikka served with a small laccha salad.',
    category: 'starters',
    price: 850,
    dietType: 'non-veg',
    popular: true,
    spiciness: 2
  },
  {
    id: 's5',
    name: 'Veg Kebab Platter',
    description: 'A grand collection of hara bhara kebab, dahi ke kebab, and classic malai paneer tikka served on a hot sizzler plate.',
    category: 'starters',
    price: 650,
    dietType: 'veg',
    popular: false,
    spiciness: 1
  },
  {
    id: 's6',
    name: 'Tandoori Malai Broccoli',
    description: 'Fresh broccoli florets marinated in cardamom-spiced cream cheese and charred gently in the tandoor.',
    category: 'starters',
    price: 420,
    dietType: 'veg',
    popular: false,
    spiciness: 0
  },

  // Mains (North Indian / Global Curries)
  {
    id: 'm1',
    name: 'Punjabi Butter Chicken',
    description: 'Our award-winning tandoori chicken pieces simmered lovingly in a rich, buttery, spiced sweet tomato and cashew gravy.',
    category: 'mains',
    price: 550,
    dietType: 'non-veg',
    popular: true,
    spiciness: 1
  },
  {
    id: 'm2',
    name: 'Chicken Thai Curry',
    description: 'A traditional aromatic Thai green curry with sliced chicken breast, bamboo shoots, bell peppers, and fresh sweet basil.',
    category: 'mains',
    price: 520,
    dietType: 'non-veg',
    popular: true,
    spiciness: 2
  },
  {
    id: 'm3',
    name: 'Paneer Tikka Butter Masala',
    description: 'Tandoori cottage cheese cubes finished in a robust Punjabi onion-tomato masala gravy with fresh butter and spices.',
    category: 'mains',
    price: 460,
    dietType: 'veg',
    popular: false,
    spiciness: 2
  },
  {
    id: 'm4',
    name: 'Dal Makhani (Slow-Cooked)',
    description: 'Creamy black lentils simmered for 24 hours on a slow fire, enriched with clarified butter, fresh cream, and fenugreek leaves.',
    category: 'mains',
    price: 390,
    dietType: 'veg',
    popular: true,
    spiciness: 0
  },
  {
    id: 'm5',
    name: 'Mughlai Gosht Rogan Josh',
    description: 'Tender Kashmiri-style lamb curry infused with a rich bouquet of whole spices and colored with natural red chillies.',
    category: 'mains',
    price: 620,
    dietType: 'non-veg',
    popular: true,
    spiciness: 2
  },
  {
    id: 'm6',
    name: 'Fragrant Saffron Veg Biryani',
    description: 'Layered basmati rice infused with rose water, fresh mint, spices, and an assortment of seasonal garden vegetables. Served with raita.',
    category: 'mains',
    price: 420,
    dietType: 'veg',
    popular: false,
    spiciness: 1
  },

  // Pizzas & Pastas
  {
    id: 'p1',
    name: 'Chilli Chicken Pizza',
    description: 'Artisanal thin-crust pizza topped with spicy shredded roasted chicken, rich marinara sauce, mozzarella cheese, and fresh red chillies.',
    category: 'pizzas-pastas',
    price: 490,
    dietType: 'non-veg',
    popular: true,
    spiciness: 2
  },
  {
    id: 'p2',
    name: 'Skylight Garden Special Veg Pizza',
    description: 'Signature thin base topped with baby corn, mushrooms, olives, cherry tomatoes, pesto swirl, and premium local mozzarella.',
    category: 'pizzas-pastas',
    price: 450,
    dietType: 'veg',
    popular: false,
    spiciness: 1
  },
  {
    id: 'p3',
    name: 'Penne Alfredo Prima Vera',
    description: 'Penne tossed in a luxurious parmesan cream sauce loaded with butter, garlic, roasted broccoli, zucchini, and parsley.',
    category: 'pizzas-pastas',
    price: 430,
    dietType: 'veg',
    popular: false,
    spiciness: 0
  },
  {
    id: 'p4',
    name: 'Spaghetti fiery Bolognese (Chicken)',
    description: 'Classic rich and robust slow-simmered chicken mince sauce over perfectly al dente spaghetti topped with visual microgreens.',
    category: 'pizzas-pastas',
    price: 480,
    dietType: 'non-veg',
    popular: false,
    spiciness: 2
  },

  // Desserts
  {
    id: 'd1',
    name: 'Hot Chocolate Lava Cake',
    description: 'Indulgent molten-center warm chocolate cake served side-by-side with local premium vanilla bean ice cream.',
    category: 'desserts',
    price: 280,
    dietType: 'veg',
    popular: true,
    spiciness: 0
  },
  {
    id: 'd2',
    name: 'Traditional Kulfi Falooda Slid',
    description: 'Rich home-style condensed milk saffron ice cream topped with sweet condensed rose-water vermicelli and basil seeds.',
    category: 'desserts',
    price: 240,
    dietType: 'veg',
    popular: false,
    spiciness: 0
  },
  {
    id: 'd3',
    name: 'Melt-in-mouth Gulab Jamun Duo',
    description: 'Two hot, golden milk-solid dumplings soaked in aromatic cardamom-saffron sugar syrup, decorated with silver foil.',
    category: 'desserts',
    price: 190,
    dietType: 'veg',
    popular: false,
    spiciness: 0
  },

  // Beverages/Cocktails
  {
    id: 'b1',
    name: 'Kala Khatta Mocktail',
    description: 'Chilled local favorite mocktail featuring a rich reduction of wild tangy berries, black salt, cumin, mint, and sparkling soda.',
    category: 'beverages',
    price: 250,
    dietType: 'veg',
    popular: true,
    spiciness: 0
  },
  {
    id: 'b2',
    name: 'Cityscape Skyline Infusion',
    description: 'Our premier signature rooftop cocktail combining botanic lavender syrup, cold-pressed lime, and sparkling gin.',
    category: 'beverages',
    price: 390,
    dietType: 'veg',
    popular: true,
    spiciness: 0
  },
  {
    id: 'b3',
    name: 'Classic Espresso Tiramisu Frappe',
    description: 'Rich double shot espresso blended with creamy mascarpone, cream cheese, cocoa powder, and dark chocolate chips.',
    category: 'beverages',
    price: 260,
    dietType: 'veg',
    popular: false,
    spiciness: 0
  },
  {
    id: 'b4',
    name: 'Fresh Mint & Cucumber Cooler',
    description: 'Pure cooling refresh water infused with cucumber slices, bruised coriander leaves, lime juice, and carbonated mountain water.',
    category: 'beverages',
    price: 210,
    dietType: 'veg',
    popular: false,
    spiciness: 0
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rv1',
    name: 'Shubham K.',
    rating: 5,
    quote: 'One of my favourite places to dine in Chandigarh... Their staff is incredibly courteous and cooperative. Highly recommend their butter chicken and their garlic naan is thin and crisp.',
    source: 'Google',
    date: '2026-03-12',
    tag: 'Courteous Staff'
  },
  {
    id: 'rv2',
    name: 'Prachi V.',
    rating: 5,
    quote: 'Amazing service and food. The open-air terrace layout is wonderful in the evening breeze. You must try the Chicken Thai Curry and their Chilli Chicken Pizza is an absolute party star!',
    source: 'Google',
    date: '2026-04-05',
    tag: 'Terrace Ambiance'
  },
  {
    id: 'rv3',
    name: 'Manbir S.',
    rating: 4,
    quote: 'Good food with a nice ambiance. Prompt service by Abhishek. We did a candlelit dinner here and the soft music created an extremely relaxed mood. Free valet is a blessing in Chandigarh.',
    source: 'Magicpin',
    date: '2026-05-02',
    tag: 'Candlelight Vibe'
  },
  {
    id: 'rv4',
    name: 'Sneha Sharma',
    rating: 5,
    quote: 'Unmatched 43rd-floor aesthetic. Generous portion sizes and authentic North Indian taste. The Allahabadi Bharwan Aloo is super tasty. Perfect for large family get-togethers!',
    source: 'Zomato',
    date: '2026-04-18',
    tag: 'Portion Sizes'
  },
  {
    id: 'rv5',
    name: 'Gulzar Singh',
    rating: 5,
    quote: 'Excellent party atmosphere on a Friday. The rooftop garden lights are magical and the sound system is highly calibrated. Service can be slightly slow when fully occupied, but the food is worth the wait.',
    source: 'Swiggy',
    date: '2026-05-10',
    tag: 'Lively Nightlife'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'f1',
    question: 'Where is The Skylight Garden located and is there parking?',
    answer: 'We are located on the 2nd Floor (Rooftop Terrace) of The Fern Residency hotel (Purv Marg Corridor), Industrial Area Phase II, Chandigarh. We offer free on-site parking and highly responsive valet services for all dining guests.',
    category: 'general'
  },
  {
    id: 'f2',
    question: 'How do I make a table reservation?',
    answer: 'You can easily reserve directly using our interactive booking tool here, or call us directly at +91 92165 85140. For peak evening times and weekend candlelight slots, we recommend booking at least 24 hours in advance.',
    category: 'reservations'
  },
  {
    id: 'f3',
    question: 'Is your venue fully accessible?',
    answer: 'Yes! The Skylight Garden and The Fern Residency feature dedicated wheelchair-accessible parking spaces, wide elevator access directly to the 2nd Floor, spacious level rooftop seating, and fully compliant accessible restrooms.',
    category: 'general'
  },
  {
    id: 'f4',
    question: 'Are there vegetarian, vegan, or gluten-free options available?',
    answer: 'We are proud to offer a highly vegetarian-friendly environment, featuring specialized traditional entrées like Allahabadi Bharwan Aloo and Paneer Tikka. While we do not have certified gluten-free or vegan labels, our chefs will happily customize standard North Indian main dishes upon request; please inform your server.',
    category: 'food'
  },
  {
    id: 'f5',
    question: 'What is the price range for two guests and do you serve alcohol?',
    answer: 'The average cost for two guests dining at the Skylight Garden is approximately ₹1,200 to ₹2,700, excluding alcoholic beverages. We feature a full service bar offering a luxurious list of curations, local wines, and mocktails like Kala Khatta.',
    category: 'billing'
  },
  {
    id: 'f6',
    question: 'Can you accommodate private events and watch parties?',
    answer: 'Absolutely! Our rooftop garden and indoor dining lounge combined can seat up to 100 guests comfortably. We are a premier choice for birthdays, cocktail parties, and corporate get-togethers, complete with a professional DJ stage area.',
    category: 'reservations'
  }
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 'g1',
    src: IMAGES.rooftopSunset,
    alt: 'The Skylight Garden rooftop setting at sunset with city view',
    category: 'ambiance',
    caption: 'Our elegant open-air rooftop terrace illuminated during golden hour.'
  },
  {
    id: 'g2',
    src: IMAGES.galleryReal1,
    alt: 'Premium outdoor garden seating tables at The Skylight Garden',
    category: 'ambiance',
    caption: 'Charming open-air seating nestled under elegant garden pergolas and sunshades.'
  },
  {
    id: 'g3',
    src: IMAGES.galleryReal2,
    alt: 'Delicious gourmet starters served on a premium tray',
    category: 'dishes',
    caption: 'Expertly plated appetizers cooked to perfection by our culinary specialists.'
  },
  {
    id: 'g4',
    src: IMAGES.galleryReal3,
    alt: 'Romantic twilight lights overhead the outdoor tables',
    category: 'ambiance',
    caption: 'Rooftop dining ambiance coming to life at night with warm hanging lanterns.'
  },
  {
    id: 'g5',
    src: IMAGES.galleryReal4,
    alt: 'Vibrant colourful beverages at the outdoor bar',
    category: 'drinks',
    caption: 'Dynamic custom-crafted mocktail pairings designed to refresh your senses.'
  },
  {
    id: 'g6',
    src: IMAGES.galleryReal5,
    alt: 'Panoramic terrace setups during a private party',
    category: 'events',
    caption: 'Spacious terrace layouts configured for delightful private gatherings and social events.'
  },
  {
    id: 'g7',
    src: IMAGES.galleryReal6,
    alt: 'Refreshing citrus coolers placed custom on the bar table',
    category: 'drinks',
    caption: 'Artisanal cocktails and mocktails served fresh from our live outdoor mixology bar.'
  },
  {
    id: 'g8',
    src: IMAGES.galleryReal7,
    alt: 'Beautiful ambient illuminated garden table setup at The Skylight Garden',
    category: 'ambiance',
    caption: 'Cozy evenings under a canopy of ambient hanging teardrop lights and natural foliage.'
  }
];
