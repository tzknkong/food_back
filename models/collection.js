const mongoose = require('mongoose')

const collection = new mongoose.Schema({
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
    isDeleted: {
        type: Boolean,
        default: false
    }
},{
    versionKey: false,
    timestamps: true
})

module.exports = {
    schema: collection,
    model: mongoose.model("collection", collection)
}