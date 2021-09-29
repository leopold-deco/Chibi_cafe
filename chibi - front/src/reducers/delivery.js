import { SET_DELIVERY_FIELD } from '../actions/delivery';

export const initialState = {
  mail: '',
  first_name: null,
  last_name: null,
  phone_number: null,
  street_number: null,
  name_of_the_road: null,
  postal_code: null,
  city: null,
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