import { Link } from '@tanstack/react-router';
import { cn } from '@/lib/utils';
import { Movement, difficultyColors, difficultyLabels } from '@/data/movements';

interface MovementCardProps {
  movement: Movement;
}

export default function MovementCard({ movement }: MovementCardProps) {
  return (
    <Link to="/movements/$id" params={{ id: movement.id.toString() }}>
      <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border-4 border-transparent hover:border-orange-300 overflow-hidden cursor-pointer">
        <div className={cn(
          "h-48 bg-gradient-to-br",
          movement.characterColor
        )}>
          <div className="h-full flex items-center justify-center">
            <span className="text-8xl group-hover:scale-110 transition-transform duration-300">
              {movement.emoji}
            </span>
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <span className={cn(
              "px-3 py-1 rounded-full text-sm font-bold border-2",
              difficultyColors[movement.difficulty]
            )}>
              {difficultyLabels[movement.difficulty]}
            </span>
            <span className="text-gray-500 font-medium flex items-center">
              <span>⏱️</span>
              <span className="ml-1">{movement.duration}</span>
            </span>
          </div>
          
          <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors">
            {movement.title}
          </h3>
          
          <p className="text-gray-600 mb-4 line-clamp-2">
            {movement.description}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className={cn(
                "w-8 h-8 rounded-full bg-gradient-to-br",
                movement.characterColor
              )}>
                <span className="text-sm">😊</span>
              </div>
              <span className="text-sm font-medium text-gray-600">
                Meet {movement.character}
              </span>
            </div>
            <span className="text-orange-500 font-bold text-lg group-hover:translate-x-1 transition-transform">
              Start →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}