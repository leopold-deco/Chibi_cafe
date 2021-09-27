import { CONNECT_USER, LOGOUT, SET_USER_FIELD, REGISTER_USER } from '../actions/user';

export const initialState = {
  logged: false,
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
        pseudo: action.data.pseudo,
        token: action.data.token,
        logged: action.data.logged,
      };
    case LOGOUT:
      return {
        ...state,
        pseudo: null,
        logged: false,
        token: null,
      };
    case REGISTER_USER:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default user;