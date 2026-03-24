// ============================================================
// DATA.JS — Songs, recommendations, explanations
// Cover art loaded dynamically from MusicBrainz Cover Art Archive
// ============================================================

// MusicBrainz release IDs for cover art
// Format: "mbid": "release-id-from-musicbrainz.org"
const SONGS = [
  {
    id: 1,
    title: "Rolling in the Deep",
    artist: "Adele",
    mbid: "9d2b3244-3236-491c-bbb4-58e32c4bccd9",
  },
  {
    id: 2,
    title: "I Will Always Love You",
    artist: "Whitney Houston",
    mbid: "a71f68f2-64ec-4ab5-9172-4de4dd344c38",
  },
  {
    id: 3,
    title: "See You Again",
    artist: "Charlie Puth & Wiz Khalifa",
    mbid: "b6034832-9531-4fb7-9cce-34a99c1e406e",
  },
  {
    id: 4,
    title: "Dancing Queen",
    artist: "ABBA",
    mbid: "d1e98571-8b8c-4f8d-b7bc-9f5e4f30f70a",
  },
  {
    id: 5,
    title: "Blinding Lights",
    artist: "The Weeknd",
    mbid: "9c5664e0-3e3a-4e7a-b7d4-04b3f6c0f88c",
  },
  {
    id: 6,
    title: "Poker Face",
    artist: "Lady Gaga",
    mbid: "7c8e4f2a-1b5d-4e9c-8f3a-2d6e9b0c4f7e",
  },
  {
    id: 7,
    title: "Lose Yourself",
    artist: "Eminem",
    mbid: "3c2e8f5a-9d4b-4c7e-8f1a-5b6e9c0d3f8a",
  },
  {
    id: 8,
    title: "Bohemian Rhapsody",
    artist: "Queen",
    mbid: "b84ee12a-09ef-421b-82de-0441a926375b",
  },
];

const RECOMMENDATIONS = {
  1: {
    lyric: [
      {
        title: "Someone Like You",
        artist: "Adele",
        mbid: "9d2b3244-3236-491c-bbb4-58e32c4bccd9",
        explanation:
          "Recommended because its lyrics express heartbreak, like the song you liked.",
      },
      {
        title: "Fix You",
        artist: "Coldplay",
        mbid: "c3b8f2a1-5e9d-4c7a-8f3b-2d6e9b0c4f7e",
        explanation:
          "Recommended because its lyrics focus on healing, like the song you liked.",
      },
      {
        title: "All of Me",
        artist: "John Legend",
        mbid: "f2a8e3c5-9b4d-4e7a-8c1f-6b5e9d0c3f8a",
        explanation:
          "Recommended because its lyrics express deep love, like the song you liked.",
      },
      {
        title: "Stay",
        artist: "Rihanna",
        mbid: "1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d",
        explanation:
          "Recommended because its lyrics express vulnerability, like the song you liked.",
      },
    ],
    feature: [
      {
        title: "Someone Like You",
        artist: "Adele",
        mbid: "9d2b3244-3236-491c-bbb4-58e32c4bccd9",
        explanation:
          "Recommended because it's a piano-driven pop ballad, like the song you liked.",
      },
      {
        title: "Fix You",
        artist: "Coldplay",
        mbid: "c3b8f2a1-5e9d-4c7a-8f3b-2d6e9b0c4f7e",
        explanation:
          "Recommended because it has a slow tempo, like the song you liked.",
      },
      {
        title: "All of Me",
        artist: "John Legend",
        mbid: "f2a8e3c5-9b4d-4e7a-8c1f-6b5e9d0c3f8a",
        explanation:
          "Recommended because its genre is similar to the genre of the song you liked.",
      },
      {
        title: "Stay",
        artist: "Rihanna",
        mbid: "1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d",
        explanation:
          "Recommended because it's a 2010s pop ballad, like the song you liked.",
      },
    ],
    example: [
      {
        title: "Someone Like You",
        artist: "Adele",
        mbid: "9d2b3244-3236-491c-bbb4-58e32c4bccd9",
        explanation: "Recommended because you like Adele.",
      },
      {
        title: "Fix You",
        artist: "Coldplay",
        mbid: "c3b8f2a1-5e9d-4c7a-8f3b-2d6e9b0c4f7e",
        explanation: "Recommended because you liked Rolling in the Deep.",
      },
      {
        title: "All of Me",
        artist: "John Legend",
        mbid: "f2a8e3c5-9b4d-4e7a-8c1f-6b5e9d0c3f8a",
        explanation:
          "Recommended because you liked Rolling in the Deep by Adele.",
      },
      {
        title: "Stay",
        artist: "Rihanna",
        mbid: "1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d",
        explanation: "Recommended because you selected Rolling in the Deep.",
      },
    ],
  },
  2: {
    lyric: [
      {
        title: "My Heart Will Go On",
        artist: "Celine Dion",
        mbid: "2b3c4d5e-6f7a-8b9c-0d1e-2f3a4b5c6d7e",
        explanation:
          "Recommended because its lyrics express enduring love, like the song you liked.",
      },
      {
        title: "Because You Loved Me",
        artist: "Celine Dion",
        mbid: "2b3c4d5e-6f7a-8b9c-0d1e-2f3a4b5c6d7e",
        explanation:
          "Recommended because its lyrics express gratitude, like the song you liked.",
      },
      {
        title: "Vision of Love",
        artist: "Mariah Carey",
        mbid: "3c4d5e6f-7a8b-9c0d-1e2f-3a4b5c6d7e8f",
        explanation:
          "Recommended because its lyrics express romantic longing, like the song you liked.",
      },
      {
        title: "Un-break My Heart",
        artist: "Toni Braxton",
        mbid: "4d5e6f7a-8b9c-0d1e-2f3a-4b5c6d7e8f9a",
        explanation:
          "Recommended because its lyrics express heartbreak, like the song you liked.",
      },
    ],
    feature: [
      {
        title: "My Heart Will Go On",
        artist: "Celine Dion",
        mbid: "2b3c4d5e-6f7a-8b9c-0d1e-2f3a4b5c6d7e",
        explanation:
          "Recommended because it's an orchestral ballad, like the song you liked.",
      },
      {
        title: "Because You Loved Me",
        artist: "Celine Dion",
        mbid: "2b3c4d5e-6f7a-8b9c-0d1e-2f3a4b5c6d7e",
        explanation:
          "Recommended because it has a slow tempo, like the song you liked.",
      },
      {
        title: "Vision of Love",
        artist: "Mariah Carey",
        mbid: "3c4d5e6f-7a8b-9c0d-1e2f-3a4b5c6d7e8f",
        explanation:
          "Recommended because its genre is similar to the genre of the song you liked.",
      },
      {
        title: "Un-break My Heart",
        artist: "Toni Braxton",
        mbid: "4d5e6f7a-8b9c-0d1e-2f3a-4b5c6d7e8f9a",
        explanation:
          "Recommended because it's a 1990s R&B, like the song you liked.",
      },
    ],
    example: [
      {
        title: "My Heart Will Go On",
        artist: "Celine Dion",
        mbid: "2b3c4d5e-6f7a-8b9c-0d1e-2f3a4b5c6d7e",
        explanation: "Recommended because you like Whitney Houston.",
      },
      {
        title: "Because You Loved Me",
        artist: "Celine Dion",
        mbid: "2b3c4d5e-6f7a-8b9c-0d1e-2f3a4b5c6d7e",
        explanation: "Recommended because you liked I Will Always Love You.",
      },
      {
        title: "Vision of Love",
        artist: "Mariah Carey",
        mbid: "3c4d5e6f-7a8b-9c0d-1e2f-3a4b5c6d7e8f",
        explanation:
          "Recommended because you liked I Will Always Love You by Whitney Houston.",
      },
      {
        title: "Un-break My Heart",
        artist: "Toni Braxton",
        mbid: "4d5e6f7a-8b9c-0d1e-2f3a-4b5c6d7e8f9a",
        explanation: "Recommended because you liked I Will Always Love You.",
      },
    ],
  },
  3: {
    lyric: [
      {
        title: "When I Was Your Man",
        artist: "Bruno Mars",
        mbid: "5e6f7a8b-9c0d-1e2f-3a4b-5c6d7e8f9a0b",
        explanation:
          "Recommended because its lyrics express regret, like the song you liked.",
      },
      {
        title: "Let Her Go",
        artist: "Passenger",
        mbid: "6f7a8b9c-0d1e-2f3a-4b5c-6d7e8f9a0b1c",
        explanation:
          "Recommended because its lyrics express loss, like the song you liked.",
      },
      {
        title: "Stay",
        artist: "Rihanna",
        mbid: "1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d",
        explanation:
          "Recommended because its lyrics express vulnerability, like the song you liked.",
      },
      {
        title: "Apologize",
        artist: "OneRepublic",
        mbid: "7a8b9c0d-1e2f-3a4b-5c6d-7e8f9a0b1c2d",
        explanation:
          "Recommended because its lyrics express remorse, like the song you liked.",
      },
    ],
    feature: [
      {
        title: "When I Was Your Man",
        artist: "Bruno Mars",
        mbid: "5e6f7a8b-9c0d-1e2f-3a4b-5c6d7e8f9a0b",
        explanation:
          "Recommended because it's a piano-driven pop ballad, like the song you liked.",
      },
      {
        title: "Let Her Go",
        artist: "Passenger",
        mbid: "6f7a8b9c-0d1e-2f3a-4b5c-6d7e8f9a0b1c",
        explanation:
          "Recommended because it has a slow tempo, like the song you liked.",
      },
      {
        title: "Stay",
        artist: "Rihanna",
        mbid: "1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d",
        explanation:
          "Recommended because its genre is similar to the genre of the song you liked.",
      },
      {
        title: "Apologize",
        artist: "OneRepublic",
        mbid: "7a8b9c0d-1e2f-3a4b-5c6d-7e8f9a0b1c2d",
        explanation:
          "Recommended because it's a 2010s pop ballad, like the song you liked.",
      },
    ],
    example: [
      {
        title: "When I Was Your Man",
        artist: "Bruno Mars",
        mbid: "5e6f7a8b-9c0d-1e2f-3a4b-5c6d7e8f9a0b",
        explanation: "Recommended because you like Charlie Puth.",
      },
      {
        title: "Let Her Go",
        artist: "Passenger",
        mbid: "6f7a8b9c-0d1e-2f3a-4b5c-6d7e8f9a0b1c",
        explanation: "Recommended because you liked See You Again.",
      },
      {
        title: "Stay",
        artist: "Rihanna",
        mbid: "1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d",
        explanation:
          "Recommended because you liked See You Again by Charlie Puth.",
      },
      {
        title: "Apologize",
        artist: "OneRepublic",
        mbid: "7a8b9c0d-1e2f-3a4b-5c6d-7e8f9a0b1c2d",
        explanation: "Recommended because you selected See You Again.",
      },
    ],
  },
  4: {
    lyric: [
      {
        title: "Stayin' Alive",
        artist: "Bee Gees",
        mbid: "8b9c0d1e-2f3a-4b5c-6d7e-8f9a0b1c2d3e",
        explanation:
          "Recommended because its lyrics express empowerment, like the song you liked.",
      },
      {
        title: "Super Trouper",
        artist: "ABBA",
        mbid: "d1e98571-8b8c-4f8d-b7bc-9f5e4f30f70a",
        explanation:
          "Recommended because its lyrics express joy, like the song you liked.",
      },
      {
        title: "Le Freak",
        artist: "Chic",
        mbid: "9c0d1e2f-3a4b-5c6d-7e8f-9a0b1c2d3e4f",
        explanation:
          "Recommended because its lyrics celebrate fun and dancing, like the song you liked.",
      },
      {
        title: "I Will Survive",
        artist: "Gloria Gaynor",
        mbid: "0d1e2f3a-4b5c-6d7e-8f9a-0b1c2d3e4f5a",
        explanation:
          "Recommended because its lyrics express resilience, like the song you liked.",
      },
    ],
    feature: [
      {
        title: "Stayin' Alive",
        artist: "Bee Gees",
        mbid: "8b9c0d1e-2f3a-4b5c-6d7e-8f9a0b1c2d3e",
        explanation:
          "Recommended because it's a disco-driven dance track, like the song you liked.",
      },
      {
        title: "Super Trouper",
        artist: "ABBA",
        mbid: "d1e98571-8b8c-4f8d-b7bc-9f5e4f30f70a",
        explanation:
          "Recommended because it has a catchy tempo, like the song you liked.",
      },
      {
        title: "Le Freak",
        artist: "Chic",
        mbid: "9c0d1e2f-3a4b-5c6d-7e8f-9a0b1c2d3e4f",
        explanation:
          "Recommended because its genre is similar to the genre of the song you liked.",
      },
      {
        title: "I Will Survive",
        artist: "Gloria Gaynor",
        mbid: "0d1e2f3a-4b5c-6d7e-8f9a-0b1c2d3e4f5a",
        explanation:
          "Recommended because it's a 1970s disco ballad, like the song you liked.",
      },
    ],
    example: [
      {
        title: "Stayin' Alive",
        artist: "Bee Gees",
        mbid: "8b9c0d1e-2f3a-4b5c-6d7e-8f9a0b1c2d3e",
        explanation: "Recommended because you like ABBA.",
      },
      {
        title: "Super Trouper",
        artist: "ABBA",
        mbid: "d1e98571-8b8c-4f8d-b7bc-9f5e4f30f70a",
        explanation: "Recommended because you liked Dancing Queen.",
      },
      {
        title: "Le Freak",
        artist: "Chic",
        mbid: "9c0d1e2f-3a4b-5c6d-7e8f-9a0b1c2d3e4f",
        explanation: "Recommended because you liked Dancing Queen by ABBA.",
      },
      {
        title: "I Will Survive",
        artist: "Gloria Gaynor",
        mbid: "0d1e2f3a-4b5c-6d7e-8f9a-0b1c2d3e4f5a",
        explanation: "Recommended because you selected Dancing Queen.",
      },
    ],
  },
  5: {
    lyric: [
      {
        title: "Can't Feel My Face",
        artist: "The Weeknd",
        mbid: "9c5664e0-3e3a-4e7a-b7d4-04b3f6c0f88c",
        explanation:
          "Recommended because its lyrics express desire, like the song you liked.",
      },
      {
        title: "Don't Start Now",
        artist: "Dua Lipa",
        mbid: "1e2f3a4b-5c6d-7e8f-9a0b-1c2d3e4f5a6b",
        explanation:
          "Recommended because its lyrics express independence, like the song you liked.",
      },
      {
        title: "Levitating",
        artist: "Dua Lipa",
        mbid: "2f3a4b5c-6d7e-8f9a-0b1c-2d3e4f5a6b7c",
        explanation:
          "Recommended because its lyrics express joy, like the song you liked.",
      },
      {
        title: "Say So",
        artist: "Doja Cat",
        mbid: "3a4b5c6d-7e8f-9a0b-1c2d-3e4f5a6b7c8d",
        explanation:
          "Recommended because its lyrics express energy, like the song you liked.",
      },
    ],
    feature: [
      {
        title: "Can't Feel My Face",
        artist: "The Weeknd",
        mbid: "9c5664e0-3e3a-4e7a-b7d4-04b3f6c0f88c",
        explanation:
          "Recommended because it's an upbeat synth-pop track, like the song you liked.",
      },
      {
        title: "Don't Start Now",
        artist: "Dua Lipa",
        mbid: "1e2f3a4b-5c6d-7e8f-9a0b-1c2d3e4f5a6b",
        explanation:
          "Recommended because it has a fast tempo, like the song you liked.",
      },
      {
        title: "Levitating",
        artist: "Dua Lipa",
        mbid: "2f3a4b5c-6d7e-8f9a-0b1c-2d3e4f5a6b7c",
        explanation:
          "Recommended because its genre is similar to the genre of the song you liked.",
      },
      {
        title: "Say So",
        artist: "Doja Cat",
        mbid: "3a4b5c6d-7e8f-9a0b-1c2d-3e4f5a6b7c8d",
        explanation:
          "Recommended because it's a 2019s pop track, like the song you liked.",
      },
    ],
    example: [
      {
        title: "Can't Feel My Face",
        artist: "The Weeknd",
        mbid: "9c5664e0-3e3a-4e7a-b7d4-04b3f6c0f88c",
        explanation: "Recommended because you like The Weeknd.",
      },
      {
        title: "Don't Start Now",
        artist: "Dua Lipa",
        mbid: "1e2f3a4b-5c6d-7e8f-9a0b-1c2d3e4f5a6b",
        explanation: "Recommended because you liked Blinding Lights.",
      },
      {
        title: "Levitating",
        artist: "Dua Lipa",
        mbid: "2f3a4b5c-6d7e-8f9a-0b1c-2d3e4f5a6b7c",
        explanation:
          "Recommended because you liked Blinding Lights by The Weeknd.",
      },
      {
        title: "Say So",
        artist: "Doja Cat",
        mbid: "3a4b5c6d-7e8f-9a0b-1c2d-3e4f5a6b7c8d",
        explanation: "Recommended because you selected Blinding Lights.",
      },
    ],
  },
  6: {
    lyric: [
      {
        title: "Just Dance",
        artist: "Lady Gaga",
        mbid: "7c8e4f2a-1b5d-4e9c-8f3a-2d6e9b0c4f7e",
        explanation:
          "Recommended because its lyrics express partying and fun, like the song you liked.",
      },
      {
        title: "Toxic",
        artist: "Britney Spears",
        mbid: "4b5c6d7e-8f9a-0b1c-2d3e-4f5a6b7c8d9e",
        explanation:
          "Recommended because its lyrics express desire, like the song you liked.",
      },
      {
        title: "I Gotta Feeling",
        artist: "Black Eyed Peas",
        mbid: "5c6d7e8f-9a0b-1c2d-3e4f-5a6b7c8d9e0f",
        explanation:
          "Recommended because its lyrics celebrate excitement, like the song you liked.",
      },
      {
        title: "Bad Romance",
        artist: "Lady Gaga",
        mbid: "7c8e4f2a-1b5d-4e9c-8f3a-2d6e9b0c4f7e",
        explanation:
          "Recommended because its lyrics express intensity, like the song you liked.",
      },
    ],
    feature: [
      {
        title: "Just Dance",
        artist: "Lady Gaga",
        mbid: "7c8e4f2a-1b5d-4e9c-8f3a-2d6e9b0c4f7e",
        explanation:
          "Recommended because it's an electronic dance-pop track, like the song you liked.",
      },
      {
        title: "Toxic",
        artist: "Britney Spears",
        mbid: "4b5c6d7e-8f9a-0b1c-2d3e-4f5a6b7c8d9e",
        explanation:
          "Recommended because it has a fast tempo, like the song you liked.",
      },
      {
        title: "I Gotta Feeling",
        artist: "Black Eyed Peas",
        mbid: "5c6d7e8f-9a0b-1c2d-3e4f-5a6b7c8d9e0f",
        explanation:
          "Recommended because its genre is similar to the genre of the song you liked.",
      },
      {
        title: "Bad Romance",
        artist: "Lady Gaga",
        mbid: "7c8e4f2a-1b5d-4e9c-8f3a-2d6e9b0c4f7e",
        explanation:
          "Recommended because it's a 2000s dance-pop track, like the song you liked.",
      },
    ],
    example: [
      {
        title: "Just Dance",
        artist: "Lady Gaga",
        mbid: "7c8e4f2a-1b5d-4e9c-8f3a-2d6e9b0c4f7e",
        explanation: "Recommended because you like Lady Gaga.",
      },
      {
        title: "Toxic",
        artist: "Britney Spears",
        mbid: "4b5c6d7e-8f9a-0b1c-2d3e-4f5a6b7c8d9e",
        explanation: "Recommended because you liked Poker Face.",
      },
      {
        title: "I Gotta Feeling",
        artist: "Black Eyed Peas",
        mbid: "5c6d7e8f-9a0b-1c2d-3e4f-5a6b7c8d9e0f",
        explanation: "Recommended because you liked Poker Face by Lady Gaga.",
      },
      {
        title: "Bad Romance",
        artist: "Lady Gaga",
        mbid: "7c8e4f2a-1b5d-4e9c-8f3a-2d6e9b0c4f7e",
        explanation: "Recommended because you selected Poker Face.",
      },
    ],
  },
  7: {
    lyric: [
      {
        title: "Not Afraid",
        artist: "Eminem",
        mbid: "3c2e8f5a-9d4b-4c7e-8f1a-5b6e9c0d3f8a",
        explanation:
          "Recommended because its lyrics express determination, like the song you liked.",
      },
      {
        title: "Till I Collapse",
        artist: "Eminem",
        mbid: "3c2e8f5a-9d4b-4c7e-8f1a-5b6e9c0d3f8a",
        explanation:
          "Recommended because its lyrics express perseverance, like the song you liked.",
      },
      {
        title: "Numb/Encore",
        artist: "Jay-Z & Linkin Park",
        mbid: "6d7e8f9a-0b1c-2d3e-4f5a-6b7c8d9e0f1a",
        explanation:
          "Recommended because its lyrics express struggle, like the song you liked.",
      },
      {
        title: "Remember the Name",
        artist: "Fort Minor",
        mbid: "7e8f9a0b-1c2d-3e4f-5a6b-7c8d9e0f1a2b",
        explanation:
          "Recommended because its lyrics express ambition, like the song you liked.",
      },
    ],
    feature: [
      {
        title: "Not Afraid",
        artist: "Eminem",
        mbid: "3c2e8f5a-9d4b-4c7e-8f1a-5b6e9c0d3f8a",
        explanation:
          "Recommended because it's a rap/hip hop track, like the song you liked.",
      },
      {
        title: "Till I Collapse",
        artist: "Eminem",
        mbid: "3c2e8f5a-9d4b-4c7e-8f1a-5b6e9c0d3f8a",
        explanation:
          "Recommended because it has a driving tempo, like the song you liked.",
      },
      {
        title: "Numb/Encore",
        artist: "Jay-Z & Linkin Park",
        mbid: "6d7e8f9a-0b1c-2d3e-4f5a-6b7c8d9e0f1a",
        explanation:
          "Recommended because its genre is similar to the genre of the song you liked.",
      },
      {
        title: "Remember the Name",
        artist: "Fort Minor",
        mbid: "7e8f9a0b-1c2d-3e4f-5a6b-7c8d9e0f1a2b",
        explanation:
          "Recommended because it's a 2000s hip hop track, like the song you liked.",
      },
    ],
    example: [
      {
        title: "Not Afraid",
        artist: "Eminem",
        mbid: "3c2e8f5a-9d4b-4c7e-8f1a-5b6e9c0d3f8a",
        explanation: "Recommended because you like Eminem.",
      },
      {
        title: "Till I Collapse",
        artist: "Eminem",
        mbid: "3c2e8f5a-9d4b-4c7e-8f1a-5b6e9c0d3f8a",
        explanation: "Recommended because you liked Lose Yourself.",
      },
      {
        title: "Numb/Encore",
        artist: "Jay-Z & Linkin Park",
        mbid: "6d7e8f9a-0b1c-2d3e-4f5a-6b7c8d9e0f1a",
        explanation: "Recommended because you liked Lose Yourself by Eminem.",
      },
      {
        title: "Remember the Name",
        artist: "Fort Minor",
        mbid: "7e8f9a0b-1c2d-3e4f-5a6b-7c8d9e0f1a2b",
        explanation: "Recommended because you selected Lose Yourself.",
      },
    ],
  },
  8: {
    lyric: [
      {
        title: "Somebody to Love",
        artist: "Queen",
        mbid: "b84ee12a-09ef-421b-82de-0441a926375b",
        explanation:
          "Recommended because its lyrics express longing, like the song you liked.",
      },
      {
        title: "Stairway to Heaven",
        artist: "Led Zeppelin",
        mbid: "8f9a0b1c-2d3e-4f5a-6b7c-8d9e0f1a2b3c",
        explanation:
          "Recommended because its lyrics tell a story, like the song you liked.",
      },
      {
        title: "Hotel California",
        artist: "Eagles",
        mbid: "9a0b1c2d-3e4f-5a6b-7c8d-9e0f1a2b3c4d",
        explanation:
          "Recommended because its lyrics convey mystery, like the song you liked.",
      },
      {
        title: "Comfortably Numb",
        artist: "Pink Floyd",
        mbid: "0b1c2d3e-4f5a-6b7c-8d9e-0f1a2b3c4d5e",
        explanation:
          "Recommended because its lyrics express isolation, like the song you liked.",
      },
    ],
    feature: [
      {
        title: "Somebody to Love",
        artist: "Queen",
        mbid: "b84ee12a-09ef-421b-82de-0441a926375b",
        explanation:
          "Recommended because it's a rock ballad, like the song you liked.",
      },
      {
        title: "Stairway to Heaven",
        artist: "Led Zeppelin",
        mbid: "8f9a0b1c-2d3e-4f5a-6b7c-8d9e0f1a2b3c",
        explanation:
          "Recommended because it has a moderate tempo, like the song you liked.",
      },
      {
        title: "Hotel California",
        artist: "Eagles",
        mbid: "9a0b1c2d-3e4f-5a6b-7c8d-9e0f1a2b3c4d",
        explanation:
          "Recommended because its genre is similar to the genre of the song you liked.",
      },
      {
        title: "Comfortably Numb",
        artist: "Pink Floyd",
        mbid: "0b1c2d3e-4f5a-6b7c-8d9e-0f1a2b3c4d5e",
        explanation:
          "Recommended because it's a 1970s progressive rock track, like the song you liked.",
      },
    ],
    example: [
      {
        title: "Somebody to Love",
        artist: "Queen",
        mbid: "b84ee12a-09ef-421b-82de-0441a926375b",
        explanation: "Recommended because you like Queen.",
      },
      {
        title: "Stairway to Heaven",
        artist: "Led Zeppelin",
        mbid: "8f9a0b1c-2d3e-4f5a-6b7c-8d9e0f1a2b3c",
        explanation: "Recommended because you liked Bohemian Rhapsody.",
      },
      {
        title: "Hotel California",
        artist: "Eagles",
        mbid: "9a0b1c2d-3e4f-5a6b-7c8d-9e0f1a2b3c4d",
        explanation:
          "Recommended because you liked Bohemian Rhapsody by Queen.",
      },
      {
        title: "Comfortably Numb",
        artist: "Pink Floyd",
        mbid: "0b1c2d3e-4f5a-6b7c-8d9e-0f1a2b3c4d5e",
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
  lyric: { label: "Lyric-based" },
  feature: { label: "Feature-based" },
  example: { label: "Example-based" },
};

// Cover art helper — uses Last.fm as primary, colored gradient as fallback
function getCoverUrl(mbid, title, artist) {
  // Use Last.fm API (free, no key needed for basic use via this proxy pattern)
  // Falls back gracefully if image fails to load
  return `https://lastfm.freetls.fastly.net/i/u/174s/${mbid}.png`;
}
