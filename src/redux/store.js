import { applyMiddleware, createStore } from 'redux';

import createSagaMiddleware from '@redux-saga/core';

import logger from 'redux-logger';

import rootSaga from './saga'
import rootReducer from './reducer/rootReducer';

const sagaMiddleware = createSagaMiddleware()

const middleware = [sagaMiddleware]

if (process.env.NODE_ENV === 'development') {
    middleware.push(logger)
}

const store = createStore(rootReducer, applyMiddleware(...middleware));

sagaMiddleware.run(rootSaga)

export default store