import './signup.scss';
import Form from '../Form';
import Input from '../../Input';
import Button from '../../Button';
import { useDispatch, useSelector } from 'react-redux';
import { signup, setUserField } from '../../../actions/user';

const SignUp = () => {
    const dispatch = useDispatch();

    const { 
        first_name, last_name, email, password, passwordConfirm, birthday_date, phone_number, street_number, name_of_the_road, postal_code, city, gender
    } = useSelector((state) => state.user);

    const handleChange = (value, name) => {
        dispatch(setUserField(value, name));
    };

    const verifyPasswordAndSubmit = () => {
        if (password === passwordConfirm) {
            dispatch(signup())
        }
    }

    return (
        <Form handleSubmit={verifyPasswordAndSubmit}> 
            <h2>Inscription</h2>
            <div className="gender">
                <div>
                    <Input type="radio" name="gender" id="genderFemale"
                        value="true"
                        handleChange={handleChange}
                        checked={gender === true}
                    />
                    <label htmlFor="genderFemale">Madame</label>
                </div>
                <div>
                    <Input type="radio" name="gender" id="genderMale"  
                        value="false"
                        handleChange={handleChange}
                        checked={gender === false}
                    />
                    <label htmlFor="genderMale">Monsieur</label>
                </div>
            </div>

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
            <Input type="password" name="password" id="password" placeholder="Mot de passe"
                value={password} 
                handleChange={handleChange}
            />
            <Input type="password" name="passwordConfirm" id="passwordConfirm" placeholder="Confirmer mot de passe" 
                value={passwordConfirm} 
                handleChange={handleChange}
            />
            <Input type="date" id="birthday_date" name="birthday_date" 
                value={birthday_date} 
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

            <Button>S'inscrire</Button>
        </Form>
    );
};

export default SignUp;