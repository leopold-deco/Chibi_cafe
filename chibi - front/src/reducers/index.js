import { combineReducers } from 'redux';
import  userReducer  from "./user"
import productsReducer from './products';
import shop from './shopReducer'
<<<<<<< HEAD

=======
import userReducer from './user';
import deliveryReducer from './delivery';
>>>>>>> 166e09f23589ddf0c524fef5651a81740477a539

const rootReducer = combineReducers({
  shop,
  products: productsReducer,
  user: userReducer,
  delivery: deliveryReducer
});

export default rootReducer;