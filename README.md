# Saaral Mess — single-page website

A Tamil-first, responsive Next.js website for Saaral Mess, styled with Tailwind CSS v4 utility classes and the provided food artwork.

## Stack
- Next.js App Router
- React
- Tailwind CSS v4
- Noto Sans Tamil + Rajdhani fonts
- Responsive image assets in `public/images`

## Run locally
Requires Node.js 20.9+.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

For a production build:

```bash
npm run build
npm start
```

## Before publishing
1. Open `app/page.tsx`.
2. Replace `REPLACE_WITH_PHONE_1` and `REPLACE_WITH_PHONE_2` in the `contacts` array with the shop's actual phone numbers (digits and optional + country code).
3. In `app/layout.tsx`, replace `https://saaralmess.example` with the real domain to set the canonical metadata base.
4. Review the menu wording and image crops with the shop owner.
5. Deploy to a Next.js-compatible host and connect the real domain.

## SEO included
- Tamil-first title and meta description
- Search keywords for Tenkasi, Courtallam, homestyle food, and non-veg meals
- Open Graph and Twitter preview metadata
- Index/follow robots metadata
- Semantic headings and descriptive image alt text
- Responsive layout and optimized `next/image` usage

The Courtallam / dam / agricultural fields panorama is a generated illustrative regional image, not a documentary photo of a specific landmark.
