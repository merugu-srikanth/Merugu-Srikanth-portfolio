# Merugu Srikanth — "Talking-Video" Personal Portfolio

A production-ready, high-performance personal portfolio website built with **Next.js 15 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS**, and **Lenis** smooth scrolling.

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build
```bash
npm run build
npm run start
```

---

## 🎨 Design System & Palette

- `--paper`: `#f4f2ee` (Warm off-white background)
- `--card`: `#ffffff` (Pure white cards)
- `--ink`: `#0d0d0d` (Primary text, buttons, active states)
- `--mute`: `#77756f` (Secondary text, subtitles)
- `--line`: `rgba(13, 13, 13, 0.1)` (Hairline borders)
- `--ease`: `cubic-bezier(0.16, 1, 0.3, 1)`

---

## 📐 Portfolio Sections Structure

| # | Section | Description | Key Features |
|---|---|---|---|
| **00** | **Hero** | Talking 3D Character Intro | Seamless looping video, sound unlock, mix-blend background, ghost name watermark |
| **01** | **About** | Hanging Lanyard 3D ID Card | Spring damping pendulum sway, 3D card flip on hover/tap/keyboard, verbatim resume bio |
| **02** | **Skills** | Periodic Table of Stack | 28 elements with atomic numbers, family filters, sticky inspector panel with brand SVGs |
| **03** | **Work** | Expanding Accordion Gallery | 3 flagship platforms (CareerMitra, FP&A Insights, CoderZap), pure CSS illustrative wireframes |
| **04** | **Experience** | Continuous Career Journey | Animated drawing timeline spine, chronological education + jobs, lighting up stops |
| **05** | **Achievements** | Pinned Horizontal Gallery | EaseOutQuart count-up numbers, production metrics, centered card depth lift |
| **06** | **Contact & Footer** | Direct Inquiries & Footer | Letter-hop typography, one-click copy email chip, spinning badge, resume download |

---

## 📁 Source Code & Content Mapping

All content is strictly bound to `Merugu_Srikanth_Full_Stack_Developer_Resume.pdf`:
- `src/lib/data.ts`: Centralized typed data source (`PROFILE`, `NAV_ITEMS`, `SKILLS_DATA`, `PROJECTS_DATA`, `EXPERIENCE_DATA`, `ACHIEVEMENTS_DATA`).
- `src/components/hero/Hero.tsx`: Video playback, muted autoplay fallback, user audio unlock, viewport scroll pause.
- `src/components/sections/`: Modular section components.
- `src/lib/scroll.tsx`: Lenis smooth scroll engine.
- `public/resume.pdf`: Downloadable resume.
