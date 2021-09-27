const db = require('../database');
const Order = require('../models/Order');
const OrderHasProduct = require('../models/OrderHasProduct');


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
            const result = request.body
            const orderInfo = {
                number: result.number,
                total_without_taxes: result.total_without_taxes,
                delivery_street_number: result.delivery_street_number,
                delivery_name_of_the_road: result.delivery_name_of_the_road,
                delivery_postal_code: result.delivery_postal_code,
                delivery_city: result.delivery_city,
                user_id: result.user_id
            }
            const newOrder = new Order(orderInfo);
            await newOrder.create();
            for(const line in result.cart.line){
                const newOrderHasProduct = new OrderHasProduct(line);
                await newOrderHasProduct.create();
            }
            response.status(200).json(newOrderHasProduct);
            
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