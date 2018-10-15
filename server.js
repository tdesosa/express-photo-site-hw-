// REQUIRE NODE MODULES

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

// SET PORT VARIABLE

const port = 3000;

// REQUIRE ACCESS TO MONGO

require('./db/db')

// REQUIRE CONTROLLERS

const userController = require('./controllers/users');
const photoController = require('./controllers/photos');

// MIDDLEWARE SETUP

app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use('/users', userController);
app.use('/photos', photoController);

// LANDING PAGE

app.get('/', (req, res)=>{
    res.render('landing.ejs');
});

// SERVER IS LISTNEING

app.listen(port, ()=>{
    console.log(`Express Server Up & Running On ${port}`);
});
