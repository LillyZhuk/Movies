import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Movie} from '../models/movies.model';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  public movie: Movie;
  // public title: string;
  private apiKey: string = environment.api_key;

  constructor(
    private http: HttpClient
  ) { }

  // Search movie by title
   search(title: string): Observable<Movie> {
    console.log(title, 'service');
    return this.http.get<Movie>(
      `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&language=en-US&query=${title}&page=1&include_adult=false`)
        .pipe (
          catchError((error: Response) => throwError(
          `Network Error: ${error.statusText} (${error.status})`)));
  }
}
