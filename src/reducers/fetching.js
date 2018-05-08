import types from '../constants/actionTypes';

const initialState = true

const fetching = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_TODO_SUCCESS:
      return false
    default:
      return state
  }
}

export default fetching
