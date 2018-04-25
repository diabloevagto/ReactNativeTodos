import React, { Component } from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import {
  View,
  StyleSheet,
} from 'react-native';

import rootReducer from './reducers'
import Footer from './components/Footer'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'

const store = createStore(rootReducer)

store.subscribe(() => {
  console.log(store.getState().visibilityFilter)
  console.table(store.getState().todos)
})
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View
          style={styles.view}
        >
          <AddTodo />
          <VisibleTodoList />
          <Footer />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    marginTop: 100,
    marginLeft: 10,
  },
});
