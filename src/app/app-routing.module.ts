import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieListComponent } from './page/movie-list/movie-list.component';
import { MovieDetailComponent } from './page/movie-detail/movie-detail.component';

const routes: Routes = [
  { path: '', component: MovieListComponent },
  { path: 'details/:id', component: MovieDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
