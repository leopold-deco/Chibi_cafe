const {Router} = require('express');
const productController = require('./controller/productController');
const userController = require('./controller/userController');
const categoryController = require('./controller/categoryController');
const oderController = require('./controller/orderController');
const router = Router();

// Produits
router.get('/products', productController.findAll);
// produit
router.get('/product/:id', productController.findOne);
router.post('/product/:id', productController.create);
router.patch('/product/:id', productController.update);
// User
router.get('/account/:id', userController.findOne);

router.patch('/account/:id', userController.update);
router.patch('/newPassword', userController.updatePassword);

router.post('/login', userController.login);
router.post('/SignUp', userController.create);

router.delete('/account/:id', userController.delete);

// Category - Test

router.get('/category', categoryController.findAll)

// Order
router.post('/order', oderController.create);

module.exports = router;