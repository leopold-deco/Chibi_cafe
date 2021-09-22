const db = require('../database');

class Commande {

    constructor(obj={}) {
        for(const propName in obj) {
            this[propName] = obj[propName];
        }
    }

}

module.exports = Commande;