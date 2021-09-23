import emailjs from 'emailjs-com';

import { useState } from 'react';

import './form.scss';

const Form = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState(""); 

    const handleSubmit = (e) => {
        e.preventDefault();
        let names = document.getElementById("name");
        let emails = document.getElementById("email");
        let messages = document.getElementById("message");
    }

    return (
        <div className='form'>
                <h2 className="form__title">Contactez-nous</h2>
    
                <div className="form__lastname">
                    <label className="form__lastname-label">Nom</label>
                    <input id="form__input" className="form__lastname-input" type="text" />
                </div>
                
                <div className="form__firstname">
                    <label className="form__firstname-label">Prénom</label>
                    <input id="form__input" className="form__firstname-input" type="text" />
                </div>
                
                <div className="form__email">
                    <label className="form__email-label">Email</label>
                    <input id="form__input" className="form__email-input" type="email" />
                </div>
                
                <div className="form__phone">
                    <label className="form__phone-label">Téléphone</label>
                    <input id="form__input" className="form__phone-input" type="number" />
                </div>
            <div className="form-message"></div>
        </div>
    );
} 

export default Form;