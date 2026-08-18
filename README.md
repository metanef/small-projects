<div align="center">

  <img src="src/logo.svg" width="110" height="110" alt="Small Projects Logo" />

  # Small Projects ✦ Portfolio 🎨

  **A vibrant, interactive, and tactile showcase of web experiments, tools, games, and mini-apps built with a strict Neumorphism (Soft UI) design system.**

  [![Live Demo](https://img.shields.io/badge/Live_Demo-play_online-10b981?style=for-the-badge&logo=githubpages&logoColor=white)](https://metanef.github.io/small-projects/)
  [![v2.5](https://img.shields.io/badge/VERSION-2.5_STABLE-10b981?style=for-the-badge)](#)

  <br />

  [![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](#)
  [![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](#)
  [![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](#)
  [![Remix Icon](https://img.shields.io/badge/Remix_Icon-v4.6.0-4f46e5?style=flat-square)](#)
  [![Neumorphism](https://img.shields.io/badge/Design-Neumorphism_Soft_UI-4f46e5?style=flat-square)](#)
  [![Lenis.js](https://img.shields.io/badge/Lenis.js-Smooth_Scroll-7C5CFC?style=flat-square)](#)
  [![Google Fonts](https://img.shields.io/badge/Google_Fonts-Fredoka_|_Space_Grotesk-4285F4?style=flat-square&logo=googlefonts&logoColor=white)](#)

</div>

---

## 🌐 Live Demo & Overview

Try the application live: **[Small Projects Portfolio](https://metanef.github.io/small-projects/)**

### 🎨 Neumorphic (Soft UI) Web Showcase
- **Zero Heavy Frameworks**: Built strictly with Vanilla HTML5, CSS3, and JavaScript for lightning-fast page loading and maximum performance.
- **Dynamic Favicon Theme Adaptation**: Real-time SVG Data URI favicon accent color switching between Light Indigo (`#4f46e5`) and Dark Neon Teal (`#14b8a6`) upon theme toggle and system preference change.
- **Equalized Top-Bar & D-Shape Switch Micro-Physics**: Perfectly unified `33px` height for `.eyebrow` badge & theme toggle switch, featuring a snappy 0.20s elastic D-shape stretch hover effect with mirrored directional physics for Light and Dark modes.
- **Strict Neumorphism Design System**: Tactile dual-shadow extrusion physics (`8px 8px 16px`), inset sunken art viewports, smooth 10px–12px rounded corners, and zero hard outline borders.
- **Vector Remix Icon System**: Vector icons (`remixicon@4.6.0`) mapped to projects and dynamically rendered in accent theme colors (`var(--accent)`).
- **Project Subtitles (`sub`)**: Structured subtitles under project titles with refined, lightweight neutral typography (`Space Grotesk`, `11.5px`, `400` weight) on tile cards and modal views.
- **Vector SP Logo with Transparent Cutout**: Custom vector monogram (`src/logo.svg`) with an `evenodd` geometric fill rule creating a true transparent cutout in the letter 'P', with automatic theme color inheritance.
- **Composite Background Lighting**: Combined micro-grid dot matrix stacked over an enhanced 135° directional light source gradient for high-end visual depth.
- **Responsive 3×3 Grid**: Clean 3-column fixed layout (`max-width: 1320px`) displaying 9 handcrafted mini-projects.
- **Ultra-Smooth Scrolling**: Integrated Lenis.js (`duration: 0.8s`) for fluid wheel interaction and smooth anchor scrolling.
- **External JSON Dataset**: Asynchronous fetching of `src/projects.json` for decoupled data management.

---

## 📦 Featured Projects (3×3 Showcase)

| Icon | Project Name | Subtitle | Category | Live Demo URL | Description |
| :-: | :--- | :--- | :-: | :--- | :--- |
| `ri-watch-line` | **WristCam** | Casio WQV-1 | `app` | [Demo](https://metanef.github.io/casio-wqv-1/) | Retro web emulator reproducing the iconic 2000s Casio WQV-1 Wrist Camera smartwatch. |
| `ri-heart-line` | **How I Met A Pingu** | Love Story | `game` | [Demo](https://metanef.github.io/pingu/) | Whimsical story game following an icy romance on the floe. |
| `ri-gamepad-line` | **W4SD** | Local Coop Hub | `app` | [Demo](https://metanef.github.io/coop-game/) | Shared-keyboard local multiplayer hub for quick couch games with friends. |
| `ri-sparkling-2-line` | **Sparks & Sync** | Couples Card Game | `game` | [Demo](https://metanef.github.io/mismatched-libido/) | Playful conversation & decision card game for couples to bridge desires. |
| `ri-translate-2` | **Annyeong** | 15MinToLearnKorean | `app` | [Demo](https://metanef.github.io/annyeong-15mintolearnkorean/) | Clean, bite-sized web app to master Hangul and Korean vocabulary in 15 mins a day. |
| `ri-layout-grid-line` | **Frame** | Habit Tracker | `app` | [Demo](https://metanef.github.io/frame/) | Offline-first personal journaling and daily habit tracking dashboard. |
| `ri-shield-keyhole-line` | **VaultGuard** | Vault Audit | `tool` | [Demo](https://metanef.github.io/bitwarden-vault-audit/) | Analyze password strength, reuse, and security metrics for Bitwarden vaults locally. |
| `ri-dice-line` | **Poker Party** | Poker Game | `game` | [Demo](https://metanef.github.io/poker-party/) | Fast-paced, browser-based Texas hold'em for playing with friends. |
| `ri-rocket-line` | **FreeL1fe** | Financial Calc | `tool` | [Demo](https://metanef.github.io/freel1fe/) | Interactive financial independence calculator to project your path to early retirement. |

---

## ✨ Features

- **🧩 Balanced 3×3 Project Grid**: Displays 9 distinct project cards with vector Remix Icons in the bottom-right corner, subtitle text, category tags, and dual-shadow relief.
- **🏷️ Standardized Categories**: Filter projects seamlessly between `all`, `game`, `tool`, and `app` with tactile inset/raised category pills.
- **🔍 Spring-Pop Modal Dialog**: Click any project tile to launch a raised neumorphic modal card featuring smooth cubic-bezier scaling (`transform: scale(0.92)` ➔ `scale(1)`), backdrop blur (`blur(12px)`), and a circular close button.
- **📜 Lenis Smooth Scroll**: Silky-smooth scrolling experience across desktop and mobile devices.
- **🎨 Neumorphic Design Tokens**: Custom CSS variables for surface tones (`#e8ecf2`), raised shadows, inset shadows, and high-contrast WCAG typography (`#1e293b`).
- **📱 Fully Responsive**: Fluid grid adaptation across desktop, tablet, and mobile screens.

---

## 🛠️ Tech Stack

| Technology | Usage |
| :--- | :--- |
| **HTML5** | Semantic structure, accessibility markup (WCAG), SVG favicon, and clean layout |
| **CSS3 (Vanilla)** | Neumorphism dual-shadow tokens (`box-shadow`), CSS Grid, Flexbox, custom background gradients, cubic-bezier modal transitions |
| **JavaScript (ES6+)** | Asynchronous JSON fetching (`fetch`), dynamic project dataset rendering, category filtering, modal state management, dynamic SVG favicon theme switching |
| **Remix Icon** | Modern vector icon set loaded via CDN (`remixicon@4.6.0`) |
| **JSON** | Decoupled project dataset (`src/projects.json`) |
| **Lenis.js** | Modern smooth scroll engine |
| **Google Fonts** | *Fredoka* (friendly headings), *Space Grotesk* (tech UI tags), *Inter* (body text) |

---

## 📂 Project Structure

```
├── .github/
│   └── workflows/
│       └── static.yml  # GitHub Pages deployment workflow
├── index.html           # Main HTML structure, Lenis initialization & SVG favicon
├── list.txt             # Reference list of the 9 featured projects & live links
└── src/
    ├── logo.svg         # Neumorphic SP Monogram SVG logo & favicon (evenodd transparent cutout & theme colors)
    ├── projects.json    # Project dataset (names, subtitles, URLs, categories, descriptions, icons)
    ├── style.css        # Complete Neumorphic design system, animations & responsive grid
    └── script.js        # Dynamic dataset fetching, filtering logic, modal handlers & dynamic favicon switcher
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

### ✅ Completed (v2.5 STABLE)
- [x] **Dynamic Theme Favicon Adaptation (v2.5)**: Implemented `updateFavicon()` JS module generating real-time SVG Data URIs matching active Light Indigo (`#4f46e5`) and Dark Neon Teal (`#14b8a6`) theme accent colors.
- [x] **Equalized Switch & Badge Height (33px) (v2.5)**: Standardized `.eyebrow` badge and dark-mode toggle switch (`.switch`) to an exact physical height of `33px` (`box-sizing: border-box`) and matching `10px` corner radii.
- [x] **D-Shape Switch Hover Micro-Physics (v2.5)**: Added snappy `0.20s` elastic handle stretch (`width: 0.8em`) on switch hover with mirrored directional curvature (`5px 50% 50% 5px` in Light Mode vs `50% 5px 5px 50%` in Dark Mode) and mathematically balanced offset math (`translateX`).
- [x] **Remix Icon Vector System (v2.4)**: Integrated vector icons from Remix Icon CDN (`remixicon@4.6.0`), mapped via `icon` class attributes in `src/projects.json` and styled dynamically with accent theme colors (`var(--accent)`).
- [x] **Project Subtitles (`sub`) (v2.4)**: Added `"sub"` subtitle field in `src/projects.json`, rendered dynamically under card titles in refined neutral typography (`var(--ink-light)`, 11.5px, 400 weight) and modal titles.
- [x] **Vector SVG Logo & Transparent Cutout (v2.3)**: Integrated `fill-rule="evenodd"` in `src/logo.svg` to create a true transparent hole in the letter 'P', auto-adapting accent colors (`var(--accent)`) across Light and Dark mode.
- [x] **Footer Layout Refinement (v2.3)**: Removed redundant footer logo element to streamline bottom-page aesthetic while keeping navigation links clean.
- [x] **Complete Codebase Clean-Up (v2.3)**: Refactored and cleaned `index.html` (formatting), `src/style.css` (dead selector cleanup), and `src/script.js` (standardized `addEventListener` logic & HTTP guards).
- [x] **Dark Neumorphism System (v2.2)**: Integrated Dark Mode charcoal surface palette (`#1a1d24`) with Neon Teal (`#14b8a6`) accents, UIverse (`odd-rat-8`) pill switch with Sun (☀️) and Moon (🌙) SVG icons, contextual icon hiding, pure linear sliding physics, synchronized 0.5s ease-out global transitions, and `localStorage` persistence.
- [x] **Architectural Corner Radii**: Refined global design tokens to sleek values (`--radius-card: 12px`, `--radius-btn: 10px`, `--radius-inner: 8px`) for a modern tech aesthetic.
- [x] **Tokenized Hover Shadow Fix**: Refactored button, pill filter, close icon, and footer link hover shadows with dark-mode aware tokens (`--shadow-raised-sm-hover`) to prevent bright halo artifacts in Dark Mode.
- [x] **Externalized JSON Dataset**: Extracted project entries into `src/projects.json` for asynchronous `fetch()` loading.
- [x] **Smooth Elastic Modal Pop**: Implemented cubic-bezier spring scaling and 12px backdrop blur transition for modal opening & closing.
- [x] **Synchronized Hover Physics**: Fixed tile hover transforms so card elements elevate in total visual sync with the card.
- [x] **Live Project Link Mapping**: Integrated active GitHub Pages demo URLs for all 9 projects.
- [x] **Lenis Smooth Scroll**: Integrated `Lenis` (`duration: 0.8s`) for enhanced wheel and anchor navigation.

### 🔄 Future Ideas (v2.6+)
- [ ] **Project Screenshots**: Add optional high-resolution previews for modal cards and card headers.
- [ ] **Locked / WIP Tile State**: Ability to lock tiles undergoing updates or work-in-progress (`locked` status in `projects.json`), greying out the card, disabling interactions, and displaying a centered lock icon (`ri-lock-line`) overlay.