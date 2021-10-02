import Input from '../../Input';
import { useDispatch, useSelector } from 'react-redux';
import { setDeliveryField } from '../../../actions/delivery';
import { useState } from 'react';

const NewAddress = () => {
    const dispatch = useDispatch();
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [streetNumber, setStreetNumber] = useState('');
    const [nameOfTheRoad, setNameOfTheRoad] = useState('');
    const [postalCode, setpostalCode] = useState('');
    const [city, setCity] = useState('');

    return (
        <div> 


            <Input type="text" name="first_name" id="first_name" placeholder="Prénom"                 
                value={firstname} 
                handleChange={setFirstname}
                required={false}
            />
            <Input type="text" name="last_name" id="last_name" placeholder="Nom" 
                value={lastname} 
                handleChange={setLastname}
                required={false}
            />
            <Input type="tel" id="phone_number" name="phone_number" placeholder="Numéro de mobile" 
                value={phoneNumber} 
                handleChange={setPhoneNumber}
                required={false}
            />
            <div className="address">
                <Input type="number" id="street_number" name="street_number" placeholder="N° de rue"
                    value={streetNumber} 
                    handleChange={setStreetNumber}
                    required={false}
                />
                <Input type="text" id="name_of_the_road" name="name_of_the_road" placeholder="Nom de rue"
                    value={nameOfTheRoad} 
                    handleChange={setNameOfTheRoad}
                    required={false}
                />
            </div>
            <div className="city">
                <Input type="text" id="postal_code" name="postal_code" pattern="[0-9]{5}" placeholder="Code postal"
                    value={postalCode} 
                    handleChange={setpostalCode}
                    required={false}
                />
                <Input type="text" id="city" name="city" placeholder="Ville" 
                    value={city} 
                    handleChange={setCity}
                    required={false}
                />
            </div>
        </div>
    );
};

export default NewAddress;