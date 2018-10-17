const express = require('express');

const Photo = require('../models/photo');
const User = require('..//models/user')

const router = express.Router();


// Index Route

router.get('/', async (req, res, next) => {
    try {
        const foundPhotos = await Photo.find({});

        res.render('photos/index.ejs', {
            photos: foundPhotos
        });
    } catch (err) {
        next(err);
    }
});

// New Route

router.get('/new', async (req, res, next)=>{
    const foundUsers = await User.find({});
    res.render('photos/new.ejs', {
        users: foundUsers
    });
});

// Show Route

router.get('/:id', async (req, res, next) => {
    try {
        const foundPhoto = await Photo.findById(req.params.id);
        const foundUser = await User.findOne({"photos._id": req.params.id});

        res.render("photos/show.ejs", {
            photo: foundPhoto,
            user: foundUser
        });
    } catch (err) {
        next(err);
    }
});

// Edit Route

router.get('/:id/edit', async (req, res, next) => {
    try {
        const foundPhoto = await Photo.findById(req.params.id);

        res.render('photos/edit.ejs', {
            photo: foundPhoto
        });
    } catch (err) {
        next(err);
    }
});

// Create Route

router.post('/', async (req, res, next) => {
    try {
        const newUser =  await User.findById(req.body.userId);
        const newPhoto = await Photo.create(req.body);
        newUser.photos.push(newPhoto);
        await newUser.save();
        res.redirect('/photos');
    } catch (err) {
        next(err);
    }
});

// Update Route

router.put('/:id', async (req, res, next) => {
    try {
        const newPhoto = await Photo.findByIdAndUpdate(req.params.id, req.body);

        res.redirect(`/photos/${req.params.id}`);
    } catch (err) {
        next(err);
    }
});

// Delete Route

router.delete('/:id', async (req, res, next) => {
    try {
        const foundUser = await User.findOne({'photos._id': req.params.id})
        const foundPhoto = await Photo.findById(req.params.id);
        user.photos.id(req.params.id).remove();
        const deletedPhoto = await Photo.findByIdAndDelete(req.params.id);
        await foundUser.save();
        res.redirect('/photos');
    } catch (err) {
        next(err);
    }
});

module.exports = router;