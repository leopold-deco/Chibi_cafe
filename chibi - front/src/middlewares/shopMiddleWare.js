import axios from 'axios';

import { FETCH_ARTICLES, FETCH_CATEGORIES, saveArticles, saveCategories, FETCH_FAVORITES, saveFavorites } from '../actions/shop';


const shopMiddleWare = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_ARTICLES: {

        axios.get('https://chibi-api.herokuapp.com/products')
        .then(
          (response) => {
          store.dispatch(saveArticles(response.data))
          },
        ).catch(
          () => console.log('error'),
        );
        next(action);
        break;
    }

    case FETCH_CATEGORIES: {
      axios.get('https://chibi-api.herokuapp.com/category')
      .then(
        (response) => {
          store.dispatch(saveCategories(response.data))
        }
      ).catch(
        (error) => console.log(error),
      );
      next(action);
      break;
    }

    case FETCH_FAVORITES: {
      axios.get('https://chibi-api.herokuapp.com/wishList')
      .then(
        (response) => {
          store.dispatch(saveFavorites(response.data));
        }
      ).catch(
        () => console.log("erreur")
      );
      next(action);
      break;
    }

    default:
      next(action);

    
  }
};

export default shopMiddleWare;