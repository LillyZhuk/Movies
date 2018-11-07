import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Movie} from './module/movies.module';
import 'rxjs/add/operator/map';



@Injectable()
export class MovieService {

  private baseUrl: string = 'http://api.themoviedb.org/3/movie/now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c'

  constructor(private http: HttpClient) { }

  getMovies(page: number) {
    return this.http.get<Movie[]>(this.baseUrl+'&language=en-US&page='+page);
  }

}

