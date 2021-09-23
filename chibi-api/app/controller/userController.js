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
            await updateUser.update(request.params.id);
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
                mail: result.email,
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
    },

    login: async (request, response) => {
        try {
            /*
            RECUPERER LES DONNES DU FORMULAIRE (email + mdp)
            CHECK BDD si email existe si non -> email ou mdp incorrect
            COMPARE MDP REQUEST ET HASH BDD -> si non email ou mdp incorrect
            RETURN CONNEXION
            */
            const userInfo = request.body;
            const result = await User.check(userInfo.email);
            if(!result) console.log(`Email ou mot de passe incorrect`);
            const isTrue = bcrypt.compareSync(userInfo.password, result.password);
            if(isTrue) console.log(`Connexion validé`);
            else console.log('Email ou mot de passe incorrect');
        } catch(error) {
            response.status(500).send(error.message);
        }
    },

    delete: async (request, response) => {
        try {
            await User.delete(request.params.id);
        } catch (error) {
            response.status(500).send(error.message);
        }
    }
}

module.exports = userController;