import React, { useEffect } from "react";

const AudioBackdrop = ({ dominantColor, isPlaying, backgroundImage }) => {
  useEffect(() => {
    document.documentElement.style.setProperty("--active-color", dominantColor);
  }, [dominantColor]);

  return (
    <div
    className={`color-backdrop ${isPlaying ? "playing" : "idle"} overflow-hidden`}
    style={{
      backgroundColor: dominantColor,
      background: `linear-gradient(45deg, ${dominantColor} 50%, rgba(255, 255, 255, 0.9) 120%) no-repeat`,
    }}
    >
      <img src={backgroundImage} className='opacity-5 object-cover h-full w-full'/>
    </div>);
};

export default AudioBackdrop;
