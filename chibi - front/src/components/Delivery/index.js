import './delivery.scss';
import Form from '../Account/Form';
import Button from '../Button';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import BooleanCheckbox from '../BooleanCheckbox';
import { setDeliveryAddress, setDeliveryRadio } from '../../actions/delivery';
import { Redirect } from 'react-router-dom';
import { useState } from 'react';

const Delivery = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { isNewAddress } = useSelector((state) => state.delivery);
    const { isLoggedIn, user } = useSelector(state => state.auth);
    const [userAddress, setUserAddress] = useState({
        first_name: user.first_name, 
        last_name: user.last_name, 
        phone_number: user.phone_number,
        street_number: user.principal_street_number,
        name_of_the_road: user.principal_name_of_the_road,
        postal_code: user.principal_postal_code,
        city: user.principal_city,
    });

    const [newAddress, setNewAddress] = useState({
        first_name: '', 
        last_name: '', 
        phone_number: '', 
        street_number: '', 
        name_of_the_road: '', 
        postal_code: '', 
        city: '', 
    })

    const handleChangeNewAddress = (value, name) => {
        setNewAddress({
            ...newAddress,
            [ name ] : value
        });
    }

    const verifyIsNewAddressAndStore = () => {
        if (isNewAddress) {
            dispatch(setDeliveryAddress(newAddress));
            localStorage.setItem("deliveryAddress", JSON.stringify(newAddress));
            history.push('/paiement');
        } else {
            dispatch(setDeliveryAddress(userAddress));
            localStorage.setItem("deliveryAddress", JSON.stringify(userAddress));
            history.push('/paiement');
        }

    };

    const handleChange = (value) => {
        dispatch(setDeliveryRadio(value, "isNewAddress"));
    };

    if (!isLoggedIn) {
        return <Redirect to="/compte" />
    }
    console.log("userAddress",userAddress, "new address",newAddress )
    return (
        <Form handleSubmit={verifyIsNewAddressAndStore}> 
            <h2>Livraison</h2>
            <div className="delivery">
                <BooleanCheckbox 
                    label={["Livraison à votre adresse", "Livraison à une nouvelle adresse"]}
                    id={["userAddress", "newAddress"]}
                    handleChange={handleChange}
                    isNewAddress={isNewAddress}
                    newAddress={newAddress}
                    handleChangeNewAddress={handleChangeNewAddress}
                    userAddress={userAddress}
                    setUserAddress={setUserAddress}
                />
            </div>
            <Button type="submit">Paiement</Button>
        </Form>
    );
};

export default Delivery;