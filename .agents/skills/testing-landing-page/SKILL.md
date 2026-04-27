# Testing: Cyber Shop Landing Page

## Stack
- React 19 + Vite 8 + Tailwind CSS v4
- framer-motion for animations
- lucide-react for icons
- Static frontend (no backend, no auth)

## Dev Server
```bash
cd ~/repos/cyber-shop-landing
npm run dev -- --host 0.0.0.0 --port 5173
```
Page loads at `http://localhost:5173`.

## Build
```bash
npm run build
```
Output goes to `dist/`. Bundle includes CSS (~34KB) and JS (~337KB) plus image assets.

## Key Gotcha: Tailwind CSS v4 Dev Server Caching
If styles don't appear (page renders unstyled — white background, black text, Times New Roman font), **restart the dev server**. The `@tailwindcss/vite` plugin might not process `@apply`, `@theme`, and `@layer` directives correctly on stale sessions. After restart, verify:
- Body background should be `rgb(0, 0, 0)` (black)
- Body text should be `rgb(255, 255, 255)` (white)
- Body font should be `Inter, sans-serif`

You can verify programmatically:
```bash
cd /tmp && npm install playwright 2>/dev/null
node -e "
const pw = require('playwright');
(async () => {
  const browser = await pw.chromium.connectOverCDP('http://localhost:29229');
  const page = browser.contexts()[0].pages()[0];
  await page.goto('http://localhost:5173', { waitUntil: 'networkidle' });
  const bg = await page.evaluate(() => getComputedStyle(document.body).backgroundColor);
  console.log('Body bg:', bg); // Should be rgb(0, 0, 0)
  await browser.close();
})();
"
```

## Page Structure (Single Page — Scroll Down)
1. **Navbar** (fixed top) — "dex" logo, 4 nav links, "Solicitar Demo" CTA
2. **Hero** — Neon lock icon, heading, badge, dual CTAs, scroll indicator
3. **FeaturesGrid** — 4 feature cards with neon icons
4. **ComoFunciona** — Split layout with checklist, neon line, step cards
5. **Testimonios** — 3 testimonial cards with photos
6. **CtaFinalFooter** — Contact form, neon lock, footer bar

## Testing Approach
- Open `localhost:5173` in browser, scroll through all 6 sections
- Verify each section renders with correct content, dark mode styling, neon effects
- Test hover effects on buttons (should turn purple) and card icons (should fill)
- Test form inputs accept text and show focus ring
- Check browser console for errors — should be zero
- Check all 5 image assets load (image_0.png, image_1.png, image_2.jpg, image_3.jpg, image_4.jpg)

## Known Issues
- Scroll indicator animation in Hero might be static if `--animate-scroll-line` is not in `@theme` block
- `@font-face` blocks in `index.css` point to Google Fonts CSS URLs instead of font files — fonts actually load via `<link>` tags in `index.html`

## Devin Secrets Needed
None — this is a static frontend with no auth or API keys.
