import './delivery.scss';
import Form from '../Account/Form';
import Button from '../Button';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import BooleanCheckbox from '../BooleanCheckbox';
import { setDeliveryField } from '../../actions/delivery';

const Delivery = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const delivery = useSelector((state) => state.delivery);
    const { isNewAddress } = useSelector((state) => state.delivery);

    const verifyIsNewAddressAndStore = () => {
        if (isNewAddress) {
            console.log(isNewAddress,  delivery)
            localStorage.setItem("deliveryAddress", JSON.stringify(delivery));
        }
        history.push('/paiement');
    };

    const handleChange = (value) => {
        dispatch(setDeliveryField(value, "isNewAddress"));
    };

    return (
        <Form handleSubmit={verifyIsNewAddressAndStore}> 
            <h2>Livraison</h2>
            <div className="delivery">
                <BooleanCheckbox 
                    label={["Livraison à votre adresse", "Livraison à une nouvelle adresse"]}
                    id={["userAddress", "newAddress"]}
                    handleChange={handleChange}
                    state={isNewAddress}
                />
            </div>
            <Button>Paiement</Button>
        </Form>
    );
};

export default Delivery;