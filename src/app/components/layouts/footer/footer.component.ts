import { Component } from '@angular/core';
import { LogoSmallComponent } from '../../logo-small/logo-small.component'

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [LogoSmallComponent],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  nav_options = ["Home", "Stations", "Timetable"];
}
