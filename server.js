const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const methodOverride = require('method-override');


// SERVER IS LISTNEING

app.listen(port, ()=>{
    console.log(`Express Server Up & Running On ${port}`);
});

module.exports = app;