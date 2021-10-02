import axios from 'axios';

import { 
  connectUser, LOGIN, LOGOUT, SIGNUP, UPDATE_USER, UPDATE_PASSWORD, GET_USER_ADDRESSES 
} from '../actions/auth';

const axiosInstance = axios.create({
  baseURL: 'https://chibi-api.herokuapp.com',
});

const userMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
        axiosInstance.post(
          '/login',
          {
            mail: action.mail,
            password: action.password,
          },
        ).then(
          (response) => {
            if (response.data.token) {
              console.log("login",response)
              localStorage.setItem("user", JSON.stringify(response.data.user));
              localStorage.setItem("token", JSON.stringify(response.data.token));
              store.dispatch(connectUser(response.data));
              store.dispatch({type: GET_USER_ADDRESSES});
            }
          },
        ).catch(
          () => console.log('error'),
        );
        next(action);
        break;
    }
    case LOGOUT:
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.removeItem("deliveryAddress");
      localStorage.removeItem("userAddresses");
      next(action);
      break;
    case SIGNUP: {
      axiosInstance.post(
        '/SignUp',
        {
          first_name: action.firstname, 
          last_name: action.lastname, 
          mail: action.mail, 
          password: action.password, 
          passwordConfirm: action.passwordConfirm,
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
        (error) => console.log('error', error),
      );
      next(action);
      break;
    }  
    case UPDATE_USER: {
      const { user: {
        id,
        first_name,
        last_name,
        mail,
        gender,
        birthday_date,
        phone_number,
        principal_street_number,
        principal_name_of_the_road,
        principal_postal_code,
        principal_city } } = store.getState().auth;

        axiosInstance.patch(
        `/account/${id}`,
        {
          id,
          first_name,
          last_name,
          mail,
          gender,
          birthday_date,
          phone_number,
          principal_street_number,
          principal_name_of_the_road,
          principal_postal_code,
          principal_city
        },
      ).then((response) => {
        localStorage.setItem("user", JSON.stringify(response.data));
        console.log("l'id :");

        console.log(response);
      },
      ).catch(
        (error) => console.log('error', error),
      );
      next(action);
      break;
    }
    case UPDATE_PASSWORD: {
      const { user: {
        mail,
      } } = store.getState().auth;
      
        axiosInstance.patch(
        '/newPassword',
        {
          mail,
          password: action.password,
          passwordConfirm: action.passwordConfirm,
          actualPassword: action.actualPassword,
        },
      ).then((response) => {
        // localStorage.setItem("user", JSON.stringify(response.data));
        console.log(response);
      },
      ).catch(
        (error) => console.log('error', error),
      );
      next(action);
      break;
    }
    case GET_USER_ADDRESSES: {
      const { user: {
        id,
      } } = store.getState().auth;
      
      axiosInstance.get(
        `/address/${id}`,
      ).then((response) => {
        console.log("orderrr", response)
        localStorage.setItem("userAddresses", JSON.stringify(response.data));
      },
      ).catch(
        (error) => console.log('error', error),
      );
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default userMiddleware;