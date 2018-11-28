import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import {Movie} from '../../models/movies.model';
import {MovieService} from '../../services/movie.service';
import { LocalstorageService } from '../../services/localstorage.service';

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
    private router: Router
    ) {}

  ngOnInit() {
    this.getMovie();
    // this.activeRoute.params.pipe(
    //   switchMap((params) => {
    //     return this.movieService.getMovie(+params.id);
    //   })
    // ).subscribe(movie =>
    //   this.movie = movie
    //   );
  }

   // public getNextMovie() {
  //  return this.movieService.getNextId(this.movie.id);
  // }

  getMovie(): void {
    const id = +this.activeRoute.snapshot.paramMap.get('id');
    this.movieService.getMovie(id)
   .subscribe(
    movie => this.movie = movie
    );
  }

  goBack(): void {
    this.location.back();
  }

  //Work with the Localstorage
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
