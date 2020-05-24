const mongoose = require('mongoose')

const comment = new mongoose.Schema({
    id: mongoose.Schema.ObjectId,
    user: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: 'user'
    },
    food: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: 'food'
    },
    gallery: {
        type: Array,
        default: []
    },
    content: {
        type: String,
        default: ''
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
},{
    versionKey: false,
    timestamps: true
})

module.exports = {
    schema: comment,
    model: mongoose.model("comment", comment)
}