import { useNavigate, useParams } from '@tanstack/react-router';
import { MadeWithApplaa } from '@/components/made-with-applaa';
import { movements } from '@/data/movements';
import CharacterAvatar from '@/components/CharacterAvatar';
import RewardAnimation from '@/components/RewardAnimation';
import { cn } from '@/lib/utils';
import { difficultyColors, difficultyLabels } from '@/data/movements';
import { useState } from 'react';

const MovementDetail = () => {
  const { id } = useParams({ from: '/movements/$id' });
  const navigate = useNavigate();
  const movement = movements.find(m => m.id === parseInt(id));
  const [showReward, setShowReward] = useState(false);

  if (!movement) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Oops!</h1>
          <p className="text-xl text-gray-600 mb-4">Movement not found</p>
          <button 
            onClick={() => navigate({ to: '/movements' })}
            className="bg-orange-500 text-white px-6 py-3 rounded-full text-lg font-bold hover:bg-orange-600 transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const handleComplete = () => {
    setShowReward(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
      {/* Reward Animation */}
      {showReward && (
        <RewardAnimation 
          emoji="🎉" 
          onComplete={() => {
            setShowReward(false);
            navigate({ to: '/rewards' });
          }}
        />
      )}

      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <button 
          onClick={() => navigate({ to: '/movements' })}
          className="mb-6 flex items-center space-x-2 text-gray-600 hover:text-orange-600 transition-colors"
        >
          <span className="text-2xl">←</span>
          <span className="text-xl font-medium">Back to Movements</span>
        </button>

        {/* Movement Header */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className={cn(
              "w-48 h-48 rounded-full flex items-center justify-center",
              movement.characterColor
            )}>
              <span className="text-8xl">{movement.emoji}</span>
            </div>
            
            <div className="text-center md:text-left flex-1">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                <span className={cn(
                  "px-4 py-2 rounded-full text-sm font-bold border-2",
                  difficultyColors[movement.difficulty]
                )}>
                  {difficultyLabels[movement.difficulty]}
                </span>
                <span className="text-gray-500 font-medium flex items-center">
                  <span>⏱️</span>
                  <span className="ml-1">{movement.duration}</span>
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                {movement.title}
              </h1>
              
              <p className="text-xl text-gray-600 mb-6">
                {movement.description}
              </p>

              <CharacterAvatar 
                name={movement.character}
                emoji="😊"
                color={movement.characterColor}
                size="lg"
              />
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="mr-3">📝</span>
            How to Do It
          </h2>
          
          <div className="space-y-4">
            {movement.instructions.map((instruction, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0",
                  movement.characterColor
                )}>
                  {index + 1}
                </div>
                <p className="text-lg text-gray-700 pt-2">{instruction}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Complete Button */}
        <div className="text-center">
          <button 
            onClick={handleComplete}
            className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white px-12 py-6 rounded-full text-2xl font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            ✅ I Did It! Complete Movement
          </button>
        </div>
      </div>

      <MadeWithApplaa />
    </div>
  );
};

export default MovementDetail;