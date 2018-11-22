import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { MovieListComponent } from './page/movie-list/movie-list.component';
import { MovieDetailComponent } from './page/movie-detail/movie-detail.component';
import { FavoriteComponent } from './page/favorite/favorite.component';
import { PageNotFoundComponent } from './page/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'list', component: MovieListComponent },
  { path: 'list/:id', component: MovieDetailComponent },
  { path: '', redirectTo: '/list ', pathMatch: 'full' },
  { path: 'favorite', component: FavoriteComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
