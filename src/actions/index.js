import types from '../constants/actionTypes';

let nextTodoId = 0

export const addTodo = text => ({
  type: types.ADD_TODO,
  payload: {
    id: nextTodoId++,
    text
  }
})

export const setVisibilityFilter = filter => ({
  type: types.SET_VISIBILITY_FILTER,
  payload: {
    filter
  }
})

export const toggleTodo = id => ({
  type: types.TOGGLE_TODO,
  payload: {
    id
  }
})

export const VisibilityFilters = {
  SHOW_ALL: types.SHOW_ALL,
  SHOW_COMPLETED: types.SHOW_COMPLETED,
  SHOW_ACTIVE: types.SHOW_ACTIVE,
}
