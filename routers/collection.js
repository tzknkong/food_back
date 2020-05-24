const router = require('koa-router')()
const collectionService = require('../service/collection')

router
   
    .delete('/api/collection/:id', async ctx => {
        let _id = ctx.params.id
        if (!_id) {
            return ctx.body = {
                code: -1,
                message: 'please confirm the params'
            }
        }
        await collectionService.delete(_id).then(() => {
            ctx.body = {
                code: 200,
                message: 'success'
            }
        })
    })
   
    .get('/api/collection', async ctx => {
        let userId = ctx.query.userId
        let foodId = ctx.query.foodId
        let sort = ctx.query.sort || 'created'
        let filter = {
            isDeleted: false
        }
        if (userId) filter.user = userId
        if (foodId) filter.food = foodId
        let res = await collectionService.find(sort, filter)
        ctx.body = {
            code: 200,
            data: res,
            message: 'success'
        }
    })
    
    .post('/api/collection', async ctx => {
        const {
            user,
            food
        } = ctx.request.body
        if (!user || !food) {
            return ctx.body = {
                code: -1,
                message: 'please confirm the params'
            }
        }
        await collectionService.create(ctx.request.body).then(res => {
            ctx.body = {
                code: 200,
                data: res,
                message: 'success'
            }
        })
    })


module.exports = router