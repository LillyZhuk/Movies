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



  constructor(
    private movieService: MovieService,
    private activeRoute: ActivatedRoute,
    private location: Location,
    public localstorege: LocalstorageService) {
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

  addMovieToFavorite() {
   this.localstorege.addMovie(this.movie);
  }

}
