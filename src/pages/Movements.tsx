import { MadeWithApplaa } from '@/components/made-with-applaa';
import { movements } from '@/data/movements';
import MovementCard from '@/components/MovementCard';
import { Link } from '@tanstack/react-router';

const Movements = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            🏃 All Movements
          </h1>
          <p className="text-xl text-gray-600">
            Choose any movement and have fun!
          </p>
        </div>

        {/* Movements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {movements.map((movement) => (
            <MovementCard key={movement.id} movement={movement} />
          ))}
        </div>

        {/* Back Button */}
        <div className="mt-12 text-center">
          <Link to="/">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full text-xl font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border-4 border-purple-200">
              ← Back to Home
            </button>
          </Link>
        </div>
      </div>

      <MadeWithApplaa />
    </div>
  );
};

export default Movements;