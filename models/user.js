const mongoose = require('mongoose')

const user = new mongoose.Schema({
  id: mongoose.Schema.ObjectId,
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    default: '/avatar.jpg'
  },
  address: {
    type: String,
    default: ''
  },
  nickname: {
    type: String,
    default: ''
  }
},{
    versionKey: false,
    timestamps: true
})

module.exports = {
  schema: user,
  model: mongoose.model('user', user)
}
