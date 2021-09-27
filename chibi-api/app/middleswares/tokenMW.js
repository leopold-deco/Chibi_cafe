const jwt = require("jsonwebtoken");
const User = require('../models/User'); 
const bcrypt = require("bcrypt");

const tokenMW = {

    generateToken: async (request, response, next) => {
        const userInfo = request.body;
        const result = await User.check(userInfo.email);
        if(!result) return console.log(`Email ou mot de passe incorrect`);
        const isTrue = bcrypt.compareSync(userInfo.password, result.password);
        if(isTrue) console.log(`Connexion validé`);
        else return console.log('Email ou mot de passe incorrect');
        // accessToken = jwt.sign(userInfo, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '600000s'});
        next();
    },

    authenticateToken: (request, response, next) => {
        console.log(request.headers);
        const authHeader = request.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        console.log(token);
        if(!token){
            console.log('connexion refusée');
        }

        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        
        next();
    }
}

module.exports = tokenMW