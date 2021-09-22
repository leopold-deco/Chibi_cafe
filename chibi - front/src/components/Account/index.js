import SignUp from './SignUp';
import Login from './Login';
import Informations from './Informations';
import Orders from './Orders';

function Account() {
  const user = true;
    return (
      <div>
        {user? 
          <div className="auth">
            <SignUp />
            <Login /> 
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