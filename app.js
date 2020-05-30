//imports
const express = require('express');
const bodyParser = require('body-parser')
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const path = require('path');
const errorRoutes = require('./controllers/error');

//init express app
const app = express();

//set the view engine
app.set('view engine', 'ejs');

// listening portrs
app.listen(3000, ()=>{
    console.log('Server running, listening at http://localhost:3000');
});

// set middlewares
app.use(bodyParser.urlencoded({extended: true}));


//set the static public folder
app.use(express.static(path.join(__dirname, 'public')));

//set routes
app.use('/admin', adminRoutes); 
app.use(shopRoutes);
app.use(errorRoutes.get404);
