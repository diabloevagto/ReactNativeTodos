import { connect } from 'react-redux'

import { addTodo } from '../actions'
import TodoInput from '../components/TodoInput'

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
  addTodo: text => dispatch(addTodo(text))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoInput)
