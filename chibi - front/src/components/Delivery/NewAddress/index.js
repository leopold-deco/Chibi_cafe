import Input from '../../Input';
import Button from '../../Button';

const NewAddress = ({ newAddress, handleChangeNewAddress, button, handleClick }) => {

    return (
        <div> 
            <Input type="text" name="first_name" id="first_name" placeholder="Prénom"                 
                value={newAddress.first_name} 
                handleChange={handleChangeNewAddress}
                required={false}
            />
            <Input type="text" name="last_name" id="last_name" placeholder="Nom" 
                value={newAddress.last_name} 
                handleChange={handleChangeNewAddress}
                required={false}
            />
            <Input type="tel" id="phone_number" name="phone_number" placeholder="Numéro de mobile" 
                value={newAddress.phone_number} 
                handleChange={handleChangeNewAddress}
                required={false}
            />
            <div className="address">
                <Input type="number" id="street_number" name="street_number" placeholder="N° de rue"
                    value={newAddress.street_number} 
                    handleChange={handleChangeNewAddress}
                    required={false}
                />
                <Input type="text" id="name_of_the_road" name="name_of_the_road" placeholder="Nom de rue"
                    value={newAddress.name_of_the_road} 
                    handleChange={handleChangeNewAddress}
                    required={false}
                />
            </div>
            <div className="city">
                <Input type="text" id="postal_code" name="postal_code" pattern="[0-9]{5}" placeholder="Code postal"
                    value={newAddress.postal_code} 
                    handleChange={handleChangeNewAddress}
                    required={false}
                />
                <Input type="text" id="city" name="city" placeholder="Ville" 
                    value={newAddress.city} 
                    handleChange={handleChangeNewAddress}
                    required={false}
                />
            </div>
            {button && <Button handleClick={handleClick}>Ajouter</Button>}
        </div>
    );
};

export default NewAddress;