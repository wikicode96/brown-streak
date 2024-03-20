import { Component } from '@angular/core';

@Component({
  selector: 'app-logo-small',
  standalone: true,
  imports: [],
  template: `
    <a href="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
      <img class="bi me-2" width="40" height="32" src="./assets/img/Brown_Streak_Railroad-Logo.webp" alt="Brown Streak Railroad Logo">
    </a>`,
})
export class LogoSmallComponent {

}
