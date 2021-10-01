import PropTypes from 'prop-types';

import './card-favorite.scss';

const CardFavorite = ({ product_name, product_picture, description }) => (
    <article className="card-favorite">
        <p className="card-favorite__name">{product_name}</p>
        <img className="card-favorite__img" src={product_picture} alt={product_picture} />
        <p className="card-favorite__description">{description}</p>
    </article>
);

CardFavorite.propTypes = {
    product_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

CardFavorite.defaultProps = {
    image: "",
}

export default CardFavorite;
