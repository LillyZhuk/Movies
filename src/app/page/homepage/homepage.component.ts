import { Component, OnInit } from '@angular/core';
import {MovieService} from '../../movie.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

export class HomepageComponent implements OnInit {
  // private movies = [];

  private page: number = 1;
  private movies: Array<any>;
  private pages: Array<number>;

  constructor(private movieService: MovieService) {}

  setPage(i, event: any) {
    event.preventDefault();
    this.page = i;
    this.getMovies();
  }


  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    this.movieService.getMovies(this.page).subscribe(
      data => {
        this.movies = data['results'];
        this.pages = new Array(data['total_pages']);
      }
    );
  }

  // private getMovies() {
  //   this.movieService.getMovies()
  //     .subscribe((response: any) => {
  //       this.movies = response.results;
  //     });
  // }
  private showMovies() {
    console.log('Show', this.movies);
  }


}
