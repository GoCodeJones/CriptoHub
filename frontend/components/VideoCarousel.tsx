"use client";

import { useState } from "react";

interface Video {
  id: string;
  title: string;
  youtube_url: string;
  thumbnail: string;
}

interface VideoCarouselProps {
  videos: Video[];
}

export default function VideoCarousel({ videos }: VideoCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const currentVideo = videos[currentIndex];

  return (
    <div className="relative">
      <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden border-2 border-yellow-400">
        <iframe
          width="100%"
          height="100%"
          src={currentVideo.youtube_url}
          title={currentVideo.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
      
      <div className="mt-4 flex items-center justify-between">
        <button
          onClick={prev}
          className="bg-yellow-400 text-black font-bold px-6 py-2 rounded hover:bg-yellow-300 transition-colors"
        >
          Anterior
        </button>
        
        <div className="text-center">
          <h3 className="text-xl font-bold text-yellow-400">{currentVideo.title}</h3>
          <p className="text-gray-400 text-sm mt-1">
            {currentIndex + 1} de {videos.length}
          </p>
        </div>
        
        <button
          onClick={next}
          className="bg-yellow-400 text-black font-bold px-6 py-2 rounded hover:bg-yellow-300 transition-colors"
        >
          Próximo
        </button>
      </div>
    </div>
  );
}