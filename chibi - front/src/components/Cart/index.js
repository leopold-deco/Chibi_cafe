import "./cart.scss";
import CartItem from "./cartItem";

const Cart = (props) => {
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
                         <CartItem />
                        </div>
                      <div className="cart__ender">
                        <div className="cart__ender__header">
                            Total TTC
                        </div>
                        <div className="cart__ender__price">
                                    Total price: <b>10€</b>
                        </div>
                        <div className="cart__ender__footer">
                          <button type="button" className="cart__ender__btn">
                            Poursuivre la commande
                          </button>
                        </div>
                      </div>
                      </div>
                    </div>
      </div>
    );
  }
  
export default Cart;