const koa = require('koa');
const koaRouter = require('koa-router');
const cors = require('@koa/cors');
const koaBody = require('koa-bodyparser');
const koaSend = require('koa-send');
const serve = require('koa-static');
const app = new koa();
const router = new koaRouter();
const log = console.log;
const webphone_route = require('./routes/webphone.route');

router.use('/webphone', webphone_route.routes(), webphone_route.allowedMethods());


app
    .use(serve('.'))
    .use(koaBody({ jsonLimit: '100mb', formLimit: '100mb', textLimit: '100mb' }))
    .use(cors())
    .use(router.routes())
    .use(router.allowedMethods())

app.listen(10023, () => { console.log(`listening on port : 10023`) });

