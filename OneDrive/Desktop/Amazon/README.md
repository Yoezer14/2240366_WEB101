# Amazon-style Storefront (React + Vite)

Single-page “Amazon-like” storefront UI built for a WEB101 practical assignment using React component architecture.

## Functionality

- Header with search input and demo cart counter
- Product grid of reusable cards driven by a local data source
- Instant filtering by product title / brand / category
- Responsive layout for desktop, tablet, and mobile

## Tech stack

- React (Vite)
- Plain CSS (component-level styles)

## How to run

```bash
npm install
npm run dev
```

## Component structure (high-level)

```text
App
 ├─ Header
 │   └─ SearchBar
 ├─ ProductGrid
 │   └─ ProductCard
 │       └─ Rating
 └─ Footer
```

## Data source

Reusable components are driven by local sample data:

- `src/data/products.js`

Each product contains:

- `id`, `title`, `brand`, `category`, `price`, `rating`, `ratingCount`, `isPrime`, `imageUrl`

## Responsive design

- Desktop: 4-column product grid
- Tablet: 3 → 2 columns
- Mobile: 1 column with stacked header layout

## Notes / academic integrity

- This is a **demo UI recreation** (no real Amazon services).
- Product images are placeholders



