<div align="center">

  <img src="src/logo.svg" width="110" height="110" alt="Small Projects Logo" />

  # Small Projects ✦ Portfolio 🎨

  **A vibrant, interactive, and tactile showcase of web experiments, tools, games, and mini-apps built with a strict Neumorphism (Soft UI) design system.**

  [![Live Demo](https://img.shields.io/badge/Live_Demo-small_projects-10b981?style=for-the-badge&logo=githubpages&logoColor=white)](https://metanef.github.io/small-projects/)
  [![v1.5](https://img.shields.io/badge/VERSION-1.5_STABLE-4f46e5?style=for-the-badge)](#)

  <br />

  [![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](#)
  [![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](#)
  [![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](#)
  [![Neumorphism](https://img.shields.io/badge/Design-Neumorphism_Soft_UI-4f46e5?style=flat-square)](#)
  [![Lenis.js](https://img.shields.io/badge/Lenis.js-Smooth_Scroll-7C5CFC?style=flat-square)](#)
  [![Google Fonts](https://img.shields.io/badge/Google_Fonts-Fredoka_|_Space_Grotesk-4285F4?style=flat-square&logo=googlefonts&logoColor=white)](#)

</div>

---

## 🌐 Live Demo & Overview

Try the application live: **[Small Projects Portfolio](https://metanef.github.io/small-projects/)**

### 🎨 Neumorphic (Soft UI) Web Showcase
- **Zero Heavy Frameworks**: Built strictly with Vanilla HTML5, CSS3, and JavaScript for lightning-fast page loading and maximum performance.
- **Strict Neumorphism Design System**: Tactile dual-shadow extrusion physics (`8px 8px 16px`), inset sunken art viewports, smooth 20px–28px rounded corners, and zero hard outline borders.
- **Composite Background Lighting**: Combined micro-grid dot matrix stacked over a 135° directional light source gradient for high-end visual depth.
- **Responsive 3×3 Grid**: Clean 3-column fixed layout (`max-width: 1320px`) displaying 9 handcrafted mini-projects.
- **Ultra-Smooth Scrolling**: Integrated Lenis.js (`duration: 0.8s`) for fluid wheel interaction.

---

## 📦 Featured Projects (3×3 Showcase)

| # | Project Name | Category | Description |
| :-: | :--- | :-: | :--- |
| ⌚ | **WristCam — Casio WQV-1** | `app` | Retro web emulator reproducing the iconic 2000s Casio WQV-1 Wrist Camera smartwatch. |
| 🐧 | **How I Met A Pingu** | `game` | Whimsical story game following an icy romance on the floe. |
| 🕹️ | **W4SD — Local Coop Hub** | `app` | Shared-keyboard local multiplayer hub for quick couch games with friends. |
| 🎴 | **Sparks & Sync** | `game` | Playful conversation & decision card game for couples to bridge desires. |
| 🇰🇷 | **Annyeong — 15MinToLearnKorean** | `app` | Clean, bite-sized web app to master Hangul and Korean vocabulary in 15 mins a day. |
| 🖼️ | **Frame — Habit Tracker** | `app` | Offline-first personal journaling and daily habit tracking dashboard. |
| 🔒 | **VaultGuard** | `tool` | Analyze password strength, reuse, and security metrics for Bitwarden vaults locally. |
| ♠️ | **Poker Party** | `game` | Fast-paced, browser-based poker room for casual games with friends. |
| 🚀 | **FreeL1fe** | `tool` | Interactive financial independence calculator to project your path to early retirement. |

---

## ✨ Features

- **🧩 Balanced 3×3 Project Grid**: Displays 9 distinct project cards with custom emojis, category tags, and dual-shadow relief.
- **🏷️ Standardized Categories**: Filter projects seamlessly between `all`, `game`, `tool`, and `app` with tactile inset/raised category pills.
- **🔍 Interactive Detail Modal**: Click any project tile to launch a raised neumorphic modal card with an inset preview frame, bottom-right close button, and backdrop blur.
- **📜 Lenis Smooth Scroll**: Silky-smooth scrolling experience across desktop and mobile devices.
- **🎨 Neumorphic Design Tokens**: Custom CSS variables for surface tones (`#e8ecf2`), raised shadows, inset shadows, and high-contrast WCAG typography (`#1e293b`).
- **📱 Fully Responsive**: Fluid grid adaptation across desktop, tablet, and mobile screens.

---

## 🛠️ Tech Stack

| Technology | Usage |
| :--- | :--- |
| **HTML5** | Semantic structure, accessibility markup, and clean layout |
| **CSS3 (Vanilla)** | Neumorphism dual-shadow tokens (`box-shadow`), CSS Grid, Flexbox, custom background gradients |
| **JavaScript (ES6+)** | Dynamic project dataset rendering, category filtering, modal state management |
| **Lenis.js** | Modern smooth scroll engine |
| **Google Fonts** | *Fredoka* (friendly headings), *Space Grotesk* (tech UI tags), *Inter* (body text) |

---

## 📂 Project Structure

```
├── .github/
│   └── workflows/
│       └── static.yml  # GitHub Pages deployment workflow
├── index.html           # Main HTML structure & Lenis initialization
├── list.txt             # Reference list of the 9 featured projects
└── src/
    ├── logo.svg         # SP Monogram SVG logo badge
    ├── style.css        # Complete Neumorphic design system, animations & responsive grid
    └── script.js        # Project dataset, filtering logic & modal handlers
```

---

## 🚀 Running Locally

No build tools or node modules required!

```bash
# 1. Clone the repository
git clone https://github.com/metanef/small-projects.git

# 2. Open index.html directly in your browser or serve locally
npx serve .
```

---

## 🗺️ Roadmap & Progress

### ✅ Completed (v1.5)
- [x] **Neumorphism (Soft UI) Overhaul**: Full UI refactor with dual-shadow tokens (`--shadow-raised` & `--shadow-inset`), soft surface `#e8ecf2`, and removal of hard black borders.
- [x] **Composite Background System**: Micro-grid dot matrix stacked over an enhanced 135° directional light source gradient.
- [x] **Pop-up UI Polish**: Repositioned close button to the bottom-right of the modal card and streamlined action buttons.
- [x] **Solidary Card Icons**: Fixed icon hover scaling so tile art remains solidary with card elevation.
- [x] **Modular Architecture**: Centralized `src/` directory with `logo.svg`, `style.css`, and `script.js`.
- [x] **3×3 Balanced Grid Layout**: Uniform 9-tile responsive grid without irregular sizing (`max-width: 1320px`).
- [x] **Category Taxonomy Normalization**: Standardized categories exclusively to `game`, `tool`, and `app`.
- [x] **Lenis Smooth Scroll**: Integrated `Lenis` (`duration: 0.8s`) for enhanced UX.
- [x] **GitHub Pages CI/CD**: Workflow configured in `.github/workflows/static.yml`.

### 🔄 Next Steps
- [ ] **Remote Project Links**: Replace dummy GitHub URLs (`link`) in `src/script.js` with active repository / live demo links.
- [ ] **Project Screenshots**: Add optional high-resolution previews for modal cards.
