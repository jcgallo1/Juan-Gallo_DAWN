import { Component } from '@angular/core';
import { Movie, Attributes } from '../../movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {

  movie!: Movie;

  constructor() {

    /* Leer desde el localStorage */

  }

}
