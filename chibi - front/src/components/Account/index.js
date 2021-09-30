import SignUp from './SignUp';
import Login from './Login';
import Button from '../Button';
import Informations from './Informations';
import Orders from './Orders';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import './account.scss';

function Account() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const [openSignForm, setOpenSignForm] = useState(false)
  const signUpclassName = openSignForm ? "auth-container-signup--open" : "auth-container-signup"
  const loginClassName = openSignForm ? "auth-container-login--close" : "auth-container-login"

  const openSignupForm = () => {
    setOpenSignForm(true)
  }

  const closeSignupForm = () => {
    setTimeout(function(){ setOpenSignForm(false); }, 2000);
  }

  console.log(openSignForm)


    return (
      <div>
        {!isLoggedIn? 
          <div className="auth">
            <div className={signUpclassName}>
              <SignUp closeSignupForm={closeSignupForm}/>
            </div>
            <div className={loginClassName}>
              <Login/>
              <div className="isClient">
                <h2 className="signupTitle">Nouveau Client ?</h2>
                <button onClick={openSignupForm} className="clientBtn">Créer un Compte</button>
            </div> 
            </div>
          </div> :
          <div className="account">
            <Informations />
            <Orders />
          </div>
        }
      </div>
    );
}
  
export default Account;