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

module.exports = router;