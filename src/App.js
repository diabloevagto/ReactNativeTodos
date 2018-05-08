import React, { Component } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';

import LoadCircle from './components/LoadCircle'
import Footer from './components/Footer'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getTodos()

    // console.log(this.props)
  }

  render() {
    return (
      <View
        style={styles.view}
      >
        {this.props.fetching === true &&
          <LoadCircle />
        }
        {this.props.fetching === false &&
          <View>
            <AddTodo />
            <VisibleTodoList />
            <Footer />
          </View>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    marginTop: 100,
    marginLeft: 10,
  },
});

export default App
