const db = require('../database');

class Order {

    constructor(obj={}) {
        for(const propName in obj) {
            this[propName] = obj[propName];
        }
    }

    static async lastOrder() {
        try {
            // const {rows} = await db.query('SELECT * FROM order WHERE "order_date"=$1, LIMIT=$2', [this.order_date, 1]);
        } catch(error) {
            console.log(error);
        }
    }
}

/*
PREMIERE PAGE PANIER -> RIEN
PAGE DE LIVRAISON -> STOCK LE CHOIX DE LA LIVRAISON sans l'envoyer en bdd (dans un object detailDelivery)
PAGE DE PAIEMENT -> RIEN
RETOUR CONFIRMATION DE PAIEMENT -> PRENDRE LES INFOS DU PANIER (id des produits, montant du panier, quantité de produits)
INSERT EN BDD 
RETURNING ID
await fetch('blabla/order/${returning}')

Livraison {
    ....,
    ....,
},
Panier {
    ...,
    ...,
}
*/

module.exports = Order;