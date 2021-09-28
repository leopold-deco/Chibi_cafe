import './login.scss';
import Form from '../Form';
import Button from '../../Button';
import Input from '../../Input';

import { useSelector, useDispatch } from 'react-redux';
import { login, setUserField } from '../../../actions/auth';
import { useHistory } from "react-router-dom";
import { useState } from 'react';

const Login = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //const { email, password } = useSelector((state) => state.user);

    // const handleChange = (value, name) => {
    //     dispatch(setUserField(value, name));
    // };

    const handleSubmitForm = () => {
        dispatch(login(email, password));
        setEmail('');
        setPassword('');
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
                handleChange={setEmail} 
            />
            <Input 
                type="password" 
                name="password" 
                id="loginPassword" 
                placeholder="Mot de passe" 
                value={password} 
                handleChange={setPassword}
            />
            <Button>Se connecter</Button>
        </Form>
    );
};

export default Login;