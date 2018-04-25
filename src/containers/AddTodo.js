import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  View,
  TextInput,
  Button,
  StyleSheet,
} from 'react-native';

import { addTodo } from '../actions'

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render() {
    return (
      <View style={styles.inline}>
        <TextInput
          onChangeText={(text) => this.setState({ text })}
          value={this.state.text}
          placeholder='input'
          style={styles.textInput}
        />
        <Button
          title="Add Todo"
          onPress={() => {
            if (!this.state.text.trim()) {
              return
            }
            this.props.dispatch(addTodo(this.state.text))
            this.setState({ text: '' })
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inline: {
    flexWrap: 'wrap',
    alignItems: 'center',
    flexDirection: 'row',
    // justifyContent: 'space-between'
  },
  textInput: {
    width: 100,
    height: 30,
    borderColor: 'gray',
    borderWidth: 1
  }
});

export default connect()(AddTodo)
