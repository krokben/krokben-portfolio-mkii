import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { bindActionCreators } from 'redux';
import store from './store';
import Skills from './components/Skills';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <h1>krokben.se</h1>
          <Skills />
        </div>
      </Provider>
    );
  }
}
