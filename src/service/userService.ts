/**
 * 用户 Service
 */
import { getRepository, Repository } from 'typeorm';
import User from '../entity/user';
import Role from '../entity/Role';

export default class UserService {
    static async saveUser (user: User): Promise<User> {
        const repository: Repository<User> = getRepository(User);
        return repository.save(user);
    }

    static async findUsers (): Promise<User[]> {
        const repository: Repository<User> = getRepository(User);
        return await repository.find();
    }

    static async findUserById (id: string): Promise<User> {
        const repository: Repository<User> = getRepository(User);
        const user: User = new User();
        user.id = id;
        return await repository.findOne(user);
        /*const entityManager = getManager();
        return await entityManager.findOne(User, id);*/
        // return await User.findOne(id);
    }

    static async findUserWithRoles (id: string): Promise<User> {
        const repository: Repository<User> = getRepository(User);
        const user: User = new User();
        user.id = id;
        return await repository.findOne(user, { relations: ["roles"] });
    }

    static async updateUserRoleRelations (userId: string, roleIds: string[]): Promise<void> {
        const roleRepository: Repository<Role> = getRepository<Role>('Role');
        const userRepository: Repository<User> = getRepository<User>('User');

        const user: User = new User();
        user.id = userId;
        const roles: Role[] = await roleRepository.findByIds(roleIds);
        user.roles = roles;
        await userRepository.save(user);
    }
}
