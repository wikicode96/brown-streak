import { Routes } from '@angular/router';
import { HomePageComponent } from './views/home-page/home-page.component';
import { StationsPageComponent } from './views/stations-page/stations-page.component';

export const routes: Routes = [
    {path: '', component: HomePageComponent},
    {path: 'stations', component: StationsPageComponent}
];
