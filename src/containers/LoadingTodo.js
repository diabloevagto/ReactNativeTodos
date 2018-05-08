import { connect } from 'react-redux'

import { addTodo } from '../actions'
import LoadCircle from '../components/LoadCircle'

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
  addTodo: text => dispatch(addTodo(text))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoadCircle)
