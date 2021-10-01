import { CONNECT_USER, LOGOUT, REGISTER_USER, SET_USER_FIELD } from '../actions/auth';

const user = JSON.parse(localStorage.getItem("user"));
const orders = JSON.parse(localStorage.getItem("orders"));

export const initialState = user
? { isLoggedIn: true, user, orders }
: { isLoggedIn: false, user: null, orders: null };

const auth = (state = initialState, action = {}) => {
  switch (action.type) {
    case CONNECT_USER:
      return {
        ...state,
        user: action.data.user,
        isLoggedIn: true,
        token: action.data.token
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
        isLoggedIn: false, 
        token: null
      };
    case REGISTER_USER:
      return {
        ...state,
        isLoggedIn: false,
      };
    case SET_USER_FIELD:
      return {
        ...state,
        user: {...state.user, [action.name]: action.value},
      }
    default:
      return state;
  }
};

export default auth;