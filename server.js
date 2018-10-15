const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

// REQUIRE ACCESS TO MONGO

require('./db/db')

// LANDING PAGE

app.get('/', (req, res)=>{
    res.render('landing.ejs');
});

// SERVER IS LISTNEING

app.listen(port, ()=>{
    console.log(`Express Server Up & Running On ${port}`);
});
