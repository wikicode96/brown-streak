import { Component, Input } from '@angular/core';

@Component({
  selector: 'heading2',
  standalone: true,
  imports: [],
  template: '<h2 class="fw-bold text-center">{{ text }}</h2>'
})
export class Heading2Component {
  @Input() text: string = "";
}
