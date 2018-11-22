import { Component } from '@angular/core';
import {Movie} from '../page/movies.model';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent  {

  constructor(private movie: Movie) { }

}
