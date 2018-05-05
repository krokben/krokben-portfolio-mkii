import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Hamburger from './components/Hamburger';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Arrow from './components/Arrow';
import Skills from './components/Skills';

export default function App() {
  return (
    <Provider store={store}>
      <div>
        <Hamburger />
        <Navbar />
        <Intro />
        <Arrow />
        <Skills />
      </div>
    </Provider>
  );
}
