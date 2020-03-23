/**
 * 订单 Entity
 */
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import Customer from './customer';

@Entity()
export default class Order {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'timestamp', comment: '下单时间' })
    orderTime: string;

    @ManyToOne(type => Customer, customer => customer.orders)
    customer: Customer;
}