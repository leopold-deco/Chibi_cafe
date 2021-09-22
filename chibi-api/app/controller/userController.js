const User = require('../models/User')

const userController = {

    findOne: async (request, response) => {
        try {
            const user = await User.findOne(request.params.id);
            response.json(user);
        }catch(error) {
            res.status(500).send(error.message);   
        }
    },
    update: async (request, response) => {
        try {
            const updateUser = new User(request.body); 
            await updateUser.update();
            response.json(updateUser);            
        }catch(error) {
            response.status(500).send(error.message);   
        }
    }
}

module.exports = userController;