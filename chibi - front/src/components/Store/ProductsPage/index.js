/* eslint-disable react-hooks/exhaustive-deps */
 import { useParams } from "react-router-dom";


import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { fetchArticles } from "../../../actions/shop";

import '../productsPage.scss';

const ProductsPage = () => {

    const { slug } = useParams();

  const products = useSelector((state) => state.shop.products.filter((product) => product.category_id === Number(slug)));
  const cart = useSelector((state) => state.shop.cart)
  const category = useSelector((state) => state.shop.categories.find((categorie) => categorie.id === Number(slug)));

  localStorage.setItem('cart', JSON.stringify(cart))

  

  const dispatch = useDispatch();
  useEffect(
    () => {
      dispatch(fetchArticles());
    },
    [],
  );

    return (
        <>
        <h2 className="productsPage__title">{category.category_name}</h2>
      <div className="store-container">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} product={product} />
          ))}

      </div>
      </>
    );
  }
  
export default ProductsPage;