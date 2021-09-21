const Product = require('../models/Product');

const productController = {

    findAll: async (_, response) => {
        try {
            const products = await Product.findAll();
            response.json(products);
        }catch(error) {
            response.status(500).send(error.message);   
        }
    },
    findOne: async (request, response) => {
        try {
            const product = await Product.findOne(request.body);
            response.json(product);            
        }catch(error) {
            response.status(500).send(error.message);   
        }
    },
    update: async (request, response) => {
        try {
            const updateProduct = new Product(request.body);
            await updateProduct.update();
            response.json(updateProduct);            
        }catch(error) {
            response.status(500).send(error.message);   
        }
    },
    create: async (request, response) => {
        try {
            const newProduct = new Product(request.body);
            await newProduct.create();
            response.json(newProduct);           
        }catch(error) {
            response.status(500).send(error.message);   
        }
    }
}

module.exports = productController;