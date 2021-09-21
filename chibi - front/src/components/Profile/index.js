import SignUp from './SignUp';
import Login from './Login';
import Informations from './Informations';
import Orders from './Orders';

function Profile() {
    return (
      <div >
          <SignUp />
          <Login />
          <Informations />
          <Orders />
      </div>
    );
  }
  
export default Profile;