import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from "react";
import { fetchFavorites } from "../../../actions/shop";

import Content from "../../Content";

import './favorites.scss';

const Favorites = () => {
    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.products.favorites);
    
    useEffect(
        () => {
            console.log('Aller chercher les favoris');
            dispatch(fetchFavorites());
        },
        [],
    );
    return (
        <Content
        title="Mes produits favoris"
        text="Ma sélection de produits favoris"
        products={favorites}
        />
    );
};

export default Favorites;