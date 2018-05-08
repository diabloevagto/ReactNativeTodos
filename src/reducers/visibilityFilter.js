import types from '../constants/actionTypes';

const initialState = types.SHOW_ALL

const visibilityFilter = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SET_VISIBILITY_FILTER:
      return payload.filter
    default:
      return state
  }
}

export default visibilityFilter
