---
name: outlier-visual-skill-engine
description: Complete visual systems design engine and structural UI skill artifact reverse-engineered from Outlier (outlier.ai). Use when designing, building, or refactoring web pages, components, landing pages, or product interfaces to strictly follow the Outlier aesthetic DNA across desktop and mobile, including the warm coral brand accent (#F7803C), pearlescent multi-stop gradients, pill-shaped action buttons (120px radius), fluid container banners (24px mobile / 48px desktop), mobile-stacked tab tracks, and continuous marquee ticker mechanics.
---

# Outlier Visual Skill Engine

This skill formalizes the **Outlier Visual Systems Architecture** extracted with infinite depth from `https://outlier.ai/` via Chrome DevTools Protocol and Reverse-Engineer-Anything (REA).

It equips agents and developers with the exact mathematical typography matrix, color and state tokens, container bounding rules, radii hierarchies, and structural layout skeletons needed to build or restyle any interface into the Outlier aesthetic across **both desktop and mobile viewports**.

---

## 1. Prime Directive: Spatial & Aesthetic Precision

When applying this skill to design or generate a user interface:
1. **Never Compromise Spatial Bounds:**
   - Global Container: `1280px` max-width.
   - Content Inner: `1160px` max-width.
   - Narrow Stack (FAQ / Forms): `1040px` max-width.
   - Section Padding: `100px 60px` (Desktop) / `80px 40px` (Tablet) / `56px 16px` (Mobile).
   - Section Stack Gap: `48px` (Desktop) / `36px` (Tablet) / `24px` (Mobile).
2. **Strict Fluid Radii Hierarchy:**
   - `120px` (or `9999px`): All primary CTA buttons, active tab pills, pill tags.
   - Large Containers: `48px` on desktop, `32px` on tablet, and **`24px` on mobile** (protects internal padding).
   - Sub-Banners (Bottom CTA): `36px` on desktop, `28px` on tablet, and **`20px` on mobile**.
   - Cards & Simulator Shells: `16px` on desktop, `14px` on mobile.
   - Feature & Benefit Cards: `12px` (desktop) / `16px rounded-2xl` (mobile).
   - Sub-badges & window controls: `6px` – `8px`.
3. **High-Contrast Typography Matrix:**
   - Headings must always be pure high-contrast (`#000000`). Never use washed-out grays for primary titles.
   - Display H1: `54px` (desktop) / `40px` (tablet) / **`32px–36px`** (mobile), line-height `1.18`, tracking `-1.0px` to `-1.5px`, weight `600`.
   - Section H2: `40px` (desktop) / `30px` (tablet) / **`24px`** (mobile), line-height `1.25`, tracking `-0.6px` to `-1.0px`, weight `600`.
   - Eyebrow Overlines: `14px` (desktop) / **`10px–11px`** (mobile), uppercase, tracking `+1.5px` to `+2.0px`, weight `600`, color `#BA561D`.
   - Code & Numerical Markers: `Fragment Mono` (monospace).

---

## 2. Color & Surface Architecture

### 2.1 Core Palette
- **Brand Primary:** `#F7803C` (`rgb(247, 128, 60)`) — signature warm coral/orange.
- **Brand Hover:** `#FF8D4D` (lighter on pointer hover).
- **Brand Active:** `#EF6000` (pressed state).
- **Brand Deep / Eyebrow Text:** `#BA561D` (high-contrast overline labels).
- **Brand Link Default:** `#CF6325`.
- **Surface Canvas:** `#FFFFFF` with `#FAFAFA` and `#F7F7F8` alternating substrates.
- **Surface Dark:** `#0F0F10`, `#131316`, `#1A1C1E`, `#222222`.
- **Borders:** `#CFD1D5` (light container border), `#DDDDDD` (dividers/controls), `rgba(0, 0, 0, 0.08)` (hairline).

### 2.2 Domain Categorical Badges (5 Pastel Pairs)
- **Electric Purple:** Base `#7A72F1`, Dark `#312B83`, Light `#B3AEF7`, Background `#F3F3FF`, Border `#E5E6FF`
- **Lime Green:** Base `#DAFF85`, Dark `#0A7A22`, Light `#DFFF7B`, Background `#F9FFE7`, Border `#D5F5A3`
- **Cyan Blue:** Base `#6BD4EB`, Dark `#1970C2`, Light `#D4F1F8`, Background `#F4F9FF`, Border `#C9DFFF`
- **Amber Yellow:** Base `#FABB00`, Dark `#7C7000`, Light `#FFE094`, Background `#FFF9EA`, Border `#FCE5B2`
- **Rose Peach:** Base `#F7C7C8`, Dark `#A30F0F`, Light `#FFE2D7`, Background `#FFF9F7`, Border `#FFD9D9`

### 2.3 Mathematical Gradients
- **Hero Fade:** `linear-gradient(180deg, #FBFBFB 0%, rgba(217, 217, 217, 0) 100%)`
- **Workbench Pearlescent Stage:** `linear-gradient(270deg, #F0FCFF 0%, #FFFFFF 50%, #FCEBE1 105%)`
- **Feature Card Depth:** `linear-gradient(180deg, #FFFFFF 0%, #EEEEEE 100%)`
- **Timeline Glow Card:** `linear-gradient(270deg, #FFE2D7 0%, rgba(141, 228, 255, 0.36) 100%)`
- **Bottom Horizon CTA:** `linear-gradient(90deg, rgba(199, 243, 255, 0.38) 25%, #F7C7C8 100%)`
- **Stat Metric Cards:**
  - Cobalt: `linear-gradient(225deg, rgba(25, 112, 194, 0.1) 0%, #1970C2 100%)`
  - Crimson: `linear-gradient(202deg, rgba(163, 15, 15, 0.1) 0%, #A30F0F 100%)`
  - Emerald: `linear-gradient(202deg, rgba(17, 143, 44, 0.1) 0%, #0A7A22 94%)`
  - Graphite: `linear-gradient(202deg, rgba(34, 34, 34, 0.1) 0%, #222222 94%)`

---

## 3. Structural Component Archetypes & Mobile Rules

### 1. Floating Navigation Header
- Height `76px` (Desktop) / **`68px`** (Mobile), sticky `top-0`, `z-50`, `bg-white/95 backdrop-blur-md`.
- Right action pill button: `h-10 px-6 rounded-pill` (Desktop) / **`h-9 px-4 rounded-pill text-xs`** (Mobile).
- **Mobile Menu Drawer:** Full-width slide-down menu in solid white (`bg-white shadow-2xl z-50`) triggered by hamburger toggle.

### 2. Hero Center Stack
- Heading centered with negative tracking `-1.5px` (Desktop) / `-0.8px` (Mobile), line-height `1.18`.
- Primary CTA button: `padding: 20px 54px` (Desktop) / **`padding: 14px 32px w-full max-w-xs`** (Mobile), `border-radius: 120px`, `background: #F7803C`, `box-shadow: 0 0 24px rgba(247, 128, 60, 0.25)`.

### 3. Continuous Marquee Ticker
- Flex row with `35s` linear infinite translation, pause on hover.
- **Desktop Dimensions:** Card width `209px`, track height `400px` (profile card: `296px`, stat card: `127px`).
- **Mobile Dimensions:** Card width **`155px`**, track height **`270px`** (profile card: `195px`, stat card: `85px` with `20px` stat font).

### 4. Interactive Tabbed Workbench
- **Segmented Control:**
  - Desktop: Horizontal track `height: 96px`, `border-radius: 120px`, `bg: #F5F5F5`.
  - Mobile: **Vertical stacked pill buttons** (`p-2 rounded-2xl bg-[#F5F5F5] gap-2`), active pill `py-2.5 px-3 rounded-xl bg-white shadow-subtle`.
- **Stage Container:** `border-radius: 48px` (Desktop) / **`border-radius: 24px`** (Mobile), `padding: 60px` (Desktop) / **`padding: 20px`** (Mobile).
- **Code Editor Simulation:** `overflow-x-auto whitespace-pre font-mono text-xs md:text-[13px]` in `Fragment Mono`.

### 5. 2x2 Asymmetric Feature Grid
- 2 columns on desktop (`gap: 24px`), 1 column on mobile (`gap: 16px`).
- Cards: `420px height` (Desktop) / **`min-h-[300px]`** (Mobile), illustration slot `h-[140px]` (Mobile) vs `220px` (Desktop).

### 6. Testimonials Carousel
- Desktop: `340px x 604px` cards.
- Mobile: **`w-[82vw] max-w-[340px]`** cards with `snap-x snap-mandatory` touch scrolling and `h-[220px]` photo viewport.
- Circular navigation buttons (`52px x 52px`) with smooth JavaScript horizontal scroll.

### 7. 4-Step Progressive Timeline
- Left: 4 numbered step items (`01`, `02`, `03`, `04` in `Fragment Mono 24px bold`). Active item has `4px` left border in `#F7803C`.
- Right: Glowing preview card (`h-auto min-h-[380px] md:h-[451px]`, `border-radius: 16px md:rounded-container`).

### 8. FAQ Minimal Accordion
- Centered container `max-width: 1040px`.
- Rows separated by `1px solid #DDDDDD`, `padding: 20px sm:28px 0px`.

### 9. Horizon Glow Bottom CTA Banner
- `1160px` max-width, `border-radius: 36px` (Desktop) / **`border-radius: 24px`** (Mobile), `padding: 80px` (Desktop) / **`padding: 40px 20px`** (Mobile).
- Horizon gradient: `linear-gradient(90deg, rgba(199, 243, 255, 0.38) 25%, #F7C7C8 100%)`.
- Inverted black pill button (`bg: #000000`, `color: #FFFFFF`, `border-radius: 120px`, `w-full sm:w-auto max-w-xs`).

### 10. Multi-Column Substrate Footer
- Desktop: 5-column layout.
- Mobile: **2-column grid (`grid-cols-2 md:grid-cols-5`)** with brand description spanning 2 columns.

---

## 4. Reference Files
- Master Design Tokens: `design-tokens.json`
- Tailwind Config: `tailwind.config.js`
- Custom Properties CSS: `styles/tokens.css`
- Downstream AI Prompt: `downstream-prompt.md`
- Layout Skeletons: `components/*.html`
