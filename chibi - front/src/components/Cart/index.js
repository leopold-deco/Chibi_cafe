import "./cart.scss";
import CartItem from "./cartItem";
import { connect } from "react-redux";

const Cart = (props) => {

  console.log(props.underprice)


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
                            )) : <h1 className="cart__body__none">Votre Panier est vide</h1> }
                        </div>
                      <div className="cart__ender">
                        <div className="cart__ender__header">
                            Total TTC
                        </div>
                        <div className="cart__ender__price">
                                    Total price: <b>{`${props.totalPrice} €`}</b>
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
  };

  const mapStateToProps = state => {

    console.log(state, 'state has changed');

    return {
        cartItems: state.shop.cart,
        cartItemCount: state.shop.cart.reduce((count, curItem) => {
            return count + curItem.quantity;
        }, 0),
        totalPrice: state.shop.cart.reduce((count, curItem) => {
            return count + (curItem.prix * curItem.quantity);
        }, 0),
    }
}
  
export default connect(mapStateToProps, null) (Cart);