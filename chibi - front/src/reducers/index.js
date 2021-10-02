import { combineReducers } from 'redux';
import authReducer  from "./auth";
import productsReducer from './products';
import shop from './shopReducer'
import deliveryReducer from './delivery';
import menuReducer from './menuReducer';

const rootReducer = combineReducers({
  shop,
  products: productsReducer,
  auth: authReducer,
  delivery: deliveryReducer,
  menuReducer,
});

export default rootReducer;