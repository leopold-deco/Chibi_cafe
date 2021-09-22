import { combineReducers } from 'redux';

import productsReducer from './products';
import shop from './shopReducer'

const rootReducer = combineReducers({
  shop,
  products: productsReducer,
});

export default rootReducer;