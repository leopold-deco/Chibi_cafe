import { combineReducers } from 'redux';

import productsReducer from './products';
import userReducer from './user';

const rootReducer = combineReducers({
  products: productsReducer,
  user: userReducer,
});

export default rootReducer;