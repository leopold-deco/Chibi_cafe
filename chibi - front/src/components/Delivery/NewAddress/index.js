import Form from '../../Account/Form';
import Input from '../../Input';
import Button from '../../Button';
import { useDispatch, useSelector } from 'react-redux';
import { signup, setUserField } from '../../../actions/user';

const NewAddress = () => {
    const dispatch = useDispatch();

    const { 
        first_name, last_name, email, phone_number, street_number, name_of_the_road, postal_code, city, gender
    } = useSelector((state) => state.user);

    const handleChange = (value, name) => {
        dispatch(setUserField(value, name));
    };

    return (
        <Form> 
                <Input type="radio" name="gender" id="genderFemale"
                    value="true"
                    handleChange={handleChange}
                    checked={gender === true}
                />
                <label htmlFor="genderFemale">Livraison à une autre adresse</label>

            <Input type="text" name="first_name" id="first_name" placeholder="Prénom"                 
                value={first_name} 
                handleChange={handleChange}
            />
            <Input type="text" name="last_name" id="last_name" placeholder="Nom" 
                value={last_name} 
                handleChange={handleChange}
            />
            <Input type="email" name="email" id="email" placeholder="Email"
                value={email} 
                handleChange={handleChange}
            />
            <Input type="tel" id="phone_number" name="phone_number" placeholder="Numéro de mobile" 
                value={phone_number} 
                handleChange={handleChange}
            />
            <div className="address">
                <Input type="number" id="street_number" name="street_number" placeholder="N° de rue"
                    value={street_number} 
                    handleChange={handleChange}
                />
                <Input type="text" id="name_of_the_road" name="name_of_the_road" placeholder="Nom de rue"
                    value={name_of_the_road} 
                    handleChange={handleChange}
                />
            </div>
            <div className="city">
                <Input type="text" id="postal_code" name="postal_code" pattern="[0-9]{5}" placeholder="Code postal"
                    value={postal_code} 
                    handleChange={handleChange}
                />
                <Input type="text" id="city" name="city" placeholder="Ville" 
                    value={city} 
                    handleChange={handleChange}
                />
            </div>
        </Form>
    );
};

export default NewAddress;