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
  private pages: Array<number>;
  public total_results: number;


  constructor(
    private movieService: MovieService
    ) {}

  ngOnInit() {
    this.getMovies(1);
  }

  getMovies(event) {
    this.movieService.getMovies(event)
    .subscribe((movies) => {
      this.movies = movies['results'];
      this.pages = movies['total_results'];
    });
    return event;
  }

}
