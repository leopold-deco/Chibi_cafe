const Order = require('../models/Order');
const OrderHasProduct = require('../models/OrderHasProduct');
const checkPrice = require('../function/checkPrice');

const oderController = {

    // lastOrder: async (request, response) => {
    //     try {
    //         const lastOrder = await Order.lastOrder();
    //         response.json(lastOrder); 
    //     } catch(error) {
    //         response.status(500).send(error.message);   
    //     }
    // },

    create: async (request, response) => {
        try {

            // GESTION D'INSERTION DANS LA TABLE ORDER
            console.log(request.body);
            const deliveryInfoRequest = request.body.delivery
            const userInfo = request.body.auth.user;
            const cart = request.body.shop.cart;

            let deliveryInfo = {};

            const cartAmount = await checkPrice(cart);

            if(!deliveryInfoRequest.isNewAddress) {

                deliveryInfo = {
                    number: "DEL_11", // FONCTION A FAIRE POUR GENERER LE NUMERO DE COMMANDE PSQL 
                    total: cartAmount, // A FAIRE GERER LE PRIX (fonction checkprice) JAVASCRIPT
                    delivery_street_number: userInfo.street_number,
                    delivery_name_of_the_road: userInfo.name_of_the_road,
                    delivery_postal_code: userInfo.postal_code,
                    delivery_city: userInfo.city,
                    user_id: userInfo.user_id
                }
            
            } else {

                deliveryInfo = {
                    number: "DEL_11",
                    total: cartAmount, // A FAIRE GERER LE PRIX (fonction checkprice) JAVASCRIPT                  
                    delivery_street_number: deliveryInfoRequest.street_number,
                    delivery_name_of_the_road: deliveryInfoRequest.name_of_the_road,
                    delivery_postal_code: deliveryInfoRequest.postal_code,
                    delivery_city: deliveryInfoRequest.city,
                    user_id: userInfo.user_id
                }
            }
            
            const newOrder = new Order(deliveryInfo);
            const createdOrder = await newOrder.create();
         
            // GESTION D'INSERTION DANS LA TABLE Order_has_Product
            
            const cartInfo = request.body.shop.cart;
            const orderId = createdOrder.id;

            for(const item of cartInfo) {
                const newOrderHasProduct = new OrderHasProduct();
                await newOrderHasProduct.create(orderId, item.id, item.quantity);

            }
            response.status(200).json(createdOrder);
        }catch(error) {
            response.status(500).send(error.message);   
        }
    },

    findByUser: async (request, response) => {
        try {
            const userOrder = await Order.findByUser(request.params.id);
            response.status(200).json(userOrder);
        } catch (error) {
            response.status(500).send(error.message);
        }
    }
}

module.exports = oderController;