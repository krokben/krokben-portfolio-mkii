import React from 'react';
import BEMHHelper from 'react-bem-helper';
import Carousel from './Carousel';

const bem = new BEMHHelper({ name: 'portfolio' });

export default function Portfolio() {
  return (
    <div {...bem()}>
      <div {...bem('carousel-container')}>
        <Carousel />
      </div>
    </div>
  );
}
