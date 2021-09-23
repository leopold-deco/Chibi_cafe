import { combineReducers } from 'redux';
import  userReducer  from "./user"
import productsReducer from './products';
import shop from './shopReducer'

const rootReducer = combineReducers({
  shop,
  products: productsReducer,
  user: userReducer,
});

export default rootReducer;