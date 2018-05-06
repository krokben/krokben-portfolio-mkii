import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Element } from 'react-scroll';
import store from './store';
import Hamburger from './components/Hamburger';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Arrow from './components/Arrow';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <main>
          <Hamburger />
          <Navbar />
          <Arrow />
          <Element name="Intro"><Intro /></Element>
          <Element name="About"><About /></Element>
          <Element name="Skills"><Skills /></Element>
          <Element name="Portfolio"><Portfolio /></Element>
          <Element name="Contact"><Contact /></Element>
          <Footer />
        </main>
      </Provider>
    );
  }
}
