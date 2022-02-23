const mongoose = require('mongoose')

const MessageSchema = mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    user_id: {
        type: Object
    },
    topic_id: {
        type: Object
    },
    creationDate: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Message', MessageSchema)