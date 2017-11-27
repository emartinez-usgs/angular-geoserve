import { Component, OnInit, Input } from '@angular/core';

import { Place } from '../place';

@Component({
  selector: 'app-place-item',
  templateUrl: './place-item.component.html',
  styleUrls: ['./place-item.component.css']
})
export class PlaceItemComponent implements OnInit {
  @Input() place: Place;

  constructor () { }

  ngOnInit () { }

  formattedAzimuth () {
    let fullwind = 22.5
    let directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE',
      'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW', 'N']
    let azimuth = this.place.properties.azimuth

    // if direction is already in compass points
    if (directions.indexOf(azimuth) > -1) {
      return azimuth
    }

    return directions[(Math.round((azimuth % 360) / fullwind))]
  }

  formattedDistance () {
    return this.place.properties.distance + ' km'
  }
}
