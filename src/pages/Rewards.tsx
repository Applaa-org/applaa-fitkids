import { MadeWithApplaa } from '@/components/made-with-applaa';
import { rewards } from '@/data/rewards';
import RewardCard from '@/components/RewardCard';
import { Link } from '@tanstack/react-router';

const Rewards = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            🎁 Your Rewards
          </h1>
          <p className="text-xl text-gray-600">
            Keep moving to unlock more rewards!
          </p>
        </div>

        {/* Rewards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rewards.map((reward) => (
            <RewardCard 
              key={reward.id} 
              reward={reward} 
              isUnlocked={false} 
            />
          ))}
        </div>

        {/* Progress Section */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mt-12 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            📊 Your Progress
          </h2>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-lg text-gray-700">Total Points Earned</span>
              <span className="text-2xl font-bold text-orange-500">0 / 100</span>
            </div>
            
            <div className="w-full bg-gray-200 rounded-full h-6 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 h-full rounded-full transition-all duration-1000"
                style={{ width: '0%' }}
              ></div>
            </div>
            
            <p className="text-center text-gray-600">
              Complete more movements to earn points and unlock rewards!
            </p>
          </div>
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

export default Rewards;