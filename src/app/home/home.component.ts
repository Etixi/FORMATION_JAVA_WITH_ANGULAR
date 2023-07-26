import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';
import { CatalogService } from '../services/catalog.service';
import { Book } from '../model/book';
import { take } from 'rxjs/internal/operators/take';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  books: Book[] = [];
  constructor(
    private service: CatalogService
  ) {}
  ngOnInit(): void {

    
    this.service.searchBooks("", 5)
    .pipe(
      take(3)
    )
    .subscribe(books => this.books = books);
  }
}
