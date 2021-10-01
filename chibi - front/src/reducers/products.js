/* eslint-disable no-use-before-define */
import { ADD_FAVORITES, SAVE_FAVORITES, } from '../actions/shop';


export const initialState = {
  products: [],
  favorites: JSON.parse(localStorage.getItem('favorites')) || [],
  categories: [],
};

const reducer = (state = initialState, action = {}) => {
  let newFavorites;
  let updateFavorites;

  switch (action.type) {
    case ADD_FAVORITES:
      newFavorites = [...state.favorites];
      updateFavorites = newFavorites.findIndex = (element) => element.id === action.payload;

      const incrementedFavorites = {...newFavorites[updateFavorites]};
      
      incrementedFavorites.quantity++;

      return {
        ...state,
        favorites: newFavorites,
      }

    case SAVE_FAVORITES:
      return {
        ...state,
        favorites: action.favorites,
      }

    default:
      return state;
  }
};

export default reducer;