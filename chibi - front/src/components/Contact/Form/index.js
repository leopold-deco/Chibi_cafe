import './form.scss';

const Form = () => (
    <div className='form'>
            <h2 className="form__title">Contactez-nous</h2>

            <div className="form__lastname">
                <label className="form__lastname-label">Nom</label>
                <input className="form__lastname-input" type="text" />
            </div>
            
            <div className="form__firstname">
                <label className="form__firstname-label">Prénom</label>
                <input className="form__firstname-input" type="text" />
            </div>
            
            <div className="form__email">
                <label className="form__email-label">Email</label>
                <input className="form__email-input" type="email" />
            </div>
            
            <div className="form__phone">
                <label className="form__phone-label">Téléphone</label>
                <input className="form__phone-input" type="number" />
            </div>
    </div>
);

export default Form;