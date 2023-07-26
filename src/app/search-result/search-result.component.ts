import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Book } from '../model/book';
import { BookDetail } from '../model/bookdetail';
import { CatalogService } from '../services/catalog.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent {
 @Input("data") books!:Book[];


 

}
