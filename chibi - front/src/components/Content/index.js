import PropTypes from "prop-types";

import CardFavorite from '../Favorites/CardFavorite';

import './content.scss';

const Content = ({ title, text, favorites }) => {
console.log(favorites);
    
    return (
        <div className='content'>
            <h1 className="content__title">{title}</h1>
            <p className="content__text">{text}</p>
            {favorites && (
                <div className="content__list">
                    {favorites.map((favorite) => (
                        <CardFavorite key={favorite.id} {...favorite} />
                    ))}
                </div>
            )}
        </div>
    );
}


Content.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    favorites: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        }),
    ),
};

export default Content;