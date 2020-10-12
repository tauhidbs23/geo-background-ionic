import { Component } from '@angular/core';

declare var window;
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  locations:any;

  constructor() {
    this.locations = [];
  }

  StartBackgroundTracking(){
    window.app.backgroundGeolocation.start();
  }

  StopBackgroundGeolocation(){
    window.app.backgroundGeolocation.stop();
  }

  GetLocations(){
    this.locations = (JSON.parse(localStorage.getItem("location")) == null )? []: JSON.parse(localStorage.getItem("location"));
  }

  ClearLocations(){
    localStorage.removeItem("location")
  }

}
