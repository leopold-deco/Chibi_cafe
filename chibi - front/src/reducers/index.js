import { combineReducers } from 'redux';

import productsReducer from './products';
<<<<<<< HEAD
import shop from './shopReducer'
=======
import userReducer from './user';
>>>>>>> bd8f4e22a9fe9281536b603919af1872ec8eaa0d

const rootReducer = combineReducers({
  shop,
  products: productsReducer,
  user: userReducer,
});

export default rootReducer;