// VideoPlayer.jsx
import React from 'react';
import "./VideoPlayer.css"

const VideoPlayer = () => {
  return (
    <div className="video-container">
      <video
        src="/36b1d7065d45486b9ef2af4d015e150e_1280x720_2000K.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="responsive-video"
      />
    </div>
  );
};

export default VideoPlayer;
