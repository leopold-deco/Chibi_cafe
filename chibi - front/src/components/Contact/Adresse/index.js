import localisation from "../../../assets/localisation.png";

import './adresse.scss';

const Adresse = () => (
    <>
    <div className='adresse'>
        <h3 className="adresse__title">Adresse</h3>
        <p className="adresse__p">1 rue de Chibi - 75001 Paris</p>

        <h3 className="adresse__hours">Horaires</h3>
        <p className="adresse__p">Lundi au samedi - De 11h30 à 19h00</p>

        <h3 className="adresse__phone-number">Téléphone</h3>
        <p className="adresse__p">0123456789</p>

        <h3 className="adresse__email">Email</h3>
        <p className="adresse__p">chibi.cafe.13@gmail.com</p>

    </div>
    <div className="adresse__img">
    <img className="img" src={localisation} alt="map img"/>
    </div>
    </>
);

export default Adresse;