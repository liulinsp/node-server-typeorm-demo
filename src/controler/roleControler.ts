/**
 * 角色 Controler
 */
import RoleService from '../service/roleService';
import { Context } from 'koa';

export default class RoleControler {

    static async getRoles (ctx: Context): Promise<void> {
        const roles = await RoleService.findRoles();
        ctx.body = roles;
    }

    static async getRoleById (ctx: Context): Promise<void> {
        const id = ctx.params.id;
        const role = await RoleService.findRoleById(id);
        ctx.body = role;
    }
}
