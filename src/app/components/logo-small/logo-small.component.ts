import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-logo-small',
  standalone: true,
  imports: [RouterModule],
  template: `
    <a routerLink="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
      <img class="bi me-2" width="auto" height="32" src="./assets/img/Brown_Streak_Railroad-Logo.webp" alt="Brown Streak Railroad Logo">
    </a>`,
})
export class LogoSmallComponent {

}
