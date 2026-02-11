# 🎲 Board Game Market

A modern, mobile-friendly static website showcasing board games for sale.

## 🚀 Quick Start

### Development
```bash
npm run dev
```
Visit http://localhost:4321 (or check terminal for actual port)

### Build
```bash
npm run build
```
Static files will be generated in `dist/` directory

### Preview Build
```bash
npm run preview
```

## 📁 Project Structure

```
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── Header.astro
│   │   ├── GameCard.astro
│   │   ├── ImageCarousel.astro
│   │   └── GameGallery.astro
│   ├── layouts/          # Page layouts
│   │   └── Layout.astro
│   ├── pages/            # Routes (file-based routing)
│   │   └── index.astro
│   ├── styles/           # Global styles
│   │   └── global.css
│   └── data/             # Game data
│       ├── games.json
│       └── types.ts
├── public/               # Static assets
│   ├── images/          # 32 game images
│   └── favicon.svg
└── games-data.md        # Original game data source
```

## 📊 Current Inventory

**13 Games Total:**
- 12 regular board games
- 1 extras bundle

All games include:
- High-quality product images
- EUR and CZK pricing
- Mobile-friendly image carousels for multi-image games

## 🎨 Features

- **Responsive Design**: Mobile-first CSS Grid layout adapts from 320px to 4K displays
- **Touch-Friendly**: CSS scroll-snap for smooth image carousels on mobile
- **Fast Loading**: Lazy-loaded images, optimized static build
- **Clean UI**: Card-based design with hover effects
- **No Dependencies**: Pure CSS, minimal JavaScript for carousel indicators

## 🔄 Updating Game Data

1. Edit `games-data.md` with new game information
2. Run `node parse-games.mjs` to regenerate `src/data/games.json`
3. Add new images to `public/images/`
4. Rebuild the site with `npm run build`

## 🌐 Deployment

The `dist/` folder contains a complete static site ready for deployment to:
- Netlify
- Vercel
- GitHub Pages
- Any static hosting service

Simply upload the contents of `dist/` or connect your repository to your hosting provider.

## 🛠️ Tech Stack

- **Astro 5.1**: Static site generator
- **TypeScript**: Type-safe data handling
- **CSS3**: Modern responsive layout with Grid and Flexbox
- **Zero Runtime JS**: Pure HTML/CSS for main content (tiny JS for carousel indicators)

---

Built with Astro and ❤️ by Claude Code
