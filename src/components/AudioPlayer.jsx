import React, { useState, useEffect, useRef } from "react";
import AudioControls from "./AudioControls";
import AudioBackdrop from './AudioBackdrop';
import PreviewOutlineIcon from '../../public/icons/preview-outline.svg';
import AssetInfo from './AssetInfo';

const AudioPlayer = (props) => {
  // State
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Destructure for conciseness
  const {
    title,
    artist,
    color,
    cover,
    audioUrl,
    isNFT,
    isOwned,
    tokenId,
    addressId,
    showProgressBar = false,
    backgroundImage,
  } = props;
  // Refs
  const audioRef = useRef(new Audio(audioUrl));
  const intervalRef = useRef();
  const isReady = useRef(false);

  // Destructure for conciseness
  const { duration } = audioRef.current;

  const currentPercentage = duration
    ? `${(trackProgress / duration) * 100}%`
    : "0%";
  const trackStyling = `
    -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, #fff), color-stop(${currentPercentage}, #777))
  `;

  const startTimer = () => {
    // Clear any timers already running
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        toNextTrack();
      } else {
        setTrackProgress(audioRef.current.currentTime);
      }
    }, [1000]);
  };

  const onScrub = (value) => {
    // Clear any timers already running
    clearInterval(intervalRef.current);
    audioRef.current.currentTime = value;
    setTrackProgress(audioRef.current.currentTime);
  };

  const onScrubEnd = () => {
    // If not already playing, start
    if (!isPlaying) {
      setIsPlaying(true);
    }
    startTimer();
  };

  useEffect(() => {
    if(isOwned || !isNFT) {
      audioRef.current.src = audioUrl;
      audioRef.current.load();
    }
  }, [audioUrl, isOwned, isNFT])

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      console.log(audioRef.current);
      startTimer();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    // Pause and clean up on unmount
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <>
      { isNFT && !isOwned ? <AssetInfo tokenId={tokenId} addressId={addressId} backgroundImage={backgroundImage} />
        :(
          <>
            <div className="text-white max-w-full max-h-full w-full h-full p-2 rounded-xl mx-auto flex justify-center items-center">
              <div className="text-center overflow-hidden">
                <img
                  className="h-1/3 w-1/3 md:h-1/2 md:w-1/2 mx-auto mb-3 md:mb-5 rounded-full m-1 ring-2 ring-white"
                  src={cover}
                  alt={`track artwork for ${title} by ${artist}`}
                />
                <h2 className="font-semibold truncate text-xs md:text-md">{title}</h2>
                <h3 className="artist mb-2 xl:mb-5 truncate text-xs md:text-md">{artist}</h3>
                {!isNFT || isOwned ? (
                  <>
                    <AudioControls
                      isPlaying={isPlaying}
                      onPlayPauseClick={setIsPlaying}
                    />
                    {showProgressBar &&
                      <input
                        type="range"
                        value={trackProgress}
                        step="1"
                        min="0"
                        max={duration ? duration : `${duration}`}
                        className="bottom-0 w-max mt-5"
                        onChange={(e) => onScrub(e.target.value)}
                        onMouseUp={onScrubEnd}
                        onKeyUp={onScrubEnd}
                        style={{ background: trackStyling }}
                      />
                    }
                  </>
                ) : (
                  <button className="hover:scale-110 text-white transform transition h-auto w-5 xl:w-10 lg:w-8 sm:w-5">
                    <PreviewOutlineIcon className="fill-current text-white" style={{ width: '100%', height: '100%' }} />
                  </button>
                )}
              </div>
              <AudioBackdrop
                activeColor={color}
                isPlaying={isPlaying}
              />
            </div>
          </>
        )}
    </>
  );
};

export default AudioPlayer;
