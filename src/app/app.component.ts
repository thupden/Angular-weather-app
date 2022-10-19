import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  cities = ["London", "Paris", "Moscow", "New York", "Karachi", "Sydney"];

  cityControl!: FormControl;

  ngOnInit(){}
  
  ngOnDestroy(){

  }
}
