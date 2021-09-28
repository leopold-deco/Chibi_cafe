import axios from 'axios';

import { connectUser, LOGIN, LOGOUT, SIGNUP } from '../actions/user';

const axiosInstance = axios.create({
  baseURL: 'https://chibi-api.herokuapp.com',
});

const userMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
        axiosInstance.post(
          '/login',
          {
            email: action.email,
            password: action.password,
          },
        ).then(
          (response) => {
            store.dispatch(connectUser(response.data));
            axiosInstance.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
            console.log("response",response)
          },
        ).catch(
          () => console.log('error'),
        );
        next(action);
        break;
    }
    case LOGOUT:
      delete axiosInstance.defaults.headers.common.Authorization;
      next(action);
      break;
    case SIGNUP: {
      axiosInstance.post(
        '/SignUp',
        {
          first_name: action.firstname, 
          last_name: action.lastname, 
          email: action.email, 
          password: action.password, 
          birthday_date: action.birthdayDate, 
          phone_number: action.phoneNumber, 
          street_number: action.streetNumber, 
          name_of_the_road: action.nameOfTheRoad, 
          postal_code: action.postalCode, 
          city: action.city, 
          gender: action.gender 
        },
      ).then(
        (response) => {
          console.log(response)
          //store.dispatch(connectUser(response.data));
          //axiosInstance.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
        },
      ).catch(
        () => console.log('error'),
      );
      next(action);
      break;
    }  
    default:
      next(action);
  }
};

export default userMiddleware;