import { CONNECT_USER, LOGOUT, SET_USER_FIELD } from '../actions/user';

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
        pseudo: action.data.pseudo,
        // 3 - on stocke le token dans le state
        token: action.data.token,
        logged: action.data.logged,
        email: '',
        password: '',
      };
    case LOGOUT:
      return {
        ...state,
        pseudo: null,
        logged: false,
        token: null,
      };
    default:
      return state;
  }
};

export default reducer;