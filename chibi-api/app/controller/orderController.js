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
            const orderInfo = {
                number,
                total_without_taxes,
                delivery_street_number,
                delivery_name_of_the_road,
                delivery_postal_code,
                delivery_city,
                user_id
            }
            const newOrder = new Order(orderInfo);
            await newOrder.create();
            for(const product of cart){
                await OrderHasProduct.create(product);
            }
            // response.json(newOrder);
            console.log("ca marche");
        }catch(error) {
            response.status(500).send(error.message);   
        }
    }
}

// {
//     "CreateOrder":
//     "Contenue panier":  [
//       {  "Id product": ...
//         "Id order":
//         "Quantity":
//     },  
//     {  "Id product": ...
//         "Id order":
//         "Quantity":
//     },  
//     {  "Id product": ...
//         "Id order":
//         "Quantity":
//     },    
//     ]
// }

module.exports = oderController;