/**
 * 用户 Entity
 */
import { Entity, Generated, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToMany, JoinTable } from 'typeorm';
import Role  from './role';
import { dateTransformer, datetimeTransformer } from '../common/valueTransformer';

@Entity()
export default class User {
    // 自增主键
    // @PrimaryGeneratedColumn({ comment: '用户ID' })
    // id: number;

    // UUID 主键
    @PrimaryColumn({ length: 36, comment: '用户ID'})
    @Generated('uuid')
    id: string;

    @Column({ length: 64, comment: '账号' })
    account: string;

    @Column({ length: 64, comment: '姓名' })
    name: string;

    @Column({ length: 128, comment: '邮箱' })
    email: string;

    @Column({ length: 11, nullable: true, comment: '手机号码' })
    phone: string;

    @Column({ nullable: true, type: 'date', comment: '生日', transformer: dateTransformer })
    birthday: string;

    @Column({ default: true, nullable: true, comment: '是否可用' })
    enable: boolean;

    @Column({ default: false, comment: '是否删除' })
    deleteFlag: boolean;

    @CreateDateColumn({ type: 'timestamp', comment: '创建时间', transformer: datetimeTransformer })
    createTime: string;

    @UpdateDateColumn({ type: 'timestamp', comment: '更新时间', transformer: datetimeTransformer })
    updateTime: string;

    @ManyToMany(type => Role, role => role.users)
    @JoinTable({ name: 'r_user_role' })
    roles: Role[];
}
