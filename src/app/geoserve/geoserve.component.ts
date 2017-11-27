import { Component, OnInit } from '@angular/core';

const GEOSERVE_PLACES_ENDPOINT: string = 'https://earthquake.usgs.gov/ws/geoserve/places.json';

@Component({
  selector: 'app-geoserve',
  templateUrl: './geoserve.component.html',
  styleUrls: ['./geoserve.component.css']
})
export class GeoserveComponent implements OnInit {
  places: object[] = [];

  constructor() { }

  ngOnInit() {
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
        this.places = json.event.features;
      });
  }

  formattedAzimuth (place) {
    let fullwind = 22.5
    let directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE',
      'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW', 'N']
    let azimuth = place.properties.azimuth

    // if direction is already in compass points
    if (directions.indexOf(azimuth) > -1) {
      return azimuth
    }

    return directions[(Math.round((azimuth % 360) / fullwind))]
  }

  formattedDistance (place) {
    return place.properties.distance + ' km'
  }


}
