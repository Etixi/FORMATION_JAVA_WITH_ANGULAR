import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(
    private http: HttpClient
  ) { }

  authenticate(username:string, password:string): Observable<User> {
    return this.http.post<User>('/api/users/login', {username, password});
  }
}



