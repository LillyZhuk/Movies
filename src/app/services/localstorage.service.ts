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

  getMovies(): Movie[] {
    let localStorageItem = JSON.parse(localStorage.getItem('movies'));
    return localStorageItem == null ? [] : localStorageItem.movies;
  }

   addMovie(movie: Movie): void {
     localStorage.setItem('movie', JSON.stringify({ movies: movie}));

  }



}
