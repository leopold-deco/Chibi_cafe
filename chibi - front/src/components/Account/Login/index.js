import './login.scss';
import Form from '../Form';
import Button from '../Button';
import Input from '../Input';

import { useSelector, useDispatch } from 'react-redux';
import { login, logout, setUserField } from '../../../actions/user';

const Login = () => {
    const dispatch = useDispatch();

    const email = useSelector((state) => state.user.email);
    const password = useSelector((state) => state.user.password);

    const handleChange = (value, name) => {
        dispatch(setUserField(value, name));
    };

    // const handleLogin = () => {
    //     console.log('il faut se logger');
    //     dispatch(login());
    // };

    return (
        <Form onSubmit={() => dispatch(login())}>
            <h2>Connexion</h2>
            <Input 
                type="email" 
                name="mail" 
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
            <Button>S'inscrire</Button>
        </Form>
    );
};

export default Login;