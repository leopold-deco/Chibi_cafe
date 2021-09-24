import { NavLink } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';


function NavBar({cartCount, state}) {

const cart = useSelector((state) => state.shop.cart)

const deleteStorage = () => {
  localStorage.removeItem(cart)
}

    return (
      <div >
          <NavLink to="/">Accueil</NavLink>
          <NavLink to="/menu">Menu</NavLink>
          <NavLink to="/boutique">Boutique</NavLink>
          <NavLink to="/compte">Compte</NavLink>
          <NavLink onClick={deleteStorage} to="/panier">Panier {cartCount ? `(${cartCount})`: ''}</NavLink>
          <NavLink to="/contact">Contact</NavLink>
      </div>
    );
  };

  const mapStateToProps = (state) => {
    return {
        cartCount: state.shop.cart.length
    }
  };
  
  export default connect(mapStateToProps, null)(NavBar);