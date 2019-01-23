import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from '../../services/localstorage.service';
import { Movie } from '../../models/movies.model';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  movies: Movie[];

  constructor(public localstorage: LocalstorageService) { }

  ngOnInit() {
    this.movies = this.localstorage.getMovies();
  }

  delete(movie: Movie) {
    this.localstorage.deleteMovie(movie);
    this.movies = this.localstorage.getMovies();
  }
}
