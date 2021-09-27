import { combineReducers } from 'redux';

import productsReducer from './products';
import shop from './shopReducer'
import userReducer from './user';
import deliveryReducer from './delivery';

const rootReducer = combineReducers({
  shop,
  products: productsReducer,
  user: userReducer,
  delivery: deliveryReducer
});

export default rootReducer;