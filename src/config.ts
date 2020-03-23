/**
 * 配置文件
 */
import { ConnectionOptions } from 'typeorm';

declare interface IConfig {
  port: number;
  database: ConnectionOptions;
}

const config: IConfig = {
    // 服务端口号
    port: 3000,
    // 数据库相关配置
    database: {
        // 数据库类型
        type: 'mysql',
        // 主机
        host: 'localhost',
        // 端口
        port: 3306,
        // 用户名
        username: 'root',
        // 密码
        password: 'root',
        // 数据库名
        database: 'server-demo-orm',
        // 是否根据 entity 同步数据库表
        synchronize: true,
        // 允许输出的日志
        logging: 'all',
        // 实体对应的数据库表前缀
        entityPrefix: 'sys_',
        // 所有实体
        entities: process.env.NODE_ENV === 'dev' ? ['src/entity/**/*.ts'] : ['dist/entity/**/*.js'], // 在src/entity目录扫描所有.ts文件查找实体
        extra: {
            // 连接池允许创建的最大连接数，默认值为10
            connectionLimit:  10,
            // 允许挂起的最大连接数,默认值为0,代表挂起的连接数无限制
            queueLimit: 0
        }
    }
};

export default config;
