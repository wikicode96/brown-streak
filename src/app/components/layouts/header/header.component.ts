import { Component } from '@angular/core';
import { LogoSmallComponent } from '../../logo-small/logo-small.component'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LogoSmallComponent],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  nav_options = ["Home", "Stations", "Timetable"];
}
