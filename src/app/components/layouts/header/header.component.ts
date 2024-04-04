import { Component } from '@angular/core';
import { LogoSmallComponent } from '../../logo-small/logo-small.component'
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, LogoSmallComponent],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  nav_options = [
    ["Home", "/"],
    ["Stations", "/stations"],
    //["Timetable", "#"]
  ];
}
