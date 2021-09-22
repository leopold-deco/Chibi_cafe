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
            console.log("Mot de passe:", userPassword)
            const salt = bcrypt.genSaltSync(saltRounds);
            const hashedPassword = bcrypt.hashSync(userPassword, salt);
            console.log("Mot de passe crypté:", hashedPassword)
            
            // FORMATAGE DATE DE NAISSANCE

            const {day, month, year} = request.body;
            const birthdayDate = `${day}/${month}/${year}`;
            console.log("date de naissance", birthdayDate);
            
            const result = request.body;

            // CREATION DE L'OBJECT UTILISATEUR

            const userInfo = {
                mail: result.mail,
                hashedPassword,
                firstName: result.first_name,
                lastName: result.last_name,
                gender: result.gender,
                birthdayDate,
                phoneNumber: result.phone_number,
                streetNumber: result.street_number,
                nameOfTheRoad: result.name_of_the_road,
                postalCode: result.postal_code,
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