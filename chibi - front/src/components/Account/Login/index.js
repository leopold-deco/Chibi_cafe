import './login.scss';
import Form from '../Form';
import Button from '../Button';

const Login = () => (
    <Form>
        <h2>Connexion</h2>
        <input type="email" name="mail" id="mail" placeholder="Entrez votre email" required />
        <input type="password" name="password" id="password" placeholder="Entrez votre mot de passe" required />
        <Button>S'inscrire</Button>
    </Form>
);

export default Login;