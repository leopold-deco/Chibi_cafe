import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addProductToCart, addFavorites } from '../../../actions/shop';
import PropTypes from 'prop-types';
import { calculPrice } from '../../../pipes/calculPrice';

const ProductCard = ({ product }) => {
  
  const cart = useSelector((state) => state.shop.cart)

  const cardToCart = cart.find((card) => card.id === product.id )


  const dispatch = useDispatch()
  

  const onCart = () => {
    dispatch(addProductToCart(product));
    
  }

  const onFavorites = () => {
    dispatch(addFavorites(product));
  }

    return (
      <div className="storeCard">
          <h3 className="storeCard__name">{product.product_name}</h3>
          <p className="storeCard__price">{calculPrice(Number(product.price_without_taxes), Number(product.taxe))} €</p>
          <button
          id={product.id}
          className="storeCard__btn"
          onClick={onCart} 
          type="button"> ajouter au panier</button>

          {
            cardToCart ? <div>{cardToCart.quantity}</div> : ''
          }
          
          <button
          className="storeCard__btn"
          onClick={onFavorites}
          type="button"> Ajouter aux favoris</button>
      </div>
    );
  }

  ProductCard.propTypes = {
    product: PropTypes.shape({
      id: PropTypes.number.isRequired,
      product_name: PropTypes.string.isRequired,
      price_without_taxes: PropTypes.string.isRequired,
      taxe: PropTypes.string.isRequired,
    }).isRequired,
  }
  
export default ProductCard;