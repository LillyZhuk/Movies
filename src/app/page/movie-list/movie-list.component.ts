import { Component, OnInit } from '@angular/core';
import {MovieService} from '../movie.service';
import {Movie} from '../movies.model';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})

export class MovieListComponent implements OnInit {
  private movies = [];

  // private page;
  // private movies: Array<any>;
  // private pages: Array<number>;

  // selectedMovie: Movie;

  constructor(private movieService: MovieService) {}

  // setPage(i, event: any) {
  //   event.preventDefault();
  //   this.page = i + 1;
  //   this.getMovies();
  // }

  ngOnInit() {
    this.getMovies();
  }

  // getMovies() {
  //   this.movieService.getMovies(this.page).subscribe(
  //     data => {
  //       this.movies = data['results'];
  //       this.pages = new Array(data['total_pages']);
  //     }
  //   );
  // }

  private getMovies() {
    this.movieService.getMovies()
      .subscribe((response: any) => {
        this.movies = response.results;
      });
  }

  private showMovies() {
    console.log('Show', this.movies);
  }

  // onSelect(movie: Movie): void {
  //   this.selectedMovie = movie;
  // }

}
