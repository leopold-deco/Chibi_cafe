import { combineReducers } from 'redux';
import authReducer  from "./auth";
import productsReducer from './products';
import shop from './shopReducer'
import deliveryReducer from './delivery';
import menuReducer from './menuReducer'
import ordersReducer from './orders';

const rootReducer = combineReducers({
  shop,
  products: productsReducer,
  auth: authReducer,
  delivery: deliveryReducer,
  menuReducer,
  ordersReducer
});

export default rootReducer;