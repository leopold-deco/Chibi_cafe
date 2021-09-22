import './signup.scss';
import Form from '../Form';
import Input from '../Input';

const SignUp = () => (
    <Form>
        <h2>Inscription</h2>
        <div className="gender">
            <div>
                <Input type="radio" name="gender" id="genderFemale" required />
                <label for="genderFemale">Madame</label>
            </div>
            <div>
                <input type="radio" name="gender" id="genderMale" required />
                <label for="genderMale">Monsieur</label>
            </div>
        </div>

        <Input type="text" name="first_name" id="first_name" placeholder="Prénom" required />
        <Input type="text" name="last_name" id="last_name" placeholder="Nom" required />
        <Input type="email" name="mail" id="mail" placeholder="Email" required />
        <Input type="password" name="password" id="password" placeholder="Mot de passe" required />
        <Input type="password" name="passwordConfirm" id="passwordConfirm" placeholder="Confirmer mot de passe" required />
        <Input type="date" id="birthday_date" name="birthday_date" required />
        <Input type="tel" id="phone_number" name="phone_number" placeholder="Numéro de mobile" required />
        <div className="address">
            <Input type="number" id="street_number" name="street_number" placeholder="N° de rue" required />
            <Input type="text" id="name_of_the_road" name="name_of_the_road" placeholder="Nom de rue" required />
        </div>
        <div className="city">
            <Input type="text" id="postal_code" name="postal_code" pattern="[0-9]{5}" placeholder="Code postal" required />
            <Input type="text" id="city" name="city" placeholder="Ville" required />
        </div>

        <button>S'inscrire</button>
    </Form>
);

export default SignUp;