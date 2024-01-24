import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CarComponent } from './car/car.component';
import { CAR } from '../db-data';
import { Car } from './module/klasa';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'oweb_angular';

  ford = CAR[1];
  chevrolet = CAR[2];
  dodge = CAR[3];
  koli = CAR;

  appKlik(bar: Car){
    console.log("App button clicked");

  }
}
