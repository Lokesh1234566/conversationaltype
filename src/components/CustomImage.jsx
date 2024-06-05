/* eslint-disable react/prop-types */
import React from "react";

const CustomImage = ({ src, selectedOption }) => {
  //   console.log("Selected option value:", selectedOption);

  return (
    <div className="flex items-center">
      <img
        src={src}
        alt="selected_image"
        className="h-32 w-28 mr-2 rounded-xl"
      />
      <p className="text-xl">{selectedOption}</p>
    </div>
  );
};
export default CustomImage;
