const koaRouter = require('koa-router');
const controller = require('../controller/webphone.controller');
const log = console.log;
const router = new koaRouter();


router.post('/makecall', async (ctx, next) => {
    log("makecall : ", ctx.query);
    let payload = ctx.query;
    const response = await controller.makeCall(payload);
    ctx.status = 200;
    ctx.body = response;
});



module.exports = router;