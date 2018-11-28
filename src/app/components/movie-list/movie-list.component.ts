import { Component, OnInit } from '@angular/core';
import {MovieService} from '../../services/movie.service';
import { Movie } from '../../models/movies.model';
import { Page } from '../../models/page.model';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})

export class MovieListComponent implements OnInit{
  private movies = [];
  public page: number = 1;
  public total_pages: number;
  private pages: Array<number>;

  constructor(
    private movieService: MovieService
    ) {}

  // setPage(i, event: any) {
  //   event.preventDefault();
  //   this.page = i + 1;
  //   this.getMovies();
  // }

  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    this.movieService.getMovies(this.page)
    .subscribe((movies) => {
      console.log(movies);
      this.movies = movies['results'];
    });
  }

  // private getMovies() {
  //   this.movieService.getMovies(this.page)
  //     .subscribe((response: any) => {
  //       this.movies = response.results;
  //     });
  // }

}
