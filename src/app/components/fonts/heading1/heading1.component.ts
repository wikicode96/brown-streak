import { Component, Input } from '@angular/core';

@Component({
  selector: 'heading1',
  standalone: true,
  imports: [],
  template: '<h1 class="fw-bolder">{{ text }}</h1>'
})
export class Heading1Component {
  @Input() text: string = "";
}
