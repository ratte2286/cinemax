import { useState } from 'react';
import { Home } from './components/Home';
import { MovieDetail } from './components/MovieDetail';
import { Profile } from './components/Profile';
import { EditProfile } from './components/EditProfile';
import { Settings } from './components/Settings';
import { Home as HomeIcon, User, Settings as SettingsIcon } from 'lucide-react';

type Page = 'home' | 'movie-detail' | 'profile' | 'edit-profile' | 'settings';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedMovie, setSelectedMovie] = useState<any>(null);

  const handleMovieClick = (movie: any) => {
    setSelectedMovie(movie);
    setCurrentPage('movie-detail');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onMovieClick={handleMovieClick} />;
      case 'movie-detail':
        return <MovieDetail movie={selectedMovie} onBack={() => setCurrentPage('home')} />;
      case 'profile':
        return <Profile onEditProfile={() => setCurrentPage('edit-profile')} onSettings={() => setCurrentPage('settings')} />;
      case 'edit-profile':
        return <EditProfile onBack={() => setCurrentPage('profile')} />;
      case 'settings':
        return <Settings onBack={() => setCurrentPage('profile')} />;
      default:
        return <Home onMovieClick={handleMovieClick} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0F1419] text-white pb-20">
      {renderPage()}
      
      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-[#1A1F29] border-t border-gray-800 px-6 py-4">
        <div className="flex justify-around items-center max-w-md mx-auto">
          <button
            onClick={() => setCurrentPage('home')}
            className={`flex flex-col items-center gap-1 transition-colors ${
              currentPage === 'home' ? 'text-[#FF3D3D]' : 'text-gray-400'
            }`}
          >
            <HomeIcon size={24} />
            <span className="text-xs">Home</span>
          </button>
          <button
            onClick={() => setCurrentPage('settings')}
            className={`flex flex-col items-center gap-1 transition-colors ${
              currentPage === 'settings' ? 'text-[#FF3D3D]' : 'text-gray-400'
            }`}
          >
            <SettingsIcon size={24} />
            <span className="text-xs">Settings</span>
          </button>
          <button
            onClick={() => setCurrentPage('profile')}
            className={`flex flex-col items-center gap-1 transition-colors ${
              currentPage === 'profile' ? 'text-[#FF3D3D]' : 'text-gray-400'
            }`}
          >
            <User size={24} />
            <span className="text-xs">Profile</span>
          </button>
        </div>
      </nav>
    </div>
  );
}