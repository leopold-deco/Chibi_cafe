import './login.scss';
import Form from '../Form';
import Button from '../../Button';
import Input from '../../Input';

import { useSelector, useDispatch } from 'react-redux';
import { login, logout, setUserField } from '../../../actions/user';

const Login = () => {
    const dispatch = useDispatch();

    const { email, password } = useSelector((state) => state.user);

    const handleChange = (value, name) => {
        dispatch(setUserField(value, name));
    };

    return (
        <Form handleLogin={() => dispatch(login())}>
            <h2>Connexion</h2>
            <Input 
                type="email" 
                name="email" 
                id="loginMail" 
                placeholder="Email" 
                value={email} 
                handleChange={handleChange} 
            />
            <Input 
                type="password" 
                name="password" 
                id="loginPassword" 
                placeholder="Mot de passe" 
                value={password} 
                handleChange={handleChange}
            />
            <Button>Se connecter</Button>
        </Form>
    );
};

export default Login;