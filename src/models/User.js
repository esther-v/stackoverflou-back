const Mongoose = require('mongoose')

const userSchema = new Mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    nickname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    creationDate: {
        type: Date,
        required: true
    }
}, {collection: "user"})

module.exports = Mongoose.model('user', userSchema)