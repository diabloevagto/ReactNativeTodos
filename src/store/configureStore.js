import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers/index';
import rootSaga from '../sagas';

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware({});

  return {
    ...createStore(
      rootReducer,
      applyMiddleware(sagaMiddleware)
    ),
    runSaga: sagaMiddleware.run(rootSaga)
  };
};

export default configureStore;
