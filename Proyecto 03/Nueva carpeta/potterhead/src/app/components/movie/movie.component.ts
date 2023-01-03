import { Component } from '@angular/core';
import { Movie, Attributes } from '../../movie';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {

  movie!: Movie;

  constructor(private route: ActivatedRoute) {

    this.route.params.subscribe(params => {
      let id = params['id']; 

      let potterhead = JSON.parse(localStorage.getItem("potterhead")!);
          
      if(potterhead) {
        let movies = potterhead as Array<Movie>  
        let moviesfiltered = movies.filter(movie => movie["id"] == id) 
        console.log(moviesfiltered)   
        this.movie = moviesfiltered[0];
      }
    });
}
}
