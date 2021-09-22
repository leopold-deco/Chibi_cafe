const db = require('../database');

class Category {

    constructor(obj={}) {
        for(const propName in obj) {
            this[propName] = obj[propName];
        }
    }

    static async findAll() {
        try {
         const {rows} = await db.query(`
         SELECT *, product.id AS product_id
         FROM "category" 
         JOIN "product" ON (category_id=category.id)`);   
         return rows.map(row => new Category(row));
        }catch(error) {
            console.log(error);
        }
    }
}

module.exports = Category;