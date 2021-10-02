   
export const SET_DELIVERY_FIELD = 'SET_DELIVERY_FIELD';

export const setDeliveryField = (value, name) => (
  {
    type: SET_DELIVERY_FIELD,
    value,
    name,
  }
);

   
export const SET_DELIVERY_RADIO = 'SET_DELIVERY_RADIO';

export const setDeliveryRadio = (value, name) => (
  {
    type: SET_DELIVERY_RADIO,
    value,
    name,
  }
);