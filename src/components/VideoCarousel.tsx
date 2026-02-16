import { useState } from "react";
import { videos } from "@/data/content";

const VideoCarousel = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? videos.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === videos.length - 1 ? 0 : c + 1));

  const video = videos[current];

  return (
    <div className="space-y-4">
      <div className="overflow-hidden rounded-2xl border border-border">
        <div className="aspect-video">
          <iframe
            className="h-full w-full"
            src={`https://www.youtube.com/embed/${video.embedId}`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <button
          onClick={prev}
          className="rounded-2xl border border-border px-6 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
        >
          Previous
        </button>
        <span className="text-sm text-muted-foreground">
          {video.title} ({current + 1}/{videos.length})
        </span>
        <button
          onClick={next}
          className="rounded-2xl border border-border px-6 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default VideoCarousel;
