export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
export const REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART';
export const INCREMENT_CART_ITEM_QUANTITY = 'INCREMENT_CART_ITEM_QUANTITY';
export const DECREMENT_CART_ITEM_QUANTITY = 'DECREMENT_CART_ITEM_QUANTITY';
export const FETCH_ARTICLES = 'FETCH_ARTICLES';
export const SAVE_ARTICLES = 'SAVE_ARTICLES';
export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const SAVE_CATEGORIES = 'SAVE_CATEGORIES';
export const PRICE_CHECK = 'PRICE_CHECK';

export const fetchArticles = () => ({ type: FETCH_ARTICLES });

export const saveArticles = (articles) => (
    {
        type: SAVE_ARTICLES,
        articles,
    }
);

export const fetchCategories = () => ({ type: FETCH_CATEGORIES});

export const saveCategories = (categories) => (
    {
        type: SAVE_CATEGORIES,
        categories,
    }
)

export const addProductToCart = product => {
    return {
        type: ADD_PRODUCT_TO_CART,
        payload: product
    }
};

export const removeProductToCart = productId => {
    return {
        type: REMOVE_PRODUCT_FROM_CART,
        payload: productId
    }
};

export const incrementCartQuantity = productId => {
    return{
        type: INCREMENT_CART_ITEM_QUANTITY,
        payload: productId
    }
};

export const decrementCartQuantity = productId => {
  return {
      type: DECREMENT_CART_ITEM_QUANTITY,
      payload: productId
  }
};


export const REMOVE_PRODUCT_FROM_FAVORITES = 'REMOVE_PRODUCT_FROM_FAVORITES';
export const removeProductFromFavorites = (productId) => (
  {
    type: REMOVE_PRODUCT_FROM_FAVORITES,
    payload: productId,
  }
);

export const ADD_FAVORITES = 'ADD_FAVORITES';
export const addFavorites = (product) => (
    {       
        type: ADD_FAVORITES,
        payload: product,
    }       
);

export const FETCH_FAVORITES = 'FETCH__FAVORITES';
export const fetchFavorites = () => (
    {
        type: FETCH_FAVORITES,
    }
);

export const SAVE_FAVORITES = 'SAVE_FAVORITES';
export const saveFavorites = (favorites) => (
    {
        type: SAVE_FAVORITES,
        favorites,
    }
);


export const checkPrice = () => {
    return {
        type: PRICE_CHECK,
        
    }
}