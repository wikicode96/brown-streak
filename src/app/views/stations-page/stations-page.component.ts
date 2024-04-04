import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/layouts/header/header.component'
import { SectionComponent } from '../../components/layouts/section/section.component'
import { FooterComponent } from '../../components/layouts/footer/footer.component'
import { Heading1Component } from '../../components/fonts/heading1/heading1.component'
import { Heading2Component } from '../../components/fonts/heading2/heading2.component'
import { MapComponent } from '../../components/map/map.component';
import { StationsDetailsComponent } from '../../components/layouts/stations-details/stations-details.component';

@Component({
  selector: 'stations-page',
  standalone: true,
  imports: [
    HeaderComponent,
    SectionComponent,
    StationsDetailsComponent,
    FooterComponent,
    MapComponent,
    Heading1Component,
    Heading2Component],
  templateUrl: './stations-page.component.html'
})
export class StationsPageComponent {

}
