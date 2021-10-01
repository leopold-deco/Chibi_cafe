import axios from 'axios';

import { FETCH_ARTICLES, FETCH_CATEGORIES, PRICE_CHECK, ADD_FAVORITES, addFavorites, saveArticles, saveCategories, FETCH_FAVORITES, saveFavorites } from '../actions/shop';

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

    case ADD_FAVORITES: {
      const { token,  favorites: { id } } = store.getState().products;
    
      axios.post(`https://chibi-api.herokuapp.com/useWishList/${id}`)
      .then(
        (response) => {
          console.log(response)
          localStorage.setItem("favorites", JSON.stringify(response.data));
          store.dispatch(addFavorites(response.data))
        }
      ).catch(
        (error) => console.log("erreur: pas d'ajout en favoris", error)
      );
      next(action);
      break;
    }

    case FETCH_FAVORITES: {
      const { token, user: {
        id,
      } } = store.getState().auth;
      axiosInstance.get(`/wishList/${id}`, {
        credentials: 'include',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(
        (response) => {
          console.log(response)
          console.log("autorisations:", axiosInstance.defaults.headers.common);
          console.log("id:", id);
          localStorage.setItem("favorites", JSON.stringify(response.data));
          store.dispatch(saveFavorites(response.data));
        }
      ).catch(
        () => console.log("erreur"));
        next(action);
        break;
    }

    // case REMOVE_PRODUCT_FROM_FAVORITES: {
    //   const { token, user: {id,} } = store.getState().auth;
    //   axiosInstance.delete(`/useWishList/${id}`, {
    //     credentials: 'include',
    //     headers: {
    //     Authorization: `Bearer ${token}`,
    //     },
    //   })
    //   .then(
    //     (response) => {
    //       store.dispatch()
    //     }
    //   ).catch(
    //     () => console.log("erreur"));
    //     next(action);
    //     break;
    // }
    
    case PRICE_CHECK: {

      const state = store.getState();
      console.log("state", state)


      axios.post('https://chibi-api.herokuapp.com/checkPrice',
      {
         state
      })
      .then(
        (response) => {
          console.log(response.data)
        }
      );
      next(action);
      break;
    }

    default:
      next(action);

    
  }
};

export default shopMiddleWare;