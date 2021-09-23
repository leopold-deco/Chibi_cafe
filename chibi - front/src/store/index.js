import { createStore, applyMiddleware, compose } from 'redux';

import reducer from '../reducers';
import apiMiddleware from '../middlewares/api';
import userMiddleware from '../middlewares/user';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [apiMiddleware, userMiddleware];

const enhancers = composeEnhancers(
  applyMiddleware(...middlewares),
);

const store = createStore(reducer, enhancers);

export default store;