import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/layouts/header/header.component'
import { SectionComponent } from '../../components/layouts/section/section.component'
import { FooterComponent } from '../../components/layouts/footer/footer.component'
import { Heading1Component } from '../../components/fonts/heading1/heading1.component'
import { Heading2Component } from '../../components/fonts/heading2/heading2.component'
import { MapComponent } from '../../components/map/map.component';

@Component({
  selector: 'stations-page',
  standalone: true,
  imports: [
    HeaderComponent,
    SectionComponent,
    FooterComponent,
    MapComponent,
    Heading1Component,
    Heading2Component],
  templateUrl: './stations-page.component.html',
  styleUrl: './stations-page.component.css'
})
export class StationsPageComponent {

}
