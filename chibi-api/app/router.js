const {Router} = require('express');

// CONTROLLER

const productController = require('./controller/productController');
const userController = require('./controller/userController');
const categoryController = require('./controller/categoryController');
const oderController = require('./controller/orderController');
const stripeController = require('./controller/stripeController');
const wishListController = require('./controller/wishListController');
const addressController = require('./controller/addressController')
const cartController = require('./controller/cartController');

// MIDDLEWARES

const tokenMW = require('./middleswares/tokenMW');


const router = Router();

// PRODUITS
router.get('/products', productController.findAll);

// PRODUIT

router.get('/product/:id', productController.findOne);
router.post('/product/:id', productController.create);
router.patch('/product/:id', productController.update);

// USER

router.get('/account/:id', userController.findOne);

router.patch('/account/:id', userController.update);
router.patch('/newPassword', userController.updatePassword);

router.post('/login', userController.login);
router.post('/SignUp', userController.create);

router.delete('/account/:id', userController.delete);

// CATEGORY - TEST

router.get('/category', categoryController.findAll);

// ORDER

router.get('/accountOrder/:id', oderController.findByUser);
router.post('/order', oderController.create);

// CART 
router.post('/checkPrice', cartController.priceConfirmation);

// PAIEMENT STRIPE
router.post('/createCheckoutSession', stripeController.payment); //tokenMW.authenticateToken ??

// WISHLIST

router.get('/wishList/:id', wishListController.findByUser);
router.delete('/wishList/:id', wishListController.deleteByUser);

router.post('/useWishList/:id', wishListController.addProduct);
router.delete('/useWishList/:id', wishListController.deleteProduct);

// ADDRESS

router.get('/address/:id', addressController.findAdressByUser);

router.delete('/address/:id', addressController.deleteAddress);
router.patch('/address/:id', addressController.updateAddress);

module.exports = router;