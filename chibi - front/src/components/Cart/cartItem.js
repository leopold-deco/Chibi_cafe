const CartItem = () => {


    return (
        <div className="card">
            <div className="card__img">
                <img className="card__img__pics" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.marmiton.org%2Frecettes%2Frecette_biscuits-sables-au-beurre_31237.aspx&psig=AOvVaw2z_hENxNZxuT6uQ_da_dpd&ust=1632384850384000&source=images&cd=vfe&ved=0CAkQjRxqFwoTCKCV9s-RkvMCFQAAAAAdAAAAABAE" alt="sablé" />
            </div>
            <div className="card__content">
                <h4 className="card__content__title"><strong>Sablé</strong></h4>
                <h4>
                    <small className="card__content__description">blablabla</small>
                </h4>
            </div>
            <div className="card__priceUnit">
                <div className="card__priceUnit__div" >
                    <h6><strong>10 € </strong></h6>
                </div>
                <div className="card__quantity">
                    <div className="card__quantity__div">
                        <input
                            type="button" value="+" className="plus" />
                            <input
                                type="number" step="1" max="20" min="1" value="1" title="Qty"
                                   className="qty"
                                   size="4" />
                                <input
                                    type="button" value="-" className="minus" />
                    </div>
                    <div className="card__underPrice">
                        <div className="card__underPrice__div">
                            <h6><strong>20 €</strong></h6>
                        </div>
                    </div>
                </div>
                <div className="card__suppr">
                    <button
                        type="button" className="card__btnSuppr">
                        Suppr
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartItem;