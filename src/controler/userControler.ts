/**
 * 用户 Controler
 */
import { Context } from 'koa';
import UserService from '../service/userService';
import User from '../entity/user';

export default class UserControler {
    /**
     * 创建用户
     * @param {Application.Context} ctx
     * @return {Promise<User>}
     */
    static async createUser (ctx: Context): Promise<void> {
        const user: User = new User();
        const reqBody = ctx.request.body;
        user.name = reqBody.name;
        user.account = reqBody.account;
        user.email = reqBody.email;
        user.phone = reqBody.phone;
        user.birthday = reqBody.birthday;

        const savedUser = await UserService.saveUser(user);
        ctx.body = savedUser;
    }

    /**
     * 更新用户
     * @param {Application.Context} ctx
     * @return {Promise<User>}
     */
    static async updateUser (ctx: Context): Promise<void> {
        const id = ctx.params.id;
        const reqBody = ctx.request.body;

        const user: User = new User();
        user.id = id;
        user.name = reqBody.name;
        user.account = reqBody.account;
        user.email = reqBody.email;
        user.phone = reqBody.phone;
        user.birthday = reqBody.birthday;

        const savedUser = await UserService.saveUser(user);
        ctx.body = savedUser;
    }


    /**
     * 获取所有用户
     * @param ctx 上下文
     * @return {Promise.<Array<User>>}
     */
    static async getUsers (ctx: Context): Promise<void> {
        const users = await UserService.findUsers();
        ctx.body = users;
    }

    /**
     * 根据ID获取所有用户
     * @param ctx 上下文
     * @return {Promise.<User>}
     */
    static async getUserById (ctx: Context): Promise<void>{
        // 用户ID
        const id = ctx.params.id;
        // 是否包含用户角色信息，如果withRoles 为 "1" 表示需要包含角色信息
        const withRoles = ctx.query.withRoles;

        let user;
        if (withRoles === '1') {
            user = await UserService.findUserWithRoles(id);
        } else {
            user = await UserService.findUserById(id);
        }
        if (user) {
            ctx.body = user;
        } else {
            ctx.body = {
                code: 1004,
                msg: '用户不存在!'
            }
        }
    }

    /**
     * 更新用户的角色
     * @param ctx
     * @return {Promise.<void>}
     */
    static async updateUserRoleRelations (ctx): Promise<void> {
        const userId = ctx.params.userId;
        const roleIds = ctx.request.body.roleIds;

        await UserService.updateUserRoleRelations(userId, roleIds);
        ctx.body = {
            msg: '操作成功'
        };
    }
}
