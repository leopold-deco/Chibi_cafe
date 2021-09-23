import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3001',
});

const apiMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    default:
      next(action);
  }
};

export default apiMiddleware;