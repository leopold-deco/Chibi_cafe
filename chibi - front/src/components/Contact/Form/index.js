import Button from '../../Button';
import Input from '../../Input';

import emailjs from 'emailjs-com';

import { useState } from 'react';

import './form.scss';

const Form = () => {
    const [lastname, setLastname] = useState("");
    const [firstname, setFirstname] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState(""); 

    const handleSubmit = (e) => {
        e.preventDefault();
        const templateParams = {
            firstname,
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
        <form onSubmit={handleSubmit} className='form-contact'>
                <h2 className="form__title">Contactez-nous</h2>
    
                <div className="form__lastname">
                    <label className="form__lastname-label">Nom</label>
                    <Input className="form__lastname-input" type="text" />
                </div>
                
                <div className="form__firstname">
                    <label className="form__firstname-label">Prénom</label>
                    <Input value={firstname} onChange={(e) => setFirstname(e.target.value)} className="form__firstname-input" type="text" />
                </div>
                
                <div className="form__email">
                    <label className="form__email-label">Email</label>
                    <Input className="form__email-input" type="email" />
                </div>
                
                <div className="form__phone">
                    <label className="form__phone-label">Téléphone</label>
                    <Input className="form__phone-input" type="number" />
                </div>
            <div className="form-message"></div>

            <div className='message'>
                <label className="message__label">Message</label>
                <textarea className="message__text" rows="20" cols="75" placeholder="Votre Message"></textarea>

                <Button className="message__button" type="submit">Envoyer</Button>
            </div>
        </form>
    );
} 

export default Form;