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

// Show Route

router.get('/:id', (req, res)=>{
    User.findById(req.params.id, (err, foundUser)=>{
        res.render("users/show.ejs", {
            user: foundUser
        });
    });
});

// Edit Route

router.get('/:id/edit', (req, res)=>{
    User.findById(req.params.id, (err, foundUser)=>{
        res.render('users/edit.ejs', {
            user: foundUser
        });
    });
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

// Update Route

router.put('/:id', (req, res)=>{
    User.findByIdAndUpdate(req.params.id, req.body, (err, newUser)=>{
        res.redirect(`/users/${req.params.id}`)
    });
});

// Delete Route

router.delete('/:id', (req, res)=>{
    User.findByIdAndDelete(req.params.id, (err, deletedUser)=>{
        res.redirect('/users')
    })
})

module.exports = router;