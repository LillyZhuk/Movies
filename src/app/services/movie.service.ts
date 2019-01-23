import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Movie} from '../models/movies.model';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { catchError } from 'rxjs/operators';

@Injectable()
export class MovieService {
  public page: number;
  public movie: Movie;
  public title: string;
  private movies: Movie[] = [];
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
  }

  // Getting a movie by ID from the server.
  getMovie(id: number): Observable<Movie> {
   return this.http.get<Movie>(`${this.baseUrl}${id}?api_key=${this.apiKey}&language=en-US`)
    .pipe (
      catchError((error: Response) => throwError(
      `Network Error: ${error.statusText} (${error.status})`)));
  }

}