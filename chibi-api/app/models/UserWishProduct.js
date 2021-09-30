const db = require('../database');
const User = require('./User');

class UserWishProduct {

    constructor(obj={}) {
        for(const propName in obj) {
            this[propName] = obj[propName];
        }
    }

    static async findByUser(id) {
        try {
         const {rows} = await db.query(`
         SELECT user_wish_product.*, 
         ARRAY_AGG (
            product.product_name || ' ' || product.product_picture
         )
         FROM "user_wish_product" 
         JOIN "product" ON (product_id=product.id)
		 WHERE user_id=$1
         GROUP BY user_wish_product.user_id, user_wish_product.product_id, product.id;`, [id]);   
         return rows.map(row => new UserWishProduct(row));
        }catch(error) {
            throw error;
        }
    }
}

module.exports = UserWishProduct;