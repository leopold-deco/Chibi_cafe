import Input from '../../Input';
import { useDispatch, useSelector } from 'react-redux';
import { setDeliveryField } from '../../../actions/delivery';

const NewAddress = () => {
    const dispatch = useDispatch();

    const { 
        first_name, last_name, mail, phone_number, street_number, name_of_the_road, postal_code, city
    } = useSelector((state) => state.delivery);

    const handleChange = (value, name) => {
        dispatch(setDeliveryField(value, name));
    };

    return (
        <div> 


            <Input type="text" name="first_name" id="first_name" placeholder="Prénom"                 
                value={first_name} 
                handleChange={handleChange}
                required={false}
            />
            <Input type="text" name="last_name" id="last_name" placeholder="Nom" 
                value={last_name} 
                handleChange={handleChange}
                required={false}
            />
            <Input type="email" name="mail" id="mail" placeholder="Email"
                value={mail} 
                handleChange={handleChange}
                required={false}
            />
            <Input type="tel" id="phone_number" name="phone_number" placeholder="Numéro de mobile" 
                value={phone_number} 
                handleChange={handleChange}
                required={false}
            />
            <div className="address">
                <Input type="number" id="street_number" name="street_number" placeholder="N° de rue"
                    value={street_number} 
                    handleChange={handleChange}
                    required={false}
                />
                <Input type="text" id="name_of_the_road" name="name_of_the_road" placeholder="Nom de rue"
                    value={name_of_the_road} 
                    handleChange={handleChange}
                    required={false}
                />
            </div>
            <div className="city">
                <Input type="text" id="postal_code" name="postal_code" pattern="[0-9]{5}" placeholder="Code postal"
                    value={postal_code} 
                    handleChange={handleChange}
                    required={false}
                />
                <Input type="text" id="city" name="city" placeholder="Ville" 
                    value={city} 
                    handleChange={handleChange}
                    required={false}
                />
            </div>
        </div>
    );
};

export default NewAddress;