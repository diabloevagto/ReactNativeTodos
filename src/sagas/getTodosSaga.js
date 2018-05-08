import { delay } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import types from "../constants/actionTypes";

export function* getTodosSaga({ payload }) {

  // 模擬非同步事件
  console.log('a-1')
  yield call(delay, 1000)
  console.log('a-2')

  yield put({
    type: types.GET_TODO_SUCCESS,
    payload: {
      todos: [{
        id: 99,
        text: 'new',
        completed: false
      }]
    }
  });

}
