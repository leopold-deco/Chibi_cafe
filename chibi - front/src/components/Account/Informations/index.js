import { useDispatch } from 'react-redux';
import { useState } from 'react';

import Form from '../Form';
import Input from '../../Input';
import Button from '../../Button';

import './informations.scss';

const Informations = () => {
    // const {
    //     gender,
    //     first_name,
    //     last_name,
    //     mail,
    //     birthday_date,
    //     phone_number,
    //     street_number,
    //     name_of_the_road,
    //     postal_code,
    //     city 
    // } = JSON.parse(localStorage.getItem('user'));

    const dispatch = useDispatch();
    const [state, setState] = useState({
        first_name: '',
        last_name: '',
        mail: '',
        password: '',
        passwordConfirm: '',
        birthday_date: '',
        phone_number: '',
        street_number: '',
        name_of_the_road: '',
        postal_code: '',
        city: '',
        gender: '',
        
    });
    const [message, setMessage] = useState("");

    const handleSubmitForm = () => {
        
    }

    // const handleChange = (value, property) => {
    //     setState(state => ({
    //         ...state,           // copy all other field/objects
    //         [property] : value,
    //     }));
    // }

    return (
        <Form handleSubmit={handleSubmitForm}> 
            <h2>Mes informations personnelles</h2>
            <div className="gender">
                <div>
                    <Input type="radio" name="gender" id="genderFemale"
                        value={state.gender}
                        // handleChange={(event) => handleChange(event.target.value, "gender")}
                        checked={state.gender === false}
                    />
                    <label htmlFor="genderFemale">Madame</label>
                </div>
                <div>
                    <Input type="radio" name="gender" id="genderMale"  
                        value={state.gender}
                        // handleChange={handleChange("gender")}
                        checked={state.gender === true}
                    />
                    <label htmlFor="genderMale">Monsieur</label>
                </div>
            </div>

            <Input type="text" name="first_name" id="first_name" placeholder="Prénom"                 
                value={state.first_name}
                // handleChange={handleChange("first_name")}
            />
            <Input type="text" name="last_name" id="last_name" placeholder="Nom" 
                value={state.last_name} 
                // handleChange={setState({last_name})}
            />
            <Input type="email" name="email" id="email" placeholder="Email"
                value={state.mail} 
                // handleChange={setState({mail})}
            />
            <Input type="password" name="password" id="password" placeholder="Mot de passe"
                value={state.password} 
                // handleChange={setState({password})}
            />
            <Input type="password" name="passwordConfirm" id="passwordConfirm" placeholder="Confirmer mot de passe" 
                value={state.passwordConfirm} 
                // handleChange={setState({passwordConfirm})}
            />
            <Input type="date" id="birthday_date" name="birthday_date" 
                value={state.birthday_date} 
                // handleChange={setState({birthday_date})}
            />
            <Input type="tel" id="phone_number" name="phone_number" placeholder="Numéro de mobile" 
                value={state.phone_number} 
                // handleChange={setState({phone_number})}
            />
            <div className="address">
                <Input type="number" id="street_number" name="street_number" placeholder="N° de rue"
                    value={state.street_number} 
                    // handleChange={setState({street_number})}
                />
                <Input type="text" id="name_of_the_road" name="name_of_the_road" placeholder="Nom de rue"
                    value={state.name_of_the_road} 
                    // handleChange={setState({name_of_the_road})}
                />
            </div>
            <div className="city">
                <Input type="text" id="postal_code" name="postal_code" pattern="[0-9]{5}" placeholder="Code postal"
                    value={state.postal_code} 
                    // handleChange={setState({postal_code})}
                />
                <Input type="text" id="city" name="city" placeholder="Ville" 
                    value={state.city} 
                    // handleChange={setState({city})}
                />
            </div>

            <Button>S'inscrire</Button>
            <p style={{color: "green"}}>{message}</p>
        </Form>
    );
}


export default Informations;