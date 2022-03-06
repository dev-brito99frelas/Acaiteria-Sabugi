import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <app-layer-principal>
        <app-header></app-header>
        <app-navbar></app-navbar>
        <router-outlet></router-outlet>

        <app-footer></app-footer>
      </app-layer-principal>
  `,
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'acaiteria-sjs';
}
