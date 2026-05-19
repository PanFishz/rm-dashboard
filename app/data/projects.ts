export interface Project {
  name: string;
  url: string;
  description: string;
  gradient: string;
  emoji: string;
}

export const projects: Project[] = [
  {
    name: "Locate an Image",
    url: "https://www.locateanimage.rinmeyers.com",
    description: "Find where a photo was taken using AI-powered location detection.",
    gradient: "from-pink-500 via-rose-400 to-orange-400",
    emoji: "📍",
  },
  {
    name: "Wanderlist",
    url: "https://www.wanderlist.rinmeyers.com",
    description: "Track and plan your travel adventures around the world.",
    gradient: "from-emerald-400 via-teal-400 to-cyan-500",
    emoji: "✈️",
  },
  {
    name: "Wordual",
    url: "https://www.wordual.rinmeyers.com",
    description: "A competitive word game that challenges your vocabulary.",
    gradient: "from-violet-500 via-purple-500 to-indigo-500",
    emoji: "📝",
  },
  {
    name: "Team Poker",
    url: "https://www.teampoker.rinmeyers.com",
    description: "Play poker with your team — a fun multiplayer card experience.",
    gradient: "from-amber-400 via-orange-500 to-red-500",
    emoji: "🃏",
  },
  {
    name: "Kitty Cafe",
    url: "https://www.kittycafe.rinmeyers.com",
    description: "Cats and coffee — a cozy café experience.",
    gradient: "from-pink-400 via-rose-400 to-pink-500",
    emoji: "🐱",
  },
];
