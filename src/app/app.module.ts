import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
import {MovieService} from './page/movie.service';
import {MovieListComponent} from './page/movie-list/movie-list.component';
import { MovieDetailComponent } from './page/movie-detail/movie-detail.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatSelectModule, MatMenuModule, MatGridListModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatSelectModule,
    MatToolbarModule,
    MatGridListModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
