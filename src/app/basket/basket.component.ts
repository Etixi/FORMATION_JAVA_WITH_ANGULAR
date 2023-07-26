import { Component } from '@angular/core';
import { OrderService } from '../services/order.service';
import { SessionService } from '../services/session.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Basket } from '../model/basket';
import { Customer } from '../model/customer';
import { Order } from '../model/order';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent {
    basket: Basket = this.session.basket
    order!: Order;
    user: Customer = this.session.user;

    constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: OrderService, 
    private session: SessionService,
  ) {}


  // Bouton passer la commande
  checkout(){
    if (this.user) {
      this.session.basket = this.basket;
      this.basket.cust = this.user;
      this.service.checkoutBasket(this.basket).subscribe(order => {
        this.order = order;
          });
      console.log("La commande a réussie.")
    }
    else {
      this.router.navigate(['/login']);
    }


    }
  }

