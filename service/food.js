const FOOD = require('../models/food').model
module.exports = {
    create(doc) {
        return FOOD.create(doc)
    },
    find(sortKey = 'created', filter) {
        return FOOD.find(filter).sort({
            [sortKey]: -1
        })
    },
    update(_id, body) {
        return FOOD.findByIdAndUpdate(_id, body)
    },
    delete(_id) {
        return FOOD.findByIdAndUpdate(_id, {
            isDeleted: true
        })
    }
}