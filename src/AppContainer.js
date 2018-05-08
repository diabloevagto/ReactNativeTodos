import { connect } from 'react-redux'

import { getTodos } from './actions'
import App from './App'

const mapStateToProps = state => ({
  fetching: state.fetching
})

const mapDispatchToProps = dispatch => ({
  getTodos: () => dispatch(getTodos())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)
