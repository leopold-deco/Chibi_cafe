import { NavLink } from 'react-router-dom';

import './aside-navbar.scss';

const AsideNavbar = () => (
    <div className='aside-navbar'>
        <NavLink className="aside-navbar__link" activeClassName="aside-navbar__link--active" exact to="/compte/informations">Informations personnelles</NavLink>
        <NavLink className="aside-navbar__link" activeClassName="aside-navbar__link--active" exact to="/compte/commandes">Commandes</NavLink>
    </div>
);

export default AsideNavbar;