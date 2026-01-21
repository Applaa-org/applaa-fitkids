export interface Reward {
  id: number;
  title: string;
  description: string;
  emoji: string;
  points: number;
  unlocked: boolean;
  earnedDate?: string;
}

export const rewards: Reward[] = [
  {
    id: 1,
    title: "🌟 Star Badge",
    description: "Complete 3 movements to earn this shiny star!",
    emoji: "🌟",
    points: 10,
    unlocked: false
  },
  {
    id: 2,
    title: "🦸 Super Hero Cape",
    description: "Complete 5 movements to become a fitness hero!",
    emoji: "🦸",
    points: 25,
    unlocked: false
  },
  {
    id: 3,
    title: "🏆 Gold Medal",
    description: "Complete 10 movements and earn this amazing medal!",
    emoji: "🏆",
    points: 50,
    unlocked: false
  },
  {
    id: 4,
    title: "🌈 Rainbow Wings",
    description: "Complete 15 movements and get colorful wings!",
    emoji: "🌈",
    points: 75,
    unlocked: false
  },
  {
    id: 5,
    title: "👑 Royal Crown",
    description: "Complete 20 movements and rule the fitness kingdom!",
    emoji: "👑",
    points: 100,
    unlocked: false
  },
  {
    id: 6,
    title: "🚀 Rocket Ship",
    description: "Complete 25 movements and blast off to fitness space!",
    emoji: "🚀",
    points: 150,
    unlocked: false
  }
];

export const totalPointsNeeded = 100;