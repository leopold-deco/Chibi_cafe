const User = require('../models/User')
const bcrypt = require('bcrypt');
const saltRounds = 10;

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
    },

    create: async (request, response) => {
        try {

            // GESTION DU MOT DE PASSE

            const userPassword = request.body.password
            const salt = bcrypt.genSaltSync(saltRounds);
            const hashedPassword = bcrypt.hashSync(userPassword, salt);
            
            // FORMATAGE DATE DE NAISSANCE

            const {day, month, year} = request.body;
            const birthdayDate = `${day}/${month}/${year}`;
            
            const result = request.body;

            // CREATION DE L'OBJECT UTILISATEUR

            const userInfo = {
                mail: result.mail,
                password: hashedPassword,
                first_name: result.first_name,
                last_name: result.last_name,
                gender: result.gender,
                birthday_date: birthdayDate,
                phone_number: result.phone_number,
                street_number: result.street_number,
                name_of_the_road: result.name_of_the_road,
                postal_code: result.postal_code,
                city: result.city
            }

            const newUser = new User(userInfo);
            await newUser.create();
        } catch (error) {
            response.status(500).send(error.message);
        }
    }

}

module.exports = userController;