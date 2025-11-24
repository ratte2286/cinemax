import { ChevronRight, LogOut, Heart, Download, Clock, Star, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProfileProps {
  onEditProfile: () => void;
  onSettings: () => void;
}

const watchHistory = [
  {
    id: 1,
    title: 'Batman',
    image: 'https://images.unsplash.com/photo-1600480505021-e9cfb05527f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXRtYW4lMjBkYXJrJTIwa25pZ2h0fGVufDF8fHx8MTc2Mzk1OTgzOXww&ixlib=rb-4.1.0&q=80&w=1080',
    progress: 65,
  },
  {
    id: 2,
    title: 'The Dark Knight',
    image: 'https://images.unsplash.com/photo-1600333791066-f3c7e752b44e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMGFjdGlvbiUyMGhlcm98ZW58MXx8fHwxNzYzOTEyODQ0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    progress: 30,
  },
  {
    id: 3,
    title: 'Godzilla',
    image: 'https://images.unsplash.com/photo-1748740412189-005add8cc16e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2R6aWxsYSUyMG1vbnN0ZXJ8ZW58MXx8fHwxNzYzOTYzMDE0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    progress: 90,
  },
];

const favoriteMovies = [
  {
    id: 1,
    title: 'Inception',
    image: 'https://images.unsplash.com/photo-1600333791066-f3c7e752b44e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMGFjdGlvbiUyMGhlcm98ZW58MXx8fHwxNzYzOTEyODQ0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 9.1,
  },
  {
    id: 2,
    title: 'Batman',
    image: 'https://images.unsplash.com/photo-1600480505021-e9cfb05527f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXRtYW4lMjBkYXJrJTIwa25pZ2h0fGVufDF8fHx8MTc2Mzk1OTgzOXww&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 9.2,
  },
  {
    id: 3,
    title: 'Jumanji',
    image: 'https://images.unsplash.com/photo-1535666604855-a6073c323ec0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZHZlbnR1cmUlMjBtb3ZpZXxlbnwxfHx8fDE3NjM5MTc4NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 7.8,
  },
];

export function Profile({ onEditProfile, onSettings }: ProfileProps) {
  return (
    <div className="min-h-screen bg-[#0F1419]">
      {/* Header */}
      <header className="px-4 pt-6 pb-4">
        <h1 className="text-[#FF3D3D] tracking-wider">CineMax</h1>
      </header>

      {/* Profile Section */}
      <div className="px-4 py-6">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-20 h-20 rounded-full bg-gray-800 overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-white mb-1">Alex Johnson</h2>
            <p className="text-gray-400 text-sm">alex.johnson@gmail.com</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8 bg-[#1A1F29] rounded-lg p-4">
          <div className="text-center">
            <div className="flex items-center justify-center text-[#FF3D3D] mb-1">
              <Clock size={20} />
            </div>
            <p className="text-white">142</p>
            <p className="text-gray-400 text-xs">Hours</p>
          </div>
          <div className="text-center border-l border-r border-gray-700">
            <div className="flex items-center justify-center text-[#FF3D3D] mb-1">
              <Heart size={20} />
            </div>
            <p className="text-white">24</p>
            <p className="text-gray-400 text-xs">Favorites</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center text-[#FF3D3D] mb-1">
              <Star size={20} />
            </div>
            <p className="text-white">8.7</p>
            <p className="text-gray-400 text-xs">Avg Rating</p>
          </div>
        </div>

        {/* Continue Watching */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white">Continue Watching</h3>
            <button className="text-[#FF3D3D] text-sm">See All</button>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {watchHistory.map((movie) => (
              <div key={movie.id} className="flex-shrink-0 w-40">
                <div className="relative rounded-lg overflow-hidden bg-gray-800 aspect-video mb-2">
                  <ImageWithFallback
                    src={movie.image}
                    alt={movie.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700">
                    <div
                      className="h-full bg-[#FF3D3D]"
                      style={{ width: `${movie.progress}%` }}
                    />
                  </div>
                </div>
                <p className="text-white text-sm truncate">{movie.title}</p>
                <p className="text-gray-400 text-xs">{movie.progress}% watched</p>
              </div>
            ))}
          </div>
        </div>

        {/* My Favorites */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white">My Favorites</h3>
            <button className="text-[#FF3D3D] text-sm">See All</button>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {favoriteMovies.map((movie) => (
              <div key={movie.id} className="flex-shrink-0 w-32">
                <div className="relative rounded-lg overflow-hidden bg-gray-800 aspect-[2/3] mb-2">
                  <ImageWithFallback
                    src={movie.image}
                    alt={movie.title}
                    className="w-full h-full object-cover"
                  />
                  <button className="absolute top-2 right-2 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center">
                    <Heart size={16} fill="#FF3D3D" className="text-[#FF3D3D]" />
                  </button>
                  <div className="absolute bottom-2 left-2 flex items-center gap-1 bg-black/70 px-2 py-1 rounded">
                    <Star size={12} fill="#FFB800" className="text-[#FFB800]" />
                    <span className="text-white text-xs">{movie.rating}</span>
                  </div>
                </div>
                <p className="text-white text-sm truncate">{movie.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Menu Items */}
        <div className="space-y-1">
          <button
            onClick={onEditProfile}
            className="w-full flex items-center justify-between px-4 py-4 bg-[#1A1F29] rounded-lg hover:bg-[#252B37] transition-colors"
          >
            <span className="text-white">Edit Profile</span>
            <ChevronRight size={20} className="text-gray-400" />
          </button>

          <button className="w-full flex items-center justify-between px-4 py-4 bg-[#1A1F29] rounded-lg hover:bg-[#252B37] transition-colors">
            <span className="text-white">Subscription</span>
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 bg-[#FF3D3D] text-white text-xs rounded">Premium</span>
              <ChevronRight size={20} className="text-gray-400" />
            </div>
          </button>

          <button
            onClick={onSettings}
            className="w-full flex items-center justify-between px-4 py-4 bg-[#1A1F29] rounded-lg hover:bg-[#252B37] transition-colors"
          >
            <span className="text-white">Settings</span>
            <ChevronRight size={20} className="text-gray-400" />
          </button>

          <button className="w-full flex items-center justify-between px-4 py-4 bg-[#1A1F29] rounded-lg hover:bg-[#252B37] transition-colors">
            <span className="text-white">Help & Support</span>
            <ChevronRight size={20} className="text-gray-400" />
          </button>

          <button className="w-full flex items-center justify-between px-4 py-4 bg-[#1A1F29] rounded-lg hover:bg-[#252B37] transition-colors">
            <span className="text-white">Downloads</span>
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 bg-[#FF3D3D] text-white text-xs rounded">3</span>
              <ChevronRight size={20} className="text-gray-400" />
            </div>
          </button>

          <button className="w-full flex items-center justify-between px-4 py-4 bg-[#1A1F29] rounded-lg hover:bg-[#252B37] transition-colors">
            <span className="text-white">Legal Documents</span>
            <ChevronRight size={20} className="text-gray-400" />
          </button>

          <button className="w-full flex items-center gap-3 px-4 py-4 bg-[#1A1F29] rounded-lg hover:bg-[#252B37] transition-colors">
            <LogOut size={20} className="text-[#FF3D3D]" />
            <span className="text-[#FF3D3D]">Log Out</span>
          </button>
        </div>
      </div>
    </div>
  );
}
