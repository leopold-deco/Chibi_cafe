import Solid from './Solid';
import Liquid from './Liquid';
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchFoods, fetchFoodCategories } from "../../actions/menu";

function Menu() {

const categories = useSelector((state) => state.menuReducer.categories)

const dispatch = useDispatch()

useEffect(
  () => {
    dispatch(fetchFoodCategories());
  },
  [],


  console.log(categories)
);

    return (
      <div >
          <Solid />
          <Liquid />
      </div>
    );
}
  
export default Menu;