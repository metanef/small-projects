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
    caption.innerHTML = `<span class="cat-tag">${p.category}</span>${subHTML}<span class="name">${p.name}</span>`;

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

/* ---------- Dynamic Theme Favicon Updater ---------- */
function updateFavicon(theme) {
  const faviconLink = document.querySelector('link[rel="icon"]');
  if (!faviconLink) return;

  const accentColor = theme === 'dark' ? '#14b8a6' : '#4f46e5';
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1288 1288"><g fill="${accentColor}" fill-rule="evenodd"><path d="M 317.418 292.419 C 329.26 291.401 341.227 293.497 353.008 294.525 C 364.912 295.563 377.017 295.879 388.828 297.72 C 426.169 303.542 478.999 321.667 512.639 338.902 C 527.519 346.525 545.056 360.348 550.109 376.87 C 557.771 401.928 548.129 428.4 536.52 450.479 C 528.119 466.456 518.461 479.61 505.761 492.408 C 499.387 498.831 492.254 507.362 484.068 511.277 C 431.087 536.608 356.762 450.675 287.039 473.283 C 278.365 477.068 268.934 484.649 267.567 495.36 C 265.464 514.702 272.314 519.815 282.878 524.666 C 315.544 541.235 356.793 543.885 392.322 550.48 C 450.134 561.21 513.726 579.19 549.289 629.739 C 584.296 678.602 584.427 742.664 575.319 799.296 C 567.589 847.362 538.719 890.813 498.616 917.701 C 452.382 948.699 398.264 959.928 343.607 964.406 C 313.899 966.841 298.887 970.729 267.901 965.303 L 250.816 963.2 C 197.294 956.561 146.612 944.73 99.1714 919.684 C 65.4599 901.887 30.1798 879.593 36.7384 836.182 C 41.1411 807.041 73.9594 743.508 96.3574 726.602 C 140.269 693.456 210.269 745.583 251.277 763.329 C 284.786 777.809 333.469 790.724 363.913 767.241 L 364.901 766.471 C 364.984 760.703 364.428 756.429 363.767 750.754 C 357.492 742.907 352.068 737.392 342.386 733.584 C 322.205 725.649 298.876 722.237 277.889 717.432 C 222.005 704.635 166.384 689.863 120.972 653.05 C 108.068 642.589 101.278 633.446 92.0841 620.118 C 68.4866 585.911 61.5973 556.192 57.1248 515.473 C 51.7948 466.949 64.9494 408.2 96.9869 370.344 C 133.736 326.919 198.495 304.478 253.516 297.352 C 264.401 295.942 275.616 296.205 286.492 295.426 C 296.717 294.694 307.224 293.466 317.418 292.419 z"/><path d="M 712.266 304.405 C 715.403 304.166 718.55 304.092 721.695 304.182 C 765.82 305.209 800.182 313.045 830.882 345.126 C 839.276 340.235 847.713 335.42 856.193 330.68 C 932.667 288.818 1032.09 304.928 1101.44 352.61 C 1136.49 376.709 1160.98 399.871 1186.85 433.141 C 1306.6 587.123 1261.32 807.174 1092.46 903.781 C 1030.68 939.124 953.957 950.029 885.253 929.494 C 871.768 924.896 852.581 915.582 841.789 912.419 C 832.532 917.706 835.839 972.206 835.861 983.923 L 835.996 1109.18 C 836.003 1125.86 837.384 1148.31 834.527 1164.28 C 825.142 1208.72 783.299 1223.13 742.697 1226.47 C 720.362 1228.3 709.249 1227.19 687.789 1224.91 C 605.679 1216.17 607.784 1158.81 607.838 1091.37 L 607.902 1022.7 L 607.893 795.921 L 607.874 536.943 L 607.782 454.363 C 607.749 426.076 607.422 403.455 611.326 375.163 C 619.396 316.694 662.766 309.3 712.266 304.405 z M 936.195 538.305 C 987.287 542.194 1025.42 586.979 1021.11 638.038 C 1016.8 689.096 971.7 726.856 920.678 722.125 C 870.249 717.449 833.022 672.987 837.282 622.521 C 841.542 572.055 885.695 534.462 936.195 538.305 z"/></g></svg>`;

  faviconLink.href = 'data:image/svg+xml,' + encodeURIComponent(svg);
}

/* ---------- Dark Neumorphism Theme Switcher ---------- */
const themeCheckbox = document.getElementById('themeToggle');

function initTheme() {
  const savedTheme = localStorage.getItem('theme');
  const isDark = savedTheme === 'dark' || (!savedTheme && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
  const activeTheme = isDark ? 'dark' : 'light';

  document.documentElement.setAttribute('data-theme', activeTheme);
  if (themeCheckbox) themeCheckbox.checked = isDark;
  updateFavicon(activeTheme);
}

if (themeCheckbox) {
  themeCheckbox.addEventListener('change', (e) => {
    const newTheme = e.target.checked ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateFavicon(newTheme);
  });
}

/* ---------- App Initialization ---------- */
initTheme();
loadProjects();
