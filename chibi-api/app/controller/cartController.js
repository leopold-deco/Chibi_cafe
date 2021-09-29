const Product = require('../models/Product');

const cartController = {

    checkPrice: async (request, response) => {
        try {
            const cart = request.body.shop.cart;
            const tabCart = [];
            for(const item of cart){
                const quantity = item.quantity;
                console.log('quantity', quantity);
                const price = await Product.findOne(item.id);
                const amount = ((quantity * price.price_without_taxes) * price.taxe);
                console.log('amount', amount);
                tabCart.push(amount);
            }
            const cartAmount = tabCart.reduce((previousValue, currentValue) => previousValue + currentValue).toFixed(2);
            console.log('CartAmount : ',cartAmount);
            response.status(200).json(cartAmount);
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