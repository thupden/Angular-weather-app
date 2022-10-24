import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import {ActivatedRoute} from '@angular/router';
import { Observable } from 'rxjs';
import {map, filter, concatMap} from 'rxjs/operators';

@Component({
  selector: 'app-weather-report',
  templateUrl: './weather-report.component.html',
  styleUrls: ['./weather-report.component.css']
})
export class WeatherReportComponent implements OnInit {

  data$!: Observable<any>;

  constructor(
    private weatherService: WeatherService,
    private route: ActivatedRoute) {
   }

  ngOnInit(): void {
    this.data$ = this.route.params.pipe(
      map(params => params['locationName']),
      filter(name => !!name),
      concatMap(name=>this.weatherService.getWeatherForCity(name))
    );
  }

}
