const db = require('../database');

class User {

    constructor(obj={}) {
        for(const propName in obj) {
            this[propName] = obj[propName]; 
        }
    }

    static async findOne(id) {
        try {
            const {rows} = await db.query('SELECT * FROM "user" WHERE id=$1', [id]);
            if(rows[0]) {
                return new Product(rows[0]);
            }
            console.log('Aucuns produit trouvé avec cet id');
        }catch(error) {
            console.log(error);
        }
    }    
    
    async update() {
        try {
            await db.query('UPDATE user SET "mail"=$1, "password"=$2, "first_name"=$3, "last_name"=$4, "gender"=$5, "birthday_date"=$6, "phone_number"=$7, "roles"=$8, "street_number"=$9, "name_of_the_street"=$10, "postal_code"=$11, "city"=$12', [this.mail, this.password, this.first_name, this.last_name, this.gender, this.birthday_date, this.phone_number, this.roles, this.street_number, this.name_of_the_street, this.postal_code, this.city]);
        }catch(error) {
            console.log(error);   
        }
    }

    async create() {
        try {
            await db.query('INSERT INTO "user" ("mail", "password", "first_name", "last_name", "gender", "birthday_date", "phone_number", "roles", "street_number", "name_of_the_road", postal_code", "city")', [this.mail, this.password, this.first_name, this.last_name, this.gender, this.birthday_date, this.phone_number, this.roles, this.street_number, this.name_of_the_street, this.postal_code, this.city]);
        }catch(error) {
            console.log(error);   
        }
    }
}

module.exports = User;