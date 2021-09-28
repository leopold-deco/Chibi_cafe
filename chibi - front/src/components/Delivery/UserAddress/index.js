import Input from '../../Input';

const UserAddress = () => {
    const {
        first_name, city, last_name, mail, name_of_the_road, phone_number, postal_code, street_number
    } = JSON.parse(localStorage.getItem('user'));

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
            <Input type="email" name="email" id="email" placeholder="Email"
                value={mail}
                disabled={true}
            />
            <Input type="tel" id="phone_number" name="phone_number" placeholder="Numéro de mobile" 
                value={phone_number}
                disabled={true}
            />
            <div className="address">
                <Input type="text" id="street_number" name="street_number" placeholder="N° de rue"
                    value={street_number}
                    disabled={true}
                />
                <Input type="text" id="name_of_the_road" name="name_of_the_road" placeholder="Nom de rue"
                    value={name_of_the_road}
                    disabled={true}
                />
            </div>
            <div className="city">
                <Input type="text" id="postal_code" name="postal_code" pattern="[0-9]{5}" placeholder="Code postal"
                    value={postal_code}
                    disabled={true}
                />
                <Input type="text" id="city" name="city" placeholder="Ville" 
                    value={city}
                    disabled={true}
                />
            </div>
        </div>
    );
};

export default UserAddress;