import { Component } from '@angular/core';

@Component({
  selector: 'app-main-search',
  standalone: true,
  imports: [],
  templateUrl: './main-search.component.html',
  styleUrl: './main-search.component.css'
})
export class MainSearchComponent {
  stations = ["Unity Station", "Market Station", "Cranberry Station", "Yellow Bell Station", "Sobell Rail Yards", "Linden Station"]
}
