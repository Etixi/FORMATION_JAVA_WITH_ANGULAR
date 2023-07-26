import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../services/session.service';
import { OrderService } from '../services/order.service';
import { Order } from '../model/order';
import { Customer } from '../model/customer';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orders!:Order[];  
  user: Customer = this.session.user;

  constructor(
    private router: Router,
    private session: SessionService,
    private service: OrderService,
  ) {}

  ngOnInit(): void {
      if (this.user) {
        
      console.log("Voir les commandes pour l'utilisateur : ", this.user.username)
      this.service.loadOrders(this.user.username).subscribe(orders => {
        this.orders = orders;
          });
    }
    else {
      this.router.navigate(['/login']);
    }
  }
}
