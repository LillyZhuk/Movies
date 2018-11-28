import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
import {MovieService} from './services/movie.service';
import {MovieListComponent} from './components/movie-list/movie-list.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material';
  import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
  import {NgxPaginationModule} from 'ngx-pagination';

import { StorageServiceModule } from 'ngx-webstorage-service';
import { LocalstorageService } from './services/localstorage.service';
import { MessageModule } from './error/message.module';

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
    StorageServiceModule,
    // NgbModule,
    MessageModule,
    // NgxPaginationModule,
    
  ],
  providers: [MovieService, LocalstorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
