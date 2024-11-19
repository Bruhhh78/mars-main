import React from 'react';
import "./VideoPlayer.css";

const VideoPlayer = () => {
  return (
    <div className="video-container">
      <video
        className="responsive-video"
        autoPlay
        muted
        loop
        playsInline
      >
        {/* Provide multiple video formats for compatibility */}
        <source src="/36b1d7065d45486b9ef2af4d015e150e_1280x720_2000K.mp4" type="video/mp4" />
        <source src="/36b1d7065d45486b9ef2af4d015e150e_1280x720_2000K.webm" type="video/webm" />
        {/* Fallback text */}
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
