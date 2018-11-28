import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Movie} from '../models/movies.model';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { catchError } from 'rxjs/operators';

@Injectable()
export class MovieService {
  // private movies: Movie[] = [];
  public page;
  public movie: Movie;
  private movies: Movie[] = new Array<Movie>();
  private baseUrl: string = environment.databaseURL;
  private apiKey: string = environment.api_key;

  constructor(
    private http: HttpClient
    ) {}

  getMovies(page: number): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.baseUrl}now_playing?api_key=${this.apiKey}&language=en-US&page=${page}`)
    .pipe (
      catchError((error: Response) => throwError(
      `Network Error: ${error.statusText} (${error.status})`)));
    // .pipe(
    //   map(res => res['results']),
    //   catchError(this.handleError));
  }

  // getMovie(id: number): Observable<Movie> {
  //   return this.getMovies(this.page)
  //     .pipe(
  //       map(movies => movies.find(movie => movie.id === id)));
  // }

  // Getting by using the find method, but it doesn't work in component
  // getMovie(id: number): Movie {
  //   console.log(id, this.movies,'id')
  //   return this.movies.find(movie => movie.id === id);
  // }

  // Getting a movie by ID from the server.
  getMovie(id: number): Observable<Movie> {
   return this.http.get<Movie>(`${this.baseUrl}${id}?api_key=${this.apiKey}&language=en-US`)
    .pipe (
      catchError((error: Response) => throwError(
      `Network Error: ${error.statusText} (${error.status})`)));
  }

  // getNextId(id: number): number {
  //   console.log(this.movies)
  //   let index = +this.movies.findIndex(movie => movie.id === id);
  //   console.log(index, id, '555');
  //   if (index > -1) {
  //     return this.movies[this.movies.length > index + 2
  //       ? index + 1 : 0].id;
  //   } else {
  //     return id || 0;
  //   }
  // }
}

