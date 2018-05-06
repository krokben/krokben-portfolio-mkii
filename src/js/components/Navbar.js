import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BEMHHelper from 'react-bem-helper';
import { Link } from 'react-scroll';
import { displayNavbar } from '../actions/navbarActions';

const bem = new BEMHHelper({ name: 'navbar' });

class Navbar extends Component {
  handleClick() {
    this.props.displayNavbar();
    document.body.classList.toggle('noscroll');
  }

  render() {
    const links = ['home', 'about', 'skills', 'portfolio', 'contact'];
    return (
      <nav {...bem(null, this.props.display)}>
        <ul {...bem('list')}>
          {
            links.map(link => (
              <li {...bem('item')}>
                <Link
                  {...bem('link')}
                  smooth
                  duration={500}
                  to={link}
                  onClick={() => this.handleClick()}
                >
                  {link}
                </Link>
              </li>
            ))
          }
        </ul>
      </nav>
    );
  }
}

Navbar.propTypes = {
  display: PropTypes.string,
  displayNavbar: PropTypes.func.isRequired,
};

Navbar.defaultProps = {
  display: null,
};

const mapStateToProps = state => ({
  display: state.navbar.display,
});

export default connect(mapStateToProps, { displayNavbar })(Navbar);
