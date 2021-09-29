import './delivery.scss';
import Form from '../Account/Form';
import Input from '../Input';
import Button from '../Button';
import { useSelector } from 'react-redux';
import UserAddress from './UserAddress';
import NewAddress from './NewAddress';
import { useState } from 'react';
import { useHistory } from 'react-router';

const Delivery = () => {
    const history = useHistory();
    const [isNewAddress, setIsNewAddress] = useState(true);
    const delivery = useSelector((state) => state.delivery);
    const user = useSelector((state) => state.auth.user);

    const verifyIsNewAddressAndStore = () => {
        if (isNewAddress) {
            localStorage.setItem("delivery", JSON.stringify(delivery));
        } else {
            localStorage.setItem("delivery", JSON.stringify(user));
        }
    };

    const stringToBoolean = (value) => {
        if (value && typeof value === "string") {
             if (value.toLowerCase() === "true") return true;
             if (value.toLowerCase() === "false") return false;
        }
        return value;
    }

    const onRadioChange = (event) => {
        setIsNewAddress(stringToBoolean(event.target.value));
    }

    return (
        <Form handleSubmit={verifyIsNewAddressAndStore}> 
            <h2>Livraison</h2>
            <div className="delivery">
                {[
                    { value: false, label: "Livraison à votre adresse", id: "userAddress" },
                    { value: true, label: "Livraison à une nouvelle adresse", id: "newAddress" }
                ].map((option) => (
                    <div key={option.id} className="delivery__elements">
                        <input type="radio" name="isNewAddress" id={option.id}
                            value={option.value}
                            onChange={onRadioChange}
                            checked={isNewAddress === option.value}
                            />
                        <label htmlFor={option.id}>{option.label}</label>
                        {option.id === "userAddress" &&  <UserAddress />}
                        {option.id === "newAddress" && <NewAddress />}
                    </div>
                ))}
            </div>
            <Button handleClick={() => history.push('/paiement')}>Paiement</Button>
        </Form>
    );
};

export default Delivery;