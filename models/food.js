const mongoose = require('mongoose')

const food = new mongoose.Schema({
    id: mongoose.Schema.ObjectId,
    userId: {
        type: mongoose.Schema.ObjectId,
        ref: 'user',
    },
    name: {
        type: String,
        required: true
    },
    banner: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: ''
    },
    material: {
        type: String,
        default: ''
    },
    practice: {
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
    schema: food,
    model: mongoose.model("food", food)
}