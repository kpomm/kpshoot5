import React from 'react';

const images = require.context('../../images', true);
const imageList = images.keys().map((image) => images(image));

function ImageGallery() {
  return (
    <div>
      {imageList.map((image, index) => (
        <img className="image" src={image.default} alt="unknown" />
      ))}
    </div>
  );
}

export default ImageGallery;
