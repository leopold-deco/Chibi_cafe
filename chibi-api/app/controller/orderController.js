const db = require('../database');
const Order = require('../models/Order');


const oderController = {

    lastOrder: async (request, response) => {
        try {
            const lastOrder = await Order.lastOrder();
            response.json(lastOrder); 
        } catch(error) {
            response.status(500).send(error.message);   
        }
    }
}

module.exports = oderController;