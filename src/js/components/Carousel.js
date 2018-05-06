import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BEMHHelper from 'react-bem-helper';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';

const bem = new BEMHHelper({ name: 'carousel' });

class Carousel extends Component {
  render() {
    return (
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={this.props.portfolio.length}
        touchEnabled={false}
        dragEnabled={false}
      >
        <Slider
          {...bem()}
          isPlaying
          interval={2000}
        >
          {
            this.props.portfolio.map((item, i) => (
              <Slide key={`portfolio-item-${i}`} index={i}>
                <a {...bem('figure-wrapper')} href={item.url} target="_blank" rel="noopener noreferrer">
                  <figure {...bem('figure')}>
                    <div
                      {...bem('image')}
                      style={{ backgroundImage: `url(${item.image_url})` }}
                    >
                      <img src={item.image_url} alt={item.title} />
                    </div>
                    <figcaption {...bem('figcaption')}>
                      <h2>{item.title}</h2>
                      <p>{item.description}</p>
                    </figcaption>
                  </figure>
                </a>
              </Slide>
            ))
          }
        </Slider>
      </CarouselProvider>
    );
  }
}

Carousel.propTypes = {
  portfolio: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({
  portfolio: state.portfolio.items,
});

export default connect(mapStateToProps)(Carousel);
