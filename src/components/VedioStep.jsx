import React, { useState, useRef } from "react";
import ReactPlayer from "react-player";
const VedioStep = () => {
  const [playing, setPlaying] = useState(true);
  const [pausedAt, setPausedAt] = useState(null);
  const playerRef = useRef(null);

  const handleOnPause = () => {
    const currentTime = playerRef.current.getCurrentTime();
    // alert(`You paused the video at ${formatTime(currentTime)}`);
    setPausedAt(currentTime);
    setPlaying(false);
  };
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const handleProgress = ({ playedSeconds }) => {
    if (playedSeconds >= 130) {
      setPlaying(false);
      //   alert("Video reached 120 seconds");
    }
  };
  return (
    <div>
      <ReactPlayer
        ref={playerRef}
        url="https://www.youtube.com/watch?v=wtVsFfFeYNs"
        controls
        width="100%"
        height="100%"
        playing={playing}
        config={{
          youtube: {
            playerVars: { start: 122, end: 130 },
          },
        }}
        onPause={handleOnPause}
        onProgress={handleProgress}
      />
      {pausedAt !== null && (
        <p>You paused the video at {formatTime(pausedAt)}</p>
      )}
    </div>
  );
};

export default VedioStep;
