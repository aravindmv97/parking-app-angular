import {BikeComponent} from './bike/bike.component';
import {CarComponent} from './car/car.component';
import { provideRouter } from '@angular/router';

const APP_ROUTES = [
{path:'bike',component:BikeComponent},
{path:'car',component:CarComponent}
];


export const APP_ROUTES_PROVIDER = [provideRouter(APP_ROUTES)];