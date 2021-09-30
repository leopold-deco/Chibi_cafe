import axios from 'axios';

import { FETCH_ARTICLES, FETCH_CATEGORIES, saveArticles, saveCategories, FETCH_FAVORITES, saveFavorites } from '../actions/shop';

const axiosInstance = axios.create({
  baseURL: 'https://chibi-api.herokuapp.com',
})

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
      const { user: {
        id,
      } } = store.getState().auth;
      axiosInstance.get(`https://chibi-api.herokuapp.com/wishList/${id}`
      )
      .then(
        (response) => {
          console.log("autorisations:", axiosInstance.defaults.headers.common.Authorization);
          console.log(response);
          console.log("id:", id);
          localStorage.setItem("favorites", JSON.stringify(response.data));
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