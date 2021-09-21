const {Router} = require('express');
const productController = require('./controller/productController');
const userController = require('./controller/userController');
const router = Router();

// Produits
router.get('/products', productController.findAll);
// produit
router.get('/product/:id', productController.findOne);
router.post('/product/:id', productController.create);
router.patch('/product/:id', productController.update);
// User
router.get('/account', userController.findOne);
router.patch('/account', userController.update);


module.export = router;