/* =========================================================
   PROJECT DATA — REPLACE WITH YOUR ACTUAL PROJECTS
   Each object : 
   - name        : project title
   - link        : URL (e.g., GitHub Pages)
   - image       : image URL (optional — leave "" for generated visual)
   - emoji       : emoji used if no image
   - category    : category for filter
   - description : short description
   - color       : tile background color (one of the tokens below)
   - size        : "" | "wide" | "tall" | "big"  → tile dimensions
   ========================================================= */
const COLORS = {
  coral: "#FF6452",
  teal: "#17B8A6",
  violet: "#7C5CFC",
  sunflower: "#FFC53D",
  mist: "#F4F2FB"
};

const projects = [
  {
    name: "WristCam — Casio WQV-1",
    link: "https://github.com/",
    image: "",
    emoji: "⌚",
    category: "app",
    description: "A retro web emulator reproducing the iconic 2000s Casio WQV-1 Wrist Camera smartwatch.",
    color: "sunflower",
    size: ""
  },
  {
    name: "How I Met A Pingu",
    link: "https://github.com/",
    image: "",
    emoji: "🐧",
    category: "game",
    description: "A whimsical story game following an icy romance on the floe.",
    color: "teal",
    size: ""
  },
  {
    name: "W4SD — Local Coop Hub",
    link: "https://github.com/",
    image: "",
    emoji: "🕹️",
    category: "app",
    description: "A shared-keyboard local multiplayer hub for quick couch games with friends.",
    color: "violet",
    size: ""
  },
  {
    name: "Sparks & Sync",
    link: "https://github.com/",
    image: "",
    emoji: "🎴",
    category: "game",
    description: "A playful conversation & decision card game for couples to bridge desires.",
    color: "coral",
    size: ""
  },
  {
    name: "Annyeong — 15MinToLearnKorean",
    link: "https://github.com/",
    image: "",
    emoji: "🇰🇷",
    category: "app",
    description: "A clean, bite-sized web app to master Hangul and Korean vocabulary in 15 minutes a day.",
    color: "violet",
    size: ""
  },
  {
    name: "Frame — Habit Tracker",
    link: "https://github.com/",
    image: "",
    emoji: "🖼️",
    category: "app",
    description: "An offline-first personal journaling and daily habit tracking dashboard.",
    color: "mist",
    size: ""
  },
  {
    name: "VaultGuard",
    link: "https://github.com/",
    image: "",
    emoji: "🔒",
    category: "tool",
    description: "Analyze password strength, reuse, and security metrics for Bitwarden vaults locally.",
    color: "teal",
    size: ""
  },
  {
    name: "Poker Party",
    link: "https://github.com/",
    image: "",
    emoji: "♠️",
    category: "game",
    description: "Fast-paced, browser-based poker room for casual games with friends.",
    color: "coral",
    size: ""
  },
  {
    name: "FreeL1fe",
    link: "https://github.com/",
    image: "",
    emoji: "🚀",
    category: "tool",
    description: "Interactive financial independence calculator to project your path to early retirement.",
    color: "sunflower",
    size: ""
  }
];

/* ---------- Rendering ---------- */
const grid = document.getElementById('grid');
const filtersEl = document.getElementById('filters');
const categories = ["all", ...new Set(projects.map(p => p.category))];
let activeCat = "all";

function renderFilters() {
  filtersEl.innerHTML = "";
  categories.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = "pill" + (cat === activeCat ? " active" : "");
    btn.textContent = cat;
    btn.onclick = () => { activeCat = cat; renderFilters(); renderGrid(); };
    filtersEl.appendChild(btn);
  });
}

function renderGrid() {
  grid.innerHTML = "";
  const list = projects.filter(p => activeCat === "all" || p.category === activeCat);
  list.forEach((p, i) => {
    const tile = document.createElement('a');
    tile.className = "tile" + (p.size ? " " + p.size : "");
    tile.href = "#";
    tile.onclick = (e) => { e.preventDefault(); openModal(p); };

    const art = document.createElement('div');
    art.className = "art";
    if (p.image) {
      art.style.backgroundImage = `url(${p.image})`;
      art.style.backgroundSize = "cover";
      art.style.backgroundPosition = "center";
    } else {
      art.innerHTML = `<span class="icon-emoji">${p.emoji}</span>`;
    }

    const caption = document.createElement('div');
    caption.className = "caption";
    caption.innerHTML = `<span class="cat-tag">${p.category}</span><span class="name">${p.name}</span>`;

    tile.appendChild(art);
    tile.appendChild(caption);
    grid.appendChild(tile);
  });
}

/* ---------- Modal ---------- */
const overlay = document.getElementById('modalOverlay');
const modalArt = document.getElementById('modalArt');
const modalCat = document.getElementById('modalCat');
const modalName = document.getElementById('modalName');
const modalDesc = document.getElementById('modalDesc');
const modalLink = document.getElementById('modalLink');

function openModal(p) {
  if (p.image) {
    modalArt.style.backgroundImage = `url(${p.image})`;
    modalArt.style.backgroundSize = "cover";
    modalArt.style.backgroundPosition = "center";
    modalArt.innerHTML = "";
  } else {
    modalArt.style.backgroundImage = "none";
    modalArt.innerHTML = p.emoji;
  }
  modalCat.textContent = p.category;
  modalName.textContent = p.name;
  modalDesc.textContent = p.description;
  modalLink.href = p.link;
  overlay.classList.add('open');
}
function closeModal() { overlay.classList.remove('open'); }

document.getElementById('closeModal').onclick = closeModal;
document.getElementById('modalCancel').onclick = closeModal;
overlay.onclick = (e) => { if (e.target === overlay) closeModal(); };
document.addEventListener('keydown', (e) => { if (e.key === "Escape") closeModal(); });

renderFilters();
renderGrid();

/* ---------- Smooth Scroll (Lenis) ---------- */
if (typeof Lenis !== 'undefined') {
  const lenis = new Lenis({
    duration: 0.8,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
}
