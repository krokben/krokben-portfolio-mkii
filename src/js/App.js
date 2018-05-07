import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Element } from 'react-scroll';
import BEMHHelper from 'react-bem-helper';
import store from './store';
import landingElements from './helpers/landingElements';
import Hamburger from './components/Hamburger';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Arrow from './components/Arrow';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

const bem = new BEMHHelper({ name: 'main' });

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      landedElements: [],
    };
  }

  componentDidMount() {
    /* ANIMATION: Make elements land or fade in on the page */
    const queriedElements = landingElements();
    window.onscroll = () => {
      queriedElements.forEach((element) => {
        if (!this.state.landedElements.includes(element.dom.className)) {
          /* Only execute if it hasn't already landed */
          if (element.dom.getBoundingClientRect().top <= window.innerHeight &&
            element.dom.getBoundingClientRect().top > 0) {
            this.state.landedElements.push(element.dom.className);
            element.dom.classList.add(element.reset);
          }
        }
      });
    };
  }

  render() {
    return (
      <Provider store={store}>
        <main {...bem()}>
          <Hamburger />
          <Navbar />
          <Arrow />
          <Element name="home"><Intro /></Element>
          <Element name="about"><About /></Element>
          <Element name="skills"><Skills /></Element>
          <Element name="portfolio"><Portfolio /></Element>
          <Element name="contact"><Contact /></Element>
          <Footer />
        </main>
      </Provider>
    );
  }
}
