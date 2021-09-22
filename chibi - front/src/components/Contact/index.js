import localisation from "../../assets/localisation.png";

import "./contact.scss";

function Contact() {
    return (
      <form className="form" >
        <div className="form__left">
          <div className="form__left-infos">
            <h3 className="form__left-infos--adresse">Adresse</h3>
              <p>1 rue de Chibi</p>
              <p>75001 Paris</p>

            <h3 className="form__left-infos--hours">Horaires</h3>
              <p>Lundi au samedi</p>
              <p>De 11h30 à 19h00</p>

            <h3 className="form__left-infos--phonenumber">Horaires</h3>
              <p>0123456789</p>

            <h3 className="form__left-infos--email">Horaires</h3>
              <p>contact@chibi.com</p>
            <img className="form__left-infos--img" src={localisation} />
          </div>
        </div>

        <div className="form__right">
          <div className="form__right-identity">
            <h2 className="form__right-identity--title">Contactez-nous</h2>
            <div className="form__right-identity--lastname">
              <label>Nom :</label>
              <input type="text" />
            </div>
            
            <div className="form__right-identity--firstname">
              <label>Prénom :</label>
              <input type="text" />
            </div>
            
            <div className="form__right-identity--email">
              <label>Email :</label>
              <input type="email" />
            </div>
            
            <div className="form__right-identity--phone">
              <label>Téléphone :</label>
              <input type="number" />
            </div>
          </div>

          <div className="form__right-message">
          <label htmlFor="message">Message</label>
          <textarea name="message" className="form__message" placeholder="Votre Message" resize="none"></textarea>

          <button className="form__right-button" type="button">Envoyer</button>
          </div>
        </div>
      </form>
    );
  }
  
export default Contact;