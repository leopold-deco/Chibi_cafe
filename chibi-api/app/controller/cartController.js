const checkPrice = require('../function/checkPrice');

const cartController = {

    priceConfirmation: async (request, response) => {
        try {
            const cart = request.body;
            console.log("cart dans priceConfirmation", cart);
            const cartAmount = await checkPrice(cart);
            console.log("cart amount après traitement", cartAmount);
            response.status(200).json(cartAmount);
        } catch(error) {
            response.status(500).send(error.message);
        }
    }
}

module.exports = cartController;


/*
[28,91, 12,85, ..]

RECUPERER ID + QUANTITY DANS SHOP -> CART
FINDONE PAR ID POUR TROUVER LE PRIX
MULTIPLIER LE PRIX PAR LA QUANTITE POUR CHAQUE LIGNE
RENVOYER LE SOUS TOTAL
*/