import { combineReducers } from 'redux';

import productsReducer from './products';
import shop from './shopReducer'
import userReducer from './user';

const rootReducer = combineReducers({
  shop,
  products: productsReducer,
  user: userReducer,
});

export default rootReducer;