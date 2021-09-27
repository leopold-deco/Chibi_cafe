const {Router} = require('express');

// CONTROLLER

const productController = require('./controller/productController');
const userController = require('./controller/userController');
const categoryController = require('./controller/categoryController');
const oderController = require('./controller/orderController');

// MIDDLEWARES

const tokenMW = require('./middleswares/tokenMW')

const router = Router();

// Produits
router.get('/products', productController.findAll);
// produit
router.get('/product/:id', productController.findOne);
router.post('/product/:id', productController.create);
router.patch('/product/:id', productController.update);
// User
// router.get('/account/:id', userController.findOne);

router.patch('/account/:id', userController.update);
router.patch('/newPassword', userController.updatePassword);

router.post('/login', tokenMW.generateToken, userController.login);
router.post('/SignUp', userController.create);

router.delete('/account/:id', userController.delete);

// Category - Test

router.get('/category', categoryController.findAll)

// Order
router.get('/accountOrder/:id', tokenMW.authenticateToken,oderController.findByUser);
router.post('/order', oderController.create);

module.exports = router;