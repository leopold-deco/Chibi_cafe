import { CONNECT_USER, LOGOUT, SET_USER_FIELD, REGISTER_USER } from '../actions/user';

export const initialState = {
  isLoggedIn: false,
  mail: '',
  password: '',
  passwordConfirm: '',
  first_name: null,
  last_name: null,
  gender: null,
  birthday_date: null,
  phone_number: null,
  street_number: null,
  name_of_the_road: null,
  postal_code: null,
  city: null,
  token: null,
};

const user = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_USER_FIELD:
      return {
        ...state,
        [action.name]: action.value,
      };
    case CONNECT_USER:
      return {
        ...state,
        mail: action.data.user.mail,
        birthday_date: action.data.user.birthday_date,
        city: action.data.user.city,
        first_name: action.data.user.first_name,
        gender: action.data.user.gender,
        last_name: action.data.user.last_name,
        name_of_the_road: action.data.user.name_of_the_road,
        phone_number: action.data.user.phone_number,
        postal_code: action.data.user.postal_code,
        street_number: action.data.user.street_number,
        token: action.data.token,
        isLoggedIn: true
      };
    case LOGOUT:
      return {
        ...state,
        ...state = null,
        isLoggedIn: false
      };
    case REGISTER_USER:
      return {
        ...state,
        isLoggedIn: false
      };
    default:
      return state;
  }
};

export default user;