import axios from 'axios';

import { FETCH_FOODS, FETCH_FOODCATEGORIES, saveFoods, saveFoodCategories } from '../actions/menu';





const menu = (store) => (next) => (action) => {
    switch (action.type) {
      case FETCH_FOODS: {
  
          axios.get('https://chibi-api.herokuapp.com/products')
          .then(
            (response) => {
            store.dispatch(saveFoods(response.data))
            },
          ).catch(
            () => console.log('error'),
          );
          next(action);
          break;
      }
  
      case FETCH_FOODCATEGORIES: {
        axios.get('https://chibi-api.herokuapp.com/category')
        .then(
          (response) => {
            store.dispatch(saveFoodCategories(response.data))
          }
        ).catch(
          (error) => console.log(error),
        );
        next(action);
        break;
      }
      default:
      next(action)
    }

}

export default menu;
