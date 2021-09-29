import SignUp from './SignUp';
import Login from './Login';

import './account.scss';

function Account() {
    return (
      <div>
          <div className="auth">
            <div className="auth-container">
              <SignUp />
            </div>
            <div className="auth-container">
              <Login /> 
            </div>
          </div>
      </div>
    );
}
  
export default Account;