import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Movie} from '../page/movies.model';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';



@Injectable()
export class MovieService {
  private movies: Movie[] = [];

  private baseUrl: string = 'https://api.themoviedb.org/3/movie/'

  constructor(private http: HttpClient) { }

  getMovies() {
    return this.http.get(this.baseUrl + 'now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c');
  }

  getMovie(id: number) {
    return this.http.get<Movie>(this.baseUrl + id + '?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c');
  }

}

