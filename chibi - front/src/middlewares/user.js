import axios from 'axios';

import { connectUser, LOGIN, LOGOUT, SIGNUP } from '../actions/user';

const axiosInstance = axios.create({
  baseURL: 'https://chibi-api.herokuapp.com',
});

const userMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
        const { user: { email, password } } = store.getState();
      console.log(email, password)
        axiosInstance.post(
          '/login',
          {
            email,
            password,
          },
          {
          headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
          }
          }
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
      const { user: {         
        first_name, last_name, email, password, birthday_date, phone_number, street_number, name_of_the_road, postal_code, city, gender 
      } } = store.getState();

      axiosInstance.post(
        '/SignUp',
        {
          first_name, last_name, email, password, birthday_date, phone_number, street_number, name_of_the_road, postal_code, city, gender 
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