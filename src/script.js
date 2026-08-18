/* =========================================================
   SMALL PROJECTS — APPLICATION LOGIC
   ========================================================= */

// State & Data
let projects = [];
let categories = ["all"];
let activeCat = "all";

// DOM Elements
const grid = document.getElementById('grid');
const filtersEl = document.getElementById('filters');

// Modal Elements
const overlay = document.getElementById('modalOverlay');
const modalCard = document.getElementById('modalCard');
const modalArt = document.getElementById('modalArt');
const modalCat = document.getElementById('modalCat');
const modalName = document.getElementById('modalName');
const modalDesc = document.getElementById('modalDesc');
const modalLink = document.getElementById('modalLink');
const closeModalBtn = document.getElementById('closeModal');

/* ---------- Data Fetching ---------- */
async function loadProjects() {
  try {
    const res = await fetch('src/projects.json');
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    projects = await res.json();
    categories = ["all", ...new Set(projects.map(p => p.category))];
    renderFilters();
    renderGrid();
  } catch (err) {
    console.error("Failed to load projects dataset:", err);
  }
}

/* ---------- Filter Buttons Rendering ---------- */
function renderFilters() {
  if (!filtersEl) return;
  filtersEl.innerHTML = "";

  categories.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = `pill${cat === activeCat ? " active" : ""}`;
    btn.textContent = cat;
    btn.addEventListener('click', () => {
      activeCat = cat;
      renderFilters();
      renderGrid();
    });
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
    tile.addEventListener('click', (e) => {
      e.preventDefault();
      openModal(p);
    });

    const art = document.createElement('div');
    art.className = "art";
    if (p.image) {
      art.style.backgroundImage = `url(${p.image})`;
      art.style.backgroundSize = "cover";
      art.style.backgroundPosition = "center";
    }

    const caption = document.createElement('div');
    caption.className = "caption";
    const subHTML = p.sub ? `<span class="sub-title">${p.sub}</span>` : '';
    caption.innerHTML = `<span class="cat-tag">${p.category}</span><span class="name">${p.name}</span>${subHTML}`;

    const iconEl = document.createElement('i');
    iconEl.className = `icon-emoji ${p.icon || ''}`;

    tile.appendChild(art);
    tile.appendChild(caption);
    tile.appendChild(iconEl);
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

  modalArt.innerHTML = `<i class="icon-emoji ${p.icon || ''}"></i>`;
  modalCat.textContent = p.category;
  modalName.textContent = p.sub ? `${p.name} — ${p.sub}` : p.name;
  modalDesc.textContent = p.description;
  modalLink.href = p.link;

  overlay.classList.add('open');
}

function closeModal() {
  if (overlay) overlay.classList.remove('open');
}

// Modal Event Listeners
if (closeModalBtn) {
  closeModalBtn.addEventListener('click', closeModal);
}

if (overlay) {
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });
}

document.addEventListener('keydown', (e) => {
  if (e.key === "Escape") closeModal();
});

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

/* ---------- Dark Neumorphism Theme Switcher ---------- */
const themeCheckbox = document.getElementById('themeToggle');

function initTheme() {
  const savedTheme = localStorage.getItem('theme');
  const isDark = savedTheme === 'dark' || (!savedTheme && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);

  if (isDark) {
    document.documentElement.setAttribute('data-theme', 'dark');
    if (themeCheckbox) themeCheckbox.checked = true;
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    if (themeCheckbox) themeCheckbox.checked = false;
  }
}

if (themeCheckbox) {
  themeCheckbox.addEventListener('change', (e) => {
    const newTheme = e.target.checked ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });
}

/* ---------- App Initialization ---------- */
initTheme();
loadProjects();
