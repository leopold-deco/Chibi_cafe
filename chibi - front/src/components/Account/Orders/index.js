import AsideNavbar from '../AsideNavbar';
import { GET_ORDERS } from '../../../actions/auth';
import './orders.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const Orders = () => {
    const dispatch = useDispatch();
    const { orders } = useSelector((state) => state.auth);

    useEffect(() => dispatch({type: GET_ORDERS}), []);
    console.log(orders);
    return (
        <div className='orders'>
            <AsideNavbar />
        </div>

    );
};

export default Orders;