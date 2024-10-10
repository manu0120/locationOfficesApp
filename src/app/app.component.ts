import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'locationOfficesApp';

  options: google.maps.MapOptions = {
    mapId: "DEMO_MAP_ID",
    zoom: 11,
    center: {  lat: 40.472568, lng: -3.582778 }
  };
}
