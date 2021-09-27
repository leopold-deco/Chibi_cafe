const jwt = require("jsonwebtoken");
const User = require('../models/User'); 
const bcrypt = require("bcrypt");

const tokenMW = {

    generateToken: async (request, response, next) => {
        const userInfo = request.body;
        const result = await User.check(userInfo.email);
        if(!result) return response.status(200).json(`Email ou mot de passe incorrect`);
        const isTrue = bcrypt.compareSync(userInfo.password, result.password);
        if(isTrue) response.status(200).json(`Connexion validé`);
        else return response.status(200).json('Email ou mot de passe incorrect');
        accessToken = jwt.sign(userInfo, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '600000s'});
        next();
    },

    authenticateToken: (request, response, next) => {
        const authHeader = request.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        if(!token){
            response.status(200).json('Connexion refusé, temps de connexion expiré');
        }
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        next();
    }
}

module.exports = tokenMW