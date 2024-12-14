import React, { useState } from 'react';
import { Play, Pause, X } from 'lucide-react';

interface Video {
  id: string;
  thumbnail: string;
  url: string;
  title: string;
}

interface VideoGalleryProps {
  videos: Video[];
}

export const VideoGallery: React.FC<VideoGalleryProps> = ({ videos }) => {
  const [activeVideo, setActiveVideo] = useState<Video | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoClick = (video: Video) => {
    setActiveVideo(video);
    setIsPlaying(true);
  };

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {videos.map((video) => (
          <div
            key={video.id}
            className="relative group cursor-pointer"
            onClick={() => handleVideoClick(video)}
          >
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full aspect-video object-cover rounded-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
              <Play className="w-12 h-12 text-white" />
            </div>
          </div>
        ))}
      </div>

      {activeVideo && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
          <div className="relative max-w-4xl w-full mx-4">
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300"
            >
              <X className="w-8 h-8" />
            </button>
            <video
              src={activeVideo.url}
              controls
              autoPlay={isPlaying}
              className="w-full rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};