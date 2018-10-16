const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
    name: {type: String, required: true},
    img: String,
})

const Photo = mongoose.model('Photos', photoSchema);
module.exports = Photo;

// module.exports = mongoose.model('Photos', userSchema);