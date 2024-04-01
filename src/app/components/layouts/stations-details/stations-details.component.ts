import { Component, Input } from '@angular/core';

@Component({
  selector: 'stations-details',
  standalone: true,
  imports: [],
  templateUrl: './stations-details.component.html'
})
export class StationsDetailsComponent {
  images: string[] = [
    './assets/img/Unity_Station.webp',
    './assets/img/Market_Station.webp',
    './assets/img/Cranberry_Station.webp',
    './assets/img/Yellow_Bell_Station.webp',
    './assets/img/Sobell_Rail_Yards.webp',
    './assets/img/Linden_Station.webp'
    ];
  titles: string[] = [
    'Unity Station',
    'Market Station',
    'Cranberry Station',
    'Yellow Bell Station',
    'Sobell Rail Yards',
    'Linden Station'
    ];
    address: string[] = [
      'Little Mexico',
      'Market',
      'Doherty',
      'Prickle Pine',
      'Sobell Rail Yards',
      'Linden Station'
    ];
    phone: string[] = [
      '(213) 599-2762',
      '(213) 599-3873',
      '(415) 660-4287',
      '(702) 699-8299',
      'Without Phone number',
      '(702) 699-8200'
    ];
    airportDistance: string[] = [
      '1km',
      '2km',
      '1.5km',
      '1.5km',
      '1.25km',
      '1.25km'
    ];
}
