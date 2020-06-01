const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products');




router.get('/add-product', productsController.getAddProduct);


router.post('/add-product', productsController.postAddProduct);

router.get('/products', productsController.getProducts);
router.get('/edit-product', productsController.getEditProduct);
router.post('/edit-product', productsController.postEditProduct);
router.delete('/delete-product', productsController.deleteProduct);


module.exports = router;
