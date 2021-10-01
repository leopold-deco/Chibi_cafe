import { useSelector } from 'react-redux';
import Input from '../../Input';

const UserAddress = () => {
    const {
        first_name, principal_city, last_name, mail, principal_name_of_the_road, phone_number, principal_postal_code, principal_street_number
    } = useSelector(state => state.auth.user);
    
    return (
        <div> 
            <Input type="text" name="first_name" id="first_name" placeholder="Prénom"                 
                value={first_name}
                disabled={true}
            />
            <Input type="text" name="last_name" id="last_name" placeholder="Nom" 
                value={last_name}
                disabled={true}
            />
            <Input type="email" name="mail" id="mail" placeholder="Email"
                value={mail}
                disabled={true}
            />
            <Input type="tel" id="phone_number" name="phone_number" placeholder="Numéro de mobile" 
                value={phone_number}
                disabled={true}
            />
            <div className="address">
                <Input type="text" id="principal_street_number" name="principal_street_number" placeholder="N° de rue"
                    value={principal_street_number}
                    disabled={true}
                />
                <Input type="text" id="principal_name_of_the_road" name="principal_name_of_the_road" placeholder="Nom de rue"
                    value={principal_name_of_the_road}
                    disabled={true}
                />
            </div>
            <div className="city">
                <Input type="text" id="principal_postal_code" name="principal_postal_code" pattern="[0-9]{5}" placeholder="Code postal"
                    value={principal_postal_code}
                    disabled={true}
                />
                <Input type="text" id="principal_city" name="principal_city" placeholder="Ville" 
                    value={principal_city}
                    disabled={true}
                />
            </div>
        </div>
    );
};

export default UserAddress;