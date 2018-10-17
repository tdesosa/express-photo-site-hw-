const express = require('express');

const Photo = require('../models/photo');

const router = express.Router();


// Index Route

router.get('/', async (req, res) => {
    try {
        const foundPhotos = await Photo.find({});

        res.render('photos/index.ejs', {
            photos: foundPhotos
        });
    } catch (err) {
        next (err);
    }
});

// New Route

router.get('/new', (req, res)=>{
    res.render('photos/new.ejs');
});

// Show Route

router.get('/:id', async (req, res) => {
    try {
        const foundPhoto = await Photo.findById(req.params.id);

        res.render("photos/show.ejs", {
            photo: foundPhoto
        });
    } catch (err) {
        next (err);
    }
});

// Edit Route

router.get('/:id/edit', async (req, res) => {
    try {
        const foundPhoto = await Photo.findById(req.params.id);

        res.render('photos/edit.ejs', {
            photo: foundPhoto
        });
    } catch (err) {
        next (err);
    }
});

// Create Route

router.post('/', async (req, res) => {
    try {
        const newPhoto = Photo.create(req.body);

        res.redirect('/photos');
    } catch (err) {
        next (err);
    }
});

// Update Route

router.put('/:id', async (req, res) => {
    try {
        const newPhoto = await Photo.findByIdAndUpdate(req.params.id, req.body);

        res.redirect(`/photos/${req.params.id}`);
    } catch (err) {
        next (err);
    }
});

// Delete Route

router.delete('/:id', async (req, res) => {
    try {
        const deletedPhoto = await Photo.findByIdAndDelete(req.params.id);

        res.redirect('/photos');
    } catch (err) {
        next (err);
    }
});

module.exports = router;