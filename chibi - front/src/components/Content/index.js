import PropTypes from "prop-types";

import CardFavorite from '../Favorites/CardFavorite';

import './content.scss';

const Content = ({ title, text, products }) => (
    <div className='content'>
        <h1 className="content__title">{title}</h1>
        <p className="content__text">{text}</p>
        {products && (
            <div className="content__list">
                {products.map((product) => (
                    <CardFavorite key={product.id} {...product} />
                ))}
            </div>
        )}
    </div>
);

Content.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        }),
    ),
};

Content.defaultProps = {
    products: null,
};

export default Content;