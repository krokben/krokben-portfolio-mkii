import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BEMHHelper from 'react-bem-helper';

const bem = new BEMHHelper({ name: 'navbar' });

const Navbar = props => (
  <nav {...bem(null, props.display)}>
    <ul {...bem('list')}>
      <li {...bem('item')}><a {...bem('link')}>home</a></li>
      <li {...bem('item')}><a {...bem('link')}>about</a></li>
      <li {...bem('item')}><a {...bem('link')}>skills</a></li>
      <li {...bem('item')}><a {...bem('link')}>portfolio</a></li>
      <li {...bem('item')}><a {...bem('link')}>contact</a></li>
    </ul>
  </nav>
);

Navbar.propTypes = {
  display: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  display: state.navbar.display,
});

export default connect(mapStateToProps)(Navbar);
