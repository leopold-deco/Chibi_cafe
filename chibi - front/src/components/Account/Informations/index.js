import PropTypes from "prop-types";

import './informations.scss';

const Informations = ({ first_name, last_name, mail, address }) => {

    return (
        <div className='informations'>
            <h2 className="informations__title">Mes informations personnelles</h2>
            <p className="informations__modify">Modifier</p>
            <p className="informations__firstname">Prénom : {first_name}</p>
            <p className="informations__lastname">Nom : {last_name}</p>
            <p className="informations__email">Email : {mail}</p>
            <div className="informations__adress">
                <h3 className="informations__address__title">Adresse :</h3>
                <p className="informations__address__street_number">N°</p>
                <p className="informations__address__road">Nom de rue :</p>
                <p className="information__address__postal_code">Code Postal :</p>
                <p className="informations__adress__city">Ville :</p>
            </div>
        </div>
    );
}


export default Informations;