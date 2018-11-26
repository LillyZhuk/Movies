import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import {Movie} from '../movies.model';
import {MovieService} from '../../services/movie.service';

import { LocalstorageService } from '../../services/localstorage.service';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movie = new Movie();
  private id;
  addMovieToFavorite = false;

  constructor(
    private movieService: MovieService,
    private activeRoute: ActivatedRoute,
    private location: Location,
    public localstorage: LocalstorageService,
    private router: Router) {
  }

  public getNextMovie() {
   return this.movieService.getNextId(this.movie.id);
  }

  ngOnInit() {
    this.getMovie();
    this.activeRoute.params.pipe(
      switchMap((params) => {
        return this.movieService.getMovie(+params.id);
      })
    ).subscribe(movie => this.movie = movie);
  }
    

  getMovie(): void {
    const id = +this.activeRoute.snapshot.paramMap.get('id');
    this.movieService.getMovie(id)
      .subscribe(movie => this.movie = movie);
  }

  goBack(): void {
    this.location.back();
  }

  addToFavorite() {
   this.localstorage.addMovie(this.movie);
  }

  deleteFromFavorite(movie: Movie) {
    this.localstorage.deleteMovie(movie);
  }

  toggleEvent() {

    this.addMovieToFavorite = !this.addMovieToFavorite;

    if (this.addMovieToFavorite) {
      this.addToFavorite();
    } else {
      this.deleteFromFavorite(this.movie);
    }
  }

}
