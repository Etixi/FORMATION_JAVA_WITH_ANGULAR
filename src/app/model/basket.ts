import { BasketItem } from "./basketitem";
import { Book } from "./book";
import { Customer } from "./customer";

export class Basket {
    items!: BasketItem[];
    cust!: Customer;

    addItem(book:Book, quantity:number) {
        if (!this.items) this.items = [];

        const item:BasketItem = new BasketItem();
        item.book = book;
        item.quantity = quantity;

        this.items.push(item);
    }

    getTotalAmount() {
        let amount: number = 0;
        for (let item of this.items) {
            amount += item.quantity * item.book.price;
        }
        return amount;
    }


}
