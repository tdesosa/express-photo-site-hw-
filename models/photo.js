const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
    name: {type: String, required: true},
    size: String,
})

const User = mongoose.model('Photos', photoSchema);
module.exports = User;

// module.exports = mongoose.model('User', userSchema);