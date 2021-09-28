import { CONNECT_USER, LOGOUT, REGISTER_USER } from '../actions/auth';

const user = JSON.parse(localStorage.getItem("user"));

export const initialState = user
? { isLoggedIn: true, user }
: { isLoggedIn: false, user: null };

const auth = (state = initialState, action = {}) => {
  switch (action.type) {
    case CONNECT_USER:
      return {
        ...state,
        user: action.user,
        isLoggedIn: true
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
        isLoggedIn: false
      };
    case REGISTER_USER:
      return {
        ...state,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

export default auth;