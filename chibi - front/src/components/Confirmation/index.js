import './confirmation.scss';
import dayjs from 'dayjs';
import 'dayjs/locale/fr';

export default function Confirmation() {
    const lastOrder = JSON.parse(localStorage.getItem("lastOrder"));
    const user = JSON.parse(localStorage.getItem("user"));
    
  return (
    <div className="confirmation">
      <div className="form__auth">
          <h2 className="modal-title mx-auto">Merci {user.first_name} {user.last_name},</h2>
          <h3>Commande n°{lastOrder.id} du {dayjs(lastOrder.order_date.slice(0,10)).locale('fr').format("DD MMMM YYYY")} - {lastOrder.total} € </h3>
          
          <ul id="progressbar">
              <li className="step0 active " id="step1">Passée</li>
              <li className="step0 text-center" id="step2">Expédiée</li>
              <li className="step0 text-muted text-right" id="step3">Livrée</li>
          </ul>
              <div> Livré par </div>
              <div> UPS </div>
              <div> à l'adresse </div>
              <div> {lastOrder.delivery_street_number} {lastOrder.delivery_name_of_the_road} {lastOrder.delivery_postal_code} {lastOrder.delivery_city} 
              </div>
      </div>
    </div>
  );
};