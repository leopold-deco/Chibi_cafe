const db = require('../database');

class OrderHasProduct {

    constructor(obj={}) {
        for(const propName in obj) {
            this[propName] = obj[propName];
        }
    }

    async create() {
        try {
            await db.query('INSERT INTO "order_has_product" ("order_id", "product_id", "quantity") VALUES ($1, $2, $3)', [this.order_id, this.product_id, this.quantity]);
        } catch(error) {
            console.log(error);
        }
    }
}

module.exports = OrderHasProduct