import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GeoserveComponent } from './geoserve/geoserve.component';
import { PlaceSearchComponent } from './place-search/place-search.component';


@NgModule({
  declarations: [
    AppComponent,
    GeoserveComponent,
    PlaceSearchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
