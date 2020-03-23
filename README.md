# node-server-typeorm-demo
> node服务-TypeORM示例

#### 1. 数据库脚本
数据库脚本在server-demo-orm.sql，执行该脚本创建数据库表和初始化数据。
> 项目启动时也会自动创建数据表结构，如果要禁用自动创建表，需要将src/config.ts配置文件中database.synchronize设置为false

#### 2. 安装依赖
```shell
npm install
```
或者
```shell
yarn
```

#### 3. 启动开发环境
```shell
npm run dev
```

#### 4. 构建
编译src目录下的.ts文件到dist目录下
```shell
npm run build
```

#### 5. 启动
启动前需要先执行``` npm run build ```
```shell
npm run start
```





