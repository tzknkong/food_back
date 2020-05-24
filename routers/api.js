const router = require('koa-router')()

router
    .get('/api', async ctx => {

        ctx.body = {
            self: '/api',
            user: {
                userInfo: '/api/user/{id}',
                authorization: '/api/user/authorization',
                register: '/api/user'
            },
            food: '/api/food/{id}',
            comment: '/api/comment/{id}',
            file: '/api/file',
            collection: '/api/collection/{id}',
        }
    })

module.exports = router
