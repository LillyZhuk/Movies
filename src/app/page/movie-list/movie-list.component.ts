import { Component, OnInit } from '@angular/core';
import {MovieService} from '../../services/movie.service';
import {Movie} from '../movies.model';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})

export class MovieListComponent implements OnInit{
  // private movies = [];

  private page;
  private movies: Array<any>;
  private pages: Array<number>;

  constructor(private movieService: MovieService) {
  }

  // setPage(i, event: any) {
  //   event.preventDefault();
  //   this.page = i + 1;
  //   this.getMovies(this.page);
  // }

  ngOnInit() {
    this.movieService.getMovies().subscribe((movies) => {
      console.log(movies);
      this.movies = movies;
    });
  }

  // getMovies() {
  //   this.movieService.getMovies();
  // }

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
