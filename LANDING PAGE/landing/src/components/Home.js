import React from 'react';

import Carousel from './Carousel';
import Products from './Products';

export default function Home() {
  return (
    <div>
      <div id="domov" className="carousel-main section">
        <Carousel />
      </div>

      <div id="produkti" className="carousel-main section">
        <div id="produkti-anchor"></div>
        <Products />
      </div>

    </div>
  )
}
