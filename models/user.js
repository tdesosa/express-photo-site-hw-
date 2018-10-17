const mongoose = require('mongoose');
const Photo = require('./photo');

const userSchema = new mongoose.Schema({
    username: {type: String, required: true},
    password: String,
    photos: [Photo.schema]
});

const User = mongoose.model('Users', userSchema);
module.exports = User;

// module.exports = mongoose.model('Users', userSchema);