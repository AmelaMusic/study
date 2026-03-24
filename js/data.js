// ============================================================
// DATA.JS — Real songs and explanations
// ============================================================

const SONGS = [
  { id: 1, title: "Rolling in the Deep", artist: "Adele", emoji: "🎵" },
  {
    id: 2,
    title: "I Will Always Love You",
    artist: "Whitney Houston",
    emoji: "🎤",
  },
  {
    id: 3,
    title: "See You Again",
    artist: "Charlie Puth & Wiz Khalifa",
    emoji: "🎸",
  },
  { id: 4, title: "Dancing Queen", artist: "ABBA", emoji: "✨" },
  { id: 5, title: "Blinding Lights", artist: "The Weeknd", emoji: "🌃" },
  { id: 6, title: "Poker Face", artist: "Lady Gaga", emoji: "🃏" },
  { id: 7, title: "Lose Yourself", artist: "Eminem", emoji: "🔥" },
  { id: 8, title: "Bohemian Rhapsody", artist: "Queen", emoji: "👑" },
];

const RECOMMENDATIONS = {
  1: {
    lyric: [
      {
        title: "Someone Like You",
        artist: "Adele",
        emoji: "🎵",
        explanation:
          "Recommended because its lyrics express heartbreak, like the song you liked.",
      },
      {
        title: "Fix You",
        artist: "Coldplay",
        emoji: "💛",
        explanation:
          "Recommended because its lyrics focus on healing, like the song you liked.",
      },
      {
        title: "All of Me",
        artist: "John Legend",
        emoji: "🎹",
        explanation:
          "Recommended because its lyrics express deep love, like the song you liked.",
      },
      {
        title: "Stay",
        artist: "Rihanna",
        emoji: "🌊",
        explanation:
          "Recommended because its lyrics express vulnerability, like the song you liked.",
      },
    ],
    feature: [
      {
        title: "Someone Like You",
        artist: "Adele",
        emoji: "🎵",
        explanation:
          "Recommended because it's a piano-driven pop ballad, like the song you liked.",
      },
      {
        title: "Fix You",
        artist: "Coldplay",
        emoji: "💛",
        explanation:
          "Recommended because it has a slow tempo, like the song you liked.",
      },
      {
        title: "All of Me",
        artist: "John Legend",
        emoji: "🎹",
        explanation:
          "Recommended because its genre is similar to the genre of the song you liked.",
      },
      {
        title: "Stay",
        artist: "Rihanna",
        emoji: "🌊",
        explanation:
          "Recommended because it's a 2010s pop ballad, like the song you liked.",
      },
    ],
    example: [
      {
        title: "Someone Like You",
        artist: "Adele",
        emoji: "🎵",
        explanation: "Recommended because you like Adele.",
      },
      {
        title: "Fix You",
        artist: "Coldplay",
        emoji: "💛",
        explanation: "Recommended because you liked Rolling in the Deep.",
      },
      {
        title: "All of Me",
        artist: "John Legend",
        emoji: "🎹",
        explanation:
          "Recommended because you liked Rolling in the Deep by Adele.",
      },
      {
        title: "Stay",
        artist: "Rihanna",
        emoji: "🌊",
        explanation: "Recommended because you selected Rolling in the Deep.",
      },
    ],
  },

  2: {
    lyric: [
      {
        title: "My Heart Will Go On",
        artist: "Celine Dion",
        emoji: "🚢",
        explanation:
          "Recommended because its lyrics express enduring love, like the song you liked.",
      },
      {
        title: "Because You Loved Me",
        artist: "Celine Dion",
        emoji: "💖",
        explanation:
          "Recommended because its lyrics express gratitude, like the song you liked.",
      },
      {
        title: "Vision of Love",
        artist: "Mariah Carey",
        emoji: "🌹",
        explanation:
          "Recommended because its lyrics express romantic longing, like the song you liked.",
      },
      {
        title: "Un-break My Heart",
        artist: "Toni Braxton",
        emoji: "💔",
        explanation:
          "Recommended because its lyrics express heartbreak, like the song you liked.",
      },
    ],
    feature: [
      {
        title: "My Heart Will Go On",
        artist: "Celine Dion",
        emoji: "🚢",
        explanation:
          "Recommended because it's an orchestral ballad, like the song you liked.",
      },
      {
        title: "Because You Loved Me",
        artist: "Celine Dion",
        emoji: "💖",
        explanation:
          "Recommended because it has a slow tempo, like the song you liked.",
      },
      {
        title: "Vision of Love",
        artist: "Mariah Carey",
        emoji: "🌹",
        explanation:
          "Recommended because its genre is similar to the genre of the song you liked.",
      },
      {
        title: "Un-break My Heart",
        artist: "Toni Braxton",
        emoji: "💔",
        explanation:
          "Recommended because it's a 1990s R&B, like the song you liked.",
      },
    ],
    example: [
      {
        title: "My Heart Will Go On",
        artist: "Celine Dion",
        emoji: "🚢",
        explanation: "Recommended because you like Whitney Houston.",
      },
      {
        title: "Because You Loved Me",
        artist: "Celine Dion",
        emoji: "💖",
        explanation: "Recommended because you liked I Will Always Love You.",
      },
      {
        title: "Vision of Love",
        artist: "Mariah Carey",
        emoji: "🌹",
        explanation:
          "Recommended because you liked I Will Always Love You by Whitney Houston.",
      },
      {
        title: "Un-break My Heart",
        artist: "Toni Braxton",
        emoji: "💔",
        explanation: "Recommended because you liked I Will Always Love You.",
      },
    ],
  },

  3: {
    lyric: [
      {
        title: "When I Was Your Man",
        artist: "Bruno Mars",
        emoji: "🎹",
        explanation:
          "Recommended because its lyrics express regret, like the song you liked.",
      },
      {
        title: "Let Her Go",
        artist: "Passenger",
        emoji: "🍂",
        explanation:
          "Recommended because its lyrics express loss, like the song you liked.",
      },
      {
        title: "Stay",
        artist: "Rihanna",
        emoji: "🌊",
        explanation:
          "Recommended because its lyrics express vulnerability, like the song you liked.",
      },
      {
        title: "Apologize",
        artist: "OneRepublic",
        emoji: "🕐",
        explanation:
          "Recommended because its lyrics express remorse, like the song you liked.",
      },
    ],
    feature: [
      {
        title: "When I Was Your Man",
        artist: "Bruno Mars",
        emoji: "🎹",
        explanation:
          "Recommended because it's a piano-driven pop ballad, like the song you liked.",
      },
      {
        title: "Let Her Go",
        artist: "Passenger",
        emoji: "🍂",
        explanation:
          "Recommended because it has a slow tempo, like the song you liked.",
      },
      {
        title: "Stay",
        artist: "Rihanna",
        emoji: "🌊",
        explanation:
          "Recommended because its genre is similar to the genre of the song you liked.",
      },
      {
        title: "Apologize",
        artist: "OneRepublic",
        emoji: "🕐",
        explanation:
          "Recommended because it's a 2010s pop ballad, like the song you liked.",
      },
    ],
    example: [
      {
        title: "When I Was Your Man",
        artist: "Bruno Mars",
        emoji: "🎹",
        explanation: "Recommended because you like Charlie Puth.",
      },
      {
        title: "Let Her Go",
        artist: "Passenger",
        emoji: "🍂",
        explanation: "Recommended because you liked See You Again.",
      },
      {
        title: "Stay",
        artist: "Rihanna",
        emoji: "🌊",
        explanation:
          "Recommended because you liked See You Again by Charlie Puth.",
      },
      {
        title: "Apologize",
        artist: "OneRepublic",
        emoji: "🕐",
        explanation: "Recommended because you selected See You Again.",
      },
    ],
  },

  4: {
    lyric: [
      {
        title: "Stayin' Alive",
        artist: "Bee Gees",
        emoji: "🕺",
        explanation:
          "Recommended because its lyrics express empowerment, like the song you liked.",
      },
      {
        title: "Super Trouper",
        artist: "ABBA",
        emoji: "🌟",
        explanation:
          "Recommended because its lyrics express joy, like the song you liked.",
      },
      {
        title: "Le Freak",
        artist: "Chic",
        emoji: "🎷",
        explanation:
          "Recommended because its lyrics celebrate fun and dancing, like the song you liked.",
      },
      {
        title: "I Will Survive",
        artist: "Gloria Gaynor",
        emoji: "💪",
        explanation:
          "Recommended because its lyrics express resilience, like the song you liked.",
      },
    ],
    feature: [
      {
        title: "Stayin' Alive",
        artist: "Bee Gees",
        emoji: "🕺",
        explanation:
          "Recommended because it's a disco-driven dance track, like the song you liked.",
      },
      {
        title: "Super Trouper",
        artist: "ABBA",
        emoji: "🌟",
        explanation:
          "Recommended because it has a catchy tempo, like the song you liked.",
      },
      {
        title: "Le Freak",
        artist: "Chic",
        emoji: "🎷",
        explanation:
          "Recommended because its genre is similar to the genre of the song you liked.",
      },
      {
        title: "I Will Survive",
        artist: "Gloria Gaynor",
        emoji: "💪",
        explanation:
          "Recommended because it's a 1970s disco ballad, like the song you liked.",
      },
    ],
    example: [
      {
        title: "Stayin' Alive",
        artist: "Bee Gees",
        emoji: "🕺",
        explanation: "Recommended because you like ABBA.",
      },
      {
        title: "Super Trouper",
        artist: "ABBA",
        emoji: "🌟",
        explanation: "Recommended because you liked Dancing Queen.",
      },
      {
        title: "Le Freak",
        artist: "Chic",
        emoji: "🎷",
        explanation: "Recommended because you liked Dancing Queen by ABBA.",
      },
      {
        title: "I Will Survive",
        artist: "Gloria Gaynor",
        emoji: "💪",
        explanation: "Recommended because you selected Dancing Queen.",
      },
    ],
  },

  5: {
    lyric: [
      {
        title: "Can't Feel My Face",
        artist: "The Weeknd",
        emoji: "🌙",
        explanation:
          "Recommended because its lyrics express desire, like the song you liked.",
      },
      {
        title: "Don't Start Now",
        artist: "Dua Lipa",
        emoji: "💃",
        explanation:
          "Recommended because its lyrics express independence, like the song you liked.",
      },
      {
        title: "Levitating",
        artist: "Dua Lipa",
        emoji: "🚀",
        explanation:
          "Recommended because its lyrics express joy, like the song you liked.",
      },
      {
        title: "Say So",
        artist: "Doja Cat",
        emoji: "😎",
        explanation:
          "Recommended because its lyrics express energy, like the song you liked.",
      },
    ],
    feature: [
      {
        title: "Can't Feel My Face",
        artist: "The Weeknd",
        emoji: "🌙",
        explanation:
          "Recommended because it's an upbeat synth-pop track, like the song you liked.",
      },
      {
        title: "Don't Start Now",
        artist: "Dua Lipa",
        emoji: "💃",
        explanation:
          "Recommended because it has a fast tempo, like the song you liked.",
      },
      {
        title: "Levitating",
        artist: "Dua Lipa",
        emoji: "🚀",
        explanation:
          "Recommended because its genre is similar to the genre of the song you liked.",
      },
      {
        title: "Say So",
        artist: "Doja Cat",
        emoji: "😎",
        explanation:
          "Recommended because it's a 2019s pop track, like the song you liked.",
      },
    ],
    example: [
      {
        title: "Can't Feel My Face",
        artist: "The Weeknd",
        emoji: "🌙",
        explanation: "Recommended because you like The Weeknd.",
      },
      {
        title: "Don't Start Now",
        artist: "Dua Lipa",
        emoji: "💃",
        explanation: "Recommended because you liked Blinding Lights.",
      },
      {
        title: "Levitating",
        artist: "Dua Lipa",
        emoji: "🚀",
        explanation:
          "Recommended because you liked Blinding Lights by The Weeknd.",
      },
      {
        title: "Say So",
        artist: "Doja Cat",
        emoji: "😎",
        explanation: "Recommended because you selected Blinding Lights.",
      },
    ],
  },

  6: {
    lyric: [
      {
        title: "Just Dance",
        artist: "Lady Gaga",
        emoji: "🎉",
        explanation:
          "Recommended because its lyrics express partying and fun, like the song you liked.",
      },
      {
        title: "Toxic",
        artist: "Britney Spears",
        emoji: "⚡",
        explanation:
          "Recommended because its lyrics express desire, like the song you liked.",
      },
      {
        title: "I Gotta Feeling",
        artist: "Black Eyed Peas",
        emoji: "🙌",
        explanation:
          "Recommended because its lyrics celebrate excitement, like the song you liked.",
      },
      {
        title: "Bad Romance",
        artist: "Lady Gaga",
        emoji: "🖤",
        explanation:
          "Recommended because its lyrics express intensity, like the song you liked.",
      },
    ],
    feature: [
      {
        title: "Just Dance",
        artist: "Lady Gaga",
        emoji: "🎉",
        explanation:
          "Recommended because it's an electronic dance-pop track, like the song you liked.",
      },
      {
        title: "Toxic",
        artist: "Britney Spears",
        emoji: "⚡",
        explanation:
          "Recommended because it has a fast tempo, like the song you liked.",
      },
      {
        title: "I Gotta Feeling",
        artist: "Black Eyed Peas",
        emoji: "🙌",
        explanation:
          "Recommended because its genre is similar to the genre of the song you liked.",
      },
      {
        title: "Bad Romance",
        artist: "Lady Gaga",
        emoji: "🖤",
        explanation:
          "Recommended because it's a 2000s dance-pop track, like the song you liked.",
      },
    ],
    example: [
      {
        title: "Just Dance",
        artist: "Lady Gaga",
        emoji: "🎉",
        explanation: "Recommended because you like Lady Gaga.",
      },
      {
        title: "Toxic",
        artist: "Britney Spears",
        emoji: "⚡",
        explanation: "Recommended because you liked Poker Face.",
      },
      {
        title: "I Gotta Feeling",
        artist: "Black Eyed Peas",
        emoji: "🙌",
        explanation: "Recommended because you liked Poker Face by Lady Gaga.",
      },
      {
        title: "Bad Romance",
        artist: "Lady Gaga",
        emoji: "🖤",
        explanation: "Recommended because you selected Poker Face.",
      },
    ],
  },

  7: {
    lyric: [
      {
        title: "Not Afraid",
        artist: "Eminem",
        emoji: "🔥",
        explanation:
          "Recommended because its lyrics express determination, like the song you liked.",
      },
      {
        title: "Till I Collapse",
        artist: "Eminem",
        emoji: "💥",
        explanation:
          "Recommended because its lyrics express perseverance, like the song you liked.",
      },
      {
        title: "Numb/Encore",
        artist: "Jay-Z & Linkin Park",
        emoji: "🎸",
        explanation:
          "Recommended because its lyrics express struggle, like the song you liked.",
      },
      {
        title: "Remember the Name",
        artist: "Fort Minor",
        emoji: "🏆",
        explanation:
          "Recommended because its lyrics express ambition, like the song you liked.",
      },
    ],
    feature: [
      {
        title: "Not Afraid",
        artist: "Eminem",
        emoji: "🔥",
        explanation:
          "Recommended because it's a rap/hip hop track, like the song you liked.",
      },
      {
        title: "Till I Collapse",
        artist: "Eminem",
        emoji: "💥",
        explanation:
          "Recommended because it has a driving tempo, like the song you liked.",
      },
      {
        title: "Numb/Encore",
        artist: "Jay-Z & Linkin Park",
        emoji: "🎸",
        explanation:
          "Recommended because its genre is similar to the genre of the song you liked.",
      },
      {
        title: "Remember the Name",
        artist: "Fort Minor",
        emoji: "🏆",
        explanation:
          "Recommended because it's a 2000s hip hop track, like the song you liked.",
      },
    ],
    example: [
      {
        title: "Not Afraid",
        artist: "Eminem",
        emoji: "🔥",
        explanation: "Recommended because you like Eminem.",
      },
      {
        title: "Till I Collapse",
        artist: "Eminem",
        emoji: "💥",
        explanation: "Recommended because you liked Lose Yourself.",
      },
      {
        title: "Numb/Encore",
        artist: "Jay-Z & Linkin Park",
        emoji: "🎸",
        explanation: "Recommended because you liked Lose Yourself by Eminem.",
      },
      {
        title: "Remember the Name",
        artist: "Fort Minor",
        emoji: "🏆",
        explanation: "Recommended because you selected Lose Yourself.",
      },
    ],
  },

  8: {
    lyric: [
      {
        title: "Somebody to Love",
        artist: "Queen",
        emoji: "👑",
        explanation:
          "Recommended because its lyrics express longing, like the song you liked.",
      },
      {
        title: "Stairway to Heaven",
        artist: "Led Zeppelin",
        emoji: "🌤️",
        explanation:
          "Recommended because its lyrics tell a story, like the song you liked.",
      },
      {
        title: "Hotel California",
        artist: "Eagles",
        emoji: "🏨",
        explanation:
          "Recommended because its lyrics convey mystery, like the song you liked.",
      },
      {
        title: "Comfortably Numb",
        artist: "Pink Floyd",
        emoji: "🌀",
        explanation:
          "Recommended because its lyrics express isolation, like the song you liked.",
      },
    ],
    feature: [
      {
        title: "Somebody to Love",
        artist: "Queen",
        emoji: "👑",
        explanation:
          "Recommended because it's a rock ballad, like the song you liked.",
      },
      {
        title: "Stairway to Heaven",
        artist: "Led Zeppelin",
        emoji: "🌤️",
        explanation:
          "Recommended because it has a moderate tempo, like the song you liked.",
      },
      {
        title: "Hotel California",
        artist: "Eagles",
        emoji: "🏨",
        explanation:
          "Recommended because its genre is similar to the genre of the song you liked.",
      },
      {
        title: "Comfortably Numb",
        artist: "Pink Floyd",
        emoji: "🌀",
        explanation:
          "Recommended because it's a 1970s progressive rock track, like the song you liked.",
      },
    ],
    example: [
      {
        title: "Somebody to Love",
        artist: "Queen",
        emoji: "👑",
        explanation: "Recommended because you like Queen.",
      },
      {
        title: "Stairway to Heaven",
        artist: "Led Zeppelin",
        emoji: "🌤️",
        explanation: "Recommended because you liked Bohemian Rhapsody.",
      },
      {
        title: "Hotel California",
        artist: "Eagles",
        emoji: "🏨",
        explanation:
          "Recommended because you liked Bohemian Rhapsody by Queen.",
      },
      {
        title: "Comfortably Numb",
        artist: "Pink Floyd",
        emoji: "🌀",
        explanation: "Recommended because you selected Bohemian Rhapsody.",
      },
    ],
  },
};

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

const CONDITION_ORDERS = [
  ["lyric", "feature", "example"],
  ["lyric", "example", "feature"],
  ["feature", "lyric", "example"],
  ["feature", "example", "lyric"],
  ["example", "lyric", "feature"],
  ["example", "feature", "lyric"],
];

const CONDITION_LABELS = {
  lyric: {
    label: "Lyric-based",
    description: "Recommendations explained using song lyrics",
  },
  feature: {
    label: "Feature-based",
    description: "Recommendations explained using audio features",
  },
  example: {
    label: "Example-based",
    description: "Recommendations explained using similar listeners",
  },
};
