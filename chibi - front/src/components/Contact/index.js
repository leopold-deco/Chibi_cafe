import Adresse from './Adresse';
import Form from './Form';
import Message from './Message';

import "./contact.scss";

function Contact() {
    return (
      <div className="contact" >
        <div className="contact__container">
          <div className="contact__container-left">
            <Adresse />
          </div>
        
          <div className="contact__container-right">
            <Form />
            <Message />
          </div>
        </div>
      </div>
    );
  }
  
export default Contact;