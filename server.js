const koa = require('koa')
const Router = require('koa-router')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({
    dev
})
const handle = app.getRequestHandler()

const PORT = 3000

// nodejs 连接redis
async function test() {
    const Redis = require('ioredis')
    const redis = new Redis({
        port: 6379
    })

    await redis.setex('d', 20, 123)
    await redis.set('c', 123)
    const keys = await redis.keys('*')
    console.log(keys)
    console.log(await redis.get('c'))
}

// test()

app.prepare().then(() => {
    const server = new koa()
    const router = new Router()

    router.get('/a/:id', async (ctx) => {
        const {
            id
        } = ctx.params
        await handle(ctx.req, ctx.res, {
            pathname: '/a',
            query: {
                id,
            },
        })
        ctx.respond = false
    })

    server.use(router.routes())

    server.use(async (ctx) => {
        await handle(ctx.req, ctx.res)
        ctx.respond = false
    })

    server.listen(PORT, () => {
        console.log(`koa server listening on ${PORT}`)
    })
})