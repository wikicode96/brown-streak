import { Component, Input } from '@angular/core';
import { Heading2Component } from '../../fonts/heading2/heading2.component';

@Component({
  selector: 'section-component',
  standalone: true,
  imports: [Heading2Component],
  templateUrl: './section.component.html',
})
export class SectionComponent {
  @Input() title: string = "";
}
