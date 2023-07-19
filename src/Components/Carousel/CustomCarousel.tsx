import React from 'react';
import './Carousel.css';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function CustomCarousel() {
  return (
    <div id='carousel' className='container'>
      <Carousel showArrows={true} autoPlay={false} infiniteLoop={true}>
        <div>
          <img src="tanzania.jpg" alt='/' />
        </div>
        <div>
          <img src="hawai.jpg" alt='/' />
        </div>
        <div>
          <img src="borabora.jpg" alt='/' />
        </div>
      </Carousel>
    </div>
  );
}

export default CustomCarousel;
