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

// New Route

router.get('/new', (req, res)=>{
    res.render('users/new.ejs');
});

// Create Route

router.post('/', (req, res)=>{
    User.create(req.body, (err, newUser)=>{
        console.log(newUser);
        if(err){
        console.log(err);
        } else {
            res.redirect('/users');
        }
    });
});

module.exports = router;