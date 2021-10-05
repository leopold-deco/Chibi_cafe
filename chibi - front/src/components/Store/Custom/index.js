import { useState } from 'react';
import emailjs from 'emailjs-com';

import Button from '../../Button';
import custom2 from '../../../assets/custom/custom2.png';
import './custom.scss';



function Custom() {
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [mail, setMail] = useState("");
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState("");
  const [file, setFile] = useState("");
  const [message, setMessage] = useState("");
  const [sendMessage, setSendMessage] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const templateParams = {
        lastname,
        firstname,
        mail,
        size,
        quantity,
        file,
        message,
    }
    emailjs.send('my_gmail','template_db83b08', templateParams, 'user_ArfWVVGSJEvGb8dc6tTwO')
    .then((response) => {
    console.log('SUCCESS!', response.status, response.text);
    setSendMessage("Votre message a bien été envoyé");
    }, 
    (err) => {
    console.log('FAILED...', err);
    });
    
    setLastname("");
    setFirstname("");
    setMail("");
    setMessage("");
  }


  
  return (
    <>
      <form className="custom" onSubmit={handleSubmit}>
        <div className="custom__top">
          <h2 className="custom__top__title">Sablés personnalisables</h2>
          
          <div className="custom__top__card-container">
            <div className="custom__top__card">
              <div className="custom__top__card__front">
                <img
                // onClick={onClick}
                className="custom__top__card__img"
                src={custom2}
                alt="Sablés Personnalisables"/>
              </div>
              <div className="custom__top__card__back">
                <h3 className="custom__top__card__subtitle">Envie d’épater votre famille, vos amis, vos collègues, vos salariés ?</h3>
                <p className="custom__top__card__description">Voici une idée de cadeau qui plaira à tous les gourmands.
                <br></br>
                Une idée ? Un thème ? Une inspiration ?
                Vous décidez du logo, du dessin, des couleurs, de la forme… et nous créerons pour vous le sablé sur-mesure qui surprendra vos convives !</p>
              </div>
            </div>
          </div>

        </div>

        <div className="custom__bottom">

          <div className="custom__bottom__left">
            <div className="custom__bottom__left__identity">
              <label htmlFor="firstname">Prénom</label>
              <input className="custom__bottom__left__identity__input" value={firstname} handleChange={setFirstname} type="text" id="firstname" />
            </div>

            <div className="custom__bottom__left__identity">
              <label htmlFor="lastname">Nom</label>
              <input className="custom__bottom__left__identity__input" value={lastname} handleChange={setLastname} type="text" id="lastname" />
            </div>

            <div className="custom__bottom__left__identity">
              <label htmlFor="mail">Email</label>
              <input className="custom__bottom__left__identity__input" value={mail} handleChange={setMail} type="email" id="mail" />
            </div>
          </div>

          <div className="custom__bottom__right">
              <h5 className="custom__bottom__right__title" htmlFor="quantity">Sélectionnez la taille de vos sablés :</h5>
              <div className="custom__bottom__right__radio">
                <input className="custom__bottom__right__radio__input" value={size} handleChange={setSize} type="radio" name="size" id="small" />
                <label className="custom__bottom__right__radio__label" htmlFor="small">Petit</label>
                <p className="custom__bottom__right__radio__description">(5cm)</p>
              </div>

              <div className="custom__bottom__right__radio">
                <input className="custom__bottom__right__radio__input" value={size} handleChange={setSize} type="radio" name="size" id="medium" />
                <label className="custom__bottom__right__radio__label" htmlFor="medium">Moyen</label>
                <p className="custom__bottom__right__radio__description">(10cm)</p>
              </div>

              <div className="custom__bottom__right__radio">
                <input className="custom__bottom__right__radio__input" value={size} handleChange={setSize} type="radio" name="size" id="large" />
                <label className="custom__bottom__right__radio__label" htmlFor="large">Grand</label>
                <p className="custom__bottom__right__radio__description">(15cm)</p>
              </div>

            <div className="custom__bottom__right__number">
              <label className="custom__bottom__right__number__title" htmlFor="quantity">Votre quantité</label>
              <input className="custom__bottom__right__number__input" value={quantity} handleChange={setQuantity} type="number" min="0" id="quantity" />
            </div>
          </div>
        </div>

          <div className="custom__choice">
            <label htmlFor="file">Télécharger votre image</label>
            <input className="custom__choice__input" value={file} handleChange={setFile} type="file" id="lastname" />
          </div>

          <div className="custom__submit">
            <textarea  value={message} onChange={(e) => setMessage(e.target.value)} className="custom__submit__text" placeholder="Votre Message"></textarea>

            <Button className="custom__button" type="button">Demander un devis</Button>
          </div>

      </form>
    </>
  );
}
  
export default Custom;