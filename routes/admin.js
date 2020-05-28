const express = require('express');
const router = express.Router();
const path = require('path');
const rootDir = require('../util/path')


router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});


router.post('/add-product', (req, res, next) => {
    res.send(`<h1>Produto ${req.body.title} adicionado.</h1>`);
});


module.exports = router;