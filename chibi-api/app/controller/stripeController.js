const stripe = require('stripe')('sk_test_51JeKakDij0gh8k8y5xaGpicpBtwjOE0SRQKD3cNONH3oApd32b04CUvh8Y4IhRUu4GF2V58vCLxTMor35JLNnBJb00nR0GNbKs');
//mettre la "sk_test" (clé privé) dans le .env;
const checkPrice = require('../function/checkPrice');

// const YOUR_DOMAIN = 'http://localhost:4242';

const stripeController = {
    payment: async (request, response) => {
        try {
            const cart = request.body.shop.cart
            const priceTTC = await checkPrice(cart);

            const paymentIntent = await stripe.paymentIntents.create({
                  amount: priceTTC*100,
                  currency: "eur"
                });

            response.json({
                clientSecret: paymentIntent.client_secret, // pi_3Jf35W2VYugoKSBz148oH7m0_secret_EeQkCoAOSEqetIc2ywOcnt9P5
              });
        } catch (error) {
            response.status(500).json(error);
        }
    }

}

module.exports = stripeController;