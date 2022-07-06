import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from './dahboard/dahboard.component';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  
  constructor(private http: HttpClient) { 
    
  }

  getAllMovies(): Observable<Array<Movie>> {
    return this.http.get<Array<Movie>>("http://localhost:4001/items");
  }
}
