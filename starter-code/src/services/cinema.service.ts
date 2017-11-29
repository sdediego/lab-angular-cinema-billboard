import { Injectable } from '@angular/core';
import moviesList from './../sample-movies';

@Injectable()
export class CinemaService {
  constructor() { }

  movies: Array<Object> = moviesList;

  getMovies(): Array<Object> {
    return this.movies;
  }

  getMovie(id): Object {
    return this.movies.filter(movie => movie.id === id)[0];
  }

}
