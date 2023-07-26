import { Injectable } from '@angular/core';
import { Book } from '../model/book';
import { Category } from '../model/category';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { BookDetail } from '../model/bookdetail';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor(
    private http:HttpClient
  ) { }

  loadBookDetails(bookId : number) : Observable<BookDetail>{
    return this.http.get<BookDetail>(`/api/books/${bookId}`);
  }

  loadCategories(): Observable<Category[]>{
    return this.http.get<Category[]>('api/categories');
  }
  searchBooks(keyword:string, categoryId:number): Observable<Book[]>{

    const query = {keyword, categoryId};

    return this.http.post<Book[]>('/api/books/search', query);

  }
  
  }

