import { Component, OnInit } from '@angular/core';
import { IMovie } from './../../interfaces/IMovie';
import { CinemaService } from './../../services/cinema.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-my-movie',
  templateUrl: './my-movie.component.html',
  styleUrls: ['./my-movie.component.css'],
  providers: [CinemaService]
})
export class MyMovieComponent implements OnInit {
  movieId: number;
  movie: any;

  constructor(private cinema: CinemaService, private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(params => this.movieId = params['id']);
    console.log(this.movieId);
  }

  ngOnInit() {
    this.movie = this.cinema.getMovie(this.movieId);
    console.log(this.movie);
  }

}
