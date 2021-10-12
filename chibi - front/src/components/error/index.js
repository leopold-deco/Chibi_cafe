import './error.scss';
import CoffeeMachineLoader from '../CoffeeMachineLoader';

function Error() {
    return (
      <div className="error">
          <h2>404</h2>
          <CoffeeMachineLoader />
          <p>Aller à <a className="error__button" href="/">l'accueil</a></p>
      </div>
    );
  }
  
  export default Error;