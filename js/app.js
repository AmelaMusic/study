// ============================================================
// APP.JS — Study logic, state, navigation, data submission
// ============================================================

// ---- CONFIGURATION ----
// Replace with your Google Apps Script Web App URL (see README)
const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxIUx35lQc8Jw0eaeu_sQ_JggSa7WafT-Zxo7CYWtkH0IB9bMetbZRp28xYOHjG3-x5/exec";


// ── State ──
const state = {
  participantId: null,
  conditionOrder: null,
  currentConditionIndex: 0,
  selectedSong: null,
  practiceSong: null,
  responses: [],
  startTime: null,
};

// ── Init ──
document.addEventListener("DOMContentLoaded", () => {
  state.participantId = generateId();
  state.conditionOrder = assignConditionOrder();
  state.startTime = Date.now();
  showPage("page-consent");
  renderSongList("practice-song-list", true);
});

// ── Helpers ──
function generateId() {
  return "P" + Math.random().toString(36).substr(2, 8).toUpperCase();
}

function assignConditionOrder() {
  try {
    const count = parseInt(localStorage.getItem("studyCount") || "0");
    localStorage.setItem("studyCount", count + 1);
    return CONDITION_ORDERS[count % CONDITION_ORDERS.length];
  } catch {
    return CONDITION_ORDERS[Math.floor(Math.random() * CONDITION_ORDERS.length)];
  }
}

function showPage(id) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  const el = document.getElementById(id);
  if (el) { el.classList.add("active"); window.scrollTo(0,0); }
  // Scroll content to top inside page
  const content = el ? el.querySelector(".page-content") : null;
  if (content) content.scrollTop = 0;
}

// ── Cover art ──
function makeAlbumImg(song, cssClass) {
  const img = document.createElement("img");
  img.className = cssClass + " img-loading";
  // Try Last.fm CDN (works well for popular tracks)
  const query = encodeURIComponent(`${song.title} ${song.artist}`);
  img.src = `https://ws.audioscrobbler.com/2.0/?method=album.search&album=${query}&api_key=nokey&format=json`;
  // Use a reliable fallback: colored gradient placeholder
  img.onerror = () => {
    img.replaceWith(makePlaceholder(song, cssClass));
  };
  img.onload = () => img.classList.remove("img-loading");
  // Use a direct approach with the MusicBrainz CAA
  img.src = `https://coverartarchive.org/release/${song.mbid}/front-250`;
  return img;
}

function makePlaceholder(song, cssClass) {
  const div = document.createElement("div");
  div.className = cssClass.replace("cover","cover-placeholder").replace("rec-cover","rec-cover-placeholder");
  div.textContent = getEmoji(song.title);
  return div;
}

function getEmoji(title) {
  const map = {
    "Rolling": "🎵", "Whitney": "🎤", "See You": "🎸", "Dancing": "✨",
    "Blinding": "🌃", "Poker": "🃏", "Lose": "🔥", "Bohemian": "👑",
    "Someone": "💔", "Fix": "💛", "All of Me": "🎹", "Stay": "🌊",
    "Heart": "🚢", "Because": "💖", "Vision": "🌹", "Un-break": "💔",
    "When I": "🎹", "Let Her": "🍂", "Apologize": "🕐",
    "Stayin": "🕺", "Super": "🌟", "Le Freak": "🎷", "Survive": "💪",
    "Can't": "🌙", "Don't Start": "💃", "Levitating": "🚀", "Say So": "😎",
    "Just Dance": "🎉", "Toxic": "⚡", "Gotta": "🙌", "Bad Romance": "🖤",
    "Not Afraid": "🔥", "Till": "💥", "Numb": "🎸", "Remember": "🏆",
    "Somebody": "👑", "Stairway": "🌤️", "Hotel": "🏨", "Comfortably": "🌀",
  };
  for (const [k, v] of Object.entries(map)) {
    if (title.includes(k)) return v;
  }
  return "🎵";
}

// ── Song list renderer ──
function renderSongList(containerId, isPractice) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = SONGS.map((song, i) => {
    const img = `<img class="song-cover img-loading" src="https://coverartarchive.org/release/${song.mbid}/front-250" onerror="this.replaceWith(makeFallbackDiv('${song.title}','song-cover-placeholder'))" onload="this.classList.remove('img-loading')" alt="${song.title}">`;
    return `
    <div class="song-item" id="${containerId}-song-${song.id}" onclick="selectSong(${song.id}, '${containerId}', ${isPractice})">
      <span class="song-num">${i + 1}</span>
      ${img}
      <div class="song-info">
        <div class="song-title">${song.title}</div>
        <div class="song-artist">${song.artist}</div>
      </div>
      <div class="song-heart">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
        </svg>
      </div>
    </div>`;
  }).join("");
}

// Fallback div for broken images (called from inline onerror)
function makeFallbackDiv(title, cls) {
  const d = document.createElement("div");
  d.className = cls;
  d.textContent = getEmoji(title);
  return d;
}

// ── Song selection ──
function selectSong(songId, containerId, isPractice) {
  // Deselect all
  document.querySelectorAll(`#${containerId} .song-item`).forEach(el => el.classList.remove("selected"));
  // Select clicked
  const el = document.getElementById(`${containerId}-song-${songId}`);
  if (el) el.classList.add("selected");

  const song = SONGS.find(s => s.id === songId);
  if (isPractice) {
    state.practiceSong = song;
    document.getElementById("practice-finish-btn").disabled = false;
  } else {
    state.selectedSong = song;
    document.getElementById("proto-next-btn").disabled = false;
  }
}

// ── CONSENT ──
function handleConsent() {
  if (!document.getElementById("consent-cb").checked) {
    alert("Please confirm that you agree to participate before continuing.");
    return;
  }
  showPage("page-instructions");
}

// ── INSTRUCTIONS ──
function startPractice() {
  showPage("page-practice");
}

// ── PRACTICE ──
function finishPractice() {
  if (!state.practiceSong) { alert("Please select a song first."); return; }
  renderPracticeRecs();
  showPage("page-practice-recs");
}

function renderPracticeRecs() {
  // Show recs for practice song (lyric condition, but hide explanation text)
  const recs = RECOMMENDATIONS[state.practiceSong.id]["lyric"];
  const container = document.getElementById("practice-rec-list");
  container.innerHTML = recs.map(rec => `
    <div class="rec-item">
      <div class="rec-item-top">
        <img class="rec-cover img-loading"
          src="https://coverartarchive.org/release/${rec.mbid}/front-250"
          onerror="this.replaceWith(makeFallbackDiv('${rec.title}','rec-cover-placeholder'))"
          onload="this.classList.remove('img-loading')"
          alt="${rec.title}">
        <div class="rec-info">
          <div class="rec-title">${rec.title}</div>
          <div class="rec-artist">${rec.artist}</div>
        </div>
      </div>
      <p class="rec-explanation-placeholder">Explanation will appear here in the next steps of the study</p>
    </div>
  `).join("");
}

function showPracticeModal() {
  document.getElementById("modal-practice").classList.add("open");
}

// ── CONDITION / PROTOTYPE ──
function startCondition() {
  // Close modal if open
  document.getElementById("modal-practice").classList.remove("open");
  state.selectedSong = null;

  // Render song list fresh
  renderSongList("prototype-song-list", false);

  // Update progress
  const step = state.currentConditionIndex + 1;
  const condType = state.conditionOrder[state.currentConditionIndex];
  const condLabel = CONDITION_LABELS[condType].label;

  document.getElementById("proto-progress-fill").style.width = ((step - 1) / 3 * 100) + "%";
  document.getElementById("proto-progress-label").textContent = `Task ${step} of 3`;
  document.getElementById("proto-condition-label").textContent = condLabel;
  document.getElementById("proto-next-btn").disabled = true;

  showPage("page-prototype");
}

function goToPrototypeRecs() {
  if (!state.selectedSong) { alert("Please select a song first."); return; }

  const step = state.currentConditionIndex + 1;
  const condType = state.conditionOrder[state.currentConditionIndex];
  const condLabel = CONDITION_LABELS[condType].label;
  const recs = RECOMMENDATIONS[state.selectedSong.id][condType];

  // Update progress on recs page
  document.getElementById("proto-recs-progress-fill").style.width = (step / 3 * 100) + "%";
  document.getElementById("proto-recs-progress-label").textContent = `Task ${step} of 3`;
  document.getElementById("proto-recs-condition-label").textContent = condLabel;
  document.getElementById("proto-recs-subtitle").textContent = `Based on: ${state.selectedSong.title}`;

  // Render recs
  const container = document.getElementById("prototype-rec-list");
  container.innerHTML = recs.map(rec => `
    <div class="rec-item">
      <div class="rec-item-top">
        <img class="rec-cover img-loading"
          src="https://coverartarchive.org/release/${rec.mbid}/front-250"
          onerror="this.replaceWith(makeFallbackDiv('${rec.title}','rec-cover-placeholder'))"
          onload="this.classList.remove('img-loading')"
          alt="${rec.title}">
        <div class="rec-info">
          <div class="rec-title">${rec.title}</div>
          <div class="rec-artist">${rec.artist}</div>
        </div>
      </div>
      <p class="rec-explanation">${rec.explanation}</p>
    </div>
  `).join("");

  showPage("page-prototype-recs");
}

// ── QUESTIONNAIRE ──
function goToQuestionnaire() {
  const step = state.currentConditionIndex + 1;
  const condType = state.conditionOrder[state.currentConditionIndex];
  const condLabel = CONDITION_LABELS[condType].label;

  document.getElementById("q-condition-pill").textContent = `Questionnaire ${step} of 3 — ${condLabel}`;

  renderQuestionBlock("transparency-qs", TRANSPARENCY_QUESTIONS, "T");
  renderQuestionBlock("trust-qs", TRUST_QUESTIONS, "R");

  showPage("page-questionnaire");
}

function renderQuestionBlock(containerId, questions, prefix) {
  const c = document.getElementById(containerId);
  c.innerHTML = questions.map((q, i) => `
    <div class="q-item">
      <div class="q-text">${q}</div>
      <div class="likert">
        ${[1,2,3,4,5].map(v => `
          <input type="radio" name="${prefix}_${i}" id="${prefix}_${i}_${v}" value="${v}">
          <label for="${prefix}_${i}_${v}">${v}</label>
        `).join("")}
      </div>
      <div class="likert-labels">
        <span class="likert-label">Strongly disagree</span>
        <span class="likert-label">Strongly agree</span>
      </div>
    </div>
  `).join("");
}

function submitQuestionnaire() {
  // Validate
  const allNames = [
    ...TRANSPARENCY_QUESTIONS.map((_,i) => `T_${i}`),
    ...TRUST_QUESTIONS.map((_,i) => `R_${i}`),
  ];
  for (const name of allNames) {
    if (!document.querySelector(`input[name="${name}"]:checked`)) {
      alert("Please answer all questions before continuing.");
      return;
    }
  }

  // Collect
  const condType = state.conditionOrder[state.currentConditionIndex];
  const tScores = TRANSPARENCY_QUESTIONS.map((_,i) =>
    parseInt(document.querySelector(`input[name="T_${i}"]:checked`).value));
  const rScores = TRUST_QUESTIONS.map((_,i) =>
    parseInt(document.querySelector(`input[name="R_${i}"]:checked`).value));

  state.responses.push({
    conditionIndex: state.currentConditionIndex,
    conditionType: condType,
    selectedSongId: state.selectedSong.id,
    selectedSongTitle: state.selectedSong.title,
    transparency: tScores,
    trust: rScores,
    transparencyMean: avg(tScores),
    trustMean: avg(rScores),
  });

  state.currentConditionIndex++;

  if (state.currentConditionIndex < 3) {
    startCondition();
  } else {
    submitAllData();
    showPage("page-thankyou");
  }
}

// ── DATA SUBMISSION ──
async function submitAllData() {
  const payload = {
    participantId: state.participantId,
    conditionOrder: state.conditionOrder.join("-"),
    durationSeconds: Math.round((Date.now() - state.startTime) / 1000),
    flat: state.responses.map(r => ({
      participantId: state.participantId,
      conditionType: r.conditionType,
      conditionIndex: r.conditionIndex + 1,
      selectedSong: r.selectedSongTitle,
      T1: r.transparency[0], T2: r.transparency[1], T3: r.transparency[2],
      T4: r.transparency[3], T5: r.transparency[4],
      R1: r.trust[0], R2: r.trust[1], R3: r.trust[2], R4: r.trust[3],
      transparencyMean: r.transparencyMean,
      trustMean: r.trustMean,
    }))
  };
  try {
    await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST", mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  } catch (e) {
    console.log("DATA BACKUP:", JSON.stringify(payload));
  }
}

function avg(arr) {
  return Math.round((arr.reduce((a,b) => a+b, 0) / arr.length) * 100) / 100;
}
