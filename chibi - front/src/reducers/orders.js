const orders = JSON.parse(localStorage.getItem("orders"));

export const initialState = orders
? { orders }
: { orders: null };

const ordersReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default ordersReducer;