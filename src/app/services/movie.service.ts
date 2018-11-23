import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Movie} from '../page/movies.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class MovieService {
  private movies: Movie[] = [];
  movie: Movie;
  private locator = (p: Movie, id: number) => p.id === id;


  private baseUrl: string = 'https://api.themoviedb.org/3/movie/now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c';

  constructor(private http: HttpClient) { }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.baseUrl)
      .pipe(
      map(res => res['results']));
  }

  getMovie(id: number): Observable<Movie> {
    console.log(this.movies);
    return this.getMovies()
      .pipe(
        map(movies => movies.find(movie => movie.id === id)));
  }

  getNextId(id: number): number {
    let index = this.movies.findIndex(p => this.locator(p, id));
    if (index > -1) {
      return this.movies[this.movies.length > index + 2
        ? index + 1 : 0].id;
    } else {
      return id || 0;
    }
  }

}

