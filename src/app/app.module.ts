import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBooksComponent } from './search-books/search-books.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { JoinPipe } from './shared/join.pipe';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OrderComponent } from './order/order.component';
import { BasketComponent } from './basket/basket.component';

// similaire à la classe de config spring
// module applicatif angular à l'intérieur du module de classe angular
// aggrégation de plusieurs modules prédéfinis angular.
@NgModule({
  declarations: [
    AppComponent,
    SearchBooksComponent,
    SearchResultComponent,
    SearchFormComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    DetailComponent,
    JoinPipe,
    OrderComponent,
    BasketComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
