import SignUp from './SignUp';
import Login from './Login';
import Informations from './Informations';
import Orders from './Orders';

import { useSelector } from 'react-redux';

import './account.scss';

function Account() {
  const logged = useSelector((state) => state.user.logged);
    return (
      <div>
        {!logged? 
          <div className="auth">
            <div className="auth-container">
              <SignUp />
            </div>
            <div className="auth-container">
              <Login /> 
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