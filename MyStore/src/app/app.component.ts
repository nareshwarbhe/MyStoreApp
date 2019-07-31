import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, Event, RouterEvent, NavigationError } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyStore';
  showLoadingIndicator = false;
  constructor(private _router: Router) {
    this._router.events.subscribe((routerEvent: Event) => {
      if (routerEvent instanceof NavigationStart) {
       // alert("true");
        this.showLoadingIndicator = true;
      }
      if (routerEvent instanceof NavigationEnd) {
       // alert("false");
        this.showLoadingIndicator = false;
      }
      if (routerEvent instanceof NavigationError) {
       // alert("falseTr");
        this.showLoadingIndicator = false;
      }
    });
  }
}
