import { SAVE_FOODCATEGORIES, SAVE_FOODS } from "../actions/menu";

export const initialState = {
    categories: [],
    products: []
  };
  
  const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case SAVE_FOODS:
            return {
                ...state,
                products: action.foods
            };
        case SAVE_FOODCATEGORIES:
            return {
                ...state,
                categories: action.foodCategories.filter(category => category.type_of_product === true)
            };    

      default:
        return state;
    }
  };
  
  export default reducer;