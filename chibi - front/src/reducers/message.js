import { SET_MESSAGE } from '../actions/message';

export const initialState = {};

const messageReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_MESSAGE:
      return {
        ...state,
        message: action.message
      };
    default:
      return state;
  }
};

export default messageReducer;