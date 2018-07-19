import { Component, OnInit, Input } from '@angular/core';
import { AppComponent } from '../app.component';
import { Injector } from '@angular/core';

@Component({
  selector: 'app-bike',
  templateUrl: './bike.component.html',
  styleUrls: ['./bike.component.css'],
 
})
export class BikeComponent implements OnInit {
 	
  constructor(private inj:Injector){
         let parentComponent = this.inj.get(AppComponent);
         console.log(parentComponent);
    }
  ngOnInit() {
  }
 
}
