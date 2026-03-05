export const siteConfig = {
  name: "Martino's London",
  shortName: "Martino's",
  description:
    "Luxury Italian dining in Mayfair, London. Seasonal ingredients, curated wines, and impeccable hospitality.",
  url: "https://martinoslondon.com",
  phoneDisplay: "+44 20 7946 0821",
  phoneHref: "+442079460821",
  email: "reservations@martinoslondon.com",
  address: "14 Mayfair Lane, London W1K 6JP",
  openingHours: "Mon - Sun: 12:00 PM - 11:00 PM",
  googleMapsUrl: "https://maps.app.goo.gl/jcXLRyRgEZNjgzXa9",
  openTableUrl:
    "https://www.opentable.co.uk/s/?covers=2&dateTime=2026-03-06T19%3A00&metroId=72&term=Mayfair",
  resyUrl:
    "https://resy.com/cities/ldn?date=2026-03-06&seats=2&query=Mayfair",
  geo: {
    latitude: 51.509865,
    longitude: -0.118092,
  },
};

export const menuCategories = [
  "All",
  "Antipasti",
  "Pasta",
  "Main",
  "Dessert",
  "Cocktails",
] as const;

export const menuItems = [
  {
    category: "Pasta",
    title: "Truffle Tagliatelle",
    description:
      "Fresh egg pasta, black truffle butter, 36-month parmesan, and lemon zest.",
    price: "£28",
    image:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=1200&q=80",
  },
  {
    category: "Main",
    title: "Seared Branzino",
    description:
      "Line-caught sea bass, charred fennel, Amalfi citrus, saffron emulsion.",
    price: "£34",
    image:
      "https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&w=1200&q=80",
  },
  {
    category: "Main",
    title: "Tuscan Ribeye",
    description:
      "Dry-aged ribeye, rosemary jus, confit garlic potatoes, grilled broccolini.",
    price: "£42",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
  },
  {
    category: "Dessert",
    title: "Hazelnut Tiramisu",
    description:
      "Espresso mascarpone layers with roasted Piedmont hazelnuts and cacao.",
    price: "£14",
    image:
      "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=1200&q=80",
  },
  {
    category: "Antipasti",
    title: "Burrata Imperiale",
    description:
      "Puglian burrata, heritage tomato confit, basil oil, toasted sourdough.",
    price: "£18",
    image:
      "https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&w=1200&q=80",
  },
  {
    category: "Pasta",
    title: "Lobster Ravioli",
    description:
      "Handmade ravioli filled with lobster, shellfish bisque, and tarragon butter.",
    price: "£36",
    image:
      "https://images.unsplash.com/photo-1645112411341-6c4fd023882a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    category: "Cocktails",
    title: "Mayfair Negroni",
    description:
      "Small-batch gin, barrel-aged vermouth, bitter orange, and rosemary smoke.",
    price: "£16",
    image:
      "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    category: "Dessert",
    title: "Pistachio Panna Cotta",
    description:
      "Silken panna cotta, Sicilian pistachio praline, preserved citrus.",
    price: "£13",
    image:
      "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?auto=format&fit=crop&w=1200&q=80",
  },
];

export const featureItems = [
  {
    title: "Award-Winning Culinary Team",
    text: "Our kitchen is led by Chef Martino, balancing classic Italian discipline with modern precision.",
  },
  {
    title: "Curated 300+ Bottle Wine Cellar",
    text: "A cellar rooted in Italy's finest regions, with pairings curated by our in-house sommelier.",
  },
  {
    title: "Seasonal Provenance",
    text: "Daily produce sourced from trusted farms and fisheries for exceptional freshness and flavor.",
  },
  {
    title: "Private & Corporate Dining",
    text: "Elegant private rooms for celebrations, discreet business dinners, and bespoke tasting menus.",
  },
];

export const testimonials = [
  {
    name: "Charlotte M.",
    quote:
      "An exceptional evening from start to finish. Every course felt thoughtful and beautifully executed.",
    rating: 5,
  },
  {
    name: "Daniel R.",
    quote:
      "Understated luxury with flawless service. The wine pairing elevated every dish.",
    rating: 5,
  },
  {
    name: "Aisha K.",
    quote:
      "One of London's finest Italian experiences. Elegant room, warm team, unforgettable truffle pasta.",
    rating: 5,
  },
];

export const galleryImages = [
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1473093226795-af9932fe5856?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=80",
];
