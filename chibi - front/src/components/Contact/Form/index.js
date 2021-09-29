import Button from '../../Button';
import Input from '../../Input';
import PropTypes from 'prop-types';
import emailjs from 'emailjs-com';

import { useState } from 'react';

import './form.scss';

const Form = ({ className, closeForm }) => {
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

        setTimeout(function(){ closeForm(); }, 2000);

        
        

    }   
    console.log(firstname);

    return (
        <>
        
        <form className={className} onSubmit={handleSubmit} >
        <div className="form__contact">
                <h2 className="form__contact__title">Contactez-nous</h2>
    
                <div className="form__contact__fields">
                    <label className="form__contact__fields__label">Prénom</label>
                    <Input value={firstname} handleChange={setFirstname} type="text" id="firstname" />
                </div>

                <div className="form__contact__fields">
                    <label className="form__contact__fields__label">Nom</label>
                    <Input value={lastname} handleChange={setLastname} type="text" id="lastname" />
                </div>
                
                <div className="form__contact__fields">
                    <label className="form__contact__fields__label">Email</label>
                    <Input value={email} handleChange={setEmail} type="email" id="email" />
                </div>
                
                <div className="form__contact__fields">
                    <label className="form__contact__fields__label">Téléphone</label>
                    <Input value={phone} handleChange={setPhone} type="tel" id="phone" />
                </div>
                </div>

            <div className='message'>
                <label className="message__label">Message</label>
                <textarea  value={message} onChange={(e) => setMessage(e.target.value)} className="message__text"  placeholder="Votre Message"></textarea>

                <Button className="message__button" type="submit">Envoyer</Button>
            </div>

            <p>
            {sendMessage}
            </p>
        </form>
        
        </>
    );
} 

Form.propTypes = {
    className: PropTypes.string.isRequired,
    closeForm: PropTypes.func.isRequired,
}

export default Form;