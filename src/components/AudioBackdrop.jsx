import React, { useEffect } from "react";

const AudioBackdrop = ({ activeColor, trackIndex, isPlaying }) => {
  useEffect(() => {
    document.documentElement.style.setProperty("--active-color", activeColor);
  }, [trackIndex, activeColor]);

  return <div className={`color-backdrop ${isPlaying ? "playing" : "idle"}`} />;
};

export default AudioBackdrop;
