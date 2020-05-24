const COLLECTION = require('../models/collection').model
module.exports = {
  async create(doc) {
    const item = await COLLECTION.findOne({
      food: doc.food,
      user: doc.user
    })
    if(!item) return COLLECTION.create(doc)
  },
  find(sortKey, filter) {
    return COLLECTION.find(filter)
      .sort({
        [sortKey]: 1
      })
      .populate('user', ['nickname', 'avatar'])
      .populate('food')
  },
  delete(_id) {
    return COLLECTION.findByIdAndUpdate(_id, {
      isDeleted: true
    })
  }
}
