//imports
const express = require('express');
const bodyParser = require('body-parser')
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const rootDir = require('./util/path');
const path = require('path');

//init express app
const app = express();

// listening port
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

// set 404 catch all route
app.use((req, res, next) =>{
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
});
