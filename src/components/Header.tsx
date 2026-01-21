import { Link } from '@tanstack/react-router';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

export default function Header() {
  const isMobile = useIsMobile();

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl shadow-lg border-b border-gray-200/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-3xl">💪</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                FitKids
              </h1>
              <p className="text-xs text-gray-500">Move, Play, Have Fun!</p>
            </div>
          </Link>

          <nav className={cn(
            "flex items-center space-x-6",
            isMobile ? "hidden" : "flex"
          )}>
            <Link to="/" className="flex items-center space-x-2 px-4 py-2 rounded-xl text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-all font-medium">
              <span>🏠</span>
              <span>Home</span>
            </Link>
            <Link to="/movements" className="flex items-center space-x-2 px-4 py-2 rounded-xl text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition-all font-medium">
              <span>🏃</span>
              <span>Movements</span>
            </Link>
            <Link to="/rewards" className="flex items-center space-x-2 px-4 py-2 rounded-xl text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-all font-medium">
              <span>🎁</span>
              <span>Rewards</span>
            </Link>
            <Link to="/about" className="flex items-center space-x-2 px-4 py-2 rounded-xl text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all font-medium">
              <span>📚</span>
              <span>About</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}