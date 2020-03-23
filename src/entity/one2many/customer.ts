/**
 * 客户 Entity
 */
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import Order from './order';

@Entity()
export default class Customer {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 64, comment: '姓名' })
    name: string;

    @OneToMany(type => Order, order => order.customer)
    orders: Order[];
}