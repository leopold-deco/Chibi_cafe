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
                return new User(rows[0]);
            }
            console.log('Aucuns utilisateur trouvé avec cet id');
        }catch(error) {
            console.log(error);
        }
    }    
    
    async update(id) {
        try {
            await db.query('UPDATE "user", SET "mail"=$1, "first_name"=$2, "last_name"=$3, "gender"=$4, "birthday_date"=$5, "phone_number"=$6, "street_number"=$7, "name_of_the_road"=$8, "postal_code"=$9, "city"=$10 WHERE "id"=$11;', [this.mail, this.first_name, this.last_name, this.gender, this.birthday_date, this.phone_number, this.street_number, this.name_of_the_road, this.postal_code, this.city, this.id]);
        }catch(error) {
            console.log(error);   
        }
    }

    async create() {
        try {
            await db.query('INSERT INTO "user" ("mail", "password", "first_name", "last_name", "gender", "birthday_date", "phone_number", "street_number", "name_of_the_road", "postal_code", "city") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11);', [this.mail, this.password, this.first_name, this.last_name, this.gender, this.birthday_date, this.phone_number, this.street_number, this.name_of_the_road, this.postal_code, this.city]);
        }catch(error) {
            console.log(error);
        }
    }

    static async check(mail) {
        try {
            const {rows} = await db.query('SELECT "mail", "password" FROM "user" WHERE mail=$1', [mail]);
            if(rows[0]) {
                return new User(rows[0]);
            }
        }catch(error) {
            console.log(error);
        }
    }  

    async delete(id) {
        try {
            await db.query('DELETE FROM "user" WHERE id=$1', [id]);
        } catch (error) {
            console.log(error);
        }
    }

    async updatePassword(password, mail) {
        try {
            await db.query('UPDATE "user" SET "password"=$1 WHERE "mail"=$2', [password, mail]);
        } catch(error) {
            console.log(error);
        }
    }
}


/*
SUPPRIME LES INFOS UTILISATEUR
A PARTIR DE user_id SUPPRIMER LES COMMANDES dans order
DELETE FROM user WHERE id IN (
    SELECT * FROM order WHERE order_id IN (
       SELECT * FROM order_has_product
    )
)
*/

module.exports = User;