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
            
            const result = request.body;

            // GESTION DU MOT DE PASSE

            const userPassword = result.password
            const salt = bcrypt.genSaltSync(saltRounds);
            const hashedPassword = bcrypt.hashSync(userPassword, salt);
            
            // FORMATAGE DATE DE NAISSANCE

            const {day, month, year} = result;
            const birthdayDate = `${day}/${month}/${year}`;

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
            console.log('User créé');
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
    },

    updatePassword: async (request, response) => {
        try {
            
            const userInfo = request.body;
            
            /*
            email
            actualPassword
            newPassword1
            newPassword2
            */
            const result = await User.check(userInfo.email);
            
            const isTrue = bcrypt.compareSync(userInfo.actualPassword, result.password);
            if(!isTrue) console.log(`Mot de passe incorrect`);
            
            if(userInfo.newPassword1 !== userInfo.newPassword2) console.log('Veuillez rentrer des mots de passes identiques');

            // GESTION DU MOT DE PASSE
            
            const userPassword = userInfo.newPassword1;
            const salt = bcrypt.genSaltSync(saltRounds);
            const hashedPassword = bcrypt.hashSync(userPassword, salt);
            console.log("sorti gestion mdp");
            const newPassword = new User(hashedPassword, result.mail);
            await newPassword.updatePassword();
            // response.json('Mot de passe changé'); 
            console.log('mot de passe changé');
        } catch(error) {
            response.status(500).send(error.message);
        }
    }
    /*
    RECUPERER LE MOT DE PASSE ACTUEL POUR VERIFIER L'UTILISATEUR - OK -

    RECUPERER LE NOUVEAU MOT DE PASSE + (voir si password1 = password 2)

    RECRYPTER LE NOUVEAU MDP
    INSERER LE NOUVEAU MDP
    TOUT REINSERER
    */
}

module.exports = userController;