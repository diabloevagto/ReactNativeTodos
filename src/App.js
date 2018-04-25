import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';

import Footer from './components/Footer'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'

const App = () => (
  <View
    style={styles.view}
  >
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </View>
);

const styles = StyleSheet.create({
  view: {
    marginTop: 100,
    marginLeft: 10,
  },
});

export default App
