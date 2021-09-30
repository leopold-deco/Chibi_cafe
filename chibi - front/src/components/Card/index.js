import PropTypes from 'prop-types';

import './style.scss';

const Card = ({ image, description }) => (
    <article className="card">
        <img className="card-img" src={image} alt={image} />
        <p className="card-description">{description}</p>
    </article>
);

Card.propTypes = {
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default Card;
