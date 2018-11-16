import { Injectable } from '@angular/core';
import { Movie } from '../page/movies.model';
import { LocalStorage } from '@ngx-pwa/local-storage';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {
  movies: Movie[];

  constructor() {
    this.movies = [];
  }


  // getMovie(): Movie[] {
  //   if (localStorage.getItem('movies') === null) {
  //     this.movies = [];
  //   } else {
  //     this.movies = JSON.parse(localStorage.getItem('movies'));
  //   }
  // }

  // getMovies(): Movie[] {
  //   let localStorageItem = JSON.parse(localStorage.getItem('id'));
  //   return localStorageItem == null ? [] : localStorageItem.movies;
  // }

  //  addMovie(movie: Movie): void {
  //    localStorage.setItem('movie', JSON.stringify({ movies: movie}));
  //
  // }

  getMovies() {
    if (localStorage.getItem('movies') === null) {
      return this.movies;
    } else {
      this.movies = JSON.parse(localStorage.getItem('movies'));
      return this.movies;
    }
  }

  addMovie(movie: Movie) {
    this.movies.push(movie);
    let movies: Movie[] = [];
    if (localStorage.getItem('movies') === null) {
      movies.push(movie);
      localStorage.setItem('movies', JSON.stringify(movies));
    } else {
      movies = JSON.parse(localStorage.getItem('movies'));
      movies.push(movie);
      localStorage.setItem('movies', JSON.stringify(movies));
    }
  }

  deleteMovie(movie: Movie) {
    for (let i = 0; i < this.movies.length; i++) {
      if (movie == this.movies[i]) {
        this.movies.splice(i, 1);
        localStorage.setItem('movies', JSON.stringify(this.movies));
      }
    }
  }

}
