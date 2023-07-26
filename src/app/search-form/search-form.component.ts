import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../model/book';
import { CatalogService } from '../services/catalog.service';
import { Category } from '../model/category';


@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  // on fait sortir les composants
  // on déclare un champ
  @Output("result") emitter:EventEmitter<Book[]> = new EventEmitter();
  books!:Book[]; 
  categories!:Category[];

  data:any = {
    keyword: '',
    catId: -1,
  }

  constructor(private service:CatalogService) {}

  ngOnInit(): void {
    this.service.loadCategories().subscribe(catList => {
      this.categories = catList;
    });
  }

  onSearch(): void {
    console.log('Keyword : ' + this.data.keyword);
    console.log('Catégorie : ' + this.data.catId);
    
    //this.books = this.service.searchBooks(value);
    this.service.searchBooks(this.data.keyword, this.data.catId).subscribe(books => {
      this.books = books;
      this.emitter.emit(this.books);
    });
}

}


