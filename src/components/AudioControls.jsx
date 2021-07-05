import React from "react";
import PlayIcon from "../../public/icons/play.svg";
import PauseIcon from "../../public/icons/pause.svg";
import NextIcon from "../../public/icons/next.svg";
import PrevIcon from "../../public/icons/prev.svg";

const AudioControls = ({
  isPlaying,
  onPlayPauseClick,
  onPrevClick,
  onNextClick,
}) => (
  <div className="flex justify-center max-w-lg audio-controls">
    {isPlaying ? (
      <button
        type="button"
        className="pause hover:scale-110 text-white transform transition h-auto w-6 xl:w-8 lg:w-6 md:w-4"
        onClick={() => onPlayPauseClick(false)}
        aria-label="Pause"
      >
        <PauseIcon style={{ width: '100%', height: '100%' }} />
      </button>
    ) : (
      <button
        type="button"
        className="play hover:scale-110 text-white transform transition h-auto w-6 xl:w-8 lg:w-6 md:w-4"
        onClick={() => onPlayPauseClick(true)}
        aria-label="Play"
      >
        <PlayIcon style={{ width: '100%', height: '100%' }} />
      </button>
    )}
  </div>
);

export default AudioControls;
