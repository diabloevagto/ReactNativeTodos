import React, { Component } from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { AppRegistry } from 'react-native';

import rootReducer from './src/reducers'

import App from './src/App';

const store = createStore(rootReducer)

store.subscribe(() => {
  console.log(store.getState().visibilityFilter)
  console.table(store.getState().todos)
})

const RNRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

AppRegistry.registerComponent('ReactNativeTodos', () => RNRedux);
