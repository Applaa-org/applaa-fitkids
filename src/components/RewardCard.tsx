import { cn } from '@/lib/utils';
import { Reward } from '@/data/rewards';

interface RewardCardProps {
  reward: Reward;
  isUnlocked: boolean;
}

export default function RewardCard({ reward, isUnlocked }: RewardCardProps) {
  return (
    <div className={cn(
      "bg-white rounded-3xl shadow-lg p-6 border-4 transition-all duration-300",
      isUnlocked
        ? "border-yellow-400 hover:shadow-2xl hover:-translate-y-1"
        : "border-gray-200 opacity-60"
    )}>
      <div className="text-center">
        <div className={cn(
          "w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-4",
          isUnlocked
            ? "bg-gradient-to-br from-yellow-300 to-orange-400 shadow-lg"
            : "bg-gray-200"
        )}>
          <span className={cn(
            "text-5xl",
            isUnlocked ? "animate-bounce" : "grayscale"
          )}>
            {reward.emoji}
          </span>
        </div>
        
        <h3 className={cn(
          "text-xl font-bold mb-2",
          isUnlocked ? "text-gray-800" : "text-gray-400"
        )}>
          {reward.title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4">
          {reward.description}
        </p>
        
        <div className="flex items-center justify-center space-x-2">
          <span className="text-2xl font-bold text-orange-500">
            {reward.points}
          </span>
          <span className="text-gray-500 text-sm">points</span>
        </div>
        
        {isUnlocked && (
          <div className="mt-4 inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full font-bold">
            <span>✨</span>
            <span className="ml-2">Unlocked!</span>
          </div>
        )}
      </div>
    </div>
  );
}