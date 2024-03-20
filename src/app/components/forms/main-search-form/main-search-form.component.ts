import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'main-search',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './main-search-form.component.html'
})
export class MainSearchFormComponent {

  roundTripOrOneWay = new FormControl("roundTrip");
  stationFrom = new FormControl("");
  stationTo = new FormControl("");
  passengers = new FormControl("");

  // The number value is the distance with the next station
  // For example: Between Unity Station and Merket Station de distance is 1km
  stationsMap: Map<String, number> = new Map();

  constructor() {
    this.stationsMap.set("Unity Station", 1);
    this.stationsMap.set("Market Station", 5);
    this.stationsMap.set("Cranberry Station", 11);
    this.stationsMap.set("Yellow Bell Station", 2);
    this.stationsMap.set("Sobell Rail Yards", 1);
    this.stationsMap.set("Linden Station", 4);
  }

  calculate() {
    const PRICE_PER_KILOMETER: number = 1;

    if (this.sanitizeFields()) {
      let roundTripOrOneWay: string | null = this.roundTripOrOneWay.value;
      let stationFromKey: string | null = this.stationFrom.value;
      let stationToKey: string | null = this.stationTo.value;
      let passengersInput: string | null = this.passengers.value;

      if (stationFromKey !== null && stationToKey !== null && passengersInput !== null) {
        let km = this.calculateDistanceBetweenStations(stationFromKey, stationToKey);
        let price: number = PRICE_PER_KILOMETER * km * parseInt(passengersInput);
        if (roundTripOrOneWay === "roundTrip") price = price * 2;
        alert("Price of your trip: $" + price);
      } throw new Error('Some Key in stationsMap is null')
    } else {
      alert("Incorrect fields!");
    }
  }

  calculateDistanceBetweenStations(station1: string, station2: string): number {
    const stations = Array.from(this.stationsMap.keys());
    const distance = Array.from(this.stationsMap.values());

    let trigger: boolean = false;

    let result1: number = 0;
    for (let i = 0; i < stations.length; i++) {
      if (stations[i] === station1) trigger = true;
      if (trigger === true) result1 = result1 + distance[i];

      if (stations[i + 1] === station2 && trigger === true) break;
      if (i === stations.length - 1 && stations[0] === station2 && trigger === true) break;

      if (i === stations.length - 1) i = -1;
    }

    trigger = false;

    let result2: number = 0;
    for (let i = stations.length - 1; i > -1; i--) {
      if (stations[i] === station1) trigger = true;

      if (trigger === true && i === 0) result2 = result2 + distance[distance.length - 1];
      else if (trigger === true && i !== 0 ) result2 = result2 + distance[i - 1];

      if (stations[i - 1] === station2 && trigger === true) break;
      if (i === 0 && stations[stations.length - 1] === station2 && trigger === true) break;

      if (i === 0) i = stations.length;
    }

    if (result1 < result2) return result1;
    else if (result1 > result2) return result2;
    else return result1;
  }

  sanitizeFields(): boolean {
    if (this.roundTripOrOneWay.value != "roundTrip" && this.roundTripOrOneWay.value != "oneWay") return false;
    if (this.stationFrom.value == null || this.stationTo.value == null) return false;
    if (this.stationFrom.value === "" || this.stationTo.value === "") return false;
    if (!this.stationsMap.has(this.stationFrom.value) && !this.stationsMap.has(this.stationTo.value)) return false;
    if (this.stationFrom.value === this.stationTo.value) return false;
    if (isNaN(Number(this.passengers.value))) return false;
    if (Number(this.passengers.value) <= 0) return false;
    return true;
  }
}
