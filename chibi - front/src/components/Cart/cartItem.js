import {useState} from 'react';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { decrementCartQuantity, incrementCartQuantity, removeProductToCart} from "../../actions";



const CartItem = ({ id, nom, prix, quantity}) => {

    const dispatch = useDispatch();



    const [itemQuantity, setItemQuantity] = useState(quantity);
    const [underPrice, setUnderPrice] = useState(prix)
    


    const removeItem = () => {
        dispatch(removeProductToCart(id));
    };

    const handleChange = (e) => {
        console.log('rien')
      };

      const incrementOrDecrement = (e, type) => {
        const value = itemQuantity;
        console.log(type, value);
       

        if(type === 'inc' && value < 20) {
            setItemQuantity(itemQuantity + 1);
            dispatch(incrementCartQuantity(id));
            setUnderPrice(prix * value)
        }


        if(type === 'desc' && value > 1) {
            setItemQuantity(itemQuantity - 1);
            dispatch(decrementCartQuantity(id));
            setUnderPrice(prix * value)
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
                            <input
                                onChange={handleChange}
                                type="number" step="1" max="20" min="1" value={itemQuantity} title="Qty"
                                   className="qty"
                                   size="4" />
                                <input
                                    onClick={(e) => {incrementOrDecrement(e, 'desc')}}
                                    type="button" value="-" className="minus" />
                    </div>
                    <div className="card__underPrice">
                        <div className="card__underPrice__div">
                            <h6><strong>{`${underPrice} €`}</strong></h6>
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

export default connect()(CartItem);