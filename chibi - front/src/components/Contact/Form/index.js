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
    const [sendMessage, setSendMessage] = useState("");

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
        setSendMessage("Votre message a bien été envoyé");
        }, 
        (err) => {
        console.log('FAILED...', err);
        });
        
        setLastname("");
        setFirstname("");
        setEmail("");
        setPhone("");
        setMessage("");
        

    }   
    console.log(firstname);

    return (
        <form onSubmit={handleSubmit} className="form__contact">
                <h2 className="form__contact__title">Contactez-nous</h2>
    
                <div className="form__contact__fields">
                    <label className="form__contact__fields__label" htmlFor="firstname" >Prénom</label>
                    <Input value={firstname} handleChange={setFirstname} type="text" id="firstname" />
                </div>

                <div className="form__contact__fields">
                    <label className="form__contact__fields__label" htmlFor="lastname">Nom</label>
                    <Input value={lastname} handleChange={setLastname} type="text" id="lastname" />
                </div>
                
                <div className="form__contact__fields">
                    <label className="form__contact__fields__label" htmlFor="email">Email</label>
                    <Input value={email} handleChange={setEmail} type="email" id="email" />
                </div>
                
                <div className="form__contact__fields">
                    <label className="form__contact__fields__label" htmlFor="phone">Téléphone</label>
                    <Input value={phone} handleChange={setPhone} type="tel" id="phone" />
                </div>

            <div className='message'>
                <label className="message__label" htmlFor="textarea">Message</label>
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="message__text" rows="20" cols="75" placeholder="Votre Message" id="textarea"></textarea>

                <Button className="message__button" type="submit">Envoyer</Button>
            </div>

            <p>
            {sendMessage}
            </p>
        </form>
    );
} 

export default Form;