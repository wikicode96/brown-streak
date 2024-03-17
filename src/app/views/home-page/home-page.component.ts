import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component'
import { MainSearchComponent } from '../../components/main-search/main-search.component'
import { FooterComponent } from '../../components/footer/footer.component'

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeaderComponent, MainSearchComponent, FooterComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
