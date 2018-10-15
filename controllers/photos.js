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

module.exports = router;