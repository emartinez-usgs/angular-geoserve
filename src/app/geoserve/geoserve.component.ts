import { Component, OnInit } from '@angular/core';

import { Place } from '../place';

const GEOSERVE_PLACES_ENDPOINT: string = 'https://earthquake.usgs.gov/ws/geoserve/places.json';

@Component({
  selector: 'app-geoserve',
  templateUrl: './geoserve.component.html',
  styleUrls: ['./geoserve.component.css']
})
export class GeoserveComponent implements OnInit {
  places: object[] = [];

  constructor () { }

  ngOnInit () {
    this.handleSearch({
      latitude: 34.0,
      longitude: -118.0
    });
  }

  handleSearch (coordinates) {
    const latitude: number = coordinates.latitude;
    const longitude: number = coordinates.longitude;

    fetch(`${GEOSERVE_PLACES_ENDPOINT}?latitude=${latitude}&longitude=${longitude}&type=event`)
      .then((response) => {
        return response.json();
      }).then((json) => {
        this.places = json.event.features.slice(0);
      });
  }

}
