// ============================================================
// DATA.JS — Songs, recommendations, explanations
// Cover art loaded dynamically from MusicBrainz Cover Art Archive
// ============================================================

// MusicBrainz release IDs for cover art
// Format: "mbid": "release-id-from-musicbrainz.org"

// ============================================================
// DATA.JS — Songs + Recommendations with LOCAL IMAGES
// ============================================================

const SONGS = [
  {
    id: 1,
    title: "Rolling in the Deep",
    artist: "Adele",
    img: "images/rolling_in_the_deep.jpeg",
  },
  {
    id: 2,
    title: "I Will Always Love You",
    artist: "Whitney Houston",
    img: "images/i_will_always_love_you.jpeg",
  },
  {
    id: 3,
    title: "See You Again",
    artist: "Charlie Puth & Wiz Khalifa",
    img: "images/see_you_again.jpeg",
  },
  {
    id: 4,
    title: "Dancing Queen",
    artist: "ABBA",
    img: "images/dancing_queen.jpeg",
  },
  {
    id: 5,
    title: "Blinding Lights",
    artist: "The Weeknd",
    img: "images/blinding_lights.jpeg",
  },
  {
    id: 6,
    title: "Poker Face",
    artist: "Lady Gaga",
    img: "images/poker_face.jpeg",
  },
  {
    id: 7,
    title: "Lose Yourself",
    artist: "Eminem",
    img: "images/lose_yourself.jpeg",
  },
  {
    id: 8,
    title: "Bohemian Rhapsody",
    artist: "Queen",
    img: "images/bohemian_rhapsody.jpeg",
  },
];

const RECOMMENDATIONS = {
  1: {
    lyric: [
      {
        title: "Someone Like You",
        artist: "Adele",
        img: "images/someone_like_you.jpeg",
        explanation:
          "Recommended because its lyrics express heartbreak, like the song you liked.",
      },
      {
        title: "Fix You",
        artist: "Coldplay",
        img: "images/fix_you.jpeg",
        explanation:
          "Recommended because its lyrics focus on healing, like the song you liked.",
      },
      {
        title: "All of Me",
        artist: "John Legend",
        img: "images/all_of_me.jpeg",
        explanation:
          "Recommended because its lyrics express deep love, like the song you liked.",
      },
      {
        title: "Stay",
        artist: "Rihanna",
        img: "images/stay.jpeg",
        explanation:
          "Recommended because its lyrics express vulnerability, like the song you liked.",
      },
    ],
    feature: [
      {
        title: "Someone Like You",
        artist: "Adele",
        img: "images/someone_like_you.jpeg",
        explanation:
          "Recommended because it's a piano-driven pop ballad, like the song you liked.",
      },
      {
        title: "Fix You",
        artist: "Coldplay",
        img: "images/fix_you.jpeg",
        explanation:
          "Recommended because it has a slow tempo, like the song you liked.",
      },
      {
        title: "All of Me",
        artist: "John Legend",
        img: "images/all_of_me.jpeg",
        explanation:
          "Recommended because its genre is similar to the genre of the song you liked.",
      },
      {
        title: "Stay",
        artist: "Rihanna",
        img: "images/stay.jpeg",
        explanation:
          "Recommended because it's a 2010s pop ballad, like the song you liked.",
      },
    ],
    example: [
      {
        title: "Someone Like You",
        artist: "Adele",
        img: "images/someone_like_you.jpeg",
        explanation: "Recommended because you like Adele.",
      },
      {
        title: "Fix You",
        artist: "Coldplay",
        img: "images/fix_you.jpeg",
        explanation: "Recommended because you liked Rolling in the Deep.",
      },
      {
        title: "All of Me",
        artist: "John Legend",
        img: "images/all_of_me.jpeg",
        explanation:
          "Recommended because you liked Rolling in the Deep by Adele.",
      },
      {
        title: "Stay",
        artist: "Rihanna",
        img: "images/stay.jpeg",
        explanation: "Recommended because you selected Rolling in the Deep.",
      },
    ],
  },

  2: {
    lyric: [
      {
        title: "My Heart Will Go On",
        artist: "Celine Dion",
        img: "images/my_heart_will_go_on.jpeg",
        explanation:
          "Recommended because its lyrics express enduring love, like the song you liked.",
      },
      {
        title: "Because You Loved Me",
        artist: "Celine Dion",
        img: "images/because_you_loved_me.jpeg",
        explanation:
          "Recommended because its lyrics express gratitude, like the song you liked.",
      },
      {
        title: "Vision of Love",
        artist: "Mariah Carey",
        img: "images/vision_of_love.jpeg",
        explanation:
          "Recommended because its lyrics express romantic longing, like the song you liked.",
      },
      {
        title: "Un-break My Heart",
        artist: "Toni Braxton",
        img: "images/un-break_my_heart.jpeg",
        explanation:
          "Recommended because its lyrics express heartbreak, like the song you liked.",
      },
    ],
    feature: [
      {
        title: "My Heart Will Go On",
        artist: "Celine Dion",
        img: "images/my_heart_will_go_on.jpeg",
        explanation:
          "Recommended because it's an orchestral ballad, like the song you liked.",
      },
      {
        title: "Because You Loved Me",
        artist: "Celine Dion",
        img: "images/because_you_loved_me.jpeg",
        explanation:
          "Recommended because it has a slow tempo, like the song you liked.",
      },
      {
        title: "Vision of Love",
        artist: "Mariah Carey",
        img: "images/vision_of_love.jpeg",
        explanation:
          "Recommended because its genre is similar to the genre of the song you liked.",
      },
      {
        title: "Un-break My Heart",
        artist: "Toni Braxton",
        img: "images/un-break_my_heart.jpeg",
        explanation:
          "Recommended because it's a 1990s R&B, like the song you liked.",
      },
    ],
    example: [
      {
        title: "My Heart Will Go On",
        artist: "Celine Dion",
        img: "images/my_heart_will_go_on.jpeg",
        explanation: "Recommended because you like Whitney Houston.",
      },
      {
        title: "Because You Loved Me",
        artist: "Celine Dion",
        img: "images/because_you_loved_me.jpeg",
        explanation: "Recommended because you liked I Will Always Love You.",
      },
      {
        title: "Vision of Love",
        artist: "Mariah Carey",
        img: "images/vision_of_love.jpeg",
        explanation:
          "Recommended because you liked I Will Always Love You by Whitney Houston.",
      },
      {
        title: "Un-break My Heart",
        artist: "Toni Braxton",
        img: "images/un-break_my_heart.jpeg",
        explanation: "Recommended because you liked I Will Always Love You.",
      },
    ],
  },

  3: {
    lyric: [
      {
        title: "When I Was Your Man",
        artist: "Bruno Mars",
        img: "images/when_i_was_your_man.jpeg",
        explanation:
          "Recommended because its lyrics express regret, like the song you liked.",
      },
      {
        title: "Let Her Go",
        artist: "Passenger",
        img: "images/let_her_go.jpeg",
        explanation:
          "Recommended because its lyrics express loss, like the song you liked.",
      },
      {
        title: "Stay",
        artist: "Rihanna",
        img: "images/stay.jpeg",
        explanation:
          "Recommended because its lyrics express vulnerability, like the song you liked.",
      },
      {
        title: "Apologize",
        artist: "OneRepublic",
        img: "images/apologize.jpeg",
        explanation:
          "Recommended because its lyrics express remorse, like the song you liked.",
      },
    ],
    feature: [
      {
        title: "When I Was Your Man",
        artist: "Bruno Mars",
        img: "images/when_i_was_your_man.jpeg",
        explanation:
          "Recommended because it's a piano-driven pop ballad, like the song you liked.",
      },
      {
        title: "Let Her Go",
        artist: "Passenger",
        img: "images/let_her_go.jpeg",
        explanation:
          "Recommended because it has a slow tempo, like the song you liked.",
      },
      {
        title: "Stay",
        artist: "Rihanna",
        img: "images/stay.jpeg",
        explanation:
          "Recommended because its genre is similar to the genre of the song you liked.",
      },
      {
        title: "Apologize",
        artist: "OneRepublic",
        img: "images/apologize.jpeg",
        explanation:
          "Recommended because it's a 2010s pop ballad, like the song you liked.",
      },
    ],
    example: [
      {
        title: "When I Was Your Man",
        artist: "Bruno Mars",
        img: "images/when_i_was_your_man.jpeg",
        explanation: "Recommended because you like Charlie Puth.",
      },
      {
        title: "Let Her Go",
        artist: "Passenger",
        img: "images/let_her_go.jpeg",
        explanation: "Recommended because you liked See You Again.",
      },
      {
        title: "Stay",
        artist: "Rihanna",
        img: "images/stay.jpeg",
        explanation:
          "Recommended because you liked See You Again by Charlie Puth.",
      },
      {
        title: "Apologize",
        artist: "OneRepublic",
        img: "images/apologize.jpeg",
        explanation: "Recommended because you selected See You Again.",
      },
    ],
  },

  4: {
    lyric: [
      {
        title: "Stayin' Alive",
        artist: "Bee Gees",
        img: "images/stayin_alive.jpeg",
        explanation:
          "Recommended because its lyrics express empowerment, like the song you liked.",
      },
      {
        title: "Super Trouper",
        artist: "ABBA",
        img: "images/super_trouper.jpeg",
        explanation:
          "Recommended because its lyrics express joy, like the song you liked.",
      },
      {
        title: "Le Freak",
        artist: "Chic",
        img: "images/le_freak.jpeg",
        explanation:
          "Recommended because its lyrics celebrate fun and dancing, like the song you liked.",
      },
      {
        title: "I Will Survive",
        artist: "Gloria Gaynor",
        img: "images/i_will_survive.jpeg",
        explanation:
          "Recommended because its lyrics express resilience, like the song you liked.",
      },
    ],
    feature: [
      {
        title: "Stayin' Alive",
        artist: "Bee Gees",
        img: "images/stayin_alive.jpeg",
        explanation:
          "Recommended because it's a disco-driven dance track, like the song you liked.",
      },
      {
        title: "Super Trouper",
        artist: "ABBA",
        img: "images/super_trouper.jpeg",
        explanation:
          "Recommended because it has a catchy tempo, like the song you liked.",
      },
      {
        title: "Le Freak",
        artist: "Chic",
        img: "images/le_freak.jpeg",
        explanation:
          "Recommended because its genre is similar to the genre of the song you liked.",
      },
      {
        title: "I Will Survive",
        artist: "Gloria Gaynor",
        img: "images/i_will_survive.jpeg",
        explanation:
          "Recommended because it's a 1970s disco ballad, like the song you liked.",
      },
    ],
    example: [
      {
        title: "Stayin' Alive",
        artist: "Bee Gees",
        img: "images/stayin_alive.jpeg",
        explanation: "Recommended because you like ABBA.",
      },
      {
        title: "Super Trouper",
        artist: "ABBA",
        img: "images/super_trouper.jpeg",
        explanation: "Recommended because you liked Dancing Queen.",
      },
      {
        title: "Le Freak",
        artist: "Chic",
        img: "images/le_freak.jpeg",
        explanation: "Recommended because you liked Dancing Queen by ABBA.",
      },
      {
        title: "I Will Survive",
        artist: "Gloria Gaynor",
        img: "images/i_will_survive.jpeg",
        explanation: "Recommended because you selected Dancing Queen.",
      },
    ],
  },

  5: {
    lyric: [
      {
        title: "Can't Feel My Face",
        artist: "The Weeknd",
        img: "images/cant_feel_my_face.jpeg",
        explanation:
          "Recommended because its lyrics express desire, like the song you liked.",
      },
      {
        title: "Don't Start Now",
        artist: "Dua Lipa",
        img: "images/dont_start_now.jpeg",
        explanation:
          "Recommended because its lyrics express independence, like the song you liked.",
      },
      {
        title: "Levitating",
        artist: "Dua Lipa",
        img: "images/levitating.jpeg",
        explanation:
          "Recommended because its lyrics express joy, like the song you liked.",
      },
      {
        title: "Say So",
        artist: "Doja Cat",
        img: "images/say_so.jpeg",
        explanation:
          "Recommended because its lyrics express energy, like the song you liked.",
      },
    ],
    feature: [
      {
        title: "Can't Feel My Face",
        artist: "The Weeknd",
        img: "images/cant_feel_my_face.jpeg",
        explanation:
          "Recommended because it's an upbeat synth-pop track, like the song you liked.",
      },
      {
        title: "Don't Start Now",
        artist: "Dua Lipa",
        img: "images/dont_start_now.jpeg",
        explanation:
          "Recommended because it has a fast tempo, like the song you liked.",
      },
      {
        title: "Levitating",
        artist: "Dua Lipa",
        img: "images/levitating.jpeg",
        explanation:
          "Recommended because its genre is similar to the genre of the song you liked.",
      },
      {
        title: "Say So",
        artist: "Doja Cat",
        img: "images/say_so.jpeg",
        explanation:
          "Recommended because it's a 2019s pop track, like the song you liked.",
      },
    ],
    example: [
      {
        title: "Can't Feel My Face",
        artist: "The Weeknd",
        img: "images/cant_feel_my_face.jpeg",
        explanation: "Recommended because you like The Weeknd.",
      },
      {
        title: "Don't Start Now",
        artist: "Dua Lipa",
        img: "images/dont_start_now.jpeg",
        explanation: "Recommended because you liked Blinding Lights.",
      },
      {
        title: "Levitating",
        artist: "Dua Lipa",
        img: "images/levitating.jpeg",
        explanation:
          "Recommended because you liked Blinding Lights by The Weeknd.",
      },
      {
        title: "Say So",
        artist: "Doja Cat",
        img: "images/say_so.jpeg",
        explanation: "Recommended because you selected Blinding Lights.",
      },
    ],
  },

  6: {
    lyric: [
      {
        title: "Just Dance",
        artist: "Lady Gaga",
        img: "images/just_dance.jpeg",
        explanation:
          "Recommended because its lyrics express partying and fun, like the song you liked.",
      },
      {
        title: "Toxic",
        artist: "Britney Spears",
        img: "images/toxic.jpeg",
        explanation:
          "Recommended because its lyrics express desire, like the song you liked.",
      },
      {
        title: "I Gotta Feeling",
        artist: "Black Eyed Peas",
        img: "images/i_gotta_feeling.jpeg",
        explanation:
          "Recommended because its lyrics celebrate excitement, like the song you liked.",
      },
      {
        title: "Bad Romance",
        artist: "Lady Gaga",
        img: "images/bad_romance.jpeg",
        explanation:
          "Recommended because its lyrics express intensity, like the song you liked.",
      },
    ],
    feature: [
      {
        title: "Just Dance",
        artist: "Lady Gaga",
        img: "images/just_dance.jpeg",
        explanation:
          "Recommended because it's an electronic dance-pop track, like the song you liked.",
      },
      {
        title: "Toxic",
        artist: "Britney Spears",
        img: "images/toxic.jpeg",
        explanation:
          "Recommended because it has a fast tempo, like the song you liked.",
      },
      {
        title: "I Gotta Feeling",
        artist: "Black Eyed Peas",
        img: "images/i_gotta_feeling.jpeg",
        explanation:
          "Recommended because its genre is similar to the genre of the song you liked.",
      },
      {
        title: "Bad Romance",
        artist: "Lady Gaga",
        img: "images/bad_romance.jpeg",
        explanation:
          "Recommended because it's a 2000s dance-pop track, like the song you liked.",
      },
    ],
    example: [
      {
        title: "Just Dance",
        artist: "Lady Gaga",
        img: "images/just_dance.jpeg",
        explanation: "Recommended because you like Lady Gaga.",
      },
      {
        title: "Toxic",
        artist: "Britney Spears",
        img: "images/toxic.jpeg",
        explanation: "Recommended because you liked Poker Face.",
      },
      {
        title: "I Gotta Feeling",
        artist: "Black Eyed Peas",
        img: "images/i_gotta_feeling.jpeg",
        explanation: "Recommended because you liked Poker Face by Lady Gaga.",
      },
      {
        title: "Bad Romance",
        artist: "Lady Gaga",
        img: "images/bad_romance.jpeg",
        explanation: "Recommended because you selected Poker Face.",
      },
    ],
  },

  7: {
    lyric: [
      {
        title: "Not Afraid",
        artist: "Eminem",
        img: "images/not_afraid.jpeg",
        explanation:
          "Recommended because its lyrics express determination, like the song you liked.",
      },
      {
        title: "Till I Collapse",
        artist: "Eminem",
        img: "images/till_i_collapse.jpeg",
        explanation:
          "Recommended because its lyrics express perseverance, like the song you liked.",
      },
      {
        title: "Numb/Encore",
        artist: "Jay-Z & Linkin Park",
        img: "images/numb.jpeg",
        explanation:
          "Recommended because its lyrics express struggle, like the song you liked.",
      },
      {
        title: "Remember the Name",
        artist: "Fort Minor",
        img: "images/remember_the_name.jpeg",
        explanation:
          "Recommended because its lyrics express ambition, like the song you liked.",
      },
    ],
    feature: [
      {
        title: "Not Afraid",
        artist: "Eminem",
        img: "images/not_afraid.jpeg",
        explanation:
          "Recommended because it's a rap/hip hop track, like the song you liked.",
      },
      {
        title: "Till I Collapse",
        artist: "Eminem",
        img: "images/till_i_collapse.jpeg",
        explanation:
          "Recommended because it has a driving tempo, like the song you liked.",
      },
      {
        title: "Numb/Encore",
        artist: "Jay-Z & Linkin Park",
        img: "images/numb.jpeg",
        explanation:
          "Recommended because its genre is similar to the genre of the song you liked.",
      },
      {
        title: "Remember the Name",
        artist: "Fort Minor",
        img: "images/remember_the_name.jpeg",
        explanation:
          "Recommended because it's a 2000s hip hop track, like the song you liked.",
      },
    ],
    example: [
      {
        title: "Not Afraid",
        artist: "Eminem",
        img: "images/not_afraid.jpeg",
        explanation: "Recommended because you like Eminem.",
      },
      {
        title: "Till I Collapse",
        artist: "Eminem",
        img: "images/till_i_collapse.jpeg",
        explanation: "Recommended because you liked Lose Yourself.",
      },
      {
        title: "Numb/Encore",
        artist: "Jay-Z & Linkin Park",
        img: "images/numb.jpeg",
        explanation: "Recommended because you liked Lose Yourself by Eminem.",
      },
      {
        title: "Remember the Name",
        artist: "Fort Minor",
        img: "images/remember_the_name.jpeg",
        explanation: "Recommended because you selected Lose Yourself.",
      },
    ],
  },

  8: {
    lyric: [
      {
        title: "Somebody to Love",
        artist: "Queen",
        img: "images/somebody_to_love.jpeg",
        explanation:
          "Recommended because its lyrics express longing, like the song you liked.",
      },
      {
        title: "Stairway to Heaven",
        artist: "Led Zeppelin",
        img: "images/stairway_to_heaven.jpeg",
        explanation:
          "Recommended because its lyrics tell a story, like the song you liked.",
      },
      {
        title: "Hotel California",
        artist: "Eagles",
        img: "images/hotel_california.jpeg",
        explanation:
          "Recommended because its lyrics convey mystery, like the song you liked.",
      },
      {
        title: "Comfortably Numb",
        artist: "Pink Floyd",
        img: "images/comfortably_numb.jpeg",
        explanation:
          "Recommended because its lyrics express isolation, like the song you liked.",
      },
    ],
    feature: [
      {
        title: "Somebody to Love",
        artist: "Queen",
        img: "images/somebody_to_love.jpeg",
        explanation:
          "Recommended because it's a rock ballad, like the song you liked.",
      },
      {
        title: "Stairway to Heaven",
        artist: "Led Zeppelin",
        img: "images/stairway_to_heaven.jpeg",
        explanation:
          "Recommended because it has a moderate tempo, like the song you liked.",
      },
      {
        title: "Hotel California",
        artist: "Eagles",
        img: "images/hotel_california.jpeg",
        explanation:
          "Recommended because its genre is similar to the genre of the song you liked.",
      },
      {
        title: "Comfortably Numb",
        artist: "Pink Floyd",
        img: "images/comfortably_numb.jpeg",
        explanation:
          "Recommended because it's a 1970s progressive rock track, like the song you liked.",
      },
    ],
    example: [
      {
        title: "Somebody to Love",
        artist: "Queen",
        img: "images/somebody_to_love.jpeg",
        explanation: "Recommended because you like Queen.",
      },
      {
        title: "Stairway to Heaven",
        artist: "Led Zeppelin",
        img: "images/stairway_to_heaven.jpeg",
        explanation: "Recommended because you liked Bohemian Rhapsody.",
      },
      {
        title: "Hotel California",
        artist: "Eagles",
        img: "images/hotel_california.jpeg",
        explanation:
          "Recommended because you liked Bohemian Rhapsody by Queen.",
      },
      {
        title: "Comfortably Numb",
        artist: "Pink Floyd",
        img: "images/comfortably_numb.jpeg",
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
