const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    res.render('add-product', {pageTitle: 'Add Product', path: 'admin/add-product'});
};

exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');

}

exports.getProducts = (req, res, next) => {
    Product.fetchAll((products) => {     
        // pass a arrow function callback with the render to be executed when the fetchAll is complete, otherwise 
        // the products array will be called by the view while it is undefined.  
        res.render('shop', {products: products, pageTitle: 'Shop', path:'/'});
    });
};