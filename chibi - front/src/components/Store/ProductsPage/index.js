/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import imgBackgroundStore from "../../../assets/presentation-sables/background.jpg"

import ProductCard from "./ProductCard";
import { fetchArticles,} from "../../../actions/shop";

import '../productsPage.scss';

const ProductsPage = () => {

    const { slug } = useParams();

    const cats = [{ id: 5, name: "Sablés décorés"  }, { id: 7, name: "Sablés message" }, {id: 6, name: "Sablés à peindre" }]

  const products = useSelector((state) => state.shop.products.filter((product) => product.category_id === Number(slug)));

  console.log(products)

  const cart = useSelector((state) => state.shop.cart)
  const category = cats.find((categorie) => categorie.id === Number(slug));

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
        <h2 className="productsPage__title">{category.name}</h2>
      <div className="store-container">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} product={product} />
          ))}
        <img className="store-container__img" src={imgBackgroundStore} alt="Image de fond boutique" />
      </div>
      </>
    );
  }
  
export default ProductsPage;