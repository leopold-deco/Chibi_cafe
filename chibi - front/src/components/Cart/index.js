import "./cart.scss";
import CartItem from "./cartItem";
import { calculPrice } from "../../pipes/calculPrice";
import { connect } from "react-redux";
import Button from "../Button";

const Cart = (props) => {

  localStorage.setItem('cart', JSON.stringify(props.cartItems))


    return (
      <div className="container" >
                    <div className="cart">
                        <div className="cart__header">
                            Votre Panier :
                        </div>
                        <div className="cart__content">
                        <div className="cart__body">
                        <div className="cart__body__legend">
                              <div className="cart__body__designation">
                                Désignation
                              </div>
                              <div className="cart__body__unitPrice">
                                  Prix unitaire
                              </div>
                              <div className="cart__body__quantity">
                                  Quantité
                              </div>
                              <div className="cart__body__underPricer">
                                Sous total
                              </div>
                            </div>                 
                            {props.cartItemCount ? props.cartItems.map(cart => (
                                <CartItem {...cart} key={cart.id} />
                            )) : <h2 className="cart__body__none">Votre Panier est vide</h2> }
                        </div>
                      <div className="cart__ender">
                        <div className="cart__ender__header">
                            Total TTC
                        </div>
                        <div className="cart__ender__price">
                           <b>{`${props.totalPrice.toFixed(2)} €`}</b>
                        </div>
                        <div className="cart__ender__footer">
                          <Button type="button" className="cart__ender__btn">
                            Poursuivre la commande
                          </Button>
                        </div>
                      </div>
                      </div>
                    </div>
      </div>
    );
  };

  const mapStateToProps = (state) => {

    console.log(state, 'state has changed');

    return {
        cartItems: state.shop.cart,
        cartItemCount: state.shop.cart.reduce((count, curItem) => {
            return count + curItem.quantity;
        }, 0),
        totalPrice: state.shop.cart.reduce((count, curItem) => {
            return count + (calculPrice(curItem.price_without_taxes, curItem.taxe) * curItem.quantity);
        }, 0),
    }
}
  
export default connect(mapStateToProps, null) (Cart);