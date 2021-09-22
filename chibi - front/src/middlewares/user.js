import axios from 'axios';

import { connectUser, LOGIN, LOGOUT } from '../actions/user';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3001',
});

const userMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
        const { user: { mail, password } } = store.getState();

        axiosInstance.post(
          '/login',
          {
            mail,
            password,
          },
        ).then(
          (response) => {
            store.dispatch(connectUser(response.data));

            axiosInstance.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
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