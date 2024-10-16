import { Component } from '@angular/core';
import { MapMarker } from '@angular/google-maps';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'locationOfficesApp';

  options: google.maps.MapOptions = {
    mapId: "DEMO_MAP_ID",
    zoom: 13,
    center: {  lat: 40.44832290439806, lng: -3.632734837451936 }
  };

  officeLocationsGreen: any[] = [
    // av. de los andes 48, 28042 madrid
    { lat: 40.4560421664468, lng: -3.6186905252987445 },
    // c. de juan ignacio luca de tena, 11, 28027 madrid
    { lat: 40.44832290439806, lng: -3.632734837451936 },
    // c. de serrano, 69, 28006 madrid
    { lat: 40.435347, lng: -3.688278 },
    // c. de velázquez, 31, 28001 madrid
    { lat: 40.426540, lng: -3.685220 },
    // c. de alcalá, 28, 28014 madrid
    { lat: 40.418056, lng: -3.698333 },
    // c. de gran vía, 45, 28013 madrid
    { lat: 40.422222, lng: -3.707222 },
  ];
  officeLocationsYellow: any[] = [
    // c. de bravo murillo, 297, 28020 madrid
    { lat: 40.448611, lng: -3.703056 },
    // c. de orense, 85, 28020 madrid
    { lat: 40.453611, lng: -3.692222 },
    // c. de goya, 89, 28009 madrid
    { lat: 40.426944, lng: -3.676944 },
    // c. de príncipe de vergara, 131, 28002 madrid
    { lat: 40.441111, lng: -3.678611 },
    // c. de arturo soria, 126, 28043 madrid
    { lat: 40.445833, lng: -3.651111 },
    // c. de castellana, 75, 28046 madrid
    { lat: 40.448056, lng: -3.692778 },
    // c. de génova, 27, 28004 madrid
    { lat: 40.428611, lng: -3.693333 },
    // c. de fuencarral, 101, 28004 madrid
    { lat: 40.429167, lng: -3.700833 }
  ];
  officeLocationsRed: any[] = [
    // c. de hortaleza, 104, 28004 madrid
    { lat: 40.428056, lng: -3.698611 },
    // c. de barquillo, 21, 28004 madrid
    { lat: 40.421944, lng: -3.696111 },
    // c. de san bernardo, 107, 28015 madrid
    { lat: 40.430278, lng: -3.707778 },
    // c. de almagro, 3, 28010 madrid
    { lat: 40.429444, lng: -3.692222 },
    // c. de santa engracia, 125, 28003 madrid
    { lat: 40.441111, lng: -3.703611 },
    // c. de ríos rosas, 47, 28003 madrid
    { lat: 40.441944, lng: -3.703056 },
    // c. de josé abascal, 56, 28003 madrid
    { lat: 40.438056, lng: -3.698611 }
  ];

  map!: google.maps.Map;
  infoWindow!: google.maps.InfoWindow;

  ngOnInit() {
    const contentString = `
    <div>
      <h1>Uluru</h1>
      <div>
        <p>
          <b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large
          sandstone rock formation in the southern part of the
          Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi)
          south west of the nearest large town, Alice Springs; 450&#160;km
          (280&#160;mi) by road. Kata Tjuta and Uluru are the two major
          features of the Uluru - Kata Tjuta National Park. Uluru is
          sacred to the Pitjantjatjara and Yankunytjatjara, the
          Aboriginal people of the area. It has many springs, waterholes,
          rock caves and ancient paintings. Uluru is listed as a World
          Heritage Site.
        </p>
        <p>
          Attribution: Uluru,
          <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">
            https://en.wikipedia.org/w/index.php?title=Uluru
          </a>
          (last visited June 22, 2009).
        </p>
      </div>
    </div>`;
    this.infoWindow = new google.maps.InfoWindow({
      content: contentString,
      ariaLabel: "Uluru",
    });
    // this.infoWindow = new google.maps.InfoWindow();

    const parser = new DOMParser();
    // this is an SVG string of a house icon, but feel free to use whatever SVG icon you'd like
    const svgGreenString = `<svg fill="#000000" width="40px" height="40px" viewBox="0 0 24 24" id="place" data-name="Flat Line" xmlns="http://www.w3.org/2000/svg" class="icon flat-line">
    <g id="SVGRepo_bgCarrier" stroke-width="0"/>
    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
    <g id="SVGRepo_iconCarrier">
    <path id="secondary" d="M12,3A6,6,0,0,0,6,9c0,5,6,12,6,12s6-7,6-12A6,6,0,0,0,12,3Zm0,8a2,2,0,1,1,2-2A2,2,0,0,1,12,11Z" style="fill: #00ff2a; stroke-width: 2;"/>
    <path id="primary" d="M14,9a2,2,0,1,1-2-2A2,2,0,0,1,14,9Zm4,0A6,6,0,0,0,6,9c0,5,6,12,6,12S18,14,18,9Z" style="fill: none; stroke: #000000; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"/>
    </g>
    </svg>`;
    const svgYellowString = `<svg fill="#000000" width="40px" height="40px" viewBox="0 0 24 24" id="place" data-name="Flat Line" xmlns="http://www.w3.org/2000/svg" class="icon flat-line">
    <g id="SVGRepo_bgCarrier" stroke-width="0"/>
    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
    <g id="SVGRepo_iconCarrier">
    <path id="secondary" d="M12,3A6,6,0,0,0,6,9c0,5,6,12,6,12s6-7,6-12A6,6,0,0,0,12,3Zm0,8a2,2,0,1,1,2-2A2,2,0,0,1,12,11Z" style="fill: #e1ff00; stroke-width: 2;"/>
    <path id="primary" d="M14,9a2,2,0,1,1-2-2A2,2,0,0,1,14,9Zm4,0A6,6,0,0,0,6,9c0,5,6,12,6,12S18,14,18,9Z" style="fill: none; stroke: #000000; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"/>
    </g>
    </svg>`;
    const svgRedString = `<svg fill="#000000" width="40px" height="40px" viewBox="0 0 24 24" id="place" data-name="Flat Line" xmlns="http://www.w3.org/2000/svg" class="icon flat-line">
    <g id="SVGRepo_bgCarrier" stroke-width="0"/>
    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
    <g id="SVGRepo_iconCarrier">
    <path id="secondary" d="M12,3A6,6,0,0,0,6,9c0,5,6,12,6,12s6-7,6-12A6,6,0,0,0,12,3Zm0,8a2,2,0,1,1,2-2A2,2,0,0,1,12,11Z" style="fill: #fa0000; stroke-width: 2;"/>
    <path id="primary" d="M14,9a2,2,0,1,1-2-2A2,2,0,0,1,14,9Zm4,0A6,6,0,0,0,6,9c0,5,6,12,6,12S18,14,18,9Z" style="fill: none; stroke: #000000; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"/>
    </g>
    </svg>`;

    this.officeLocationsGreen.forEach((location) => {
      location.icon = {
        url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svgGreenString),
        scaledSize: new google.maps.Size(40, 40)
      };
    });
    this.officeLocationsRed.forEach((location) => {
      location.icon = {
        url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svgRedString),
        scaledSize: new google.maps.Size(40, 40)
      };
    });
    this.officeLocationsYellow.forEach((location) => {
      location.icon = {
        url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svgYellowString),
        scaledSize: new google.maps.Size(40, 40)
      };
    });

  }

  onMarkerClick(location: any) {
    if (!this.infoWindow) {
      console.error('InfoWindow is not initialized');
    }
    console.log('Marker clicked', location);
    
    this.infoWindow.setContent(`Lat: ${location.lat}, Lng: ${location.lng}`);
    
    this.infoWindow.setPosition({ lat: location.lat, lng: location.lng });
    this.infoWindow.open();
  }

}
