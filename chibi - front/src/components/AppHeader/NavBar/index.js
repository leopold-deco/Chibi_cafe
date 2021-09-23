import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';


function NavBar({cartCount}) {
    return (
      <div >
          <NavLink to="/">Accueil</NavLink>
          <NavLink to="/menu">Menu</NavLink>
          <NavLink to="/boutique">Boutique</NavLink>
          <NavLink to="/compte">Compte</NavLink>
          <NavLink to="/panier">Panier {cartCount ? `(${cartCount})`: ''}</NavLink>
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