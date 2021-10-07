import AccountBackground from '../../AccountBackground';
import AsideNavbar from '../AsideNavbar';

import './orders.scss';

const Orders = () => (
    <AccountBackground>
        <div className='orders'>
            <AsideNavbar />
            <div className='orders'>
                Commandes
            </div>
        </div>
    </AccountBackground>
);

export default Orders;