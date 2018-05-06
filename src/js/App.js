import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Hamburger from './components/Hamburger';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Arrow from './components/Arrow';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

export default function App() {
  return (
    <Provider store={store}>
      <main>
        <Hamburger />
        <Navbar />
        <Intro />
        <Arrow />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </main>
    </Provider>
  );
}
