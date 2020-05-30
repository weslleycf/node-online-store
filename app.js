//imports
const express = require('express');
const bodyParser = require('body-parser')
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const rootDir = require('./util/path');
const path = require('path');

//init express app
const app = express();

//set the view engine
app.set('view engine', 'ejs');

// listening port
app.listen(3000, ()=>{
    console.log('Server running, listening at http://localhost:3000');
});

// set middlewares
app.use(bodyParser.urlencoded({extended: true}));


//set the static public folder
app.use(express.static(path.join(__dirname, 'public')));

//set routes
app.use('/admin', adminData.routes); 
app.use(shopRoutes);

// set 404 catch all route
app.use((req, res, next) =>{
    res.render('404', {pageTitle: 'Page not found'});
});
