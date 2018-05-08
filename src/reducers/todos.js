import types from '../constants/actionTypes';

const initialState = []

const todos = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.ADD_TODO:
      return [
        ...state,
        {
          id: payload.id,
          text: payload.text,
          completed: false
        }
      ]
    case types.TOGGLE_TODO:
      return state.map(todo =>
        (todo.id === payload.id)
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    default:
      return state
  }
}

export default todos
