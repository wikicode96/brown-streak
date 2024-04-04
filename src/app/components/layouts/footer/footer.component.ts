import { Component } from '@angular/core';
import { LogoSmallComponent } from '../../logo-small/logo-small.component'
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule, LogoSmallComponent],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  nav_options = [
    ["Home", "/"],
    ["Stations", "/stations"],
    //["Timetable", "#"]
  ];
}
