import Button from '../../Button';
import Input from '../../Input';

import emailjs from 'emailjs-com';

import { useState } from 'react';

import './form.scss';

const Form = () => {
    const [lastname, setLastname] = useState("");
    const [firstname, setFirstname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState(""); 

    const handleSubmit = (e) => {
        e.preventDefault();
        const templateParams = {
            lastname,
            firstname,
            email,
            message,
        }
        emailjs.send('my_gmail','template_db83b08', templateParams, 'user_ArfWVVGSJEvGb8dc6tTwO')
        .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        }, (err) => {
        console.log('FAILED...', err);
        });
        
        console.log(firstname);
    }   

    return (
        <form onSubmit={handleSubmit} className='"form__contact"'>
                <h2 className="form__contact__title">Contactez-nous</h2>
    
                <div className="form__contact__input">
                    <label className="form__contact__label">Prénom</label>
                    <input value={firstname} onChange={(e) => setFirstname(e.target.value)} type="text" />
                </div>
                
                <div className="form__contact__input">
                    <label className="form__contact__label">Nom</label>
                    <input value={lastname} onChange={(e) => setLastname(e.target.value)} type="text" />
                </div>
                
                <div className="form__contact__input">
                    <label className="form__contact__label">Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
                </div>
                
                <div className="form__contact__input">
                    <label className="form__contact__label">Téléphone</label>
                    <input value={phone} onChange={(e) => setPhone(e.target.value)} type="number" />
                </div>
            <div className="form-message"></div>

            <div className='message'>
                <label className="message__label">Message</label>
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="message__text" rows="20" cols="75" placeholder="Votre Message"></textarea>

                <Button className="message__button" type="submit">Envoyer</Button>
            </div>
        </form>
    );
} 

export default Form;