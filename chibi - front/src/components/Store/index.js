import { Link } from "react-router-dom";

import './store.scss';

const Store = () => {

    return (
      <div className="container">
          <Link to="/boutique/custom">personnalisables</Link>
          <Link to="/boutique/peindre">à peindre</Link>
          <Link className="container__message" to="/boutique/message">Sablés Message</Link>
          <Link className="container__decores" to="/boutique/decores">Sablés Décorés</Link>

      </div>
    );
  }
  
export default Store;