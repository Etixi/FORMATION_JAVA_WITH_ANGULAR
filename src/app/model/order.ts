import { Customer } from "./customer";
import { OrderItem } from "./orderitem";

export class Order {
    id!: number;
    number!: string;
    created!: Date;
    status!: string;
    totalAmount!: number;
    customer!: Customer;
    items!: OrderItem[];
}
