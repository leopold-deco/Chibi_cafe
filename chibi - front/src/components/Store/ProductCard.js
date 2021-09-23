import { useDispatch } from 'react-redux';
import { addProductToCart } from '../../actions/shop';
import PropTypes from 'prop-types';
import { calculPrice } from '../../pipes/calculPrice';

const ProductCard = ({ product }) => {
  
  console.log(product)
  const dispatch = useDispatch()

  const onCart = () => {
    dispatch(addProductToCart(product))
  }


    return (
      <div >
          <h3>{product.product_name}</h3>
          <p>{calculPrice(product.price_without_taxes, product.taxe)}</p>
          <button
          onClick={onCart} 
          type="button"> ajouter au panier</button>
      </div>
    );
  }

  ProductCard.propTypes = {
    product: PropTypes.shape({
      id: PropTypes.number.isRequired,
      product_name: PropTypes.string.isRequired,
      price_without_taxes: PropTypes.number.isRequired,
      taxe: PropTypes.number.isRequired,
    }).isRequired,
  }
  
export default ProductCard;