import { Search, Bell, Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HomeProps {
  onMovieClick: (movie: any) => void;
}

const topMovies = [
  {
    id: 1,
    title: 'Batman',
    genre: 'Action, Mystery',
    rating: 9.2,
    image: 'https://images.unsplash.com/photo-1600480505021-e9cfb05527f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXRtYW4lMjBkYXJrJTIwa25pZ2h0fGVufDF8fHx8MTc2Mzk1OTgzOXww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 2,
    title: 'The Dark Knight',
    genre: 'Action, Thriller',
    rating: 8.9,
    image: 'https://images.unsplash.com/photo-1600333791066-f3c7e752b44e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMGFjdGlvbiUyMGhlcm98ZW58MXx8fHwxNzYzOTEyODQ0fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 3,
    title: 'Godzilla',
    genre: 'Sci-Fi, Action',
    rating: 8.5,
    image: 'https://images.unsplash.com/photo-1748740412189-005add8cc16e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2R6aWxsYSUyMG1vbnN0ZXJ8ZW58MXx8fHwxNzYzOTYzMDE0fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 4,
    title: 'Jumanji',
    genre: 'Adventure, Comedy',
    rating: 7.8,
    image: 'https://images.unsplash.com/photo-1535666604855-a6073c323ec0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZHZlbnR1cmUlMjBtb3ZpZXxlbnwxfHx8fDE3NjM5MTc4NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 5,
    title: 'Inception',
    genre: 'Sci-Fi, Thriller',
    rating: 9.1,
    image: 'https://images.unsplash.com/photo-1600333791066-f3c7e752b44e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMGFjdGlvbiUyMGhlcm98ZW58MXx8fHwxNzYzOTEyODQ0fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

const trendingMovies = [
  {
    id: 6,
    title: 'Tokyo Drift',
    genre: 'Drama, Action',
    rating: 8.7,
    image: 'https://images.unsplash.com/photo-1600333791066-f3c7e752b44e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMGFjdGlvbiUyMGhlcm98ZW58MXx8fHwxNzYzOTEyODQ0fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 7,
    title: 'Extraction',
    genre: 'Action, Thriller',
    rating: 8.4,
    image: 'https://images.unsplash.com/photo-1600480505021-e9cfb05527f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXRtYW4lMjBkYXJrJTIwa25pZ2h0fGVufDF8fHx8MTc2Mzk1OTgzOXww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 8,
    title: 'Godzilla vs Kong',
    genre: 'Sci-Fi',
    rating: 8.2,
    image: 'https://images.unsplash.com/photo-1748740412189-005add8cc16e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2R6aWxsYSUyMG1vbnN0ZXJ8ZW58MXx8fHwxNzYzOTYzMDE0fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 9,
    title: 'Jumanji: Next Level',
    genre: 'Adventure',
    rating: 7.9,
    image: 'https://images.unsplash.com/photo-1535666604855-a6073c323ec0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZHZlbnR1cmUlMjBtb3ZpZXxlbnwxfHx8fDE3NjM5MTc4NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export function Home({ onMovieClick }: HomeProps) {
  return (
    <div className="min-h-screen bg-[#0F1419]">
      {/* Header */}
      <header className="px-4 pt-6 pb-4 flex items-center justify-between">
        <div>
          <h1 className="text-[#FF3D3D] tracking-wider">CineMax</h1>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-gray-400 hover:text-white transition-colors">
            <Search size={20} />
          </button>
          <button className="text-gray-400 hover:text-white transition-colors relative">
            <Bell size={20} />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#FF3D3D] rounded-full"></span>
          </button>
        </div>
      </header>

      {/* Top Rated Section */}
      <section className="px-4 py-6">
        <h2 className="mb-4 text-white">Top Rated</h2>
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
          {topMovies.map((movie, index) => (
            <div key={movie.id} className="flex-shrink-0 snap-start cursor-pointer" onClick={() => onMovieClick(movie)}>
              <div className="relative">
                <div className="absolute top-2 left-2 bg-[#FF3D3D] text-white px-3 py-1 rounded-full z-10">
                  {index + 1}
                </div>
                <div className="w-32 h-48 rounded-lg overflow-hidden bg-gray-800">
                  <ImageWithFallback
                    src={movie.image}
                    alt={movie.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-2">
                  <div className="flex items-center gap-1 text-yellow-500 text-xs mb-1">
                    <Star size={12} fill="currentColor" />
                    <span>{movie.rating}</span>
                  </div>
                  <p className="text-white text-sm truncate w-32">{movie.title}</p>
                  <p className="text-gray-400 text-xs truncate w-32">{movie.genre}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trending Movies Section */}
      <section className="px-4 py-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-white">Top at Box Office</h2>
          <button className="text-[#FF3D3D] text-sm">See All</button>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
          {trendingMovies.map((movie) => (
            <div key={movie.id} onClick={() => onMovieClick(movie)} className="cursor-pointer flex-shrink-0 snap-start w-40">
              <div className="relative rounded-lg overflow-hidden bg-gray-800 aspect-[2/3]">
                <ImageWithFallback
                  src={movie.image}
                  alt={movie.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/90 to-transparent">
                  <div className="flex items-center gap-1 text-yellow-500 text-xs mb-1">
                    <Star size={12} fill="currentColor" />
                    <span>{movie.rating}</span>
                  </div>
                  <p className="text-white text-sm truncate">{movie.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}