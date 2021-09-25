import './delivery.scss';
import Form from '../Account/Form';
import Input from '../Input';
import Button from '../Button';
import { useDispatch, useSelector } from 'react-redux';
import { signup, setUserField } from '../../actions/user';
import UserDelivery from './UserDelivery';

const Delivery = () => {
    const dispatch = useDispatch();

    return (
        <Form handleSubmit="test"> 
            <UserDelivery />
            <Button>Paiement</Button>
        </Form>
    );
};

export default Delivery;