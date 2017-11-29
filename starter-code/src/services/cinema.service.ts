import { Injectable } from '@angular/core';
import moviesList from './../sample-movies';
import { IMovie } from './../interfaces/IMovie';

@Injectable()
export class CinemaService {
  constructor() { }

  movies: Array<IMovie> = moviesList;

  getMovies(): Array<IMovie> {
    return this.movies;
  }

  getMovie(id): IMovie {
    return this.movies.filter(movie => movie.id === id)[0];
  }

}
