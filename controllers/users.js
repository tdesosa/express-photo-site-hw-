const express = require('express');

const User = require('../models/user');

const router = express.Router();


// Index Route

router.get('/', (req, res)=>{
    User.find({}, (err, foundUsers)=>{
        res.render('users/index.ejs', {
            users: foundUsers
        });
    });
});

module.exports = router;