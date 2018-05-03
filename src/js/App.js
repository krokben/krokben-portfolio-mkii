import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Skills from './components/Skills';

export default function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>krokben.se</h1>
        <Skills />
      </div>
    </Provider>
  );
}
