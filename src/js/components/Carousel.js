import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BEMHHelper from 'react-bem-helper';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';

const bem = new BEMHHelper({ name: 'carousel' });

class Carousel extends Component {
  componentWillMount() {

  }

  render() {
    return (
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={3}
      >
        <Slider
          {...bem()}
          isPlaying
          interval={2000}
        >
          <Slide index={0}>
            <figure {...bem('figure')}>
              <div
                {...bem('image')}
                style={{ backgroundImage: 'url(https://fillmurray.com/200/200)' }}
              >
                <img src="https://fillmurray.com/200/200" alt="" />
              </div>
              <figcaption {...bem('figcaption')}>
                <h2>Project 1</h2>
                <p>This is project number 1.</p>
              </figcaption>
            </figure>
          </Slide>
          <Slide index={1}>
            <figure {...bem('figure')}>
              <div
                {...bem('image')}
                style={{ backgroundImage: 'url(https://fillmurray.com/200/200)' }}
              >
                <img src="https://fillmurray.com/200/200" alt="" />
              </div>
              <figcaption {...bem('figcaption')}>
                <h2>Project 2</h2>
                <p>This is project number 2.</p>
              </figcaption>
            </figure>
          </Slide>
          <Slide index={2}>
            <figure {...bem('figure')}>
              <div
                {...bem('image')}
                style={{ backgroundImage: 'url(https://fillmurray.com/200/200)' }}
              >
                <img src="https://fillmurray.com/200/200" alt="" />
              </div>
              <figcaption {...bem('figcaption')}>
                <h2>Project 3</h2>
                <p>This is project number 3.</p>
              </figcaption>
            </figure>
          </Slide>
        </Slider>
      </CarouselProvider>
    );
  }
}

Carousel.propTypes = {

};

const mapStateToProps = state => ({

});

export default connect(mapStateToProps, {})(Carousel);
