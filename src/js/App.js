import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Skills from './components/Skills';

export default function App() {
  return (
    <Provider store={store}>
      <div>
        <Navbar />
        <Intro />
        <Skills />
      </div>
    </Provider>
  );
}
