import './message.scss';

const Message = () => (
    <div className='message'>
        <label className="message__label">Message</label>
        <textarea className="message__text" rows="20" cols="75" placeholder="Votre Message"></textarea>

        <button className="message__button" type="submit">Envoyer</button>
    </div>
);

export default Message;