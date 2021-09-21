import { NavLink } from 'react-router-dom'


function NavBar() {
    return (
      <div >
          <NavLink to="/">Accueil</NavLink>
          <NavLink to="/menu">Menu</NavLink>
          <NavLink to="/boutique">Boutique</NavLink>
          <NavLink to="/compte">Compte</NavLink>
          <NavLink to="/panier">Panier</NavLink>
          <NavLink to="/contact">Contact</NavLink>
      </div>
    );
  }
  
  export default NavBar;