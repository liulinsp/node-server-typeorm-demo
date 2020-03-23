/**
 * 信息 Entity
 */
import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import Person  from './person';

@Entity()
export default class Info {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 128, nullable: true, comment: '邮箱' })
    email: string;

    @Column({ length: 11, nullable: true, comment: '手机号码' })
    phone: string;

    @OneToOne(type => Person, person => person.info)
    person: Person;
}