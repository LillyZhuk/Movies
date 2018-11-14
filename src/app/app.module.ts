import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
import {MovieService} from './services/movie.service';
import {MovieListComponent} from './page/movie-list/movie-list.component';
import { MovieDetailComponent } from './page/movie-detail/movie-detail.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatSelectModule, MatMenuModule, MatGridListModule } from '@angular/material';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FavoriteComponent } from './page/favorite/favorite.component';
import { PageNotFoundComponent } from './page/page-not-found/page-not-found.component';

import { StorageServiceModule } from 'ngx-webstorage-service';
import { LocalstorageService } from './services/localstorage.service';


@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieDetailComponent,
    ToolbarComponent,
    FavoriteComponent,
    PageNotFoundComponent
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
    MatGridListModule,
    StorageServiceModule
  ],
  providers: [MovieService, LocalstorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
