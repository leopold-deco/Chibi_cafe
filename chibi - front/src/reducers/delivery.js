import { SET_DELIVERY_FIELD } from '../actions/delivery';

const deliveryAddress = JSON.parse(localStorage.getItem("deliveryAddress"));

export const initialState = {
  isNewAddress: false,
  deliveryAddress
};

const delivery = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_DELIVERY_FIELD:
      return {
        ...state,
        [action.name]: action.value,
      };
    default:
      return state;
  }
};

export default delivery;