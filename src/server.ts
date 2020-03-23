/**
 * 服务入口文件
 */
import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import { createConnection } from 'typeorm';
import errorHandle from './middleware/errorHandle';
import router from './router';
import config from './config';
import 'reflect-metadata';

createConnection(config.database).then(connection => {
    const app = new Koa()
        .use(bodyParser())
        .use(errorHandle())
        .use(router.routes())
        .use(router.allowedMethods());

    app.listen(config.port, () => {
        console.info(`Server running on port ${config.port}`);
    });
}).catch(error => console.log('TypeORM connection error: ', error));
