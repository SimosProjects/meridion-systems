// One entry per product. Only entries with `published: true` appear on the site.
//
// status: "in-development" or "coming-soon"
// page:   URL of the product page, or null if the product has no page yet
//
// Content rules: a real one-line summary, no dates that haven't been committed
// to, and no people listed without their consent.

export default [
  {
    slug: "kyntra",
    name: "Kyntra",
    category: "AI workout tracker · iOS and Android",
    tagline: "Point. Lift. Log.",
    summary: "Log sets fast, even offline, and point your camera at a gym machine to find out what it is and what to do on it.",
    status: "in-development",
    statusLabel: "In development",
    statusNote: "Private testing",
    page: "/products/kyntra/",
    published: true,

    // App icon and screenshots. Drop the files into src/assets/img/kyntra/ and fill these in.
    // icon: path to a square PNG (at least 512x512), e.g. "/assets/img/kyntra/icon.png".
    // screenshots: each needs src, alt, width and height (pixel size of the file).
    // Until then the site shows clearly marked placeholder frames.
    icon: null,
    screenshots: [
      // { src: "/assets/img/kyntra/log.png", alt: "Logging a set of bench press, with weight and reps entered", width: 1179, height: 2556 },
    ],
  },
  // Add the next product here when it's ready to show. Leave published: false until then.
  // Only publish a person's name (builtBy) once they have agreed to be listed.
  {
    slug: "product-two",
    name: "Product 2",
    summary: "",
    status: "coming-soon",
    statusLabel: "Coming soon",
    statusNote: "",
    builtBy: "",
    page: null,
    published: false,
  },
  {
    slug: "saas-product",
    name: "SaaS product",
    summary: "",
    status: "coming-soon",
    statusLabel: "Coming soon",
    statusNote: "",
    page: null,
    published: false,
  },
];
