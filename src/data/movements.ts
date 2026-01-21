export interface Movement {
  id: number;
  title: string;
  description: string;
  emoji: string;
  duration: string;
  difficulty: 'easy' | 'medium' | 'hard';
  instructions: string[];
  character: string;
  characterColor: string;
}

export const movements: Movement[] = [
  {
    id: 1,
    title: "Super Jumping Jacks",
    description: "Jump like a superhero! Great for building strong legs and getting energy out.",
    emoji: "🦸",
    duration: "1 minute",
    difficulty: "easy",
    instructions: [
      "Stand tall with feet together",
      "Jump up and spread arms wide",
      "Land softly on your feet",
      "Keep jumping like a superhero!"
    ],
    character: "Super Sam",
    characterColor: "from-blue-500 to-purple-600"
  },
  {
    id: 2,
    title: "Dancing Stars",
    description: "Spin and twirl like a star! Perfect for having fun and feeling happy.",
    emoji: "⭐",
    duration: "2 minutes",
    difficulty: "medium",
    instructions: [
      "Stand with feet shoulder-width apart",
      "Raise arms above your head",
      "Spin around slowly",
      "Add some silly dance moves!"
    ],
    character: "Star Sarah",
    characterColor: "from-yellow-400 to-orange-500"
  },
  {
    id: 3,
    title: "Stretchy Snake",
    description: "Move like a slithering snake! Great for stretching your body.",
    emoji: "🐍",
    duration: "1 minute",
    difficulty: "easy",
    instructions: [
      "Stand tall like a tree",
      "Reach your arms up high",
      "Slowly bend forward and touch your toes",
      "Wave your arms side to side"
    ],
    character: "Slinky Sam",
    characterColor: "from-green-500 to-teal-500"
  },
  {
    id: 4,
    title: "Bouncing Bunny",
    description: "Hop like a bunny! Fun and bouncy exercise for everyone.",
    emoji: "🐰",
    duration: "1 minute",
    difficulty: "medium",
    instructions: [
      "Crouch down low",
      "Jump up high on both feet",
      "Land softly and crouch again",
      "Keep hopping like a bunny!"
    ],
    character: "Bouncy Bella",
    characterColor: "from-pink-400 to-rose-500"
  },
  {
    id: 5,
    title: "Strong Tiger Stance",
    description: "Stand like a tiger! Builds strong muscles and focus.",
    emoji: "🐯",
    duration: "1 minute",
    difficulty: "hard",
    instructions: [
      "Stand with feet wide apart",
      "Bend knees and lower your body",
      "Place hands on the ground",
      "Growl like a tiger and hold the pose!"
    ],
    character: "Tough Timmy",
    characterColor: "from-orange-500 to-red-500"
  },
  {
    id: 6,
    title: "Flying Eagle",
    description: "Spread your wings and fly! Great for arm strength.",
    emoji: "🦅",
    duration: "1 minute",
    difficulty: "medium",
    instructions: [
      "Stand tall with arms at your sides",
      "Raise arms high above your head",
      "Spread fingers wide like wings",
      "Flap your arms up and down"
    ],
    character: "Flying Fiona",
    characterColor: "from-indigo-500 to-blue-600"
  },
  {
    id: 7,
    title: "Happy Frog Jump",
    description: "Hop like a frog! Super fun and gets your heart pumping.",
    emoji: "🐸",
    duration: "1 minute",
    difficulty: "easy",
    instructions: [
      "Crouch down with hands on the ground",
      "Jump forward with both feet",
      "Land on your hands and feet",
      "Jump again and again!"
    ],
    character: "Jumpy Jake",
    characterColor: "from-lime-400 to-green-500"
  },
  {
    id: 8,
    title: "Balancing Bear",
    description: "Stand like a bear! Builds balance and focus.",
    emoji: "🐻",
    duration: "1 minute",
    difficulty: "medium",
    instructions: [
      "Stand on one foot",
      "Raise the other foot off the ground",
      "Put your arms out for balance",
      "Hold the pose and count to 10!"
    ],
    character: "Balanced Bella",
    characterColor: "from-amber-500 to-yellow-600"
  }
];

export const difficultyColors = {
  easy: "bg-green-100 text-green-700 border-green-300",
  medium: "bg-yellow-100 text-yellow-700 border-yellow-300",
  hard: "bg-red-100 text-red-700 border-red-300"
};

export const difficultyLabels = {
  easy: "Easy",
  medium: "Medium",
  hard: "Hard"
};