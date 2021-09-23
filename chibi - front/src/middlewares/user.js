import axios from 'axios';

import { connectUser, LOGIN, LOGOUT } from '../actions/user';

const axiosInstance = axios.create({
  baseURL: 'https://chibi-api.herokuapp.com',
});

const userMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
        const { user: { email, password } } = store.getState();

        axiosInstance.post(
          '/login',
          {
            email,
            password,
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
    case LOGOUT:
      delete axiosInstance.defaults.headers.common.Authorization;
      next(action);
      break;
    default:
      next(action);
  }
};

export default userMiddleware;