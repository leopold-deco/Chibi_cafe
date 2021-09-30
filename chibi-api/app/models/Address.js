const db = require('../database');

class Address {

    constructor(obj={}) {
        for(const propName in obj) {
            this[propName] = obj[propName];
        }
    }

    static async findByUser(id) {
        try {
         const {rows} = await db.query('SELECT * FROM "address" WHERE user_id = $1', [id]);   
         return rows.map(row => new Address(row));
        }catch(error) {
            throw error;
        }
    }

    async create() {
        try {
            await db.query('INSERT INTO "address"("street_number", "name_of_the_road", "postal_code", "city", "user_id") VALUES($1, $2, $3, $4, $5)', [this.delivery_street_number, this.delivery_name_of_the_road, this.delivery_postal_code, this.delivery_city, this.user_id]);
        } catch (error) {
            throw error;
        }
    }
}

module.exports = Address;