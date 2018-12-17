import { Injectable } from '@angular/core';
import { Movie } from '../models/movies.model';

@Injectable({
  providedIn: 'root'
})

export class LocalstorageService {
  movies: Movie[] = [];

  constructor() {
  }

  getMovies() {
    if (localStorage.getItem('movies') === null) {
      return this.movies;
    } else {
      return this.movies = JSON.parse(localStorage.getItem('movies'));
    }
  }

  addMovie(movie: Movie): void {
    this.movies.push(movie);
    let movies: Movie[] = [];
    movies = JSON.parse(localStorage.getItem('movies'));
    movies.push(movie);
    localStorage.setItem('movies', JSON.stringify(movies));
  }

  deleteMovie(movie: Movie) {
    this.movies = this.movies.filter(res => res !== movie ? res : null);
    localStorage.setItem('movies', JSON.stringify(this.movies));
  }

}
