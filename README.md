This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

## Corkboard item specs

### Pinned projects (05 total)

| # | Shape | Project | URL |
|---|-------|---------|-----|
| 1 | Polaroid | Locate an Image | locateanimage.rinmeyers.com |
| 2 | Circle sticker | Wanderlist | wanderlist.rinmeyers.com |
| 3 | Dark rounded card | Wordual | wordual.rinmeyers.com |
| 4 | Playing card | Team Poker | teampoker.rinmeyers.com |
| 5 | Starburst sticker | Kitty Cafe | kittycafe.rinmeyers.com |

### Kitty Cafe starburst spec

- **Shape:** 12-pointed starburst badge
- **Color:** `linear-gradient(135deg, #ff79c6, #e91e8c)`
- **Size:** 182 × 182 px (outer burst); inner colored burst is `inset: 8`
- **Colors:** gradient `#ffe0ec → #ff9ec4`; ink `#5a1f3e`
- **Label top:** `★ new ★` — IBM Plex Mono, 9px, tracked 0.2em, uppercase, 0.7 opacity
- **Emoji:** 🐱 at 40px
- **Title:** `Kitty Cafe` — DM Serif Display, 20px, lh 0.95
- **Subtitle:** `roguelite diner dash` — Caveat, 14px, 0.85 opacity
- **Pin:** red at top:2, left:46%
- **Rotation:** −5deg (inline transform, not --rot)
- **Accent note:** `← just shipped!` — Caveat 16px, `#fff8e4`, rotated −6°, positioned right of sticker
- **Layers:** white outer div (`background:#fff, clipPath:BURST_POLY, drop-shadow`) + colored inner div (`inset:8, clipPath:BURST_POLY`)

**`BURST_POLY` — 16-point starburst, outer R=50%, inner r=38%, step 22.5°:**

```css
clip-path: polygon(
  50% 0%,  57% 13%, 69% 4%,  71% 18%,
  85% 15%, 82% 29%, 96% 31%, 87% 43%,
  100% 50%,87% 57%, 96% 69%, 82% 71%,
  85% 85%, 71% 82%, 69% 96%, 57% 87%,
  50% 100%,43% 87%, 31% 96%, 29% 82%,
  15% 85%, 18% 71%, 4% 69%,  13% 57%,
  0% 50%,  13% 43%, 4% 31%,  18% 29%,
  15% 15%, 29% 18%, 31% 4%,  43% 13%
);
```

### Cork surface

- **Height:** 1060px (extended from 920px to accommodate item 5)
- **Email tag:** repositioned to `top: 890`
- **Doodled arrow:** repositioned to `top: 840`
