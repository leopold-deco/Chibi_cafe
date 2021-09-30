const UserWishProduct = require('../models/UserWishProduct');

const wishListController = {

    findByUser: async (request, response) => {
        try {
            const wish = await UserWishProduct.findByUser(request.params.id);
            response.status(200).json(wish);
        }catch(error) {
            response.status(500).send(error.message);   
        }
    }

}

module.exports = wishListController