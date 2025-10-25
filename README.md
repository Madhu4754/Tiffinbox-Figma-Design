# Tiffinbox - Demo (Vite + React)

This is a small, mobile-responsive React starter project that follows the Tiffinbox Figma-style task:
- Vite + React
- Mobile-first CSS
- CSS-only animations (transitions + keyframes)
- Performance-friendly patterns (lazy images, reduced-motion support)

## How to run locally

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run dev server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   npm run preview
   ```

## What is included
- `src/` with components: `Header`, `Hero`, `Card`, `Footer`
- CSS files in `src/styles/` with animations and card styles
- Simple placeholder SVG images in `public/`
- Basic accessibility and mobile-friendly layout

## Notes & next steps
- Replace placeholder images in `/public` with optimized WebP or real assets.
- Add fonts (preload) and further tuning to match exact Figma spacing/colors.
- Deploy to Vercel/Netlify by connecting your GitHub repo (no extra config required for Vite).

