import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CarComponent } from './car/car.component';
import { BikeComponent } from './bike/bike.component';
import { AppRoutingModule } from './/app-routing.module';
import { RouterModule, Routes } from '@angular/router';  

const appRoutes: Routes = [
  {path: 'car', component: CarComponent },
  {path: 'bike', component: BikeComponent}
  ];


@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    BikeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(
    appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
