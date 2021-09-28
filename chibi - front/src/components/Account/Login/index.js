import './login.scss';
import Form from '../Form';
import Button from '../../Button';
import Input from '../../Input';

import { useSelector, useDispatch } from 'react-redux';
import { login, setUserField } from '../../../actions/user';
import { useHistory } from "react-router-dom";

const Login = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const { email, password } = useSelector((state) => state.user);

    const handleChange = (value, name) => {
        dispatch(setUserField(value, name));
    };

    const handleSubmitForm = () => {
        dispatch(login())
        history.push('/');
    }

    return (
        <Form handleSubmit={handleSubmitForm}>
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