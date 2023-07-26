import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../model/order';
import { Observable } from 'rxjs';
import { Basket } from '../model/basket';
import { BasketItem } from '../model/basketitem';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private http: HttpClient
  ) { }

  loadOrders(username:string): Observable<Order[]> {
    return this.http.get<Order[]>(`/api/orders/user/${username}`);
  }

  checkoutBasket(basket: Basket): Observable<Order> {
   console.log("Recupération du panier : ", basket)
    
    return this.http.post<Order>('/api/orders/checkout', basket);

    }

    addToBasket(quantity: number) : Observable<BasketItem[]>{
    
      return this.http.post<BasketItem[]>('/api/book/search', quantity);
    
    }

}
