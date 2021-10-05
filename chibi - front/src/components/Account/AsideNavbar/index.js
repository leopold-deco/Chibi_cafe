import { NavLink } from 'react-router-dom';

import './aside-navbar.scss';

const AsideNavbar = () => (
    <div className='aside-navbar'>
        <NavLink className="aside-navbar__link" activeClassName="aside-navbar__link--active" exact to="/compte/informations">
        <ion-icon name="alert-circle-sharp"></ion-icon>
        </NavLink>

        <NavLink className="aside-navbar__link" activeClassName="aside-navbar__link--active" exact to="/compte/favoris">
        <ion-icon name="bookmarks"></ion-icon>
        </NavLink>
        
        <NavLink className="aside-navbar__link" activeClassName="aside-navbar__link--active" exact to="/compte/commandes">
        <ion-icon name="cart-sharp"></ion-icon>
        </NavLink>
    </div>
);

export default AsideNavbar;