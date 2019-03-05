import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nav class='navbar navbar-expand navbar-light bg-light'>
      <a class='navbar-brand'>{{pageTitle}}</a>
      <ul class='nav nav-pills'>
        <li><a class='nav-link' [routerLink]="['/latest']">Home</a></li>
        <li><a class='nav-link' [routerLink]="['/feed']">Comic Feed</a></li>
      </ul>
    </nav>
    <div class='container'>
      <router-outlet></router-outlet>
    </div>
`
})
export class AppComponent {
  pageTitle = 'Peculiar World Comic';
}
