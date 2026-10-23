# Outlier Visual Skill Engine

> **Portable UI Design Skill Artifact & Visual Systems Engine**  
> Reverse-engineered with infinite depth from `https://outlier.ai/` using Reverse-Engineer-Anything (REA) and Chrome DevTools Protocol (CDP).

---

## 🎨 Architectural Overview

This repository houses the complete visual DNA, spatial mechanics, and structural layout abstractions of the Outlier design system. Designed specifically for consumption by downstream AI agents, design system engineers, and frontend developers to recreate pixel-perfect, content-agnostic presentation layers.

### Visual Systems DNA

| System Layer | Mathematical Rule & Implementation |
| :--- | :--- |
| **Primary Brand Accent** | `#F7803C` (Warm Coral/Orange), hover `#FF8D4D`, active `#EF6000`, deep `#BA561D` |
| **Surface Canvas** | `#FFFFFF` canvas with `#FAFAFA`, `#F7F7F8`, `#F5F5F5`, `#F2F4F7` substrates |
| **Dark Accents** | `#0F0F10`, `#131316`, `#1A1C1E`, `#222222` |
| **Primary Typography** | `Inter, -apple-system, sans-serif` |
| **Monospace / Code** | `Fragment Mono, monospace` (rubrics, step indices, terminal simulator) |
| **Display Scale (H1)** | `54px` (Desktop) / `40px` (Tablet) / `36px` (Mobile), line-height: `1.2`, tracking: `-1.5px` |
| **Section Headings (H2)** | `40px` (Desktop) / `30px` (Tablet) / `24px` (Mobile), line-height: `1.3`, tracking: `-1.0px` |
| **Eyebrow Meta Overline**| `16px` (Desktop) / `14px` (Tablet) / `12px` (Mobile), tracking: `+2.0px`, uppercase, color: `#BA561D` |
| **Container Widths** | `1280px` max page, `1160px` content inner, `1040px` narrow FAQ stack |
| **Section Padding Rhythm** | `100px 60px` (Desktop) / `80px 40px` (Tablet) / `40px 20px` (Mobile) |
| **Radii Hierarchy** | `120px` (Pills/Buttons), `48px` (Stage banner), `36px` (CTA banner), `16px` (Containers), `12px` (Cards) |
| **Motion Physics** | `35s` linear continuous marquee ticker, `200ms cubic-bezier(0.16, 1, 0.3, 1)` spring hover |

---

## 📁 Repository Structure

```tree
outlier-ai-visual-skill-engine/
├── README.md                      # Complete architectural documentation
├── downstream-prompt.md           # Master System Prompt for downstream AI developers
├── design-tokens.json             # Master token dictionary (W3C Design Tokens format)
├── tailwind.config.js             # Production-ready Tailwind CSS configuration
├── index.html                     # Live interactive presentation layer (all blocks assembled)
├── styles/
│   └── tokens.css                 # CSS custom properties, root tokens & resets
└── components/                    # Content-agnostic structural layout skeletons
    ├── NavbarSkeleton.html        # Glass sticky topbar with pill action button
    ├── HeroSkeleton.html          # Centered display typography stack & primary CTA
    ├── MarqueeTickerSkeleton.html # Dual-card infinite horizontal ticker
    ├── WorkbenchSectionSkeleton.html # Segmented pill switcher & pearlescent stage
    ├── FeatureGridSkeleton.html   # 2x2 asymmetric benefit card grid
    ├── CarouselSkeleton.html      # Testimonial sliding carousel & circular controls
    ├── TimelineProcessSkeleton.html # 4-step progressive onboarding timeline
    ├── AccordionSkeleton.html     # Minimalist FAQ collapsible rows
    ├── BottomCTASkeleton.html     # Horizon glow inverted CTA banner
    └── FooterSkeleton.html        # Multi-column substrate footer with legal bar
```

---

## ⚡ Quickstart

### 1. View the Live Interactive Demo
Open `index.html` in any browser or spin up a local server:
```bash
python3 -m http.server 8080
# Open http://localhost:8080
```

### 2. Use with Tailwind CSS
Add `tailwind.config.js` to your Tailwind setup:
```javascript
// tailwind.config.js
module.exports = require('./tailwind.config.js');
```

### 3. Use with Vanilla CSS / Variables
Import `styles/tokens.css` into your stylesheet:
```css
@import './styles/tokens.css';

.my-cta-button {
  background-color: var(--outlier-brand-primary);
  border-radius: var(--outlier-radius-pill);
  padding: 16px 32px;
  color: var(--outlier-text-primary);
  font-weight: 600;
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
}
.my-cta-button:hover {
  background-color: var(--outlier-brand-hover);
  transform: scale(1.02);
}
```

---

## 🤖 Using the Downstream AI Skill Engine

The file [`downstream-prompt.md`](./downstream-prompt.md) contains the complete system prompt to give to an AI agent (e.g. Claude, GPT-4, Gemini) to instruct it to generate brand-new pages adhering strictly to this aesthetic system.

Simply copy the content of `downstream-prompt.md` into your AI's prompt alongside your product requirements.

---

## 📜 License
MIT License. Content-agnostic visual engineering artifact.
