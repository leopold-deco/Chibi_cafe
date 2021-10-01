import './confirmation.scss';

export default function Confirmation() {
    const lastOrder = JSON.parse(localStorage.getItem("lastOrder"));
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user)
  return (
    <div className="confirmation">
        <h4 class="modal-title mx-auto">Merci "user delivery" <br/>
            Commande n°{lastOrder.id} du {lastOrder.order_date}
        </h4>
        <ul id="progressbar">
            <li class="step0 active " id="step1">Passée</li>
            <li class="step0 active text-center" id="step2">Expédiée</li>
            <li class="step0 text-muted text-right" id="step3">Livrée</li>
        </ul>
            <div> Livré par </div>
            <div> UPS </div>
            <div> à l'adresse </div>
            <div> {lastOrder.delivery_street_number} {lastOrder.delivery_name_of_the_road} {lastOrder.delivery_postal_code} {lastOrder.delivery_city} 
            </div>
    </div>
  );
};