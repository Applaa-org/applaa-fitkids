import { cn } from '@/lib/utils';

interface CharacterAvatarProps {
  name: string;
  emoji: string;
  color: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function CharacterAvatar({ name, emoji, color, size = 'md' }: CharacterAvatarProps) {
  const sizeClasses = {
    sm: 'w-16 h-16 text-4xl',
    md: 'w-24 h-24 text-6xl',
    lg: 'w-32 h-32 text-8xl'
  };

  return (
    <div className="flex flex-col items-center">
      <div className={cn(
        "relative rounded-full p-2 shadow-xl",
        sizeClasses[size]
      )}>
        <div className={cn(
          "w-full h-full rounded-full bg-gradient-to-br",
          color
        )}>
          <div className="w-full h-full rounded-full bg-white/30 flex items-center justify-center">
            <span className="animate-bounce">{emoji}</span>
          </div>
        </div>
      </div>
      <p className="mt-3 font-bold text-gray-700 text-lg">{name}</p>
    </div>
  );
}