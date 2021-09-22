import './signup.scss';
import Form from '../Form';

const SignUp = () => (
    <Form>
        <h2>Inscription</h2>
        <div>
            <div>
                <input type="radio" name="gender" id="genderFemale" required />
                <label for="genderFemale">Madame</label>
            </div>
            <div>
                <input type="radio" name="gender" id="genderMale" required />
                <label for="genderMale">Monsieur</label>
            </div>
        </div>

        <input type="text" name="first_name" id="first_name" placeholder="Entrez votre prénom" required />
        <input type="text" name="last_name" id="last_name" placeholder="Entrez votre nom" required />
        <input type="email" name="mail" id="mail" placeholder="Entrez votre email" required />
        <input type="password" name="password" id="password" placeholder="Entrez votre mot de passe" required />
        <input type="password" name="passwordConfirm" id="passwordConfirm" placeholder="Confirmez votre mot de passe" required />
        <input type="password" name="passwordConfirm" id="passwordConfirm" placeholder="Confirmez votre mot de passe" required />
        <input type="date" id="birthday_date" name="birthday_date" required />
        <input type="tel" id="phone_number" name="phone_number" required />
        <input type="number" id="street_number" name="street_number" required />
        <input type="text" id="name_of_the_road" name="name_of_the_road" required />
        <input type="text" id="postal_code" name="postal_code" pattern="[0-9]{5}" required />
        <input type="text" id="city" name="city" required />

        <button>S'inscrire</button>
    </Form>
);

export default SignUp;