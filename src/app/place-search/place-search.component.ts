import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-place-search',
  templateUrl: './place-search.component.html',
  styleUrls: ['./place-search.component.css']
})
export class PlaceSearchComponent implements OnInit {
  @Output() search: EventEmitter<any> = new EventEmitter<any>();

  constructor () { }

  ngOnInit () { }

  handleUpdateLocationClick (latitude: string, longitude: string) {
    this.search.emit({
      latitude: +latitude,
      longitude: +longitude
    });
  }
}
