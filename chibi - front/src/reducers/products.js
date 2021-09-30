import { ADD_FAVORITES, SAVE_FAVORITES, INCREMENT_FAVORITES_ITEM_QUANTITY,
  DECREMENT_FAVORITES_ITEM_QUANTITY,
  REMOVE_PRODUCT_FROM_FAVORITES } from '../actions/shop';


export const initialState = {
  favorites: JSON.parse(localStorage.getItem('cart')) || [],
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

    case INCREMENT_FAVORITES_ITEM_QUANTITY:
      updatedFavorites = [...state.favorites];
      updatedElementIndex = updatedFavorites.findIndex(item => item.id === action.payload.id);

      const incrementedElement = {...updatedFavorites[updatedElementIndex]}
      incrementedElement.quantity++;
      updatedFavorites[updatedElementIndex] = incrementedElement;

      return {...state, favorites: updatedFavorites};

    case DECREMENT_FAVORITES_ITEM_QUANTITY:
      updatedFavorites = [...state.favorites];
      updatedElementIndex = updatedFavorites.findIndex(item => item.id === action.payload.id);

      const decrementedElement = {
        ...updatedFavorites[updatedElementIndex]
      };
      decrementedElement.quantity--;
      updatedFavorites[updatedElementIndex] = decrementedElement;

      return {...state, favorites: updatedFavorites};

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