/**
 * 人员 Entity
 */
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import Info from './info';

@Entity()
export default class Person {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 64, comment: '姓名' })
    name: string;

    @OneToOne(type => Info, info => info.person)
    @JoinColumn()
    info: Info;
}