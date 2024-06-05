import React from "react";
import { audiofile } from "./ImageExports";

const AudioStep = () => {
  return (
    <div>
      <audio controls>
        <source src={audiofile} type="audio/mp4" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default AudioStep;
