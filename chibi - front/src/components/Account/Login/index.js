import './login.scss';
import Form from '../Form';
import Button from '../Button';
import Input from '../Input';

const Login = () => {
    //const dispatch = useDispatch();

    //const email = useSelector((state) => state.user.email);
    //const password = useSelector((state) => state.user.password);

    // const handleChange = (value, name) => {
    //     dispatch(setUserField(value, name));
    // };

    return (
        <Form /*onSubmit={() => dispatch(login())}*/>
            <h2>Connexion</h2>
            <Input 
                type="email" 
                name="loginMail" 
                id="loginMail" 
                placeholder="Email" 
                value={email} 
                onChange={handleChange} 
            />
            <Input 
                type="password" 
                name="loginPassword" 
                id="loginPassword" 
                placeholder="Mot de passe" 
                value={password} 
                onChange={handleChange}
            />
            <Button>S'inscrire</Button>
        </Form>
    );
};

export default Login;