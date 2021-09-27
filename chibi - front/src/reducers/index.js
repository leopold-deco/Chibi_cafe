import { combineReducers } from 'redux';
import  userReducer  from "./user"
import productsReducer from './products';
import shop from './shopReducer'
import deliveryReducer from './delivery';

const rootReducer = combineReducers({
  shop,
  products: productsReducer,
  user: userReducer,
  delivery: deliveryReducer
});

export default rootReducer;