import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CatalogService } from '../services/catalog.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BookDetail } from '../model/bookdetail';
import { SessionService } from '../services/session.service';
import { Basket } from '../model/basket';
import { BasketItem } from '../model/basketitem';
import { Book } from '../model/book';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  book!:BookDetail;
  
  data:any = {
    quantity: '',
  }  
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CatalogService, 
    private session: SessionService,
  ) {}
  
  ngOnInit(): void {
    const bookId: any = this.route.snapshot.paramMap.get('id')
    console.log("Chargement du livre : " + bookId);
    this.service.loadBookDetails(bookId).subscribe(book => {
      this.book = book;
        });
       }

  checkBasket(): void{
    let basket:Basket = this.session.basket;
    if (!basket) {
      basket = new Basket();
      this.session.basket = basket;
    }
  }

  addToBasket(form:any): void{
    if (form.invalid) return;

    console.log("Quantité : ", this.data.quantity)

    let basket:Basket = this.session.basket;
    if (!basket) {
      basket = new Basket();
      this.session.basket = basket;
    }
    
    const book:Book = new Book();
    book.id = this.book.id;
    book.title = this.book.title;
    book.imageId = this.book.imageId;
    book.price = this.book.price;
    
    this.checkBook(book, book.id);
    console.log("Panier : ", basket)
  }

  checkBook(book: Book, bookId: number) {
    let basket:Basket = this.session.basket;
    let items:BasketItem[] = basket.items
    if (items) {
      for (let item of items) {
        console.log(item.book.id)
        if (bookId != item.book.id) {
          basket.addItem(book, this.data.quantity);
          }
        else {
          const newQuantity = item.quantity + this.data.quantity;
          console.log("Nouvelle quantité : ", newQuantity)
          item.quantity = newQuantity
        } 
      }
    }
    else {
      basket.addItem(book, this.data.quantity);
    }
  }
}