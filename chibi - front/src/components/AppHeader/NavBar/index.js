import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { useState } from 'react';
import './navbar.scss';


function NavBar({cartCount, state}) {
const [open, setMenu] = useState(false)

const className = open ? "menu-btn open" : "menu-btn"

const openBurger = () => {
  if(open === true){
    setMenu(false)
  } else {
    setMenu(true)
  }
}

    return (
      <> 
      <div className="navbar">
        <div className="navbar__1">
          <NavLink className="navlink" activeClassName="isactive" exact to="/">Accueil</NavLink>
          <NavLink className="navlink"  activeClassName="isactive" exact to="/menu">Menu</NavLink>
          <NavLink className="navlink"  activeClassName="isactive" exact to="/boutique">Boutique</NavLink>
        </div>
        <div className="navbar__2">
          <NavLink className="navlink"  activeClassName="isactive" exact to="/compte">Compte</NavLink>
          <NavLink className="navlink"  activeClassName="isactive" exact to="/panier">Panier{cartCount ? `(${cartCount})`:''}</NavLink>
          <NavLink className="navlink"  activeClassName="isactive" exact to="/contact">Contact</NavLink>
        </div>
      </div>
      <div onClick={openBurger} class={className}>
      <div class="menu-btn__burger"></div>
      </div>
    </>
    );
  };

  const mapStateToProps = (state) => {
    return {
        cartCount: state.shop.cart.length
    }
  };
  
  export default connect(mapStateToProps, null)(NavBar);