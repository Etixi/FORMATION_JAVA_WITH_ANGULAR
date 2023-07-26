import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../services/account.service';
import { User } from '../model/user';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  error:boolean = false;
  data:any = {
  username: '',
  password: '',
}
  constructor(
    private router: Router,
    private service: AccountService,
    private session: SessionService,
  ) {}

  login(form:any){
    if (form.invalid) return;
    
    console.log("Demande login : ", this.data);

    const {username, password} = this.data;
    this.service.authenticate(username, password)
      .subscribe({
        next: user => this.onSuccess(user),
        error: error => this.onError(error),
    });
  }

  private onSuccess(user: User) {
    this.session.user = user;
    this.router.navigate(['/home']);
  }

  private onError(error:any) {
    console.log("Echec de l'authentification", error);
    this.error = true;
  }
}
