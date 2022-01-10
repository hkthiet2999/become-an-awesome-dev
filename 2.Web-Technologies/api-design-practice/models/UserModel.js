const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserShema = new Schema({

    name: String,
    email: {
        type: String,
        unique: true
    },
    password: String,

})

module.exports = mongoose.model('User', UserShema)