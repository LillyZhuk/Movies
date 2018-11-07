import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
import {MovieService} from './movie.service';
import {HomepageComponent} from './page/homepage/homepage.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatSelectModule, MatMenuModule, MatGridListModule } from '@angular/material';

import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent
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
    NgbPaginationModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
