import { useDispatch } from 'react-redux';
import { addProductToCart } from '../../../actions/shop';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { calculPrice } from '../../../pipes/calculPrice';

const ProductCard = ({ product }) => {
  
  const dispatch = useDispatch()

  const [quantityToCart, setQuantity] = useState(0)

  const onCart = () => {
    dispatch(addProductToCart(product))
  }

    return (
      <div className="storeCard">
          <h3 className="storeCard__name">{product.product_name}</h3>
          <p className="storeCard__price">{calculPrice(Number(product.price_without_taxes), Number(product.taxe))} €</p>
          <button
          className="storeCard__btn"
          onClick={onCart} 
          type="button"> ajouter au panier</button>

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