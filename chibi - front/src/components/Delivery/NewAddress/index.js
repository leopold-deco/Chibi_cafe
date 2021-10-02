import Input from '../../Input';
import { useDispatch, useSelector } from 'react-redux';
import { setDeliveryField } from '../../../actions/delivery';

const NewAddress = () => {
    const dispatch = useDispatch();

    const deliveryAddress = useSelector((state) => state.delivery.deliveryAddress);

    const handleChange = (value, name) => {
        dispatch(setDeliveryField(value, name));
    };

    return (
        <div> 


            <Input type="text" name="first_name" id="first_name" placeholder="Prénom"                 
                value={deliveryAddress?.first_name} 
                handleChange={handleChange}
                required={false}
            />
            <Input type="text" name="last_name" id="last_name" placeholder="Nom" 
                value={deliveryAddress?.last_name} 
                handleChange={handleChange}
                required={false}
            />
            <Input type="tel" id="phone_number" name="phone_number" placeholder="Numéro de mobile" 
                value={deliveryAddress?.phone_number} 
                handleChange={handleChange}
                required={false}
            />
            <div className="address">
                <Input type="number" id="street_number" name="street_number" placeholder="N° de rue"
                    value={deliveryAddress?.street_number} 
                    handleChange={handleChange}
                    required={false}
                />
                <Input type="text" id="name_of_the_road" name="name_of_the_road" placeholder="Nom de rue"
                    value={deliveryAddress?.name_of_the_road} 
                    handleChange={handleChange}
                    required={false}
                />
            </div>
            <div className="city">
                <Input type="text" id="postal_code" name="postal_code" pattern="[0-9]{5}" placeholder="Code postal"
                    value={deliveryAddress?.postal_code} 
                    handleChange={handleChange}
                    required={false}
                />
                <Input type="text" id="city" name="city" placeholder="Ville" 
                    value={deliveryAddress?.city} 
                    handleChange={handleChange}
                    required={false}
                />
            </div>
        </div>
    );
};

export default NewAddress;