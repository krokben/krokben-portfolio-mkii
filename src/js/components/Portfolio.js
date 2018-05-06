import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BEMHHelper from 'react-bem-helper';
import Carousel from './Carousel';
import { fetchPortfolio } from '../actions/portfolioActions';

const bem = new BEMHHelper({ name: 'portfolio' });

class Portfolio extends Component {
  componentWillMount() {
    this.props.fetchPortfolio();
  }

  render() {
    return (
      <div {...bem()}>
        <h2 {...bem('headline')}>Here are some silly games I made while studying...</h2>
        <div {...bem('carousel-container')}>
          <Carousel />
        </div>
      </div>
    );
  }
}

Portfolio.propTypes = {
  fetchPortfolio: PropTypes.func.isRequired,
};

export default connect(null, { fetchPortfolio })(Portfolio);
