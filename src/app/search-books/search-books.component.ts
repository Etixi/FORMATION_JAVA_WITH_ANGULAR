import { Component } from '@angular/core';
import { Book } from '../model/book';

@Component({
  selector: 'app-search-books',
  templateUrl: './search-books.component.html',
  styleUrls: ['./search-books.component.css']
})
export class SearchBooksComponent {

   //comopsant angular mise en oeure par l'annotation
   //title = 'MaBoutique'; 
   //user: any= {name : 'Roger'};
  
  books!:Book[]; //cette variable peut être undefined et c'est normal

  // colorLength:string = 'black';
  onResult(books:Book[]){
    this.books = books;
  }

}
