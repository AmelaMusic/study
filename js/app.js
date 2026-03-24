// ============================================================
// APP.JS — Study logic, state, navigation, data submission
// ============================================================

// ---- CONFIGURATION ----
// Replace with your Google Apps Script Web App URL (see README)
const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxIUx35lQc8Jw0eaeu_sQ_JggSa7WafT-Zxo7CYWtkH0IB9bMetbZRp28xYOHjG3-x5/exec";

// ---- STATE ----
const state = {
  participantId: null, // auto-generated anonymous ID
  conditionOrder: null, // ["lyric","feature","example"] etc.
  currentConditionIndex: 0, // 0, 1, 2
  selectedSong: null, // song object chosen by participant
  responses: [], // all questionnaire responses
  startTime: null,
};

// ---- INIT ----
document.addEventListener("DOMContentLoaded", () => {
  state.participantId = generateId();
  state.conditionOrder = assignConditionOrder();
  state.startTime = Date.now();
  showPage("page-consent");
});

// ---- ID & COUNTERBALANCING ----
function generateId() {
  return "P" + Math.random().toString(36).substr(2, 8).toUpperCase();
}

function assignConditionOrder() {
  // Use a simple counter stored in localStorage to distribute evenly
  // Falls back to random if localStorage unavailable
  try {
    const count = parseInt(localStorage.getItem("studyCount") || "0");
    localStorage.setItem("studyCount", count + 1);
    return CONDITION_ORDERS[count % CONDITION_ORDERS.length];
  } catch {
    return CONDITION_ORDERS[
      Math.floor(Math.random() * CONDITION_ORDERS.length)
    ];
  }
}

// ---- NAVIGATION ----
function showPage(pageId) {
  document
    .querySelectorAll(".page")
    .forEach((p) => p.classList.remove("active"));
  const page = document.getElementById(pageId);
  if (page) {
    page.classList.add("active");
    window.scrollTo(0, 0);
  }
}

// ---- CONSENT PAGE ----
function handleConsent() {
  const checkbox = document.getElementById("consent-checkbox");
  if (!checkbox.checked) {
    alert("Please confirm that you agree to participate before continuing.");
    return;
  }
  showPage("page-instructions");
}

// ---- INSTRUCTIONS PAGE ----
function startPractice() {
  showPage("page-practice");
}

// ---- PRACTICE PAGE ----
function renderPracticeSongs() {
  const grid = document.getElementById("practice-song-grid");
  if (!grid) return;
  grid.innerHTML = SONGS.map(
    (song) => `
    <div class="song-card" onclick="selectPracticeSong(${song.id}, this)">
      <span class="song-card-emoji">${song.emoji}</span>
      <div class="song-card-info">
        <div class="song-card-title">${song.title}</div>
        <div class="song-card-artist">${song.artist}</div>
      </div>
      <div class="song-card-dot"></div>
    </div>
  `,
  ).join("");
}

let practiceSongSelected = false;
function selectPracticeSong(songId, el) {
  document
    .querySelectorAll("#practice-song-grid .song-card")
    .forEach((c) => c.classList.remove("selected"));
  el.classList.add("selected");
  practiceSongSelected = true;
  document.getElementById("practice-next-btn").disabled = false;
}

function finishPractice() {
  if (!practiceSongSelected) {
    alert("Please select a song to continue.");
    return;
  }
  startCondition();
}

// ---- CONDITION (PROTOTYPE) ----
function startCondition() {
  state.selectedSong = null;
  document.getElementById("prototype-next-btn").disabled = true;
  renderConditionPage();
  showPage("page-prototype");
}

function renderConditionPage() {
  const conditionType = state.conditionOrder[state.currentConditionIndex];
  const conditionInfo = CONDITION_LABELS[conditionType];
  const stepNum = state.currentConditionIndex + 1;

  // Update progress
  updateProgress(stepNum, 3);

  // Update badge
  document.getElementById("condition-badge").textContent =
    `Task ${stepNum} of 3 — ${conditionInfo.label} Explanations`;

  // Update heading
  document.getElementById("prototype-heading").textContent =
    `Select a song you like`;

  // Render song grid
  const grid = document.getElementById("prototype-song-grid");
  grid.innerHTML = SONGS.map(
    (song) => `
    <div class="song-card" onclick="selectPrototypeSong(${song.id}, this)">
      <span class="song-card-emoji">${song.emoji}</span>
      <div class="song-card-info">
        <div class="song-card-title">${song.title}</div>
        <div class="song-card-artist">${song.artist}</div>
      </div>
      <div class="song-card-dot"></div>
    </div>
  `,
  ).join("");

  // Hide recommendations until song selected
  document.getElementById("recommendations-section").style.display = "none";
}

function selectPrototypeSong(songId, el) {
  document
    .querySelectorAll("#prototype-song-grid .song-card")
    .forEach((c) => c.classList.remove("selected"));
  el.classList.add("selected");
  state.selectedSong = SONGS.find((s) => s.id === songId);
  showRecommendations();
}

function showRecommendations() {
  const conditionType = state.conditionOrder[state.currentConditionIndex];
  const recs = RECOMMENDATIONS[state.selectedSong.id][conditionType];
  const conditionInfo = CONDITION_LABELS[conditionType];

  const section = document.getElementById("recommendations-section");
  section.style.display = "block";

  document.getElementById("rec-list").innerHTML = recs
    .map(
      (rec) => `
    <div class="rec-item">
      <div class="rec-item-header">
        <span class="rec-item-emoji">${rec.emoji}</span>
        <div class="rec-item-info">
          <div class="rec-item-title">${rec.title}</div>
          <div class="rec-item-artist">${rec.artist}</div>
        </div>
      </div>
      <div class="explanation-tag">${conditionInfo.label}</div>
      <div class="explanation-text">${rec.explanation}</div>
    </div>
  `,
    )
    .join("");

  document.getElementById("prototype-next-btn").disabled = false;

  // Smooth scroll to recommendations
  setTimeout(
    () => section.scrollIntoView({ behavior: "smooth", block: "start" }),
    100,
  );
}

function goToQuestionnaire() {
  if (!state.selectedSong) {
    alert("Please select a song first.");
    return;
  }
  renderQuestionnaire();
  showPage("page-questionnaire");
}

// ---- QUESTIONNAIRE ----
function renderQuestionnaire() {
  const conditionType = state.conditionOrder[state.currentConditionIndex];
  const conditionInfo = CONDITION_LABELS[conditionType];
  const stepNum = state.currentConditionIndex + 1;

  updateProgress(stepNum, 3);
  document.getElementById("q-condition-badge").textContent =
    `Questionnaire ${stepNum} of 3 — ${conditionInfo.label}`;

  renderQuestionSection("transparency-questions", TRANSPARENCY_QUESTIONS, "T");
  renderQuestionSection("trust-questions", TRUST_QUESTIONS, "R");

  document.getElementById("q-submit-btn").disabled = false;
}

function renderQuestionSection(containerId, questions, prefix) {
  const container = document.getElementById(containerId);
  container.innerHTML = questions
    .map(
      (q, i) => `
    <div class="q-item">
      <div class="q-text">${q}</div>
      <div class="likert">
        ${[1, 2, 3, 4, 5]
          .map(
            (val) => `
          <input type="radio" name="${prefix}_${i}" id="${prefix}_${i}_${val}" value="${val}">
          <label for="${prefix}_${i}_${val}">${val}</label>
        `,
          )
          .join("")}
      </div>
      <div class="likert-labels">
        <span class="likert-label">Strongly disagree</span>
        <span class="likert-label">Strongly agree</span>
      </div>
    </div>
  `,
    )
    .join("");
}

function submitQuestionnaire() {
  // Validate all questions answered
  const allQuestions = [
    ...TRANSPARENCY_QUESTIONS.map((_, i) => `T_${i}`),
    ...TRUST_QUESTIONS.map((_, i) => `R_${i}`),
  ];

  for (const name of allQuestions) {
    const answered = document.querySelector(`input[name="${name}"]:checked`);
    if (!answered) {
      alert("Please answer all questions before continuing.");
      return;
    }
  }

  // Collect responses
  const conditionType = state.conditionOrder[state.currentConditionIndex];
  const transparencyScores = TRANSPARENCY_QUESTIONS.map((_, i) =>
    parseInt(document.querySelector(`input[name="T_${i}"]:checked`).value),
  );
  const trustScores = TRUST_QUESTIONS.map((_, i) =>
    parseInt(document.querySelector(`input[name="R_${i}"]:checked`).value),
  );

  state.responses.push({
    conditionIndex: state.currentConditionIndex,
    conditionType,
    selectedSongId: state.selectedSong.id,
    selectedSongTitle: state.selectedSong.title,
    transparency: transparencyScores,
    trust: trustScores,
    transparencyMean: mean(transparencyScores),
    trustMean: mean(trustScores),
  });

  state.currentConditionIndex++;

  if (state.currentConditionIndex < 3) {
    startCondition();
  } else {
    submitAllData();
    showPage("page-thankyou");
  }
}

// ---- DATA SUBMISSION ----
async function submitAllData() {
  const payload = {
    participantId: state.participantId,
    conditionOrder: state.conditionOrder.join("-"),
    durationSeconds: Math.round((Date.now() - state.startTime) / 1000),
    responses: state.responses,
    // Flat format for easy analysis in Sheets
    flat: state.responses.map((r) => ({
      participantId: state.participantId,
      conditionType: r.conditionType,
      conditionIndex: r.conditionIndex,
      selectedSong: r.selectedSongTitle,
      T1: r.transparency[0],
      T2: r.transparency[1],
      T3: r.transparency[2],
      T4: r.transparency[3],
      T5: r.transparency[4],
      R1: r.trust[0],
      R2: r.trust[1],
      R3: r.trust[2],
      R4: r.trust[3],
      transparencyMean: r.transparencyMean,
      trustMean: r.trustMean,
    })),
  };

  try {
    await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  } catch (err) {
    console.error("Submission error:", err);
    // Study still completes — data stored in console as fallback
    console.log("DATA BACKUP:", JSON.stringify(payload));
  }
}

// ---- HELPERS ----
function mean(arr) {
  return Math.round((arr.reduce((a, b) => a + b, 0) / arr.length) * 100) / 100;
}

function updateProgress(current, total) {
  const pct = Math.round((current / total) * 100);
  document
    .querySelectorAll(".progress-fill")
    .forEach((el) => (el.style.width = pct + "%"));
  document
    .querySelectorAll(".progress-label")
    .forEach((el) => (el.textContent = `Task ${current} of ${total}`));
}

// Initialise practice song grid when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(renderPracticeSongs, 100);
});
