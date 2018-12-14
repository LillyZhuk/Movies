import { Injectable } from '@angular/core';
import { Movie } from '../models/movies.model';

@Injectable({
  providedIn: 'root'
})

export class LocalstorageService {
  movies: Movie[];

  constructor() {
    this.movies = [];
  }

  getMovies() {
    if (localStorage.getItem('movies') === null) {
      return this.movies;
    } else {
      return this.movies = JSON.parse(localStorage.getItem('movies'));
    }
  }

  // addMovie(movie: Movie) {
  //   this.movies.push(movie);
  //   let movies: Movie[] = [];
  //   if (localStorage.getItem('movies') === null) {
  //     movies.push(movie);
  //     localStorage.setItem('movies', JSON.stringify(movies));
  //   } else {
  //     movies = JSON.parse(localStorage.getItem('movies'));
  //     movies.push(movie);
  //     localStorage.setItem('movies', JSON.stringify(movies));
  //   }
  // }

  addMovie(movie: Movie): void {
    this.movies.push(movie);
    let movies: Movie[] = [];
    movies = JSON.parse(localStorage.getItem('movies'));
    movies.push(movie);
    localStorage.setItem('movies', JSON.stringify(movies));
  }

  deleteMovie(movie: Movie) {
    for (let i = 0; i < this.movies.length; i++) {
      if (movie === this.movies[i]) {
        this.movies.splice(i, 1);
        localStorage.setItem('movies', JSON.stringify(this.movies));
      }
    }
  }

}
