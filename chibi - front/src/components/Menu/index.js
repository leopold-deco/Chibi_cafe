// /* eslint-disable react-hooks/exhaustive-deps */
// import Solid from './Solid';
// import Liquid from './Liquid';
// import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from "react-redux";
// import { fetchFoodCategories } from "../../actions/menu";
// import { fetchArticles } from '../../actions/shop'
// import MenuProducts from './MenuProducts';
// import $ from 'jquery'

// import './menu.scss';

// function Menu() {

//   const [seeProducts, setOpenProducts] = useState(false)
//   const [pageProducts, setProducts] = useState([])
//   const [categorieName, setNameCat] = useState([])

// const categories = useSelector((state) => state.shop.categories.filter(category => category.type_of_product === false))
// const products = useSelector((state) => state.shop.products)


// const findProducts = (target, target2) => {
//    setProducts(products.filter((product) =>  product.category_id === Number(target) || product.category_id === Number(target2)));
//    findCategorie(target, target2)
//    setOpenProducts(true)
// } 


// const handleMouseHover = () => {

// $('.liquid__categories').each(function() {
//   $(this).mouseover(function() {
//       $(this).addClass('active');
//     $('.liquid').children('.liquid__categories').not('.active').addClass('inactive');
//   });
//   $(this).mouseleave(function() {
//       $(this).removeClass('active');
//       $('.liquid').children('.liquid__categories').not('.active').removeClass('inactive');
//   });
// });

//   $('.solid__categories').each(function() {
//     $(this).mouseover(function() {
//         $(this).addClass('active');
//       $('.solid').children('.solid__categories').not('.active').addClass('inactive');
//     });
//     $(this).mouseleave(function() {
//         $(this).removeClass('active');
//         $('.solid').children('.solid__categories').not('.active').removeClass('inactive');
//     });
//   });
  
// }



// const closeMenuProducts = () => {
//   setOpenProducts(false)
// }



// const findCategorie = (id, id2) => {
//    setNameCat(categories.find((categorie) => categorie.id === Number(id) || categorie.id === Number(id2)));

// }




// const solids = categories.filter(category => category.state === true);
// const liquids = categories.filter(category => category.state === false);

// const menuClassName = seeProducts ? "active" : "inactive";
// const classMenu = seeProducts ? "" : "nonvisible";
// const overlayClasseName = seeProducts ? "overOn" : "";



// const dispatch = useDispatch()

// useEffect(
//   () => {
//     dispatch(fetchFoodCategories())
//     dispatch(fetchArticles())
    
//   },
//   [],
// );


//     return (
//       <>      
//       <div onMouseOver={handleMouseHover} className='menu'>
//         <div className='menu__solid'>
//           <Solid solids={solids} findProducts={findProducts}/>
//         </div>
//         <div  className="menu__liquid">
//           <Liquid liquids={liquids} findProducts={findProducts}/>
//         </div>
       
//        <MenuProducts products={pageProducts} closeMenuProducts={closeMenuProducts} menuClassName={menuClassName} classMenu={classMenu} {...categorieName}/>
      
//       </div>
//       <div onClick={() => setOpenProducts(false)} className={`menu-overlay ${overlayClasseName}`}></div>
//       </>
//     );
// }
  
// export default Menu;