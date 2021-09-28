import './delivery.scss';
import Form from '../Account/Form';
import Input from '../Input';
import Button from '../Button';
import { useDispatch, useSelector } from 'react-redux';
import { setDeliveryField } from '../../actions/delivery';
import UserAddress from './UserAddress';
import NewAddress from './NewAddress';

const Delivery = () => {
    const dispatch = useDispatch();
    const { isNewAddress } = useSelector((state) => state.delivery);
    const delivery = useSelector((state) => state.delivery);
    const auth = useSelector((state) => state.auth);

    const handleChange = (value, name) => {
        dispatch(setDeliveryField(value, name));
    };

    const verifyIsNewAddressAndStore = () => {
        console.log('test')
        if(isNewAddress) {
            console.log("nex")
            localStorage.setItem("delivery", JSON.stringify(delivery))
        } else {
            localStorage.setItem("delivery", JSON.stringify(auth))
        }
        console.log("deliv", JSON.parse(localStorage.getItem("delivery")))
    };

    return (
        <Form handleSubmit={verifyIsNewAddressAndStore}> 
            <h2>Livraison</h2>
            <div className="delivery">
                <div className="delivery__elements">
                    <Input type="radio" name="isNewAddress" id="userAddress"
                            value="false"
                            handleChange={handleChange}
                            checked={isNewAddress === false}
                        />
                    <label htmlFor="userAddress">Livraison à votre adresse</label>
                    <UserAddress />
                </div>
                <div className="delivery__elements">
                    <Input type="radio" name="isNewAddress" id="newAddress"
                            value="true"
                            handleChange={handleChange}
                            checked={isNewAddress === true}
                        />
                    <label htmlFor="newAddress">Livraison à une autre adresse</label>
                    <NewAddress />
                    <Button>Paiement</Button>
                </div>
            </div>
        </Form>
    );
};

export default Delivery;