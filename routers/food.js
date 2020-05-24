const router = require('koa-router')()
const foodService = require('../service/food')

router
    
    .delete('/api/food/:id', async ctx => {
        let _id = ctx.params.id
        if (!_id) {
            return ctx.body = {
                code: -1,
                message: 'please confirm the params'
            }
        }
        await foodService.delete(_id).then(res => {
            ctx.body = {
                code: 200,
                message: 'success'
            }
        })
    })
   
    .get('/api/food/:id', async ctx => {
        let _id = ctx.params.id
        if (!_id) {
            return ctx.body = {
                code: -1,
                message: 'please confirm the params'
            }
        }
        let filter = {
            _id: _id,
            isDeleted: false
        }
        let res = await foodService.find('created', filter)
        ctx.body = {
            code: 200,
            data: res,
            message: 'success'
        }
    })
   
    .get('/api/food', async ctx => {
        let min = ctx.query.min
        let max = ctx.query.max
        let sort = ctx.query.sort

        let userId = ctx.query.userId
        let filter = {
            isDeleted: false
        }
        if (userId) filter.userId = userId
        if (!min || !max) {
            return ctx.body = {
                code: -1,
                message: 'query params error'
            }
        }
        let res = await foodService.find(sort, filter)
        ctx.body = {
            code: 200,
            data: {
                foods: res.slice(min, max),
                total: res.length
            },
            message: 'success'
        }
    })
    
    .put('/api/food/:id', async ctx => {
        let _id = ctx.params.id
        let body = ctx.request.body
        if (!_id || !body) {
            return ctx.body = {
                code: -1,
                message: 'please confirm the params'
            }
        }
        await foodService.update(_id, body).then(res => {
            ctx.body = {
                code: 200,
                data: res,
                message: 'success'
            }
        })
    })
    
    .post('/api/food', async ctx => {
        const {
            name,
            banner
        } = ctx.request.body
        if (!name || !banner) {
            return ctx.body = {
                code: -1,
                message: 'please confirm the params'
            }
        }
        await foodService.create(ctx.request.body).then(res => {
            ctx.body = {
                code: 200,
                data: res,
                message: 'success'
            }
        })
    })


module.exports = router