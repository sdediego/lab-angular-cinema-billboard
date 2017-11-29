import { Component, OnInit } from '@angular/core';
import { CinemaService } from './../../services/cinema.service';

@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.css'],
  providers: [CinemaService]
})
export class MyHomeComponent implements OnInit {
  constructor(public cinema: CinemaService) { }

  ngOnInit() {
  }

  movies = this.cinema.getMovies();
}
