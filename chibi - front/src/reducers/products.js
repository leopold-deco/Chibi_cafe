import { ADD_FAVORITES, SAVE_FAVORITES,
  REMOVE_PRODUCT_FROM_FAVORITES } from '../actions/shop';


export const initialState = {
  products: [],
  favorites: JSON.parse(localStorage.getItem('favorites')) || [],
};

const reducer = (state = initialState, action = {}) => {
  let updatedFavorites;
  let updatedElementIndex;

  switch (action.type) {
    case SAVE_FAVORITES:
      return {
        ...state,
        favorites: action.favorites,
      }

    case ADD_FAVORITES :
      updatedFavorites = [...state.favorites];
      updatedElementIndex = updatedFavorites.findIndex(item => item.id === action.payload.id);

      if (updatedElementIndex < 0) {
        updatedFavorites.push({...action.payload, quantity: 1});
      } else {
        const updatedElement = {
          ...updatedElement[updatedElementIndex]
        };
        updatedElement.quantity++;
        updatedFavorites[updatedElementIndex] = updatedElement;
      }

      return {...state, favorites: updatedFavorites};

    case REMOVE_PRODUCT_FROM_FAVORITES:
      updatedFavorites = [...state.favorites];
      updatedElementIndex = updatedFavorites.findIndex(item => item.id === action.payload.id);

      updatedFavorites.splice(updatedElementIndex, 1);

      return {...state, favorites: updatedFavorites};

    default:
      return state;
  }
};

export default reducer;