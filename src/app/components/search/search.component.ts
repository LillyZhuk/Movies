import { Component } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { Movie } from '../../models/movies.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  title: string = '';
  isLoaded: boolean = false;
  private movies = [];

  constructor(
    private service: SearchService
  ) { }

  searchMovieByTitle() {
    console.log(this.title);
    this.service.search(this.title)
    .subscribe((response: any) => {
     this.movies = response.results;
      this.isLoaded = true;
    });
  }

}
