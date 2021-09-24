import { Link } from "react-router-dom";

import presImage from "../../assets/presentation-sables/presentation-sables.png";
import custom from "../../assets/presentation-sables/custom.png";
import paint from "../../assets/presentation-sables/paint.png";
import decores from "../../assets/presentation-sables/decores.png";
import messages from "../../assets/presentation-sables/messages.png";
import './store.scss';

const Store = () => {

    return (
      <div className="container">

        <div className="container__left">

          <div className="container__categories">
            <Link className="container__categories__custom" to="/boutique/custom">
            <img
              src={custom}
              className="container__categories__image"
              alt="Sablés Personnalisables"
            />
            Personnalisables
            </Link>

            <Link className="container__categories__paint" to="/boutique/peindre">
            <img
              src={paint}
              className="container__categories__image"
              alt="Sablés A peindre"
            />
            A peindre
            </Link>
          </div>

            <img
              src={presImage}
              className="container__title"
              alt="Présentation Sablés"
            />

          <div className="container__right">
            <Link className="container__categories__message" to="/boutique/message">
            <img
              src={messages}
              className="container__categories__image"
              alt="Sablés Personnalisables"
            />
            Sablés Message
            </Link>

            <Link className="container__categories__decores" to="/boutique/decores">
            <img
              src={decores}
              className="container__categories__image"
              alt="Sablés Personnalisables"
            />
            Sablés Décorés
            </Link>
          </div>

        </div>

      </div>
    );
  }
  
export default Store;