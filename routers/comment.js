const router = require('koa-router')()
const commentService = require('../service/comment')

router
    
    .delete('/api/comment/:id', async ctx => {
        let _id = ctx.params.id
        if (!_id) {
            return ctx.body = {
                code: -1,
                message: 'please confirm the params'
            }
        }
        await commentService.delete(_id).then(() => {
            ctx.body = {
                code: 200,
                message: 'success'
            }
        })
    })
    
    .get('/api/comment', async ctx => {
        let userId = ctx.query.userId
        let foodId = ctx.query.foodId
        let sort = ctx.query.sort || 'created'
        let filter = {
            isDeleted: false
        }
        if (userId) filter.user = userId
        if (foodId) filter.food = foodId
        let res = await commentService.find(sort, filter)
        ctx.body = {
            code: 200,
            data: res,
            message: 'success'
        }
    })
    
    .post('/api/comment', async ctx => {
        const {
            user,
            food,
            content
        } = ctx.request.body
        if (!user || !food || !content) {
            return ctx.body = {
                code: -1,
                message: 'please confirm the params'
            }
        }
        await commentService.create(ctx.request.body).then(res => {
            ctx.body = {
                code: 200,
                data: res,
                message: 'success'
            }
        })
    })


module.exports = router