const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

// Require Mongo Db
require('./db/db')


// SERVER IS LISTNEING

app.listen(port, ()=>{
    console.log(`Express Server Up & Running On ${port}`);
});
