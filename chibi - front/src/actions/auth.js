export const LOGIN = 'LOGIN';

export const login = (mail, password) => (
  {
    type: LOGIN,
    mail,
    password
  }
);

export const CONNECT_USER = 'CONNECT_USER';

export const connectUser = (data) => (
  {
    type: CONNECT_USER,
    data,
  }
);

export const LOGOUT = 'LOGOUT';

export const logout = () => (
  {
    type: LOGOUT,
  }
);

export const SIGNUP = 'SIGNUP';

export const signup = (firstname, lastname, mail, password, passwordConfirm, birthdayDate, phoneNumber, streetNumber, nameOfTheRoad, postalCode, city, gender) => (

  {
    type: SIGNUP,
    firstname, 
    lastname, 
    mail, 
    password, 
    passwordConfirm, 
    birthdayDate, 
    phoneNumber, 
    streetNumber, 
    nameOfTheRoad, 
    postalCode, 
    city, 
    gender
  }
);

export const REGISTER_USER = 'REGISTER_USER';

export const registerUser = (data) => (
  {
    type: REGISTER_USER,
    data,
  }
);

export const SET_USER_FIELD = 'SET_USER_FIELD';

export const setUserField = (value, name) => (
  {
    type: SET_USER_FIELD,
    value,
    name,
  }
);

export const UPDATE_USER = 'UPDATE_USER';

export const updateUser = () => (
  {
    type: UPDATE_USER,
  }
);

export const UPDATE_PASSWORD = 'UPDATE_PASSWORD';

export const updatePassword = (password, passwordConfirm, actualPassword) => (
  {
    type: UPDATE_PASSWORD,
    password,
    passwordConfirm,
    actualPassword,
  }
);

export const GET_USER_ADDRESSES = 'GET_USER_ADDRESSES';
