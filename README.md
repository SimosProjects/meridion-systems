# meridion-systems.com

Marketing site for Meridion Systems, built with [Eleventy](https://www.11ty.dev/) and deployed to GitHub Pages.

## Run locally

```
npm install
npm start        # dev server at http://localhost:8080
npm run build    # output in _site/
```

## Where things live

| What | Where |
| --- | --- |
| Site name, email, nav, founder | `src/_data/site.js` |
| Product list and status | `src/_data/products.js` |
| Page layout (header, footer, meta tags) | `src/_includes/layouts/base.njk` |
| Studio styles (navy and indigo theme) | `src/assets/css/site.css` |
| Kyntra page and styles | `src/products/kyntra/index.njk`, `src/assets/css/kyntra.css` |
| Redirects from old URLs | `src/redirects.njk` |

## Adding a product

1. Fill in its entry in `src/_data/products.js` with a real one-line summary and set `published: true`.
2. The card on Home and Products is drawn by `src/_includes/product-list.njk` and is currently built around Kyntra's phone frames; adapt it for the next product.
3. For a product page, add `src/products/<slug>/index.njk`. To give it its own branding, set `theme: <slug>` in the front matter and add `src/assets/css/<slug>.css`, then load that file in `base.njk` the same way Kyntra's is loaded.

## Kyntra icon and screenshots

Put the files in `src/assets/img/kyntra/`, then set `icon` and `screenshots` on the Kyntra entry in `src/_data/products.js`. Until they exist, the site shows clearly marked placeholder frames. The first two screenshots appear in the phone frames on Home, Products and the Kyntra page; with three or more, a gallery section appears too.

## Content rules

- No invented clients, testimonials, metrics, awards or team members.
- People appear only with their consent and real roles.
- Use "In development" or "Coming soon" rather than dates.
- No email capture or forms without a privacy policy.

## Deploying

`.github/workflows/deploy.yml` builds the site on every push to `main` and publishes `_site/`. In the repo settings, under Pages, set **Source** to **GitHub Actions**.
