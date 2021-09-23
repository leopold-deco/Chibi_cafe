import { CONNECT_USER, LOGOUT, SET_USER_FIELD } from '../actions/user';

//const user = JSON.parse(localStorage.getItem("user"));
// export const initialState = user
// ? { isLoggedIn: true, user }
// : { isLoggedIn: false, user: null };

  // email: '',
  // password: '',
  // pseudo: null,
  // first_name: null,
  // last_name: null,
  // birthday_date: null,
  // phone_number: null,
  // street_number: null,
  // name_of_the_road: null,
  // postal_code: null,
  // city: null,
  // token: null,

  export const initialState = {
    logged: false,   // à voir avec le back
    mail: '',
    password: '',
    pseudo: null,
    first_name: null,
    last_name: null,
    birthday_date: null,
    phone_number: null,
    street_number: null,
    name_of_the_road: null,
    postal_code: null,
    city: null,
    token: null,
  };
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_USER_FIELD:
      return {
        ...state,
        [action.name]: action.value,
      };
    case CONNECT_USER:
      return {
        ...state,
        user: action.data
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null
      };
    default:
      return state;
  }
};

export default reducer;