const mongoose = require('mongoose')

const User = mongoose.model('User',{
    name: String,
    surname: String,
    password: String,
    email: String,
    phone: Number
})

module.exports = User;