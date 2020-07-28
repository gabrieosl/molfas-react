/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import { Container, SideImages, CurrentImage } from './styles';

function ImagesViewer({ images, defaultImage }) {
  const [currentImage, setCurrentImage] = useState(defaultImage.url);
  return (
    <Container>
      <SideImages>
        {images.map(image => (
          <button type="button" onClick={() => setCurrentImage(image.url)}>
            <img src={image.url} alt="pic" />
          </button>
        ))}
      </SideImages>
      <CurrentImage src={currentImage} />
    </Container>
  );
}

export default ImagesViewer;
