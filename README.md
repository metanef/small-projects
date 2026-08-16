<div align="center">

  <img src="src/logo.svg" width="110" height="110" alt="Portfolio Logo" />

  # Small Projects ✦ Portfolio 🎨

  **A vibrant, interactive, and minimalist showcase of web experiments, tools, games, and mini-apps.**

  [![Live Demo](https://img.shields.io/badge/Live_Demo-small_projects-10b981?style=for-the-badge&logo=githubpages&logoColor=white)](https://metanef.github.io/small-projects/)
  [![v1.0](https://img.shields.io/badge/VERSION-1.0_STABLE-c65cfc?style=for-the-badge)](#)

  <br />

  [![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](#)
  [![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](#)
  [![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](#)
  [![Google Fonts](https://img.shields.io/badge/Google_Fonts-Fredoka_|_Space_Grotesk-4285F4?style=flat-square&logo=googlefonts&logoColor=white)](#)

</div>

---

## 🌐 Live Demo & Overview

Try the application live: **[Small Projects Portfolio](https://metanef.github.io/small-projects/)**

### 🎨 Playful & Lightweight Web Showcase
- **Zero Heavy Frameworks**: Built strictly with Vanilla HTML5, CSS3, and JavaScript for lightning-fast page loading and maximum performance.
- **Interactive Neubrutalism Aesthetics**: Crisp outlines, vibrant pastel color palettes, floating background ambient shapes, and tactile hover animations.
- **Responsive 3×3 Grid**: Clean 3-column layout displaying 9 handcrafted mini-projects.

---

## ✨ Features

- **🧩 Balanced 3×3 Project Grid**: Displays 9 distinct project cards with custom emojis, category tags, and color themes.
- **🏷️ Instant Category Filtering**: Filter projects seamlessly between `all`, `game`, `tool`, and `app` categories with active pill indicators.
- **🔍 Interactive Detail Modal**: Click any project tile to launch an overlay modal displaying full project descriptions, external links, and interactive close controls (button, backdrop click, `Escape` key).
- **🎨 Modern Design Tokens**: Custom CSS variables for paper tones, ink typography, vibrant accent colors, and custom selection styling.
- **📱 Fully Responsive**: Fluid grid adaptation across desktop, tablet (2 columns), and mobile screens (1 column).

---

## 🛠️ Tech Stack

| Technology | Usage |
| :--- | :--- |
| **HTML5** | Semantic structure, accessibility markup, and clean layout |
| **CSS3 (Vanilla)** | CSS Grid, Flexbox, CSS Custom Properties (`:root`), glassmorphism, floating keyframe animations |
| **JavaScript (ES6+)** | Dynamic project array rendering, category filtering, modal state management, event listeners |
| **Google Fonts** | *Fredoka* (friendly headings), *Space Grotesk* (tech UI tags), *Inter* (body text) |

---

## 📂 Project Structure

```
├── index.html       # Main HTML structure & entry point
└── src/
    ├── logo.svg     # SVG logo badge
    ├── style.css    # Complete design system, animations & responsive grid
    └── script.js    # Project dataset, filtering logic & modal handlers
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

## 🗺️ Roadmap & TODO

### ✅ Done

#### 🚀 Major Updates
- [x] **Modular Architecture**: Separated monolithic HTML into dedicated `index.html`, `style.css`, and `script.js` files.
- [x] **English i18n Translation**: Translated all UI text, header titles, footers, category labels, and project descriptions to English.
- [x] **3×3 Balanced Grid Layout**: Configured a 3-column equal-width layout housing 9 distinct projects.
- [x] **Category Taxonomy**: Standardized filtering tags to `all`, `game`, `tool`, and `app`.

#### 🛠️ Minor Updates & Polish
- [x] **Refined Grid Dimensions**: Adjusted cell aspect ratios and max-width (`1320px`) for a wider, sleeker visual layout.
- [x] **Tactile Micro-interactions**: Smooth hover rotations, tactile drop shadows, and glassmorphism modal backdrops.

### 🔄 Planned
- [ ] **Dark Mode Toggle**: Optional dark theme color palette switch.
- [ ] **Live Search**: Instant keyword search bar across project titles and descriptions.
- [ ] **Project Preview Screenshots**: High-resolution screenshot overlays inside modal cards.
