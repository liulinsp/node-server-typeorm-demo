/**
 * 角色 Entity
 */
import { Entity, Generated, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToMany } from 'typeorm';
import User from './user';

@Entity()
export default class Role {
    // @PrimaryGeneratedColumn({ comment: '角色ID' })
    // @example(1)
    // id: number;

    // UUID 主键
    @PrimaryColumn({ length: 36, comment: '角色ID'})
    @Generated('uuid')
    id: string;

    @Column({ length: 64, comment: '角色名称' })
    name: string;

    @Column({ default: true, nullable: true, comment: '是否可用' })
    enable: boolean;

    @Column({ default: false, comment: '是否删除' })
    deleteFlag: boolean;

    @CreateDateColumn({ type: 'timestamp', comment: '创建时间' })
    createTime: string;

    @UpdateDateColumn({ type: 'timestamp', comment: '更新时间' })
    updateTime: string;

    @ManyToMany(type => User, user => user.roles)
    users: User[];
}
