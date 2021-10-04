import { combineReducers } from 'redux';
import authReducer  from "./auth";
import shop from './shopReducer'
import deliveryReducer from './delivery';
import menuReducer from './menuReducer'
import ordersReducer from './orders';
import favoritesReducer from './favoritesReducer';

const rootReducer = combineReducers({
  shop,
  auth: authReducer,
  delivery: deliveryReducer,
  menuReducer,
  ordersReducer,
  favoritesReducer
});

export default rootReducer;