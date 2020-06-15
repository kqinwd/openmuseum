import { Component, AfterViewInit, Input } from '@angular/core';

import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './museum-map.component.html',
  styleUrls: ['./museum-map.component.css']
})
export class MapComponent implements AfterViewInit {

  @Input() coordinates: number[];

  icon = {
    icon: L.icon({
      iconSize: [25, 41],
      iconAnchor: [13, 41],
      iconUrl: '../../../assets//marker-icon.png',
      shadowUrl: '../../../assets/marker-shadow.png'
    })
  };

  private map;

  constructor() { }

  private initMap(): void {
    this.map = L.map('map', {
      center: this.coordinates,
      zoom: 13
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: 'OpenMuseum'
    });

    tiles.addTo(this.map);
    const marker = L.marker(this.coordinates, this.icon);
    marker.addTo(this.map);
  }

  ngAfterViewInit(): void {
    this.initMap();

  }

}
