import { Component } from '@angular/core';
import { AuthService } from './services';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'events-app',
  template: '<nav-bar></nav-bar> <router-outlet></router-outlet>'
})
export class EventsAppComponent {
  constructor(private auth: AuthService) {

  }

  ngOnInit() {
    this.auth.checkAuthenticationstatus();
  }
}
