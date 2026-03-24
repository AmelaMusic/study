// ============================================================
// DATA.JS — Replace placeholders with your real content
// ============================================================

// The 8 songs participants can choose from
const SONGS = [
  { id: 1, title: "Song Title 1", artist: "Artist 1", emoji: "🎵" },
  { id: 2, title: "Song Title 2", artist: "Artist 2", emoji: "🎸" },
  { id: 3, title: "Song Title 3", artist: "Artist 3", emoji: "🎹" },
  { id: 4, title: "Song Title 4", artist: "Artist 4", emoji: "🎤" },
  { id: 5, title: "Song Title 5", artist: "Artist 5", emoji: "🥁" },
  { id: 6, title: "Song Title 6", artist: "Artist 6", emoji: "🎺" },
  { id: 7, title: "Song Title 7", artist: "Artist 7", emoji: "🎻" },
  { id: 8, title: "Song Title 8", artist: "Artist 8", emoji: "🎷" },
];

// For each song, define 3 recommended songs per explanation type
// explanationType: "lyric" | "feature" | "example"
const RECOMMENDATIONS = {
  1: {
    lyric: [
      {
        title: "Recommended Song A",
        artist: "Artist A",
        emoji: "🎵",
        explanation: "Lyric-based explanation placeholder: This song shares lyrical themes of [theme] with the song you liked."
      },
      {
        title: "Recommended Song B",
        artist: "Artist B",
        emoji: "🎸",
        explanation: "Lyric-based explanation placeholder: The lyrics of this song evoke similar emotions around [emotion]."
      },
      {
        title: "Recommended Song C",
        artist: "Artist C",
        emoji: "🎹",
        explanation: "Lyric-based explanation placeholder: Both songs use imagery related to [topic] in their lyrics."
      },
    ],
    feature: [
      {
        title: "Recommended Song A",
        artist: "Artist A",
        emoji: "🎵",
        explanation: "Feature-based explanation placeholder: This song has a similar tempo (X BPM) and energy level to the song you liked."
      },
      {
        title: "Recommended Song B",
        artist: "Artist B",
        emoji: "🎸",
        explanation: "Feature-based explanation placeholder: Both songs share the same key and acoustic characteristics."
      },
      {
        title: "Recommended Song C",
        artist: "Artist C",
        emoji: "🎹",
        explanation: "Feature-based explanation placeholder: This song matches the danceability and valence of your liked song."
      },
    ],
    example: [
      {
        title: "Recommended Song A",
        artist: "Artist A",
        emoji: "🎵",
        explanation: "Example-based explanation placeholder: Users who liked Song Title 1 also enjoyed this song."
      },
      {
        title: "Recommended Song B",
        artist: "Artist B",
        emoji: "🎸",
        explanation: "Example-based explanation placeholder: This song is popular among listeners with similar taste profiles."
      },
      {
        title: "Recommended Song C",
        artist: "Artist C",
        emoji: "🎹",
        explanation: "Example-based explanation placeholder: Fans of Song Title 1 frequently add this to their playlists."
      },
    ],
  },
  // ---- Repeat the same structure for songs 2–8 ----
  // Copy and paste the block above, changing the key (2, 3, ... 8)
  // and updating the explanation texts for each song.
  2: {
    lyric: [
      { title: "Recommended Song A", artist: "Artist A", emoji: "🎵", explanation: "Lyric-based placeholder for song 2." },
      { title: "Recommended Song B", artist: "Artist B", emoji: "🎸", explanation: "Lyric-based placeholder for song 2." },
      { title: "Recommended Song C", artist: "Artist C", emoji: "🎹", explanation: "Lyric-based placeholder for song 2." },
    ],
    feature: [
      { title: "Recommended Song A", artist: "Artist A", emoji: "🎵", explanation: "Feature-based placeholder for song 2." },
      { title: "Recommended Song B", artist: "Artist B", emoji: "🎸", explanation: "Feature-based placeholder for song 2." },
      { title: "Recommended Song C", artist: "Artist C", emoji: "🎹", explanation: "Feature-based placeholder for song 2." },
    ],
    example: [
      { title: "Recommended Song A", artist: "Artist A", emoji: "🎵", explanation: "Example-based placeholder for song 2." },
      { title: "Recommended Song B", artist: "Artist B", emoji: "🎸", explanation: "Example-based placeholder for song 2." },
      { title: "Recommended Song C", artist: "Artist C", emoji: "🎹", explanation: "Example-based placeholder for song 2." },
    ],
  },
  3: {
    lyric: [
      { title: "Recommended Song A", artist: "Artist A", emoji: "🎵", explanation: "Lyric-based placeholder for song 3." },
      { title: "Recommended Song B", artist: "Artist B", emoji: "🎸", explanation: "Lyric-based placeholder for song 3." },
      { title: "Recommended Song C", artist: "Artist C", emoji: "🎹", explanation: "Lyric-based placeholder for song 3." },
    ],
    feature: [
      { title: "Recommended Song A", artist: "Artist A", emoji: "🎵", explanation: "Feature-based placeholder for song 3." },
      { title: "Recommended Song B", artist: "Artist B", emoji: "🎸", explanation: "Feature-based placeholder for song 3." },
      { title: "Recommended Song C", artist: "Artist C", emoji: "🎹", explanation: "Feature-based placeholder for song 3." },
    ],
    example: [
      { title: "Recommended Song A", artist: "Artist A", emoji: "🎵", explanation: "Example-based placeholder for song 3." },
      { title: "Recommended Song B", artist: "Artist B", emoji: "🎸", explanation: "Example-based placeholder for song 3." },
      { title: "Recommended Song C", artist: "Artist C", emoji: "🎹", explanation: "Example-based placeholder for song 3." },
    ],
  },
  4: {
    lyric: [
      { title: "Recommended Song A", artist: "Artist A", emoji: "🎵", explanation: "Lyric-based placeholder for song 4." },
      { title: "Recommended Song B", artist: "Artist B", emoji: "🎸", explanation: "Lyric-based placeholder for song 4." },
      { title: "Recommended Song C", artist: "Artist C", emoji: "🎹", explanation: "Lyric-based placeholder for song 4." },
    ],
    feature: [
      { title: "Recommended Song A", artist: "Artist A", emoji: "🎵", explanation: "Feature-based placeholder for song 4." },
      { title: "Recommended Song B", artist: "Artist B", emoji: "🎸", explanation: "Feature-based placeholder for song 4." },
      { title: "Recommended Song C", artist: "Artist C", emoji: "🎹", explanation: "Feature-based placeholder for song 4." },
    ],
    example: [
      { title: "Recommended Song A", artist: "Artist A", emoji: "🎵", explanation: "Example-based placeholder for song 4." },
      { title: "Recommended Song B", artist: "Artist B", emoji: "🎸", explanation: "Example-based placeholder for song 4." },
      { title: "Recommended Song C", artist: "Artist C", emoji: "🎹", explanation: "Example-based placeholder for song 4." },
    ],
  },
  5: {
    lyric: [
      { title: "Recommended Song A", artist: "Artist A", emoji: "🎵", explanation: "Lyric-based placeholder for song 5." },
      { title: "Recommended Song B", artist: "Artist B", emoji: "🎸", explanation: "Lyric-based placeholder for song 5." },
      { title: "Recommended Song C", artist: "Artist C", emoji: "🎹", explanation: "Lyric-based placeholder for song 5." },
    ],
    feature: [
      { title: "Recommended Song A", artist: "Artist A", emoji: "🎵", explanation: "Feature-based placeholder for song 5." },
      { title: "Recommended Song B", artist: "Artist B", emoji: "🎸", explanation: "Feature-based placeholder for song 5." },
      { title: "Recommended Song C", artist: "Artist C", emoji: "🎹", explanation: "Feature-based placeholder for song 5." },
    ],
    example: [
      { title: "Recommended Song A", artist: "Artist A", emoji: "🎵", explanation: "Example-based placeholder for song 5." },
      { title: "Recommended Song B", artist: "Artist B", emoji: "🎸", explanation: "Example-based placeholder for song 5." },
      { title: "Recommended Song C", artist: "Artist C", emoji: "🎹", explanation: "Example-based placeholder for song 5." },
    ],
  },
  6: {
    lyric: [
      { title: "Recommended Song A", artist: "Artist A", emoji: "🎵", explanation: "Lyric-based placeholder for song 6." },
      { title: "Recommended Song B", artist: "Artist B", emoji: "🎸", explanation: "Lyric-based placeholder for song 6." },
      { title: "Recommended Song C", artist: "Artist C", emoji: "🎹", explanation: "Lyric-based placeholder for song 6." },
    ],
    feature: [
      { title: "Recommended Song A", artist: "Artist A", emoji: "🎵", explanation: "Feature-based placeholder for song 6." },
      { title: "Recommended Song B", artist: "Artist B", emoji: "🎸", explanation: "Feature-based placeholder for song 6." },
      { title: "Recommended Song C", artist: "Artist C", emoji: "🎹", explanation: "Feature-based placeholder for song 6." },
    ],
    example: [
      { title: "Recommended Song A", artist: "Artist A", emoji: "🎵", explanation: "Example-based placeholder for song 6." },
      { title: "Recommended Song B", artist: "Artist B", emoji: "🎸", explanation: "Example-based placeholder for song 6." },
      { title: "Recommended Song C", artist: "Artist C", emoji: "🎹", explanation: "Example-based placeholder for song 6." },
    ],
  },
  7: {
    lyric: [
      { title: "Recommended Song A", artist: "Artist A", emoji: "🎵", explanation: "Lyric-based placeholder for song 7." },
      { title: "Recommended Song B", artist: "Artist B", emoji: "🎸", explanation: "Lyric-based placeholder for song 7." },
      { title: "Recommended Song C", artist: "Artist C", emoji: "🎹", explanation: "Lyric-based placeholder for song 7." },
    ],
    feature: [
      { title: "Recommended Song A", artist: "Artist A", emoji: "🎵", explanation: "Feature-based placeholder for song 7." },
      { title: "Recommended Song B", artist: "Artist B", emoji: "🎸", explanation: "Feature-based placeholder for song 7." },
      { title: "Recommended Song C", artist: "Artist C", emoji: "🎹", explanation: "Feature-based placeholder for song 7." },
    ],
    example: [
      { title: "Recommended Song A", artist: "Artist A", emoji: "🎵", explanation: "Example-based placeholder for song 7." },
      { title: "Recommended Song B", artist: "Artist B", emoji: "🎸", explanation: "Example-based placeholder for song 7." },
      { title: "Recommended Song C", artist: "Artist C", emoji: "🎹", explanation: "Example-based placeholder for song 7." },
    ],
  },
  8: {
    lyric: [
      { title: "Recommended Song A", artist: "Artist A", emoji: "🎵", explanation: "Lyric-based placeholder for song 8." },
      { title: "Recommended Song B", artist: "Artist B", emoji: "🎸", explanation: "Lyric-based placeholder for song 8." },
      { title: "Recommended Song C", artist: "Artist C", emoji: "🎹", explanation: "Lyric-based placeholder for song 8." },
    ],
    feature: [
      { title: "Recommended Song A", artist: "Artist A", emoji: "🎵", explanation: "Feature-based placeholder for song 8." },
      { title: "Recommended Song B", artist: "Artist B", emoji: "🎸", explanation: "Feature-based placeholder for song 8." },
      { title: "Recommended Song C", artist: "Artist C", emoji: "🎹", explanation: "Feature-based placeholder for song 8." },
    ],
    example: [
      { title: "Recommended Song A", artist: "Artist A", emoji: "🎵", explanation: "Example-based placeholder for song 8." },
      { title: "Recommended Song B", artist: "Artist B", emoji: "🎸", explanation: "Example-based placeholder for song 8." },
      { title: "Recommended Song C", artist: "Artist C", emoji: "🎹", explanation: "Example-based placeholder for song 8." },
    ],
  },
};

// Questionnaire questions
const TRANSPARENCY_QUESTIONS = [
  "I understood which song characteristics were considered to generate recommendations.",
  "I understood why the songs were recommended to me.",
  "I understood why the system determined that the recommended songs would suit me.",
  "I can tell how well the recommendations match my preferences.",
  "The system provided information to understand why the songs were recommended.",
];

const TRUST_QUESTIONS = [
  "I trust the song recommendation based on the explanation.",
  "I am confident in the music recommender system based on the explanation provided.",
  "The system is very reliable. I can count on it to give good recommendations.",
  "I feel safe that when I rely on the system, I will get good song recommendations.",
];

// Counterbalancing: 6 possible orderings of 3 conditions
// Participants are assigned to one of these based on their order of arrival
const CONDITION_ORDERS = [
  ["lyric", "feature", "example"],
  ["lyric", "example", "feature"],
  ["feature", "lyric", "example"],
  ["feature", "example", "lyric"],
  ["example", "lyric", "feature"],
  ["example", "feature", "lyric"],
];

const CONDITION_LABELS = {
  lyric:   { label: "Lyric-based",   description: "Recommendations explained using song lyrics" },
  feature: { label: "Feature-based", description: "Recommendations explained using audio features" },
  example: { label: "Example-based", description: "Recommendations explained using similar listeners" },
};
