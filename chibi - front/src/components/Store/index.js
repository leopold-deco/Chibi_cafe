import { Link } from "react-router-dom";

function Store() {
    return (
      <div >
          <Link to="/boutique/custom">personnalisables</Link>
          <Link to="/boutique/peindre">à peindre</Link>
          <Link to="/boutique/message">Message</Link>
          <Link to="/boutique/decores">decores</Link>

      </div>
    );
  }
  
export default Store;