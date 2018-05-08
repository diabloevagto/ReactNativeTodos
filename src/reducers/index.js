import { combineReducers } from 'redux'
import fetching from './fetching'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
  fetching,
  todos,
  visibilityFilter
})
