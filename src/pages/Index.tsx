import { MadeWithApplaa } from '@/components/made-with-applaa';
import { movements } from '@/data/movements';
import MovementCard from '@/components/MovementCard';
import { Link } from '@tanstack/react-router';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600 py-20 px-4">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 text-6xl animate-bounce" style={{ animationDelay: '0s' }}>🌟</div>
          <div className="absolute top-20 right-20 text-6xl animate-bounce" style={{ animationDelay: '0.5s' }}>⭐</div>
          <div className="absolute bottom-10 left-1/4 text-6xl animate-bounce" style={{ animationDelay: '1s' }}>✨</div>
          <div className="absolute bottom-20 right-1/3 text-6xl animate-bounce" style={{ animationDelay: '1.5s' }}>💫</div>
        </div>
        
        <div className="container mx-auto text-center relative z-10">
          <div className="mb-6">
            <span className="text-8xl animate-bounce">💪</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-lg">
            Welcome to FitKids!
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get moving, have fun, and earn amazing rewards! Choose a movement below and start your fitness adventure!
          </p>
          <Link to="/movements">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full text-xl font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
              🚀 Start Moving!
            </button>
          </Link>
        </div>
      </div>

      {/* Movements Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            🎮 Fun Movements
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Pick a movement and have fun exercising!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {movements.map((movement) => (
            <MovementCard key={movement.id} movement={movement} />
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white/80 backdrop-blur-sm py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-6xl mb-4">🏃</div>
              <h3 className="text-3xl font-bold text-orange-500 mb-2">8 Movements</h3>
              <p className="text-gray-600">Choose from our fun exercises</p>
            </div>
            <div className="p-6">
              <div className="text-6xl mb-4">🎁</div>
              <h3 className="text-3xl font-bold text-pink-500 mb-2">6 Rewards</h3>
              <p className="text-gray-600">Earn badges and prizes</p>
            </div>
            <div className="p-6">
              <div className="text-6xl mb-4">😊</div>
              <h3 className="text-3xl font-bold text-purple-500 mb-2">8 Characters</h3>
              <p className="text-gray-600">Meet your fitness friends</p>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-yellow-50 border-4 border-yellow-300 rounded-2xl p-6 max-w-3xl mx-auto">
          <div className="flex items-start space-x-4">
            <span className="text-4xl">⚠️</span>
            <div>
              <h3 className="text-xl font-bold text-yellow-800 mb-2">Educational Only</h3>
              <p className="text-yellow-700">
                This app is for educational purposes only. Always exercise safely and have adult supervision when exercising.
              </p>
            </div>
          </div>
        </div>
      </div>

      <MadeWithApplaa />
    </div>
  );
};

export default Index;