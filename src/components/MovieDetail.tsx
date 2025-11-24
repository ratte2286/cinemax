import { useState } from 'react';
import { ArrowLeft, Play, Heart, Share2, Download, Star, Volume2, VolumeX, Maximize, Settings as SettingsIcon } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface MovieDetailProps {
  movie: any;
  onBack: () => void;
}

export function MovieDetail({ movie, onBack }: MovieDetailProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsPlaying(false);
            return 100;
          }
          return prev + 0.5;
        });
      }, 100);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const currentTime = Math.floor((progress / 100) * 7380); // 2:03:00 total
  const totalTime = 7380;

  return (
    <div className="min-h-screen bg-[#0F1419]">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-20 px-4 pt-6 pb-4 bg-gradient-to-b from-black/60 to-transparent">
        <div className="flex items-center justify-between">
          <button onClick={onBack} className="text-white">
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-[#FF3D3D] tracking-wider">CineMax</h1>
          <button className="text-white">
            <Share2 size={20} />
          </button>
        </div>
      </header>

      {/* Video Player */}
      <div className="relative w-full aspect-video bg-black">
        <ImageWithFallback
          src={movie?.image}
          alt={movie?.title}
          className="w-full h-full object-cover"
        />
        
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <button
              onClick={handlePlayPause}
              className="w-16 h-16 rounded-full bg-[#FF3D3D] flex items-center justify-center hover:bg-[#FF5555] transition-colors"
            >
              <Play size={28} fill="white" className="text-white ml-1" />
            </button>
          </div>
        )}

        {isPlaying && (
          <div className="absolute inset-0 bg-black/20">
            {/* Top Controls */}
            <div className="absolute top-4 right-4 flex items-center gap-3">
              <button className="text-white bg-black/50 p-2 rounded">
                <SettingsIcon size={20} />
              </button>
            </div>

            {/* Bottom Controls */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
              {/* Progress Bar */}
              <div className="mb-4">
                <div className="w-full h-1 bg-gray-600 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#FF3D3D] transition-all"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              {/* Time and Controls */}
              <div className="flex items-center justify-between text-white text-sm">
                <span>{formatTime(currentTime)}</span>
                <div className="flex items-center gap-3">
                  <button onClick={() => setIsMuted(!isMuted)}>
                    {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                  </button>
                  <button>
                    <Maximize size={20} />
                  </button>
                </div>
                <span>{formatTime(totalTime)}</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Movie Info */}
      <div className="px-4 py-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h2 className="text-white mb-2">{movie?.title || 'Бэтмен'}</h2>
            <div className="flex items-center gap-4 text-gray-400 text-sm">
              <div className="flex items-center gap-1">
                <Star size={16} fill="#FFB800" className="text-[#FFB800]" />
                <span className="text-white">{movie?.rating || '9.2'}</span>
              </div>
              <span>2022</span>
              <span>2ч 3мин</span>
            </div>
          </div>
          <button className="text-[#FF3D3D]">
            <Heart size={24} />
          </button>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <button
            onClick={handlePlayPause}
            className="bg-[#FF3D3D] text-white py-3 rounded-lg flex items-center justify-center gap-2"
          >
            <Play size={20} fill="white" />
            <span>Watch Now</span>
          </button>
          <button className="bg-gray-800 text-white py-3 rounded-lg flex items-center justify-center gap-2">
            <Download size={20} />
            <span>Download</span>
          </button>
        </div>

        {/* Synopsis */}
        <div className="mb-6">
          <h3 className="text-white mb-2">Synopsis</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            When the Riddler, a sadistic serial killer, begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement.
          </p>
        </div>

        {/* Cast */}
        <div>
          <h3 className="text-white mb-4">Cast</h3>
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {['Robert Pattinson', 'Jeffrey Wright', 'Zoë Kravitz', 'Paul Dano', 'Colin Farrell'].map((actor, index) => (
              <div key={index} className="flex-shrink-0 text-center">
                <div className="w-20 h-20 rounded-full bg-gray-800 mb-2 overflow-hidden">
                  <ImageWithFallback
                    src={`https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop`}
                    alt={actor}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-white text-xs">{actor}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recommendations */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white">Recommendations</h3>
            <button className="text-[#FF3D3D] text-sm">See All</button>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="relative rounded-lg overflow-hidden bg-gray-800 aspect-[2/3] w-28 flex-shrink-0">
                <ImageWithFallback
                  src={movie?.image}
                  alt="Recommendation"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}