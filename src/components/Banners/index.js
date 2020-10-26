import React from 'react';

import { Container, Banner } from './styles';

function Banners({ banners = [1, 2, 3, 4, 5] }) {
  return (
    <Container>
      {banners.map(banner => (
        <Banner backgroundURL={banner.imageURL || '/banner1.jpg'}>
          <h1>Title {banner}</h1>
          <h2>Subtitle</h2>
          <button type="button">call to action</button>
        </Banner>
      ))}
    </Container>
  );
}

export default Banners;
