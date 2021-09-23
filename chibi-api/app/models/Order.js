const db = require('../database');

class Order {

    constructor(obj={}) {
        for(const propName in obj) {
            this[propName] = obj[propName];
        }
    }

    // static async lastOrder() {
    //     try {
            // const {rows} = await db.query('SELECT * FROM order WHERE "order_date"=$1, LIMIT=$2', [this.order_date, 1]);
    //     } catch(error) {
    //         console.log(error);
    //     }
    // }

    async create() {
        try {
            await db.query('INSERT INTO "order" ("number", "order_date", "delivery_date", "total_without_taxes", "status", "delivery_street_number", "delivery_name_of_the_road", "delivery_postal_code", "delivery_city", "user_id") VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING id', [this.number, this.order_date, this.delivery_date, this.total_without_taxes, this.status, this.delivery_street_number, this.delivery_name_of_the_road, this.delivery_postal_code, this.delivery_city, this.user_id]);
            await db.query('');
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