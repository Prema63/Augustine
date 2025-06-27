"use client"
import { useState } from "react";

const VideoThumbnail = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="relative max-w-5xl mx-auto ">
      {/* Thumbnail Image */}
      {!showVideo ? (
        <div className="relative cursor-pointer" onClick={() => setShowVideo(true)}>
          <img
            src="https://augustine.qodeinteractive.com/wp-content/uploads/2020/12/inner-img27.jpg"
            alt="Video thumbnail"
            className="h-full w-full object-cover"
          />
          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-[#0b6354] hover:p-9 transition  duration-400 rounded-full p-12 shadow-lg">
              <svg
                width="40"
                height="40"
                viewBox="0 0 28.799 36.456"
                fill="currentColor"
                className="text-white"
              >
                <path d="M5,3,31.8,20.228,5,37.456Z" transform="translate(-4 -2)" />
              </svg>
            </div>
          </div>
        </div>
      ) : (
        // Embedded video player
        <div className="aspect-video w-full">
          <video
            className="w-full h-full "
            controls
            autoPlay
            src="https://augustine.qodeinteractive.com/wp-content/uploads/2020/11/video2.mp4"
          />
        </div>
      )}
    </div>
  );
};

export default VideoThumbnail;