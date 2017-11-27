import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GeoserveComponent } from './geoserve/geoserve.component';
import { PlaceSearchComponent } from './place-search/place-search.component';
import { PlaceItemComponent } from './place-item/place-item.component';


@NgModule({
  declarations: [
    AppComponent,
    GeoserveComponent,
    PlaceSearchComponent,
    PlaceItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
