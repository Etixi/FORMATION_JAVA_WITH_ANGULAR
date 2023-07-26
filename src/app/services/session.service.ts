import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Basket } from '../model/basket';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  user!: User;
  basket!: Basket;
  constructor() { }
}
