import './delivery.scss';
import Form from '../Account/Form';
import Button from '../Button';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import BooleanCheckbox from '../BooleanCheckbox';
import { useState } from 'react';

const Delivery = () => {
    const [isNewAddress, setIsNewAddress] = useState(true);
    const history = useHistory();
    const delivery = useSelector((state) => state.delivery);
    const user = useSelector((state) => state.auth.user);

    const verifyIsNewAddressAndStore = () => {
        if (isNewAddress) {
            localStorage.setItem("delivery", JSON.stringify(delivery));
        } else {
            localStorage.setItem("delivery", JSON.stringify(user));
        }
    };

    return (
        <Form handleSubmit={verifyIsNewAddressAndStore}> 
            <h2>Livraison</h2>
            <div className="delivery">
                <BooleanCheckbox 
                    label={["Livraison à votre adresse", "Livraison à une nouvelle adresse"]}
                    id={["userAddress", "newAddress"]}
                    handleChange={setIsNewAddress}
                    state={isNewAddress}
                />
            </div>
            <Button handleClick={() => history.push('/paiement')}>Paiement</Button>
        </Form>
    );
};

export default Delivery;