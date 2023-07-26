import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchBooksComponent } from './search-books/search-books.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { OrderComponent } from './order/order.component';
import { BasketComponent } from './basket/basket.component';

const routes: Routes = [
  { path: '', redirectTo:'/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'search', component: SearchBooksComponent},
  { path: 'login', component: LoginComponent},
  { path: 'detail/:id', component: DetailComponent},
  { path: 'orders/user/:username', component: OrderComponent},
  { path: 'orders/checkout', component: BasketComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
