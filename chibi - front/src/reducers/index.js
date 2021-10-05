import { combineReducers } from 'redux';
import authReducer  from "./auth";
import shop from './shopReducer'
import deliveryReducer from './delivery';
import favoritesReducer from './favoritesReducer';


const rootReducer = combineReducers({
  shop,
  auth: authReducer,
  delivery: deliveryReducer,
  favoritesReducer
});

export default rootReducer;