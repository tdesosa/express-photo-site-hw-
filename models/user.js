const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {type: String, required: true},
    password: String,
})

const User = mongoose.model('Users', userSchema);
module.exports = User;

// module.exports = mongoose.model('User', userSchema);