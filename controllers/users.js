const express = require('express');

const User = require('../models/user');

const router = express.Router();


// Index Route

router.get('/', async (req, res) => {
    try {
        const foundUsers = await User.find({});

        res.render('users/index.ejs', {
            users: foundUsers
        });
    } catch (err) {
        next (err);
    }
});

// New Route

router.get('/new', (req, res)=>{
    res.render('users/new.ejs');
});

// Show Route

router.get('/:id', async (req, res) => {
    try {
        const foundUser = await User.findById(req.params.id);

        res.render("users/show.ejs", {
            user: foundUser
        });
    } catch (err) {
        next (err);
    }
});

// Edit Route

router.get('/:id/edit', async (req, res) => {
    try {
        const foundUser = await User.findById(req.params.id);

        res.render('users/edit.ejs', {
            user: foundUser
        });
    } catch (err) {
        next (err);
    }
});

// Create Route

router.post('/', async (req, res) => {
    try {
        const newUser = User.create(req.body);

        res.redirect('/users');
    } catch (err) {
        next (err);
    }
});

// Update Route

router.put('/:id', async (req, res) => {
    try {
        const newUser = await User.findByIdAndUpdate(req.params.id, req.body);

        res.redirect(`/users/${req.params.id}`);
    } catch (err) {
        next (err);
    }
});

// Delete Route

router.delete('/:id', async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);

        res.redirect('/users');
    } catch (err) {
        next (err);
    }
});

module.exports = router;