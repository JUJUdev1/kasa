import React, { useState } from "react";

const ImageSlider = ({ pictures }) => {
  const [currentPicture, setCurrentPicture] = useState(0);
  const arrayPicturesLength = pictures.length;

  function nextPicture() {
    setCurrentPicture(
      currentPicture === arrayPicturesLength - 1 ? 0 : currentPicture + 1
    );
  }

  function prevPicture() {
    setCurrentPicture(
      currentPicture === 0 ? arrayPicturesLength - 1 : currentPicture - 1
    );
  }

  const hasMultiplePictures = arrayPicturesLength > 1;

  return (
    <div className="imageSlider">
      <img src={pictures[currentPicture]} alt="images" />

      {hasMultiplePictures && (
        <div className="arrow-left" onClick={prevPicture} ></div>
      )}

      {hasMultiplePictures && (
        <div className="arrow-right" onClick={nextPicture}> </div>
      )}
      {hasMultiplePictures && (
        <p
          className="imageSlider_counter"
        >
          {currentPicture + 1} / {arrayPicturesLength}
        </p>
      )}
    </div>
  );
};

export default ImageSlider;
