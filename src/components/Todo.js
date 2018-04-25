import React from 'react'
import PropTypes from 'prop-types'

import { Text, StyleSheet } from 'react-native';

const Todo = ({ onClick, completed, text }) => (
  <Text
    onPress={onClick}
    style={[
      styles.text,
      { textDecorationLine: completed ? 'line-through' : 'none' }
    ]}
  >
    {`\u2022 ${text}`}
  </Text >
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    marginLeft: 30,
  },
});

export default Todo
