import { MadeWithApplaa } from '@/components/made-with-applaa';
import { Link } from '@tanstack/react-router';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            📚 About FitKids
          </h1>
          <p className="text-xl text-gray-600">
            Learn why exercise is important for kids!
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Why Exercise Matters */}
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="mr-3">💪</span>
              Why Exercise is Important
            </h2>
            <div className="space-y-4 text-lg text-gray-700">
              <p>
                <strong>Builds Strong Muscles:</strong> Exercise helps kids build strong muscles and bones that will last a lifetime.
              </p>
              <p>
                <strong>Improves Focus:</strong> Regular physical activity helps children concentrate better in school and at home.
              </p>
              <p>
                <strong>Boosts Mood:</strong> Exercise releases chemicals in the brain that make you feel happy and relaxed.
              </p>
              <p>
                <strong>Healthy Weight:</strong> Staying active helps maintain a healthy weight and prevents obesity.
              </p>
              <p>
                <strong>Good Sleep:</strong> Kids who exercise regularly sleep better and have more energy during the day.
              </p>
            </div>
          </div>

          {/* Fun Facts */}
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="mr-3">✨</span>
              Fun Exercise Facts
            </h2>
            <div className="space-y-4 text-lg text-gray-700">
              <p>
                <strong>60 Minutes:</strong> Kids should get at least 60 minutes of physical activity every day!
              </p>
              <p>
                <strong>Brain Power:</strong> Exercise helps your brain grow and learn better.
              </p>
              <p>
                <strong>Make Friends:</strong> Playing sports and exercising is a great way to meet new friends.
              </p>
              <p>
                <strong>Have Fun:</strong> Exercise doesn't have to be boring - it can be super fun!
              </p>
            </div>
          </div>

          {/* Safety Tips */}
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="mr-3">🛡️</span>
              Safety Tips
            </h2>
            <div className="space-y-4 text-lg text-gray-700">
              <p>
                <strong>Warm Up:</strong> Always warm up before exercising to prevent injuries.
              </p>
              <p>
                <strong>Stay Hydrated:</strong> Drink water before, during, and after exercise.
              </p>
              <p>
                <strong>Listen to Your Body:</strong> If something hurts, stop and rest.
              </p>
              <p>
                <strong>Adult Supervision:</strong> Always have an adult nearby when exercising.
              </p>
              <p>
                <strong>Wear Proper Shoes:</strong> Good shoes help protect your feet and prevent injuries.
              </p>
            </div>
          </div>

          {/* Back Button */}
          <div className="text-center mt-12">
            <Link to="/">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-full text-xl font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border-4 border-purple-200">
                ← Back to Home
              </button>
            </Link>
          </div>
        </div>
      </div>

      <MadeWithApplaa />
    </div>
  );
};

export default About;