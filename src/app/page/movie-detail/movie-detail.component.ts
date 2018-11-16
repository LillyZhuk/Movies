import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import {Movie} from '../movies.model';
import {MovieService} from '../../services/movie.service';

import { LocalstorageService } from '../../services/localstorage.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movie = new Movie();
  addMovieToFavorite: boolean = true;


  constructor(
    private movieService: MovieService,
    private activeRoute: ActivatedRoute,
    private location: Location,
    public localstorage: LocalstorageService) {
  }

  ngOnInit(): void {
  this.getMovie();
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

  // toggleMovie(): void {
  //   this.addMovieToFavorite = !this.addMovieToFavorite;
  // }

  // toggleEvent() {
  //
  //   this.addMovieToFavorite = !this.addMovieToFavorite;
  //
  //   if (this.addMovieToFavorite) {
  //     this.addToFavorite();
  //   } else {
  //     this.deleteFromFavorite(this.movie);
  //   }
  // }

}
