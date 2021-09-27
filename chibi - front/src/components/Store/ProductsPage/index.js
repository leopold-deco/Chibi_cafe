/* eslint-disable react-hooks/exhaustive-deps */
// import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ProductCard from "./ProductCard";
import { fetchArticles } from "../../actions/shop";

import './store.scss';

const Store = () => {

  const products = useSelector((state) => state.shop.products)
  const cart = useSelector((state) => state.shop.cart)

  localStorage.setItem('cart', JSON.stringify(cart))

  

  const dispatch = useDispatch();
  useEffect(
    () => {
      dispatch(fetchArticles());
    },
    [],
  );

    return (
      <div className="container">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} product={product} />
          ))}

      </div>
    );
  }
  
export default Store;