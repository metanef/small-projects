// ---------------------------------------------------------
// PROJECT DATA — add/modify here, no need to touch anything else
// ---------------------------------------------------------
const PROJECTS = [
  {
    id: "cloud-sorter",
    title: "Cloud Sorter",
    category: "Experiment",
    emoji: "☁️",
    color: "c-blue",
    size: "size-lg",
    desc: "A site that ranks clouds you photograph based on how much they look like an animal. Spoiler: it's always a rabbit.",
    link: "#"
  },
  {
    id: "pixel-garden",
    title: "Pixel Garden",
    category: "Interactive Web",
    emoji: "🌱",
    color: "c-green",
    size: "size-wide",
    desc: "A collaborative garden where every visitor plants a pixel flower. It grows, wilts, and regrows. Nobody really knows why.",
    link: "#"
  },
  {
    id: "sad-robot",
    title: "Sad Robot",
    category: "Illustration",
    emoji: "🤖",
    color: "c-purple",
    size: "size-tall",
    desc: "An illustration series of a little robot going through very human emotions. Episode 4: he lost his toolbox.",
    link: "#"
  },
  {
    id: "click-counter",
    title: "The Useless Counter",
    category: "Tool",
    emoji: "🔢",
    color: "c-yellow",
    size: "size-sm",
    desc: "A button. You click. It counts. That's it. It's the project I'm most proud of.",
    link: "#"
  },
  {
    id: "font-mixer",
    title: "Font Mixer",
    category: "Tool",
    emoji: "🔤",
    color: "c-coral",
    size: "size-sm",
    desc: "Generates random font combinations—some unreadable, some gorgeous, rarely both.",
    link: "#"
  },
  {
    id: "tiny-worlds",
    title: "Tiny Worlds",
    category: "Experiment",
    emoji: "🪐",
    color: "c-teal",
    size: "size-wide",
    desc: "Miniature planets you can spin, populate, and destroy with a click. No real consequences, promised.",
    link: "#"
  },
  {
    id: "sound-shapes",
    title: "Sound Shapes",
    category: "Interactive Web",
    emoji: "🎧",
    color: "c-pink",
    size: "size-tall",
    desc: "Draw a shape, it becomes a sound. Usually weird results, sometimes surprisingly pretty.",
    link: "#"
  },
  {
    id: "moodboard-machine",
    title: "Moodboard Machine",
    category: "Illustration",
    emoji: "🎨",
    color: "c-blue",
    size: "size-sm",
    desc: "Generates a complete moodboard in three clicks from a single word. Tested with 'nostalgia', surprisingly accurate.",
    link: "#"
  }
];

const CATEGORIES = ["All", ...new Set(PROJECTS.map(p => p.category))];

// ---------------------------------------------------------
// RENDERING
// ---------------------------------------------------------
const filtersEl = document.getElementById('filters');
const gridEl = document.getElementById('grid');
const overlayEl = document.getElementById('overlay');
const modalEl = document.getElementById('modal');

let activeCategory = "All";

function renderFilters(){
  filtersEl.innerHTML = CATEGORIES.map(cat => `
    <button class="pill ${cat === activeCategory ? 'active' : ''}" data-cat="${cat}">${cat}</button>
  `).join('');

  filtersEl.querySelectorAll('.pill').forEach(btn => {
    btn.addEventListener('click', () => {
      activeCategory = btn.dataset.cat;
      renderFilters();
      renderGrid();
    });
  });
}

function renderGrid(){
  const visible = PROJECTS.filter(p => activeCategory === "All" || p.category === activeCategory);
  gridEl.innerHTML = visible.map(p => `
    <div class="tile ${p.color} ${p.size}" data-id="${p.id}">
      <span class="emoji">${p.emoji}</span>
      <div>
        <div class="tile-title">${p.title}</div>
        <span class="tile-cat">${p.category}</span>
      </div>
    </div>
  `).join('');

  gridEl.querySelectorAll('.tile').forEach(tile => {
    tile.addEventListener('click', () => openModal(tile.dataset.id));
  });
}

function openModal(id){
  const p = PROJECTS.find(x => x.id === id);
  if(!p) return;
  modalEl.innerHTML = `
    <button class="close-btn" id="closeBtn">✕</button>
    <span class="modal-emoji">${p.emoji}</span>
    <h2>${p.title}</h2>
    <span class="modal-cat">${p.category}</span>
    <p class="desc">${p.desc}</p>
    <a class="cta" href="${p.link}" target="_blank" rel="noopener">View Project →</a>
  `;
  overlayEl.classList.add('open');
  document.getElementById('closeBtn').addEventListener('click', closeModal);
}

function closeModal(){
  overlayEl.classList.remove('open');
}

overlayEl.addEventListener('click', (e) => {
  if(e.target === overlayEl) closeModal();
});
document.addEventListener('keydown', (e) => {
  if(e.key === 'Escape') closeModal();
});

renderFilters();
renderGrid();
