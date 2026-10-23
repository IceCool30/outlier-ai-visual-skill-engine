---
name: outlier-visual-skill-engine
description: Complete visual systems design engine and structural UI skill artifact reverse-engineered from Outlier (outlier.ai). Use when designing, building, or refactoring web pages, components, landing pages, or product interfaces to strictly follow the Outlier aesthetic DNA, including the warm coral brand accent (#F7803C), pearlescent multi-stop gradients, pill-shaped action buttons (120px radius), 48px/36px container banners, segmented tab tracks, and continuous marquee ticker mechanics.
---

# Outlier Visual Skill Engine

This skill formalizes the **Outlier Visual Systems Architecture** extracted with infinite depth from `https://outlier.ai/` via Chrome DevTools Protocol and Reverse-Engineer-Anything (REA).

It equips agents and developers with the exact mathematical typography matrix, color and state tokens, container bounding rules, radii hierarchies, and structural layout skeletons needed to build or restyle any interface into the Outlier aesthetic.

---

## 1. Prime Directive: Spatial & Aesthetic Precision

When applying this skill to design or generate a user interface:
1. **Never Compromise Spatial Bounds:**
   - Global Container: `1280px` max-width.
   - Content Inner: `1160px` max-width.
   - Narrow Stack (FAQ / Forms): `1040px` max-width.
   - Section Padding: `100px 60px` (Desktop) / `80px 40px` (Tablet) / `40px 20px` (Mobile).
   - Section Stack Gap: `48px` (Desktop) / `36px` (Tablet) / `24px` (Mobile).
2. **Strict Radii Hierarchy:**
   - `120px` (or `9999px`): All primary CTA buttons, segmented control tracks, active tab pills, pill tags.
   - `48px`: Large interactive stage containers (e.g. Workbench).
   - `36px`: Horizon bottom CTA banners.
   - `16px`: Code simulators, preview mockups, timeline cards.
   - `12px`: Feature benefit cards, profile ticker cards, stat metric cards, testimonial cards.
   - `6px` - `8px`: Sub-badges, inline tags, window controls.
3. **High-Contrast Typography:**
   - Headings must always be pure high-contrast (`#000000`). Never use washed-out grays for primary titles.
   - Display H1: `54px` desktop / `40px` tablet / `36px` mobile, line-height `1.2`, tracking `-1.5px`, weight `600`.
   - Section H2: `40px` desktop / `30px` tablet / `24px` mobile, line-height `1.3`, tracking `-1.0px`, weight `600`.
   - Eyebrow Overlines: `16px` desktop / `14px` tablet / `12px` mobile, uppercase, tracking `+2.0px`, weight `600`, color `#BA561D`.
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

## 3. Structural Component Archetypes

### 1. Floating Navigation Header
- Height `79px`, sticky `top-0`, `z-index: 50`, `bg-white/90 backdrop-blur-md`.
- Right action pill button: `padding: 10px 24px`, `border-radius: 120px`, `background: #F7803C`, `font-weight: 600`.

### 2. Hero Center Stack
- Heading centered with negative tracking `-1.5px`, line-height `1.2`.
- Primary CTA button: `padding: 20px 54px`, `border-radius: 120px`, `background: #F7803C`, `box-shadow: 0 0 24px rgba(247, 128, 60, 0.25)`.

### 3. Continuous Marquee Ticker
- Flex row with `35s` linear infinite translation, pause on hover.
- Alternates `209px x 296px` media profile cards and `209px x 127px` saturated metric stat cards.

### 4. Interactive Tabbed Workbench
- Segmented control track: `height: 96px`, `padding: 16px`, `border-radius: 120px`, `bg: #F5F5F5`.
- Active tab pill: `border-radius: 120px`, `bg: #FFFFFF`, `height: 64px`, `color: #000000`, `box-shadow: 0 2px 4px rgba(0,0,0,0.05)`.
- Stage container: `border-radius: 48px`, `padding: 60px`, `background: linear-gradient(270deg, #F0FCFF 0%, #FFFFFF 50%, #FCEBE1 105%)`.
- Split 2-column: Left metadata, Right code editor simulation (`Fragment Mono`).

### 5. 2x2 Asymmetric Feature Grid
- 2 columns on desktop (`gap: 24px`), 1 column on mobile (`gap: 16px`).
- Cards `568px x 420px`, `border-radius: 12px`, `padding: 40px`, `background: linear-gradient(180deg, #FFFFFF 0%, #EEEEEE 100%)`.

### 6. Testimonials Carousel
- `340px x 604px` cards with top video/photo viewport, italic quote typography (`20px`, `line-height: 2.0`, `color: #1A1C1E`).
- Circular navigation buttons (`54px x 54px`, `border-radius: 40px`, `bg: #DDDDDD`).

### 7. 4-Step Progressive Timeline
- Left: 4 numbered step items (`01`, `02`, `03`, `04` in `Fragment Mono 24px bold`). Active item has `4px` left border in `#F7803C`.
- Right: Glowing preview card (`564px x 451px`, `border-radius: 16px`, `background: linear-gradient(270deg, #FFE2D7 0%, rgba(141, 228, 255, 0.36) 100%)`).

### 8. FAQ Minimal Accordion
- Centered container `max-width: 1040px`.
- Rows separated by `1px solid #DDDDDD`, `padding: 28px 0px`.
- 14x9px chevron rotation on open.

### 9. Horizon Glow Bottom CTA Banner
- `1160px` max-width, `356px` height, `border-radius: 36px`.
- Horizon gradient: `linear-gradient(90deg, rgba(199, 243, 255, 0.38) 25%, #F7C7C8 100%)`.
- Inverted high-contrast black pill button (`bg: #000000`, `color: #FFFFFF`, `border-radius: 120px`, `padding: 16px 36px`).

---

## 4. Reference Files
- Master Design Tokens: `design-tokens.json`
- Tailwind Config: `tailwind.config.js`
- Custom Properties CSS: `styles/tokens.css`
- Downstream AI Prompt: `downstream-prompt.md`
- Layout Skeletons: `components/*.html`
