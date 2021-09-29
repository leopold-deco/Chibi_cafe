import './signup.scss';
import Form from '../Form';
import Input from '../../Input';
import Button from '../../Button';
import { useDispatch } from 'react-redux';
import { signup } from '../../../actions/auth';
import { useState } from 'react';

const SignUp = () => {
    const dispatch = useDispatch();
    const [message, setMessage] = useState("");
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [birthdayDate, setBirthdayDate] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [streetNumber, setStreetNumber] = useState('');
    const [nameOfTheRoad, setNameOfTheRoad] = useState('');
    const [postalCode, setpostalCode] = useState('');
    const [city, setCity] = useState('');
    const [gender, setGender] = useState(false);
    const verifyPasswordAndSubmit = () => {
        console.log("test");
        if (password === passwordConfirm) {
            console.log("test2");
            dispatch(signup(firstname, lastname, mail, password, birthdayDate, phoneNumber, streetNumber, nameOfTheRoad, postalCode, city, gender));
            setMessage("Inscription terminée! Veuillez vous connecter.");
        }
    }

    return (
        <Form handleSubmit={verifyPasswordAndSubmit}> 
            <h2>Inscription</h2>
            <div className="gender">
                <div>
                    <Input type="radio" name="gender" id="genderFemale"
                        value="false"
                        handleChange={setGender}
                        checked={gender === false}
                    />
                    <label htmlFor="genderFemale">Madame</label>
                </div>
                <div>
                    <Input type="radio" name="gender" id="genderMale"  
                        value="true"
                        handleChange={setGender}
                        checked={gender === true}
                    />
                    <label htmlFor="genderMale">Monsieur</label>
                </div>
            </div>

            <Input type="text" name="first_name" id="first_name" placeholder="Prénom"                 
                value={firstname} 
                handleChange={setFirstname}
            />
            <Input type="text" name="last_name" id="last_name" placeholder="Nom" 
                value={lastname} 
                handleChange={setLastname}
            />
            <Input type="email" name="mail" id="mail" placeholder="Email"
                value={mail} 
                handleChange={setMail}
            />
            <Input type="password" name="password" id="password" placeholder="Mot de passe"
                value={password} 
                handleChange={setPassword}
            />
            <Input type="password" name="passwordConfirm" id="passwordConfirm" placeholder="Confirmer mot de passe" 
                value={passwordConfirm} 
                handleChange={setPasswordConfirm}
            />
            <Input type="date" id="birthday_date" name="birthday_date" 
                value={birthdayDate} 
                handleChange={setBirthdayDate}
            />
            <Input type="tel" id="phone_number" name="phone_number" placeholder="Numéro de mobile" 
                value={phoneNumber} 
                handleChange={setPhoneNumber}
            />
            <div className="address">
                <Input type="number" id="street_number" name="street_number" placeholder="N° de rue"
                    value={streetNumber} 
                    handleChange={setStreetNumber}
                />
                <Input type="text" id="name_of_the_road" name="name_of_the_road" placeholder="Nom de rue"
                    value={nameOfTheRoad} 
                    handleChange={setNameOfTheRoad}
                />
            </div>
            <div className="city">
                <Input type="text" id="postal_code" name="postal_code" pattern="[0-9]{5}" placeholder="Code postal"
                    value={postalCode} 
                    handleChange={setpostalCode}
                />
                <Input type="text" id="city" name="city" placeholder="Ville" 
                    value={city} 
                    handleChange={setCity}
                />
            </div>

            <Button>S'inscrire</Button>
            <p style={{color: "green"}}>{message}</p>
        </Form>
    );
};

export default SignUp;