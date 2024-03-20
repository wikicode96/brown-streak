import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/layouts/header/header.component'
import { SectionComponent } from '../../components/layouts/section/section.component';
import { MainSearchFormComponent } from '../../components/forms/main-search-form/main-search-form.component'
import { AlbumComponent } from '../../components/layouts/album/album.component'
import { FooterComponent } from '../../components/layouts/footer/footer.component'
import { Heading1Component } from '../../components/fonts/heading1/heading1.component'
import { Heading2Component } from '../../components/fonts/heading2/heading2.component'

@Component({
  selector: 'home-page',
  standalone: true,
  imports: [
    HeaderComponent,
    SectionComponent,
    MainSearchFormComponent,
    AlbumComponent,
    FooterComponent,
    Heading1Component,
    Heading2Component
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
