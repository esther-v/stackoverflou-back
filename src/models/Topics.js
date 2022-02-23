const mongoose = require('mongoose')

const TopicSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    user_id: {
        type: Object
    },
    creationDate: {
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model('Topic', TopicSchema)