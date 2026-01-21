import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface RewardAnimationProps {
  emoji: string;
  onComplete?: () => void;
}

export default function RewardAnimation({ emoji, onComplete }: RewardAnimationProps) {
  const [show, setShow] = useState(false);
  const [scale, setScale] = useState(0);
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    setShow(true);
    setScale(0);
    setRotate(0);

    const timer1 = setTimeout(() => setScale(1), 100);
    const timer2 = setTimeout(() => setRotate(360), 500);
    const timer3 = setTimeout(() => {
      setShow(false);
      if (onComplete) onComplete();
    }, 2500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [emoji, onComplete]);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
      <div className={cn(
        "flex flex-col items-center justify-center transition-all duration-300",
        show ? "scale-100" : "scale-0"
      )}>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 rounded-full blur-3xl opacity-50 animate-pulse"></div>
          <div className="relative w-64 h-64 bg-gradient-to-br from-yellow-300 via-pink-400 to-purple-500 rounded-full flex items-center justify-center shadow-2xl">
            <span className="text-9xl animate-bounce" style={{ transform: `scale(${scale}) rotate(${rotate}deg)` }}>
              {emoji}
            </span>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-2 animate-pulse">
            🎉 Amazing Job! 🎉
          </h2>
          <p className="text-xl text-white/90">
            You earned a reward!
          </p>
        </div>
      </div>
    </div>
  );
}