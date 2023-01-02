import { Component } from '@angular/core';
import { Movie, Attributes } from '../../movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {

  movies!: Movie[];

  constructor() {

    /* Leer desde el localStorage */
    

  }

}
