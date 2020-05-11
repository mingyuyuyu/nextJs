const koa = require('koa')
const Router = require('koa-router')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next( { dev })
const handle = app.getRequestHandler()

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

test()

// app.prepare().then(() => {

// })