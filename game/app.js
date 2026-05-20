const CREATURES = {
  sprigloo: {
    id: "sprigloo",
    name: "Sprigloo",
    type: "Bloom",
    maxHp: 28,
    attack: 8,
    speed: 7,
    rarity: 1,
    moves: [
      { name: "Leaf Flick", power: 7, type: "Bloom" },
      { name: "Seed Pop", power: 9, type: "Bloom" },
    ],
  },
  cindlet: {
    id: "cindlet",
    name: "Cindlet",
    type: "Ember",
    maxHp: 25,
    attack: 9,
    speed: 8,
    rarity: 1,
    moves: [
      { name: "Spark Bite", power: 7, type: "Ember" },
      { name: "Flare Dash", power: 10, type: "Ember" },
    ],
  },
  bubbolt: {
    id: "bubbolt",
    name: "Bubbolt",
    type: "Tide",
    maxHp: 29,
    attack: 7,
    speed: 7,
    rarity: 1,
    moves: [
      { name: "Bubble Ring", power: 7, type: "Tide" },
      { name: "Current Kick", power: 9, type: "Tide" },
    ],
  },
  mossit: {
    id: "mossit",
    name: "Mossit",
    type: "Bloom",
    maxHp: 24,
    attack: 7,
    speed: 6,
    rarity: 1,
    moves: [
      { name: "Moss Toss", power: 6, type: "Bloom" },
      { name: "Spore Tap", power: 8, type: "Bloom" },
    ],
  },
  flarel: {
    id: "flarel",
    name: "Flarel",
    type: "Ember",
    maxHp: 23,
    attack: 8,
    speed: 8,
    rarity: 1,
    moves: [
      { name: "Coal Snap", power: 6, type: "Ember" },
      { name: "Comet Nudge", power: 8, type: "Ember" },
    ],
  },
  ripplex: {
    id: "ripplex",
    name: "Ripplex",
    type: "Tide",
    maxHp: 26,
    attack: 7,
    speed: 7,
    rarity: 1,
    moves: [
      { name: "Wave Tap", power: 6, type: "Tide" },
      { name: "Foam Burst", power: 8, type: "Tide" },
    ],
  },
  voltune: {
    id: "voltune",
    name: "Voltune",
    type: "Spark",
    maxHp: 22,
    attack: 9,
    speed: 10,
    rarity: 2,
    moves: [
      { name: "Static Peep", power: 7, type: "Spark" },
      { name: "Neon Crackle", power: 10, type: "Spark" },
    ],
  },
  pebblit: {
    id: "pebblit",
    name: "Pebblit",
    type: "Stone",
    maxHp: 31,
    attack: 8,
    speed: 4,
    rarity: 2,
    moves: [
      { name: "Rock Roll", power: 7, type: "Stone" },
      { name: "Canyon Drop", power: 9, type: "Stone" },
    ],
  },
  quackshade: {
    id: "quackshade",
    name: "Quackshade",
    type: "Tide",
    maxHp: 28,
    attack: 10,
    speed: 6,
    rarity: 2,
    moves: [
      { name: "Murk Beak", power: 8, type: "Tide" },
      { name: "Sulk Wave", power: 10, type: "Tide" },
    ],
  },
  reefgrudge: {
    id: "reefgrudge",
    name: "Reefgrudge",
    type: "Stone",
    maxHp: 35,
    attack: 10,
    speed: 4,
    rarity: 2,
    moves: [
      { name: "Coral Crush", power: 8, type: "Stone" },
      { name: "Rift Break", power: 11, type: "Stone" },
    ],
  },
  tentoracle: {
    id: "tentoracle",
    name: "Tentoracle",
    type: "Spark",
    maxHp: 26,
    attack: 9,
    speed: 9,
    rarity: 2,
    moves: [
      { name: "Mesh Gaze", power: 8, type: "Spark" },
      { name: "Dream Tangle", power: 10, type: "Spark" },
    ],
  },
  crabloom: {
    id: "crabloom",
    name: "Crabloom",
    type: "Ember",
    maxHp: 29,
    attack: 10,
    speed: 7,
    rarity: 2,
    moves: [
      { name: "Claw Panic", power: 8, type: "Ember" },
      { name: "Brain Broil", power: 10, type: "Ember" },
    ],
  },
  grinmelt: {
    id: "grinmelt",
    name: "Grinmelt",
    type: "Ember",
    maxHp: 24,
    attack: 11,
    speed: 8,
    rarity: 2,
    moves: [
      { name: "Smile Slice", power: 8, type: "Ember" },
      { name: "Jaw Flare", power: 10, type: "Ember" },
    ],
  },
  mawtaby: {
    id: "mawtaby",
    name: "Mawtaby",
    type: "Stone",
    maxHp: 30,
    attack: 9,
    speed: 8,
    rarity: 3,
    moves: [
      { name: "Tentabite", power: 9, type: "Stone" },
      { name: "Alley Void", power: 11, type: "Stone" },
    ],
  },
  ashara: {
    id: "ashara",
    name: "Ashara",
    type: "Spark",
    maxHp: 27,
    attack: 10,
    speed: 9,
    rarity: 2,
    moves: [
      { name: "Ruin Mark", power: 8, type: "Spark" },
      { name: "Dust Arc", power: 10, type: "Spark" },
    ],
  },
  bubdreg: {
    id: "bubdreg",
    name: "Bubdreg",
    type: "Bloom",
    maxHp: 25,
    attack: 7,
    speed: 8,
    rarity: 1,
    moves: [
      { name: "Bubble Flick", power: 7, type: "Bloom" },
      { name: "Gunk Giggle", power: 9, type: "Bloom" },
    ],
  },
  tantrumb: {
    id: "tantrumb",
    name: "Tantrumb",
    type: "Spark",
    maxHp: 23,
    attack: 10,
    speed: 11,
    rarity: 2,
    moves: [
      { name: "Portal Punt", power: 8, type: "Spark" },
      { name: "Lobby Riot", power: 10, type: "Spark" },
    ],
  },
  novafin: {
    id: "novafin",
    name: "Novafin",
    type: "Spark",
    maxHp: 34,
    attack: 10,
    speed: 10,
    rarity: 3,
    moves: [
      { name: "Sky Pulse", power: 9, type: "Spark" },
      { name: "Aurora Lance", power: 11, type: "Spark" },
    ],
  },
};

const STARTERS = ["bubdreg", "crabloom", "quackshade"];
const STORAGE_KEY = "pikibon-pocket-save-v2";
const TILE_SIZE = 24;

const RAW_SPRITES = {
  tantrumb: "0360E0E5-E4CD-451B-B5D3-826068579BA0.PNG",
  grinmelt: "0FCF96FF-CEC3-40D1-87DB-C416F2F6A898.PNG",
  quackshade: "0abef80c-38bd-4044-8922-6a25e9633032.JPG",
  crabloom: "15B85F09-C868-4A3F-9DB9-D427DDDE94F8.PNG",
  tentoracle: "214ce850-5d86-49cf-9cfb-6c0552f0c27c.JPG",
  reefgrudge: "7c1d116c-6d01-4017-8d2d-00dcf219c19b.JPG",
  bubdreg: "988A3CBB-73F2-48AA-952E-15757CA234B7.PNG",
};

const WORLD_MAP = [
  ["S", "P", "P", "G", "G", "P", "P", "G", "G", "P", "P", "P"],
  ["P", "R", "P", "P", "G", "P", "R", "P", "G", "P", "R", "P"],
  ["P", "R", "P", "G", "G", "P", "P", "P", "P", "P", "R", "P"],
  ["P", "P", "P", "P", "P", "P", "R", "G", "G", "P", "P", "P"],
  ["G", "G", "R", "G", "R", "P", "R", "G", "P", "P", "R", "H"],
  ["P", "P", "P", "G", "R", "P", "P", "P", "P", "G", "R", "P"],
  ["P", "R", "P", "P", "P", "P", "R", "R", "P", "P", "P", "P"],
  ["P", "R", "R", "R", "G", "P", "P", "P", "P", "R", "G", "P"],
  ["P", "P", "P", "P", "G", "G", "G", "R", "P", "P", "G", "P"],
  ["R", "R", "R", "P", "P", "P", "P", "R", "R", "P", "P", "P"],
  ["G", "G", "P", "P", "R", "G", "P", "P", "P", "P", "R", "A"],
  ["P", "P", "P", "R", "R", "G", "P", "R", "R", "P", "P", "P"],
];

const TILE_META = {
  S: { name: "Base Camp", passable: true, color: "#9db489" },
  P: { name: "Route", passable: true, color: "#ceb475" },
  G: { name: "Tall Grass", passable: true, color: "#72aa50" },
  H: { name: "Hot Spring", passable: true, color: "#73a6a0" },
  A: { name: "Sky Arena", passable: true, color: "#d18b56" },
  R: { name: "Ridge", passable: false, color: "#6c766c" },
};

const TRAINERS = [
  {
    id: "mirel",
    name: "Scout Mirel",
    x: 5,
    y: 2,
    sight: 1,
    intro: "Scout Mirel spotted you and rushed in.",
    defeat: "Mirel folded and cleared the route ahead.",
    team: ["mossit", "bubdreg"],
  },
  {
    id: "torq",
    name: "Bruiser Torq",
    x: 9,
    y: 5,
    sight: 1,
    intro: "Bruiser Torq slammed a fist into the path.",
    defeat: "Torq laughed and admitted your team had better rhythm.",
    team: ["crabloom", "reefgrudge"],
  },
  {
    id: "lyra",
    name: "Oracle Lyra",
    x: 6,
    y: 8,
    sight: 1,
    intro: "Oracle Lyra drifted in and challenged your aura.",
    defeat: "Lyra nodded. The arena gate is yours now.",
    team: ["tentoracle", "ashara"],
  },
];

const TYPE_ADVANTAGES = {
  Bloom: "Tide",
  Tide: "Ember",
  Ember: "Bloom",
  Spark: "Tide",
  Stone: "Spark",
};

const DOM = {
  titleScreen: document.querySelector("#titleScreen"),
  gameScreen: document.querySelector("#gameScreen"),
  titleMenu: document.querySelector("#titleMenu"),
  starterSection: document.querySelector("#starterSection"),
  starterGrid: document.querySelector("#starterGrid"),
  areaLabel: document.querySelector("#areaLabel"),
  trainerProgress: document.querySelector("#trainerProgress"),
  badgeLabel: document.querySelector("#badgeLabel"),
  saveButton: document.querySelector("#saveButton"),
  worldHint: document.querySelector("#worldHint"),
  worldCanvas: document.querySelector("#worldCanvas"),
  allySprite: document.querySelector("#allySprite"),
  enemySprite: document.querySelector("#enemySprite"),
  allyName: document.querySelector("#allyName"),
  allyLevel: document.querySelector("#allyLevel"),
  allyHpBar: document.querySelector("#allyHpBar"),
  allyHpText: document.querySelector("#allyHpText"),
  enemyName: document.querySelector("#enemyName"),
  enemyLevel: document.querySelector("#enemyLevel"),
  enemyHpBar: document.querySelector("#enemyHpBar"),
  enemyHpText: document.querySelector("#enemyHpText"),
  textboxLabel: document.querySelector("#textboxLabel"),
  textboxText: document.querySelector("#textboxText"),
  textboxMenu: document.querySelector("#textboxMenu"),
  partyList: document.querySelector("#partyList"),
  journalList: document.querySelector("#journalList"),
  seenCount: document.querySelector("#seenCount"),
  caughtCount: document.querySelector("#caughtCount"),
  saveStateLabel: document.querySelector("#saveStateLabel"),
  dpadButtons: [...document.querySelectorAll("[data-move]")],
};

const ctx = DOM.worldCanvas.getContext("2d");

const state = {
  screen: "title",
  player: {
    x: 0,
    y: 0,
    facing: "down",
    moving: false,
  },
  party: [],
  activeIndex: 0,
  seen: new Set(),
  caught: new Set(),
  defeatedTrainers: new Set(),
  badgeCount: 0,
  battle: null,
  textQueue: [],
  textAnimating: false,
  textPendingCallback: null,
  textToken: 0,
  modeHint: "Use the D-pad or keyboard to move.",
  started: false,
};

function cloneCreature(id, level = 5) {
  const base = CREATURES[id];
  return {
    ...base,
    level,
    currentHp: base.maxHp + level * 2,
    maxHp: base.maxHp + level * 2,
    attack: base.attack + Math.floor(level / 2),
    speed: base.speed + Math.floor(level / 3),
    moves: base.moves.map((move) => ({ ...move })),
  };
}

function spritePath(id) {
  if (RAW_SPRITES[id]) {
    return `./assets/raw/${RAW_SPRITES[id]}`;
  }
  return `./assets/${id}.svg`;
}

function getLead() {
  return state.party[state.activeIndex] || null;
}

function typeClass(type) {
  return `type-${type.toLowerCase()}`;
}

function effectiveness(moveType, defenderType) {
  if (TYPE_ADVANTAGES[moveType] === defenderType) {
    return 1.35;
  }
  if (TYPE_ADVANTAGES[defenderType] === moveType) {
    return 0.75;
  }
  return 1;
}

function serializeState() {
  return JSON.stringify({
    player: state.player,
    party: state.party,
    activeIndex: state.activeIndex,
    seen: [...state.seen],
    caught: [...state.caught],
    defeatedTrainers: [...state.defeatedTrainers],
    badgeCount: state.badgeCount,
    started: state.started,
  });
}

function saveGame() {
  if (!state.started) {
    setTextbox("System", "No adventure has started yet.", []);
    return;
  }
  localStorage.setItem(STORAGE_KEY, serializeState());
  DOM.saveStateLabel.textContent = "Saved";
  setTextbox("System", "Game saved.", getContextMenu());
}

function loadGame() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    return false;
  }

  const save = JSON.parse(raw);
  state.player = save.player;
  state.party = save.party;
  state.activeIndex = save.activeIndex;
  state.seen = new Set(save.seen);
  state.caught = new Set(save.caught);
  state.defeatedTrainers = new Set(save.defeatedTrainers);
  state.badgeCount = save.badgeCount;
  state.started = save.started;
  state.battle = null;
  state.screen = "world";
  DOM.titleScreen.classList.add("hidden");
  DOM.gameScreen.classList.remove("hidden");
  DOM.starterSection.classList.add("hidden");
  updateAll();
  queueTextbox(["Save file loaded.", "Your journey resumes."], "System", getContextMenu());
  return true;
}

function resetForNewGame() {
  state.screen = "world";
  state.player = { x: 0, y: 0, facing: "down", moving: false };
  state.party = [];
  state.activeIndex = 0;
  state.seen = new Set();
  state.caught = new Set();
  state.defeatedTrainers = new Set();
  state.badgeCount = 0;
  state.battle = null;
  state.started = false;
  DOM.titleScreen.classList.remove("hidden");
  DOM.gameScreen.classList.add("hidden");
  DOM.starterSection.classList.remove("hidden");
  renderStarters();
  renderTitleMenu();
}

function renderTitleMenu() {
  const hasSave = Boolean(localStorage.getItem(STORAGE_KEY));
  DOM.titleMenu.innerHTML = "";
  [
    { label: "New Game", onClick: resetForNewGame, disabled: false },
    { label: "Continue", onClick: loadGame, disabled: !hasSave },
  ].forEach((item) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = item.label;
    button.disabled = item.disabled;
    button.addEventListener("click", item.onClick);
    DOM.titleMenu.appendChild(button);
  });
}

function renderStarters() {
  DOM.starterGrid.innerHTML = "";
  STARTERS.forEach((id) => {
    const starter = CREATURES[id];
    const card = document.createElement("button");
    card.type = "button";
    card.className = "starter-card";
    card.innerHTML = `
      <img class="starter-art" src="${spritePath(starter.id)}" alt="${starter.name}" />
      <span class="starter-chip">${starter.type}</span>
      <p class="starter-name">${starter.name}</p>
      <p>HP ${starter.maxHp} / ATK ${starter.attack}</p>
      <p>${starter.moves[0].name}</p>
    `;
    card.addEventListener("click", () => chooseStarter(id));
    DOM.starterGrid.appendChild(card);
  });
}

function chooseStarter(id) {
  const starter = cloneCreature(id, 6);
  state.party = [starter];
  state.activeIndex = 0;
  state.caught.add(id);
  state.seen.add(id);
  state.started = true;
  state.screen = "world";
  DOM.titleScreen.classList.add("hidden");
  DOM.gameScreen.classList.remove("hidden");
  DOM.starterSection.classList.add("hidden");
  updateAll();
  queueTextbox(
    [
      `${starter.name} joined your team.`,
      "Beat the three route trainers, then challenge Nova in the Sky Arena.",
    ],
    "Professor",
    getContextMenu()
  );
}

function tileAt(x, y) {
  return WORLD_MAP[y]?.[x] ?? null;
}

function currentTile() {
  return tileAt(state.player.x, state.player.y);
}

function trainerAt(x, y) {
  return TRAINERS.find(
    (trainer) => trainer.x === x && trainer.y === y && !state.defeatedTrainers.has(trainer.id)
  );
}

function drawWorld() {
  ctx.clearRect(0, 0, DOM.worldCanvas.width, DOM.worldCanvas.height);

  WORLD_MAP.forEach((row, y) => {
    row.forEach((tile, x) => {
      ctx.fillStyle = TILE_META[tile].color;
      ctx.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
      ctx.strokeStyle = "rgba(34, 49, 31, 0.14)";
      ctx.strokeRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);

      if (tile === "G") {
        ctx.fillStyle = "#5e8e43";
        ctx.fillRect(x * TILE_SIZE + 5, y * TILE_SIZE + 7, 3, 10);
        ctx.fillRect(x * TILE_SIZE + 11, y * TILE_SIZE + 4, 3, 13);
        ctx.fillRect(x * TILE_SIZE + 16, y * TILE_SIZE + 9, 3, 8);
      }

      if (tile === "H") {
        ctx.fillStyle = "#d7efe5";
        ctx.beginPath();
        ctx.arc(x * TILE_SIZE + 12, y * TILE_SIZE + 12, 6, 0, Math.PI * 2);
        ctx.fill();
      }

      if (tile === "A") {
        ctx.fillStyle = "#7b3a22";
        ctx.fillRect(x * TILE_SIZE + 7, y * TILE_SIZE + 6, 10, 12);
      }
    });
  });

  TRAINERS.forEach((trainer) => {
    if (state.defeatedTrainers.has(trainer.id)) {
      return;
    }
    ctx.fillStyle = "#8e3946";
    ctx.fillRect(trainer.x * TILE_SIZE + 6, trainer.y * TILE_SIZE + 6, 12, 12);
    ctx.fillStyle = "#f1f6de";
    ctx.fillRect(trainer.x * TILE_SIZE + 9, trainer.y * TILE_SIZE + 9, 6, 4);
  });

  ctx.fillStyle = "#20311d";
  ctx.fillRect(state.player.x * TILE_SIZE + 7, state.player.y * TILE_SIZE + 6, 10, 12);
  ctx.fillStyle = "#dfeccd";
  ctx.fillRect(state.player.x * TILE_SIZE + 9, state.player.y * TILE_SIZE + 8, 6, 4);
}

function renderParty() {
  DOM.partyList.innerHTML = "";
  if (!state.party.length) {
    DOM.partyList.innerHTML = `<div class="party-card"><p>No Pikibon yet.</p></div>`;
    return;
  }

  state.party.forEach((creature, index) => {
    const card = document.createElement("div");
    card.className = "party-card";
    const hpPercent = Math.max(0, (creature.currentHp / creature.maxHp) * 100);
    card.innerHTML = `
      <img class="mini-sprite" src="${spritePath(creature.id)}" alt="${creature.name}" />
      <div>
        <div class="party-row">
          <strong>${creature.name}${index === state.activeIndex ? " *" : ""}</strong>
          <span class="type-chip">${creature.type}</span>
        </div>
        <p>Lv.${creature.level}</p>
        <div class="hp-track"><div style="width:${hpPercent}%"></div></div>
        <p>${creature.currentHp} / ${creature.maxHp} HP</p>
        <div class="party-actions">
          <button class="party-action" type="button" data-lead="${index}">Lead</button>
          <button class="party-action" type="button" data-heal="${index}">Heal</button>
        </div>
      </div>
    `;
    DOM.partyList.appendChild(card);
  });

  DOM.partyList.querySelectorAll("[data-lead]").forEach((button) => {
    button.addEventListener("click", () => {
      if (state.party[Number(button.dataset.lead)].currentHp <= 0) {
        setTextbox("Party", "A fainted Pikibon cannot lead.", getContextMenu());
        return;
      }
      state.activeIndex = Number(button.dataset.lead);
      updateBattleHUD();
      setTextbox("Party", `${getLead().name} is now in front.`, getContextMenu());
    });
  });

  DOM.partyList.querySelectorAll("[data-heal]").forEach((button) => {
    button.addEventListener("click", () => {
      const creature = state.party[Number(button.dataset.heal)];
      creature.currentHp = Math.min(creature.maxHp, creature.currentHp + 6);
      renderParty();
      updateBattleHUD();
      setTextbox("Party", `${creature.name} recovered 6 HP.`, getContextMenu());
    });
  });
}

function renderJournal() {
  DOM.seenCount.textContent = `${state.seen.size} seen`;
  DOM.caughtCount.textContent = `${state.caught.size} caught`;
  DOM.journalList.innerHTML = "";

  if (!state.seen.size) {
    DOM.journalList.innerHTML = `<div class="journal-card"><p>No entries yet.</p></div>`;
    return;
  }

  [...state.seen]
    .sort()
    .forEach((id) => {
      const creature = CREATURES[id];
      const card = document.createElement("div");
      card.className = "journal-card";
      card.innerHTML = `
        <img class="mini-sprite" src="${spritePath(creature.id)}" alt="${creature.name}" />
        <div>
          <div class="party-row">
            <strong>${creature.name}</strong>
            <span class="type-chip">${creature.type}</span>
          </div>
          <p>${state.caught.has(id) ? "Caught" : "Seen only"}</p>
        </div>
      `;
      DOM.journalList.appendChild(card);
    });
}

function updateHud() {
  const tile = TILE_META[currentTile()] || TILE_META.S;
  DOM.areaLabel.textContent = tile.name;
  DOM.trainerProgress.textContent = `${state.defeatedTrainers.size} / ${TRAINERS.length}`;
  DOM.badgeLabel.textContent = `${state.badgeCount} / 1`;
  DOM.worldHint.textContent = state.modeHint;
  DOM.saveStateLabel.textContent = localStorage.getItem(STORAGE_KEY) ? "Save ready" : "No save yet";
}

function updateBattleHUD() {
  const ally = getLead();
  if (ally) {
    DOM.allySprite.src = spritePath(ally.id);
    DOM.allyName.textContent = ally.name;
    DOM.allyLevel.textContent = `Lv.${ally.level}`;
    DOM.allyHpBar.style.width = `${Math.max(0, (ally.currentHp / ally.maxHp) * 100)}%`;
    DOM.allyHpText.textContent = `${ally.currentHp} / ${ally.maxHp} HP`;
  } else {
    DOM.allySprite.removeAttribute("src");
    DOM.allyName.textContent = "No partner";
    DOM.allyLevel.textContent = "Lv.--";
    DOM.allyHpBar.style.width = "0%";
    DOM.allyHpText.textContent = "HP -- / --";
  }

  const enemy = state.battle?.enemyTeam?.[state.battle.enemyIndex] ?? null;
  if (enemy) {
    DOM.enemySprite.src = spritePath(enemy.id);
    DOM.enemyName.textContent = enemy.name;
    DOM.enemyLevel.textContent = `Lv.${enemy.level}`;
    DOM.enemyHpBar.style.width = `${Math.max(0, (enemy.currentHp / enemy.maxHp) * 100)}%`;
    DOM.enemyHpText.textContent = `${enemy.currentHp} / ${enemy.maxHp} HP`;
  } else {
    DOM.enemySprite.removeAttribute("src");
    DOM.enemyName.textContent = "No encounter";
    DOM.enemyLevel.textContent = "Lv.--";
    DOM.enemyHpBar.style.width = "0%";
    DOM.enemyHpText.textContent = "HP -- / --";
  }
}

function setTextbox(label, text, menu = []) {
  DOM.textboxLabel.textContent = label;
  DOM.textboxText.textContent = "";
  DOM.textboxMenu.innerHTML = "";
  state.textAnimating = true;
  state.textToken += 1;
  const token = state.textToken;

  let index = 0;
  function tick() {
    if (token !== state.textToken) {
      return;
    }
    DOM.textboxText.textContent = text.slice(0, index);
    index += 1;
    if (index <= text.length) {
      window.setTimeout(tick, 12);
      return;
    }
    state.textAnimating = false;
    renderTextboxMenu(menu);
  }
  tick();
}

function renderTextboxMenu(menu) {
  DOM.textboxMenu.innerHTML = "";
  menu.forEach((item) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = item.label;
    button.disabled = Boolean(item.disabled);
    button.addEventListener("click", item.onSelect);
    DOM.textboxMenu.appendChild(button);
  });
}

function queueTextbox(messages, label, menuAfter = []) {
  const queue = [...messages];
  function next() {
    if (!queue.length) {
      renderTextboxMenu(menuAfter);
      return;
    }
    const text = queue.shift();
    setTextbox(label, text, [{ label: queue.length ? "Next" : "OK", onSelect: next }]);
  }
  next();
}

function getContextMenu() {
  if (state.screen !== "world") {
    return [];
  }
  return [
    { label: "Status", onSelect: () => setTextbox("Guide", "Explore grass, beat trainers, reach the arena.", getContextMenu()) },
    { label: "Save", onSelect: saveGame },
  ];
}

function updateAll() {
  drawWorld();
  updateHud();
  updateBattleHUD();
  renderParty();
  renderJournal();
}

function canMoveTo(x, y) {
  const tile = tileAt(x, y);
  if (!tile) {
    return false;
  }
  if (!TILE_META[tile].passable) {
    return false;
  }
  return true;
}

function tryMove(direction) {
  if (state.screen !== "world" || state.textAnimating || state.battle) {
    return;
  }

  const deltas = {
    up: { x: 0, y: -1 },
    down: { x: 0, y: 1 },
    left: { x: -1, y: 0 },
    right: { x: 1, y: 0 },
  };

  state.player.facing = direction;
  const nextX = state.player.x + deltas[direction].x;
  const nextY = state.player.y + deltas[direction].y;

  const trainer = trainerAt(nextX, nextY);
  if (trainer) {
    startTrainerBattle(trainer);
    return;
  }

  if (!canMoveTo(nextX, nextY)) {
    setTextbox("World", "The ridge blocks the way.", getContextMenu());
    return;
  }

  state.player.x = nextX;
  state.player.y = nextY;
  handleWorldTile();
  updateAll();
}

function handleWorldTile() {
  const tile = currentTile();
  const tileName = TILE_META[tile].name;
  state.modeHint = `${tileName}.`;

  if (tile === "G" && Math.random() < 0.24) {
    startWildBattle();
    return;
  }

  if (tile === "H") {
    healParty();
    queueTextbox(["The hot spring restored your party."], "World", getContextMenu());
    return;
  }

  if (tile === "A") {
    if (state.defeatedTrainers.size < TRAINERS.length) {
      queueTextbox(["The arena is locked. Defeat all route trainers first."], "Gate", getContextMenu());
      return;
    }
    startBossBattle();
    return;
  }

  renderTextboxMenu(getContextMenu());
}

function randomWildId() {
  const roll = Math.random();
  if (roll < 0.08) return "voltune";
  if (roll < 0.16) return "pebblit";
  if (roll < 0.24) return "quackshade";
  if (roll < 0.32) return "reefgrudge";
  if (roll < 0.4) return "tentoracle";
  if (roll < 0.48) return "crabloom";
  if (roll < 0.56) return "grinmelt";
  if (roll < 0.64) return "bubdreg";
  if (roll < 0.72) return "tantrumb";
  if (roll < 0.8) return "ashara";
  if (roll < 0.88) return "mawtaby";
  return ["mossit", "flarel", "ripplex"][Math.floor(Math.random() * 3)];
}

function startWildBattle() {
  const enemy = cloneCreature(randomWildId(), 4 + Math.floor(Math.random() * 4));
  state.seen.add(enemy.id);
  state.battle = {
    kind: "wild",
    enemyName: `Wild ${enemy.name}`,
    enemyTeam: [enemy],
    enemyIndex: 0,
    canCapture: true,
  };
  updateAll();
  queueTextbox([`A wild ${enemy.name} appeared.`], "Battle", getBattleMenu());
}

function startTrainerBattle(trainer) {
  const team = trainer.team.map((id, index) => cloneCreature(id, 5 + index));
  team.forEach((creature) => state.seen.add(creature.id));
  state.battle = {
    kind: "trainer",
    trainerId: trainer.id,
    enemyName: trainer.name,
    enemyTeam: team,
    enemyIndex: 0,
    canCapture: false,
  };
  updateAll();
  queueTextbox([trainer.intro, `${trainer.name} sent out ${team[0].name}.`], "Trainer", getBattleMenu());
}

function startBossBattle() {
  if (state.badgeCount > 0) {
    queueTextbox(["Nova has already been defeated."], "Arena", getContextMenu());
    return;
  }
  const team = [cloneCreature("novafin", 8), cloneCreature("tantrumb", 7)];
  team.forEach((creature) => state.seen.add(creature.id));
  state.battle = {
    kind: "boss",
    enemyName: "Nova",
    enemyTeam: team,
    enemyIndex: 0,
    canCapture: false,
  };
  updateAll();
  queueTextbox(["Nova stepped into the arena.", "Nova sent out Novafin."], "Arena", getBattleMenu());
}

function getBattleMenu() {
  if (!state.battle) {
    return getContextMenu();
  }
  return [
    { label: "Fight", onSelect: openMoveMenu },
    { label: "Orb", onSelect: tryCapture, disabled: !state.battle.canCapture },
    { label: "Party", onSelect: openPartyMenu },
    { label: "Run", onSelect: tryRun, disabled: state.battle.kind !== "wild" },
  ];
}

function openMoveMenu() {
  const lead = getLead();
  renderTextboxMenu([
    ...lead.moves.map((move, index) => ({
      label: move.name,
      onSelect: () => playerMove(index),
    })),
    { label: "Back", onSelect: () => renderTextboxMenu(getBattleMenu()) },
  ]);
}

function openPartyMenu() {
  renderTextboxMenu([
    ...state.party.map((creature, index) => ({
      label: `${creature.name}${creature.currentHp <= 0 ? " X" : ""}`,
      disabled: creature.currentHp <= 0 || index === state.activeIndex,
      onSelect: () => switchPartyMember(index, state.battle ? true : false),
    })),
    { label: "Back", onSelect: () => renderTextboxMenu(state.battle ? getBattleMenu() : getContextMenu()) },
  ]);
}

function switchPartyMember(index, useTurn) {
  state.activeIndex = index;
  updateBattleHUD();
  if (!useTurn) {
    setTextbox("Party", `${getLead().name} moved to the front.`, getContextMenu());
    return;
  }
  queueTextbox([`Go, ${getLead().name}.`], "Battle", [
    { label: "OK", onSelect: enemyTurn },
  ]);
}

function playerMove(moveIndex) {
  const lead = getLead();
  const enemy = state.battle.enemyTeam[state.battle.enemyIndex];
  const move = lead.moves[moveIndex];
  const enemyMove = enemy.moves[Math.floor(Math.random() * enemy.moves.length)];
  const messages = [];

  const allyFirst = lead.speed >= enemy.speed;
  if (allyFirst) {
    performAttack(lead, enemy, move, messages);
    if (enemy.currentHp > 0) {
      performAttack(enemy, lead, enemyMove, messages);
    }
  } else {
    performAttack(enemy, lead, enemyMove, messages);
    if (lead.currentHp > 0) {
      performAttack(lead, enemy, move, messages);
    }
  }

  resolveBattle(messages);
}

function performAttack(attacker, defender, move, messages) {
  const modifier = effectiveness(move.type, defender.type);
  const variance = 0.9 + Math.random() * 0.25;
  const damage = Math.max(2, Math.round((attacker.attack + move.power) * modifier * variance * 0.6));
  defender.currentHp = Math.max(0, defender.currentHp - damage);

  let line = `${attacker.name} used ${move.name}. ${damage} damage.`;
  if (modifier > 1) {
    line += " Super hit.";
  } else if (modifier < 1) {
    line += " Resisted.";
  }
  messages.push(line);

  if (defender.currentHp <= 0) {
    messages.push(`${defender.name} fainted.`);
  }
}

function enemyTurn() {
  if (!state.battle) {
    return;
  }
  const lead = getLead();
  const enemy = state.battle.enemyTeam[state.battle.enemyIndex];
  if (!lead || lead.currentHp <= 0 || enemy.currentHp <= 0) {
    return;
  }
  const move = enemy.moves[Math.floor(Math.random() * enemy.moves.length)];
  const messages = [];
  performAttack(enemy, lead, move, messages);
  resolveBattle(messages);
}

function resolveBattle(messages) {
  const lead = getLead();
  const enemy = state.battle.enemyTeam[state.battle.enemyIndex];

  if (lead && lead.currentHp <= 0) {
    const nextIndex = state.party.findIndex((creature) => creature.currentHp > 0);
    if (nextIndex >= 0) {
      state.activeIndex = nextIndex;
      messages.push(`${state.party[nextIndex].name} stepped in.`);
    } else {
      healParty();
      state.player.x = 0;
      state.player.y = 0;
      state.battle = null;
      updateAll();
      queueTextbox(
        ["Your party blacked out.", "You woke up back at Base Camp."],
        "System",
        getContextMenu()
      );
      return;
    }
  }

  if (enemy.currentHp <= 0) {
    if (state.battle.enemyIndex < state.battle.enemyTeam.length - 1) {
      state.battle.enemyIndex += 1;
      const nextEnemy = state.battle.enemyTeam[state.battle.enemyIndex];
      messages.push(`${state.battle.enemyName} sent out ${nextEnemy.name}.`);
      updateAll();
      queueTextbox(messages, "Battle", getBattleMenu());
      return;
    }

    handleBattleWin(messages);
    return;
  }

  updateAll();
  queueTextbox(messages, "Battle", getBattleMenu());
}

function handleBattleWin(messages) {
  const lead = getLead();
  if (lead) {
    lead.level += 1;
    lead.maxHp += 2;
    lead.attack += 1;
    lead.currentHp = Math.min(lead.maxHp, lead.currentHp + 4);
    messages.push(`${lead.name} grew to Lv.${lead.level}.`);
  }

  if (state.battle.kind === "trainer") {
    const trainer = TRAINERS.find((item) => item.id === state.battle.trainerId);
    state.defeatedTrainers.add(trainer.id);
    messages.push(trainer.defeat);
  } else if (state.battle.kind === "boss") {
    state.badgeCount = 1;
    messages.push("Nova was defeated.");
    messages.push("You earned the Sky Badge.");
  } else {
    messages.push("The wild Pikibon was defeated.");
  }

  state.battle = null;
  updateAll();
  queueTextbox(messages, "Victory", getContextMenu());
}

function tryCapture() {
  if (!state.battle || !state.battle.canCapture) {
    return;
  }

  if (state.party.length >= 6) {
    setTextbox("Orb", "Your party is full.", getBattleMenu());
    return;
  }

  const enemy = state.battle.enemyTeam[state.battle.enemyIndex];
  const hpRatio = enemy.currentHp / enemy.maxHp;
  const chance = 0.28 + (1 - hpRatio) * 0.5 - enemy.rarity * 0.08;

  if (Math.random() < chance) {
    const captured = cloneCreature(enemy.id, enemy.level);
    captured.currentHp = Math.max(6, enemy.currentHp);
    state.party.push(captured);
    state.caught.add(captured.id);
    state.battle = null;
    updateAll();
    queueTextbox([`Click. ${captured.name} was caught.`], "Orb", getContextMenu());
    return;
  }

  queueTextbox([`The orb cracked, but ${enemy.name} broke free.`], "Orb", [
    { label: "OK", onSelect: enemyTurn },
  ]);
}

function tryRun() {
  if (!state.battle || state.battle.kind !== "wild") {
    return;
  }
  const lead = getLead();
  const enemy = state.battle.enemyTeam[state.battle.enemyIndex];
  const chance = lead.speed >= enemy.speed ? 0.8 : 0.55;
  if (Math.random() < chance) {
    state.battle = null;
    updateAll();
    queueTextbox(["You ran from the wild battle."], "Escape", getContextMenu());
    return;
  }

  queueTextbox(["Escape failed."], "Escape", [
    { label: "OK", onSelect: enemyTurn },
  ]);
}

function healParty() {
  state.party.forEach((creature) => {
    creature.currentHp = creature.maxHp;
  });
  updateAll();
}

function bindEvents() {
  DOM.saveButton.addEventListener("click", saveGame);

  DOM.dpadButtons.forEach((button) => {
    button.addEventListener("click", () => tryMove(button.dataset.move));
  });

  window.addEventListener("keydown", (event) => {
    const direction = {
      ArrowUp: "up",
      ArrowDown: "down",
      ArrowLeft: "left",
      ArrowRight: "right",
      w: "up",
      W: "up",
      s: "down",
      S: "down",
      a: "left",
      A: "left",
      d: "right",
      D: "right",
    }[event.key];

    if (direction) {
      event.preventDefault();
      tryMove(direction);
      return;
    }

    if (event.key === "Enter" && DOM.textboxMenu.firstElementChild) {
      event.preventDefault();
      DOM.textboxMenu.firstElementChild.click();
    }
  });
}

function boot() {
  renderTitleMenu();
  renderStarters();
  drawWorld();
  updateBattleHUD();
  renderParty();
  renderJournal();
  setTextbox("Title", "Choose New Game or Continue.", []);
}

bindEvents();
boot();
