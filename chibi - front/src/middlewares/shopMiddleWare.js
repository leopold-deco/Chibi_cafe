import axios from 'axios';

import { FETCH_ARTICLES, saveArticles } from '../actions/shop';


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
    default:
      next(action);
  }
};

export default shopMiddleWare;