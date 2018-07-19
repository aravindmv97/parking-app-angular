import { Component } from '@angular/core';
import { CarComponent } from './car/car.component';
import { BikeComponent } from './bike/bike.component';


@Component({
  selector: 'root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})


export class AppComponent {
  bike_count = 90;
  car_count = 30;
  slots=[
  {id :1,car:3,bike:3},{id :2,car:3,bike:3},{id :3,car:3,bike:3},
  {id :4,car:3,bike:3},{id :5,car:3,bike:3},{id :6,car:3,bike:3},
  {id :7,car:3,bike:3},{id :8,car:3,bike:3},{id :9,car:3,bike:3},
  {id :10,car:3,bike:3},{id :11,car:3,bike:3},{id :12,car:3,bike:3},
  {id :13,car:3,bike:3},{id :14,car:3,bike:3},{id :15,car:3,bike:3},
  {id :16,car:3,bike:3},{id :17,car:3,bike:3},{id :18,car:3,bike:3},
  {id :19,car:3,bike:3},{id :20,car:3,bike:3},{id :21,car:3,bike:3},
  {id :22,car:3,bike:3},{id :23,car:3,bike:3},{id :24,car:3,bike:3},
  {id :25,car:3,bike:3},{id :26,car:3,bike:3},{id :27,car:3,bike:3},
  {id :28,car:3,bike:3},{id :29,car:3,bike:3},{id :30,car:3,bike:3}
  ];


   
}


