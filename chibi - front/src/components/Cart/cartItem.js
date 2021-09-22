import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { decrementCartQuantity, incrementCartQuantity, removeProductToCart} from "../../actions";



const CartItem = ({ id, nom, prix, quantity}) => {

    const dispatch = useDispatch();
    console.log(quantity)


    const [itemQuantity, setItemQuantity] = useState(quantity);

    

    const removeItem = () => {
        dispatch(removeProductToCart(id));
    };

   
      const incrementOrDecrement = (e, type) => {
        const value = itemQuantity;
        console.log(type, value);
       

        if(type === 'inc' && value < 20) {
            setItemQuantity(itemQuantity + 1);
            dispatch(incrementCartQuantity(id));
        }


        if(type === 'desc' ) {
            setItemQuantity(itemQuantity - 1);
            dispatch(decrementCartQuantity(id));
            if(value <= 1 ){
                dispatch(removeProductToCart(id));
            }
        }

    };


    return (
        <div className="card">
            <div className="card__content">
                <h4 className="card__content__title"><strong>{nom}</strong></h4>
            </div>
            <div className="card__priceUnit">
                    <h6><strong>{`${prix} €`}</strong></h6>
                </div>
                <div className="card__quantity">
                        <input
                            onClick={(e) => {incrementOrDecrement(e, 'inc')}}
                            type="button" value="+" className="plus" />
                            <div className="card__quantity__count">
                            {itemQuantity}
                            </div>
                                <input
                                    onClick={(e) => {incrementOrDecrement(e, 'desc')}}
                                    type="button" value="-" className="minus" />
                    </div>
                    <div className="card__underPrice">
                        <div className="card__underPrice__div">
                            <h6><strong>{`${prix * itemQuantity} €`}</strong></h6>
                        </div>
                    </div>
                <div className="card__suppr">
                    <button
                        onClick={removeItem}
                        type="button" className="card__btnSuppr">
                        Suppr
                    </button>
                </div>
        </div>
    );
};


export default CartItem;