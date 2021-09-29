import { CONNECT_USER, LOGOUT, REGISTER_USER, SET_USER_FIELD } from '../actions/auth';

// console.log(localStorage.removeItem("user"));
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