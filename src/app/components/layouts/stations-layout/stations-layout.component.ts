import { Component } from '@angular/core';

@Component({
  selector: 'stations-layout',
  standalone: true,
  imports: [],
  templateUrl: './stations-layout.component.html',
  styleUrl: './stations-layout.component.css'
})
export class StationsLayoutComponent {

  // Stations Descriptions
  descriptionOfUnityStation: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  descriptionOfMarketStation: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  descriptionOfCranberryStation: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  descriptionOfYellowBellStation: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  descriptionOfSobellRailYards: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  descriptionOfLindenStation: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  // Stations Images
  imageOfUnityStation: string = "./assets/img/Unity_Station.webp";
  imageOfMarketStation: string = "./assets/img/Market_Station.webp";
  imageOfCranberryStation: string = "./assets/img/Cranberry_Station.webp";
  imageOfYellowBellStation: string = "./assets/img/Yellow_Bell_Station.webp";
  imageOfSobellRailYards: string = "./assets/img/Sobell_Rail_Yards.webp";
  imageOfLindenStation: string = "./assets/img/Linden_Station.webp";

  onClickPinMarker(stationName: string) {
    console.log(stationName);
  }
}
