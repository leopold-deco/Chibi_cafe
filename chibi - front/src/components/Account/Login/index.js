import './login.scss';
import Form from '../Form';
import Button from '../../Button';
import Input from '../../Input';
import { useDispatch } from 'react-redux';
import { login } from '../../../actions/auth';
import { useHistory } from "react-router-dom";
import { useState } from 'react';

const Login = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmitForm = () => {
        dispatch(login(mail, password));
        setMail('');
        setPassword('');
        history.push('/');
    }

    return (
        <Form handleSubmit={handleSubmitForm}>
            <h2 className="signupTitle">Connexion</h2>
            <Input 
                type="email" 
                name="mail" 
                id="loginMail" 
                placeholder="Email" 
                value={mail} 
                handleChange={setMail} 
            />
            <Input 
                type="password" 
                name="password" 
                id="loginPassword" 
                placeholder="Mot de passe" 
                value={password} 
                handleChange={setPassword}
            />
            <Button className="logBtn">Se connecter</Button>
            

        </Form>
    );
};



export default Login;