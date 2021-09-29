const Product = require('../models/Product');

const cartController = {

    checkPrice: async (request, response) => {
        try {
            const cart = request.body.shop.cart;
            const tabCart = [];
            for(const item of cart){
                const quantiy = item.quantiy;
                const price = await Product.findOne(item.id);
                const amount = (quantiy * price.price_without_taxes) * price.taxe;
                tabCart.push(amount);
            }
            [...tabCart];
        } catch(error) {
            response.status(500).send(error.message);   
        }
    }

}

module.exports = cartController


/*
[28,91, 12,85, ..]

RECUPERER ID + QUANTITY DANS SHOP -> CART
FINDONE PAR ID POUR TROUVER LE PRIX
MULTIPLIER LE PRIX PAR LA QUANTITE POUR CHAQUE LIGNE
RENVOYER LE SOUS TOTAL
*/