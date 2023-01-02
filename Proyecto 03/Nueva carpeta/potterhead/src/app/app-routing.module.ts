import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SplashComponent } from './components/splash/splash.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieComponent } from './components/movie/movie.component';

const routes: Routes = [
  { path: "splash", component: SplashComponent },
  { path: "movies", component: MoviesComponent },
  { path: "movie", component: MovieComponent },
  { path: "**", redirectTo: "splash" }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
