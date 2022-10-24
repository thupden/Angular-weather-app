import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
    cities = ["London", "Paris", "Moscow", "New York", "Karachi", "Sydney","kolkata","Delhi"];

    form = new FormGroup({
      cityControl: new FormControl("")
    });

  constructor(private router: Router){};
  ngOnInit(){
    this.form.controls['cityControl'].valueChanges
    .subscribe(value => {
      this.router.navigate([value])
    }
      );
  }
  
  ngOnDestroy(){
    
  }
}
