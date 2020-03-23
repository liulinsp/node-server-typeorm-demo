/**
 * 角色 Service
 */
import { getRepository, Repository } from 'typeorm';
import Role from '../entity/Role';

export default class RoleService {
    static async findRoles(): Promise<Role[]> {
        const repository: Repository<Role> = getRepository<Role>('Role');
        return await repository.find();
    }

    static async findRoleById(id: string): Promise<Role> {
        const repository: Repository<Role> = getRepository<Role>('Role');
        const role: Role = new Role ();
        role.id = id;
        return await repository.findOne(role);
    }
}
