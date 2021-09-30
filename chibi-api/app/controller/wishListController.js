const UserWishProduct = require('../models/UserWishProduct');

const wishListController = {

    findByUser: async (request, response) => {
        try {
            const wish = await UserWishProduct.findByUser(request.params.id);
            response.status(200).json(wish);
        }catch(error) {
            response.status(500).send(error.message);   
        }
    },

    addProduct: async (request, response) => {
        try {
            const productId = request.body.id
            const userId = request.params.id;
            const newWish = new UserWishProduct();
            await newWish.insertProduct(userId, productId);
            response.status(200).json(newWish[0]);
        } catch(error) {
            response.status(500).send(error.message);   
        }
    },
    
    deleteProduct: async (request, response) => {
        try {
            const productId = request.body.id;
            const userId = request.params.id;
            const deleteOneWish = new UserWishProduct();
            await deleteOneWish.removeProduct(productId, userId);
        } catch (error) {
            response.status(500).send(error.message);
        }
    },
    
    deleteByUser: async (request, response) => {
        try {
            const userId = request.params.id;
            const deleteAllWish = new UserWishProduct();
            await deleteAllWish.removeWishList(userId);
        } catch (error) {
            response.status(500).send(error.message);
        }
    }
}

module.exports = wishListController