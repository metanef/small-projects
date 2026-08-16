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
    name: "Noise Generator",
    link: "https://github.com/",
    image: "",
    emoji: "🌊",
    category: "Experiment",
    description: "A small generative visual experiment where each refresh produces a unique noise landscape, playable on click.",
    color: "teal",
    size: "big"
  },
  {
    name: "Palette Picker",
    link: "https://github.com/",
    image: "",
    emoji: "🎨",
    category: "Tool",
    description: "A quick tool to extract a harmonious color palette from any image.",
    color: "sunflower",
    size: ""
  },
  {
    name: "Constellation Maps",
    link: "https://github.com/",
    image: "",
    emoji: "✨",
    category: "Illustration",
    description: "A series of animated SVG illustrations depicting imaginary constellations, drawn by hand.",
    color: "violet",
    size: "tall"
  },
  {
    name: "Breathing Counter",
    link: "https://github.com/",
    image: "",
    emoji: "🫧",
    category: "Interactive Web",
    description: "A guided breathing mini-app with smooth animation, designed as a 60-second break.",
    color: "coral",
    size: ""
  },
  {
    name: "Pattern Machine",
    link: "https://github.com/",
    image: "",
    emoji: "🔷",
    category: "Tool",
    description: "Generates repeatable geometric patterns exportable in SVG, with live controls.",
    color: "mist",
    size: "wide"
  },
  {
    name: "Crowd Simulator",
    link: "https://github.com/",
    image: "",
    emoji: "🐜",
    category: "Experiment",
    description: "A collective behavior simulation inspired by ant colonies, rendered on canvas.",
    color: "teal",
    size: ""
  },
  {
    name: "Kinetic Type",
    link: "https://github.com/",
    image: "",
    emoji: "🔤",
    category: "Illustration",
    description: "Kinetic typography experiments reacting to cursor movement and scroll.",
    color: "sunflower",
    size: ""
  },
  {
    name: "Seasons Clock",
    link: "https://github.com/",
    image: "",
    emoji: "🍂",
    category: "Interactive Web",
    description: "A clock displaying time as an illustrated cycle of seasons, updated live.",
    color: "coral",
    size: "wide"
  }
];

/* ---------- Rendering ---------- */
const grid = document.getElementById('grid');
const filtersEl = document.getElementById('filters');
const categories = ["All", ...new Set(projects.map(p => p.category))];
let activeCat = "All";

function renderFilters(){
  filtersEl.innerHTML = "";
  categories.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = "pill" + (cat === activeCat ? " active" : "");
    btn.textContent = cat;
    btn.onclick = () => { activeCat = cat; renderFilters(); renderGrid(); };
    filtersEl.appendChild(btn);
  });
}

function renderGrid(){
  grid.innerHTML = "";
  const list = projects.filter(p => activeCat === "All" || p.category === activeCat);
  list.forEach((p, i) => {
    const tile = document.createElement('a');
    tile.className = "tile" + (p.size ? " " + p.size : "");
    tile.href = "#";
    tile.style.background = COLORS[p.color] || COLORS.mist;
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

function openModal(p){
  modalArt.style.background = COLORS[p.color] || COLORS.mist;
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
function closeModal(){ overlay.classList.remove('open'); }

document.getElementById('closeModal').onclick = closeModal;
document.getElementById('modalCancel').onclick = closeModal;
overlay.onclick = (e) => { if (e.target === overlay) closeModal(); };
document.addEventListener('keydown', (e) => { if (e.key === "Escape") closeModal(); });

renderFilters();
renderGrid();
