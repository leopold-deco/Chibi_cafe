import './login.scss';
import Form from '../Form';

const Login = () => (
    <Form>
        <h2>Connexion</h2>
        <input type="email" name="mail" id="mail" placeholder="Entrez votre email" required />
        <input type="password" name="password" id="password" placeholder="Entrez votre mot de passe" required />
        <button>S'inscrire</button>
    </Form>
);

export default Login;