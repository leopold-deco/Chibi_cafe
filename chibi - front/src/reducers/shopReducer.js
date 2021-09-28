import {
    SAVE_ARTICLES,
    SAVE_CATEGORIES,
    ADD_PRODUCT_TO_CART,
    DECREMENT_CART_ITEM_QUANTITY,
    INCREMENT_CART_ITEM_QUANTITY,
    REMOVE_PRODUCT_FROM_CART
} from '../actions/shop';

const initialState = {
    categories: [],
    products: [],
    cart: JSON.parse(localStorage.getItem('cart')) || []
};


const shopReducer = (state = initialState, action ) => {
    let updatedCart;
    let updatedItemIndex;

    switch (action.type) {
        case SAVE_ARTICLES:
            return {
                ...state,
                products: action.articles.filter(product => product.type_of_product === true),
            };
        case SAVE_CATEGORIES:
            return {
                ...state,
                categories: [action.categories[2], action.categories[6], action.categories[9]]
            };    
        case INCREMENT_CART_ITEM_QUANTITY:
            updatedCart = [...state.cart];
            updatedItemIndex = updatedCart.findIndex(
                item => item.id === action.payload
            );

            const incrementedItem = {
                ...updatedCart[updatedItemIndex]
            };

            incrementedItem.quantity++;

            updatedCart[updatedItemIndex] = incrementedItem;


            return {...state, cart: updatedCart};

        case DECREMENT_CART_ITEM_QUANTITY:
            updatedCart = [...state.cart];
            updatedItemIndex = updatedCart.findIndex(
                item => item.id === action.payload
            );

            const decrementedItem = {
                ...updatedCart[updatedItemIndex]
            };

            decrementedItem.quantity--;

            updatedCart[updatedItemIndex] = decrementedItem;

            return {...state, cart: updatedCart};

        case ADD_PRODUCT_TO_CART:
            updatedCart = [...state.cart];
            updatedItemIndex = updatedCart.findIndex(item => item.id === action.payload.id);

            if(updatedItemIndex < 0) {
                updatedCart.push({...action.payload, quantity: 1});
            
            } else {
                const updatedItem = {
                    ...updatedCart[updatedItemIndex]
                };

                updatedItem.quantity++;
                updatedCart[updatedItemIndex] = updatedItem;
            }

            return {...state, cart: updatedCart};
        case REMOVE_PRODUCT_FROM_CART:
            updatedCart = [...state.cart];
            updatedItemIndex = updatedCart.findIndex(
                item => item.id === action.payload
            );

            updatedCart.splice(updatedItemIndex, 1);
            return {...state, cart: updatedCart};
        default:
            return state;

    }
};

export default shopReducer;