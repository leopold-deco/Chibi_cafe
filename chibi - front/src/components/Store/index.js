// Pour code propre : faire un sous-composant de présentation factorisant les infos et ici ne renvoyer que ce sous-composant.

import { Link } from "react-router-dom";
/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ProductCard from "./ProductCard";
import { fetchArticles } from "../../actions/shop";

import presImage from "../../assets/presentation-sables/presentation-sables.png";
import custom from "../../assets/presentation-sables/custom.png";
import paint from "../../assets/presentation-sables/paint.png";
import decores from "../../assets/presentation-sables/decores.png";
import messages from "../../assets/presentation-sables/messages.png";
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

        <div className="container__left">
  
          <div className="container__left__categories">
            <Link className="container__left__categories__decores" to="/boutique/decores">
              <img
                src={decores}
                className="container__left__categories__image"
                alt="Sablés Décorés"
              />
              <p className="container__left__categories__text">Sablés Décorés</p>
            </Link>

            <Link className="container__left__categories__message" to="/boutique/message">
              <img
                src={messages}
                className="container__left__categories__image"
                alt="Sablés Messages"
              />
              <p className="container__left__categories__text">Sablés Message</p>
            </Link>
          </div>  

        </div>

          <div className="container__center">
            <img
              src={presImage}
              className="container__center__title"
              alt="Présentation Sablés"
            />
            <p className="container__center__description">Tous nos sablés à la vanille sont réalisés par notre artisan avec de la glace royale onctueuse, à base de sucre glace, de blanc d'œuf et de couleurs naturelles.</p>
          </div>

        <div className="container__right">
          <div className="container__right__categories">
            <Link className="container__right__categories__paint" to="/boutique/peindre">
              <img
                src={paint}
                className="container__right__categories__image"
                alt="Sablés A peindre"
              />
              <p className="container__right__categories__text">A peindre</p>
            </Link>

            <Link className="container__right__categories__custom" to="/boutique/custom">
              <img
                src={custom}
                className="container__right__categories__image"
                alt="Sablés Personnalisables"
              />
              <p className="container__right__categories__text">Personnalisables</p>
            </Link>
          </div>

        </div>
        
      </div>
    );
  }
  
export default Store;



/*****************************/ /*SOUS-COMPOSANT* / /*****************************/  

// import Categorie from "./Categorie";

// import { Link } from "react-router-dom";

// import './store.scss';

// const Store = () => {

//     return (
//       <div className="container">
  
//           <div className="container__left">
//             <Categorie />
//             <Categorie />
//           </div>

//           <div className="container__center">
//             <img
//               src={presImage}
//               className="container__center__title"
//               alt="Présentation Sablés"
//             />
//             <p className="container__center__description">Tous nos sablés à la vanille sont réalisés par notre artisan avec de la glace royale onctueuse, à base de sucre glace, de blanc d'œuf et de couleurs naturelles.</p>
//           </div>

//           <div className="container__right">
//             <Categorie />
//             <Categorie />
//           </div>
        
//       </div>
//     );
//   }
  
// export default Store;