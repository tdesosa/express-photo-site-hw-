const express = require('express');

const Photo = require('../models/photo');

const router = express.Router();


// Index Route

router.get('/', (req, res)=>{
    Photo.find({}, (err, foundPhotos)=>{
        res.render('photos/index.ejs', {
            photos: foundPhotos
        });
    });
});

// New Route

router.get('/new', (req, res)=>{
    res.render('photos/new.ejs');
});

// Show Route

router.get('/:id', (req, res)=>{
   Photo.findById(req.params.id, (err, foundPhoto)=>{
        res.render("photos/show.ejs", {
            photo: foundPhoto
        });
    });
});

// Edit Route

router.get('/:id/edit', (req, res)=>{
    Photo.findById(req.params.id, (err, foundPhoto)=>{
        res.render('photos/edit.ejs', {
            photo: foundPhoto
        });
    });
});

// Create Route

router.post('/', (req, res)=>{
    Photo.create(req.body, (err, newPhoto)=>{
        console.log(newPhoto);
        if(err){
        console.log(err);
        } else {
            res.redirect('/photos');
        }
    });
});

// Update Route

router.put('/:id', (req, res)=>{
    Photo.findByIdAndUpdate(req.params.id, req.body, (err, newPhoto)=>{
        res.redirect(`/photos/${req.params.id}`)
    });
});

// Delete Route

router.delete('/:id', (req, res)=>{
    Photo.findByIdAndDelete(req.params.id, (err, deletedPhoto)=>{
        res.redirect('/photos')
    })
})

module.exports = router;