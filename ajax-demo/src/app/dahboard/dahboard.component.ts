import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

export interface Movie {
 id: string;
 name: string;
 genre: string;
}
@Component({
  selector: 'app-dahboard',
  templateUrl: './dahboard.component.html',
  styleUrls: ['./dahboard.component.css']
})
export class DahboardComponent implements OnInit {

  movies: Array<Movie> = [];
  constructor(private movieService: MovieService) {

   let observable = movieService.getAllMovies();
  
   observable.subscribe(data => {
    this.movies = data;
    alert('Data is loaded');
   }, err => alert("Server is not working. Come again later"));
   }

  ngOnInit(): void {
  }

}
