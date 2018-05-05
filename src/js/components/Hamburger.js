import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BEMHHelper from 'react-bem-helper';
import { displayNavbar } from '../actions/navbarActions';

const bem = new BEMHHelper({ name: 'hamburger' });

const Hamburger = props => (
  <div
    {...bem(null, props.display)}
    onClick={props.displayNavbar}
    role="presentation"
  >
    ☰
  </div>
);

Hamburger.propTypes = {
  display: PropTypes.string,
  displayNavbar: PropTypes.func.isRequired,
};

Hamburger.defaultProps = {
  display: null,
};

const mapStateToProps = state => ({
  display: state.navbar.display,
});

export default connect(mapStateToProps, { displayNavbar })(Hamburger);
