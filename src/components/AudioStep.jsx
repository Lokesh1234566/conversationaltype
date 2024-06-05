import React from "react";

const AudioStep = () => {
  return (
    <div>
      <audio controls>
        <source
          src="https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3"
          type="audio/mp4"
        />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default AudioStep;
