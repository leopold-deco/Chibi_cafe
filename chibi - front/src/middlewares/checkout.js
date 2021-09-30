import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://chibi-api.herokuapp.com',
});

const checkoutMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case CHECKOUT: {
        return axiosInstance.post(
            '/createCheckoutSession', 
            { 
                cart,
                id,
            },
        ).then(
            (response) => {
                if(response.data.success) {
                    console.log("Successful payment");
                    setSuccess(true);
                }
                next(action);
            }
        ).catch(() => {
            console.log('error');
            next(action);
        });
    }
    default:
      next(action);
  }
};

export default checkoutMiddleware;