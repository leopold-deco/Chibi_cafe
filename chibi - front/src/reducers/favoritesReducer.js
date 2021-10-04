/* eslint-disable no-use-before-define */
import { SAVE_FAVORITES, } from '../actions/favorites';


export const initialState = {
  favorites: JSON.parse(localStorage.getItem('favorites')) || [],
  // isAdd: true,
};

const favoritesReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_FAVORITES:
      return {
        ...state,
        favorites: action.favorites,
      }

    // case DELETE_FAVORITES:
    //   return {
    //     ...state,
    //     // favorites: 
    //   }

    default:
      return state;
  }
};

export default favoritesReducer;