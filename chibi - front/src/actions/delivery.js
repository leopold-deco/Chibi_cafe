   
export const SET_DELIVERY_FIELD = 'SET_DELIVERY_FIELD';

export const setDeliveryField = (value, name) => (
  {
    type: SET_DELIVERY_FIELD,
    value,
    name,
  }
);