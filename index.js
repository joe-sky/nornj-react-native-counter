/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import nj from 'nornj';
import './nj.config';
import './src/containers/App';
import configureStore from './src/store/configureStore';

const store = configureStore();

export default class ReduxCounterUniversal extends Component {
  render() {
    return nj`
      <Provider store=${store}>
        <App />
      </Provider>
    `();
  }
}

console.disableYellowBox = true;
AppRegistry.registerComponent('ReduxCounterUniversal', () => ReduxCounterUniversal);
