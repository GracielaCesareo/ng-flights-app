import { Component, OnInit } from '@angular/core';
import { FlightsService } from '../flights.service';
import { Flight } from '../flight.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  flights: Flight[];

  constructor(private flightsService: FlightsService) { 
    this.flights = [];
  }

  ngOnInit(): void {
    this.flights = this.flightsService.getFlights();
  }

}


