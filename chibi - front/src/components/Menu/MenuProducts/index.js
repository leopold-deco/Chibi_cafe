import PropTypes from 'prop-types';
import ProductsItems from './ProductsItems';

import './menuproducts.scss';

const MenuProducts = ({ products}) => {


   return (
    <div className='products-menu'>
    { products.map((product) => (
        <ProductsItems key={product.id} {...product} />
    ))}
    </div>
);

};

MenuProducts.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number
        })
    )
}

MenuProducts.defaultProps = {
    Products: [],
}

export default MenuProducts;