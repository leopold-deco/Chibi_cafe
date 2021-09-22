import localisation from "../../assets/localisation.png";

import "./contact.scss";

function Contact() {
    return (
      <form className="form" >
        <div className="form__infos">
        <img className="form__img" src={localisation} />
          <h3 className="form__adresse">Adresse</h3>
            <p>1 rue de Chibi</p>
            <p>75001 Paris</p>

          <h3 className="form__hours">Horaires</h3>
            <p>Lundi au samedi</p>
            <p>De 11h30 à 19h00</p>

          <h3 className="form__phone-number">Horaires</h3>
            <p>0123456789</p>

          <h3 className="form__email">Horaires</h3>
            <p>contact@chibi.com</p>
        </div>

        <h2 className="form-title">Contactez-nous</h2>

        <div className="form__identity">
          <div className="form__lastname">
            <label for="">Nom :</label>
            <input type="text" />
          </div>
          
          <div className="form__firstname">
            <label for="">Prénom :</label>
            <input type="text" />
          </div>
          
          <div className="form__email">
            <label for="">Email :</label>
            <input type="email" />
          </div>
          
          <div className="form__phone">
            <label for="">Téléphone :</label>
            <input type="number" />
          </div>
        </div>

        <div className="form__message">
        <label for="message">Message</label>
        <textarea name="message" className="form__message" placeholder="Votre Message" resize="none"></textarea>

        <button className="form__button" type="button">Envoyer</button>

        </div>
      </form>
    );
  }
  
export default Contact;