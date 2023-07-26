import { Book } from "./book"

export class OrderItem {

    id!: number;
    quantity!: number;
    unitPrice!: number;
    book!: Book;

    /**private int id;
	private int quantity;
	private double unitPrice;
	
	private BookLightDto book; */
}
