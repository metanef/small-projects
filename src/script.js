/* =========================================================
   SMALL PROJECTS — APPLICATION LOGIC
   ========================================================= */

// Project Dataset
const projects = [
  {
    name: "WristCam — Casio WQV-1",
    link: "https://metanef.github.io/casio-wqv-1/",
    image: "",
    emoji: "⌚",
    category: "app",
    description: "A retro web emulator reproducing the iconic 2000s Casio WQV-1 Wrist Camera smartwatch."
  },
  {
    name: "How I Met A Pingu",
    link: "https://metanef.github.io/pingu/",
    image: "",
    emoji: "🐧",
    category: "game",
    description: "A whimsical story game following an icy romance on the floe."
  },
  {
    name: "W4SD — Local Coop Hub",
    link: "https://metanef.github.io/coop-game/",
    image: "",
    emoji: "🕹️",
    category: "app",
    description: "A shared-keyboard local multiplayer hub for quick couch games with friends."
  },
  {
    name: "Sparks & Sync",
    link: "https://metanef.github.io/mismatched-libido/",
    image: "",
    emoji: "🎴",
    category: "game",
    description: "A playful conversation & decision card game for couples to bridge desires."
  },
  {
    name: "Annyeong — 15MinToLearnKorean",
    link: "https://metanef.github.io/annyeong-15mintolearnkorean/",
    image: "",
    emoji: "🇰🇷",
    category: "app",
    description: "A clean, bite-sized web app to master Hangul and Korean vocabulary in 15 minutes a day."
  },
  {
    name: "Frame — Habit Tracker",
    link: "https://metanef.github.io/frame/",
    image: "",
    emoji: "🖼️",
    category: "app",
    description: "An offline-first personal journaling and daily habit tracking dashboard."
  },
  {
    name: "VaultGuard",
    link: "https://metanef.github.io/bitwarden-vault-audit/",
    image: "",
    emoji: "🔒",
    category: "tool",
    description: "Analyze password strength, reuse, and security metrics for Bitwarden vaults locally."
  },
  {
    name: "Poker Party",
    link: "https://metanef.github.io/poker-party/",
    image: "",
    emoji: "♠️",
    category: "game",
    description: "Fast-paced, browser-based poker room for casual games with friends."
  },
  {
    name: "FreeL1fe",
    link: "https://metanef.github.io/freel1fe/",
    image: "",
    emoji: "🚀",
    category: "tool",
    description: "Interactive financial independence calculator to project your path to early retirement."
  }
];

// State & DOM Elements
const grid = document.getElementById('grid');
const filtersEl = document.getElementById('filters');
const categories = ["all", ...new Set(projects.map(p => p.category))];
let activeCat = "all";

// Modal Elements
const overlay = document.getElementById('modalOverlay');
const modalCard = document.getElementById('modalCard');
const modalArt = document.getElementById('modalArt');
const modalCat = document.getElementById('modalCat');
const modalName = document.getElementById('modalName');
const modalDesc = document.getElementById('modalDesc');
const modalLink = document.getElementById('modalLink');
const closeModalBtn = document.getElementById('closeModal');

/* ---------- Filter Buttons Rendering ---------- */
function renderFilters() {
  if (!filtersEl) return;
  filtersEl.innerHTML = "";

  categories.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = `pill${cat === activeCat ? " active" : ""}`;
    btn.textContent = cat;
    btn.onclick = () => {
      activeCat = cat;
      renderFilters();
      renderGrid();
    };
    filtersEl.appendChild(btn);
  });
}

/* ---------- Project Grid Rendering ---------- */
function renderGrid() {
  if (!grid) return;
  grid.innerHTML = "";

  const filteredList = projects.filter(p => activeCat === "all" || p.category === activeCat);

  filteredList.forEach(p => {
    const tile = document.createElement('a');
    tile.className = "tile";
    tile.href = "#";
    tile.onclick = (e) => {
      e.preventDefault();
      openModal(p);
    };

    const art = document.createElement('div');
    art.className = "art";
    if (p.image) {
      art.style.backgroundImage = `url(${p.image})`;
      art.style.backgroundSize = "cover";
      art.style.backgroundPosition = "center";
    }

    const caption = document.createElement('div');
    caption.className = "caption";
    caption.innerHTML = `<span class="cat-tag">${p.category}</span><span class="name">${p.name}</span>`;

    const emoji = document.createElement('span');
    emoji.className = "icon-emoji";
    emoji.textContent = p.emoji;

    tile.appendChild(art);
    tile.appendChild(caption);
    tile.appendChild(emoji);
    grid.appendChild(tile);
  });
}

/* ---------- Modal Logic ---------- */
function openModal(p) {
  if (!overlay) return;

  if (p.image) {
    modalArt.style.backgroundImage = `url(${p.image})`;
    modalArt.style.backgroundSize = "cover";
    modalArt.style.backgroundPosition = "center";
  } else {
    modalArt.style.backgroundImage = "none";
  }

  modalArt.innerHTML = `<span class="icon-emoji">${p.emoji}</span>`;
  modalCat.textContent = p.category;
  modalName.textContent = p.name;
  modalDesc.textContent = p.description;
  modalLink.href = p.link;

  overlay.classList.add('open');
}

function closeModal() {
  if (overlay) overlay.classList.remove('open');
}

// Modal Event Listeners
if (closeModalBtn) closeModalBtn.onclick = closeModal;
if (overlay) overlay.onclick = (e) => { if (e.target === overlay) closeModal(); };
document.addEventListener('keydown', (e) => { if (e.key === "Escape") closeModal(); });

/* ---------- Smooth Scroll (Lenis) ---------- */
let lenisInstance = null;
if (typeof Lenis !== 'undefined') {
  lenisInstance = new Lenis({
    duration: 0.8,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  });

  function raf(time) {
    lenisInstance.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
}

document.querySelectorAll('a[href="#top"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    if (lenisInstance) {
      lenisInstance.scrollTo(0, { duration: 0.8 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });
});

/* ---------- App Initialization ---------- */
renderFilters();
renderGrid();
